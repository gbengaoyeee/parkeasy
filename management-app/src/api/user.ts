import { VisitorSignUpValidation } from "@/lib/validation"
import ApiClient from "./client"
import { z } from "zod"

let client = new ApiClient('user').client

export const getUser = async (email: string) => {
    const response = await client.get(`/email/${email}`)
    return response.data.data
}

export const updateUser = async (userId: string, userRoles: string[], dto: z.infer<typeof VisitorSignUpValidation>) => {
    const data = {...dto, createStripeCustomer: true, userRoles}
    const response = await client.put(`/${userId}`, data)
    return response.data
}

export const signUpVisitor = async (dto: z.infer<typeof VisitorSignUpValidation>) => {
    const data = {...dto, createStripeCustomer: true, userRoles: ['visitor']}
    const response = await client.post('/', data)
    return response.data
}