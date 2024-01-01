import { Client, Account} from "appwrite";

export class AppwriteService extends Client {
    private static instance: AppwriteService;
    account: Account
    private constructor() {
        super()
        this
            .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID) // Your project ID
        this.account = new Account(this)
    }

    public static getInstance(): AppwriteService {
        if (!AppwriteService.instance) {
            AppwriteService.instance = new AppwriteService();
        }
        return AppwriteService.instance;
    }

    async resetPassword(password: string, oldPassword: string | undefined,) {
        await this.account.updatePassword(password, oldPassword)
    }
    async login(email: string, password: string,) {
        await this.account.createEmailSession(email, password)
    }
    async startPasswordRecovery(email: string,) {
        await this.account.createRecovery(email, `${import.meta.env.VITE_APP_URL}/password-recovery`)
    }
    async finishPasswordRecovery(userId: string, secret: string, password: string) {
        await this.account.updateRecovery(userId, secret, password, password)
    }
}

const appwriteClient = AppwriteService.getInstance();
export default appwriteClient