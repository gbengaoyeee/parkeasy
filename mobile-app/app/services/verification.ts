import ApiClient from "./client"

let client = new ApiClient('verification').client
export const getVerificationLink = async (phone: string): Promise<string> => {
    const encodedPhone = encodeURIComponent(phone)
    const response = await client.get(`/start/${encodedPhone}`)
    return response.data.data
}
