import { z } from "zod";
import ApiClient from "./client";
import { Listing, Reservation } from "../types";

let client = new ApiClient('visitor').client

interface GetListingsParams {
    lat?: number
    lng?: number
    startDate?: number
    endDate?: number
    visitorId?: string
}
export const getVisitorListings = async (params: Partial<GetListingsParams> = {}) => {
    const { lat, lng, startDate, endDate, visitorId } = params
    let query = "/listings?"
    if(visitorId) {
        query += `visitorId=${visitorId}&`
    }
    if (lat && lng) {
        query += `lat=${lat}&lng=${lng}&`
    }
    if (startDate && endDate) {
        query += `startDate=${startDate}&endDate=${endDate}&`
    }
    const response = await client.get(query)
    return response.data.data
}

export interface CreateReservationParams {
    listingId: string
    visitorId: string
    hostId: string
    parkingSpotId: string
    totalPrice: number
    totalFees: number
    paymentIntentId: string
    startDate: number
    endDate: number
    status?: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}
export const createReservation = async (dto: CreateReservationParams): Promise<Reservation> => {
    const response = await client.post(`/reservation`, dto)
    return response.data.data
}

export const updateReservation = async (reservationId: string, dto: Partial<CreateReservationParams>): Promise<Reservation> => {
    const response = await client.put(`/reservation/${reservationId}`, dto)
    return response.data.data
}

export const deleteReservation = async (reservationId: string) => {
    const response = await client.delete(`/reservation/${reservationId}`)
    return response.data.data
}