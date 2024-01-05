import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/exceptions/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { IResponseData } from 'src/response';

@Injectable()
export class VerificationService {

    constructor(
        private prisma: PrismaService, 
        private errorService: ErrorService,
    ) {}

    async generateLink(emailOrPhone: string) {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    OR: [
                        {email: emailOrPhone},
                        {phone_number: emailOrPhone}
                    ]
                },
            })
            const link = `https://inquiry.withpersona.com/verify?inquiry-template-id=${process.env.PERSONA_TEMPLATE_ID}&environment-id=${process.env.PERSONA_ENV_ID}&reference-id=${user.id}`;
            return new IResponseData(
                `verification link generated successfully`,
                link
            ).json;
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }

    async updateVerification(body: any) {
        try {
            const status: 'completed' | 'failed' = body.data.attributes.payload.data.attributes.status;
            const userId = body.data.attributes.payload.data.attributes.reference_id;
            await this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    verification_status: status
                }
            })
            return
        } catch (error) {
            console.error(error);
            throw this.errorService.handleException(error);
        }
    }
}
