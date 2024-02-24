import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { AddApartmentUnitValidation, AddParkingSpotValidation, CreateCommunityMemberValidation, LoginValidation, OnboardBuildingValidation, OnboardManagementValidation, PasswordRecoveryValidation, SSOValidation, SignUpValidation } from '../validation'
import { onboardBuilding, onboardManagement, preSignUp } from '@/api/management'
import appwriteClient from '@/api/appwrite'
import { activateAllCommunityMembers, addApartmentUnit, addCommunityMember, addParkingSpot, getApartmentUnits, getParkingSpot, getParkingSpots, updateCommunityMember, uploadCommunityMembers } from '@/api/building'
import { CommunityMembers } from '@/types'
import { toast } from 'sonner'

export const usePreSignUp = () => {
    return useMutation({
        mutationFn: (dto: z.infer<typeof SignUpValidation>) => preSignUp(dto)
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
            return Promise.all([appwriteClient.resetPassword(dto.password, dto.oldPassword.length ? dto.oldPassword : undefined), onboardManagement(dto)])
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
export const useActivateAllCommunityMembers = () => {
    return useMutation({
        mutationFn: (buildingId: string) => {
            return activateAllCommunityMembers(buildingId)
        }
    })
}

// update a community member
export const useUpdateCommunityMember = () => {
    return useMutation({
        mutationFn: ({buildingId, memberId, member}:{buildingId: string, memberId: string, member: Partial<CommunityMembers>}) => {
            return updateCommunityMember(buildingId, memberId, member)
        }
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

export const useGetApartmentUnits = (buildingId?: string) => {
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
        queryFn: () => getApartmentUnits(buildingId),
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

export const useGetParkingSpots = (buildingId?: string, queries?: string) => {
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
        })
    }
    return useQuery({
        queryKey: ['parking-spot', buildingId, spotId],
        queryFn: () => getParkingSpot(buildingId, spotId),
        enabled: !!spotId && !!buildingId
    })
}