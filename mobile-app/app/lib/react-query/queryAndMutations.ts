import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import appwriteClient from '../../services/appwrite'
import { createUser, getUser, updateUser } from '../../services/user'
import { Mobile_Onboard_Status, User_Role } from '../../../../shared/prisma-client'
import { z } from 'zod'
import { AddParkingValidation, CreateParkingListingValidation, UpdateParkingListingValidation, UpdateUserValidation } from '../validation'
import { addParkingSpot } from '@/app/services/building'
import { createParkingListing, getListings, updateListing } from '@/app/services/host'
import { Listing } from '@/app/types'
import useToast from '@/app/hooks/useToast'
import { getVisitorListings } from '@/app/services/visitor'

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
export const useCreateParkingListing = () => {
    return useMutation({
        mutationFn: ({userId, dto}:{userId: string, dto: z.infer<typeof CreateParkingListingValidation> }) => {
            return createParkingListing(userId, dto)
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

export const useGetHostListings = (hostId: string) => {
    const {showToast} = useToast()
    return useQuery({
        queryKey: ['host-listings'],
        queryFn: async (): Promise<Listing[]> => {
            return getListings(hostId)
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return [];
            })
        },
        retry: 3,
        refetchInterval: 30000
    })
}

export const useUpdateListing = () => {
    return useMutation({
        mutationFn: ({listingId, dto}:{listingId: string, dto: z.infer<typeof UpdateParkingListingValidation> }) => {
            return updateListing(listingId, dto)
        }
    })
}

export const useGetVisitorListings = (lat?: number, lng?: number) => {
    const {showToast} = useToast()
    return useQuery({
        queryKey: ['visitor-listings', lat, lng],
        queryFn: async (arg): Promise<Listing[]> => {
            return getVisitorListings(lat, lng)
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return [];
            })
        },
        retry: 3,
        refetchInterval: 30000,
        enabled: false
    })
}