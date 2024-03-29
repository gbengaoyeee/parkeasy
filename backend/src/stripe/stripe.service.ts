import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createCustomer(email: string, name: string) {
    return await this.stripe.customers.create({
      email,
      name,
    });
  }

  async createAccount(email: string) {
    return await this.stripe.accounts.create({
      type: 'standard',
      email,
    });
  }

  async createAccountLink(account: string) {
    return await this.stripe.accountLinks.create({
      account,
      refresh_url: 'https://www.easyparkway.com',
      return_url: 'https://www.easyparkway.com',
      type: 'account_onboarding',
    });
  }
}
