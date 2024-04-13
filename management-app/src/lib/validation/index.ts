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

export const VisitorSignUpValidation = z.object({
  firstName: z.string().min(2, 'Please enter your first name'),
  lastName: z.string().min(2, 'Please enter your last name'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  email: z.string().email(),
})

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
  // oldPassword: z.string(),
  // password: passwordSchema,
  // confirmPassword: passwordSchema,
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  address: z.string().min(4, 'Please enter a valid address'),
  address2: z.string().optional(),
  lat: z.number(),
  lng: z.number(),
  staffMembers: staffMembersSchema.optional()
})
// .refine(({password, confirmPassword}) => password === confirmPassword, {
//   message: "Passwords don't match",
//   path: ["confirmPassword"], // This adds the error to `confirmPassword` field
// })


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
  name: z.string().min(2, 'Please enter a name'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  email: z.string().email(),
  unitNumbers: z.array(z.string()),
  parkingSpots: z.array(z.string()),
  userRole: userRoleSchema,
  status: z.string(z.enum(['active', 'inactive'])).optional(),
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
  }).transform((val) => parseInt(val)),
  noOfBaths: z.string().regex(/^\d+/, {
    message: "Please enter a valid number",
  }).transform((val) => parseInt(val),),
  // amenities: z.array(z.string()).optional(),
})

export const AddParkingSpotValidation = z.object({
  spotNumber: z.string().min(1, 'Please enter a valid parking spot number'),
  spotLevel: z.string().regex(/^\d+/, {
    message: "Please enter a valid number",
  }).transform((val) => parseInt(val)),
  spotType: z.union([z.literal('regular'), z.literal('electric'), z.literal('hybrid')]),
  price: z.string()
    .regex(/^\d+$/, 'Price must be all digits')
    .transform((str) => parseFloat(str))
    .refine((price) => price > 0, {
      message: 'Please enter a price greater than 0',
      path: ['price'],
    }),
})

export const SubscribeToParkingSpotValidation = z.object({
  name: z.string().min(1, 'Please enter your full name'),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  licencePlate: z.string().min(1, 'Please enter a valid license plate'),
  carModel: z.string().min(1, 'Please enter the model of your car. e.g. Tesla Model 3'),
  officeNumber: z.string().min(1, 'Please enter your office number'),
  driverLicenceNumber: z.string().min(4, 'Please enter your driver licence number'),
  emiratesId: z.string().regex(/^\d+$/, 'Please enter a valid emirates id').min(10, 'Please enter your emirates id'),
  agreedToTerms: z.boolean().refine((val) => val, {
    message: 'Please agree to the terms and conditions',
  })
})