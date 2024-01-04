import { Client, Account, ID} from "appwrite";
// @ts-ignore
import {APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID} from '@env'

export class AppwriteService extends Client {
    private static instance: AppwriteService;
    account: Account
    private constructor() {
        super()
        this
            .setEndpoint(APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(APPWRITE_PROJECT_ID) // Your project ID
        this.account = new Account(this)
    }

    public static getInstance(): AppwriteService {
        if (!AppwriteService.instance) {
            AppwriteService.instance = new AppwriteService();
        }
        return AppwriteService.instance;
    }

    private encodeEmail(str: string): string {
        let encoded = btoa(str);
        // Replace '+' with '-', '/' with '_', and remove '='
        return 'p_easy_' + encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    };


    
    private decodeHash(hash: string): string {
        let encoded = hash.slice('p_easy_'.length);
        // Replace '-' with '+' and '_' with '/'
        encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
        // Pad the string with '=' to make it Base64 valid
        while (encoded.length % 4) {
            encoded += '=';
        }
        return atob(encoded);
    };

    async resetPassword(password: string, oldPassword: string | undefined,) {
        await this.account.updatePassword(password, oldPassword)
    }
    async login(email: string, password: string,) {
        await this.account.createEmailSession(email, password)
    }
    async finishPasswordRecovery(userId: string, secret: string, password: string) {
        await this.account.updateRecovery(userId, secret, password, password)
    }
    async startPhoneVerification(phoneNumber: string) {
        return await this.account.createPhoneSession(ID.unique(), phoneNumber)
    }

    async updatePhoneSession(sessionId: string, otpcode: string) {
        return await this.account.updatePhoneSession(sessionId, otpcode)
    }
}

const appwriteClient = AppwriteService.getInstance();
export default appwriteClient