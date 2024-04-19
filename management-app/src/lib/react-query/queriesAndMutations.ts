import { useQuery, useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { AddApartmentUnitValidation, AddParkingSpotValidation, CreateCommunityMemberValidation, LoginValidation, OnboardBuildingValidation, OnboardManagementValidation, PasswordRecoveryValidation, SSOValidation, SignUpValidation, SubscribeToParkingSpotValidation, UpdateSubscriptionValidation, VisitorSignUpValidation } from '../validation'
import { getManagementByEmail, onboardBuilding, onboardManagement, preSignUp } from '@/api/management'
import appwriteClient from '@/api/appwrite'
import { activateAllCommunityMembers, addApartmentUnit, addCommunityMember, addParkingSpot, deleteCommunityMember, getApartmentUnits, getBuilding, getCommunityMember, getParkingSpot, getParkingSpots, getSubscriptions as getHostSubscriptions, toggleMemberStatus, updateCommunityMember, updateParkingSpot, uploadCommunityMembers, toggleEnableDeposit } from '@/api/building'
import { getUser, signUpVisitor, updateUser } from '@/api/user'
import { enableHosting, getAccountLink } from '@/api/host'
import { discover, getSingleDiscoverParkingSpot, getSubscription as getVisitorSubscription, getSubscriptions as getVisitorSubscriptions, updateSubscription } from '@/api/visitor'
import { cancelSubscription, subscribeToParkingSpot } from '@/api/payment'

export const useGetUser = (email?: string) => {
    if(!email) {
        return useQuery({
            queryKey: ['user'],
            queryFn: () => {
                throw new Error('email is required')
            },
        })
    }
    return useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(email)
    })
}
export const usePreSignUp = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof SignUpValidation>) => preSignUp(dto)
    })
}

export const useSignUpVisitor = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof VisitorSignUpValidation>) => signUpVisitor(dto)
    })
}

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: (
            {dto, userId, userRoles}: {
                dto: z.infer<typeof VisitorSignUpValidation>,
                userId: string,
                userRoles: string[]
            }
        ) => updateUser(userId, userRoles, dto)
    })
}

export const useGetManagement = (email: string) => {
    return useQuery({
        queryKey: ['management'],
        queryFn: () => getManagementByEmail(email)
    })
}
export const useLoginByEmail = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof LoginValidation>) => appwriteClient.login(dto.email, dto.password)
    })
}

export const useStartPasswordRecovery = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof SSOValidation>) => appwriteClient.startPasswordRecovery(dto.email)
    })
}
export const useFinishPasswordRecovery = (userId: string, secret: string) => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof PasswordRecoveryValidation>) => appwriteClient.finishPasswordRecovery(userId, secret, dto.password)
    })
}

export const useSubmitManagementOnboard = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof OnboardManagementValidation>) => {
            return Promise.all([
                // appwriteClient.resetPassword(dto.password, dto.oldPassword.length ? dto.oldPassword : undefined), 
                onboardManagement(dto)])
        }
    })
}
export const useSubmitBuildingOnboard = (email: string) => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof OnboardBuildingValidation>) => {
            return onboardBuilding(email, dto)
        }
    })
}
export const useUploadCommunityMembers = () => {
    return useMutation({
        mutationFn: ({buildingId, file}:{buildingId: string, file: FormData}) => {
            return uploadCommunityMembers(buildingId, file)
        }
    })
}

export const useGetBuilding = (buildingId?: string) => {
    if(!buildingId) {
        return useQuery({
            queryKey: ['building'],
            queryFn: () => {
                throw new Error('buildingId is required')
            },
        })
    }
    return useQuery({
        queryKey: ['building', buildingId],
        queryFn: () => getBuilding(buildingId),
        enabled: !!buildingId
    })
}
export const useActivateAllCommunityMembers = () => {
    return useMutation({
        mutationFn: (buildingId: string) => {
            return activateAllCommunityMembers(buildingId)
        }
    })
}

export const useToggleCommunityMemberStatus = () => {
    return useMutation({
        mutationFn: ({buildingId, memberId}:{buildingId: string, memberId: string}) => {
            return toggleMemberStatus(buildingId, memberId)
        }
    })
}

export const useDeleteCommunityMember = () => {
    return useMutation({
        mutationFn: ({buildingId, memberId}:{buildingId: string, memberId: string}) => {
            return deleteCommunityMember(buildingId, memberId)
        }
    })
}

// update a community member
export const useUpdateCommunityMember = () => {
    return useMutation({
        mutationFn: ({buildingId, memberId, member}:{buildingId: string, memberId: string, member: Partial<z.infer<typeof CreateCommunityMemberValidation>>}) => {
            return updateCommunityMember(buildingId, memberId, member)
        }
    })
}

export const useGetCommunityMember = (buildingId?: string, memberId?: string) => {
    if(!buildingId || !memberId) {
        return useQuery({
            queryKey: ['community-member'],
            queryFn: () => {
                throw new Error('buildingId and memberId are required')
            },
        })
    }
    return useQuery({
        queryKey: ['community-member', buildingId, memberId],
        queryFn: () => getCommunityMember(buildingId, memberId),
        enabled: !!memberId && !!buildingId
    })
}

export const useAddCommunityMember = () => {
    return useMutation({
        mutationFn: ({buildingId, member}:{buildingId: string, member: z.infer<typeof CreateCommunityMemberValidation>}) => {
            return addCommunityMember(buildingId, member)
        }
    })
}

export const useAddApartmentUnit = () => {
    return useMutation({
        mutationFn: ({buildingId, dto}:{buildingId: string, dto: z.infer<typeof AddApartmentUnitValidation>}) => {
            return addApartmentUnit(buildingId, dto)
        }
    })
}

export const useGetApartmentUnits = (
    buildingId?: string,
    queries?: {
        state?: 'occupied' | 'empty'
    }
) => {
    if(!buildingId) {
        return useQuery({
            queryKey: ['apartment-units'],
            queryFn: () => {
                throw new Error('buildingId is required')
            },
        })
    }
    return useQuery({                   
        queryKey: ['apartment-units', buildingId],
        queryFn: () => getApartmentUnits(buildingId, queries),
        enabled: !!buildingId
    })
}

export const useAddParkingSpot = () => {
    return useMutation({
        mutationFn: ({buildingId, dto}:{buildingId: string, dto: z.infer<typeof AddParkingSpotValidation>}) => {
            return addParkingSpot(buildingId, dto)
        }
    })
}

export const useUpdateParkingSpot = () => {
    return useMutation({
        mutationFn: ({buildingId, spotId, dto}:{buildingId: string, spotId: string, dto: z.infer<typeof AddParkingSpotValidation>}) => {
            return updateParkingSpot(buildingId, spotId, dto)
        }
    })
}

export const useToggleEnableDeposit = () => {
    return useMutation({
        mutationFn: ({buildingId, spotId}:{buildingId: string, spotId: string}) => {
            return toggleEnableDeposit(buildingId, spotId)
        }
    })
}

export const useGetParkingSpots = (
    buildingId?: string, 
    queries?: {
        state?: 'occupied' | 'empty'
        page?: number,
        pageSize?: number
        userId?: string
        phone?: string
    }
) => {
    if(!buildingId) {
        return useQuery({
            queryKey: ['parking-spots'],
            queryFn: () => {
                throw new Error('buildingId is required')
            },
        })
    }
    return useQuery({
        queryKey: ['parking-spots', buildingId],
        queryFn: () => getParkingSpots(buildingId, queries),
        enabled: !!buildingId
    })
}

export const useGetParkingSpot = (buildingId?: string, spotId?: string) => {
    if(!buildingId || !spotId) {
        return useQuery({
            queryKey: ['parking-spot'],
            queryFn: () => {
                throw new Error('buildingId and spotId are required')
            },
            refetchOnMount: false
        })
    }
    return useQuery({
        queryKey: ['parking-spot', buildingId, spotId],
        queryFn: () => getParkingSpot(buildingId, spotId),
        enabled: !!spotId && !!buildingId
    })
}

export const useEnableHosting = () => {
    return useMutation({
        mutationFn: (userId: string) => enableHosting(userId)
    })
}

export const useGetAccountLink = (userId: string) => {
    return useQuery({
        queryKey: ['account-link'],
        queryFn: () => getAccountLink(userId),
        retry: 2,
        enabled: false
    })
}

export const useDiscover = (
    queries?: {
        state?: 'occupied' | 'empty'
        page?: number,
        pageSize?: number
        userId?: string
        phone?: string
    }
) => {
    return useQuery({
        queryKey: ['discover'],
        queryFn: () => discover(queries)
    })
}

export const useGetSingleDiscoverParkingSpot = (spotId?: string) => {
    if(!spotId) {
        return useQuery({
            queryKey: ['discover-spot'],
            queryFn: () => {
                throw new Error('spotId are required')
            },
        })
    }
    return useQuery({
        queryKey: ['discover-spot'],
        queryFn: () => getSingleDiscoverParkingSpot(spotId)
    })
}

export const useSubscribeToSpot = () => {
    return useMutation({
        mutationFn: ({userId, parkingSpotId, dto}:{userId: string, parkingSpotId: string, dto: z.infer<typeof SubscribeToParkingSpotValidation>}) => subscribeToParkingSpot(userId, parkingSpotId, dto)
    })
}

export const useCancelSubscription = () => {
    return useMutation({
        mutationFn: (parkingSpotId: string) => cancelSubscription(parkingSpotId)
    })
}

export const useGetHostSubscriptions = (buildingId?: string) => {
    if(!buildingId) {
        return useQuery({
            queryKey: ['host-subscriptions'],
            queryFn: () => {
                throw new Error('buildingId is required')
            },
        })
    }
    return useQuery({
        queryKey: ['host-subscriptions'],
        queryFn: () => getHostSubscriptions(buildingId),
        enabled: !!buildingId
    })
}

export const useGetVisitorSubscriptions = (userId?: string) => {
    if(!userId) {
        return useQuery({
            queryKey: ['visitor-subscriptions'],
            queryFn: () => {
                throw new Error('userId is required')
            },
        })
    }
    return useQuery({
        queryKey: ['visitor-subscriptions', userId],
        queryFn: () => getVisitorSubscriptions(userId),
        enabled: !!userId
    })
}

export const useGetVisitorSubscription = (subscriptionId?: string) => {
    if(!subscriptionId) {
        return useQuery({
            queryKey: ['visitor-subscription'],
            queryFn: () => {
                throw new Error('subscriptionId is required')
            },
        })
    }
    return useQuery({
        queryKey: ['visitor-subscription'],
        queryFn: () => getVisitorSubscription(subscriptionId)
    })
}

export const useUpdateSubscription = () => {
    return useMutation({
        mutationFn: ({subscriptionId, dto}:{subscriptionId: string, dto: z.infer<typeof UpdateSubscriptionValidation>}) => updateSubscription(subscriptionId, dto)
    })
}