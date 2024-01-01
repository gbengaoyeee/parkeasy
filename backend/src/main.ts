import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      ...process.env.CORS_ALLOW.split(',').map((origin) => origin.trim()),
    ],
  });
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true,}))
  await app.listen(5553);
}
bootstrap();
