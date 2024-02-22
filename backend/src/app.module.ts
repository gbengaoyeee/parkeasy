import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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

@Module({
  imports: [ManagementModule, UserModule, PrismaModule, AppwriteModule, ErrorModule, BuildingModule, QrCodeModule, VerificationModule, InvitesModule, HostModule, VisitorModule, PaymentModule, StripeModule, WebhooksModule,],
})
export class AppModule  {}
