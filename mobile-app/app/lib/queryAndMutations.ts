import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import appwriteClient from '../services/appwrite'

export const useStartPhoneVerification = () => {
    return useMutation({
        mutationFn: (phoneNumber: string) => appwriteClient.startPhoneVerification(phoneNumber),
    })
}
export const useFinishPhoneVerification = () => {
    return useMutation({
        mutationFn: ({otpcode, sessionId}: {otpcode: string, sessionId: string}) => appwriteClient.updatePhoneSession(sessionId, otpcode),
    })
}