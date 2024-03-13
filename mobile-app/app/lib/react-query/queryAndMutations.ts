import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import appwriteClient from '../../services/appwrite'
import { createUser, getUser, updateUser } from '../../services/user'
import { Mobile_Onboard_Status, User_Role } from '../../../../shared/prisma-client'
import { z } from 'zod'
import { AddParkingValidation, CreateParkingListingValidation, UpdateParkingListingValidation, UpdateUserValidation } from '../validation'
import { addParkingSpot } from '@/app/services/building'
import { createParkingListing, enableHosting, getAccountLink, getListings, updateListing } from '@/app/services/host'
import { Listing, Reservation } from '@/app/types'
import useToast from '@/app/hooks/useToast'
import { CreateReservationParams, createReservation, deleteReservation, 
    getReservations as getVisitorReservations, 
    getVisitorListings, updateReservation 
} from '@/app/services/visitor'
import { CheckoutDetails, createPaymentIntent, getCheckoutDetails } from '@/app/services/payment'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export const useStartPhoneVerification = () => {
    return useMutation({
        mutationFn: (phoneNumber: string) => appwriteClient.startPhoneVerification(phoneNumber),
    })
}
export const useFinishPhoneVerification = () => {
    return useMutation({
        mutationFn: ({otpcode, confirmResult, phone, userRoles}: {otpcode: string, confirmResult: FirebaseAuthTypes.ConfirmationResult, phone: string, userRoles: User_Role[]}) => {
            console.log('finishing phone verification')
            return confirmResult.confirm(otpcode)
            .then((resp) => {
                return getUser(phone)
            })
        },
    })
}

export const useCreateUser = () => {
    return useMutation({
        mutationFn: ({phone, userRoles}:{phone: string, userRoles: User_Role[]}) => {
            return createUser(phone, userRoles)
        }
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
        mutationFn: ({userId, dto, extra}:{
            userId: string, 
            extra:{mobileOnboardStatus?: Mobile_Onboard_Status, createStripeCustomer: boolean}, 
            dto: z.infer<typeof UpdateUserValidation> 
        }) => {
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

export const useGetVisitorListings = (lat: number, lng: number, startDate: number, endDate: number) => {
    const {showToast} = useToast()
    return useQuery({
        queryKey: ['visitor-listings', lat, lng, startDate, endDate],
        queryFn: async (arg): Promise<Listing[]> => {
            return getVisitorListings({
                lat: lat,
                lng: lng,
                startDate: startDate,
                endDate: endDate
            })
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return [];
            })
        },
        retry: 3,
        refetchInterval: 30000,
        // enabled: false
    })
}
export const useGetCheckoutDetails = (listingId: string, startDate: number, endDate: number) => {
    const {showToast} = useToast()
    return useQuery({
        queryKey: ['checkout-details'],
        queryFn: async (): Promise<CheckoutDetails> => {
            return getCheckoutDetails(listingId, startDate, endDate)
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return error;
            })
        },
        retry: 3,
        enabled: false
    })
}

export const usePaymentIntent = () => {
    return useMutation({
        mutationFn: ({amount, customerId, listingId}:{amount: number, customerId: string, listingId: string}) => {
            return createPaymentIntent(amount, customerId, listingId)
        }
    })
}
export const useEnableHosting = () => {
    return useMutation({
        mutationFn: ({userId}:{userId: string}) => {
            return enableHosting(userId)
        }
    })
}


export const useGetAccountLink = (userId: string) => {
    const {showToast} = useToast()
    return useQuery({
        queryKey: ['account-link'],
        queryFn: async (): Promise<{url: string}> => {
            return getAccountLink(userId)
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return error;
            })
        },
        retry: 3,
        enabled: false
    })
}

export const useCreateReservation = () => {
    return useMutation({
        mutationFn: ({dto}:{ dto: CreateReservationParams }) => {
            return createReservation( dto)
        }
    })
}

export const useUpdateReservation = () => {
    return useMutation({
        mutationFn: ({reservationId, dto}:{ reservationId: string, dto: Partial<CreateReservationParams> }) => {
            return updateReservation(reservationId, dto)
        }
    })
}

export const useDeleteReservation = () => {
    return useMutation({
        mutationFn: (reservationId: string) => {
            return deleteReservation(reservationId)
        }
    })
}

export const useGetVisitorReservations = (visitorId?: string) => {
    const {showToast} = useToast()
    if(!visitorId) {
        throw new Error("visitor is required")
    }
    return useQuery({
        queryKey: ['visitor-reservations'],
        queryFn: async (): Promise<{
            upcomingReservations: Reservation[]
            currentReservations: Reservation[]
            pastReservations: Reservation[]
        }> => {
            return getVisitorReservations(visitorId)
            .catch((error) => {
                console.error(error.response.data.message);
                showToast({ type: "error", message: error.response.data.message });
                return error;
            })
        },
        retry: 3,
        refetchInterval: 90000,
    })
}