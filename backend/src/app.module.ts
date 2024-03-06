import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ManagementModule } from './management/management.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppwriteModule } from './appwrite/appwrite.module';
import { ErrorModule } from './exceptions/error.module';
import { BuildingModule } from './building/building.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { VerificationModule } from './verification/verification.module';
import { InvitesModule } from './invites/invites.module';
import { HostModule } from './host/host.module';
import { VisitorModule } from './visitor/visitor.module';
import { PaymentModule } from './payment/payment.module';
import { StripeModule } from './stripe/stripe.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { ApiKeyAuthMiddleware } from './middleware/api-key-auth.middleware';
import { VisitorController } from './visitor/visitor.controller';
import { ManagementController } from './management/management.controller';
import { UserController } from './user/user.controller';
import { BuildingController } from './building/building.controller';
import { VerificationController } from './verification/verification.controller';
import { HostController } from './host/host.controller';
import { PaymentController } from './payment/payment.controller';
import { AppController } from './app.controller';

@Module({
  imports: [
    ManagementModule,
    UserModule,
    PrismaModule,
    AppwriteModule,
    ErrorModule,
    BuildingModule,
    QrCodeModule,
    VerificationModule,
    InvitesModule,
    HostModule,
    VisitorModule,
    PaymentModule,
    StripeModule,
    WebhooksModule,
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ApiKeyAuthMiddleware)
    .forRoutes(
      ManagementController,
      UserController,
      BuildingController,
      VerificationController,
      HostController,
      VisitorController,
      PaymentController,
    ) // Apply to all routes
  }
}
