import ApiClient from "./client"

let client = new ApiClient('user').client

export const getUser = async (idOrEmail: string) => {
    const response = await client.get(`/${idOrEmail}`)
    return response.data
}