import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

interface Product {
  name?: string;
  price?: {price_id: string, price_in_cents: number};
  currency?: string;
}
@Injectable()
export class StripeService {
  stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createCustomer(email: string, name: string, phone: string) {
    return await this.stripe.customers.create({
      email,
      name,
      phone,
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
      refresh_url: 'https://host.easyparkway.com',
      return_url: 'https://host.easyparkway.com',
      type: 'account_onboarding',
    });
  }

  async createProduct(productName: string, price_in_cents: number, currency: string) {
    return await this.stripe.products.create({
      name: productName,
      unit_label: productName,

      default_price_data: {
        unit_amount: price_in_cents,
        currency,
        recurring: {
          interval: 'month'
        }
      }
    })
  }

  async getPrice(priceId: string) {
    return await this.stripe.prices.retrieve(priceId)
  }

  async createPrice(price_in_cents: number, currency: string, productId: string) {
    return await this.stripe.prices.create({
      unit_amount: price_in_cents,
      currency,
      recurring: {
        interval: 'month'
      },
      product: productId
    })
  }
  
  async updateProduct(productId: string, product: Product) {
    return await this.stripe.products.update(productId, {
      name: product.name,
      default_price: product.price.price_id
    })
  }
}
