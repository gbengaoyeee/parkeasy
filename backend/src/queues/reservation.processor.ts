import { Process } from '@nestjs/bull';
import {
    Processor,
    WorkerHost,
    OnWorkerEvent,
    InjectQueue,
  } from '@nestjs/bullmq';
  import { Logger } from '@nestjs/common';
  import { Job } from 'bullmq';
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

    constructor(private prisma: PrismaService,){
        super();
    }
  
    async process(job: Job<any, any, string>): Promise<any> {
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
                }
            })
            break;
        case '24-hour-reminder':
            break;
      
        default:
            break;
      }
  
    //   await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     //   if (fail) {
    //     //     return reject(new Error('Failed'));
    //     //   }
  
    //       return resolve('Success');
    //     }, 5_000);
    //   });
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