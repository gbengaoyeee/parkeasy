import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Prisma } from '../../../shared/prisma-client';

@Injectable()
export class ErrorService {
  private readonly logger = new Logger(ErrorService.name);

  handleException(error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Handle Prisma errors based on their specific codes
      this.logger.error('Unhandled PrismaClientKnownRequestError', error);
      switch (error.code) {
        case 'P2002': // Unique constraint violation
          return new BadRequestException('A record with the provided value already exists.');
        // Add cases for other error codes as needed
        case 'P2025': // Record not found
          return new NotFoundException('Record not found.');
        default:
          return new BadRequestException(`An unexpected database error occurred: ${error.message}`,);
      }
    }
    // Handle non-Prisma errors or return a default error message
    return new BadRequestException(
      error instanceof Error ? error.message : 'An unexpected error occurred.',
    );
  }
}
