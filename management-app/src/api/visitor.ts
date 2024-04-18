import { ParkingSpot, Subscription } from "@/types"
import ApiClient from "./client"
import { z } from "zod"
import { UpdateSubscriptionValidation } from "@/lib/validation"

let client = new ApiClient('visitor').client

export const discover = async (
    queriesDto?: {
        state?: 'occupied' | 'empty'
        page?: number,
        pageSize?: number
        userId?: string
        phone?: string
    }
): Promise<{parkingSpots: ParkingSpot[], numOfSpots: number}> => {
    const queries = queriesDto && Object.entries(queriesDto).map(([key, value]) => `${key}=${value}`).join('&')
    const {data} = await client.get(`/discover?${queries}`)
    return data.data as {parkingSpots: ParkingSpot[], numOfSpots: number}
}

export const getSingleDiscoverParkingSpot = async (spotId: string): Promise<ParkingSpot> => {
    const {data} = await client.get(`/discover/spot/${spotId}`)
    return data.data
}

export const getSubscriptions = async (userId: string): Promise<Subscription[]> => {
    const {data} = await client.get(`/subscriptions/${userId}`)
    return data.data
}

export const getSubscription = async (subscriptionId: string): Promise<Subscription> => {
    const {data} = await client.get(`/subscription/${subscriptionId}`)
    return data.data
}

export const updateSubscription = async (subscriptionId: string, dto: z.infer<typeof UpdateSubscriptionValidation>) => {
    const {data} = await client.put(`/subscription/${subscriptionId}`, dto)
    return data
}