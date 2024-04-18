import ApiClient from "./client"
import { z } from "zod"
import { SubscribeToParkingSpotValidation } from "@/lib/validation"

let client = new ApiClient('payment').client


export const subscribeToParkingSpot = async (
    userId: string, 
    parkingSpotId: string, 
    dto: z.infer<typeof SubscribeToParkingSpotValidation>
): Promise<{url: string}> => {
    const {noOfHours, ...restDto} = dto
    const {data} = await client.post(`/subscribe-to-parking`, {userId, parkingSpotId, noOfHours: noOfHours ? parseFloat(noOfHours.trim()) : undefined, ...restDto})
    return data.data
}

export const cancelSubscription = async (parkingSpotId: string): Promise<{message: string}> => {
    const {data} = await client.put(`/cancel-subscription/${parkingSpotId}`)
    return data
}