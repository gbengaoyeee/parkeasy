import ApiClient from "./client";

let client = new ApiClient('payment').client

export const createPaymentIntent = async (): Promise<{client_secret: string}> => {
    const response = await client.post(`/intent`,)
    return response.data.data as {client_secret: string}
}