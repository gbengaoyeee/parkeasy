import { Injectable } from '@nestjs/common';
import { Account, Client, Query, Users } from 'node-appwrite';

@Injectable()
export class AppwriteService extends Client {
  users: Users;
  account: Account;
  constructor() {
    super();
    this.setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
      .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
      .setKey(process.env.APPWRITE_SECRET_KEY);
    this.users = new Users(this);
    this.account = new Account(this);
  }

  async getUserByEmail(email: string) {
    const users = await this.users.list([Query.equal('email', email)]);
    return users.users.find((user) => user.email.toLowerCase().toLowerCase().toLowerCase().toLowerCase() === email.toLowerCase());
  }

  async createUser(email: string) {
    const newId = this.encodeEmail(email);
    return await this.users.create(newId, email);
  }

  private encodeEmail(str: string): string {
    let encoded = btoa(str);
    // Replace '+' with '-', '/' with '_', and remove '='
    return 'p_easy_' + encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  }

  private decodeHash(hash: string): string {
    let encoded = hash.slice('p_easy_'.length);
    // Replace '-' with '+' and '_' with '/'
    encoded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    // Pad the string with '=' to make it Base64 valid
    while (encoded.length % 4) {
      encoded += '=';
    }
    return atob(encoded);
  }
}
