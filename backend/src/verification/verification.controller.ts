import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
    constructor(private service: VerificationService){}

    @Get('/start/:emailOrPhone')
    async generateLink(@Param('emailOrPhone') emailOrPhone: string) {
        return await this.service.generateLink(emailOrPhone)
    }

    // webhook to catch verification stages
    @Post('/update')
    async updateVerification(@Body() body: any) {
        return await this.service.updateVerification(body)
    }
}
