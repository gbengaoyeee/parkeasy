
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.8.0
 * Query Engine version: 0a83d8541752d7582de2ebc1ece46519ce72a848
 */
Prisma.prismaVersion = {
  client: "5.8.0",
  engine: "0a83d8541752d7582de2ebc1ece46519ce72a848"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.PreSignUpManagementScalarFieldEnum = {
  email: 'email',
  company_name: 'company_name',
  contact_number: 'contact_number',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  phone_number: 'phone_number',
  first_name: 'first_name',
  last_name: 'last_name',
  user_roles: 'user_roles',
  verification_status: 'verification_status',
  mobile_onboard_status: 'mobile_onboard_status',
  stripe_customer_id: 'stripe_customer_id',
  stripe_account: 'stripe_account',
  created_at: 'created_at',
  last_login: 'last_login'
};

exports.Prisma.ManagementScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  company_name: 'company_name',
  business_email: 'business_email',
  phone_number: 'phone_number',
  customer_service_email: 'customer_service_email',
  emergency_email: 'emergency_email',
  address: 'address',
  address2: 'address2',
  lat: 'lat',
  lng: 'lng',
  subscription_plan_type: 'subscription_plan_type',
  subscription_state: 'subscription_state',
  business_state: 'business_state',
  date_joined: 'date_joined',
  last_login: 'last_login',
  last_updated: 'last_updated',
  onboard_state: 'onboard_state'
};

exports.Prisma.ManagementStaffScalarFieldEnum = {
  id: 'id',
  management_id: 'management_id',
  name: 'name',
  email: 'email',
  date_added: 'date_added',
  last_updated: 'last_updated'
};

exports.Prisma.BuildingScalarFieldEnum = {
  id: 'id',
  management_id: 'management_id',
  building_name: 'building_name',
  building_type: 'building_type',
  address: 'address',
  city: 'city',
  state: 'state',
  country: 'country',
  lat: 'lat',
  lng: 'lng',
  no_of_units: 'no_of_units',
  no_of_parking_floors: 'no_of_parking_floors',
  no_of_parking_spots: 'no_of_parking_spots',
  no_of_developer_parking_spots: 'no_of_developer_parking_spots',
  facilities: 'facilities'
};

exports.Prisma.CommunityMembersScalarFieldEnum = {
  id: 'id',
  building_id: 'building_id',
  user_id: 'user_id',
  user_role: 'user_role',
  email: 'email',
  name: 'name',
  phone: 'phone',
  status: 'status',
  qr_code_id: 'qr_code_id',
  created_at: 'created_at'
};

exports.Prisma.ParkingSpotScalarFieldEnum = {
  id: 'id',
  building_id: 'building_id',
  owner_id: 'owner_id',
  qr_code_id: 'qr_code_id',
  vehicle_id: 'vehicle_id',
  parking_level: 'parking_level',
  parking_spot_number: 'parking_spot_number',
  parking_spot_type: 'parking_spot_type',
  parking_instructions: 'parking_instructions'
};

exports.Prisma.QRCodeScalarFieldEnum = {
  id: 'id',
  qr_type: 'qr_type',
  url: 'url',
  image_url: 'image_url',
  qr_for: 'qr_for'
};

exports.Prisma.VehicleScalarFieldEnum = {
  id: 'id',
  vehicle_plate: 'vehicle_plate',
  vehicle_type: 'vehicle_type'
};

exports.Prisma.ListingScalarFieldEnum = {
  id: 'id',
  host_id: 'host_id',
  parking_id: 'parking_id',
  title: 'title',
  description: 'description',
  type: 'type',
  price: 'price',
  status: 'status',
  booking_status: 'booking_status',
  confirmation_type: 'confirmation_type',
  no_of_bookings: 'no_of_bookings',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  listing_id: 'listing_id',
  host_id: 'host_id',
  visitor_id: 'visitor_id',
  building_id: 'building_id',
  parking_spot_id: 'parking_spot_id',
  price: 'price',
  app_fees: 'app_fees',
  start_date: 'start_date',
  end_date: 'end_date',
  status: 'status',
  stripe_payment_intent_id: 'stripe_payment_intent_id',
  charge: 'charge',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ApartmentUnitScalarFieldEnum = {
  id: 'id',
  building_id: 'building_id',
  unit_number: 'unit_number',
  no_of_bedrooms: 'no_of_bedrooms',
  no_of_baths: 'no_of_baths',
  community_member_id: 'community_member_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Verification_Status = exports.$Enums.Verification_Status = {
  not_started: 'not_started',
  completed: 'completed',
  failed: 'failed'
};

exports.Mobile_Onboard_Status = exports.$Enums.Mobile_Onboard_Status = {
  not_started: 'not_started',
  completed: 'completed'
};

exports.User_Role = exports.$Enums.User_Role = {
  owner: 'owner',
  tenant: 'tenant',
  building_security: 'building_security',
  building_manager: 'building_manager',
  admin: 'admin',
  visitor: 'visitor'
};

exports.Subscription_PlanType = exports.$Enums.Subscription_PlanType = {
  basic: 'basic',
  standard: 'standard',
  pro: 'pro'
};

exports.Active_State = exports.$Enums.Active_State = {
  active: 'active',
  inactive: 'inactive'
};

exports.OnboardingState = exports.$Enums.OnboardingState = {
  management_onboard: 'management_onboard',
  building_onboard: 'building_onboard',
  payment: 'payment',
  finish: 'finish'
};

exports.BuildingType = exports.$Enums.BuildingType = {
  commercial: 'commercial',
  residential: 'residential',
  governmental: 'governmental'
};

exports.BuildingFacility = exports.$Enums.BuildingFacility = {
  ev_charging: 'ev_charging',
  bulk_parking_owners: 'bulk_parking_owners',
  smart_meters: 'smart_meters',
  anpr: 'anpr',
  internet_wifi: 'internet_wifi',
  access_card_system: 'access_card_system',
  visitor_parking: 'visitor_parking',
  bms: 'bms',
  handicapped_parking: 'handicapped_parking',
  paid_parking_system: 'paid_parking_system'
};

exports.Parking_Spot_Type = exports.$Enums.Parking_Spot_Type = {
  regular: 'regular',
  electric: 'electric'
};

exports.QRCode_Type = exports.$Enums.QRCode_Type = {
  static: 'static',
  dynamic: 'dynamic'
};

exports.QRCode_For = exports.$Enums.QRCode_For = {
  community_member: 'community_member',
  parking_spot: 'parking_spot'
};

exports.Vehicle_Type = exports.$Enums.Vehicle_Type = {
  regular: 'regular',
  electric: 'electric',
  hybrid: 'hybrid'
};

exports.Listing_Type = exports.$Enums.Listing_Type = {
  hourly: 'hourly',
  weekly: 'weekly',
  monthly: 'monthly'
};

exports.Confirmation_Type = exports.$Enums.Confirmation_Type = {
  manual: 'manual',
  automatic: 'automatic'
};

exports.Reservation_Status = exports.$Enums.Reservation_Status = {
  pending: 'pending',
  confirmed: 'confirmed',
  cancelled: 'cancelled',
  completed: 'completed'
};

exports.Prisma.ModelName = {
  PreSignUpManagement: 'PreSignUpManagement',
  User: 'User',
  Management: 'Management',
  ManagementStaff: 'ManagementStaff',
  Building: 'Building',
  CommunityMembers: 'CommunityMembers',
  ParkingSpot: 'ParkingSpot',
  QRCode: 'QRCode',
  Vehicle: 'Vehicle',
  Listing: 'Listing',
  Reservation: 'Reservation',
  ApartmentUnit: 'ApartmentUnit'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/gbenga/Documents/parkeasy/shared/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../backend/.env"
  },
  "relativePath": "../../backend/prisma",
  "clientVersion": "5.8.0",
  "engineVersion": "0a83d8541752d7582de2ebc1ece46519ce72a848",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi8uLi9zaGFyZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBVc2VyX1JvbGUgewogIG93bmVyCiAgdGVuYW50CiAgYnVpbGRpbmdfc2VjdXJpdHkKICBidWlsZGluZ19tYW5hZ2VyCiAgYWRtaW4KICB2aXNpdG9yCn0KCm1vZGVsIFByZVNpZ25VcE1hbmFnZW1lbnQgewogIGVtYWlsICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBjb21wYW55X25hbWUgICBTdHJpbmcKICBjb250YWN0X251bWJlciBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKCiAgQEBtYXAoIlByZVNpZ25VcE1hbmFnZW1lbnRzIikKfQoKZW51bSBWZXJpZmljYXRpb25fU3RhdHVzIHsKICBub3Rfc3RhcnRlZAogIGNvbXBsZXRlZAogIGZhaWxlZAp9CgplbnVtIE1vYmlsZV9PbmJvYXJkX1N0YXR1cyB7CiAgbm90X3N0YXJ0ZWQKICBjb21wbGV0ZWQKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgIEB1bmlxdWUKICBwaG9uZV9udW1iZXIgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICBAdW5pcXVlCiAgZmlyc3RfbmFtZSAgICAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgICAgU3RyaW5nPwogIHVzZXJfcm9sZXMgICAgICAgICAgICBVc2VyX1JvbGVbXSAgICAgICAgICAgIEBkZWZhdWx0KFtdKQogIHZlcmlmaWNhdGlvbl9zdGF0dXMgICBWZXJpZmljYXRpb25fU3RhdHVzPyAgIEBkZWZhdWx0KG5vdF9zdGFydGVkKQogIG1vYmlsZV9vbmJvYXJkX3N0YXR1cyBNb2JpbGVfT25ib2FyZF9TdGF0dXM/IEBkZWZhdWx0KG5vdF9zdGFydGVkKQogIHN0cmlwZV9jdXN0b21lcl9pZCAgICBTdHJpbmc/CiAgc3RyaXBlX2FjY291bnQgICAgICAgIEpzb24/CgogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgbGFzdF9sb2dpbiBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKCiAgbWFuYWdlbWVudCAgICAgICAgICBNYW5hZ2VtZW50PyAvLyBSZWxhdGlvbiBmaWVsZAogIGNvbW11bml0eV9tZW1iZXJzICAgQ29tbXVuaXR5TWVtYmVyc1tdIC8vIFJlbGF0aW9uIGZpZWxkCiAgLy8gaW52aXRlX2NvZGVzIEludml0ZUNvZGVbXSAvLyBSZWxhdGlvbiBmaWVsZAogIGxpc3RpbmdzICAgICAgICAgICAgTGlzdGluZ1tdCiAgaG9zdFJlc2VydmF0aW9ucyAgICBSZXNlcnZhdGlvbltdICAgICAgQHJlbGF0aW9uKG5hbWU6ICJIb3N0UmVsYXRpb24iKQogIHZpc2l0b3JSZXNlcnZhdGlvbnMgUmVzZXJ2YXRpb25bXSAgICAgIEByZWxhdGlvbihuYW1lOiAiVmlzaXRvclJlbGF0aW9uIikKCiAgQEB1bmlxdWUoW2VtYWlsLCBwaG9uZV9udW1iZXJdKQogIEBAbWFwKCJVc2VycyIpCn0KCmVudW0gU3Vic2NyaXB0aW9uX1BsYW5UeXBlIHsKICBiYXNpYwogIHN0YW5kYXJkCiAgcHJvCn0KCmVudW0gQWN0aXZlX1N0YXRlIHsKICBhY3RpdmUKICBpbmFjdGl2ZQp9CgplbnVtIE9uYm9hcmRpbmdTdGF0ZSB7CiAgbWFuYWdlbWVudF9vbmJvYXJkCiAgYnVpbGRpbmdfb25ib2FyZAogIHBheW1lbnQKICBmaW5pc2gKfQoKbW9kZWwgTWFuYWdlbWVudCB7CiAgaWQgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICB1c2VyX2lkICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQHVuaXF1ZQogIGNvbXBhbnlfbmFtZSAgICAgICAgICAgU3RyaW5nPwogIGJ1c2luZXNzX2VtYWlsICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICBAdW5pcXVlCiAgcGhvbmVfbnVtYmVyICAgICAgICAgICBTdHJpbmc/CiAgY3VzdG9tZXJfc2VydmljZV9lbWFpbCBTdHJpbmc/CiAgZW1lcmdlbmN5X2VtYWlsICAgICAgICBTdHJpbmc/CiAgYWRkcmVzcyAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYWRkcmVzczIgICAgICAgICAgICAgICBTdHJpbmc/CiAgbGF0ICAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBsbmcgICAgICAgICAgICAgICAgICAgIEZsb2F0PwogIHN1YnNjcmlwdGlvbl9wbGFuX3R5cGUgU3Vic2NyaXB0aW9uX1BsYW5UeXBlPwogIHN1YnNjcmlwdGlvbl9zdGF0ZSAgICAgQWN0aXZlX1N0YXRlPwogIGJ1c2luZXNzX3N0YXRlICAgICAgICAgQWN0aXZlX1N0YXRlPwogIGRhdGVfam9pbmVkICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBsYXN0X2xvZ2luICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgbGFzdF91cGRhdGVkICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0CiAgb25ib2FyZF9zdGF0ZSAgICAgICAgICBPbmJvYXJkaW5nU3RhdGU/ICAgICAgIEBkZWZhdWx0KG1hbmFnZW1lbnRfb25ib2FyZCkKCiAgc3RhZmZzICAgIE1hbmFnZW1lbnRTdGFmZltdIC8vIFJlbGF0aW9uIGZpZWxkCiAgYnVpbGRpbmdzIEJ1aWxkaW5nW10gLy8gUmVsYXRpb24gZmllbGQKCiAgdXNlciBVc2VyIEByZWxhdGlvbihmaWVsZHM6IFt1c2VyX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQp9Cgptb2RlbCBNYW5hZ2VtZW50U3RhZmYgewogIGlkICAgICAgICAgICAgU3RyaW5nICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIG1hbmFnZW1lbnRfaWQgU3RyaW5nIC8vIEZvcmVpZ24ga2V5IGZpZWxkCiAgbmFtZSAgICAgICAgICBTdHJpbmc/CiAgZW1haWwgICAgICAgICBTdHJpbmc/ICBAdW5pcXVlCiAgZGF0ZV9hZGRlZCAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICBsYXN0X3VwZGF0ZWQgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0CgogIG1hbmFnZW1lbnQgTWFuYWdlbWVudCBAcmVsYXRpb24oZmllbGRzOiBbbWFuYWdlbWVudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKfQoKZW51bSBCdWlsZGluZ1R5cGUgewogIGNvbW1lcmNpYWwKICByZXNpZGVudGlhbAogIGdvdmVybm1lbnRhbAp9CgplbnVtIEJ1aWxkaW5nRmFjaWxpdHkgewogIGV2X2NoYXJnaW5nCiAgYnVsa19wYXJraW5nX293bmVycwogIHNtYXJ0X21ldGVycwogIGFucHIKICBpbnRlcm5ldF93aWZpCiAgYWNjZXNzX2NhcmRfc3lzdGVtCiAgdmlzaXRvcl9wYXJraW5nCiAgYm1zCiAgaGFuZGljYXBwZWRfcGFya2luZwogIHBhaWRfcGFya2luZ19zeXN0ZW0KfQoKbW9kZWwgQnVpbGRpbmcgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCiAgbWFuYWdlbWVudF9pZCAgICAgICAgICAgICAgICAgU3RyaW5nIC8vIEZvcmVpZ24ga2V5IGZpZWxkCiAgYnVpbGRpbmdfbmFtZSAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGJ1aWxkaW5nX3R5cGUgICAgICAgICAgICAgICAgIEJ1aWxkaW5nVHlwZT8KICBhZGRyZXNzICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY2l0eSAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjb3VudHJ5ICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgbGF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxvYXQ/CiAgbG5nICAgICAgICAgICAgICAgICAgICAgICAgICAgRmxvYXQ/CiAgbm9fb2ZfdW5pdHMgICAgICAgICAgICAgICAgICAgSW50PwogIG5vX29mX3BhcmtpbmdfZmxvb3JzICAgICAgICAgIEludD8KICBub19vZl9wYXJraW5nX3Nwb3RzICAgICAgICAgICBJbnQ/CiAgbm9fb2ZfZGV2ZWxvcGVyX3Bhcmtpbmdfc3BvdHMgSW50PwogIGZhY2lsaXRpZXMgICAgICAgICAgICAgICAgICAgIEJ1aWxkaW5nRmFjaWxpdHlbXQoKICBtYW5hZ2VtZW50ICAgICAgICBNYW5hZ2VtZW50ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21hbmFnZW1lbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgY29tbXVuaXR5X21lbWJlcnMgQ29tbXVuaXR5TWVtYmVyc1tdIC8vIFJlbGF0aW9uIGZpZWxkCiAgcGFya2luZ19zcG90cyAgICAgUGFya2luZ1Nwb3RbXSAvLyBSZWxhdGlvbiBmaWVsZAogIHJlc2VydmF0aW9ucyAgICAgIFJlc2VydmF0aW9uW10KICBhcGFydG1lbnRfdW5pdHMgICBBcGFydG1lbnRVbml0W10KfQoKbW9kZWwgQ29tbXVuaXR5TWVtYmVycyB7CiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCiAgYnVpbGRpbmdfaWQgIFN0cmluZyAvLyBGb3JlaWduIGtleQogIHVzZXJfaWQgICAgICBTdHJpbmc/IC8vIEZvcmVpZ24ga2V5CiAgdXNlcl9yb2xlICAgIFVzZXJfUm9sZT8KICBlbWFpbCAgICAgICAgU3RyaW5nPwogIG5hbWUgICAgICAgICBTdHJpbmc/CiAgcGhvbmUgICAgICAgIFN0cmluZz8KICBzdGF0dXMgICAgICAgQWN0aXZlX1N0YXRlIEBkZWZhdWx0KGluYWN0aXZlKQoKICBxcl9jb2RlX2lkIFN0cmluZz8gIEB1bmlxdWUKICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICBidWlsZGluZyAgICAgIEJ1aWxkaW5nICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnVpbGRpbmdfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgcXJfY29kZSAgICAgICBRUkNvZGU/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3FyX2NvZGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgcGFya2luZ19zcG90cyBQYXJraW5nU3BvdFtdIC8vIEEgY29tbXVuaXR5IG1lbWJlciBjYW4gaGF2ZSBtdWx0aXBsZSBwYXJraW5nIHNwb3RzCiAgdXNlciAgICAgICAgICBVc2VyPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBhcGFydG1lbnRfdW5pdHMgQXBhcnRtZW50VW5pdFtdIAoKICBAQHVuaXF1ZShbYnVpbGRpbmdfaWQsIHBob25lLCBlbWFpbF0pCn0KCmVudW0gUGFya2luZ19TcG90X1R5cGUgewogIHJlZ3VsYXIKICBlbGVjdHJpYwp9Cgptb2RlbCBQYXJraW5nU3BvdCB7CiAgaWQgICAgICAgICAgU3RyaW5nICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCiAgYnVpbGRpbmdfaWQgU3RyaW5nIC8vIEZvcmVpZ24ga2V5CiAgb3duZXJfaWQgICAgU3RyaW5nPyAvLyBGb3JlaWduIGtleQogIHFyX2NvZGVfaWQgIFN0cmluZz8gQHVuaXF1ZQogIHZlaGljbGVfaWQgIFN0cmluZz8gLy8gRm9yZWlnbiBrZXkKCiAgcGFya2luZ19sZXZlbCAgICAgICAgSW50PwogIHBhcmtpbmdfc3BvdF9udW1iZXIgIFN0cmluZz8KICBwYXJraW5nX3Nwb3RfdHlwZSAgICBQYXJraW5nX1Nwb3RfVHlwZSBAZGVmYXVsdChyZWd1bGFyKQogIHBhcmtpbmdfaW5zdHJ1Y3Rpb25zIFN0cmluZz8gICAgICAgICAgIEBkZWZhdWx0KCIiKQoKICBidWlsZGluZyAgICAgQnVpbGRpbmcgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2J1aWxkaW5nX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQogIG93bmVyICAgICAgICBDb21tdW5pdHlNZW1iZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbb3duZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBxcl9jb2RlICAgICAgUVJDb2RlPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3FyX2NvZGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgdmVoaWNsZSAgICAgIFZlaGljbGU/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt2ZWhpY2xlX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQogIGxpc3RpbmdzICAgICBMaXN0aW5nW10KICByZXNlcnZhdGlvbnMgUmVzZXJ2YXRpb25bXQoKICBAQHVuaXF1ZShbcXJfY29kZV9pZCwgcGFya2luZ19sZXZlbCwgcGFya2luZ19zcG90X251bWJlcl0pIC8vIEVuc3VyZSBhIHBhcmtpbmcgc3BvdCBjYW4gb25seSBoYXZlIG9uZSBRUiBjb2RlCn0KCmVudW0gUVJDb2RlX1R5cGUgewogIHN0YXRpYwogIGR5bmFtaWMKfQoKZW51bSBRUkNvZGVfRm9yIHsKICBjb21tdW5pdHlfbWVtYmVyCiAgcGFya2luZ19zcG90Cn0KCm1vZGVsIFFSQ29kZSB7CiAgaWQgICAgICAgIFN0cmluZyAgICAgIEBpZCBAdW5pcXVlCiAgcXJfdHlwZSAgIFFSQ29kZV9UeXBlCiAgdXJsICAgICAgIFN0cmluZwogIGltYWdlX3VybCBTdHJpbmc/CgogIHFyX2ZvciBRUkNvZGVfRm9yCgogIG93bmVyICAgICAgICBDb21tdW5pdHlNZW1iZXJzPwogIHBhcmtpbmdfc3BvdCBQYXJraW5nU3BvdD8KfQoKZW51bSBWZWhpY2xlX1R5cGUgewogIHJlZ3VsYXIKICBlbGVjdHJpYwogIGh5YnJpZAp9Cgptb2RlbCBWZWhpY2xlIHsKICBpZCBTdHJpbmcgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQoKICB2ZWhpY2xlX3BsYXRlIFN0cmluZz8KICB2ZWhpY2xlX3R5cGUgIFZlaGljbGVfVHlwZSBAZGVmYXVsdChyZWd1bGFyKQoKICBwYXJraW5nX3Nwb3RzIFBhcmtpbmdTcG90W10KfQoKZW51bSBMaXN0aW5nX1R5cGUgewogIGhvdXJseQogIHdlZWtseQogIG1vbnRobHkKfQoKZW51bSBDb25maXJtYXRpb25fVHlwZSB7CiAgbWFudWFsCiAgYXV0b21hdGljCn0KCm1vZGVsIExpc3RpbmcgewogIGlkICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBob3N0X2lkICAgICAgICAgICBTdHJpbmcgLy8gRm9yZWlnbiBrZXkKICBwYXJraW5nX2lkICAgICAgICBTdHJpbmcgLy8gRm9yZWlnbiBrZXkKICB0aXRsZSAgICAgICAgICAgICBTdHJpbmc/CiAgZGVzY3JpcHRpb24gICAgICAgU3RyaW5nPwogIHR5cGUgICAgICAgICAgICAgIExpc3RpbmdfVHlwZT8KICBwcmljZSAgICAgICAgICAgICBJbnQ/IC8vIEluIGNlbnRzCiAgc3RhdHVzICAgICAgICAgICAgQWN0aXZlX1N0YXRlICAgICAgQGRlZmF1bHQoYWN0aXZlKQogIGJvb2tpbmdfc3RhdHVzICAgIEFjdGl2ZV9TdGF0ZSAgICAgIEBkZWZhdWx0KGluYWN0aXZlKQogIGNvbmZpcm1hdGlvbl90eXBlIENvbmZpcm1hdGlvbl9UeXBlIEBkZWZhdWx0KGF1dG9tYXRpYykKICBub19vZl9ib29raW5ncyAgICBJbnQ/ICAgICAgICAgICAgICBAZGVmYXVsdCgwKQoKICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQKCiAgaG9zdCAgICAgICAgIFVzZXIgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2hvc3RfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgcGFya2luZ19zcG90IFBhcmtpbmdTcG90ICAgQHJlbGF0aW9uKGZpZWxkczogW3BhcmtpbmdfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgcmVzZXJ2YXRpb25zIFJlc2VydmF0aW9uW10KCiAgQEB1bmlxdWUoW2hvc3RfaWQsIHBhcmtpbmdfaWRdKQp9CgplbnVtIFJlc2VydmF0aW9uX1N0YXR1cyB7CiAgcGVuZGluZwogIGNvbmZpcm1lZAogIGNhbmNlbGxlZAogIGNvbXBsZXRlZAp9Cgptb2RlbCBSZXNlcnZhdGlvbiB7CiAgaWQgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCiAgbGlzdGluZ19pZCAgICAgIFN0cmluZz8KICBob3N0X2lkICAgICAgICAgU3RyaW5nPwogIHZpc2l0b3JfaWQgICAgICBTdHJpbmc/CiAgYnVpbGRpbmdfaWQgICAgIFN0cmluZz8KICBwYXJraW5nX3Nwb3RfaWQgU3RyaW5nPwogIHByaWNlICAgICAgICAgICBJbnQ/IC8vIEluIGNlbnRzCiAgYXBwX2ZlZXMgICAgICAgIEludD8gLy8gSW4gY2VudHMKICBzdGFydF9kYXRlICAgICAgRGF0ZVRpbWU/CiAgZW5kX2RhdGUgICAgICAgIERhdGVUaW1lPwogIHN0YXR1cyAgICAgICAgICBSZXNlcnZhdGlvbl9TdGF0dXMgQGRlZmF1bHQocGVuZGluZykKICBzdHJpcGVfcGF5bWVudF9pbnRlbnRfaWQgU3RyaW5nPwoKICBjaGFyZ2UgICAgICAgICAgSnNvbj8KCiAgY3JlYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAdXBkYXRlZEF0CgogIGxpc3RpbmcgIExpc3Rpbmc/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbbGlzdGluZ19pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGhvc3QgICAgIFVzZXI/ICAgICAgICBAcmVsYXRpb24obmFtZTogIkhvc3RSZWxhdGlvbiIsIGZpZWxkczogW2hvc3RfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB2aXNpdG9yICBVc2VyPyAgICAgICAgQHJlbGF0aW9uKG5hbWU6ICJWaXNpdG9yUmVsYXRpb24iLCBmaWVsZHM6IFt2aXNpdG9yX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgYnVpbGRpbmcgQnVpbGRpbmc/ICAgQHJlbGF0aW9uKGZpZWxkczogW2J1aWxkaW5nX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcGFya2luZyAgUGFya2luZ1Nwb3Q/IEByZWxhdGlvbihmaWVsZHM6IFtwYXJraW5nX3Nwb3RfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQoKbW9kZWwgQXBhcnRtZW50VW5pdCB7CiAgaWQgICAgICAgICAgICAgICAgICBTdHJpbmcgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBidWlsZGluZ19pZCAgICAgICAgIFN0cmluZyAvLyBGb3JlaWduIGtleQogIHVuaXRfbnVtYmVyICAgICAgICAgU3RyaW5nPwogIG5vX29mX2JlZHJvb21zICAgICAgSW50PwogIG5vX29mX2JhdGhzICAgICAgICAgSW50PwogIGNvbW11bml0eV9tZW1iZXJfaWQgU3RyaW5nPwoKICBidWlsZGluZyAgICAgICAgICBCdWlsZGluZyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtidWlsZGluZ19pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGNvbW11bml0eV9tZW1iZXIgQ29tbXVuaXR5TWVtYmVycz8gQHJlbGF0aW9uKGZpZWxkczogW2NvbW11bml0eV9tZW1iZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQHVuaXF1ZShbYnVpbGRpbmdfaWQsIHVuaXRfbnVtYmVyXSkKfQo=",
  "inlineSchemaHash": "ae9f99f0d4b5fe99c19ab313015f180279fabcd09bc6abf29231c8a44421eea1"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "../shared/prisma-client",
    "shared/prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"PreSignUpManagement\":{\"dbName\":\"PreSignUpManagements\",\"fields\":[{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"Users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_roles\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"User_Role\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Verification_Status\",\"default\":\"not_started\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile_onboard_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Mobile_Onboard_Status\",\"default\":\"not_started\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"ManagementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hostReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"HostRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitorReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"VisitorRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email\",\"phone_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email\",\"phone_number\"]}],\"isGenerated\":false},\"Management\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_service_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emergency_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lng\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_plan_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subscription_PlanType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Active_State\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Active_State\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_joined\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"onboard_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OnboardingState\",\"default\":\"management_onboard\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ManagementStaff\",\"relationName\":\"ManagementToManagementStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buildings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToManagement\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ManagementToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ManagementStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_added\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"ManagementToManagementStaff\",\"relationFromFields\":[\"management_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Building\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildingType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lng\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_units\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_parking_floors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_parking_spots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_developer_parking_spots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilities\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildingFacility\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"BuildingToManagement\",\"relationFromFields\":[\"management_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"BuildingToCommunityMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"BuildingToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"BuildingToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apartment_units\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApartmentUnit\",\"relationName\":\"ApartmentUnitToBuilding\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CommunityMembers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User_Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToCommunityMembers\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode\",\"relationName\":\"CommunityMembersToQRCode\",\"relationFromFields\":[\"qr_code_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"CommunityMembersToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CommunityMembersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apartment_units\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApartmentUnit\",\"relationName\":\"ApartmentUnitToCommunityMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"building_id\",\"phone\",\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"building_id\",\"phone\",\"email\"]}],\"isGenerated\":false},\"ParkingSpot\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Parking_Spot_Type\",\"default\":\"regular\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_instructions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToParkingSpot\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToParkingSpot\",\"relationFromFields\":[\"owner_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode\",\"relationName\":\"ParkingSpotToQRCode\",\"relationFromFields\":[\"qr_code_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle\",\"relationName\":\"ParkingSpotToVehicle\",\"relationFromFields\":[\"vehicle_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ParkingSpotToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"qr_code_id\",\"parking_level\",\"parking_spot_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"qr_code_id\",\"parking_level\",\"parking_spot_number\"]}],\"isGenerated\":false},\"QRCode\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode_Type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_for\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode_For\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToQRCode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToQRCode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_plate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Vehicle_Type\",\"default\":\"regular\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToVehicle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Listing\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing_Type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"active\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"booking_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmation_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Confirmation_Type\",\"default\":\"automatic\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_bookings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"host\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ListingToUser\",\"relationFromFields\":[\"host_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ListingToParkingSpot\",\"relationFromFields\":[\"parking_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ListingToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"host_id\",\"parking_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"host_id\",\"parking_id\"]}],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listing_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"app_fees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Reservation_Status\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_payment_intent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"listing\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToReservation\",\"relationFromFields\":[\"listing_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"HostRelation\",\"relationFromFields\":[\"host_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"VisitorRelation\",\"relationFromFields\":[\"visitor_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToReservation\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToReservation\",\"relationFromFields\":[\"parking_spot_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ApartmentUnit\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_bedrooms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_baths\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"ApartmentUnitToBuilding\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"ApartmentUnitToCommunityMembers\",\"relationFromFields\":[\"community_member_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"building_id\",\"unit_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"building_id\",\"unit_number\"]}],\"isGenerated\":false}},\"enums\":{\"User_Role\":{\"values\":[{\"name\":\"owner\",\"dbName\":null},{\"name\":\"tenant\",\"dbName\":null},{\"name\":\"building_security\",\"dbName\":null},{\"name\":\"building_manager\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"visitor\",\"dbName\":null}],\"dbName\":null},\"Verification_Status\":{\"values\":[{\"name\":\"not_started\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"failed\",\"dbName\":null}],\"dbName\":null},\"Mobile_Onboard_Status\":{\"values\":[{\"name\":\"not_started\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null},\"Subscription_PlanType\":{\"values\":[{\"name\":\"basic\",\"dbName\":null},{\"name\":\"standard\",\"dbName\":null},{\"name\":\"pro\",\"dbName\":null}],\"dbName\":null},\"Active_State\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"OnboardingState\":{\"values\":[{\"name\":\"management_onboard\",\"dbName\":null},{\"name\":\"building_onboard\",\"dbName\":null},{\"name\":\"payment\",\"dbName\":null},{\"name\":\"finish\",\"dbName\":null}],\"dbName\":null},\"BuildingType\":{\"values\":[{\"name\":\"commercial\",\"dbName\":null},{\"name\":\"residential\",\"dbName\":null},{\"name\":\"governmental\",\"dbName\":null}],\"dbName\":null},\"BuildingFacility\":{\"values\":[{\"name\":\"ev_charging\",\"dbName\":null},{\"name\":\"bulk_parking_owners\",\"dbName\":null},{\"name\":\"smart_meters\",\"dbName\":null},{\"name\":\"anpr\",\"dbName\":null},{\"name\":\"internet_wifi\",\"dbName\":null},{\"name\":\"access_card_system\",\"dbName\":null},{\"name\":\"visitor_parking\",\"dbName\":null},{\"name\":\"bms\",\"dbName\":null},{\"name\":\"handicapped_parking\",\"dbName\":null},{\"name\":\"paid_parking_system\",\"dbName\":null}],\"dbName\":null},\"Parking_Spot_Type\":{\"values\":[{\"name\":\"regular\",\"dbName\":null},{\"name\":\"electric\",\"dbName\":null}],\"dbName\":null},\"QRCode_Type\":{\"values\":[{\"name\":\"static\",\"dbName\":null},{\"name\":\"dynamic\",\"dbName\":null}],\"dbName\":null},\"QRCode_For\":{\"values\":[{\"name\":\"community_member\",\"dbName\":null},{\"name\":\"parking_spot\",\"dbName\":null}],\"dbName\":null},\"Vehicle_Type\":{\"values\":[{\"name\":\"regular\",\"dbName\":null},{\"name\":\"electric\",\"dbName\":null},{\"name\":\"hybrid\",\"dbName\":null}],\"dbName\":null},\"Listing_Type\":{\"values\":[{\"name\":\"hourly\",\"dbName\":null},{\"name\":\"weekly\",\"dbName\":null},{\"name\":\"monthly\",\"dbName\":null}],\"dbName\":null},\"Confirmation_Type\":{\"values\":[{\"name\":\"manual\",\"dbName\":null},{\"name\":\"automatic\",\"dbName\":null}],\"dbName\":null},\"Reservation_Status\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"confirmed\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "../shared/prisma-client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "../shared/prisma-client/schema.prisma")
