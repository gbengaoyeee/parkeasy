import { z } from "zod";
import ApiClient from "./client";
import { Listing } from "../types";

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