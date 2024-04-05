import { User } from "@/types"
import ApiClient from "./client"

let client = new ApiClient('host').client

export const enableHosting = async (userId: string): Promise<User> => {
    const response = await client.put(`/enable-hosting`, {userId})
    return response.data.data
}

export const getAccountLink = async (userId: string): Promise<{url: string}> => {
    const response = await client.get(`/account-link/${userId}`)
    return response.data.data
}