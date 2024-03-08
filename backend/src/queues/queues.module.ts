import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import {
  TEST_QUEUE_NAME,
  TestProcessor,
  InjectTestQueue,
} from './test.processor';
import { BasicAuthMiddleware } from './basic-auth.middleware';
import { RESERVATION_QUEUE_NAME, InjectReservationQueue, ReservationProcessor } from './reservation.processor';

@Module({})
export class QueuesModule implements NestModule {
  static register(): DynamicModule {
    const testQueue = BullModule.registerQueue({
      name: TEST_QUEUE_NAME,
    });
    const reservationQueue = BullModule.registerQueue({
      name: RESERVATION_QUEUE_NAME,
    });

    if (!testQueue.providers || !testQueue.exports) {
      throw new Error('Unable to build queue');
    }
    if (!reservationQueue.providers || !reservationQueue.exports) {
      throw new Error('Unable to build queue');
    }

    return {
      module: QueuesModule,
      imports: [
        BullModule.forRoot({
          connection: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
            username: process.env.REDIS_USER,
            password: process.env.REDIS_PASSWORD
          },
          defaultJobOptions: {
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 1000,
            },
          },
        }),
        testQueue,
        reservationQueue,
      ],
      providers: [TestProcessor, ...testQueue.providers, ReservationProcessor, ...reservationQueue.providers],
      exports: [...testQueue.exports, ...reservationQueue.exports],
    };
  }

  constructor(
    @InjectTestQueue() private readonly testQueue: Queue,
    @InjectReservationQueue() private readonly reservationQueue: Queue
  ) {}

  configure(consumer: MiddlewareConsumer) {
    const serverAdapter = new ExpressAdapter();
    serverAdapter.setBasePath('/queues');

    createBullBoard({
      queues: [new BullMQAdapter(this.testQueue), new BullMQAdapter(this.reservationQueue)],
      serverAdapter,
    });

    consumer
      .apply(BasicAuthMiddleware, serverAdapter.getRouter())
      .forRoutes('/queues');
  }
}