import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { z } from 'zod'
import { AddApartmentUnitValidation, CreateCommunityMemberValidation, LoginValidation, OnboardBuildingValidation, OnboardManagementValidation, PasswordRecoveryValidation, SSOValidation, SignUpValidation } from '../validation'
import { onboardBuilding, onboardManagement, preSignUp } from '@/api/management'
import appwriteClient from '@/api/appwrite'
import { activateAllCommunityMembers, addApartmentUnit, addCommunityMember, updateCommunityMember, uploadCommunityMembers } from '@/api/building'
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
        mutationFn: ({buildingId, unit}:{buildingId: string, unit: z.infer<typeof AddApartmentUnitValidation>}) => {
            return addApartmentUnit(buildingId, unit)
            .catch((error) => {
                toast.error(error.response.data.message);
            })
        }
    })
}
