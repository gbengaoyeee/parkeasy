import { z } from "zod";
import ApiClient from "./client";
import { AddParkingValidation } from "../lib/validation";

let client = new ApiClient('building').client

export const addParkingSpot = async (userId: string, dto: z.infer<typeof AddParkingValidation>) => {
    const { buildingId, spotLevel, ...rest } = dto
    const response = await client.post(`/parking-spot/${dto.buildingId}`, { userId, spotLevel: parseInt(spotLevel), ...rest })
    return response.data
}