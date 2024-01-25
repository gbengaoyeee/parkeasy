import { PRICE_LIMITS } from "@/app/constants";
import { Listing_Type, Parking_Spot_Type, User_Role } from "@/app/types";
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

export const CreateParkingListingValidation = z.object({
    title: z.string().min(1, 'Please enter a memorable title'),
    description: z.string().min(1, 'Please enter a very good description'),
    buildingId: z.string().min(1, 'Please select a building'),
    parkingId: z.string().min(1, 'Please select a parking spot'),
    price: z.string()
            .min(1, 'Please enter a price')
            .regex(/^\d+(\.\d+)?$/, 'Please enter a valid number for the price')
            .transform((str) => parseFloat(str)),
    type: z.nativeEnum(Listing_Type).refine((val) => ['weekly', 'monthly', 'hourly',].includes(val), {
        message: 'Please select a spot type',
    })
}).refine((data) => {
    // Set the price limit based on the type
    const priceLimit = data.type === 'weekly' ? PRICE_LIMITS.weekly : data.type === 'monthly' ? PRICE_LIMITS.monthly : PRICE_LIMITS.hourly;
    return data.price <= priceLimit;
  }, {
    message: `Price exceeds the maximum limit for the selected type`,
    path: ['price'], // Specify the path of the field this error message is associated with
  });
  
export const UpdateParkingListingValidation = z.object({
    title: z.string().min(1, 'Please enter a memorable title'),
    description: z.string().min(1, 'Please enter a very good description'),
    price: z.string()
            .min(1, 'Please enter a price')
            .regex(/^\d+(\.\d+)?$/, 'Please enter a valid number for the price')
            .transform((str) => parseFloat(str)),
    type: z.nativeEnum(Listing_Type).refine((val) => ['weekly', 'monthly', 'hourly',].includes(val), {
        message: 'Please select a spot type',
    })
}).refine((data) => {
    // Set the price limit based on the type
    const priceLimit = data.type === 'weekly' ? PRICE_LIMITS.weekly : data.type === 'monthly' ? PRICE_LIMITS.monthly : PRICE_LIMITS.hourly;
    return data.price <= priceLimit;
  }, {
    message: `Price exceeds the maximum limit for the selected type`,
    path: ['price'], // Specify the path of the field this error message is associated with
  });