
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
  notification_token: 'notification_token',
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi8uLi9zaGFyZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZW51bSBVc2VyX1JvbGUgewogIG93bmVyCiAgdGVuYW50CiAgYnVpbGRpbmdfc2VjdXJpdHkKICBidWlsZGluZ19tYW5hZ2VyCiAgYWRtaW4KICB2aXNpdG9yCn0KCm1vZGVsIFByZVNpZ25VcE1hbmFnZW1lbnQgewogIGVtYWlsICAgICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICBjb21wYW55X25hbWUgICBTdHJpbmcKICBjb250YWN0X251bWJlciBTdHJpbmcKICBjcmVhdGVkX2F0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICB1cGRhdGVkX2F0ICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKCiAgQEBtYXAoIlByZVNpZ25VcE1hbmFnZW1lbnRzIikKfQoKZW51bSBWZXJpZmljYXRpb25fU3RhdHVzIHsKICBub3Rfc3RhcnRlZAogIGNvbXBsZXRlZAogIGZhaWxlZAp9CgplbnVtIE1vYmlsZV9PbmJvYXJkX1N0YXR1cyB7CiAgbm90X3N0YXJ0ZWQKICBjb21wbGV0ZWQKfQoKbW9kZWwgVXNlciB7CiAgaWQgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIGVtYWlsICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgIEB1bmlxdWUKICBwaG9uZV9udW1iZXIgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICAgICBAdW5pcXVlCiAgZmlyc3RfbmFtZSAgICAgICAgICAgIFN0cmluZz8KICBsYXN0X25hbWUgICAgICAgICAgICAgU3RyaW5nPwogIHVzZXJfcm9sZXMgICAgICAgICAgICBVc2VyX1JvbGVbXSAgICAgICAgICAgIEBkZWZhdWx0KFtdKQogIHZlcmlmaWNhdGlvbl9zdGF0dXMgICBWZXJpZmljYXRpb25fU3RhdHVzPyAgIEBkZWZhdWx0KG5vdF9zdGFydGVkKQogIG1vYmlsZV9vbmJvYXJkX3N0YXR1cyBNb2JpbGVfT25ib2FyZF9TdGF0dXM/IEBkZWZhdWx0KG5vdF9zdGFydGVkKQogIHN0cmlwZV9jdXN0b21lcl9pZCAgICBTdHJpbmc/CiAgc3RyaXBlX2FjY291bnQgICAgICAgIEpzb24/CiAgbm90aWZpY2F0aW9uX3Rva2VuICAgIFN0cmluZz8KCiAgY3JlYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICBsYXN0X2xvZ2luIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoKICBtYW5hZ2VtZW50ICAgICAgICAgIE1hbmFnZW1lbnQ/IC8vIFJlbGF0aW9uIGZpZWxkCiAgY29tbXVuaXR5X21lbWJlcnMgICBDb21tdW5pdHlNZW1iZXJzW10gLy8gUmVsYXRpb24gZmllbGQKICAvLyBpbnZpdGVfY29kZXMgSW52aXRlQ29kZVtdIC8vIFJlbGF0aW9uIGZpZWxkCiAgbGlzdGluZ3MgICAgICAgICAgICBMaXN0aW5nW10KICBob3N0UmVzZXJ2YXRpb25zICAgIFJlc2VydmF0aW9uW10gICAgICBAcmVsYXRpb24obmFtZTogIkhvc3RSZWxhdGlvbiIpCiAgdmlzaXRvclJlc2VydmF0aW9ucyBSZXNlcnZhdGlvbltdICAgICAgQHJlbGF0aW9uKG5hbWU6ICJWaXNpdG9yUmVsYXRpb24iKQoKICBAQHVuaXF1ZShbZW1haWwsIHBob25lX251bWJlcl0pCiAgQEBtYXAoIlVzZXJzIikKfQoKZW51bSBTdWJzY3JpcHRpb25fUGxhblR5cGUgewogIGJhc2ljCiAgc3RhbmRhcmQKICBwcm8KfQoKZW51bSBBY3RpdmVfU3RhdGUgewogIGFjdGl2ZQogIGluYWN0aXZlCn0KCmVudW0gT25ib2FyZGluZ1N0YXRlIHsKICBtYW5hZ2VtZW50X29uYm9hcmQKICBidWlsZGluZ19vbmJvYXJkCiAgcGF5bWVudAogIGZpbmlzaAp9Cgptb2RlbCBNYW5hZ2VtZW50IHsKICBpZCAgICAgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIHVzZXJfaWQgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICBAdW5pcXVlCiAgY29tcGFueV9uYW1lICAgICAgICAgICBTdHJpbmc/CiAgYnVzaW5lc3NfZW1haWwgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgICAgIEB1bmlxdWUKICBwaG9uZV9udW1iZXIgICAgICAgICAgIFN0cmluZz8KICBjdXN0b21lcl9zZXJ2aWNlX2VtYWlsIFN0cmluZz8KICBlbWVyZ2VuY3lfZW1haWwgICAgICAgIFN0cmluZz8KICBhZGRyZXNzICAgICAgICAgICAgICAgIFN0cmluZz8KICBhZGRyZXNzMiAgICAgICAgICAgICAgIFN0cmluZz8KICBsYXQgICAgICAgICAgICAgICAgICAgIEZsb2F0PwogIGxuZyAgICAgICAgICAgICAgICAgICAgRmxvYXQ/CiAgc3Vic2NyaXB0aW9uX3BsYW5fdHlwZSBTdWJzY3JpcHRpb25fUGxhblR5cGU/CiAgc3Vic2NyaXB0aW9uX3N0YXRlICAgICBBY3RpdmVfU3RhdGU/CiAgYnVzaW5lc3Nfc3RhdGUgICAgICAgICBBY3RpdmVfU3RhdGU/CiAgZGF0ZV9qb2luZWQgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGxhc3RfbG9naW4gICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBsYXN0X3VwZGF0ZWQgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQKICBvbmJvYXJkX3N0YXRlICAgICAgICAgIE9uYm9hcmRpbmdTdGF0ZT8gICAgICAgQGRlZmF1bHQobWFuYWdlbWVudF9vbmJvYXJkKQoKICBzdGFmZnMgICAgTWFuYWdlbWVudFN0YWZmW10gLy8gUmVsYXRpb24gZmllbGQKICBidWlsZGluZ3MgQnVpbGRpbmdbXSAvLyBSZWxhdGlvbiBmaWVsZAoKICB1c2VyIFVzZXIgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCn0KCm1vZGVsIE1hbmFnZW1lbnRTdGFmZiB7CiAgaWQgICAgICAgICAgICBTdHJpbmcgICBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCiAgbWFuYWdlbWVudF9pZCBTdHJpbmcgLy8gRm9yZWlnbiBrZXkgZmllbGQKICBuYW1lICAgICAgICAgIFN0cmluZz8KICBlbWFpbCAgICAgICAgIFN0cmluZz8gIEB1bmlxdWUKICBkYXRlX2FkZGVkICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIGxhc3RfdXBkYXRlZCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQKCiAgbWFuYWdlbWVudCBNYW5hZ2VtZW50IEByZWxhdGlvbihmaWVsZHM6IFttYW5hZ2VtZW50X2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQp9CgplbnVtIEJ1aWxkaW5nVHlwZSB7CiAgY29tbWVyY2lhbAogIHJlc2lkZW50aWFsCiAgZ292ZXJubWVudGFsCn0KCmVudW0gQnVpbGRpbmdGYWNpbGl0eSB7CiAgZXZfY2hhcmdpbmcKICBidWxrX3Bhcmtpbmdfb3duZXJzCiAgc21hcnRfbWV0ZXJzCiAgYW5wcgogIGludGVybmV0X3dpZmkKICBhY2Nlc3NfY2FyZF9zeXN0ZW0KICB2aXNpdG9yX3BhcmtpbmcKICBibXMKICBoYW5kaWNhcHBlZF9wYXJraW5nCiAgcGFpZF9wYXJraW5nX3N5c3RlbQp9Cgptb2RlbCBCdWlsZGluZyB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBtYW5hZ2VtZW50X2lkICAgICAgICAgICAgICAgICBTdHJpbmcgLy8gRm9yZWlnbiBrZXkgZmllbGQKICBidWlsZGluZ19uYW1lICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgYnVpbGRpbmdfdHlwZSAgICAgICAgICAgICAgICAgQnVpbGRpbmdUeXBlPwogIGFkZHJlc3MgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjaXR5ICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGNvdW50cnkgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBsYXQgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBsbmcgICAgICAgICAgICAgICAgICAgICAgICAgICBGbG9hdD8KICBub19vZl91bml0cyAgICAgICAgICAgICAgICAgICBJbnQ/CiAgbm9fb2ZfcGFya2luZ19mbG9vcnMgICAgICAgICAgSW50PwogIG5vX29mX3Bhcmtpbmdfc3BvdHMgICAgICAgICAgIEludD8KICBub19vZl9kZXZlbG9wZXJfcGFya2luZ19zcG90cyBJbnQ/CiAgZmFjaWxpdGllcyAgICAgICAgICAgICAgICAgICAgQnVpbGRpbmdGYWNpbGl0eVtdCgogIG1hbmFnZW1lbnQgICAgICAgIE1hbmFnZW1lbnQgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbWFuYWdlbWVudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBjb21tdW5pdHlfbWVtYmVycyBDb21tdW5pdHlNZW1iZXJzW10gLy8gUmVsYXRpb24gZmllbGQKICBwYXJraW5nX3Nwb3RzICAgICBQYXJraW5nU3BvdFtdIC8vIFJlbGF0aW9uIGZpZWxkCiAgcmVzZXJ2YXRpb25zICAgICAgUmVzZXJ2YXRpb25bXQogIGFwYXJ0bWVudF91bml0cyAgIEFwYXJ0bWVudFVuaXRbXQp9Cgptb2RlbCBDb21tdW5pdHlNZW1iZXJzIHsKICBpZCAgICAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBidWlsZGluZ19pZCAgU3RyaW5nIC8vIEZvcmVpZ24ga2V5CiAgdXNlcl9pZCAgICAgIFN0cmluZz8gLy8gRm9yZWlnbiBrZXkKICB1c2VyX3JvbGUgICAgVXNlcl9Sb2xlPwogIGVtYWlsICAgICAgICBTdHJpbmc/CiAgbmFtZSAgICAgICAgIFN0cmluZz8KICBwaG9uZSAgICAgICAgU3RyaW5nPwogIHN0YXR1cyAgICAgICBBY3RpdmVfU3RhdGUgQGRlZmF1bHQoaW5hY3RpdmUpCgogIHFyX2NvZGVfaWQgU3RyaW5nPyAgQHVuaXF1ZQogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCgogIGJ1aWxkaW5nICAgICAgQnVpbGRpbmcgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtidWlsZGluZ19pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBxcl9jb2RlICAgICAgIFFSQ29kZT8gICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcXJfY29kZV9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBwYXJraW5nX3Nwb3RzIFBhcmtpbmdTcG90W10gLy8gQSBjb21tdW5pdHkgbWVtYmVyIGNhbiBoYXZlIG11bHRpcGxlIHBhcmtpbmcgc3BvdHMKICB1c2VyICAgICAgICAgIFVzZXI/ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQogIGFwYXJ0bWVudF91bml0cyBBcGFydG1lbnRVbml0W10gCgogIEBAdW5pcXVlKFtidWlsZGluZ19pZCwgcGhvbmUsIGVtYWlsXSkKfQoKZW51bSBQYXJraW5nX1Nwb3RfVHlwZSB7CiAgcmVndWxhcgogIGVsZWN0cmljCn0KCm1vZGVsIFBhcmtpbmdTcG90IHsKICBpZCAgICAgICAgICBTdHJpbmcgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBidWlsZGluZ19pZCBTdHJpbmcgLy8gRm9yZWlnbiBrZXkKICBvd25lcl9pZCAgICBTdHJpbmc/IC8vIEZvcmVpZ24ga2V5CiAgcXJfY29kZV9pZCAgU3RyaW5nPyBAdW5pcXVlCiAgdmVoaWNsZV9pZCAgU3RyaW5nPyAvLyBGb3JlaWduIGtleQoKICBwYXJraW5nX2xldmVsICAgICAgICBJbnQ/CiAgcGFya2luZ19zcG90X251bWJlciAgU3RyaW5nPwogIHBhcmtpbmdfc3BvdF90eXBlICAgIFBhcmtpbmdfU3BvdF9UeXBlIEBkZWZhdWx0KHJlZ3VsYXIpCiAgcGFya2luZ19pbnN0cnVjdGlvbnMgU3RyaW5nPyAgICAgICAgICAgQGRlZmF1bHQoIiIpCgogIGJ1aWxkaW5nICAgICBCdWlsZGluZyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnVpbGRpbmdfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgb3duZXIgICAgICAgIENvbW11bml0eU1lbWJlcnM/IEByZWxhdGlvbihmaWVsZHM6IFtvd25lcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pIC8vIFJlbGF0aW9uIGF0dHJpYnV0ZQogIHFyX2NvZGUgICAgICBRUkNvZGU/ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbcXJfY29kZV9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICB2ZWhpY2xlICAgICAgVmVoaWNsZT8gICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3ZlaGljbGVfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkgLy8gUmVsYXRpb24gYXR0cmlidXRlCiAgbGlzdGluZ3MgICAgIExpc3RpbmdbXQogIHJlc2VydmF0aW9ucyBSZXNlcnZhdGlvbltdCgogIEBAdW5pcXVlKFtxcl9jb2RlX2lkLCBwYXJraW5nX2xldmVsLCBwYXJraW5nX3Nwb3RfbnVtYmVyXSkgLy8gRW5zdXJlIGEgcGFya2luZyBzcG90IGNhbiBvbmx5IGhhdmUgb25lIFFSIGNvZGUKfQoKZW51bSBRUkNvZGVfVHlwZSB7CiAgc3RhdGljCiAgZHluYW1pYwp9CgplbnVtIFFSQ29kZV9Gb3IgewogIGNvbW11bml0eV9tZW1iZXIKICBwYXJraW5nX3Nwb3QKfQoKbW9kZWwgUVJDb2RlIHsKICBpZCAgICAgICAgU3RyaW5nICAgICAgQGlkIEB1bmlxdWUKICBxcl90eXBlICAgUVJDb2RlX1R5cGUKICB1cmwgICAgICAgU3RyaW5nCiAgaW1hZ2VfdXJsIFN0cmluZz8KCiAgcXJfZm9yIFFSQ29kZV9Gb3IKCiAgb3duZXIgICAgICAgIENvbW11bml0eU1lbWJlcnM/CiAgcGFya2luZ19zcG90IFBhcmtpbmdTcG90Pwp9CgplbnVtIFZlaGljbGVfVHlwZSB7CiAgcmVndWxhcgogIGVsZWN0cmljCiAgaHlicmlkCn0KCm1vZGVsIFZlaGljbGUgewogIGlkIFN0cmluZyBAaWQgQHVuaXF1ZSBAZGVmYXVsdCh1dWlkKCkpCgogIHZlaGljbGVfcGxhdGUgU3RyaW5nPwogIHZlaGljbGVfdHlwZSAgVmVoaWNsZV9UeXBlIEBkZWZhdWx0KHJlZ3VsYXIpCgogIHBhcmtpbmdfc3BvdHMgUGFya2luZ1Nwb3RbXQp9CgplbnVtIExpc3RpbmdfVHlwZSB7CiAgaG91cmx5CiAgd2Vla2x5CiAgbW9udGhseQp9CgplbnVtIENvbmZpcm1hdGlvbl9UeXBlIHsKICBtYW51YWwKICBhdXRvbWF0aWMKfQoKbW9kZWwgTGlzdGluZyB7CiAgaWQgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIGhvc3RfaWQgICAgICAgICAgIFN0cmluZyAvLyBGb3JlaWduIGtleQogIHBhcmtpbmdfaWQgICAgICAgIFN0cmluZyAvLyBGb3JlaWduIGtleQogIHRpdGxlICAgICAgICAgICAgIFN0cmluZz8KICBkZXNjcmlwdGlvbiAgICAgICBTdHJpbmc/CiAgdHlwZSAgICAgICAgICAgICAgTGlzdGluZ19UeXBlPwogIHByaWNlICAgICAgICAgICAgIEludD8gLy8gSW4gY2VudHMKICBzdGF0dXMgICAgICAgICAgICBBY3RpdmVfU3RhdGUgICAgICBAZGVmYXVsdChhY3RpdmUpCiAgYm9va2luZ19zdGF0dXMgICAgQWN0aXZlX1N0YXRlICAgICAgQGRlZmF1bHQoaW5hY3RpdmUpCiAgY29uZmlybWF0aW9uX3R5cGUgQ29uZmlybWF0aW9uX1R5cGUgQGRlZmF1bHQoYXV0b21hdGljKQogIG5vX29mX2Jvb2tpbmdzICAgIEludD8gICAgICAgICAgICAgIEBkZWZhdWx0KDApCgogIGNyZWF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZF9hdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQHVwZGF0ZWRBdAoKICBob3N0ICAgICAgICAgVXNlciAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbaG9zdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICBwYXJraW5nX3Nwb3QgUGFya2luZ1Nwb3QgICBAcmVsYXRpb24oZmllbGRzOiBbcGFya2luZ19pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKSAvLyBSZWxhdGlvbiBhdHRyaWJ1dGUKICByZXNlcnZhdGlvbnMgUmVzZXJ2YXRpb25bXQoKICBAQHVuaXF1ZShbaG9zdF9pZCwgcGFya2luZ19pZF0pCn0KCmVudW0gUmVzZXJ2YXRpb25fU3RhdHVzIHsKICBwZW5kaW5nCiAgY29uZmlybWVkCiAgY2FuY2VsbGVkCiAgY29tcGxldGVkCn0KCm1vZGVsIFJlc2VydmF0aW9uIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgIEBpZCBAdW5pcXVlIEBkZWZhdWx0KHV1aWQoKSkKICBsaXN0aW5nX2lkICAgICAgU3RyaW5nPwogIGhvc3RfaWQgICAgICAgICBTdHJpbmc/CiAgdmlzaXRvcl9pZCAgICAgIFN0cmluZz8KICBidWlsZGluZ19pZCAgICAgU3RyaW5nPwogIHBhcmtpbmdfc3BvdF9pZCBTdHJpbmc/CiAgcHJpY2UgICAgICAgICAgIEludD8gLy8gSW4gY2VudHMKICBhcHBfZmVlcyAgICAgICAgSW50PyAvLyBJbiBjZW50cwogIHN0YXJ0X2RhdGUgICAgICBEYXRlVGltZT8KICBlbmRfZGF0ZSAgICAgICAgRGF0ZVRpbWU/CiAgc3RhdHVzICAgICAgICAgIFJlc2VydmF0aW9uX1N0YXR1cyBAZGVmYXVsdChwZW5kaW5nKQogIHN0cmlwZV9wYXltZW50X2ludGVudF9pZCBTdHJpbmc/CgogIGNoYXJnZSAgICAgICAgICBKc29uPwoKICBjcmVhdGVkX2F0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRfYXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEB1cGRhdGVkQXQKCiAgbGlzdGluZyAgTGlzdGluZz8gICAgIEByZWxhdGlvbihmaWVsZHM6IFtsaXN0aW5nX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgaG9zdCAgICAgVXNlcj8gICAgICAgIEByZWxhdGlvbihuYW1lOiAiSG9zdFJlbGF0aW9uIiwgZmllbGRzOiBbaG9zdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHZpc2l0b3IgIFVzZXI/ICAgICAgICBAcmVsYXRpb24obmFtZTogIlZpc2l0b3JSZWxhdGlvbiIsIGZpZWxkczogW3Zpc2l0b3JfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBidWlsZGluZyBCdWlsZGluZz8gICBAcmVsYXRpb24oZmllbGRzOiBbYnVpbGRpbmdfaWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwYXJraW5nICBQYXJraW5nU3BvdD8gQHJlbGF0aW9uKGZpZWxkczogW3Bhcmtpbmdfc3BvdF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQp9Cgptb2RlbCBBcGFydG1lbnRVbml0IHsKICBpZCAgICAgICAgICAgICAgICAgIFN0cmluZyAgQGlkIEB1bmlxdWUgQGRlZmF1bHQodXVpZCgpKQogIGJ1aWxkaW5nX2lkICAgICAgICAgU3RyaW5nIC8vIEZvcmVpZ24ga2V5CiAgdW5pdF9udW1iZXIgICAgICAgICBTdHJpbmc/CiAgbm9fb2ZfYmVkcm9vbXMgICAgICBJbnQ/CiAgbm9fb2ZfYmF0aHMgICAgICAgICBJbnQ/CiAgY29tbXVuaXR5X21lbWJlcl9pZCBTdHJpbmc/CgogIGJ1aWxkaW5nICAgICAgICAgIEJ1aWxkaW5nICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2J1aWxkaW5nX2lkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgY29tbXVuaXR5X21lbWJlciBDb21tdW5pdHlNZW1iZXJzPyBAcmVsYXRpb24oZmllbGRzOiBbY29tbXVuaXR5X21lbWJlcl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAdW5pcXVlKFtidWlsZGluZ19pZCwgdW5pdF9udW1iZXJdKQp9Cg==",
  "inlineSchemaHash": "16a1b98620a6c007205f1bcbe49521fce70cc6ccce1b86ce186369b463e2f5bd"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"PreSignUpManagement\":{\"dbName\":\"PreSignUpManagements\",\"fields\":[{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contact_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"User\":{\"dbName\":\"Users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_roles\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"User_Role\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verification_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Verification_Status\",\"default\":\"not_started\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobile_onboard_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Mobile_Onboard_Status\",\"default\":\"not_started\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_customer_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"ManagementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hostReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"HostRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitorReservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"VisitorRelation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"email\",\"phone_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"email\",\"phone_number\"]}],\"isGenerated\":false},\"Management\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"company_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customer_service_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emergency_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lng\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_plan_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subscription_PlanType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscription_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Active_State\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"business_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Active_State\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_joined\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_login\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"onboard_state\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"OnboardingState\",\"default\":\"management_onboard\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staffs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ManagementStaff\",\"relationName\":\"ManagementToManagementStaff\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buildings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToManagement\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ManagementToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ManagementStaff\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_added\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_updated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"ManagementToManagementStaff\",\"relationFromFields\":[\"management_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Building\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildingType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lng\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_units\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_parking_floors\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_parking_spots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_developer_parking_spots\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facilities\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BuildingFacility\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"management\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Management\",\"relationName\":\"BuildingToManagement\",\"relationFromFields\":[\"management_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"BuildingToCommunityMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"BuildingToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"BuildingToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apartment_units\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApartmentUnit\",\"relationName\":\"ApartmentUnitToBuilding\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CommunityMembers\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User_Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToCommunityMembers\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode\",\"relationName\":\"CommunityMembersToQRCode\",\"relationFromFields\":[\"qr_code_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"CommunityMembersToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"CommunityMembersToUser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apartment_units\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ApartmentUnit\",\"relationName\":\"ApartmentUnitToCommunityMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"building_id\",\"phone\",\"email\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"building_id\",\"phone\",\"email\"]}],\"isGenerated\":false},\"ParkingSpot\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Parking_Spot_Type\",\"default\":\"regular\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_instructions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToParkingSpot\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToParkingSpot\",\"relationFromFields\":[\"owner_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_code\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode\",\"relationName\":\"ParkingSpotToQRCode\",\"relationFromFields\":[\"qr_code_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle\",\"relationName\":\"ParkingSpotToVehicle\",\"relationFromFields\":[\"vehicle_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToParkingSpot\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ParkingSpotToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"qr_code_id\",\"parking_level\",\"parking_spot_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"qr_code_id\",\"parking_level\",\"parking_spot_number\"]}],\"isGenerated\":false},\"QRCode\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode_Type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qr_for\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRCode_For\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"CommunityMembersToQRCode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToQRCode\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_plate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vehicle_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Vehicle_Type\",\"default\":\"regular\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spots\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToVehicle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Listing\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing_Type\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"active\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"booking_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Active_State\",\"default\":\"inactive\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmation_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Confirmation_Type\",\"default\":\"automatic\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_bookings\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"host\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ListingToUser\",\"relationFromFields\":[\"host_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ListingToParkingSpot\",\"relationFromFields\":[\"parking_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ListingToReservation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"host_id\",\"parking_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"host_id\",\"parking_id\"]}],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"listing_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitor_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking_spot_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"app_fees\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Reservation_Status\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stripe_payment_intent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"charge\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"listing\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Listing\",\"relationName\":\"ListingToReservation\",\"relationFromFields\":[\"listing_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"host\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"HostRelation\",\"relationFromFields\":[\"host_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"visitor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"VisitorRelation\",\"relationFromFields\":[\"visitor_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"BuildingToReservation\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parking\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ParkingSpot\",\"relationName\":\"ParkingSpotToReservation\",\"relationFromFields\":[\"parking_spot_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ApartmentUnit\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unit_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_bedrooms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_of_baths\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"building\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Building\",\"relationName\":\"ApartmentUnitToBuilding\",\"relationFromFields\":[\"building_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"community_member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CommunityMembers\",\"relationName\":\"ApartmentUnitToCommunityMembers\",\"relationFromFields\":[\"community_member_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"building_id\",\"unit_number\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"building_id\",\"unit_number\"]}],\"isGenerated\":false}},\"enums\":{\"User_Role\":{\"values\":[{\"name\":\"owner\",\"dbName\":null},{\"name\":\"tenant\",\"dbName\":null},{\"name\":\"building_security\",\"dbName\":null},{\"name\":\"building_manager\",\"dbName\":null},{\"name\":\"admin\",\"dbName\":null},{\"name\":\"visitor\",\"dbName\":null}],\"dbName\":null},\"Verification_Status\":{\"values\":[{\"name\":\"not_started\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null},{\"name\":\"failed\",\"dbName\":null}],\"dbName\":null},\"Mobile_Onboard_Status\":{\"values\":[{\"name\":\"not_started\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null},\"Subscription_PlanType\":{\"values\":[{\"name\":\"basic\",\"dbName\":null},{\"name\":\"standard\",\"dbName\":null},{\"name\":\"pro\",\"dbName\":null}],\"dbName\":null},\"Active_State\":{\"values\":[{\"name\":\"active\",\"dbName\":null},{\"name\":\"inactive\",\"dbName\":null}],\"dbName\":null},\"OnboardingState\":{\"values\":[{\"name\":\"management_onboard\",\"dbName\":null},{\"name\":\"building_onboard\",\"dbName\":null},{\"name\":\"payment\",\"dbName\":null},{\"name\":\"finish\",\"dbName\":null}],\"dbName\":null},\"BuildingType\":{\"values\":[{\"name\":\"commercial\",\"dbName\":null},{\"name\":\"residential\",\"dbName\":null},{\"name\":\"governmental\",\"dbName\":null}],\"dbName\":null},\"BuildingFacility\":{\"values\":[{\"name\":\"ev_charging\",\"dbName\":null},{\"name\":\"bulk_parking_owners\",\"dbName\":null},{\"name\":\"smart_meters\",\"dbName\":null},{\"name\":\"anpr\",\"dbName\":null},{\"name\":\"internet_wifi\",\"dbName\":null},{\"name\":\"access_card_system\",\"dbName\":null},{\"name\":\"visitor_parking\",\"dbName\":null},{\"name\":\"bms\",\"dbName\":null},{\"name\":\"handicapped_parking\",\"dbName\":null},{\"name\":\"paid_parking_system\",\"dbName\":null}],\"dbName\":null},\"Parking_Spot_Type\":{\"values\":[{\"name\":\"regular\",\"dbName\":null},{\"name\":\"electric\",\"dbName\":null}],\"dbName\":null},\"QRCode_Type\":{\"values\":[{\"name\":\"static\",\"dbName\":null},{\"name\":\"dynamic\",\"dbName\":null}],\"dbName\":null},\"QRCode_For\":{\"values\":[{\"name\":\"community_member\",\"dbName\":null},{\"name\":\"parking_spot\",\"dbName\":null}],\"dbName\":null},\"Vehicle_Type\":{\"values\":[{\"name\":\"regular\",\"dbName\":null},{\"name\":\"electric\",\"dbName\":null},{\"name\":\"hybrid\",\"dbName\":null}],\"dbName\":null},\"Listing_Type\":{\"values\":[{\"name\":\"hourly\",\"dbName\":null},{\"name\":\"weekly\",\"dbName\":null},{\"name\":\"monthly\",\"dbName\":null}],\"dbName\":null},\"Confirmation_Type\":{\"values\":[{\"name\":\"manual\",\"dbName\":null},{\"name\":\"automatic\",\"dbName\":null}],\"dbName\":null},\"Reservation_Status\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"confirmed\",\"dbName\":null},{\"name\":\"cancelled\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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
