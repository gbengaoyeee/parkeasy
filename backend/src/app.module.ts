import { Module } from '@nestjs/common';
import { ManagementModule } from './management/management.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppwriteModule } from './appwrite/appwrite.module';
import { ErrorModule } from './exceptions/error.module';
import { BuildingModule } from './building/building.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { VerificationModule } from './verification/verification.module';
import { InvitesModule } from './invites/invites.module';

@Module({
  imports: [ManagementModule, UserModule, PrismaModule, AppwriteModule, ErrorModule, BuildingModule, QrCodeModule, VerificationModule, InvitesModule,],
})
export class AppModule {}
