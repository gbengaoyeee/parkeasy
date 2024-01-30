import { z } from "zod";
import ApiClient from "./client";
import { Listing } from "../types";

let client = new ApiClient('visitor').client

export const getVisitorListings = async (lat?: number, lng?: number) => {
    const response = await client.get(`/listings?lat=${lat}&lng=${lng}`)
    return response.data.data
}