import { Parking_Spot_Type, User_Role } from "@/app/types";
import { z } from "zod";

export const AddParkingValidation = z.object({
    buildingId: z.string().min(1, 'Please select a building'),
    spotNumber: z.string().min(1, 'Please enter spot number'),
    spotLevel: z.string().min(1, 'Please enter floor level').regex(/^\d+$/, 'Only numbers are allowed'),
    spotType: z.nativeEnum(Parking_Spot_Type).refine((val) => ['regular', 'electric'].includes(val), {
        message: 'Please select a spot type',
    }),
    parkingInstructions: z.string().optional(),
});

export const UpdateUserValidation = z.object({
    firstName: z.string().min(2, 'Please enter your first name'),
    lastName: z.string().min(2, 'Please enter your last name'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().min(1, 'Please enter your phone number').optional(),
    userRoles: z.array(z.nativeEnum(User_Role)).optional(),
})