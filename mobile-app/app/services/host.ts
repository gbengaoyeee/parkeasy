import { z } from "zod";
import ApiClient from "./client";
import { CreateParkingListingValidation, UpdateParkingListingValidation } from "../lib/validation";
import { Listing, User } from "../types";

let client = new ApiClient('host').client

export const enableHosting = async (userId: string): Promise<User> => {
    const response = await client.put(`/enable-hosting`, {userId})
    return response.data.data
}

export const getAccountLink = async (userId: string): Promise<{url: string}> => {
    const response = await client.get(`/account-link/${userId}`)
    return response.data.data
}

export const createParkingListing = async (userId: string, dto: z.infer<typeof CreateParkingListingValidation>) => {
    const { price, ...rest } = dto
    const inCents = price * 100
    const response = await client.post(`/listing`, { hostId: userId, price: inCents, ...rest })
    return response.data
}

export const getListings = async (userId: string): Promise<Listing[]> => {
    const response = await client.get(`/listings/${userId}`)
    return response.data.data
}

export const updateListing = async (listingId: string, dto: z.infer<typeof UpdateParkingListingValidation>) => {
    const { price, ...rest } = dto
    const inCents = price * 100
    const response = await client.put(`/listing/${listingId}`, { price: inCents, ...rest })
    return response.data
}