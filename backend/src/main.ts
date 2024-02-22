import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs'
import { json, raw } from 'body-parser';
import { stripeRawBodyMiddleware } from './middleware/stripe-webhook.middleware';


const httpsOptions = {
  key: fs.readFileSync('./secrets/cert.key'),
  cert: fs.readFileSync('./secrets/cert.crt'),
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule,);
  app.enableCors({
    origin: [
      ...process.env.CORS_ALLOW.split(',').map((origin) => origin.trim()),
    ],
  });
  // Only apply raw parser to the Stripe webhook route
  app.use(stripeRawBodyMiddleware())
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true,}))
  await app.listen(5553);
}
bootstrap();
