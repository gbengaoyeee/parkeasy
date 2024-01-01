import { Injectable } from '@nestjs/common';
import { Account, Client, Query, Users } from 'node-appwrite';

@Injectable()
export class AppwriteService extends Client {
    users: Users
    account: Account
    constructor() {
        super()
        this
            .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
            .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
            .setKey(process.env.APPWRITE_SECRET_KEY)
        this.users = new Users(this)
        this.account = new Account(this)
    }

    async getUserByEmail(email: string) {
        const users = await this.users.list([Query.equal('email', email)])
        return users.users.find((user) => user.email === email)
    }
}
