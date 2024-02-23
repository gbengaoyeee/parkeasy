import { z } from "zod";
import { buildingTypes, staffOptions } from "../constants.ts";

const passwordSchema = z.string().min(4, {
  message: "Password must be at least 4 characters long", // Minimum length requirement
})
.regex(/[a-z]/, {
  message: "Password must include a lowercase letter", // Lowercase letter requirement
}).regex(/[A-Z]/, {
  message: "Password must include an uppercase letter", // Uppercase letter requirement
}).regex(/[0-9]/, {
  message: "Password must include a number", // Number requirement
}).regex(/[^A-Za-z0-9]/, {
  message: "Password must include a special character", // Special character requirement
});

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long')
});
export const SSOValidation = z.object({
  email: z.string().email(),
});


export const SignUpValidation = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters long'),
  email: z.string().email(),
  contactNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
});

export const PasswordRecoveryValidation = z.object({
  password: passwordSchema,
  confirmPassword: passwordSchema
}).refine(({password, confirmPassword}) => password === confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // This adds the error to `confirmPassword` field
})


// Define the schema for a single staff member
const staffMemberSchema = z.object({
  //@ts-ignore
  staffRole: z.union([z.enum(Object.keys(staffOptions) as Array<keyof typeof staffOptions>),
    z.literal(''),
    z.undefined()
  ]).optional(),
  staffName: z.string(),
  staffEmail: z.string(),
});

// If you have predefined roles, you could use z.enum([...roles]) instead of z.string()

// Define the schema for the array of staff members
const staffMembersSchema = z.array(staffMemberSchema);

export const OnboardManagementValidation = z.object({
  // password set/reset
  email: z.string().email(),
  oldPassword: z.string(),
  password: passwordSchema,
  confirmPassword: passwordSchema,
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  address: z.string().min(4, 'Please enter a valid address'),
  address2: z.string().optional(),
  lat: z.number(),
  lng: z.number(),
  staffMembers: staffMembersSchema.optional()
}).refine(({password, confirmPassword}) => password === confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"], // This adds the error to `confirmPassword` field
})


// Create a Zod schema for each building facility
const buildingFacilitySchema = z.union([
  z.literal('ev_charging'),
  z.literal('bulk_parking_owners'),
  z.literal('smart_meters'),
  z.literal('anpr'),
  z.literal('internet_wifi'),
  z.literal('access_card_system'),
  z.literal('visitor_parking'),
  z.literal('bms'),
  z.literal('handicapped_parking'),
  z.literal('paid_parking_system'),
]);
export const OnboardBuildingValidation = z.object({
  buildingName: z.string(),
  //@ts-ignore
  buildingType: z.enum(Object.keys(buildingTypes) as Array<keyof typeof buildingTypes>,),
  address: z.string().min(4, 'Please enter a valid address'),
  lat: z.number(),
  lng: z.number(),
  city: z.string().min(2, 'Please enter a city'),
  state: z.string().min(2, 'Please enter a state or province'),
  zipcode: z.string().min(2, 'Please enter a valid zipcode or postal code'),
  country: z.string().min(2, 'Please enter a country'),
  noOfUnits: z.string().regex(/[0-8]+/, {
    message: "Please enter a valid number", 
  }),
  noOfParkingFloors: z.string().regex(/[0-8]+/, {
    message: "Please enter a valid number", 
  }),
  noOfParkingSpots: z.string().regex(/[0-8]+/, {
    message: "Please enter a valid number",
  }),
  noOfDeveloperParkingSpots: z.string().regex(/[0-8]+/, {
    message: "Please enter a valid number",
  }),
  facilities: z.array(buildingFacilitySchema).optional(), 
})


const userRoleSchema = z.union([
  z.literal('owner'),
  z.literal('tenant'),
]);
export const CreateCommunityMemberValidation = z.object({
  name: z.string(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  email: z.string().email(),
  unitNumbers: z.string().optional(),
  userRole: userRoleSchema,
  parkingSpotNumber: z.string().optional(),
  parkingLevel: z.number().optional(),
  parkingSpotType: z.union([z.literal('regular'), z.literal('electric')]).optional(),
  vehiclePlate: z.string().optional(),
  vehicleType: z.union([z.literal('regular'), z.literal('electric'), z.literal('hybrid')]).optional(),
})
export const UpdateCommunityMemberValidation = z.object({
  name: z.string().optional(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format").optional(),
  role: userRoleSchema.optional(),
  email: z.string().email().optional(),
  unit_number: z.string().optional(),
})

export const AddApartmentUnitValidation = z.object({
  unitNumber: z.string().min(1, 'Please enter a valid unit number'),
  noOfRooms: z.string().regex(/^\d+/, {
    message: "Please enter a valid number",
  }),
  noOfBaths: z.string().regex(/^\d+/, {
    message: "Please enter a valid number",
  }),
  // amenities: z.array(z.string()).optional(),
})