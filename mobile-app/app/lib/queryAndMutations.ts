import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import appwriteClient from '../services/appwrite'
import { createUser, getUser } from '../services/user'
import { User_Role } from '../../../shared/prisma-client'

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