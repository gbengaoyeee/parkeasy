import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';
import { stripeRawBodyMiddleware } from './middleware/stripe-webhook.middleware';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

let server: Handler;

const httpsOptions = {
  key: fs.readFileSync('./secrets/cert.key'),
  cert: fs.readFileSync('./secrets/cert.crt'),
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.enableCors({
    origin: [...process.env.CORS_ALLOW.split(',').map((origin) => origin.trim())],
  });
  // Only apply raw parser to the Stripe webhook route
  app.use(stripeRawBodyMiddleware());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (event: any, context: Context, callback: Callback) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback);
};
