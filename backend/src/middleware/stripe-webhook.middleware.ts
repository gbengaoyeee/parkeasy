import { Response } from 'express';
import { json } from 'body-parser';
import { IncomingMessage } from 'http';

export interface RequestWithRawBody extends IncomingMessage {
    rawBody: Buffer;
}
export function stripeRawBodyMiddleware() {
  return json({
    
    verify: (request: RequestWithRawBody, response: Response, buffer: Buffer) => {
        if (request.url.includes('/webhooks/stripe') && Buffer.isBuffer(buffer)) {
            request.rawBody = Buffer.from(buffer);
        }
      return true;
    },
  })
}
 
