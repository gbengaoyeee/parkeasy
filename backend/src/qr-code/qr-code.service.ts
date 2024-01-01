import { HttpService } from '@nestjs/axios';
import { Injectable,  } from '@nestjs/common';
import { IsString } from 'class-validator';
import {map} from 'rxjs'
import { CreateCommunityMemberDto } from 'src/building/dto';
import { User_Roles } from 'src/shared/enums';
import { QRCode_Type } from '../../../shared/prisma-client';

export interface ICreateQRCodeDto {
    name: string
    qr_type: QRCode_Type
    redirectUrl: string
}

@Injectable()
export class QrCodeService {

    private static readonly ATTRIBUTES = {
        "color":"#2595ff",
        "colorDark":"#2595ff",
        "margin":80,
        "isVCard":false,
        "frameText":"BEACONSTAC",
        "logoImage":"https://d1bqobzsowu5wu.cloudfront.net/15406/36caec11f02d460aad0604fa26799c50",
        "logoScale":0.1992,
        "frameColor":"#2595FF",
        "frameStyle":"banner-bottom",
        "logoMargin":10,
        "dataPattern":"square",
        "dataPatternScale":0.5
    }

    constructor(private httpService: HttpService){}

    async getCode(codeId: string) {
        return await this.httpService.axiosRef.get(`/qrcodes/${codeId}`).then(res => res.data)
    }

    async create(dto: ICreateQRCodeDto) {
        let body = {
            name: dto.name,
            qr_type: dto.qr_type === QRCode_Type.static ? 1 : 2,
            fields_data: {
                qr_type: 1,
                url: dto.redirectUrl
            },
            organization: process.env.BEACON_STACK_ORG_ID,
            attributes: QrCodeService.ATTRIBUTES
        }
        return await this.httpService.axiosRef.post(`/qrcodes/`, body).then(res => {
            return res.data
        })
    }

    async downloadQRCode(codeId: string) {
        return await this.httpService.axiosRef.get(`/qrcodes/${codeId}/download/?size=1024&error_correction_level=5&canvas_type=png`).then(res => res.data)
    }
}
