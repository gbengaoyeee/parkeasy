import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvitesService {

    constructor(private prisma: PrismaService) {}

    private generateCode(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }
      
    //   async createUniqueInviteCode() {
    //     let isUnique = false;
    //     let uniqueCode = '';
      
    //     while (!isUnique) {
    //       uniqueCode = this.generateCode(8);
    //       const existingCode = await this.prisma.invite.findUnique({
    //         where: { code: uniqueCode },
    //       });
    //       if (!existingCode) {
    //         isUnique = true;
    //       }
    //     }
      
    //     const invite = await prisma.invite.create({
    //       data: {
    //         code: uniqueCode,
    //       },
    //     });
      
    //     return invite;
    //   }
}
