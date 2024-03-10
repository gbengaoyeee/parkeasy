
import { OnboardBuildingValidation, OnboardManagementValidation, SignUpValidation } from "@/lib/validation";
import { z } from "zod";
import ApiClient from "./client";
import { Management } from "@/types";

let client = new ApiClient('management').client

export const preSignUp = async (dto: z.infer<typeof SignUpValidation>) => {
    const response = await client.post('/pre-signup', dto)
    return response
}

export const getManagementByEmail = async (email: string) => {
    const response = await client.get(`/email/${email}`)
    return response.data
}

export const onboardManagement = async (dto: z.infer<typeof OnboardManagementValidation>) => {
    const {password, confirmPassword, oldPassword, ...restDto} = dto
    const response = await client.post('/onboard-management', {...restDto})
    return response.data
}
export const onboardBuilding = async (email: string, dto: z.infer<typeof OnboardBuildingValidation>) => {
    const {noOfUnits, noOfDeveloperParkingSpots, noOfParkingFloors, noOfParkingSpots, ...restDto} = dto
    const response = await client.post('/onboard-building', {
        email,
        noOfUnits: parseInt(dto.noOfUnits),
        noOfDeveloperParkingSpots: parseInt(dto.noOfDeveloperParkingSpots),
        noOfParkingFloors: parseInt(dto.noOfParkingFloors),
        noOfParkingSpots: parseInt(dto.noOfParkingSpots),
        ...restDto
    })
    return response.data
}

export const getManagement = async (managementId: string, queries: string=''): Promise<Management> => {
    const {data} = await client.get(`/${managementId}?${queries}`)
    return data.data as Management
}
