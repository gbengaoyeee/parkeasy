import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../shared/prisma-client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL
                }
            }
        })
    }
}
