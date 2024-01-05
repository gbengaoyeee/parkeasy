import axios from "axios";
import { User_Role } from "../../../shared/prisma-client"
import ApiClient from "./client"
import { User } from "../types";

let client = new ApiClient('user').client

export const createUser = async (phone: string, userRoles: User_Role[]): Promise<User> => {
    const response = await client.post(``, { phone, userRoles })
    return response.data.data as User
}

export const getUser = async (phone: string, role: User_Role): Promise<User|null> => {
    const encodedPhone = encodeURIComponent(phone)
    const response = await client.get(`/phone/?phone=${encodedPhone}&role=${role}`)
    return response.data.data as User | null
}


