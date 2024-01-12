
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
  unit_numbers: 'unit_numbers',
  status: 'status',
  qr_code_id: 'qr_code_id'
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
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

exports.Prisma.ModelName = {
  PreSignUpManagement: 'PreSignUpManagement',
  User: 'User',
  Management: 'Management',
  ManagementStaff: 'ManagementStaff',
  Building: 'Building',
  CommunityMembers: 'CommunityMembers',
  ParkingSpot: 'ParkingSpot',
  QRCode: 'QRCode',
  Vehicle: 'Vehicle'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
