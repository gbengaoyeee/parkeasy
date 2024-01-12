import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { Prisma } from '../../../shared/prisma-client';

@Injectable()
export class ErrorService {
  private readonly logger = new Logger(ErrorService.name);

  handleException(error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle Prisma errors based on their specific codes
      switch (error.code) {
        case 'P2002': // Unique constraint violation
          return new BadRequestException('A record with the provided value already exists.')
        // Add cases for other error codes as needed
        default:
          this.logger.error('Unhandled PrismaClientKnownRequestError', error);
          return new BadRequestException('An unexpected database error occurred.')
      }
    }
    // Handle non-Prisma errors or return a default error message
    return new BadRequestException(error instanceof Error ? error.message : 'An unexpected error occurred.')
  }
}
