import { Process } from '@nestjs/bull';
import {
    Processor,
    WorkerHost,
    OnWorkerEvent,
    InjectQueue,
  } from '@nestjs/bullmq';
  import { Logger } from '@nestjs/common';
  import { Job } from 'bullmq';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
  
  export const RESERVATION_QUEUE_NAME = 'reservation';

  export type ReservationQueueType = 
    '24-hour-reminder' | 'finish'
  
  export const InjectReservationQueue = (): ParameterDecorator =>
    InjectQueue(RESERVATION_QUEUE_NAME);
  
  @Processor(RESERVATION_QUEUE_NAME, {
    concurrency: 3,
  })
  export class ReservationProcessor extends WorkerHost {
    private readonly logger = new Logger(ReservationProcessor.name);

    constructor(
        private prisma: PrismaService,
        private errorService: ErrorService,
    ){
        super();
    }
  
    async process(job: Job<any, any, string>): Promise<any> {

        try {
            const id = job.data.id;
            const type = job.name as ReservationQueueType;
      
            switch (type) {
              case 'finish':
                  this.logger.log(`Added and processing reservation ${id}, for ${type}`);
                  const reservation = await this.prisma.reservation.update({
                      where: {
                          id: id
                      },
                      data: {
                          status: 'completed'
                      },
                      include: {
                          visitor: {
                              select: {
                                  notification_token: true
                              }
                          },
                          host: {
                              select: {
                                  notification_token: true
                              }
                          }
                      }
                  })

                  const visitorMessage = {
                    to: reservation.visitor.notification_token,
                    sound: "default",
                    title: "Reservation Completed",
                    body: "Your reservation has been completed. Hope you enjoyed your visit!",
                  };

                  const hostMessage = {
                    to: reservation.host.notification_token,
                    sound: "default",
                    title: "Reservation Completed",
                    body: "Your visitor has completed their reservation. Thank you!",
                  };
              
                  await fetch("https://exp.host/--/api/v2/push/send", {
                    method: "POST",
                    headers: {
                      host: "exp.host",
                      accept: "application/json",
                      "accept-encoding": "gzip, deflate",
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(visitorMessage),
                  });

                  await fetch("https://exp.host/--/api/v2/push/send", {
                    method: "POST",
                    headers: {
                      host: "exp.host",
                      accept: "application/json",
                      "accept-encoding": "gzip, deflate",
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(hostMessage),
                  });
                  break;
              case '24-hour-reminder':
                  break;
            
              default:
                  break;
            }
        } catch (error) {
            throw this.errorService.handleException(error);
        }
    }
  
    @OnWorkerEvent('active')
    onActive(job: Job) {
      this.logger.log(`Active ${job.id}`);
    }
  
    @OnWorkerEvent('completed')
    onCompleted(job: Job) {
      this.logger.log(`Completed ${job.id}`);
    }
  
    @OnWorkerEvent('failed')
    onFailed(job: Job) {
      this.logger.log(`Failed ${job.id}`);
      // SHOULD SETUP NOTIFICATION USING ZAPIER TO INFORM ME of failure
    }
  }