import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import appwriteClient from '../../services/appwrite'
import { createUser, getUser, updateUser } from '../../services/user'
import { Mobile_Onboard_Status, User_Role } from '../../../../shared/prisma-client'
import { z } from 'zod'
import { AddParkingValidation, UpdateUserValidation } from '../validation'
import { addParkingSpot } from '@/app/services/building'

export const useStartPhoneVerification = () => {
    return useMutation({
        mutationFn: (phoneNumber: string) => appwriteClient.startPhoneVerification(phoneNumber),
    })
}
export const useFinishPhoneVerification = () => {
    return useMutation({
        mutationFn: ({otpcode, sessionId, phone, userRoles}: {otpcode: string, sessionId: string, phone: string, userRoles: User_Role[]}) => {
            console.log('finishing phone verification')
            return appwriteClient.updatePhoneSession(sessionId, otpcode)
            .then((resp) => {
                return getUser(phone, userRoles[0])
            })
            .then((resp) => {
                if(!resp) {
                    return createUser(phone, userRoles)
                }
                return resp
            })
        },
    })
}

export const useAddParkingSpot = () => {
    return useMutation({
        mutationFn: ({userId, dto}:{userId: string, dto: z.infer<typeof AddParkingValidation> }) => {
            return addParkingSpot(userId, dto)
        }
    })
}
export const useUpdateUser = () => {
    return useMutation({
        mutationFn: ({userId, dto, extra}:{userId: string, extra:{mobileOnboardStatus?: Mobile_Onboard_Status}, dto: z.infer<typeof UpdateUserValidation> }) => {
            return updateUser(userId, dto, extra)
        }
    })
}