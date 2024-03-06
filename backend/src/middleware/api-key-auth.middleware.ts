import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ApiKeyAuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
      throw new UnauthorizedException('API key is required');
    }

    const validApiKey = process.env.VALID_API_KEY; // Your valid API key stored in environment variables

    if (apiKey !== validApiKey) {
      throw new UnauthorizedException('Invalid API key');
    }

    next();
  }
}
