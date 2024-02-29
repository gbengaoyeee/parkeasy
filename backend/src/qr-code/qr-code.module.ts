import { Global, Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  providers: [QrCodeService],
  exports: [QrCodeService],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      headers: {
        Authorization: `Token ${process.env.BEACON_STACK_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      baseURL: process.env.BEACON_STACK_BASE_URL,
    }),
  ],
})
export class QrCodeModule {}
