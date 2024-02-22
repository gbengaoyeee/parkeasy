import axios from "axios";
import { Mobile_Onboard_Status, User_Role } from "../../../shared/prisma-client"
import ApiClient from "./client"
import { User } from "../types";
import { z } from "zod";
import { UpdateUserValidation } from "../lib/validation";

let client = new ApiClient('user').client

export const createUser = async (phone: string, userRoles: User_Role[]): Promise<User> => {
    const response = await client.post(``, { phone, userRoles })
    return response.data.data as User
}
export const updateUser = async (userId: string, dto: z.infer<typeof UpdateUserValidation>, extra:{mobileOnboardStatus?: Mobile_Onboard_Status, createStripeCustomer: boolean}): Promise<User> => {
    const response = await client.put(`/${userId}`, {...dto, ...extra})
    return response.data.data as User
}

export const getUser = async (phone: string): Promise<User|null> => {
    const encodedPhone = encodeURIComponent(phone)
    const response = await client.get(`/phone/?phone=${encodedPhone}`)
    return response.data.data as User | null
}


