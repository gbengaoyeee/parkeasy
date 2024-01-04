import axios from "axios";
import { User_Role } from "../../../shared/prisma-client"
import ApiClient from "./client"

let client = new ApiClient('user').client

export const getUser = async (phone: string, role: User_Role) => {
    const encodedPhone = encodeURIComponent(phone)
    const response = await client.get(`/phone/?phone=${encodedPhone}&role=${role}`)
    return response.data.data
}

