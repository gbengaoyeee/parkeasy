import { Listing } from "../types";
import ApiClient from "./client";

let client = new ApiClient('payment').client

export const createPaymentIntent = async (amount: number, customerId: string, listingId: string): Promise<{client_secret: string}> => {
    const response = await client.post(`/intent`, {
        amount,
        customerId: customerId,
        listingId
    })
    return response.data.data as {client_secret: string}
}

export interface CheckoutDetails {
    totalPrice: number
    differenceInDays: number
    totalFees: number
    totalAmount: number,
    listing: Listing
}
export const getCheckoutDetails = async (listingId: string, startDate: number, endDate: number): Promise<CheckoutDetails> => {
    const response = await client.get(`/checkout-details?listingId=${listingId}&startDate=${startDate}&endDate=${endDate}`)
    return response.data.data
}