import { Building, CommunityMembers, ParkingSpot } from "@/types"
import ApiClient from "./client"
import { AddApartmentUnitValidation, CreateCommunityMemberValidation } from "@/lib/validation";
import { z } from "zod";

let client = new ApiClient('building').client

export const getBuilding = async (buildingId: string, queries: string=''): Promise<Building> => {
    const {data} = await client.get(`/?buildingId=${buildingId}&${queries}`)
    return data.data as Building
}
export const uploadCommunityMembers = async (buildingId: string, file: FormData) => {
    const response = await client.post(`/bulk-upload/${buildingId}`, file)
    return response.data
}
export const getCommunityMembers = async (buildingId: string, queries: string=''): Promise<CommunityMembers[]> => {
    const {data} = await client.get(`/community-members/${buildingId}?${queries}`)
    return data.data as CommunityMembers[]
}

export const getCommunityMember = async (buildingId: string, memberId: string): Promise<CommunityMembers> => {
    const {data} = await client.get(`/community-member/${buildingId}/${memberId}`)
    return data.data as CommunityMembers
}

export const addCommunityMember = async (buildingId: string, dto: z.infer<typeof CreateCommunityMemberValidation>) => {
    const response = await client.post(`/community-member/${buildingId}`, dto)
    return response.data
}

export const activateAllCommunityMembers = async (buildingId: string) => {
    const response = await client.post(`/activate-inactive-members/${buildingId}`)
    return response.data
}

//update a community member
export const updateCommunityMember = async (buildingId: string, memberId: string, dto: Partial<CommunityMembers>) => {
    const response = await client.put(`/community-member/${buildingId}/${memberId}`, dto)
    return response.data
}

/**
 * Search community members by name
 * @param buildingId
 * @param name 
 * @returns 
 */
export const searchCommunityMembers = async (buildingId: string, name: string=''): Promise<CommunityMembers[]> => {
    const {data} = await client.get(`/search-community-members/${buildingId}?name=${name}`)
    return data.data as CommunityMembers[]
}


export const getParkingSpots = async (buildingId: string, queries: string=''): Promise<ParkingSpot[]> => {
    const {data} = await client.get(`/parking-spots/${buildingId}?${queries}`)
    return data.data as ParkingSpot[]
}

//search parking spots by spot number
export const searchParkingSpots = async (buildingId: string, spotNumber: string): Promise<ParkingSpot[]> => {
    const {data} = await client.get(`/search-parking-spots/${buildingId}?spotNumber=${spotNumber}`)
    return data.data as ParkingSpot[]
}


export const addApartmentUnit = async (buildingId: string, dto: z.infer<typeof AddApartmentUnitValidation>) => {
    const response = await client.post(`/apartment-unit/${buildingId}`, dto)
    return response.data
}