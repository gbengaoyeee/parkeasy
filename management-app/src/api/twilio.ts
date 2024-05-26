
import ApiClient from "./client";

let client = new ApiClient('user').client

export const startSMSVerification = async (phone: string) => {
    const response = await client.post(`/verify-phone`, {phone})
    return response.data
}

export const verifySMSCode = async (phone: string, code: string) => {
    const response = await client.post(`/complete-phone-verification`, {phone, code})
    return response.data
}