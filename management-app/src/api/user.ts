import ApiClient from "./client"

let client = new ApiClient('user').client

export const getUser = async (email: string) => {
    const response = await client.get(`/email/${email}`)
    console.log(response.data)
    return response.data.data
}