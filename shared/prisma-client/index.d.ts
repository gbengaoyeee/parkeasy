
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PreSignUpManagement
 * 
 */
export type PreSignUpManagement = $Result.DefaultSelection<Prisma.$PreSignUpManagementPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Management
 * 
 */
export type Management = $Result.DefaultSelection<Prisma.$ManagementPayload>
/**
 * Model ManagementStaff
 * 
 */
export type ManagementStaff = $Result.DefaultSelection<Prisma.$ManagementStaffPayload>
/**
 * Model Building
 * 
 */
export type Building = $Result.DefaultSelection<Prisma.$BuildingPayload>
/**
 * Model CommunityMembers
 * 
 */
export type CommunityMembers = $Result.DefaultSelection<Prisma.$CommunityMembersPayload>
/**
 * Model ParkingSpot
 * 
 */
export type ParkingSpot = $Result.DefaultSelection<Prisma.$ParkingSpotPayload>
/**
 * Model QRCode
 * 
 */
export type QRCode = $Result.DefaultSelection<Prisma.$QRCodePayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Verification_Status: {
  not_started: 'not_started',
  completed: 'completed',
  failed: 'failed'
};

export type Verification_Status = (typeof Verification_Status)[keyof typeof Verification_Status]


export const Mobile_Onboard_Status: {
  not_started: 'not_started',
  completed: 'completed'
};

export type Mobile_Onboard_Status = (typeof Mobile_Onboard_Status)[keyof typeof Mobile_Onboard_Status]


export const User_Role: {
  owner: 'owner',
  tenant: 'tenant',
  building_security: 'building_security',
  building_manager: 'building_manager',
  admin: 'admin',
  visitor: 'visitor'
};

export type User_Role = (typeof User_Role)[keyof typeof User_Role]


export const Subscription_PlanType: {
  basic: 'basic',
  standard: 'standard',
  pro: 'pro'
};

export type Subscription_PlanType = (typeof Subscription_PlanType)[keyof typeof Subscription_PlanType]


export const Active_State: {
  active: 'active',
  inactive: 'inactive'
};

export type Active_State = (typeof Active_State)[keyof typeof Active_State]


export const OnboardingState: {
  management_onboard: 'management_onboard',
  building_onboard: 'building_onboard',
  payment: 'payment',
  finish: 'finish'
};

export type OnboardingState = (typeof OnboardingState)[keyof typeof OnboardingState]


export const BuildingType: {
  commercial: 'commercial',
  residential: 'residential',
  governmental: 'governmental'
};

export type BuildingType = (typeof BuildingType)[keyof typeof BuildingType]


export const BuildingFacility: {
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

export type BuildingFacility = (typeof BuildingFacility)[keyof typeof BuildingFacility]


export const Parking_Spot_Type: {
  regular: 'regular',
  electric: 'electric'
};

export type Parking_Spot_Type = (typeof Parking_Spot_Type)[keyof typeof Parking_Spot_Type]


export const QRCode_Type: {
  static: 'static',
  dynamic: 'dynamic'
};

export type QRCode_Type = (typeof QRCode_Type)[keyof typeof QRCode_Type]


export const QRCode_For: {
  community_member: 'community_member',
  parking_spot: 'parking_spot'
};

export type QRCode_For = (typeof QRCode_For)[keyof typeof QRCode_For]


export const Vehicle_Type: {
  regular: 'regular',
  electric: 'electric',
  hybrid: 'hybrid'
};

export type Vehicle_Type = (typeof Vehicle_Type)[keyof typeof Vehicle_Type]

}

export type Verification_Status = $Enums.Verification_Status

export const Verification_Status: typeof $Enums.Verification_Status

export type Mobile_Onboard_Status = $Enums.Mobile_Onboard_Status

export const Mobile_Onboard_Status: typeof $Enums.Mobile_Onboard_Status

export type User_Role = $Enums.User_Role

export const User_Role: typeof $Enums.User_Role

export type Subscription_PlanType = $Enums.Subscription_PlanType

export const Subscription_PlanType: typeof $Enums.Subscription_PlanType

export type Active_State = $Enums.Active_State

export const Active_State: typeof $Enums.Active_State

export type OnboardingState = $Enums.OnboardingState

export const OnboardingState: typeof $Enums.OnboardingState

export type BuildingType = $Enums.BuildingType

export const BuildingType: typeof $Enums.BuildingType

export type BuildingFacility = $Enums.BuildingFacility

export const BuildingFacility: typeof $Enums.BuildingFacility

export type Parking_Spot_Type = $Enums.Parking_Spot_Type

export const Parking_Spot_Type: typeof $Enums.Parking_Spot_Type

export type QRCode_Type = $Enums.QRCode_Type

export const QRCode_Type: typeof $Enums.QRCode_Type

export type QRCode_For = $Enums.QRCode_For

export const QRCode_For: typeof $Enums.QRCode_For

export type Vehicle_Type = $Enums.Vehicle_Type

export const Vehicle_Type: typeof $Enums.Vehicle_Type

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PreSignUpManagements
 * const preSignUpManagements = await prisma.preSignUpManagement.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PreSignUpManagements
   * const preSignUpManagements = await prisma.preSignUpManagement.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.preSignUpManagement`: Exposes CRUD operations for the **PreSignUpManagement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreSignUpManagements
    * const preSignUpManagements = await prisma.preSignUpManagement.findMany()
    * ```
    */
  get preSignUpManagement(): Prisma.PreSignUpManagementDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.management`: Exposes CRUD operations for the **Management** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Managements
    * const managements = await prisma.management.findMany()
    * ```
    */
  get management(): Prisma.ManagementDelegate<ExtArgs>;

  /**
   * `prisma.managementStaff`: Exposes CRUD operations for the **ManagementStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagementStaffs
    * const managementStaffs = await prisma.managementStaff.findMany()
    * ```
    */
  get managementStaff(): Prisma.ManagementStaffDelegate<ExtArgs>;

  /**
   * `prisma.building`: Exposes CRUD operations for the **Building** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buildings
    * const buildings = await prisma.building.findMany()
    * ```
    */
  get building(): Prisma.BuildingDelegate<ExtArgs>;

  /**
   * `prisma.communityMembers`: Exposes CRUD operations for the **CommunityMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityMembers
    * const communityMembers = await prisma.communityMembers.findMany()
    * ```
    */
  get communityMembers(): Prisma.CommunityMembersDelegate<ExtArgs>;

  /**
   * `prisma.parkingSpot`: Exposes CRUD operations for the **ParkingSpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSpots
    * const parkingSpots = await prisma.parkingSpot.findMany()
    * ```
    */
  get parkingSpot(): Prisma.ParkingSpotDelegate<ExtArgs>;

  /**
   * `prisma.qRCode`: Exposes CRUD operations for the **QRCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRCodes
    * const qRCodes = await prisma.qRCode.findMany()
    * ```
    */
  get qRCode(): Prisma.QRCodeDelegate<ExtArgs>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'preSignUpManagement' | 'user' | 'management' | 'managementStaff' | 'building' | 'communityMembers' | 'parkingSpot' | 'qRCode' | 'vehicle'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      PreSignUpManagement: {
        payload: Prisma.$PreSignUpManagementPayload<ExtArgs>
        fields: Prisma.PreSignUpManagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreSignUpManagementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreSignUpManagementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          findFirst: {
            args: Prisma.PreSignUpManagementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreSignUpManagementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          findMany: {
            args: Prisma.PreSignUpManagementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>[]
          }
          create: {
            args: Prisma.PreSignUpManagementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          createMany: {
            args: Prisma.PreSignUpManagementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PreSignUpManagementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          update: {
            args: Prisma.PreSignUpManagementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          deleteMany: {
            args: Prisma.PreSignUpManagementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PreSignUpManagementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PreSignUpManagementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PreSignUpManagementPayload>
          }
          aggregate: {
            args: Prisma.PreSignUpManagementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePreSignUpManagement>
          }
          groupBy: {
            args: Prisma.PreSignUpManagementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PreSignUpManagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreSignUpManagementCountArgs<ExtArgs>,
            result: $Utils.Optional<PreSignUpManagementCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Management: {
        payload: Prisma.$ManagementPayload<ExtArgs>
        fields: Prisma.ManagementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          findFirst: {
            args: Prisma.ManagementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          findMany: {
            args: Prisma.ManagementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>[]
          }
          create: {
            args: Prisma.ManagementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          createMany: {
            args: Prisma.ManagementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ManagementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          update: {
            args: Prisma.ManagementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          deleteMany: {
            args: Prisma.ManagementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManagementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManagementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementPayload>
          }
          aggregate: {
            args: Prisma.ManagementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManagement>
          }
          groupBy: {
            args: Prisma.ManagementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManagementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagementCountArgs<ExtArgs>,
            result: $Utils.Optional<ManagementCountAggregateOutputType> | number
          }
        }
      }
      ManagementStaff: {
        payload: Prisma.$ManagementStaffPayload<ExtArgs>
        fields: Prisma.ManagementStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagementStaffFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagementStaffFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          findFirst: {
            args: Prisma.ManagementStaffFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagementStaffFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          findMany: {
            args: Prisma.ManagementStaffFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>[]
          }
          create: {
            args: Prisma.ManagementStaffCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          createMany: {
            args: Prisma.ManagementStaffCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ManagementStaffDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          update: {
            args: Prisma.ManagementStaffUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          deleteMany: {
            args: Prisma.ManagementStaffDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ManagementStaffUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ManagementStaffUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ManagementStaffPayload>
          }
          aggregate: {
            args: Prisma.ManagementStaffAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateManagementStaff>
          }
          groupBy: {
            args: Prisma.ManagementStaffGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ManagementStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagementStaffCountArgs<ExtArgs>,
            result: $Utils.Optional<ManagementStaffCountAggregateOutputType> | number
          }
        }
      }
      Building: {
        payload: Prisma.$BuildingPayload<ExtArgs>
        fields: Prisma.BuildingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findFirst: {
            args: Prisma.BuildingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          findMany: {
            args: Prisma.BuildingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>[]
          }
          create: {
            args: Prisma.BuildingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          createMany: {
            args: Prisma.BuildingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BuildingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          update: {
            args: Prisma.BuildingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          deleteMany: {
            args: Prisma.BuildingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BuildingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BuildingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BuildingPayload>
          }
          aggregate: {
            args: Prisma.BuildingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBuilding>
          }
          groupBy: {
            args: Prisma.BuildingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BuildingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildingCountArgs<ExtArgs>,
            result: $Utils.Optional<BuildingCountAggregateOutputType> | number
          }
        }
      }
      CommunityMembers: {
        payload: Prisma.$CommunityMembersPayload<ExtArgs>
        fields: Prisma.CommunityMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityMembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityMembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          findFirst: {
            args: Prisma.CommunityMembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityMembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          findMany: {
            args: Prisma.CommunityMembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>[]
          }
          create: {
            args: Prisma.CommunityMembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          createMany: {
            args: Prisma.CommunityMembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityMembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          update: {
            args: Prisma.CommunityMembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          deleteMany: {
            args: Prisma.CommunityMembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityMembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityMembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityMembersPayload>
          }
          aggregate: {
            args: Prisma.CommunityMembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunityMembers>
          }
          groupBy: {
            args: Prisma.CommunityMembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityMembersCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityMembersCountAggregateOutputType> | number
          }
        }
      }
      ParkingSpot: {
        payload: Prisma.$ParkingSpotPayload<ExtArgs>
        fields: Prisma.ParkingSpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSpotFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSpotFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSpotFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSpotFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findMany: {
            args: Prisma.ParkingSpotFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          create: {
            args: Prisma.ParkingSpotCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          createMany: {
            args: Prisma.ParkingSpotCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ParkingSpotDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          update: {
            args: Prisma.ParkingSpotUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSpotDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSpotUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ParkingSpotUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSpotAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateParkingSpot>
          }
          groupBy: {
            args: Prisma.ParkingSpotGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ParkingSpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSpotCountArgs<ExtArgs>,
            result: $Utils.Optional<ParkingSpotCountAggregateOutputType> | number
          }
        }
      }
      QRCode: {
        payload: Prisma.$QRCodePayload<ExtArgs>
        fields: Prisma.QRCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findFirst: {
            args: Prisma.QRCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          findMany: {
            args: Prisma.QRCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>[]
          }
          create: {
            args: Prisma.QRCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          createMany: {
            args: Prisma.QRCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.QRCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          update: {
            args: Prisma.QRCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          deleteMany: {
            args: Prisma.QRCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.QRCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.QRCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$QRCodePayload>
          }
          aggregate: {
            args: Prisma.QRCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQRCode>
          }
          groupBy: {
            args: Prisma.QRCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QRCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<QRCodeCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>,
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    community_members: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_members?: boolean | UserCountOutputTypeCountCommunity_membersArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunity_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMembersWhereInput
  }



  /**
   * Count Type ManagementCountOutputType
   */

  export type ManagementCountOutputType = {
    staffs: number
    buildings: number
  }

  export type ManagementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffs?: boolean | ManagementCountOutputTypeCountStaffsArgs
    buildings?: boolean | ManagementCountOutputTypeCountBuildingsArgs
  }

  // Custom InputTypes

  /**
   * ManagementCountOutputType without action
   */
  export type ManagementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementCountOutputType
     */
    select?: ManagementCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ManagementCountOutputType without action
   */
  export type ManagementCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagementStaffWhereInput
  }


  /**
   * ManagementCountOutputType without action
   */
  export type ManagementCountOutputTypeCountBuildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
  }



  /**
   * Count Type BuildingCountOutputType
   */

  export type BuildingCountOutputType = {
    community_members: number
    parking_spots: number
  }

  export type BuildingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community_members?: boolean | BuildingCountOutputTypeCountCommunity_membersArgs
    parking_spots?: boolean | BuildingCountOutputTypeCountParking_spotsArgs
  }

  // Custom InputTypes

  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildingCountOutputType
     */
    select?: BuildingCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountCommunity_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMembersWhereInput
  }


  /**
   * BuildingCountOutputType without action
   */
  export type BuildingCountOutputTypeCountParking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
  }



  /**
   * Count Type CommunityMembersCountOutputType
   */

  export type CommunityMembersCountOutputType = {
    parking_spots: number
  }

  export type CommunityMembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking_spots?: boolean | CommunityMembersCountOutputTypeCountParking_spotsArgs
  }

  // Custom InputTypes

  /**
   * CommunityMembersCountOutputType without action
   */
  export type CommunityMembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembersCountOutputType
     */
    select?: CommunityMembersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityMembersCountOutputType without action
   */
  export type CommunityMembersCountOutputTypeCountParking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
  }



  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    parking_spots: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking_spots?: boolean | VehicleCountOutputTypeCountParking_spotsArgs
  }

  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountParking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
  }



  /**
   * Models
   */

  /**
   * Model PreSignUpManagement
   */

  export type AggregatePreSignUpManagement = {
    _count: PreSignUpManagementCountAggregateOutputType | null
    _min: PreSignUpManagementMinAggregateOutputType | null
    _max: PreSignUpManagementMaxAggregateOutputType | null
  }

  export type PreSignUpManagementMinAggregateOutputType = {
    email: string | null
    company_name: string | null
    contact_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PreSignUpManagementMaxAggregateOutputType = {
    email: string | null
    company_name: string | null
    contact_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PreSignUpManagementCountAggregateOutputType = {
    email: number
    company_name: number
    contact_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PreSignUpManagementMinAggregateInputType = {
    email?: true
    company_name?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
  }

  export type PreSignUpManagementMaxAggregateInputType = {
    email?: true
    company_name?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
  }

  export type PreSignUpManagementCountAggregateInputType = {
    email?: true
    company_name?: true
    contact_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PreSignUpManagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreSignUpManagement to aggregate.
     */
    where?: PreSignUpManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreSignUpManagements to fetch.
     */
    orderBy?: PreSignUpManagementOrderByWithRelationInput | PreSignUpManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreSignUpManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreSignUpManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreSignUpManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreSignUpManagements
    **/
    _count?: true | PreSignUpManagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreSignUpManagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreSignUpManagementMaxAggregateInputType
  }

  export type GetPreSignUpManagementAggregateType<T extends PreSignUpManagementAggregateArgs> = {
        [P in keyof T & keyof AggregatePreSignUpManagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreSignUpManagement[P]>
      : GetScalarType<T[P], AggregatePreSignUpManagement[P]>
  }




  export type PreSignUpManagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreSignUpManagementWhereInput
    orderBy?: PreSignUpManagementOrderByWithAggregationInput | PreSignUpManagementOrderByWithAggregationInput[]
    by: PreSignUpManagementScalarFieldEnum[] | PreSignUpManagementScalarFieldEnum
    having?: PreSignUpManagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreSignUpManagementCountAggregateInputType | true
    _min?: PreSignUpManagementMinAggregateInputType
    _max?: PreSignUpManagementMaxAggregateInputType
  }

  export type PreSignUpManagementGroupByOutputType = {
    email: string
    company_name: string
    contact_number: string
    created_at: Date
    updated_at: Date
    _count: PreSignUpManagementCountAggregateOutputType | null
    _min: PreSignUpManagementMinAggregateOutputType | null
    _max: PreSignUpManagementMaxAggregateOutputType | null
  }

  type GetPreSignUpManagementGroupByPayload<T extends PreSignUpManagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreSignUpManagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreSignUpManagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreSignUpManagementGroupByOutputType[P]>
            : GetScalarType<T[P], PreSignUpManagementGroupByOutputType[P]>
        }
      >
    >


  export type PreSignUpManagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    company_name?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["preSignUpManagement"]>

  export type PreSignUpManagementSelectScalar = {
    email?: boolean
    company_name?: boolean
    contact_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $PreSignUpManagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreSignUpManagement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      company_name: string
      contact_number: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["preSignUpManagement"]>
    composites: {}
  }


  type PreSignUpManagementGetPayload<S extends boolean | null | undefined | PreSignUpManagementDefaultArgs> = $Result.GetResult<Prisma.$PreSignUpManagementPayload, S>

  type PreSignUpManagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PreSignUpManagementFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PreSignUpManagementCountAggregateInputType | true
    }

  export interface PreSignUpManagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreSignUpManagement'], meta: { name: 'PreSignUpManagement' } }
    /**
     * Find zero or one PreSignUpManagement that matches the filter.
     * @param {PreSignUpManagementFindUniqueArgs} args - Arguments to find a PreSignUpManagement
     * @example
     * // Get one PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PreSignUpManagementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementFindUniqueArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PreSignUpManagement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PreSignUpManagementFindUniqueOrThrowArgs} args - Arguments to find a PreSignUpManagement
     * @example
     * // Get one PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PreSignUpManagementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PreSignUpManagement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementFindFirstArgs} args - Arguments to find a PreSignUpManagement
     * @example
     * // Get one PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PreSignUpManagementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementFindFirstArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PreSignUpManagement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementFindFirstOrThrowArgs} args - Arguments to find a PreSignUpManagement
     * @example
     * // Get one PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PreSignUpManagementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PreSignUpManagements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreSignUpManagements
     * const preSignUpManagements = await prisma.preSignUpManagement.findMany()
     * 
     * // Get first 10 PreSignUpManagements
     * const preSignUpManagements = await prisma.preSignUpManagement.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const preSignUpManagementWithEmailOnly = await prisma.preSignUpManagement.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends PreSignUpManagementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PreSignUpManagement.
     * @param {PreSignUpManagementCreateArgs} args - Arguments to create a PreSignUpManagement.
     * @example
     * // Create one PreSignUpManagement
     * const PreSignUpManagement = await prisma.preSignUpManagement.create({
     *   data: {
     *     // ... data to create a PreSignUpManagement
     *   }
     * })
     * 
    **/
    create<T extends PreSignUpManagementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementCreateArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PreSignUpManagements.
     *     @param {PreSignUpManagementCreateManyArgs} args - Arguments to create many PreSignUpManagements.
     *     @example
     *     // Create many PreSignUpManagements
     *     const preSignUpManagement = await prisma.preSignUpManagement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PreSignUpManagementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PreSignUpManagement.
     * @param {PreSignUpManagementDeleteArgs} args - Arguments to delete one PreSignUpManagement.
     * @example
     * // Delete one PreSignUpManagement
     * const PreSignUpManagement = await prisma.preSignUpManagement.delete({
     *   where: {
     *     // ... filter to delete one PreSignUpManagement
     *   }
     * })
     * 
    **/
    delete<T extends PreSignUpManagementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementDeleteArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PreSignUpManagement.
     * @param {PreSignUpManagementUpdateArgs} args - Arguments to update one PreSignUpManagement.
     * @example
     * // Update one PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PreSignUpManagementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementUpdateArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PreSignUpManagements.
     * @param {PreSignUpManagementDeleteManyArgs} args - Arguments to filter PreSignUpManagements to delete.
     * @example
     * // Delete a few PreSignUpManagements
     * const { count } = await prisma.preSignUpManagement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PreSignUpManagementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PreSignUpManagementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreSignUpManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreSignUpManagements
     * const preSignUpManagement = await prisma.preSignUpManagement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PreSignUpManagementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PreSignUpManagement.
     * @param {PreSignUpManagementUpsertArgs} args - Arguments to update or create a PreSignUpManagement.
     * @example
     * // Update or create a PreSignUpManagement
     * const preSignUpManagement = await prisma.preSignUpManagement.upsert({
     *   create: {
     *     // ... data to create a PreSignUpManagement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreSignUpManagement we want to update
     *   }
     * })
    **/
    upsert<T extends PreSignUpManagementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PreSignUpManagementUpsertArgs<ExtArgs>>
    ): Prisma__PreSignUpManagementClient<$Result.GetResult<Prisma.$PreSignUpManagementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PreSignUpManagements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementCountArgs} args - Arguments to filter PreSignUpManagements to count.
     * @example
     * // Count the number of PreSignUpManagements
     * const count = await prisma.preSignUpManagement.count({
     *   where: {
     *     // ... the filter for the PreSignUpManagements we want to count
     *   }
     * })
    **/
    count<T extends PreSignUpManagementCountArgs>(
      args?: Subset<T, PreSignUpManagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreSignUpManagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreSignUpManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreSignUpManagementAggregateArgs>(args: Subset<T, PreSignUpManagementAggregateArgs>): Prisma.PrismaPromise<GetPreSignUpManagementAggregateType<T>>

    /**
     * Group by PreSignUpManagement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreSignUpManagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreSignUpManagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreSignUpManagementGroupByArgs['orderBy'] }
        : { orderBy?: PreSignUpManagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreSignUpManagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreSignUpManagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreSignUpManagement model
   */
  readonly fields: PreSignUpManagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreSignUpManagement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreSignUpManagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PreSignUpManagement model
   */ 
  interface PreSignUpManagementFieldRefs {
    readonly email: FieldRef<"PreSignUpManagement", 'String'>
    readonly company_name: FieldRef<"PreSignUpManagement", 'String'>
    readonly contact_number: FieldRef<"PreSignUpManagement", 'String'>
    readonly created_at: FieldRef<"PreSignUpManagement", 'DateTime'>
    readonly updated_at: FieldRef<"PreSignUpManagement", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PreSignUpManagement findUnique
   */
  export type PreSignUpManagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter, which PreSignUpManagement to fetch.
     */
    where: PreSignUpManagementWhereUniqueInput
  }


  /**
   * PreSignUpManagement findUniqueOrThrow
   */
  export type PreSignUpManagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter, which PreSignUpManagement to fetch.
     */
    where: PreSignUpManagementWhereUniqueInput
  }


  /**
   * PreSignUpManagement findFirst
   */
  export type PreSignUpManagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter, which PreSignUpManagement to fetch.
     */
    where?: PreSignUpManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreSignUpManagements to fetch.
     */
    orderBy?: PreSignUpManagementOrderByWithRelationInput | PreSignUpManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreSignUpManagements.
     */
    cursor?: PreSignUpManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreSignUpManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreSignUpManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreSignUpManagements.
     */
    distinct?: PreSignUpManagementScalarFieldEnum | PreSignUpManagementScalarFieldEnum[]
  }


  /**
   * PreSignUpManagement findFirstOrThrow
   */
  export type PreSignUpManagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter, which PreSignUpManagement to fetch.
     */
    where?: PreSignUpManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreSignUpManagements to fetch.
     */
    orderBy?: PreSignUpManagementOrderByWithRelationInput | PreSignUpManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreSignUpManagements.
     */
    cursor?: PreSignUpManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreSignUpManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreSignUpManagements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreSignUpManagements.
     */
    distinct?: PreSignUpManagementScalarFieldEnum | PreSignUpManagementScalarFieldEnum[]
  }


  /**
   * PreSignUpManagement findMany
   */
  export type PreSignUpManagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter, which PreSignUpManagements to fetch.
     */
    where?: PreSignUpManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreSignUpManagements to fetch.
     */
    orderBy?: PreSignUpManagementOrderByWithRelationInput | PreSignUpManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreSignUpManagements.
     */
    cursor?: PreSignUpManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreSignUpManagements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreSignUpManagements.
     */
    skip?: number
    distinct?: PreSignUpManagementScalarFieldEnum | PreSignUpManagementScalarFieldEnum[]
  }


  /**
   * PreSignUpManagement create
   */
  export type PreSignUpManagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * The data needed to create a PreSignUpManagement.
     */
    data: XOR<PreSignUpManagementCreateInput, PreSignUpManagementUncheckedCreateInput>
  }


  /**
   * PreSignUpManagement createMany
   */
  export type PreSignUpManagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreSignUpManagements.
     */
    data: PreSignUpManagementCreateManyInput | PreSignUpManagementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PreSignUpManagement update
   */
  export type PreSignUpManagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * The data needed to update a PreSignUpManagement.
     */
    data: XOR<PreSignUpManagementUpdateInput, PreSignUpManagementUncheckedUpdateInput>
    /**
     * Choose, which PreSignUpManagement to update.
     */
    where: PreSignUpManagementWhereUniqueInput
  }


  /**
   * PreSignUpManagement updateMany
   */
  export type PreSignUpManagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreSignUpManagements.
     */
    data: XOR<PreSignUpManagementUpdateManyMutationInput, PreSignUpManagementUncheckedUpdateManyInput>
    /**
     * Filter which PreSignUpManagements to update
     */
    where?: PreSignUpManagementWhereInput
  }


  /**
   * PreSignUpManagement upsert
   */
  export type PreSignUpManagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * The filter to search for the PreSignUpManagement to update in case it exists.
     */
    where: PreSignUpManagementWhereUniqueInput
    /**
     * In case the PreSignUpManagement found by the `where` argument doesn't exist, create a new PreSignUpManagement with this data.
     */
    create: XOR<PreSignUpManagementCreateInput, PreSignUpManagementUncheckedCreateInput>
    /**
     * In case the PreSignUpManagement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreSignUpManagementUpdateInput, PreSignUpManagementUncheckedUpdateInput>
  }


  /**
   * PreSignUpManagement delete
   */
  export type PreSignUpManagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
    /**
     * Filter which PreSignUpManagement to delete.
     */
    where: PreSignUpManagementWhereUniqueInput
  }


  /**
   * PreSignUpManagement deleteMany
   */
  export type PreSignUpManagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreSignUpManagements to delete
     */
    where?: PreSignUpManagementWhereInput
  }


  /**
   * PreSignUpManagement without action
   */
  export type PreSignUpManagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreSignUpManagement
     */
    select?: PreSignUpManagementSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone_number: string | null
    first_name: string | null
    last_name: string | null
    verification_status: $Enums.Verification_Status | null
    mobile_onboard_status: $Enums.Mobile_Onboard_Status | null
    created_at: Date | null
    last_login: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone_number: string | null
    first_name: string | null
    last_name: string | null
    verification_status: $Enums.Verification_Status | null
    mobile_onboard_status: $Enums.Mobile_Onboard_Status | null
    created_at: Date | null
    last_login: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone_number: number
    first_name: number
    last_name: number
    user_roles: number
    verification_status: number
    mobile_onboard_status: number
    created_at: number
    last_login: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone_number?: true
    first_name?: true
    last_name?: true
    verification_status?: true
    mobile_onboard_status?: true
    created_at?: true
    last_login?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone_number?: true
    first_name?: true
    last_name?: true
    verification_status?: true
    mobile_onboard_status?: true
    created_at?: true
    last_login?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone_number?: true
    first_name?: true
    last_name?: true
    user_roles?: true
    verification_status?: true
    mobile_onboard_status?: true
    created_at?: true
    last_login?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phone_number: string | null
    first_name: string | null
    last_name: string | null
    user_roles: $Enums.User_Role[]
    verification_status: $Enums.Verification_Status | null
    mobile_onboard_status: $Enums.Mobile_Onboard_Status | null
    created_at: Date
    last_login: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone_number?: boolean
    first_name?: boolean
    last_name?: boolean
    user_roles?: boolean
    verification_status?: boolean
    mobile_onboard_status?: boolean
    created_at?: boolean
    last_login?: boolean
    management?: boolean | User$managementArgs<ExtArgs>
    community_members?: boolean | User$community_membersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone_number?: boolean
    first_name?: boolean
    last_name?: boolean
    user_roles?: boolean
    verification_status?: boolean
    mobile_onboard_status?: boolean
    created_at?: boolean
    last_login?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    management?: boolean | User$managementArgs<ExtArgs>
    community_members?: boolean | User$community_membersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      management: Prisma.$ManagementPayload<ExtArgs> | null
      community_members: Prisma.$CommunityMembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phone_number: string | null
      first_name: string | null
      last_name: string | null
      user_roles: $Enums.User_Role[]
      verification_status: $Enums.Verification_Status | null
      mobile_onboard_status: $Enums.Mobile_Onboard_Status | null
      created_at: Date
      last_login: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    management<T extends User$managementArgs<ExtArgs> = {}>(args?: Subset<T, User$managementArgs<ExtArgs>>): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    community_members<T extends User$community_membersArgs<ExtArgs> = {}>(args?: Subset<T, User$community_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly user_roles: FieldRef<"User", 'User_Role[]'>
    readonly verification_status: FieldRef<"User", 'Verification_Status'>
    readonly mobile_onboard_status: FieldRef<"User", 'Mobile_Onboard_Status'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly last_login: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.management
   */
  export type User$managementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    where?: ManagementWhereInput
  }


  /**
   * User.community_members
   */
  export type User$community_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    where?: CommunityMembersWhereInput
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    cursor?: CommunityMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityMembersScalarFieldEnum | CommunityMembersScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Management
   */

  export type AggregateManagement = {
    _count: ManagementCountAggregateOutputType | null
    _avg: ManagementAvgAggregateOutputType | null
    _sum: ManagementSumAggregateOutputType | null
    _min: ManagementMinAggregateOutputType | null
    _max: ManagementMaxAggregateOutputType | null
  }

  export type ManagementAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type ManagementSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type ManagementMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    company_name: string | null
    business_email: string | null
    phone_number: string | null
    customer_service_email: string | null
    emergency_email: string | null
    address: string | null
    address2: string | null
    lat: number | null
    lng: number | null
    subscription_plan_type: $Enums.Subscription_PlanType | null
    subscription_state: $Enums.Active_State | null
    business_state: $Enums.Active_State | null
    date_joined: Date | null
    last_login: Date | null
    last_updated: Date | null
    onboard_state: $Enums.OnboardingState | null
  }

  export type ManagementMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    company_name: string | null
    business_email: string | null
    phone_number: string | null
    customer_service_email: string | null
    emergency_email: string | null
    address: string | null
    address2: string | null
    lat: number | null
    lng: number | null
    subscription_plan_type: $Enums.Subscription_PlanType | null
    subscription_state: $Enums.Active_State | null
    business_state: $Enums.Active_State | null
    date_joined: Date | null
    last_login: Date | null
    last_updated: Date | null
    onboard_state: $Enums.OnboardingState | null
  }

  export type ManagementCountAggregateOutputType = {
    id: number
    user_id: number
    company_name: number
    business_email: number
    phone_number: number
    customer_service_email: number
    emergency_email: number
    address: number
    address2: number
    lat: number
    lng: number
    subscription_plan_type: number
    subscription_state: number
    business_state: number
    date_joined: number
    last_login: number
    last_updated: number
    onboard_state: number
    _all: number
  }


  export type ManagementAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type ManagementSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type ManagementMinAggregateInputType = {
    id?: true
    user_id?: true
    company_name?: true
    business_email?: true
    phone_number?: true
    customer_service_email?: true
    emergency_email?: true
    address?: true
    address2?: true
    lat?: true
    lng?: true
    subscription_plan_type?: true
    subscription_state?: true
    business_state?: true
    date_joined?: true
    last_login?: true
    last_updated?: true
    onboard_state?: true
  }

  export type ManagementMaxAggregateInputType = {
    id?: true
    user_id?: true
    company_name?: true
    business_email?: true
    phone_number?: true
    customer_service_email?: true
    emergency_email?: true
    address?: true
    address2?: true
    lat?: true
    lng?: true
    subscription_plan_type?: true
    subscription_state?: true
    business_state?: true
    date_joined?: true
    last_login?: true
    last_updated?: true
    onboard_state?: true
  }

  export type ManagementCountAggregateInputType = {
    id?: true
    user_id?: true
    company_name?: true
    business_email?: true
    phone_number?: true
    customer_service_email?: true
    emergency_email?: true
    address?: true
    address2?: true
    lat?: true
    lng?: true
    subscription_plan_type?: true
    subscription_state?: true
    business_state?: true
    date_joined?: true
    last_login?: true
    last_updated?: true
    onboard_state?: true
    _all?: true
  }

  export type ManagementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Management to aggregate.
     */
    where?: ManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managements to fetch.
     */
    orderBy?: ManagementOrderByWithRelationInput | ManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Managements
    **/
    _count?: true | ManagementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagementMaxAggregateInputType
  }

  export type GetManagementAggregateType<T extends ManagementAggregateArgs> = {
        [P in keyof T & keyof AggregateManagement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagement[P]>
      : GetScalarType<T[P], AggregateManagement[P]>
  }




  export type ManagementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagementWhereInput
    orderBy?: ManagementOrderByWithAggregationInput | ManagementOrderByWithAggregationInput[]
    by: ManagementScalarFieldEnum[] | ManagementScalarFieldEnum
    having?: ManagementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagementCountAggregateInputType | true
    _avg?: ManagementAvgAggregateInputType
    _sum?: ManagementSumAggregateInputType
    _min?: ManagementMinAggregateInputType
    _max?: ManagementMaxAggregateInputType
  }

  export type ManagementGroupByOutputType = {
    id: string
    user_id: string
    company_name: string | null
    business_email: string | null
    phone_number: string | null
    customer_service_email: string | null
    emergency_email: string | null
    address: string | null
    address2: string | null
    lat: number | null
    lng: number | null
    subscription_plan_type: $Enums.Subscription_PlanType | null
    subscription_state: $Enums.Active_State | null
    business_state: $Enums.Active_State | null
    date_joined: Date
    last_login: Date
    last_updated: Date
    onboard_state: $Enums.OnboardingState | null
    _count: ManagementCountAggregateOutputType | null
    _avg: ManagementAvgAggregateOutputType | null
    _sum: ManagementSumAggregateOutputType | null
    _min: ManagementMinAggregateOutputType | null
    _max: ManagementMaxAggregateOutputType | null
  }

  type GetManagementGroupByPayload<T extends ManagementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagementGroupByOutputType[P]>
            : GetScalarType<T[P], ManagementGroupByOutputType[P]>
        }
      >
    >


  export type ManagementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    company_name?: boolean
    business_email?: boolean
    phone_number?: boolean
    customer_service_email?: boolean
    emergency_email?: boolean
    address?: boolean
    address2?: boolean
    lat?: boolean
    lng?: boolean
    subscription_plan_type?: boolean
    subscription_state?: boolean
    business_state?: boolean
    date_joined?: boolean
    last_login?: boolean
    last_updated?: boolean
    onboard_state?: boolean
    staffs?: boolean | Management$staffsArgs<ExtArgs>
    buildings?: boolean | Management$buildingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ManagementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["management"]>

  export type ManagementSelectScalar = {
    id?: boolean
    user_id?: boolean
    company_name?: boolean
    business_email?: boolean
    phone_number?: boolean
    customer_service_email?: boolean
    emergency_email?: boolean
    address?: boolean
    address2?: boolean
    lat?: boolean
    lng?: boolean
    subscription_plan_type?: boolean
    subscription_state?: boolean
    business_state?: boolean
    date_joined?: boolean
    last_login?: boolean
    last_updated?: boolean
    onboard_state?: boolean
  }

  export type ManagementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffs?: boolean | Management$staffsArgs<ExtArgs>
    buildings?: boolean | Management$buildingsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ManagementCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ManagementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Management"
    objects: {
      staffs: Prisma.$ManagementStaffPayload<ExtArgs>[]
      buildings: Prisma.$BuildingPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      company_name: string | null
      business_email: string | null
      phone_number: string | null
      customer_service_email: string | null
      emergency_email: string | null
      address: string | null
      address2: string | null
      lat: number | null
      lng: number | null
      subscription_plan_type: $Enums.Subscription_PlanType | null
      subscription_state: $Enums.Active_State | null
      business_state: $Enums.Active_State | null
      date_joined: Date
      last_login: Date
      last_updated: Date
      onboard_state: $Enums.OnboardingState | null
    }, ExtArgs["result"]["management"]>
    composites: {}
  }


  type ManagementGetPayload<S extends boolean | null | undefined | ManagementDefaultArgs> = $Result.GetResult<Prisma.$ManagementPayload, S>

  type ManagementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManagementFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ManagementCountAggregateInputType | true
    }

  export interface ManagementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Management'], meta: { name: 'Management' } }
    /**
     * Find zero or one Management that matches the filter.
     * @param {ManagementFindUniqueArgs} args - Arguments to find a Management
     * @example
     * // Get one Management
     * const management = await prisma.management.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManagementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementFindUniqueArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Management that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManagementFindUniqueOrThrowArgs} args - Arguments to find a Management
     * @example
     * // Get one Management
     * const management = await prisma.management.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManagementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Management that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementFindFirstArgs} args - Arguments to find a Management
     * @example
     * // Get one Management
     * const management = await prisma.management.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManagementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementFindFirstArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Management that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementFindFirstOrThrowArgs} args - Arguments to find a Management
     * @example
     * // Get one Management
     * const management = await prisma.management.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManagementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Managements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Managements
     * const managements = await prisma.management.findMany()
     * 
     * // Get first 10 Managements
     * const managements = await prisma.management.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managementWithIdOnly = await prisma.management.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManagementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Management.
     * @param {ManagementCreateArgs} args - Arguments to create a Management.
     * @example
     * // Create one Management
     * const Management = await prisma.management.create({
     *   data: {
     *     // ... data to create a Management
     *   }
     * })
     * 
    **/
    create<T extends ManagementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementCreateArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Managements.
     *     @param {ManagementCreateManyArgs} args - Arguments to create many Managements.
     *     @example
     *     // Create many Managements
     *     const management = await prisma.management.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ManagementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Management.
     * @param {ManagementDeleteArgs} args - Arguments to delete one Management.
     * @example
     * // Delete one Management
     * const Management = await prisma.management.delete({
     *   where: {
     *     // ... filter to delete one Management
     *   }
     * })
     * 
    **/
    delete<T extends ManagementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementDeleteArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Management.
     * @param {ManagementUpdateArgs} args - Arguments to update one Management.
     * @example
     * // Update one Management
     * const management = await prisma.management.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManagementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementUpdateArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Managements.
     * @param {ManagementDeleteManyArgs} args - Arguments to filter Managements to delete.
     * @example
     * // Delete a few Managements
     * const { count } = await prisma.management.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManagementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Managements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Managements
     * const management = await prisma.management.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManagementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Management.
     * @param {ManagementUpsertArgs} args - Arguments to update or create a Management.
     * @example
     * // Update or create a Management
     * const management = await prisma.management.upsert({
     *   create: {
     *     // ... data to create a Management
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Management we want to update
     *   }
     * })
    **/
    upsert<T extends ManagementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementUpsertArgs<ExtArgs>>
    ): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Managements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementCountArgs} args - Arguments to filter Managements to count.
     * @example
     * // Count the number of Managements
     * const count = await prisma.management.count({
     *   where: {
     *     // ... the filter for the Managements we want to count
     *   }
     * })
    **/
    count<T extends ManagementCountArgs>(
      args?: Subset<T, ManagementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Management.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagementAggregateArgs>(args: Subset<T, ManagementAggregateArgs>): Prisma.PrismaPromise<GetManagementAggregateType<T>>

    /**
     * Group by Management.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagementGroupByArgs['orderBy'] }
        : { orderBy?: ManagementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Management model
   */
  readonly fields: ManagementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Management.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    staffs<T extends Management$staffsArgs<ExtArgs> = {}>(args?: Subset<T, Management$staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findMany'> | Null>;

    buildings<T extends Management$buildingsArgs<ExtArgs> = {}>(args?: Subset<T, Management$buildingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Management model
   */ 
  interface ManagementFieldRefs {
    readonly id: FieldRef<"Management", 'String'>
    readonly user_id: FieldRef<"Management", 'String'>
    readonly company_name: FieldRef<"Management", 'String'>
    readonly business_email: FieldRef<"Management", 'String'>
    readonly phone_number: FieldRef<"Management", 'String'>
    readonly customer_service_email: FieldRef<"Management", 'String'>
    readonly emergency_email: FieldRef<"Management", 'String'>
    readonly address: FieldRef<"Management", 'String'>
    readonly address2: FieldRef<"Management", 'String'>
    readonly lat: FieldRef<"Management", 'Float'>
    readonly lng: FieldRef<"Management", 'Float'>
    readonly subscription_plan_type: FieldRef<"Management", 'Subscription_PlanType'>
    readonly subscription_state: FieldRef<"Management", 'Active_State'>
    readonly business_state: FieldRef<"Management", 'Active_State'>
    readonly date_joined: FieldRef<"Management", 'DateTime'>
    readonly last_login: FieldRef<"Management", 'DateTime'>
    readonly last_updated: FieldRef<"Management", 'DateTime'>
    readonly onboard_state: FieldRef<"Management", 'OnboardingState'>
  }
    

  // Custom InputTypes

  /**
   * Management findUnique
   */
  export type ManagementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter, which Management to fetch.
     */
    where: ManagementWhereUniqueInput
  }


  /**
   * Management findUniqueOrThrow
   */
  export type ManagementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter, which Management to fetch.
     */
    where: ManagementWhereUniqueInput
  }


  /**
   * Management findFirst
   */
  export type ManagementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter, which Management to fetch.
     */
    where?: ManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managements to fetch.
     */
    orderBy?: ManagementOrderByWithRelationInput | ManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managements.
     */
    cursor?: ManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managements.
     */
    distinct?: ManagementScalarFieldEnum | ManagementScalarFieldEnum[]
  }


  /**
   * Management findFirstOrThrow
   */
  export type ManagementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter, which Management to fetch.
     */
    where?: ManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managements to fetch.
     */
    orderBy?: ManagementOrderByWithRelationInput | ManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Managements.
     */
    cursor?: ManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Managements.
     */
    distinct?: ManagementScalarFieldEnum | ManagementScalarFieldEnum[]
  }


  /**
   * Management findMany
   */
  export type ManagementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter, which Managements to fetch.
     */
    where?: ManagementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Managements to fetch.
     */
    orderBy?: ManagementOrderByWithRelationInput | ManagementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Managements.
     */
    cursor?: ManagementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Managements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Managements.
     */
    skip?: number
    distinct?: ManagementScalarFieldEnum | ManagementScalarFieldEnum[]
  }


  /**
   * Management create
   */
  export type ManagementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * The data needed to create a Management.
     */
    data: XOR<ManagementCreateInput, ManagementUncheckedCreateInput>
  }


  /**
   * Management createMany
   */
  export type ManagementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Managements.
     */
    data: ManagementCreateManyInput | ManagementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Management update
   */
  export type ManagementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * The data needed to update a Management.
     */
    data: XOR<ManagementUpdateInput, ManagementUncheckedUpdateInput>
    /**
     * Choose, which Management to update.
     */
    where: ManagementWhereUniqueInput
  }


  /**
   * Management updateMany
   */
  export type ManagementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Managements.
     */
    data: XOR<ManagementUpdateManyMutationInput, ManagementUncheckedUpdateManyInput>
    /**
     * Filter which Managements to update
     */
    where?: ManagementWhereInput
  }


  /**
   * Management upsert
   */
  export type ManagementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * The filter to search for the Management to update in case it exists.
     */
    where: ManagementWhereUniqueInput
    /**
     * In case the Management found by the `where` argument doesn't exist, create a new Management with this data.
     */
    create: XOR<ManagementCreateInput, ManagementUncheckedCreateInput>
    /**
     * In case the Management was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagementUpdateInput, ManagementUncheckedUpdateInput>
  }


  /**
   * Management delete
   */
  export type ManagementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
    /**
     * Filter which Management to delete.
     */
    where: ManagementWhereUniqueInput
  }


  /**
   * Management deleteMany
   */
  export type ManagementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Managements to delete
     */
    where?: ManagementWhereInput
  }


  /**
   * Management.staffs
   */
  export type Management$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    where?: ManagementStaffWhereInput
    orderBy?: ManagementStaffOrderByWithRelationInput | ManagementStaffOrderByWithRelationInput[]
    cursor?: ManagementStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagementStaffScalarFieldEnum | ManagementStaffScalarFieldEnum[]
  }


  /**
   * Management.buildings
   */
  export type Management$buildingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    cursor?: BuildingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }


  /**
   * Management without action
   */
  export type ManagementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Management
     */
    select?: ManagementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementInclude<ExtArgs> | null
  }



  /**
   * Model ManagementStaff
   */

  export type AggregateManagementStaff = {
    _count: ManagementStaffCountAggregateOutputType | null
    _min: ManagementStaffMinAggregateOutputType | null
    _max: ManagementStaffMaxAggregateOutputType | null
  }

  export type ManagementStaffMinAggregateOutputType = {
    id: string | null
    management_id: string | null
    name: string | null
    email: string | null
    date_added: Date | null
    last_updated: Date | null
  }

  export type ManagementStaffMaxAggregateOutputType = {
    id: string | null
    management_id: string | null
    name: string | null
    email: string | null
    date_added: Date | null
    last_updated: Date | null
  }

  export type ManagementStaffCountAggregateOutputType = {
    id: number
    management_id: number
    name: number
    email: number
    date_added: number
    last_updated: number
    _all: number
  }


  export type ManagementStaffMinAggregateInputType = {
    id?: true
    management_id?: true
    name?: true
    email?: true
    date_added?: true
    last_updated?: true
  }

  export type ManagementStaffMaxAggregateInputType = {
    id?: true
    management_id?: true
    name?: true
    email?: true
    date_added?: true
    last_updated?: true
  }

  export type ManagementStaffCountAggregateInputType = {
    id?: true
    management_id?: true
    name?: true
    email?: true
    date_added?: true
    last_updated?: true
    _all?: true
  }

  export type ManagementStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagementStaff to aggregate.
     */
    where?: ManagementStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementStaffs to fetch.
     */
    orderBy?: ManagementStaffOrderByWithRelationInput | ManagementStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagementStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagementStaffs
    **/
    _count?: true | ManagementStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagementStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagementStaffMaxAggregateInputType
  }

  export type GetManagementStaffAggregateType<T extends ManagementStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateManagementStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagementStaff[P]>
      : GetScalarType<T[P], AggregateManagementStaff[P]>
  }




  export type ManagementStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagementStaffWhereInput
    orderBy?: ManagementStaffOrderByWithAggregationInput | ManagementStaffOrderByWithAggregationInput[]
    by: ManagementStaffScalarFieldEnum[] | ManagementStaffScalarFieldEnum
    having?: ManagementStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagementStaffCountAggregateInputType | true
    _min?: ManagementStaffMinAggregateInputType
    _max?: ManagementStaffMaxAggregateInputType
  }

  export type ManagementStaffGroupByOutputType = {
    id: string
    management_id: string
    name: string | null
    email: string | null
    date_added: Date
    last_updated: Date
    _count: ManagementStaffCountAggregateOutputType | null
    _min: ManagementStaffMinAggregateOutputType | null
    _max: ManagementStaffMaxAggregateOutputType | null
  }

  type GetManagementStaffGroupByPayload<T extends ManagementStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagementStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagementStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagementStaffGroupByOutputType[P]>
            : GetScalarType<T[P], ManagementStaffGroupByOutputType[P]>
        }
      >
    >


  export type ManagementStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    management_id?: boolean
    name?: boolean
    email?: boolean
    date_added?: boolean
    last_updated?: boolean
    management?: boolean | ManagementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["managementStaff"]>

  export type ManagementStaffSelectScalar = {
    id?: boolean
    management_id?: boolean
    name?: boolean
    email?: boolean
    date_added?: boolean
    last_updated?: boolean
  }

  export type ManagementStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    management?: boolean | ManagementDefaultArgs<ExtArgs>
  }


  export type $ManagementStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagementStaff"
    objects: {
      management: Prisma.$ManagementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      management_id: string
      name: string | null
      email: string | null
      date_added: Date
      last_updated: Date
    }, ExtArgs["result"]["managementStaff"]>
    composites: {}
  }


  type ManagementStaffGetPayload<S extends boolean | null | undefined | ManagementStaffDefaultArgs> = $Result.GetResult<Prisma.$ManagementStaffPayload, S>

  type ManagementStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManagementStaffFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ManagementStaffCountAggregateInputType | true
    }

  export interface ManagementStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagementStaff'], meta: { name: 'ManagementStaff' } }
    /**
     * Find zero or one ManagementStaff that matches the filter.
     * @param {ManagementStaffFindUniqueArgs} args - Arguments to find a ManagementStaff
     * @example
     * // Get one ManagementStaff
     * const managementStaff = await prisma.managementStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ManagementStaffFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffFindUniqueArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ManagementStaff that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ManagementStaffFindUniqueOrThrowArgs} args - Arguments to find a ManagementStaff
     * @example
     * // Get one ManagementStaff
     * const managementStaff = await prisma.managementStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ManagementStaffFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ManagementStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffFindFirstArgs} args - Arguments to find a ManagementStaff
     * @example
     * // Get one ManagementStaff
     * const managementStaff = await prisma.managementStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ManagementStaffFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffFindFirstArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ManagementStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffFindFirstOrThrowArgs} args - Arguments to find a ManagementStaff
     * @example
     * // Get one ManagementStaff
     * const managementStaff = await prisma.managementStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ManagementStaffFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ManagementStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagementStaffs
     * const managementStaffs = await prisma.managementStaff.findMany()
     * 
     * // Get first 10 ManagementStaffs
     * const managementStaffs = await prisma.managementStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managementStaffWithIdOnly = await prisma.managementStaff.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ManagementStaffFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ManagementStaff.
     * @param {ManagementStaffCreateArgs} args - Arguments to create a ManagementStaff.
     * @example
     * // Create one ManagementStaff
     * const ManagementStaff = await prisma.managementStaff.create({
     *   data: {
     *     // ... data to create a ManagementStaff
     *   }
     * })
     * 
    **/
    create<T extends ManagementStaffCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffCreateArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ManagementStaffs.
     *     @param {ManagementStaffCreateManyArgs} args - Arguments to create many ManagementStaffs.
     *     @example
     *     // Create many ManagementStaffs
     *     const managementStaff = await prisma.managementStaff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ManagementStaffCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ManagementStaff.
     * @param {ManagementStaffDeleteArgs} args - Arguments to delete one ManagementStaff.
     * @example
     * // Delete one ManagementStaff
     * const ManagementStaff = await prisma.managementStaff.delete({
     *   where: {
     *     // ... filter to delete one ManagementStaff
     *   }
     * })
     * 
    **/
    delete<T extends ManagementStaffDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffDeleteArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ManagementStaff.
     * @param {ManagementStaffUpdateArgs} args - Arguments to update one ManagementStaff.
     * @example
     * // Update one ManagementStaff
     * const managementStaff = await prisma.managementStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ManagementStaffUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffUpdateArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ManagementStaffs.
     * @param {ManagementStaffDeleteManyArgs} args - Arguments to filter ManagementStaffs to delete.
     * @example
     * // Delete a few ManagementStaffs
     * const { count } = await prisma.managementStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ManagementStaffDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ManagementStaffDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagementStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagementStaffs
     * const managementStaff = await prisma.managementStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ManagementStaffUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManagementStaff.
     * @param {ManagementStaffUpsertArgs} args - Arguments to update or create a ManagementStaff.
     * @example
     * // Update or create a ManagementStaff
     * const managementStaff = await prisma.managementStaff.upsert({
     *   create: {
     *     // ... data to create a ManagementStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagementStaff we want to update
     *   }
     * })
    **/
    upsert<T extends ManagementStaffUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ManagementStaffUpsertArgs<ExtArgs>>
    ): Prisma__ManagementStaffClient<$Result.GetResult<Prisma.$ManagementStaffPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ManagementStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffCountArgs} args - Arguments to filter ManagementStaffs to count.
     * @example
     * // Count the number of ManagementStaffs
     * const count = await prisma.managementStaff.count({
     *   where: {
     *     // ... the filter for the ManagementStaffs we want to count
     *   }
     * })
    **/
    count<T extends ManagementStaffCountArgs>(
      args?: Subset<T, ManagementStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagementStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagementStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ManagementStaffAggregateArgs>(args: Subset<T, ManagementStaffAggregateArgs>): Prisma.PrismaPromise<GetManagementStaffAggregateType<T>>

    /**
     * Group by ManagementStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagementStaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ManagementStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagementStaffGroupByArgs['orderBy'] }
        : { orderBy?: ManagementStaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ManagementStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagementStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagementStaff model
   */
  readonly fields: ManagementStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagementStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagementStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    management<T extends ManagementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagementDefaultArgs<ExtArgs>>): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ManagementStaff model
   */ 
  interface ManagementStaffFieldRefs {
    readonly id: FieldRef<"ManagementStaff", 'String'>
    readonly management_id: FieldRef<"ManagementStaff", 'String'>
    readonly name: FieldRef<"ManagementStaff", 'String'>
    readonly email: FieldRef<"ManagementStaff", 'String'>
    readonly date_added: FieldRef<"ManagementStaff", 'DateTime'>
    readonly last_updated: FieldRef<"ManagementStaff", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ManagementStaff findUnique
   */
  export type ManagementStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter, which ManagementStaff to fetch.
     */
    where: ManagementStaffWhereUniqueInput
  }


  /**
   * ManagementStaff findUniqueOrThrow
   */
  export type ManagementStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter, which ManagementStaff to fetch.
     */
    where: ManagementStaffWhereUniqueInput
  }


  /**
   * ManagementStaff findFirst
   */
  export type ManagementStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter, which ManagementStaff to fetch.
     */
    where?: ManagementStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementStaffs to fetch.
     */
    orderBy?: ManagementStaffOrderByWithRelationInput | ManagementStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagementStaffs.
     */
    cursor?: ManagementStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagementStaffs.
     */
    distinct?: ManagementStaffScalarFieldEnum | ManagementStaffScalarFieldEnum[]
  }


  /**
   * ManagementStaff findFirstOrThrow
   */
  export type ManagementStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter, which ManagementStaff to fetch.
     */
    where?: ManagementStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementStaffs to fetch.
     */
    orderBy?: ManagementStaffOrderByWithRelationInput | ManagementStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagementStaffs.
     */
    cursor?: ManagementStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagementStaffs.
     */
    distinct?: ManagementStaffScalarFieldEnum | ManagementStaffScalarFieldEnum[]
  }


  /**
   * ManagementStaff findMany
   */
  export type ManagementStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter, which ManagementStaffs to fetch.
     */
    where?: ManagementStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagementStaffs to fetch.
     */
    orderBy?: ManagementStaffOrderByWithRelationInput | ManagementStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagementStaffs.
     */
    cursor?: ManagementStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagementStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagementStaffs.
     */
    skip?: number
    distinct?: ManagementStaffScalarFieldEnum | ManagementStaffScalarFieldEnum[]
  }


  /**
   * ManagementStaff create
   */
  export type ManagementStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagementStaff.
     */
    data: XOR<ManagementStaffCreateInput, ManagementStaffUncheckedCreateInput>
  }


  /**
   * ManagementStaff createMany
   */
  export type ManagementStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagementStaffs.
     */
    data: ManagementStaffCreateManyInput | ManagementStaffCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ManagementStaff update
   */
  export type ManagementStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagementStaff.
     */
    data: XOR<ManagementStaffUpdateInput, ManagementStaffUncheckedUpdateInput>
    /**
     * Choose, which ManagementStaff to update.
     */
    where: ManagementStaffWhereUniqueInput
  }


  /**
   * ManagementStaff updateMany
   */
  export type ManagementStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagementStaffs.
     */
    data: XOR<ManagementStaffUpdateManyMutationInput, ManagementStaffUncheckedUpdateManyInput>
    /**
     * Filter which ManagementStaffs to update
     */
    where?: ManagementStaffWhereInput
  }


  /**
   * ManagementStaff upsert
   */
  export type ManagementStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagementStaff to update in case it exists.
     */
    where: ManagementStaffWhereUniqueInput
    /**
     * In case the ManagementStaff found by the `where` argument doesn't exist, create a new ManagementStaff with this data.
     */
    create: XOR<ManagementStaffCreateInput, ManagementStaffUncheckedCreateInput>
    /**
     * In case the ManagementStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagementStaffUpdateInput, ManagementStaffUncheckedUpdateInput>
  }


  /**
   * ManagementStaff delete
   */
  export type ManagementStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
    /**
     * Filter which ManagementStaff to delete.
     */
    where: ManagementStaffWhereUniqueInput
  }


  /**
   * ManagementStaff deleteMany
   */
  export type ManagementStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagementStaffs to delete
     */
    where?: ManagementStaffWhereInput
  }


  /**
   * ManagementStaff without action
   */
  export type ManagementStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagementStaff
     */
    select?: ManagementStaffSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ManagementStaffInclude<ExtArgs> | null
  }



  /**
   * Model Building
   */

  export type AggregateBuilding = {
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  export type BuildingAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    no_of_units: number | null
    no_of_parking_floors: number | null
    no_of_parking_spots: number | null
    no_of_developer_parking_spots: number | null
  }

  export type BuildingSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    no_of_units: number | null
    no_of_parking_floors: number | null
    no_of_parking_spots: number | null
    no_of_developer_parking_spots: number | null
  }

  export type BuildingMinAggregateOutputType = {
    id: string | null
    management_id: string | null
    building_name: string | null
    building_type: $Enums.BuildingType | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    no_of_units: number | null
    no_of_parking_floors: number | null
    no_of_parking_spots: number | null
    no_of_developer_parking_spots: number | null
  }

  export type BuildingMaxAggregateOutputType = {
    id: string | null
    management_id: string | null
    building_name: string | null
    building_type: $Enums.BuildingType | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    no_of_units: number | null
    no_of_parking_floors: number | null
    no_of_parking_spots: number | null
    no_of_developer_parking_spots: number | null
  }

  export type BuildingCountAggregateOutputType = {
    id: number
    management_id: number
    building_name: number
    building_type: number
    address: number
    city: number
    state: number
    country: number
    lat: number
    lng: number
    no_of_units: number
    no_of_parking_floors: number
    no_of_parking_spots: number
    no_of_developer_parking_spots: number
    facilities: number
    _all: number
  }


  export type BuildingAvgAggregateInputType = {
    lat?: true
    lng?: true
    no_of_units?: true
    no_of_parking_floors?: true
    no_of_parking_spots?: true
    no_of_developer_parking_spots?: true
  }

  export type BuildingSumAggregateInputType = {
    lat?: true
    lng?: true
    no_of_units?: true
    no_of_parking_floors?: true
    no_of_parking_spots?: true
    no_of_developer_parking_spots?: true
  }

  export type BuildingMinAggregateInputType = {
    id?: true
    management_id?: true
    building_name?: true
    building_type?: true
    address?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    no_of_units?: true
    no_of_parking_floors?: true
    no_of_parking_spots?: true
    no_of_developer_parking_spots?: true
  }

  export type BuildingMaxAggregateInputType = {
    id?: true
    management_id?: true
    building_name?: true
    building_type?: true
    address?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    no_of_units?: true
    no_of_parking_floors?: true
    no_of_parking_spots?: true
    no_of_developer_parking_spots?: true
  }

  export type BuildingCountAggregateInputType = {
    id?: true
    management_id?: true
    building_name?: true
    building_type?: true
    address?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    no_of_units?: true
    no_of_parking_floors?: true
    no_of_parking_spots?: true
    no_of_developer_parking_spots?: true
    facilities?: true
    _all?: true
  }

  export type BuildingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Building to aggregate.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buildings
    **/
    _count?: true | BuildingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildingMaxAggregateInputType
  }

  export type GetBuildingAggregateType<T extends BuildingAggregateArgs> = {
        [P in keyof T & keyof AggregateBuilding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuilding[P]>
      : GetScalarType<T[P], AggregateBuilding[P]>
  }




  export type BuildingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildingWhereInput
    orderBy?: BuildingOrderByWithAggregationInput | BuildingOrderByWithAggregationInput[]
    by: BuildingScalarFieldEnum[] | BuildingScalarFieldEnum
    having?: BuildingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildingCountAggregateInputType | true
    _avg?: BuildingAvgAggregateInputType
    _sum?: BuildingSumAggregateInputType
    _min?: BuildingMinAggregateInputType
    _max?: BuildingMaxAggregateInputType
  }

  export type BuildingGroupByOutputType = {
    id: string
    management_id: string
    building_name: string | null
    building_type: $Enums.BuildingType | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    no_of_units: number | null
    no_of_parking_floors: number | null
    no_of_parking_spots: number | null
    no_of_developer_parking_spots: number | null
    facilities: $Enums.BuildingFacility[]
    _count: BuildingCountAggregateOutputType | null
    _avg: BuildingAvgAggregateOutputType | null
    _sum: BuildingSumAggregateOutputType | null
    _min: BuildingMinAggregateOutputType | null
    _max: BuildingMaxAggregateOutputType | null
  }

  type GetBuildingGroupByPayload<T extends BuildingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildingGroupByOutputType[P]>
            : GetScalarType<T[P], BuildingGroupByOutputType[P]>
        }
      >
    >


  export type BuildingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    management_id?: boolean
    building_name?: boolean
    building_type?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    no_of_units?: boolean
    no_of_parking_floors?: boolean
    no_of_parking_spots?: boolean
    no_of_developer_parking_spots?: boolean
    facilities?: boolean
    management?: boolean | ManagementDefaultArgs<ExtArgs>
    community_members?: boolean | Building$community_membersArgs<ExtArgs>
    parking_spots?: boolean | Building$parking_spotsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["building"]>

  export type BuildingSelectScalar = {
    id?: boolean
    management_id?: boolean
    building_name?: boolean
    building_type?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    no_of_units?: boolean
    no_of_parking_floors?: boolean
    no_of_parking_spots?: boolean
    no_of_developer_parking_spots?: boolean
    facilities?: boolean
  }

  export type BuildingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    management?: boolean | ManagementDefaultArgs<ExtArgs>
    community_members?: boolean | Building$community_membersArgs<ExtArgs>
    parking_spots?: boolean | Building$parking_spotsArgs<ExtArgs>
    _count?: boolean | BuildingCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BuildingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Building"
    objects: {
      management: Prisma.$ManagementPayload<ExtArgs>
      community_members: Prisma.$CommunityMembersPayload<ExtArgs>[]
      parking_spots: Prisma.$ParkingSpotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      management_id: string
      building_name: string | null
      building_type: $Enums.BuildingType | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      lat: number | null
      lng: number | null
      no_of_units: number | null
      no_of_parking_floors: number | null
      no_of_parking_spots: number | null
      no_of_developer_parking_spots: number | null
      facilities: $Enums.BuildingFacility[]
    }, ExtArgs["result"]["building"]>
    composites: {}
  }


  type BuildingGetPayload<S extends boolean | null | undefined | BuildingDefaultArgs> = $Result.GetResult<Prisma.$BuildingPayload, S>

  type BuildingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BuildingFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BuildingCountAggregateInputType | true
    }

  export interface BuildingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Building'], meta: { name: 'Building' } }
    /**
     * Find zero or one Building that matches the filter.
     * @param {BuildingFindUniqueArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BuildingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingFindUniqueArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Building that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BuildingFindUniqueOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BuildingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Building that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BuildingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingFindFirstArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Building that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindFirstOrThrowArgs} args - Arguments to find a Building
     * @example
     * // Get one Building
     * const building = await prisma.building.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BuildingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Buildings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buildings
     * const buildings = await prisma.building.findMany()
     * 
     * // Get first 10 Buildings
     * const buildings = await prisma.building.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildingWithIdOnly = await prisma.building.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BuildingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Building.
     * @param {BuildingCreateArgs} args - Arguments to create a Building.
     * @example
     * // Create one Building
     * const Building = await prisma.building.create({
     *   data: {
     *     // ... data to create a Building
     *   }
     * })
     * 
    **/
    create<T extends BuildingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingCreateArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Buildings.
     *     @param {BuildingCreateManyArgs} args - Arguments to create many Buildings.
     *     @example
     *     // Create many Buildings
     *     const building = await prisma.building.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BuildingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Building.
     * @param {BuildingDeleteArgs} args - Arguments to delete one Building.
     * @example
     * // Delete one Building
     * const Building = await prisma.building.delete({
     *   where: {
     *     // ... filter to delete one Building
     *   }
     * })
     * 
    **/
    delete<T extends BuildingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingDeleteArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Building.
     * @param {BuildingUpdateArgs} args - Arguments to update one Building.
     * @example
     * // Update one Building
     * const building = await prisma.building.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BuildingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingUpdateArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Buildings.
     * @param {BuildingDeleteManyArgs} args - Arguments to filter Buildings to delete.
     * @example
     * // Delete a few Buildings
     * const { count } = await prisma.building.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BuildingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BuildingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buildings
     * const building = await prisma.building.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BuildingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Building.
     * @param {BuildingUpsertArgs} args - Arguments to update or create a Building.
     * @example
     * // Update or create a Building
     * const building = await prisma.building.upsert({
     *   create: {
     *     // ... data to create a Building
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Building we want to update
     *   }
     * })
    **/
    upsert<T extends BuildingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BuildingUpsertArgs<ExtArgs>>
    ): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Buildings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingCountArgs} args - Arguments to filter Buildings to count.
     * @example
     * // Count the number of Buildings
     * const count = await prisma.building.count({
     *   where: {
     *     // ... the filter for the Buildings we want to count
     *   }
     * })
    **/
    count<T extends BuildingCountArgs>(
      args?: Subset<T, BuildingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildingAggregateArgs>(args: Subset<T, BuildingAggregateArgs>): Prisma.PrismaPromise<GetBuildingAggregateType<T>>

    /**
     * Group by Building.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildingGroupByArgs['orderBy'] }
        : { orderBy?: BuildingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Building model
   */
  readonly fields: BuildingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Building.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    management<T extends ManagementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManagementDefaultArgs<ExtArgs>>): Prisma__ManagementClient<$Result.GetResult<Prisma.$ManagementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    community_members<T extends Building$community_membersArgs<ExtArgs> = {}>(args?: Subset<T, Building$community_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    parking_spots<T extends Building$parking_spotsArgs<ExtArgs> = {}>(args?: Subset<T, Building$parking_spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Building model
   */ 
  interface BuildingFieldRefs {
    readonly id: FieldRef<"Building", 'String'>
    readonly management_id: FieldRef<"Building", 'String'>
    readonly building_name: FieldRef<"Building", 'String'>
    readonly building_type: FieldRef<"Building", 'BuildingType'>
    readonly address: FieldRef<"Building", 'String'>
    readonly city: FieldRef<"Building", 'String'>
    readonly state: FieldRef<"Building", 'String'>
    readonly country: FieldRef<"Building", 'String'>
    readonly lat: FieldRef<"Building", 'Float'>
    readonly lng: FieldRef<"Building", 'Float'>
    readonly no_of_units: FieldRef<"Building", 'Int'>
    readonly no_of_parking_floors: FieldRef<"Building", 'Int'>
    readonly no_of_parking_spots: FieldRef<"Building", 'Int'>
    readonly no_of_developer_parking_spots: FieldRef<"Building", 'Int'>
    readonly facilities: FieldRef<"Building", 'BuildingFacility[]'>
  }
    

  // Custom InputTypes

  /**
   * Building findUnique
   */
  export type BuildingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building findUniqueOrThrow
   */
  export type BuildingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building findFirst
   */
  export type BuildingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }


  /**
   * Building findFirstOrThrow
   */
  export type BuildingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Building to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buildings.
     */
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }


  /**
   * Building findMany
   */
  export type BuildingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter, which Buildings to fetch.
     */
    where?: BuildingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buildings to fetch.
     */
    orderBy?: BuildingOrderByWithRelationInput | BuildingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buildings.
     */
    cursor?: BuildingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buildings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buildings.
     */
    skip?: number
    distinct?: BuildingScalarFieldEnum | BuildingScalarFieldEnum[]
  }


  /**
   * Building create
   */
  export type BuildingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to create a Building.
     */
    data: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
  }


  /**
   * Building createMany
   */
  export type BuildingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buildings.
     */
    data: BuildingCreateManyInput | BuildingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Building update
   */
  export type BuildingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The data needed to update a Building.
     */
    data: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
    /**
     * Choose, which Building to update.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building updateMany
   */
  export type BuildingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buildings.
     */
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyInput>
    /**
     * Filter which Buildings to update
     */
    where?: BuildingWhereInput
  }


  /**
   * Building upsert
   */
  export type BuildingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * The filter to search for the Building to update in case it exists.
     */
    where: BuildingWhereUniqueInput
    /**
     * In case the Building found by the `where` argument doesn't exist, create a new Building with this data.
     */
    create: XOR<BuildingCreateInput, BuildingUncheckedCreateInput>
    /**
     * In case the Building was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildingUpdateInput, BuildingUncheckedUpdateInput>
  }


  /**
   * Building delete
   */
  export type BuildingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
    /**
     * Filter which Building to delete.
     */
    where: BuildingWhereUniqueInput
  }


  /**
   * Building deleteMany
   */
  export type BuildingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buildings to delete
     */
    where?: BuildingWhereInput
  }


  /**
   * Building.community_members
   */
  export type Building$community_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    where?: CommunityMembersWhereInput
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    cursor?: CommunityMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityMembersScalarFieldEnum | CommunityMembersScalarFieldEnum[]
  }


  /**
   * Building.parking_spots
   */
  export type Building$parking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    cursor?: ParkingSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * Building without action
   */
  export type BuildingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Building
     */
    select?: BuildingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BuildingInclude<ExtArgs> | null
  }



  /**
   * Model CommunityMembers
   */

  export type AggregateCommunityMembers = {
    _count: CommunityMembersCountAggregateOutputType | null
    _min: CommunityMembersMinAggregateOutputType | null
    _max: CommunityMembersMaxAggregateOutputType | null
  }

  export type CommunityMembersMinAggregateOutputType = {
    id: string | null
    building_id: string | null
    user_id: string | null
    user_role: $Enums.User_Role | null
    email: string | null
    name: string | null
    phone: string | null
    status: $Enums.Active_State | null
    qr_code_id: string | null
  }

  export type CommunityMembersMaxAggregateOutputType = {
    id: string | null
    building_id: string | null
    user_id: string | null
    user_role: $Enums.User_Role | null
    email: string | null
    name: string | null
    phone: string | null
    status: $Enums.Active_State | null
    qr_code_id: string | null
  }

  export type CommunityMembersCountAggregateOutputType = {
    id: number
    building_id: number
    user_id: number
    user_role: number
    email: number
    name: number
    phone: number
    unit_numbers: number
    status: number
    qr_code_id: number
    _all: number
  }


  export type CommunityMembersMinAggregateInputType = {
    id?: true
    building_id?: true
    user_id?: true
    user_role?: true
    email?: true
    name?: true
    phone?: true
    status?: true
    qr_code_id?: true
  }

  export type CommunityMembersMaxAggregateInputType = {
    id?: true
    building_id?: true
    user_id?: true
    user_role?: true
    email?: true
    name?: true
    phone?: true
    status?: true
    qr_code_id?: true
  }

  export type CommunityMembersCountAggregateInputType = {
    id?: true
    building_id?: true
    user_id?: true
    user_role?: true
    email?: true
    name?: true
    phone?: true
    unit_numbers?: true
    status?: true
    qr_code_id?: true
    _all?: true
  }

  export type CommunityMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMembers to aggregate.
     */
    where?: CommunityMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityMembers
    **/
    _count?: true | CommunityMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMembersMaxAggregateInputType
  }

  export type GetCommunityMembersAggregateType<T extends CommunityMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityMembers[P]>
      : GetScalarType<T[P], AggregateCommunityMembers[P]>
  }




  export type CommunityMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMembersWhereInput
    orderBy?: CommunityMembersOrderByWithAggregationInput | CommunityMembersOrderByWithAggregationInput[]
    by: CommunityMembersScalarFieldEnum[] | CommunityMembersScalarFieldEnum
    having?: CommunityMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityMembersCountAggregateInputType | true
    _min?: CommunityMembersMinAggregateInputType
    _max?: CommunityMembersMaxAggregateInputType
  }

  export type CommunityMembersGroupByOutputType = {
    id: string
    building_id: string
    user_id: string | null
    user_role: $Enums.User_Role | null
    email: string | null
    name: string | null
    phone: string | null
    unit_numbers: string[]
    status: $Enums.Active_State
    qr_code_id: string | null
    _count: CommunityMembersCountAggregateOutputType | null
    _min: CommunityMembersMinAggregateOutputType | null
    _max: CommunityMembersMaxAggregateOutputType | null
  }

  type GetCommunityMembersGroupByPayload<T extends CommunityMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityMembersGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityMembersGroupByOutputType[P]>
        }
      >
    >


  export type CommunityMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    building_id?: boolean
    user_id?: boolean
    user_role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    unit_numbers?: boolean
    status?: boolean
    qr_code_id?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    qr_code?: boolean | CommunityMembers$qr_codeArgs<ExtArgs>
    parking_spots?: boolean | CommunityMembers$parking_spotsArgs<ExtArgs>
    user?: boolean | CommunityMembers$userArgs<ExtArgs>
    _count?: boolean | CommunityMembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMembers"]>

  export type CommunityMembersSelectScalar = {
    id?: boolean
    building_id?: boolean
    user_id?: boolean
    user_role?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    unit_numbers?: boolean
    status?: boolean
    qr_code_id?: boolean
  }

  export type CommunityMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    qr_code?: boolean | CommunityMembers$qr_codeArgs<ExtArgs>
    parking_spots?: boolean | CommunityMembers$parking_spotsArgs<ExtArgs>
    user?: boolean | CommunityMembers$userArgs<ExtArgs>
    _count?: boolean | CommunityMembersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityMembers"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs>
      qr_code: Prisma.$QRCodePayload<ExtArgs> | null
      parking_spots: Prisma.$ParkingSpotPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      building_id: string
      user_id: string | null
      user_role: $Enums.User_Role | null
      email: string | null
      name: string | null
      phone: string | null
      unit_numbers: string[]
      status: $Enums.Active_State
      qr_code_id: string | null
    }, ExtArgs["result"]["communityMembers"]>
    composites: {}
  }


  type CommunityMembersGetPayload<S extends boolean | null | undefined | CommunityMembersDefaultArgs> = $Result.GetResult<Prisma.$CommunityMembersPayload, S>

  type CommunityMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityMembersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommunityMembersCountAggregateInputType | true
    }

  export interface CommunityMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityMembers'], meta: { name: 'CommunityMembers' } }
    /**
     * Find zero or one CommunityMembers that matches the filter.
     * @param {CommunityMembersFindUniqueArgs} args - Arguments to find a CommunityMembers
     * @example
     * // Get one CommunityMembers
     * const communityMembers = await prisma.communityMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityMembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CommunityMembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityMembersFindUniqueOrThrowArgs} args - Arguments to find a CommunityMembers
     * @example
     * // Get one CommunityMembers
     * const communityMembers = await prisma.communityMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityMembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CommunityMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersFindFirstArgs} args - Arguments to find a CommunityMembers
     * @example
     * // Get one CommunityMembers
     * const communityMembers = await prisma.communityMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityMembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CommunityMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersFindFirstOrThrowArgs} args - Arguments to find a CommunityMembers
     * @example
     * // Get one CommunityMembers
     * const communityMembers = await prisma.communityMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityMembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CommunityMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityMembers
     * const communityMembers = await prisma.communityMembers.findMany()
     * 
     * // Get first 10 CommunityMembers
     * const communityMembers = await prisma.communityMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityMembersWithIdOnly = await prisma.communityMembers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityMembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CommunityMembers.
     * @param {CommunityMembersCreateArgs} args - Arguments to create a CommunityMembers.
     * @example
     * // Create one CommunityMembers
     * const CommunityMembers = await prisma.communityMembers.create({
     *   data: {
     *     // ... data to create a CommunityMembers
     *   }
     * })
     * 
    **/
    create<T extends CommunityMembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersCreateArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CommunityMembers.
     *     @param {CommunityMembersCreateManyArgs} args - Arguments to create many CommunityMembers.
     *     @example
     *     // Create many CommunityMembers
     *     const communityMembers = await prisma.communityMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityMembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommunityMembers.
     * @param {CommunityMembersDeleteArgs} args - Arguments to delete one CommunityMembers.
     * @example
     * // Delete one CommunityMembers
     * const CommunityMembers = await prisma.communityMembers.delete({
     *   where: {
     *     // ... filter to delete one CommunityMembers
     *   }
     * })
     * 
    **/
    delete<T extends CommunityMembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersDeleteArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CommunityMembers.
     * @param {CommunityMembersUpdateArgs} args - Arguments to update one CommunityMembers.
     * @example
     * // Update one CommunityMembers
     * const communityMembers = await prisma.communityMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityMembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersUpdateArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CommunityMembers.
     * @param {CommunityMembersDeleteManyArgs} args - Arguments to filter CommunityMembers to delete.
     * @example
     * // Delete a few CommunityMembers
     * const { count } = await prisma.communityMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityMembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityMembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityMembers
     * const communityMembers = await prisma.communityMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityMembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommunityMembers.
     * @param {CommunityMembersUpsertArgs} args - Arguments to update or create a CommunityMembers.
     * @example
     * // Update or create a CommunityMembers
     * const communityMembers = await prisma.communityMembers.upsert({
     *   create: {
     *     // ... data to create a CommunityMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityMembers we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityMembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityMembersUpsertArgs<ExtArgs>>
    ): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersCountArgs} args - Arguments to filter CommunityMembers to count.
     * @example
     * // Count the number of CommunityMembers
     * const count = await prisma.communityMembers.count({
     *   where: {
     *     // ... the filter for the CommunityMembers we want to count
     *   }
     * })
    **/
    count<T extends CommunityMembersCountArgs>(
      args?: Subset<T, CommunityMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityMembersAggregateArgs>(args: Subset<T, CommunityMembersAggregateArgs>): Prisma.PrismaPromise<GetCommunityMembersAggregateType<T>>

    /**
     * Group by CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityMembersGroupByArgs['orderBy'] }
        : { orderBy?: CommunityMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityMembers model
   */
  readonly fields: CommunityMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    building<T extends BuildingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuildingDefaultArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    qr_code<T extends CommunityMembers$qr_codeArgs<ExtArgs> = {}>(args?: Subset<T, CommunityMembers$qr_codeArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    parking_spots<T extends CommunityMembers$parking_spotsArgs<ExtArgs> = {}>(args?: Subset<T, CommunityMembers$parking_spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends CommunityMembers$userArgs<ExtArgs> = {}>(args?: Subset<T, CommunityMembers$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CommunityMembers model
   */ 
  interface CommunityMembersFieldRefs {
    readonly id: FieldRef<"CommunityMembers", 'String'>
    readonly building_id: FieldRef<"CommunityMembers", 'String'>
    readonly user_id: FieldRef<"CommunityMembers", 'String'>
    readonly user_role: FieldRef<"CommunityMembers", 'User_Role'>
    readonly email: FieldRef<"CommunityMembers", 'String'>
    readonly name: FieldRef<"CommunityMembers", 'String'>
    readonly phone: FieldRef<"CommunityMembers", 'String'>
    readonly unit_numbers: FieldRef<"CommunityMembers", 'String[]'>
    readonly status: FieldRef<"CommunityMembers", 'Active_State'>
    readonly qr_code_id: FieldRef<"CommunityMembers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CommunityMembers findUnique
   */
  export type CommunityMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where: CommunityMembersWhereUniqueInput
  }


  /**
   * CommunityMembers findUniqueOrThrow
   */
  export type CommunityMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where: CommunityMembersWhereUniqueInput
  }


  /**
   * CommunityMembers findFirst
   */
  export type CommunityMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMembersScalarFieldEnum | CommunityMembersScalarFieldEnum[]
  }


  /**
   * CommunityMembers findFirstOrThrow
   */
  export type CommunityMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMembersScalarFieldEnum | CommunityMembersScalarFieldEnum[]
  }


  /**
   * CommunityMembers findMany
   */
  export type CommunityMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMembersOrderByWithRelationInput | CommunityMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityMembers.
     */
    cursor?: CommunityMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    distinct?: CommunityMembersScalarFieldEnum | CommunityMembersScalarFieldEnum[]
  }


  /**
   * CommunityMembers create
   */
  export type CommunityMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityMembers.
     */
    data: XOR<CommunityMembersCreateInput, CommunityMembersUncheckedCreateInput>
  }


  /**
   * CommunityMembers createMany
   */
  export type CommunityMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMembersCreateManyInput | CommunityMembersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CommunityMembers update
   */
  export type CommunityMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityMembers.
     */
    data: XOR<CommunityMembersUpdateInput, CommunityMembersUncheckedUpdateInput>
    /**
     * Choose, which CommunityMembers to update.
     */
    where: CommunityMembersWhereUniqueInput
  }


  /**
   * CommunityMembers updateMany
   */
  export type CommunityMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMembersUpdateManyMutationInput, CommunityMembersUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMembersWhereInput
  }


  /**
   * CommunityMembers upsert
   */
  export type CommunityMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityMembers to update in case it exists.
     */
    where: CommunityMembersWhereUniqueInput
    /**
     * In case the CommunityMembers found by the `where` argument doesn't exist, create a new CommunityMembers with this data.
     */
    create: XOR<CommunityMembersCreateInput, CommunityMembersUncheckedCreateInput>
    /**
     * In case the CommunityMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityMembersUpdateInput, CommunityMembersUncheckedUpdateInput>
  }


  /**
   * CommunityMembers delete
   */
  export type CommunityMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    /**
     * Filter which CommunityMembers to delete.
     */
    where: CommunityMembersWhereUniqueInput
  }


  /**
   * CommunityMembers deleteMany
   */
  export type CommunityMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMembers to delete
     */
    where?: CommunityMembersWhereInput
  }


  /**
   * CommunityMembers.qr_code
   */
  export type CommunityMembers$qr_codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
  }


  /**
   * CommunityMembers.parking_spots
   */
  export type CommunityMembers$parking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    cursor?: ParkingSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * CommunityMembers.user
   */
  export type CommunityMembers$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * CommunityMembers without action
   */
  export type CommunityMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
  }



  /**
   * Model ParkingSpot
   */

  export type AggregateParkingSpot = {
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  export type ParkingSpotAvgAggregateOutputType = {
    parking_level: number | null
  }

  export type ParkingSpotSumAggregateOutputType = {
    parking_level: number | null
  }

  export type ParkingSpotMinAggregateOutputType = {
    id: string | null
    building_id: string | null
    owner_id: string | null
    qr_code_id: string | null
    vehicle_id: string | null
    parking_level: number | null
    parking_spot_number: string | null
    parking_spot_type: $Enums.Parking_Spot_Type | null
    parking_instructions: string | null
  }

  export type ParkingSpotMaxAggregateOutputType = {
    id: string | null
    building_id: string | null
    owner_id: string | null
    qr_code_id: string | null
    vehicle_id: string | null
    parking_level: number | null
    parking_spot_number: string | null
    parking_spot_type: $Enums.Parking_Spot_Type | null
    parking_instructions: string | null
  }

  export type ParkingSpotCountAggregateOutputType = {
    id: number
    building_id: number
    owner_id: number
    qr_code_id: number
    vehicle_id: number
    parking_level: number
    parking_spot_number: number
    parking_spot_type: number
    parking_instructions: number
    _all: number
  }


  export type ParkingSpotAvgAggregateInputType = {
    parking_level?: true
  }

  export type ParkingSpotSumAggregateInputType = {
    parking_level?: true
  }

  export type ParkingSpotMinAggregateInputType = {
    id?: true
    building_id?: true
    owner_id?: true
    qr_code_id?: true
    vehicle_id?: true
    parking_level?: true
    parking_spot_number?: true
    parking_spot_type?: true
    parking_instructions?: true
  }

  export type ParkingSpotMaxAggregateInputType = {
    id?: true
    building_id?: true
    owner_id?: true
    qr_code_id?: true
    vehicle_id?: true
    parking_level?: true
    parking_spot_number?: true
    parking_spot_type?: true
    parking_instructions?: true
  }

  export type ParkingSpotCountAggregateInputType = {
    id?: true
    building_id?: true
    owner_id?: true
    qr_code_id?: true
    vehicle_id?: true
    parking_level?: true
    parking_spot_number?: true
    parking_spot_type?: true
    parking_instructions?: true
    _all?: true
  }

  export type ParkingSpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpot to aggregate.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSpots
    **/
    _count?: true | ParkingSpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type GetParkingSpotAggregateType<T extends ParkingSpotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSpot[P]>
      : GetScalarType<T[P], AggregateParkingSpot[P]>
  }




  export type ParkingSpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithAggregationInput | ParkingSpotOrderByWithAggregationInput[]
    by: ParkingSpotScalarFieldEnum[] | ParkingSpotScalarFieldEnum
    having?: ParkingSpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSpotCountAggregateInputType | true
    _avg?: ParkingSpotAvgAggregateInputType
    _sum?: ParkingSpotSumAggregateInputType
    _min?: ParkingSpotMinAggregateInputType
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type ParkingSpotGroupByOutputType = {
    id: string
    building_id: string
    owner_id: string | null
    qr_code_id: string | null
    vehicle_id: string | null
    parking_level: number | null
    parking_spot_number: string | null
    parking_spot_type: $Enums.Parking_Spot_Type
    parking_instructions: string | null
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  type GetParkingSpotGroupByPayload<T extends ParkingSpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    building_id?: boolean
    owner_id?: boolean
    qr_code_id?: boolean
    vehicle_id?: boolean
    parking_level?: boolean
    parking_spot_number?: boolean
    parking_spot_type?: boolean
    parking_instructions?: boolean
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    owner?: boolean | ParkingSpot$ownerArgs<ExtArgs>
    qr_code?: boolean | ParkingSpot$qr_codeArgs<ExtArgs>
    vehicle?: boolean | ParkingSpot$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectScalar = {
    id?: boolean
    building_id?: boolean
    owner_id?: boolean
    qr_code_id?: boolean
    vehicle_id?: boolean
    parking_level?: boolean
    parking_spot_number?: boolean
    parking_spot_type?: boolean
    parking_instructions?: boolean
  }

  export type ParkingSpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    building?: boolean | BuildingDefaultArgs<ExtArgs>
    owner?: boolean | ParkingSpot$ownerArgs<ExtArgs>
    qr_code?: boolean | ParkingSpot$qr_codeArgs<ExtArgs>
    vehicle?: boolean | ParkingSpot$vehicleArgs<ExtArgs>
  }


  export type $ParkingSpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSpot"
    objects: {
      building: Prisma.$BuildingPayload<ExtArgs>
      owner: Prisma.$CommunityMembersPayload<ExtArgs> | null
      qr_code: Prisma.$QRCodePayload<ExtArgs> | null
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      building_id: string
      owner_id: string | null
      qr_code_id: string | null
      vehicle_id: string | null
      parking_level: number | null
      parking_spot_number: string | null
      parking_spot_type: $Enums.Parking_Spot_Type
      parking_instructions: string | null
    }, ExtArgs["result"]["parkingSpot"]>
    composites: {}
  }


  type ParkingSpotGetPayload<S extends boolean | null | undefined | ParkingSpotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSpotPayload, S>

  type ParkingSpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ParkingSpotFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ParkingSpotCountAggregateInputType | true
    }

  export interface ParkingSpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpot'], meta: { name: 'ParkingSpot' } }
    /**
     * Find zero or one ParkingSpot that matches the filter.
     * @param {ParkingSpotFindUniqueArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ParkingSpotFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotFindUniqueArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ParkingSpot that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ParkingSpotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ParkingSpotFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ParkingSpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ParkingSpotFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotFindFirstArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ParkingSpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ParkingSpotFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ParkingSpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany()
     * 
     * // Get first 10 ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ParkingSpotFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ParkingSpot.
     * @param {ParkingSpotCreateArgs} args - Arguments to create a ParkingSpot.
     * @example
     * // Create one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.create({
     *   data: {
     *     // ... data to create a ParkingSpot
     *   }
     * })
     * 
    **/
    create<T extends ParkingSpotCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotCreateArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ParkingSpots.
     *     @param {ParkingSpotCreateManyArgs} args - Arguments to create many ParkingSpots.
     *     @example
     *     // Create many ParkingSpots
     *     const parkingSpot = await prisma.parkingSpot.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ParkingSpotCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ParkingSpot.
     * @param {ParkingSpotDeleteArgs} args - Arguments to delete one ParkingSpot.
     * @example
     * // Delete one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSpot
     *   }
     * })
     * 
    **/
    delete<T extends ParkingSpotDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotDeleteArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ParkingSpot.
     * @param {ParkingSpotUpdateArgs} args - Arguments to update one ParkingSpot.
     * @example
     * // Update one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ParkingSpotUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotUpdateArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ParkingSpots.
     * @param {ParkingSpotDeleteManyArgs} args - Arguments to filter ParkingSpots to delete.
     * @example
     * // Delete a few ParkingSpots
     * const { count } = await prisma.parkingSpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ParkingSpotDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ParkingSpotDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ParkingSpotUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ParkingSpot.
     * @param {ParkingSpotUpsertArgs} args - Arguments to update or create a ParkingSpot.
     * @example
     * // Update or create a ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.upsert({
     *   create: {
     *     // ... data to create a ParkingSpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSpot we want to update
     *   }
     * })
    **/
    upsert<T extends ParkingSpotUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ParkingSpotUpsertArgs<ExtArgs>>
    ): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotCountArgs} args - Arguments to filter ParkingSpots to count.
     * @example
     * // Count the number of ParkingSpots
     * const count = await prisma.parkingSpot.count({
     *   where: {
     *     // ... the filter for the ParkingSpots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSpotCountArgs>(
      args?: Subset<T, ParkingSpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParkingSpotAggregateArgs>(args: Subset<T, ParkingSpotAggregateArgs>): Prisma.PrismaPromise<GetParkingSpotAggregateType<T>>

    /**
     * Group by ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParkingSpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSpotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSpotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParkingSpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSpot model
   */
  readonly fields: ParkingSpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    building<T extends BuildingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BuildingDefaultArgs<ExtArgs>>): Prisma__BuildingClient<$Result.GetResult<Prisma.$BuildingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    owner<T extends ParkingSpot$ownerArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$ownerArgs<ExtArgs>>): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    qr_code<T extends ParkingSpot$qr_codeArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$qr_codeArgs<ExtArgs>>): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    vehicle<T extends ParkingSpot$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ParkingSpot model
   */ 
  interface ParkingSpotFieldRefs {
    readonly id: FieldRef<"ParkingSpot", 'String'>
    readonly building_id: FieldRef<"ParkingSpot", 'String'>
    readonly owner_id: FieldRef<"ParkingSpot", 'String'>
    readonly qr_code_id: FieldRef<"ParkingSpot", 'String'>
    readonly vehicle_id: FieldRef<"ParkingSpot", 'String'>
    readonly parking_level: FieldRef<"ParkingSpot", 'Int'>
    readonly parking_spot_number: FieldRef<"ParkingSpot", 'String'>
    readonly parking_spot_type: FieldRef<"ParkingSpot", 'Parking_Spot_Type'>
    readonly parking_instructions: FieldRef<"ParkingSpot", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ParkingSpot findUnique
   */
  export type ParkingSpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }


  /**
   * ParkingSpot findUniqueOrThrow
   */
  export type ParkingSpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }


  /**
   * ParkingSpot findFirst
   */
  export type ParkingSpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * ParkingSpot findFirstOrThrow
   */
  export type ParkingSpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * ParkingSpot findMany
   */
  export type ParkingSpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpots to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * ParkingSpot create
   */
  export type ParkingSpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSpot.
     */
    data: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
  }


  /**
   * ParkingSpot createMany
   */
  export type ParkingSpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSpots.
     */
    data: ParkingSpotCreateManyInput | ParkingSpotCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ParkingSpot update
   */
  export type ParkingSpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSpot.
     */
    data: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSpot to update.
     */
    where: ParkingSpotWhereUniqueInput
  }


  /**
   * ParkingSpot updateMany
   */
  export type ParkingSpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSpots.
     */
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpots to update
     */
    where?: ParkingSpotWhereInput
  }


  /**
   * ParkingSpot upsert
   */
  export type ParkingSpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSpot to update in case it exists.
     */
    where: ParkingSpotWhereUniqueInput
    /**
     * In case the ParkingSpot found by the `where` argument doesn't exist, create a new ParkingSpot with this data.
     */
    create: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
    /**
     * In case the ParkingSpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
  }


  /**
   * ParkingSpot delete
   */
  export type ParkingSpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSpot to delete.
     */
    where: ParkingSpotWhereUniqueInput
  }


  /**
   * ParkingSpot deleteMany
   */
  export type ParkingSpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpots to delete
     */
    where?: ParkingSpotWhereInput
  }


  /**
   * ParkingSpot.owner
   */
  export type ParkingSpot$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    where?: CommunityMembersWhereInput
  }


  /**
   * ParkingSpot.qr_code
   */
  export type ParkingSpot$qr_codeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    where?: QRCodeWhereInput
  }


  /**
   * ParkingSpot.vehicle
   */
  export type ParkingSpot$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }


  /**
   * ParkingSpot without action
   */
  export type ParkingSpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
  }



  /**
   * Model QRCode
   */

  export type AggregateQRCode = {
    _count: QRCodeCountAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  export type QRCodeMinAggregateOutputType = {
    id: string | null
    qr_type: $Enums.QRCode_Type | null
    url: string | null
    image_url: string | null
    qr_for: $Enums.QRCode_For | null
  }

  export type QRCodeMaxAggregateOutputType = {
    id: string | null
    qr_type: $Enums.QRCode_Type | null
    url: string | null
    image_url: string | null
    qr_for: $Enums.QRCode_For | null
  }

  export type QRCodeCountAggregateOutputType = {
    id: number
    qr_type: number
    url: number
    image_url: number
    qr_for: number
    _all: number
  }


  export type QRCodeMinAggregateInputType = {
    id?: true
    qr_type?: true
    url?: true
    image_url?: true
    qr_for?: true
  }

  export type QRCodeMaxAggregateInputType = {
    id?: true
    qr_type?: true
    url?: true
    image_url?: true
    qr_for?: true
  }

  export type QRCodeCountAggregateInputType = {
    id?: true
    qr_type?: true
    url?: true
    image_url?: true
    qr_for?: true
    _all?: true
  }

  export type QRCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCode to aggregate.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRCodes
    **/
    _count?: true | QRCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRCodeMaxAggregateInputType
  }

  export type GetQRCodeAggregateType<T extends QRCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQRCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRCode[P]>
      : GetScalarType<T[P], AggregateQRCode[P]>
  }




  export type QRCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRCodeWhereInput
    orderBy?: QRCodeOrderByWithAggregationInput | QRCodeOrderByWithAggregationInput[]
    by: QRCodeScalarFieldEnum[] | QRCodeScalarFieldEnum
    having?: QRCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRCodeCountAggregateInputType | true
    _min?: QRCodeMinAggregateInputType
    _max?: QRCodeMaxAggregateInputType
  }

  export type QRCodeGroupByOutputType = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url: string | null
    qr_for: $Enums.QRCode_For
    _count: QRCodeCountAggregateOutputType | null
    _min: QRCodeMinAggregateOutputType | null
    _max: QRCodeMaxAggregateOutputType | null
  }

  type GetQRCodeGroupByPayload<T extends QRCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QRCodeGroupByOutputType[P]>
        }
      >
    >


  export type QRCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qr_type?: boolean
    url?: boolean
    image_url?: boolean
    qr_for?: boolean
    owner?: boolean | QRCode$ownerArgs<ExtArgs>
    parking_spot?: boolean | QRCode$parking_spotArgs<ExtArgs>
  }, ExtArgs["result"]["qRCode"]>

  export type QRCodeSelectScalar = {
    id?: boolean
    qr_type?: boolean
    url?: boolean
    image_url?: boolean
    qr_for?: boolean
  }

  export type QRCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | QRCode$ownerArgs<ExtArgs>
    parking_spot?: boolean | QRCode$parking_spotArgs<ExtArgs>
  }


  export type $QRCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRCode"
    objects: {
      owner: Prisma.$CommunityMembersPayload<ExtArgs> | null
      parking_spot: Prisma.$ParkingSpotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qr_type: $Enums.QRCode_Type
      url: string
      image_url: string | null
      qr_for: $Enums.QRCode_For
    }, ExtArgs["result"]["qRCode"]>
    composites: {}
  }


  type QRCodeGetPayload<S extends boolean | null | undefined | QRCodeDefaultArgs> = $Result.GetResult<Prisma.$QRCodePayload, S>

  type QRCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QRCodeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: QRCodeCountAggregateInputType | true
    }

  export interface QRCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRCode'], meta: { name: 'QRCode' } }
    /**
     * Find zero or one QRCode that matches the filter.
     * @param {QRCodeFindUniqueArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QRCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one QRCode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QRCodeFindUniqueOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QRCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first QRCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QRCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindFirstArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first QRCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindFirstOrThrowArgs} args - Arguments to find a QRCode
     * @example
     * // Get one QRCode
     * const qRCode = await prisma.qRCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QRCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more QRCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRCodes
     * const qRCodes = await prisma.qRCode.findMany()
     * 
     * // Get first 10 QRCodes
     * const qRCodes = await prisma.qRCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRCodeWithIdOnly = await prisma.qRCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QRCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a QRCode.
     * @param {QRCodeCreateArgs} args - Arguments to create a QRCode.
     * @example
     * // Create one QRCode
     * const QRCode = await prisma.qRCode.create({
     *   data: {
     *     // ... data to create a QRCode
     *   }
     * })
     * 
    **/
    create<T extends QRCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeCreateArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many QRCodes.
     *     @param {QRCodeCreateManyArgs} args - Arguments to create many QRCodes.
     *     @example
     *     // Create many QRCodes
     *     const qRCode = await prisma.qRCode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends QRCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QRCode.
     * @param {QRCodeDeleteArgs} args - Arguments to delete one QRCode.
     * @example
     * // Delete one QRCode
     * const QRCode = await prisma.qRCode.delete({
     *   where: {
     *     // ... filter to delete one QRCode
     *   }
     * })
     * 
    **/
    delete<T extends QRCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeDeleteArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one QRCode.
     * @param {QRCodeUpdateArgs} args - Arguments to update one QRCode.
     * @example
     * // Update one QRCode
     * const qRCode = await prisma.qRCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QRCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpdateArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more QRCodes.
     * @param {QRCodeDeleteManyArgs} args - Arguments to filter QRCodes to delete.
     * @example
     * // Delete a few QRCodes
     * const { count } = await prisma.qRCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QRCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, QRCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRCodes
     * const qRCode = await prisma.qRCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QRCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QRCode.
     * @param {QRCodeUpsertArgs} args - Arguments to update or create a QRCode.
     * @example
     * // Update or create a QRCode
     * const qRCode = await prisma.qRCode.upsert({
     *   create: {
     *     // ... data to create a QRCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRCode we want to update
     *   }
     * })
    **/
    upsert<T extends QRCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, QRCodeUpsertArgs<ExtArgs>>
    ): Prisma__QRCodeClient<$Result.GetResult<Prisma.$QRCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of QRCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeCountArgs} args - Arguments to filter QRCodes to count.
     * @example
     * // Count the number of QRCodes
     * const count = await prisma.qRCode.count({
     *   where: {
     *     // ... the filter for the QRCodes we want to count
     *   }
     * })
    **/
    count<T extends QRCodeCountArgs>(
      args?: Subset<T, QRCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRCodeAggregateArgs>(args: Subset<T, QRCodeAggregateArgs>): Prisma.PrismaPromise<GetQRCodeAggregateType<T>>

    /**
     * Group by QRCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRCodeGroupByArgs['orderBy'] }
        : { orderBy?: QRCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRCode model
   */
  readonly fields: QRCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends QRCode$ownerArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$ownerArgs<ExtArgs>>): Prisma__CommunityMembersClient<$Result.GetResult<Prisma.$CommunityMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    parking_spot<T extends QRCode$parking_spotArgs<ExtArgs> = {}>(args?: Subset<T, QRCode$parking_spotArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the QRCode model
   */ 
  interface QRCodeFieldRefs {
    readonly id: FieldRef<"QRCode", 'String'>
    readonly qr_type: FieldRef<"QRCode", 'QRCode_Type'>
    readonly url: FieldRef<"QRCode", 'String'>
    readonly image_url: FieldRef<"QRCode", 'String'>
    readonly qr_for: FieldRef<"QRCode", 'QRCode_For'>
  }
    

  // Custom InputTypes

  /**
   * QRCode findUnique
   */
  export type QRCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode findUniqueOrThrow
   */
  export type QRCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode findFirst
   */
  export type QRCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode findFirstOrThrow
   */
  export type QRCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCode to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRCodes.
     */
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode findMany
   */
  export type QRCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter, which QRCodes to fetch.
     */
    where?: QRCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRCodes to fetch.
     */
    orderBy?: QRCodeOrderByWithRelationInput | QRCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRCodes.
     */
    cursor?: QRCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRCodes.
     */
    skip?: number
    distinct?: QRCodeScalarFieldEnum | QRCodeScalarFieldEnum[]
  }


  /**
   * QRCode create
   */
  export type QRCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QRCode.
     */
    data: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
  }


  /**
   * QRCode createMany
   */
  export type QRCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRCodes.
     */
    data: QRCodeCreateManyInput | QRCodeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * QRCode update
   */
  export type QRCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QRCode.
     */
    data: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
    /**
     * Choose, which QRCode to update.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode updateMany
   */
  export type QRCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRCodes.
     */
    data: XOR<QRCodeUpdateManyMutationInput, QRCodeUncheckedUpdateManyInput>
    /**
     * Filter which QRCodes to update
     */
    where?: QRCodeWhereInput
  }


  /**
   * QRCode upsert
   */
  export type QRCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QRCode to update in case it exists.
     */
    where: QRCodeWhereUniqueInput
    /**
     * In case the QRCode found by the `where` argument doesn't exist, create a new QRCode with this data.
     */
    create: XOR<QRCodeCreateInput, QRCodeUncheckedCreateInput>
    /**
     * In case the QRCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRCodeUpdateInput, QRCodeUncheckedUpdateInput>
  }


  /**
   * QRCode delete
   */
  export type QRCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
    /**
     * Filter which QRCode to delete.
     */
    where: QRCodeWhereUniqueInput
  }


  /**
   * QRCode deleteMany
   */
  export type QRCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRCodes to delete
     */
    where?: QRCodeWhereInput
  }


  /**
   * QRCode.owner
   */
  export type QRCode$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMembers
     */
    select?: CommunityMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityMembersInclude<ExtArgs> | null
    where?: CommunityMembersWhereInput
  }


  /**
   * QRCode.parking_spot
   */
  export type QRCode$parking_spotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
  }


  /**
   * QRCode without action
   */
  export type QRCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRCode
     */
    select?: QRCodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QRCodeInclude<ExtArgs> | null
  }



  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    vehicle_plate: string | null
    vehicle_type: $Enums.Vehicle_Type | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    vehicle_plate: string | null
    vehicle_type: $Enums.Vehicle_Type | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehicle_plate: number
    vehicle_type: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    vehicle_plate?: true
    vehicle_type?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehicle_plate?: true
    vehicle_type?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehicle_plate?: true
    vehicle_type?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    vehicle_plate: string | null
    vehicle_type: $Enums.Vehicle_Type
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
    parking_spots?: boolean | Vehicle$parking_spotsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parking_spots?: boolean | Vehicle$parking_spotsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      parking_spots: Prisma.$ParkingSpotPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicle_plate: string | null
      vehicle_type: $Enums.Vehicle_Type
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }


  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
    **/
    create<T extends VehicleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vehicles.
     *     @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
    **/
    delete<T extends VehicleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>
    ): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parking_spots<T extends Vehicle$parking_spotsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$parking_spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly vehicle_plate: FieldRef<"Vehicle", 'String'>
    readonly vehicle_type: FieldRef<"Vehicle", 'Vehicle_Type'>
  }
    

  // Custom InputTypes

  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }


  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data?: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }


  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }


  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }


  /**
   * Vehicle.parking_spots
   */
  export type Vehicle$parking_spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    cursor?: ParkingSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }


  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehicleInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PreSignUpManagementScalarFieldEnum: {
    email: 'email',
    company_name: 'company_name',
    contact_number: 'contact_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PreSignUpManagementScalarFieldEnum = (typeof PreSignUpManagementScalarFieldEnum)[keyof typeof PreSignUpManagementScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ManagementScalarFieldEnum: {
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

  export type ManagementScalarFieldEnum = (typeof ManagementScalarFieldEnum)[keyof typeof ManagementScalarFieldEnum]


  export const ManagementStaffScalarFieldEnum: {
    id: 'id',
    management_id: 'management_id',
    name: 'name',
    email: 'email',
    date_added: 'date_added',
    last_updated: 'last_updated'
  };

  export type ManagementStaffScalarFieldEnum = (typeof ManagementStaffScalarFieldEnum)[keyof typeof ManagementStaffScalarFieldEnum]


  export const BuildingScalarFieldEnum: {
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

  export type BuildingScalarFieldEnum = (typeof BuildingScalarFieldEnum)[keyof typeof BuildingScalarFieldEnum]


  export const CommunityMembersScalarFieldEnum: {
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

  export type CommunityMembersScalarFieldEnum = (typeof CommunityMembersScalarFieldEnum)[keyof typeof CommunityMembersScalarFieldEnum]


  export const ParkingSpotScalarFieldEnum: {
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

  export type ParkingSpotScalarFieldEnum = (typeof ParkingSpotScalarFieldEnum)[keyof typeof ParkingSpotScalarFieldEnum]


  export const QRCodeScalarFieldEnum: {
    id: 'id',
    qr_type: 'qr_type',
    url: 'url',
    image_url: 'image_url',
    qr_for: 'qr_for'
  };

  export type QRCodeScalarFieldEnum = (typeof QRCodeScalarFieldEnum)[keyof typeof QRCodeScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehicle_plate: 'vehicle_plate',
    vehicle_type: 'vehicle_type'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'User_Role[]'
   */
  export type ListEnumUser_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_Role[]'>
    


  /**
   * Reference to a field of type 'User_Role'
   */
  export type EnumUser_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'User_Role'>
    


  /**
   * Reference to a field of type 'Verification_Status'
   */
  export type EnumVerification_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Verification_Status'>
    


  /**
   * Reference to a field of type 'Verification_Status[]'
   */
  export type ListEnumVerification_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Verification_Status[]'>
    


  /**
   * Reference to a field of type 'Mobile_Onboard_Status'
   */
  export type EnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mobile_Onboard_Status'>
    


  /**
   * Reference to a field of type 'Mobile_Onboard_Status[]'
   */
  export type ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mobile_Onboard_Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Subscription_PlanType'
   */
  export type EnumSubscription_PlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription_PlanType'>
    


  /**
   * Reference to a field of type 'Subscription_PlanType[]'
   */
  export type ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subscription_PlanType[]'>
    


  /**
   * Reference to a field of type 'Active_State'
   */
  export type EnumActive_StateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Active_State'>
    


  /**
   * Reference to a field of type 'Active_State[]'
   */
  export type ListEnumActive_StateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Active_State[]'>
    


  /**
   * Reference to a field of type 'OnboardingState'
   */
  export type EnumOnboardingStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingState'>
    


  /**
   * Reference to a field of type 'OnboardingState[]'
   */
  export type ListEnumOnboardingStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OnboardingState[]'>
    


  /**
   * Reference to a field of type 'BuildingType'
   */
  export type EnumBuildingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingType'>
    


  /**
   * Reference to a field of type 'BuildingType[]'
   */
  export type ListEnumBuildingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BuildingFacility[]'
   */
  export type ListEnumBuildingFacilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingFacility[]'>
    


  /**
   * Reference to a field of type 'BuildingFacility'
   */
  export type EnumBuildingFacilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildingFacility'>
    


  /**
   * Reference to a field of type 'Parking_Spot_Type'
   */
  export type EnumParking_Spot_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Parking_Spot_Type'>
    


  /**
   * Reference to a field of type 'Parking_Spot_Type[]'
   */
  export type ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Parking_Spot_Type[]'>
    


  /**
   * Reference to a field of type 'QRCode_Type'
   */
  export type EnumQRCode_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QRCode_Type'>
    


  /**
   * Reference to a field of type 'QRCode_Type[]'
   */
  export type ListEnumQRCode_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QRCode_Type[]'>
    


  /**
   * Reference to a field of type 'QRCode_For'
   */
  export type EnumQRCode_ForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QRCode_For'>
    


  /**
   * Reference to a field of type 'QRCode_For[]'
   */
  export type ListEnumQRCode_ForFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QRCode_For[]'>
    


  /**
   * Reference to a field of type 'Vehicle_Type'
   */
  export type EnumVehicle_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Vehicle_Type'>
    


  /**
   * Reference to a field of type 'Vehicle_Type[]'
   */
  export type ListEnumVehicle_TypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Vehicle_Type[]'>
    
  /**
   * Deep Input Types
   */


  export type PreSignUpManagementWhereInput = {
    AND?: PreSignUpManagementWhereInput | PreSignUpManagementWhereInput[]
    OR?: PreSignUpManagementWhereInput[]
    NOT?: PreSignUpManagementWhereInput | PreSignUpManagementWhereInput[]
    email?: StringFilter<"PreSignUpManagement"> | string
    company_name?: StringFilter<"PreSignUpManagement"> | string
    contact_number?: StringFilter<"PreSignUpManagement"> | string
    created_at?: DateTimeFilter<"PreSignUpManagement"> | Date | string
    updated_at?: DateTimeFilter<"PreSignUpManagement"> | Date | string
  }

  export type PreSignUpManagementOrderByWithRelationInput = {
    email?: SortOrder
    company_name?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PreSignUpManagementWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: PreSignUpManagementWhereInput | PreSignUpManagementWhereInput[]
    OR?: PreSignUpManagementWhereInput[]
    NOT?: PreSignUpManagementWhereInput | PreSignUpManagementWhereInput[]
    company_name?: StringFilter<"PreSignUpManagement"> | string
    contact_number?: StringFilter<"PreSignUpManagement"> | string
    created_at?: DateTimeFilter<"PreSignUpManagement"> | Date | string
    updated_at?: DateTimeFilter<"PreSignUpManagement"> | Date | string
  }, "email">

  export type PreSignUpManagementOrderByWithAggregationInput = {
    email?: SortOrder
    company_name?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PreSignUpManagementCountOrderByAggregateInput
    _max?: PreSignUpManagementMaxOrderByAggregateInput
    _min?: PreSignUpManagementMinOrderByAggregateInput
  }

  export type PreSignUpManagementScalarWhereWithAggregatesInput = {
    AND?: PreSignUpManagementScalarWhereWithAggregatesInput | PreSignUpManagementScalarWhereWithAggregatesInput[]
    OR?: PreSignUpManagementScalarWhereWithAggregatesInput[]
    NOT?: PreSignUpManagementScalarWhereWithAggregatesInput | PreSignUpManagementScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"PreSignUpManagement"> | string
    company_name?: StringWithAggregatesFilter<"PreSignUpManagement"> | string
    contact_number?: StringWithAggregatesFilter<"PreSignUpManagement"> | string
    created_at?: DateTimeWithAggregatesFilter<"PreSignUpManagement"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PreSignUpManagement"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone_number?: StringNullableFilter<"User"> | string | null
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    user_roles?: EnumUser_RoleNullableListFilter<"User">
    verification_status?: EnumVerification_StatusNullableFilter<"User"> | $Enums.Verification_Status | null
    mobile_onboard_status?: EnumMobile_Onboard_StatusNullableFilter<"User"> | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeFilter<"User"> | Date | string
    management?: XOR<ManagementNullableRelationFilter, ManagementWhereInput> | null
    community_members?: CommunityMembersListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    user_roles?: SortOrder
    verification_status?: SortOrderInput | SortOrder
    mobile_onboard_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    management?: ManagementOrderByWithRelationInput
    community_members?: CommunityMembersOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringNullableFilter<"User"> | string | null
    last_name?: StringNullableFilter<"User"> | string | null
    user_roles?: EnumUser_RoleNullableListFilter<"User">
    verification_status?: EnumVerification_StatusNullableFilter<"User"> | $Enums.Verification_Status | null
    mobile_onboard_status?: EnumMobile_Onboard_StatusNullableFilter<"User"> | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFilter<"User"> | Date | string
    last_login?: DateTimeFilter<"User"> | Date | string
    management?: XOR<ManagementNullableRelationFilter, ManagementWhereInput> | null
    community_members?: CommunityMembersListRelationFilter
  }, "id" | "id" | "email" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    user_roles?: SortOrder
    verification_status?: SortOrderInput | SortOrder
    mobile_onboard_status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    user_roles?: EnumUser_RoleNullableListFilter<"User">
    verification_status?: EnumVerification_StatusNullableWithAggregatesFilter<"User"> | $Enums.Verification_Status | null
    mobile_onboard_status?: EnumMobile_Onboard_StatusNullableWithAggregatesFilter<"User"> | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ManagementWhereInput = {
    AND?: ManagementWhereInput | ManagementWhereInput[]
    OR?: ManagementWhereInput[]
    NOT?: ManagementWhereInput | ManagementWhereInput[]
    id?: StringFilter<"Management"> | string
    user_id?: StringFilter<"Management"> | string
    company_name?: StringNullableFilter<"Management"> | string | null
    business_email?: StringNullableFilter<"Management"> | string | null
    phone_number?: StringNullableFilter<"Management"> | string | null
    customer_service_email?: StringNullableFilter<"Management"> | string | null
    emergency_email?: StringNullableFilter<"Management"> | string | null
    address?: StringNullableFilter<"Management"> | string | null
    address2?: StringNullableFilter<"Management"> | string | null
    lat?: FloatNullableFilter<"Management"> | number | null
    lng?: FloatNullableFilter<"Management"> | number | null
    subscription_plan_type?: EnumSubscription_PlanTypeNullableFilter<"Management"> | $Enums.Subscription_PlanType | null
    subscription_state?: EnumActive_StateNullableFilter<"Management"> | $Enums.Active_State | null
    business_state?: EnumActive_StateNullableFilter<"Management"> | $Enums.Active_State | null
    date_joined?: DateTimeFilter<"Management"> | Date | string
    last_login?: DateTimeFilter<"Management"> | Date | string
    last_updated?: DateTimeFilter<"Management"> | Date | string
    onboard_state?: EnumOnboardingStateNullableFilter<"Management"> | $Enums.OnboardingState | null
    staffs?: ManagementStaffListRelationFilter
    buildings?: BuildingListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ManagementOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    business_email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_service_email?: SortOrderInput | SortOrder
    emergency_email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    subscription_plan_type?: SortOrderInput | SortOrder
    subscription_state?: SortOrderInput | SortOrder
    business_state?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    last_login?: SortOrder
    last_updated?: SortOrder
    onboard_state?: SortOrderInput | SortOrder
    staffs?: ManagementStaffOrderByRelationAggregateInput
    buildings?: BuildingOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ManagementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    business_email?: string
    AND?: ManagementWhereInput | ManagementWhereInput[]
    OR?: ManagementWhereInput[]
    NOT?: ManagementWhereInput | ManagementWhereInput[]
    company_name?: StringNullableFilter<"Management"> | string | null
    phone_number?: StringNullableFilter<"Management"> | string | null
    customer_service_email?: StringNullableFilter<"Management"> | string | null
    emergency_email?: StringNullableFilter<"Management"> | string | null
    address?: StringNullableFilter<"Management"> | string | null
    address2?: StringNullableFilter<"Management"> | string | null
    lat?: FloatNullableFilter<"Management"> | number | null
    lng?: FloatNullableFilter<"Management"> | number | null
    subscription_plan_type?: EnumSubscription_PlanTypeNullableFilter<"Management"> | $Enums.Subscription_PlanType | null
    subscription_state?: EnumActive_StateNullableFilter<"Management"> | $Enums.Active_State | null
    business_state?: EnumActive_StateNullableFilter<"Management"> | $Enums.Active_State | null
    date_joined?: DateTimeFilter<"Management"> | Date | string
    last_login?: DateTimeFilter<"Management"> | Date | string
    last_updated?: DateTimeFilter<"Management"> | Date | string
    onboard_state?: EnumOnboardingStateNullableFilter<"Management"> | $Enums.OnboardingState | null
    staffs?: ManagementStaffListRelationFilter
    buildings?: BuildingListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "id" | "user_id" | "business_email">

  export type ManagementOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrderInput | SortOrder
    business_email?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_service_email?: SortOrderInput | SortOrder
    emergency_email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    subscription_plan_type?: SortOrderInput | SortOrder
    subscription_state?: SortOrderInput | SortOrder
    business_state?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    last_login?: SortOrder
    last_updated?: SortOrder
    onboard_state?: SortOrderInput | SortOrder
    _count?: ManagementCountOrderByAggregateInput
    _avg?: ManagementAvgOrderByAggregateInput
    _max?: ManagementMaxOrderByAggregateInput
    _min?: ManagementMinOrderByAggregateInput
    _sum?: ManagementSumOrderByAggregateInput
  }

  export type ManagementScalarWhereWithAggregatesInput = {
    AND?: ManagementScalarWhereWithAggregatesInput | ManagementScalarWhereWithAggregatesInput[]
    OR?: ManagementScalarWhereWithAggregatesInput[]
    NOT?: ManagementScalarWhereWithAggregatesInput | ManagementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Management"> | string
    user_id?: StringWithAggregatesFilter<"Management"> | string
    company_name?: StringNullableWithAggregatesFilter<"Management"> | string | null
    business_email?: StringNullableWithAggregatesFilter<"Management"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Management"> | string | null
    customer_service_email?: StringNullableWithAggregatesFilter<"Management"> | string | null
    emergency_email?: StringNullableWithAggregatesFilter<"Management"> | string | null
    address?: StringNullableWithAggregatesFilter<"Management"> | string | null
    address2?: StringNullableWithAggregatesFilter<"Management"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Management"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Management"> | number | null
    subscription_plan_type?: EnumSubscription_PlanTypeNullableWithAggregatesFilter<"Management"> | $Enums.Subscription_PlanType | null
    subscription_state?: EnumActive_StateNullableWithAggregatesFilter<"Management"> | $Enums.Active_State | null
    business_state?: EnumActive_StateNullableWithAggregatesFilter<"Management"> | $Enums.Active_State | null
    date_joined?: DateTimeWithAggregatesFilter<"Management"> | Date | string
    last_login?: DateTimeWithAggregatesFilter<"Management"> | Date | string
    last_updated?: DateTimeWithAggregatesFilter<"Management"> | Date | string
    onboard_state?: EnumOnboardingStateNullableWithAggregatesFilter<"Management"> | $Enums.OnboardingState | null
  }

  export type ManagementStaffWhereInput = {
    AND?: ManagementStaffWhereInput | ManagementStaffWhereInput[]
    OR?: ManagementStaffWhereInput[]
    NOT?: ManagementStaffWhereInput | ManagementStaffWhereInput[]
    id?: StringFilter<"ManagementStaff"> | string
    management_id?: StringFilter<"ManagementStaff"> | string
    name?: StringNullableFilter<"ManagementStaff"> | string | null
    email?: StringNullableFilter<"ManagementStaff"> | string | null
    date_added?: DateTimeFilter<"ManagementStaff"> | Date | string
    last_updated?: DateTimeFilter<"ManagementStaff"> | Date | string
    management?: XOR<ManagementRelationFilter, ManagementWhereInput>
  }

  export type ManagementStaffOrderByWithRelationInput = {
    id?: SortOrder
    management_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    date_added?: SortOrder
    last_updated?: SortOrder
    management?: ManagementOrderByWithRelationInput
  }

  export type ManagementStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ManagementStaffWhereInput | ManagementStaffWhereInput[]
    OR?: ManagementStaffWhereInput[]
    NOT?: ManagementStaffWhereInput | ManagementStaffWhereInput[]
    management_id?: StringFilter<"ManagementStaff"> | string
    name?: StringNullableFilter<"ManagementStaff"> | string | null
    date_added?: DateTimeFilter<"ManagementStaff"> | Date | string
    last_updated?: DateTimeFilter<"ManagementStaff"> | Date | string
    management?: XOR<ManagementRelationFilter, ManagementWhereInput>
  }, "id" | "id" | "email">

  export type ManagementStaffOrderByWithAggregationInput = {
    id?: SortOrder
    management_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    date_added?: SortOrder
    last_updated?: SortOrder
    _count?: ManagementStaffCountOrderByAggregateInput
    _max?: ManagementStaffMaxOrderByAggregateInput
    _min?: ManagementStaffMinOrderByAggregateInput
  }

  export type ManagementStaffScalarWhereWithAggregatesInput = {
    AND?: ManagementStaffScalarWhereWithAggregatesInput | ManagementStaffScalarWhereWithAggregatesInput[]
    OR?: ManagementStaffScalarWhereWithAggregatesInput[]
    NOT?: ManagementStaffScalarWhereWithAggregatesInput | ManagementStaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ManagementStaff"> | string
    management_id?: StringWithAggregatesFilter<"ManagementStaff"> | string
    name?: StringNullableWithAggregatesFilter<"ManagementStaff"> | string | null
    email?: StringNullableWithAggregatesFilter<"ManagementStaff"> | string | null
    date_added?: DateTimeWithAggregatesFilter<"ManagementStaff"> | Date | string
    last_updated?: DateTimeWithAggregatesFilter<"ManagementStaff"> | Date | string
  }

  export type BuildingWhereInput = {
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    id?: StringFilter<"Building"> | string
    management_id?: StringFilter<"Building"> | string
    building_name?: StringNullableFilter<"Building"> | string | null
    building_type?: EnumBuildingTypeNullableFilter<"Building"> | $Enums.BuildingType | null
    address?: StringNullableFilter<"Building"> | string | null
    city?: StringNullableFilter<"Building"> | string | null
    state?: StringNullableFilter<"Building"> | string | null
    country?: StringNullableFilter<"Building"> | string | null
    lat?: FloatNullableFilter<"Building"> | number | null
    lng?: FloatNullableFilter<"Building"> | number | null
    no_of_units?: IntNullableFilter<"Building"> | number | null
    no_of_parking_floors?: IntNullableFilter<"Building"> | number | null
    no_of_parking_spots?: IntNullableFilter<"Building"> | number | null
    no_of_developer_parking_spots?: IntNullableFilter<"Building"> | number | null
    facilities?: EnumBuildingFacilityNullableListFilter<"Building">
    management?: XOR<ManagementRelationFilter, ManagementWhereInput>
    community_members?: CommunityMembersListRelationFilter
    parking_spots?: ParkingSpotListRelationFilter
  }

  export type BuildingOrderByWithRelationInput = {
    id?: SortOrder
    management_id?: SortOrder
    building_name?: SortOrderInput | SortOrder
    building_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    no_of_units?: SortOrderInput | SortOrder
    no_of_parking_floors?: SortOrderInput | SortOrder
    no_of_parking_spots?: SortOrderInput | SortOrder
    no_of_developer_parking_spots?: SortOrderInput | SortOrder
    facilities?: SortOrder
    management?: ManagementOrderByWithRelationInput
    community_members?: CommunityMembersOrderByRelationAggregateInput
    parking_spots?: ParkingSpotOrderByRelationAggregateInput
  }

  export type BuildingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildingWhereInput | BuildingWhereInput[]
    OR?: BuildingWhereInput[]
    NOT?: BuildingWhereInput | BuildingWhereInput[]
    management_id?: StringFilter<"Building"> | string
    building_name?: StringNullableFilter<"Building"> | string | null
    building_type?: EnumBuildingTypeNullableFilter<"Building"> | $Enums.BuildingType | null
    address?: StringNullableFilter<"Building"> | string | null
    city?: StringNullableFilter<"Building"> | string | null
    state?: StringNullableFilter<"Building"> | string | null
    country?: StringNullableFilter<"Building"> | string | null
    lat?: FloatNullableFilter<"Building"> | number | null
    lng?: FloatNullableFilter<"Building"> | number | null
    no_of_units?: IntNullableFilter<"Building"> | number | null
    no_of_parking_floors?: IntNullableFilter<"Building"> | number | null
    no_of_parking_spots?: IntNullableFilter<"Building"> | number | null
    no_of_developer_parking_spots?: IntNullableFilter<"Building"> | number | null
    facilities?: EnumBuildingFacilityNullableListFilter<"Building">
    management?: XOR<ManagementRelationFilter, ManagementWhereInput>
    community_members?: CommunityMembersListRelationFilter
    parking_spots?: ParkingSpotListRelationFilter
  }, "id" | "id">

  export type BuildingOrderByWithAggregationInput = {
    id?: SortOrder
    management_id?: SortOrder
    building_name?: SortOrderInput | SortOrder
    building_type?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    no_of_units?: SortOrderInput | SortOrder
    no_of_parking_floors?: SortOrderInput | SortOrder
    no_of_parking_spots?: SortOrderInput | SortOrder
    no_of_developer_parking_spots?: SortOrderInput | SortOrder
    facilities?: SortOrder
    _count?: BuildingCountOrderByAggregateInput
    _avg?: BuildingAvgOrderByAggregateInput
    _max?: BuildingMaxOrderByAggregateInput
    _min?: BuildingMinOrderByAggregateInput
    _sum?: BuildingSumOrderByAggregateInput
  }

  export type BuildingScalarWhereWithAggregatesInput = {
    AND?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    OR?: BuildingScalarWhereWithAggregatesInput[]
    NOT?: BuildingScalarWhereWithAggregatesInput | BuildingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Building"> | string
    management_id?: StringWithAggregatesFilter<"Building"> | string
    building_name?: StringNullableWithAggregatesFilter<"Building"> | string | null
    building_type?: EnumBuildingTypeNullableWithAggregatesFilter<"Building"> | $Enums.BuildingType | null
    address?: StringNullableWithAggregatesFilter<"Building"> | string | null
    city?: StringNullableWithAggregatesFilter<"Building"> | string | null
    state?: StringNullableWithAggregatesFilter<"Building"> | string | null
    country?: StringNullableWithAggregatesFilter<"Building"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Building"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Building"> | number | null
    no_of_units?: IntNullableWithAggregatesFilter<"Building"> | number | null
    no_of_parking_floors?: IntNullableWithAggregatesFilter<"Building"> | number | null
    no_of_parking_spots?: IntNullableWithAggregatesFilter<"Building"> | number | null
    no_of_developer_parking_spots?: IntNullableWithAggregatesFilter<"Building"> | number | null
    facilities?: EnumBuildingFacilityNullableListFilter<"Building">
  }

  export type CommunityMembersWhereInput = {
    AND?: CommunityMembersWhereInput | CommunityMembersWhereInput[]
    OR?: CommunityMembersWhereInput[]
    NOT?: CommunityMembersWhereInput | CommunityMembersWhereInput[]
    id?: StringFilter<"CommunityMembers"> | string
    building_id?: StringFilter<"CommunityMembers"> | string
    user_id?: StringNullableFilter<"CommunityMembers"> | string | null
    user_role?: EnumUser_RoleNullableFilter<"CommunityMembers"> | $Enums.User_Role | null
    email?: StringNullableFilter<"CommunityMembers"> | string | null
    name?: StringNullableFilter<"CommunityMembers"> | string | null
    phone?: StringNullableFilter<"CommunityMembers"> | string | null
    unit_numbers?: StringNullableListFilter<"CommunityMembers">
    status?: EnumActive_StateFilter<"CommunityMembers"> | $Enums.Active_State
    qr_code_id?: StringNullableFilter<"CommunityMembers"> | string | null
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
    qr_code?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
    parking_spots?: ParkingSpotListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type CommunityMembersOrderByWithRelationInput = {
    id?: SortOrder
    building_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user_role?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    unit_numbers?: SortOrder
    status?: SortOrder
    qr_code_id?: SortOrderInput | SortOrder
    building?: BuildingOrderByWithRelationInput
    qr_code?: QRCodeOrderByWithRelationInput
    parking_spots?: ParkingSpotOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CommunityMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_code_id?: string
    building_id_phone_email?: CommunityMembersBuilding_idPhoneEmailCompoundUniqueInput
    AND?: CommunityMembersWhereInput | CommunityMembersWhereInput[]
    OR?: CommunityMembersWhereInput[]
    NOT?: CommunityMembersWhereInput | CommunityMembersWhereInput[]
    building_id?: StringFilter<"CommunityMembers"> | string
    user_id?: StringNullableFilter<"CommunityMembers"> | string | null
    user_role?: EnumUser_RoleNullableFilter<"CommunityMembers"> | $Enums.User_Role | null
    email?: StringNullableFilter<"CommunityMembers"> | string | null
    name?: StringNullableFilter<"CommunityMembers"> | string | null
    phone?: StringNullableFilter<"CommunityMembers"> | string | null
    unit_numbers?: StringNullableListFilter<"CommunityMembers">
    status?: EnumActive_StateFilter<"CommunityMembers"> | $Enums.Active_State
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
    qr_code?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
    parking_spots?: ParkingSpotListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "id" | "qr_code_id" | "building_id_phone_email">

  export type CommunityMembersOrderByWithAggregationInput = {
    id?: SortOrder
    building_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    user_role?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    unit_numbers?: SortOrder
    status?: SortOrder
    qr_code_id?: SortOrderInput | SortOrder
    _count?: CommunityMembersCountOrderByAggregateInput
    _max?: CommunityMembersMaxOrderByAggregateInput
    _min?: CommunityMembersMinOrderByAggregateInput
  }

  export type CommunityMembersScalarWhereWithAggregatesInput = {
    AND?: CommunityMembersScalarWhereWithAggregatesInput | CommunityMembersScalarWhereWithAggregatesInput[]
    OR?: CommunityMembersScalarWhereWithAggregatesInput[]
    NOT?: CommunityMembersScalarWhereWithAggregatesInput | CommunityMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityMembers"> | string
    building_id?: StringWithAggregatesFilter<"CommunityMembers"> | string
    user_id?: StringNullableWithAggregatesFilter<"CommunityMembers"> | string | null
    user_role?: EnumUser_RoleNullableWithAggregatesFilter<"CommunityMembers"> | $Enums.User_Role | null
    email?: StringNullableWithAggregatesFilter<"CommunityMembers"> | string | null
    name?: StringNullableWithAggregatesFilter<"CommunityMembers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"CommunityMembers"> | string | null
    unit_numbers?: StringNullableListFilter<"CommunityMembers">
    status?: EnumActive_StateWithAggregatesFilter<"CommunityMembers"> | $Enums.Active_State
    qr_code_id?: StringNullableWithAggregatesFilter<"CommunityMembers"> | string | null
  }

  export type ParkingSpotWhereInput = {
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    id?: StringFilter<"ParkingSpot"> | string
    building_id?: StringFilter<"ParkingSpot"> | string
    owner_id?: StringNullableFilter<"ParkingSpot"> | string | null
    qr_code_id?: StringNullableFilter<"ParkingSpot"> | string | null
    vehicle_id?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_level?: IntNullableFilter<"ParkingSpot"> | number | null
    parking_spot_number?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_spot_type?: EnumParking_Spot_TypeFilter<"ParkingSpot"> | $Enums.Parking_Spot_Type
    parking_instructions?: StringNullableFilter<"ParkingSpot"> | string | null
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
    owner?: XOR<CommunityMembersNullableRelationFilter, CommunityMembersWhereInput> | null
    qr_code?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }

  export type ParkingSpotOrderByWithRelationInput = {
    id?: SortOrder
    building_id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    qr_code_id?: SortOrderInput | SortOrder
    vehicle_id?: SortOrderInput | SortOrder
    parking_level?: SortOrderInput | SortOrder
    parking_spot_number?: SortOrderInput | SortOrder
    parking_spot_type?: SortOrder
    parking_instructions?: SortOrderInput | SortOrder
    building?: BuildingOrderByWithRelationInput
    owner?: CommunityMembersOrderByWithRelationInput
    qr_code?: QRCodeOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type ParkingSpotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    qr_code_id?: string
    qr_code_id_parking_level_parking_spot_number?: ParkingSpotQr_code_idParking_levelParking_spot_numberCompoundUniqueInput
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    building_id?: StringFilter<"ParkingSpot"> | string
    owner_id?: StringNullableFilter<"ParkingSpot"> | string | null
    vehicle_id?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_level?: IntNullableFilter<"ParkingSpot"> | number | null
    parking_spot_number?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_spot_type?: EnumParking_Spot_TypeFilter<"ParkingSpot"> | $Enums.Parking_Spot_Type
    parking_instructions?: StringNullableFilter<"ParkingSpot"> | string | null
    building?: XOR<BuildingRelationFilter, BuildingWhereInput>
    owner?: XOR<CommunityMembersNullableRelationFilter, CommunityMembersWhereInput> | null
    qr_code?: XOR<QRCodeNullableRelationFilter, QRCodeWhereInput> | null
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }, "id" | "id" | "qr_code_id" | "qr_code_id_parking_level_parking_spot_number">

  export type ParkingSpotOrderByWithAggregationInput = {
    id?: SortOrder
    building_id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    qr_code_id?: SortOrderInput | SortOrder
    vehicle_id?: SortOrderInput | SortOrder
    parking_level?: SortOrderInput | SortOrder
    parking_spot_number?: SortOrderInput | SortOrder
    parking_spot_type?: SortOrder
    parking_instructions?: SortOrderInput | SortOrder
    _count?: ParkingSpotCountOrderByAggregateInput
    _avg?: ParkingSpotAvgOrderByAggregateInput
    _max?: ParkingSpotMaxOrderByAggregateInput
    _min?: ParkingSpotMinOrderByAggregateInput
    _sum?: ParkingSpotSumOrderByAggregateInput
  }

  export type ParkingSpotScalarWhereWithAggregatesInput = {
    AND?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    OR?: ParkingSpotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ParkingSpot"> | string
    building_id?: StringWithAggregatesFilter<"ParkingSpot"> | string
    owner_id?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    qr_code_id?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    vehicle_id?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    parking_level?: IntNullableWithAggregatesFilter<"ParkingSpot"> | number | null
    parking_spot_number?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    parking_spot_type?: EnumParking_Spot_TypeWithAggregatesFilter<"ParkingSpot"> | $Enums.Parking_Spot_Type
    parking_instructions?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
  }

  export type QRCodeWhereInput = {
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    id?: StringFilter<"QRCode"> | string
    qr_type?: EnumQRCode_TypeFilter<"QRCode"> | $Enums.QRCode_Type
    url?: StringFilter<"QRCode"> | string
    image_url?: StringNullableFilter<"QRCode"> | string | null
    qr_for?: EnumQRCode_ForFilter<"QRCode"> | $Enums.QRCode_For
    owner?: XOR<CommunityMembersNullableRelationFilter, CommunityMembersWhereInput> | null
    parking_spot?: XOR<ParkingSpotNullableRelationFilter, ParkingSpotWhereInput> | null
  }

  export type QRCodeOrderByWithRelationInput = {
    id?: SortOrder
    qr_type?: SortOrder
    url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    qr_for?: SortOrder
    owner?: CommunityMembersOrderByWithRelationInput
    parking_spot?: ParkingSpotOrderByWithRelationInput
  }

  export type QRCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QRCodeWhereInput | QRCodeWhereInput[]
    OR?: QRCodeWhereInput[]
    NOT?: QRCodeWhereInput | QRCodeWhereInput[]
    qr_type?: EnumQRCode_TypeFilter<"QRCode"> | $Enums.QRCode_Type
    url?: StringFilter<"QRCode"> | string
    image_url?: StringNullableFilter<"QRCode"> | string | null
    qr_for?: EnumQRCode_ForFilter<"QRCode"> | $Enums.QRCode_For
    owner?: XOR<CommunityMembersNullableRelationFilter, CommunityMembersWhereInput> | null
    parking_spot?: XOR<ParkingSpotNullableRelationFilter, ParkingSpotWhereInput> | null
  }, "id" | "id">

  export type QRCodeOrderByWithAggregationInput = {
    id?: SortOrder
    qr_type?: SortOrder
    url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    qr_for?: SortOrder
    _count?: QRCodeCountOrderByAggregateInput
    _max?: QRCodeMaxOrderByAggregateInput
    _min?: QRCodeMinOrderByAggregateInput
  }

  export type QRCodeScalarWhereWithAggregatesInput = {
    AND?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    OR?: QRCodeScalarWhereWithAggregatesInput[]
    NOT?: QRCodeScalarWhereWithAggregatesInput | QRCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QRCode"> | string
    qr_type?: EnumQRCode_TypeWithAggregatesFilter<"QRCode"> | $Enums.QRCode_Type
    url?: StringWithAggregatesFilter<"QRCode"> | string
    image_url?: StringNullableWithAggregatesFilter<"QRCode"> | string | null
    qr_for?: EnumQRCode_ForWithAggregatesFilter<"QRCode"> | $Enums.QRCode_For
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    vehicle_plate?: StringNullableFilter<"Vehicle"> | string | null
    vehicle_type?: EnumVehicle_TypeFilter<"Vehicle"> | $Enums.Vehicle_Type
    parking_spots?: ParkingSpotListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehicle_plate?: SortOrderInput | SortOrder
    vehicle_type?: SortOrder
    parking_spots?: ParkingSpotOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    vehicle_plate?: StringNullableFilter<"Vehicle"> | string | null
    vehicle_type?: EnumVehicle_TypeFilter<"Vehicle"> | $Enums.Vehicle_Type
    parking_spots?: ParkingSpotListRelationFilter
  }, "id" | "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehicle_plate?: SortOrderInput | SortOrder
    vehicle_type?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicle_plate?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    vehicle_type?: EnumVehicle_TypeWithAggregatesFilter<"Vehicle"> | $Enums.Vehicle_Type
  }

  export type PreSignUpManagementCreateInput = {
    email: string
    company_name: string
    contact_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PreSignUpManagementUncheckedCreateInput = {
    email: string
    company_name: string
    contact_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PreSignUpManagementUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreSignUpManagementUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreSignUpManagementCreateManyInput = {
    email: string
    company_name: string
    contact_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PreSignUpManagementUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreSignUpManagementUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    contact_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    management?: ManagementCreateNestedOneWithoutUserInput
    community_members?: CommunityMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    management?: ManagementUncheckedCreateNestedOneWithoutUserInput
    community_members?: CommunityMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementUpdateOneWithoutUserNestedInput
    community_members?: CommunityMembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementUncheckedUpdateOneWithoutUserNestedInput
    community_members?: CommunityMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementCreateInput = {
    id?: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffCreateNestedManyWithoutManagementInput
    buildings?: BuildingCreateNestedManyWithoutManagementInput
    user: UserCreateNestedOneWithoutManagementInput
  }

  export type ManagementUncheckedCreateInput = {
    id?: string
    user_id: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedCreateNestedManyWithoutManagementInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutManagementInput
  }

  export type ManagementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUpdateManyWithoutManagementNestedInput
    buildings?: BuildingUpdateManyWithoutManagementNestedInput
    user?: UserUpdateOneRequiredWithoutManagementNestedInput
  }

  export type ManagementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedUpdateManyWithoutManagementNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutManagementNestedInput
  }

  export type ManagementCreateManyInput = {
    id?: string
    user_id: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
  }

  export type ManagementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
  }

  export type ManagementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
  }

  export type ManagementStaffCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
    management: ManagementCreateNestedOneWithoutStaffsInput
  }

  export type ManagementStaffUncheckedCreateInput = {
    id?: string
    management_id: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
  }

  export type ManagementStaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type ManagementStaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementStaffCreateManyInput = {
    id?: string
    management_id: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
  }

  export type ManagementStaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementStaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingCreateInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    management: ManagementCreateNestedOneWithoutBuildingsInput
    community_members?: CommunityMembersCreateNestedManyWithoutBuildingInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateInput = {
    id?: string
    management_id: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedCreateNestedManyWithoutBuildingInput
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    management?: ManagementUpdateOneRequiredWithoutBuildingsNestedInput
    community_members?: CommunityMembersUpdateManyWithoutBuildingNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedUpdateManyWithoutBuildingNestedInput
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingCreateManyInput = {
    id?: string
    management_id: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
  }

  export type BuildingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
  }

  export type BuildingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
  }

  export type CommunityMembersCreateInput = {
    id?: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    building: BuildingCreateNestedOneWithoutCommunity_membersInput
    qr_code?: QRCodeCreateNestedOneWithoutOwnerInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
    user?: UserCreateNestedOneWithoutCommunity_membersInput
  }

  export type CommunityMembersUncheckedCreateInput = {
    id?: string
    building_id: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type CommunityMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    building?: BuildingUpdateOneRequiredWithoutCommunity_membersNestedInput
    qr_code?: QRCodeUpdateOneWithoutOwnerNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
    user?: UserUpdateOneWithoutCommunity_membersNestedInput
  }

  export type CommunityMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityMembersCreateManyInput = {
    id?: string
    building_id: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
  }

  export type CommunityMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
  }

  export type CommunityMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateInput = {
    id?: string
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
    building: BuildingCreateNestedOneWithoutParking_spotsInput
    owner?: CommunityMembersCreateNestedOneWithoutParking_spotsInput
    qr_code?: QRCodeCreateNestedOneWithoutParking_spotInput
    vehicle?: VehicleCreateNestedOneWithoutParking_spotsInput
  }

  export type ParkingSpotUncheckedCreateInput = {
    id?: string
    building_id: string
    owner_id?: string | null
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    building?: BuildingUpdateOneRequiredWithoutParking_spotsNestedInput
    owner?: CommunityMembersUpdateOneWithoutParking_spotsNestedInput
    qr_code?: QRCodeUpdateOneWithoutParking_spotNestedInput
    vehicle?: VehicleUpdateOneWithoutParking_spotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateManyInput = {
    id?: string
    building_id: string
    owner_id?: string | null
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeCreateInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    owner?: CommunityMembersCreateNestedOneWithoutQr_codeInput
    parking_spot?: ParkingSpotCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeUncheckedCreateInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    owner?: CommunityMembersUncheckedCreateNestedOneWithoutQr_codeInput
    parking_spot?: ParkingSpotUncheckedCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    owner?: CommunityMembersUpdateOneWithoutQr_codeNestedInput
    parking_spot?: ParkingSpotUpdateOneWithoutQr_codeNestedInput
  }

  export type QRCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    owner?: CommunityMembersUncheckedUpdateOneWithoutQr_codeNestedInput
    parking_spot?: ParkingSpotUncheckedUpdateOneWithoutQr_codeNestedInput
  }

  export type QRCodeCreateManyInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
  }

  export type QRCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
  }

  export type QRCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
  }

  export type VehicleCreateInput = {
    id?: string
    vehicle_plate?: string | null
    vehicle_type?: $Enums.Vehicle_Type
    parking_spots?: ParkingSpotCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    vehicle_plate?: string | null
    vehicle_type?: $Enums.Vehicle_Type
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
    parking_spots?: ParkingSpotUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    vehicle_plate?: string | null
    vehicle_type?: $Enums.Vehicle_Type
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PreSignUpManagementCountOrderByAggregateInput = {
    email?: SortOrder
    company_name?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PreSignUpManagementMaxOrderByAggregateInput = {
    email?: SortOrder
    company_name?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PreSignUpManagementMinOrderByAggregateInput = {
    email?: SortOrder
    company_name?: SortOrder
    contact_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUser_RoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumVerification_StatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Verification_Status | EnumVerification_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerification_StatusNullableFilter<$PrismaModel> | $Enums.Verification_Status | null
  }

  export type EnumMobile_Onboard_StatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Mobile_Onboard_Status | EnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel> | $Enums.Mobile_Onboard_Status | null
  }

  export type ManagementNullableRelationFilter = {
    is?: ManagementWhereInput | null
    isNot?: ManagementWhereInput | null
  }

  export type CommunityMembersListRelationFilter = {
    every?: CommunityMembersWhereInput
    some?: CommunityMembersWhereInput
    none?: CommunityMembersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommunityMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_roles?: SortOrder
    verification_status?: SortOrder
    mobile_onboard_status?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    verification_status?: SortOrder
    mobile_onboard_status?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    verification_status?: SortOrder
    mobile_onboard_status?: SortOrder
    created_at?: SortOrder
    last_login?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumVerification_StatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Verification_Status | EnumVerification_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerification_StatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Verification_Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVerification_StatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVerification_StatusNullableFilter<$PrismaModel>
  }

  export type EnumMobile_Onboard_StatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mobile_Onboard_Status | EnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMobile_Onboard_StatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Mobile_Onboard_Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumSubscription_PlanTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription_PlanType | EnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel> | $Enums.Subscription_PlanType | null
  }

  export type EnumActive_StateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel> | null
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActive_StateNullableFilter<$PrismaModel> | $Enums.Active_State | null
  }

  export type EnumOnboardingStateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingState | EnumOnboardingStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOnboardingStateNullableFilter<$PrismaModel> | $Enums.OnboardingState | null
  }

  export type ManagementStaffListRelationFilter = {
    every?: ManagementStaffWhereInput
    some?: ManagementStaffWhereInput
    none?: ManagementStaffWhereInput
  }

  export type BuildingListRelationFilter = {
    every?: BuildingWhereInput
    some?: BuildingWhereInput
    none?: BuildingWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ManagementStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagementCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    business_email?: SortOrder
    phone_number?: SortOrder
    customer_service_email?: SortOrder
    emergency_email?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    subscription_plan_type?: SortOrder
    subscription_state?: SortOrder
    business_state?: SortOrder
    date_joined?: SortOrder
    last_login?: SortOrder
    last_updated?: SortOrder
    onboard_state?: SortOrder
  }

  export type ManagementAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type ManagementMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    business_email?: SortOrder
    phone_number?: SortOrder
    customer_service_email?: SortOrder
    emergency_email?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    subscription_plan_type?: SortOrder
    subscription_state?: SortOrder
    business_state?: SortOrder
    date_joined?: SortOrder
    last_login?: SortOrder
    last_updated?: SortOrder
    onboard_state?: SortOrder
  }

  export type ManagementMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    company_name?: SortOrder
    business_email?: SortOrder
    phone_number?: SortOrder
    customer_service_email?: SortOrder
    emergency_email?: SortOrder
    address?: SortOrder
    address2?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    subscription_plan_type?: SortOrder
    subscription_state?: SortOrder
    business_state?: SortOrder
    date_joined?: SortOrder
    last_login?: SortOrder
    last_updated?: SortOrder
    onboard_state?: SortOrder
  }

  export type ManagementSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumSubscription_PlanTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription_PlanType | EnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubscription_PlanTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subscription_PlanType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel>
  }

  export type EnumActive_StateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel> | null
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActive_StateNullableWithAggregatesFilter<$PrismaModel> | $Enums.Active_State | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActive_StateNullableFilter<$PrismaModel>
    _max?: NestedEnumActive_StateNullableFilter<$PrismaModel>
  }

  export type EnumOnboardingStateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingState | EnumOnboardingStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOnboardingStateNullableWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingState | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOnboardingStateNullableFilter<$PrismaModel>
    _max?: NestedEnumOnboardingStateNullableFilter<$PrismaModel>
  }

  export type ManagementRelationFilter = {
    is?: ManagementWhereInput
    isNot?: ManagementWhereInput
  }

  export type ManagementStaffCountOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    date_added?: SortOrder
    last_updated?: SortOrder
  }

  export type ManagementStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    date_added?: SortOrder
    last_updated?: SortOrder
  }

  export type ManagementStaffMinOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    date_added?: SortOrder
    last_updated?: SortOrder
  }

  export type EnumBuildingTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildingTypeNullableFilter<$PrismaModel> | $Enums.BuildingType | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumBuildingFacilityNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingFacility[] | ListEnumBuildingFacilityFieldRefInput<$PrismaModel> | null
    has?: $Enums.BuildingFacility | EnumBuildingFacilityFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.BuildingFacility[] | ListEnumBuildingFacilityFieldRefInput<$PrismaModel>
    hasSome?: $Enums.BuildingFacility[] | ListEnumBuildingFacilityFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ParkingSpotListRelationFilter = {
    every?: ParkingSpotWhereInput
    some?: ParkingSpotWhereInput
    none?: ParkingSpotWhereInput
  }

  export type ParkingSpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildingCountOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    building_name?: SortOrder
    building_type?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    no_of_units?: SortOrder
    no_of_parking_floors?: SortOrder
    no_of_parking_spots?: SortOrder
    no_of_developer_parking_spots?: SortOrder
    facilities?: SortOrder
  }

  export type BuildingAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    no_of_units?: SortOrder
    no_of_parking_floors?: SortOrder
    no_of_parking_spots?: SortOrder
    no_of_developer_parking_spots?: SortOrder
  }

  export type BuildingMaxOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    building_name?: SortOrder
    building_type?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    no_of_units?: SortOrder
    no_of_parking_floors?: SortOrder
    no_of_parking_spots?: SortOrder
    no_of_developer_parking_spots?: SortOrder
  }

  export type BuildingMinOrderByAggregateInput = {
    id?: SortOrder
    management_id?: SortOrder
    building_name?: SortOrder
    building_type?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    no_of_units?: SortOrder
    no_of_parking_floors?: SortOrder
    no_of_parking_spots?: SortOrder
    no_of_developer_parking_spots?: SortOrder
  }

  export type BuildingSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    no_of_units?: SortOrder
    no_of_parking_floors?: SortOrder
    no_of_parking_spots?: SortOrder
    no_of_developer_parking_spots?: SortOrder
  }

  export type EnumBuildingTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildingTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BuildingType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBuildingTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBuildingTypeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumUser_RoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUser_RoleNullableFilter<$PrismaModel> | $Enums.User_Role | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumActive_StateFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel>
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    not?: NestedEnumActive_StateFilter<$PrismaModel> | $Enums.Active_State
  }

  export type BuildingRelationFilter = {
    is?: BuildingWhereInput
    isNot?: BuildingWhereInput
  }

  export type QRCodeNullableRelationFilter = {
    is?: QRCodeWhereInput | null
    isNot?: QRCodeWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CommunityMembersBuilding_idPhoneEmailCompoundUniqueInput = {
    building_id: string
    phone: string
    email: string
  }

  export type CommunityMembersCountOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    user_id?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    unit_numbers?: SortOrder
    status?: SortOrder
    qr_code_id?: SortOrder
  }

  export type CommunityMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    user_id?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    qr_code_id?: SortOrder
  }

  export type CommunityMembersMinOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    user_id?: SortOrder
    user_role?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    qr_code_id?: SortOrder
  }

  export type EnumUser_RoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUser_RoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.User_Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUser_RoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUser_RoleNullableFilter<$PrismaModel>
  }

  export type EnumActive_StateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel>
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    not?: NestedEnumActive_StateWithAggregatesFilter<$PrismaModel> | $Enums.Active_State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActive_StateFilter<$PrismaModel>
    _max?: NestedEnumActive_StateFilter<$PrismaModel>
  }

  export type EnumParking_Spot_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Parking_Spot_Type | EnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParking_Spot_TypeFilter<$PrismaModel> | $Enums.Parking_Spot_Type
  }

  export type CommunityMembersNullableRelationFilter = {
    is?: CommunityMembersWhereInput | null
    isNot?: CommunityMembersWhereInput | null
  }

  export type VehicleNullableRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type ParkingSpotQr_code_idParking_levelParking_spot_numberCompoundUniqueInput = {
    qr_code_id: string
    parking_level: number
    parking_spot_number: string
  }

  export type ParkingSpotCountOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    owner_id?: SortOrder
    qr_code_id?: SortOrder
    vehicle_id?: SortOrder
    parking_level?: SortOrder
    parking_spot_number?: SortOrder
    parking_spot_type?: SortOrder
    parking_instructions?: SortOrder
  }

  export type ParkingSpotAvgOrderByAggregateInput = {
    parking_level?: SortOrder
  }

  export type ParkingSpotMaxOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    owner_id?: SortOrder
    qr_code_id?: SortOrder
    vehicle_id?: SortOrder
    parking_level?: SortOrder
    parking_spot_number?: SortOrder
    parking_spot_type?: SortOrder
    parking_instructions?: SortOrder
  }

  export type ParkingSpotMinOrderByAggregateInput = {
    id?: SortOrder
    building_id?: SortOrder
    owner_id?: SortOrder
    qr_code_id?: SortOrder
    vehicle_id?: SortOrder
    parking_level?: SortOrder
    parking_spot_number?: SortOrder
    parking_spot_type?: SortOrder
    parking_instructions?: SortOrder
  }

  export type ParkingSpotSumOrderByAggregateInput = {
    parking_level?: SortOrder
  }

  export type EnumParking_Spot_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Parking_Spot_Type | EnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParking_Spot_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Parking_Spot_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParking_Spot_TypeFilter<$PrismaModel>
    _max?: NestedEnumParking_Spot_TypeFilter<$PrismaModel>
  }

  export type EnumQRCode_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_Type | EnumQRCode_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_TypeFilter<$PrismaModel> | $Enums.QRCode_Type
  }

  export type EnumQRCode_ForFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_For | EnumQRCode_ForFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_ForFilter<$PrismaModel> | $Enums.QRCode_For
  }

  export type ParkingSpotNullableRelationFilter = {
    is?: ParkingSpotWhereInput | null
    isNot?: ParkingSpotWhereInput | null
  }

  export type QRCodeCountOrderByAggregateInput = {
    id?: SortOrder
    qr_type?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    qr_for?: SortOrder
  }

  export type QRCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    qr_type?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    qr_for?: SortOrder
  }

  export type QRCodeMinOrderByAggregateInput = {
    id?: SortOrder
    qr_type?: SortOrder
    url?: SortOrder
    image_url?: SortOrder
    qr_for?: SortOrder
  }

  export type EnumQRCode_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_Type | EnumQRCode_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_TypeWithAggregatesFilter<$PrismaModel> | $Enums.QRCode_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQRCode_TypeFilter<$PrismaModel>
    _max?: NestedEnumQRCode_TypeFilter<$PrismaModel>
  }

  export type EnumQRCode_ForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_For | EnumQRCode_ForFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_ForWithAggregatesFilter<$PrismaModel> | $Enums.QRCode_For
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQRCode_ForFilter<$PrismaModel>
    _max?: NestedEnumQRCode_ForFilter<$PrismaModel>
  }

  export type EnumVehicle_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Vehicle_Type | EnumVehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicle_TypeFilter<$PrismaModel> | $Enums.Vehicle_Type
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type EnumVehicle_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Vehicle_Type | EnumVehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicle_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Vehicle_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicle_TypeFilter<$PrismaModel>
    _max?: NestedEnumVehicle_TypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateuser_rolesInput = {
    set: $Enums.User_Role[]
  }

  export type ManagementCreateNestedOneWithoutUserInput = {
    create?: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutUserInput
    connect?: ManagementWhereUniqueInput
  }

  export type CommunityMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput> | CommunityMembersCreateWithoutUserInput[] | CommunityMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutUserInput | CommunityMembersCreateOrConnectWithoutUserInput[]
    createMany?: CommunityMembersCreateManyUserInputEnvelope
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
  }

  export type ManagementUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutUserInput
    connect?: ManagementWhereUniqueInput
  }

  export type CommunityMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput> | CommunityMembersCreateWithoutUserInput[] | CommunityMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutUserInput | CommunityMembersCreateOrConnectWithoutUserInput[]
    createMany?: CommunityMembersCreateManyUserInputEnvelope
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateuser_rolesInput = {
    set?: $Enums.User_Role[]
    push?: $Enums.User_Role | $Enums.User_Role[]
  }

  export type NullableEnumVerification_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Verification_Status | null
  }

  export type NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput = {
    set?: $Enums.Mobile_Onboard_Status | null
  }

  export type ManagementUpdateOneWithoutUserNestedInput = {
    create?: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutUserInput
    upsert?: ManagementUpsertWithoutUserInput
    disconnect?: ManagementWhereInput | boolean
    delete?: ManagementWhereInput | boolean
    connect?: ManagementWhereUniqueInput
    update?: XOR<XOR<ManagementUpdateToOneWithWhereWithoutUserInput, ManagementUpdateWithoutUserInput>, ManagementUncheckedUpdateWithoutUserInput>
  }

  export type CommunityMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput> | CommunityMembersCreateWithoutUserInput[] | CommunityMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutUserInput | CommunityMembersCreateOrConnectWithoutUserInput[]
    upsert?: CommunityMembersUpsertWithWhereUniqueWithoutUserInput | CommunityMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityMembersCreateManyUserInputEnvelope
    set?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    disconnect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    delete?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    update?: CommunityMembersUpdateWithWhereUniqueWithoutUserInput | CommunityMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityMembersUpdateManyWithWhereWithoutUserInput | CommunityMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
  }

  export type ManagementUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutUserInput
    upsert?: ManagementUpsertWithoutUserInput
    disconnect?: ManagementWhereInput | boolean
    delete?: ManagementWhereInput | boolean
    connect?: ManagementWhereUniqueInput
    update?: XOR<XOR<ManagementUpdateToOneWithWhereWithoutUserInput, ManagementUpdateWithoutUserInput>, ManagementUncheckedUpdateWithoutUserInput>
  }

  export type CommunityMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput> | CommunityMembersCreateWithoutUserInput[] | CommunityMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutUserInput | CommunityMembersCreateOrConnectWithoutUserInput[]
    upsert?: CommunityMembersUpsertWithWhereUniqueWithoutUserInput | CommunityMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityMembersCreateManyUserInputEnvelope
    set?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    disconnect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    delete?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    update?: CommunityMembersUpdateWithWhereUniqueWithoutUserInput | CommunityMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityMembersUpdateManyWithWhereWithoutUserInput | CommunityMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
  }

  export type ManagementStaffCreateNestedManyWithoutManagementInput = {
    create?: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput> | ManagementStaffCreateWithoutManagementInput[] | ManagementStaffUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: ManagementStaffCreateOrConnectWithoutManagementInput | ManagementStaffCreateOrConnectWithoutManagementInput[]
    createMany?: ManagementStaffCreateManyManagementInputEnvelope
    connect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
  }

  export type BuildingCreateNestedManyWithoutManagementInput = {
    create?: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput> | BuildingCreateWithoutManagementInput[] | BuildingUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutManagementInput | BuildingCreateOrConnectWithoutManagementInput[]
    createMany?: BuildingCreateManyManagementInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutManagementInput = {
    create?: XOR<UserCreateWithoutManagementInput, UserUncheckedCreateWithoutManagementInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagementInput
    connect?: UserWhereUniqueInput
  }

  export type ManagementStaffUncheckedCreateNestedManyWithoutManagementInput = {
    create?: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput> | ManagementStaffCreateWithoutManagementInput[] | ManagementStaffUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: ManagementStaffCreateOrConnectWithoutManagementInput | ManagementStaffCreateOrConnectWithoutManagementInput[]
    createMany?: ManagementStaffCreateManyManagementInputEnvelope
    connect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
  }

  export type BuildingUncheckedCreateNestedManyWithoutManagementInput = {
    create?: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput> | BuildingCreateWithoutManagementInput[] | BuildingUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutManagementInput | BuildingCreateOrConnectWithoutManagementInput[]
    createMany?: BuildingCreateManyManagementInputEnvelope
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput = {
    set?: $Enums.Subscription_PlanType | null
  }

  export type NullableEnumActive_StateFieldUpdateOperationsInput = {
    set?: $Enums.Active_State | null
  }

  export type NullableEnumOnboardingStateFieldUpdateOperationsInput = {
    set?: $Enums.OnboardingState | null
  }

  export type ManagementStaffUpdateManyWithoutManagementNestedInput = {
    create?: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput> | ManagementStaffCreateWithoutManagementInput[] | ManagementStaffUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: ManagementStaffCreateOrConnectWithoutManagementInput | ManagementStaffCreateOrConnectWithoutManagementInput[]
    upsert?: ManagementStaffUpsertWithWhereUniqueWithoutManagementInput | ManagementStaffUpsertWithWhereUniqueWithoutManagementInput[]
    createMany?: ManagementStaffCreateManyManagementInputEnvelope
    set?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    disconnect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    delete?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    connect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    update?: ManagementStaffUpdateWithWhereUniqueWithoutManagementInput | ManagementStaffUpdateWithWhereUniqueWithoutManagementInput[]
    updateMany?: ManagementStaffUpdateManyWithWhereWithoutManagementInput | ManagementStaffUpdateManyWithWhereWithoutManagementInput[]
    deleteMany?: ManagementStaffScalarWhereInput | ManagementStaffScalarWhereInput[]
  }

  export type BuildingUpdateManyWithoutManagementNestedInput = {
    create?: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput> | BuildingCreateWithoutManagementInput[] | BuildingUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutManagementInput | BuildingCreateOrConnectWithoutManagementInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutManagementInput | BuildingUpsertWithWhereUniqueWithoutManagementInput[]
    createMany?: BuildingCreateManyManagementInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutManagementInput | BuildingUpdateWithWhereUniqueWithoutManagementInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutManagementInput | BuildingUpdateManyWithWhereWithoutManagementInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutManagementNestedInput = {
    create?: XOR<UserCreateWithoutManagementInput, UserUncheckedCreateWithoutManagementInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagementInput
    upsert?: UserUpsertWithoutManagementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagementInput, UserUpdateWithoutManagementInput>, UserUncheckedUpdateWithoutManagementInput>
  }

  export type ManagementStaffUncheckedUpdateManyWithoutManagementNestedInput = {
    create?: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput> | ManagementStaffCreateWithoutManagementInput[] | ManagementStaffUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: ManagementStaffCreateOrConnectWithoutManagementInput | ManagementStaffCreateOrConnectWithoutManagementInput[]
    upsert?: ManagementStaffUpsertWithWhereUniqueWithoutManagementInput | ManagementStaffUpsertWithWhereUniqueWithoutManagementInput[]
    createMany?: ManagementStaffCreateManyManagementInputEnvelope
    set?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    disconnect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    delete?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    connect?: ManagementStaffWhereUniqueInput | ManagementStaffWhereUniqueInput[]
    update?: ManagementStaffUpdateWithWhereUniqueWithoutManagementInput | ManagementStaffUpdateWithWhereUniqueWithoutManagementInput[]
    updateMany?: ManagementStaffUpdateManyWithWhereWithoutManagementInput | ManagementStaffUpdateManyWithWhereWithoutManagementInput[]
    deleteMany?: ManagementStaffScalarWhereInput | ManagementStaffScalarWhereInput[]
  }

  export type BuildingUncheckedUpdateManyWithoutManagementNestedInput = {
    create?: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput> | BuildingCreateWithoutManagementInput[] | BuildingUncheckedCreateWithoutManagementInput[]
    connectOrCreate?: BuildingCreateOrConnectWithoutManagementInput | BuildingCreateOrConnectWithoutManagementInput[]
    upsert?: BuildingUpsertWithWhereUniqueWithoutManagementInput | BuildingUpsertWithWhereUniqueWithoutManagementInput[]
    createMany?: BuildingCreateManyManagementInputEnvelope
    set?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    disconnect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    delete?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    connect?: BuildingWhereUniqueInput | BuildingWhereUniqueInput[]
    update?: BuildingUpdateWithWhereUniqueWithoutManagementInput | BuildingUpdateWithWhereUniqueWithoutManagementInput[]
    updateMany?: BuildingUpdateManyWithWhereWithoutManagementInput | BuildingUpdateManyWithWhereWithoutManagementInput[]
    deleteMany?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
  }

  export type ManagementCreateNestedOneWithoutStaffsInput = {
    create?: XOR<ManagementCreateWithoutStaffsInput, ManagementUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutStaffsInput
    connect?: ManagementWhereUniqueInput
  }

  export type ManagementUpdateOneRequiredWithoutStaffsNestedInput = {
    create?: XOR<ManagementCreateWithoutStaffsInput, ManagementUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutStaffsInput
    upsert?: ManagementUpsertWithoutStaffsInput
    connect?: ManagementWhereUniqueInput
    update?: XOR<XOR<ManagementUpdateToOneWithWhereWithoutStaffsInput, ManagementUpdateWithoutStaffsInput>, ManagementUncheckedUpdateWithoutStaffsInput>
  }

  export type BuildingCreatefacilitiesInput = {
    set: $Enums.BuildingFacility[]
  }

  export type ManagementCreateNestedOneWithoutBuildingsInput = {
    create?: XOR<ManagementCreateWithoutBuildingsInput, ManagementUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutBuildingsInput
    connect?: ManagementWhereUniqueInput
  }

  export type CommunityMembersCreateNestedManyWithoutBuildingInput = {
    create?: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput> | CommunityMembersCreateWithoutBuildingInput[] | CommunityMembersUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutBuildingInput | CommunityMembersCreateOrConnectWithoutBuildingInput[]
    createMany?: CommunityMembersCreateManyBuildingInputEnvelope
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
  }

  export type ParkingSpotCreateNestedManyWithoutBuildingInput = {
    create?: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput> | ParkingSpotCreateWithoutBuildingInput[] | ParkingSpotUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBuildingInput | ParkingSpotCreateOrConnectWithoutBuildingInput[]
    createMany?: ParkingSpotCreateManyBuildingInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type CommunityMembersUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput> | CommunityMembersCreateWithoutBuildingInput[] | CommunityMembersUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutBuildingInput | CommunityMembersCreateOrConnectWithoutBuildingInput[]
    createMany?: CommunityMembersCreateManyBuildingInputEnvelope
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
  }

  export type ParkingSpotUncheckedCreateNestedManyWithoutBuildingInput = {
    create?: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput> | ParkingSpotCreateWithoutBuildingInput[] | ParkingSpotUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBuildingInput | ParkingSpotCreateOrConnectWithoutBuildingInput[]
    createMany?: ParkingSpotCreateManyBuildingInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type NullableEnumBuildingTypeFieldUpdateOperationsInput = {
    set?: $Enums.BuildingType | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BuildingUpdatefacilitiesInput = {
    set?: $Enums.BuildingFacility[]
    push?: $Enums.BuildingFacility | $Enums.BuildingFacility[]
  }

  export type ManagementUpdateOneRequiredWithoutBuildingsNestedInput = {
    create?: XOR<ManagementCreateWithoutBuildingsInput, ManagementUncheckedCreateWithoutBuildingsInput>
    connectOrCreate?: ManagementCreateOrConnectWithoutBuildingsInput
    upsert?: ManagementUpsertWithoutBuildingsInput
    connect?: ManagementWhereUniqueInput
    update?: XOR<XOR<ManagementUpdateToOneWithWhereWithoutBuildingsInput, ManagementUpdateWithoutBuildingsInput>, ManagementUncheckedUpdateWithoutBuildingsInput>
  }

  export type CommunityMembersUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput> | CommunityMembersCreateWithoutBuildingInput[] | CommunityMembersUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutBuildingInput | CommunityMembersCreateOrConnectWithoutBuildingInput[]
    upsert?: CommunityMembersUpsertWithWhereUniqueWithoutBuildingInput | CommunityMembersUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: CommunityMembersCreateManyBuildingInputEnvelope
    set?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    disconnect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    delete?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    update?: CommunityMembersUpdateWithWhereUniqueWithoutBuildingInput | CommunityMembersUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: CommunityMembersUpdateManyWithWhereWithoutBuildingInput | CommunityMembersUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
  }

  export type ParkingSpotUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput> | ParkingSpotCreateWithoutBuildingInput[] | ParkingSpotUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBuildingInput | ParkingSpotCreateOrConnectWithoutBuildingInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutBuildingInput | ParkingSpotUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: ParkingSpotCreateManyBuildingInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutBuildingInput | ParkingSpotUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutBuildingInput | ParkingSpotUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type CommunityMembersUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput> | CommunityMembersCreateWithoutBuildingInput[] | CommunityMembersUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutBuildingInput | CommunityMembersCreateOrConnectWithoutBuildingInput[]
    upsert?: CommunityMembersUpsertWithWhereUniqueWithoutBuildingInput | CommunityMembersUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: CommunityMembersCreateManyBuildingInputEnvelope
    set?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    disconnect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    delete?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    connect?: CommunityMembersWhereUniqueInput | CommunityMembersWhereUniqueInput[]
    update?: CommunityMembersUpdateWithWhereUniqueWithoutBuildingInput | CommunityMembersUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: CommunityMembersUpdateManyWithWhereWithoutBuildingInput | CommunityMembersUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
  }

  export type ParkingSpotUncheckedUpdateManyWithoutBuildingNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput> | ParkingSpotCreateWithoutBuildingInput[] | ParkingSpotUncheckedCreateWithoutBuildingInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBuildingInput | ParkingSpotCreateOrConnectWithoutBuildingInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutBuildingInput | ParkingSpotUpsertWithWhereUniqueWithoutBuildingInput[]
    createMany?: ParkingSpotCreateManyBuildingInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutBuildingInput | ParkingSpotUpdateWithWhereUniqueWithoutBuildingInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutBuildingInput | ParkingSpotUpdateManyWithWhereWithoutBuildingInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type CommunityMembersCreateunit_numbersInput = {
    set: string[]
  }

  export type BuildingCreateNestedOneWithoutCommunity_membersInput = {
    create?: XOR<BuildingCreateWithoutCommunity_membersInput, BuildingUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutCommunity_membersInput
    connect?: BuildingWhereUniqueInput
  }

  export type QRCodeCreateNestedOneWithoutOwnerInput = {
    create?: XOR<QRCodeCreateWithoutOwnerInput, QRCodeUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutOwnerInput
    connect?: QRCodeWhereUniqueInput
  }

  export type ParkingSpotCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCommunity_membersInput = {
    create?: XOR<UserCreateWithoutCommunity_membersInput, UserUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunity_membersInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type NullableEnumUser_RoleFieldUpdateOperationsInput = {
    set?: $Enums.User_Role | null
  }

  export type CommunityMembersUpdateunit_numbersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumActive_StateFieldUpdateOperationsInput = {
    set?: $Enums.Active_State
  }

  export type BuildingUpdateOneRequiredWithoutCommunity_membersNestedInput = {
    create?: XOR<BuildingCreateWithoutCommunity_membersInput, BuildingUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutCommunity_membersInput
    upsert?: BuildingUpsertWithoutCommunity_membersInput
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutCommunity_membersInput, BuildingUpdateWithoutCommunity_membersInput>, BuildingUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type QRCodeUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<QRCodeCreateWithoutOwnerInput, QRCodeUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutOwnerInput
    upsert?: QRCodeUpsertWithoutOwnerInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutOwnerInput, QRCodeUpdateWithoutOwnerInput>, QRCodeUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingSpotUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutOwnerInput | ParkingSpotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCommunity_membersNestedInput = {
    create?: XOR<UserCreateWithoutCommunity_membersInput, UserUncheckedCreateWithoutCommunity_membersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunity_membersInput
    upsert?: UserUpsertWithoutCommunity_membersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunity_membersInput, UserUpdateWithoutCommunity_membersInput>, UserUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutOwnerInput | ParkingSpotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type BuildingCreateNestedOneWithoutParking_spotsInput = {
    create?: XOR<BuildingCreateWithoutParking_spotsInput, BuildingUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutParking_spotsInput
    connect?: BuildingWhereUniqueInput
  }

  export type CommunityMembersCreateNestedOneWithoutParking_spotsInput = {
    create?: XOR<CommunityMembersCreateWithoutParking_spotsInput, CommunityMembersUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutParking_spotsInput
    connect?: CommunityMembersWhereUniqueInput
  }

  export type QRCodeCreateNestedOneWithoutParking_spotInput = {
    create?: XOR<QRCodeCreateWithoutParking_spotInput, QRCodeUncheckedCreateWithoutParking_spotInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutParking_spotInput
    connect?: QRCodeWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutParking_spotsInput = {
    create?: XOR<VehicleCreateWithoutParking_spotsInput, VehicleUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParking_spotsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumParking_Spot_TypeFieldUpdateOperationsInput = {
    set?: $Enums.Parking_Spot_Type
  }

  export type BuildingUpdateOneRequiredWithoutParking_spotsNestedInput = {
    create?: XOR<BuildingCreateWithoutParking_spotsInput, BuildingUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: BuildingCreateOrConnectWithoutParking_spotsInput
    upsert?: BuildingUpsertWithoutParking_spotsInput
    connect?: BuildingWhereUniqueInput
    update?: XOR<XOR<BuildingUpdateToOneWithWhereWithoutParking_spotsInput, BuildingUpdateWithoutParking_spotsInput>, BuildingUncheckedUpdateWithoutParking_spotsInput>
  }

  export type CommunityMembersUpdateOneWithoutParking_spotsNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutParking_spotsInput, CommunityMembersUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutParking_spotsInput
    upsert?: CommunityMembersUpsertWithoutParking_spotsInput
    disconnect?: CommunityMembersWhereInput | boolean
    delete?: CommunityMembersWhereInput | boolean
    connect?: CommunityMembersWhereUniqueInput
    update?: XOR<XOR<CommunityMembersUpdateToOneWithWhereWithoutParking_spotsInput, CommunityMembersUpdateWithoutParking_spotsInput>, CommunityMembersUncheckedUpdateWithoutParking_spotsInput>
  }

  export type QRCodeUpdateOneWithoutParking_spotNestedInput = {
    create?: XOR<QRCodeCreateWithoutParking_spotInput, QRCodeUncheckedCreateWithoutParking_spotInput>
    connectOrCreate?: QRCodeCreateOrConnectWithoutParking_spotInput
    upsert?: QRCodeUpsertWithoutParking_spotInput
    disconnect?: QRCodeWhereInput | boolean
    delete?: QRCodeWhereInput | boolean
    connect?: QRCodeWhereUniqueInput
    update?: XOR<XOR<QRCodeUpdateToOneWithWhereWithoutParking_spotInput, QRCodeUpdateWithoutParking_spotInput>, QRCodeUncheckedUpdateWithoutParking_spotInput>
  }

  export type VehicleUpdateOneWithoutParking_spotsNestedInput = {
    create?: XOR<VehicleCreateWithoutParking_spotsInput, VehicleUncheckedCreateWithoutParking_spotsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutParking_spotsInput
    upsert?: VehicleUpsertWithoutParking_spotsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutParking_spotsInput, VehicleUpdateWithoutParking_spotsInput>, VehicleUncheckedUpdateWithoutParking_spotsInput>
  }

  export type CommunityMembersCreateNestedOneWithoutQr_codeInput = {
    create?: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutQr_codeInput
    connect?: CommunityMembersWhereUniqueInput
  }

  export type ParkingSpotCreateNestedOneWithoutQr_codeInput = {
    create?: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutQr_codeInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type CommunityMembersUncheckedCreateNestedOneWithoutQr_codeInput = {
    create?: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutQr_codeInput
    connect?: CommunityMembersWhereUniqueInput
  }

  export type ParkingSpotUncheckedCreateNestedOneWithoutQr_codeInput = {
    create?: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutQr_codeInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type EnumQRCode_TypeFieldUpdateOperationsInput = {
    set?: $Enums.QRCode_Type
  }

  export type EnumQRCode_ForFieldUpdateOperationsInput = {
    set?: $Enums.QRCode_For
  }

  export type CommunityMembersUpdateOneWithoutQr_codeNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutQr_codeInput
    upsert?: CommunityMembersUpsertWithoutQr_codeInput
    disconnect?: CommunityMembersWhereInput | boolean
    delete?: CommunityMembersWhereInput | boolean
    connect?: CommunityMembersWhereUniqueInput
    update?: XOR<XOR<CommunityMembersUpdateToOneWithWhereWithoutQr_codeInput, CommunityMembersUpdateWithoutQr_codeInput>, CommunityMembersUncheckedUpdateWithoutQr_codeInput>
  }

  export type ParkingSpotUpdateOneWithoutQr_codeNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutQr_codeInput
    upsert?: ParkingSpotUpsertWithoutQr_codeInput
    disconnect?: ParkingSpotWhereInput | boolean
    delete?: ParkingSpotWhereInput | boolean
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutQr_codeInput, ParkingSpotUpdateWithoutQr_codeInput>, ParkingSpotUncheckedUpdateWithoutQr_codeInput>
  }

  export type CommunityMembersUncheckedUpdateOneWithoutQr_codeNestedInput = {
    create?: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: CommunityMembersCreateOrConnectWithoutQr_codeInput
    upsert?: CommunityMembersUpsertWithoutQr_codeInput
    disconnect?: CommunityMembersWhereInput | boolean
    delete?: CommunityMembersWhereInput | boolean
    connect?: CommunityMembersWhereUniqueInput
    update?: XOR<XOR<CommunityMembersUpdateToOneWithWhereWithoutQr_codeInput, CommunityMembersUpdateWithoutQr_codeInput>, CommunityMembersUncheckedUpdateWithoutQr_codeInput>
  }

  export type ParkingSpotUncheckedUpdateOneWithoutQr_codeNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutQr_codeInput
    upsert?: ParkingSpotUpsertWithoutQr_codeInput
    disconnect?: ParkingSpotWhereInput | boolean
    delete?: ParkingSpotWhereInput | boolean
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutQr_codeInput, ParkingSpotUpdateWithoutQr_codeInput>, ParkingSpotUncheckedUpdateWithoutQr_codeInput>
  }

  export type ParkingSpotCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput> | ParkingSpotCreateWithoutVehicleInput[] | ParkingSpotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutVehicleInput | ParkingSpotCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingSpotCreateManyVehicleInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type ParkingSpotUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput> | ParkingSpotCreateWithoutVehicleInput[] | ParkingSpotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutVehicleInput | ParkingSpotCreateOrConnectWithoutVehicleInput[]
    createMany?: ParkingSpotCreateManyVehicleInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type EnumVehicle_TypeFieldUpdateOperationsInput = {
    set?: $Enums.Vehicle_Type
  }

  export type ParkingSpotUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput> | ParkingSpotCreateWithoutVehicleInput[] | ParkingSpotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutVehicleInput | ParkingSpotCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutVehicleInput | ParkingSpotUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingSpotCreateManyVehicleInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutVehicleInput | ParkingSpotUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutVehicleInput | ParkingSpotUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type ParkingSpotUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput> | ParkingSpotCreateWithoutVehicleInput[] | ParkingSpotUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutVehicleInput | ParkingSpotCreateOrConnectWithoutVehicleInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutVehicleInput | ParkingSpotUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ParkingSpotCreateManyVehicleInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutVehicleInput | ParkingSpotUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutVehicleInput | ParkingSpotUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumVerification_StatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Verification_Status | EnumVerification_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerification_StatusNullableFilter<$PrismaModel> | $Enums.Verification_Status | null
  }

  export type NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Mobile_Onboard_Status | EnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel> | $Enums.Mobile_Onboard_Status | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVerification_StatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Verification_Status | EnumVerification_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Verification_Status[] | ListEnumVerification_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumVerification_StatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Verification_Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumVerification_StatusNullableFilter<$PrismaModel>
    _max?: NestedEnumVerification_StatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumMobile_Onboard_StatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mobile_Onboard_Status | EnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Mobile_Onboard_Status[] | ListEnumMobile_Onboard_StatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMobile_Onboard_StatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Mobile_Onboard_Status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMobile_Onboard_StatusNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription_PlanType | EnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel> | $Enums.Subscription_PlanType | null
  }

  export type NestedEnumActive_StateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel> | null
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActive_StateNullableFilter<$PrismaModel> | $Enums.Active_State | null
  }

  export type NestedEnumOnboardingStateNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingState | EnumOnboardingStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOnboardingStateNullableFilter<$PrismaModel> | $Enums.OnboardingState | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscription_PlanTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subscription_PlanType | EnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Subscription_PlanType[] | ListEnumSubscription_PlanTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSubscription_PlanTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Subscription_PlanType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumSubscription_PlanTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActive_StateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel> | null
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActive_StateNullableWithAggregatesFilter<$PrismaModel> | $Enums.Active_State | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActive_StateNullableFilter<$PrismaModel>
    _max?: NestedEnumActive_StateNullableFilter<$PrismaModel>
  }

  export type NestedEnumOnboardingStateNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OnboardingState | EnumOnboardingStateFieldRefInput<$PrismaModel> | null
    in?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OnboardingState[] | ListEnumOnboardingStateFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOnboardingStateNullableWithAggregatesFilter<$PrismaModel> | $Enums.OnboardingState | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOnboardingStateNullableFilter<$PrismaModel>
    _max?: NestedEnumOnboardingStateNullableFilter<$PrismaModel>
  }

  export type NestedEnumBuildingTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildingTypeNullableFilter<$PrismaModel> | $Enums.BuildingType | null
  }

  export type NestedEnumBuildingTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildingType | EnumBuildingTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BuildingType[] | ListEnumBuildingTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBuildingTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BuildingType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBuildingTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBuildingTypeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumUser_RoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUser_RoleNullableFilter<$PrismaModel> | $Enums.User_Role | null
  }

  export type NestedEnumActive_StateFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel>
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    not?: NestedEnumActive_StateFilter<$PrismaModel> | $Enums.Active_State
  }

  export type NestedEnumUser_RoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.User_Role | EnumUser_RoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.User_Role[] | ListEnumUser_RoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUser_RoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.User_Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUser_RoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUser_RoleNullableFilter<$PrismaModel>
  }

  export type NestedEnumActive_StateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Active_State | EnumActive_StateFieldRefInput<$PrismaModel>
    in?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Active_State[] | ListEnumActive_StateFieldRefInput<$PrismaModel>
    not?: NestedEnumActive_StateWithAggregatesFilter<$PrismaModel> | $Enums.Active_State
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActive_StateFilter<$PrismaModel>
    _max?: NestedEnumActive_StateFilter<$PrismaModel>
  }

  export type NestedEnumParking_Spot_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Parking_Spot_Type | EnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParking_Spot_TypeFilter<$PrismaModel> | $Enums.Parking_Spot_Type
  }

  export type NestedEnumParking_Spot_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Parking_Spot_Type | EnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Parking_Spot_Type[] | ListEnumParking_Spot_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumParking_Spot_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Parking_Spot_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParking_Spot_TypeFilter<$PrismaModel>
    _max?: NestedEnumParking_Spot_TypeFilter<$PrismaModel>
  }

  export type NestedEnumQRCode_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_Type | EnumQRCode_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_TypeFilter<$PrismaModel> | $Enums.QRCode_Type
  }

  export type NestedEnumQRCode_ForFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_For | EnumQRCode_ForFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_ForFilter<$PrismaModel> | $Enums.QRCode_For
  }

  export type NestedEnumQRCode_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_Type | EnumQRCode_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_Type[] | ListEnumQRCode_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_TypeWithAggregatesFilter<$PrismaModel> | $Enums.QRCode_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQRCode_TypeFilter<$PrismaModel>
    _max?: NestedEnumQRCode_TypeFilter<$PrismaModel>
  }

  export type NestedEnumQRCode_ForWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QRCode_For | EnumQRCode_ForFieldRefInput<$PrismaModel>
    in?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    notIn?: $Enums.QRCode_For[] | ListEnumQRCode_ForFieldRefInput<$PrismaModel>
    not?: NestedEnumQRCode_ForWithAggregatesFilter<$PrismaModel> | $Enums.QRCode_For
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQRCode_ForFilter<$PrismaModel>
    _max?: NestedEnumQRCode_ForFilter<$PrismaModel>
  }

  export type NestedEnumVehicle_TypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Vehicle_Type | EnumVehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicle_TypeFilter<$PrismaModel> | $Enums.Vehicle_Type
  }

  export type NestedEnumVehicle_TypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Vehicle_Type | EnumVehicle_TypeFieldRefInput<$PrismaModel>
    in?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Vehicle_Type[] | ListEnumVehicle_TypeFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicle_TypeWithAggregatesFilter<$PrismaModel> | $Enums.Vehicle_Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicle_TypeFilter<$PrismaModel>
    _max?: NestedEnumVehicle_TypeFilter<$PrismaModel>
  }

  export type ManagementCreateWithoutUserInput = {
    id?: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffCreateNestedManyWithoutManagementInput
    buildings?: BuildingCreateNestedManyWithoutManagementInput
  }

  export type ManagementUncheckedCreateWithoutUserInput = {
    id?: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedCreateNestedManyWithoutManagementInput
    buildings?: BuildingUncheckedCreateNestedManyWithoutManagementInput
  }

  export type ManagementCreateOrConnectWithoutUserInput = {
    where: ManagementWhereUniqueInput
    create: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
  }

  export type CommunityMembersCreateWithoutUserInput = {
    id?: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    building: BuildingCreateNestedOneWithoutCommunity_membersInput
    qr_code?: QRCodeCreateNestedOneWithoutOwnerInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
  }

  export type CommunityMembersUncheckedCreateWithoutUserInput = {
    id?: string
    building_id: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type CommunityMembersCreateOrConnectWithoutUserInput = {
    where: CommunityMembersWhereUniqueInput
    create: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput>
  }

  export type CommunityMembersCreateManyUserInputEnvelope = {
    data: CommunityMembersCreateManyUserInput | CommunityMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ManagementUpsertWithoutUserInput = {
    update: XOR<ManagementUpdateWithoutUserInput, ManagementUncheckedUpdateWithoutUserInput>
    create: XOR<ManagementCreateWithoutUserInput, ManagementUncheckedCreateWithoutUserInput>
    where?: ManagementWhereInput
  }

  export type ManagementUpdateToOneWithWhereWithoutUserInput = {
    where?: ManagementWhereInput
    data: XOR<ManagementUpdateWithoutUserInput, ManagementUncheckedUpdateWithoutUserInput>
  }

  export type ManagementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUpdateManyWithoutManagementNestedInput
    buildings?: BuildingUpdateManyWithoutManagementNestedInput
  }

  export type ManagementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedUpdateManyWithoutManagementNestedInput
    buildings?: BuildingUncheckedUpdateManyWithoutManagementNestedInput
  }

  export type CommunityMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityMembersWhereUniqueInput
    update: XOR<CommunityMembersUpdateWithoutUserInput, CommunityMembersUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityMembersCreateWithoutUserInput, CommunityMembersUncheckedCreateWithoutUserInput>
  }

  export type CommunityMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityMembersWhereUniqueInput
    data: XOR<CommunityMembersUpdateWithoutUserInput, CommunityMembersUncheckedUpdateWithoutUserInput>
  }

  export type CommunityMembersUpdateManyWithWhereWithoutUserInput = {
    where: CommunityMembersScalarWhereInput
    data: XOR<CommunityMembersUpdateManyMutationInput, CommunityMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityMembersScalarWhereInput = {
    AND?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
    OR?: CommunityMembersScalarWhereInput[]
    NOT?: CommunityMembersScalarWhereInput | CommunityMembersScalarWhereInput[]
    id?: StringFilter<"CommunityMembers"> | string
    building_id?: StringFilter<"CommunityMembers"> | string
    user_id?: StringNullableFilter<"CommunityMembers"> | string | null
    user_role?: EnumUser_RoleNullableFilter<"CommunityMembers"> | $Enums.User_Role | null
    email?: StringNullableFilter<"CommunityMembers"> | string | null
    name?: StringNullableFilter<"CommunityMembers"> | string | null
    phone?: StringNullableFilter<"CommunityMembers"> | string | null
    unit_numbers?: StringNullableListFilter<"CommunityMembers">
    status?: EnumActive_StateFilter<"CommunityMembers"> | $Enums.Active_State
    qr_code_id?: StringNullableFilter<"CommunityMembers"> | string | null
  }

  export type ManagementStaffCreateWithoutManagementInput = {
    id?: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
  }

  export type ManagementStaffUncheckedCreateWithoutManagementInput = {
    id?: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
  }

  export type ManagementStaffCreateOrConnectWithoutManagementInput = {
    where: ManagementStaffWhereUniqueInput
    create: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput>
  }

  export type ManagementStaffCreateManyManagementInputEnvelope = {
    data: ManagementStaffCreateManyManagementInput | ManagementStaffCreateManyManagementInput[]
    skipDuplicates?: boolean
  }

  export type BuildingCreateWithoutManagementInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersCreateNestedManyWithoutBuildingInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutManagementInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedCreateNestedManyWithoutBuildingInput
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutManagementInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput>
  }

  export type BuildingCreateManyManagementInputEnvelope = {
    data: BuildingCreateManyManagementInput | BuildingCreateManyManagementInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutManagementInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    community_members?: CommunityMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagementInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    community_members?: CommunityMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagementInput, UserUncheckedCreateWithoutManagementInput>
  }

  export type ManagementStaffUpsertWithWhereUniqueWithoutManagementInput = {
    where: ManagementStaffWhereUniqueInput
    update: XOR<ManagementStaffUpdateWithoutManagementInput, ManagementStaffUncheckedUpdateWithoutManagementInput>
    create: XOR<ManagementStaffCreateWithoutManagementInput, ManagementStaffUncheckedCreateWithoutManagementInput>
  }

  export type ManagementStaffUpdateWithWhereUniqueWithoutManagementInput = {
    where: ManagementStaffWhereUniqueInput
    data: XOR<ManagementStaffUpdateWithoutManagementInput, ManagementStaffUncheckedUpdateWithoutManagementInput>
  }

  export type ManagementStaffUpdateManyWithWhereWithoutManagementInput = {
    where: ManagementStaffScalarWhereInput
    data: XOR<ManagementStaffUpdateManyMutationInput, ManagementStaffUncheckedUpdateManyWithoutManagementInput>
  }

  export type ManagementStaffScalarWhereInput = {
    AND?: ManagementStaffScalarWhereInput | ManagementStaffScalarWhereInput[]
    OR?: ManagementStaffScalarWhereInput[]
    NOT?: ManagementStaffScalarWhereInput | ManagementStaffScalarWhereInput[]
    id?: StringFilter<"ManagementStaff"> | string
    management_id?: StringFilter<"ManagementStaff"> | string
    name?: StringNullableFilter<"ManagementStaff"> | string | null
    email?: StringNullableFilter<"ManagementStaff"> | string | null
    date_added?: DateTimeFilter<"ManagementStaff"> | Date | string
    last_updated?: DateTimeFilter<"ManagementStaff"> | Date | string
  }

  export type BuildingUpsertWithWhereUniqueWithoutManagementInput = {
    where: BuildingWhereUniqueInput
    update: XOR<BuildingUpdateWithoutManagementInput, BuildingUncheckedUpdateWithoutManagementInput>
    create: XOR<BuildingCreateWithoutManagementInput, BuildingUncheckedCreateWithoutManagementInput>
  }

  export type BuildingUpdateWithWhereUniqueWithoutManagementInput = {
    where: BuildingWhereUniqueInput
    data: XOR<BuildingUpdateWithoutManagementInput, BuildingUncheckedUpdateWithoutManagementInput>
  }

  export type BuildingUpdateManyWithWhereWithoutManagementInput = {
    where: BuildingScalarWhereInput
    data: XOR<BuildingUpdateManyMutationInput, BuildingUncheckedUpdateManyWithoutManagementInput>
  }

  export type BuildingScalarWhereInput = {
    AND?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    OR?: BuildingScalarWhereInput[]
    NOT?: BuildingScalarWhereInput | BuildingScalarWhereInput[]
    id?: StringFilter<"Building"> | string
    management_id?: StringFilter<"Building"> | string
    building_name?: StringNullableFilter<"Building"> | string | null
    building_type?: EnumBuildingTypeNullableFilter<"Building"> | $Enums.BuildingType | null
    address?: StringNullableFilter<"Building"> | string | null
    city?: StringNullableFilter<"Building"> | string | null
    state?: StringNullableFilter<"Building"> | string | null
    country?: StringNullableFilter<"Building"> | string | null
    lat?: FloatNullableFilter<"Building"> | number | null
    lng?: FloatNullableFilter<"Building"> | number | null
    no_of_units?: IntNullableFilter<"Building"> | number | null
    no_of_parking_floors?: IntNullableFilter<"Building"> | number | null
    no_of_parking_spots?: IntNullableFilter<"Building"> | number | null
    no_of_developer_parking_spots?: IntNullableFilter<"Building"> | number | null
    facilities?: EnumBuildingFacilityNullableListFilter<"Building">
  }

  export type UserUpsertWithoutManagementInput = {
    update: XOR<UserUpdateWithoutManagementInput, UserUncheckedUpdateWithoutManagementInput>
    create: XOR<UserCreateWithoutManagementInput, UserUncheckedCreateWithoutManagementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagementInput, UserUncheckedUpdateWithoutManagementInput>
  }

  export type UserUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: CommunityMembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    community_members?: CommunityMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ManagementCreateWithoutStaffsInput = {
    id?: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    buildings?: BuildingCreateNestedManyWithoutManagementInput
    user: UserCreateNestedOneWithoutManagementInput
  }

  export type ManagementUncheckedCreateWithoutStaffsInput = {
    id?: string
    user_id: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    buildings?: BuildingUncheckedCreateNestedManyWithoutManagementInput
  }

  export type ManagementCreateOrConnectWithoutStaffsInput = {
    where: ManagementWhereUniqueInput
    create: XOR<ManagementCreateWithoutStaffsInput, ManagementUncheckedCreateWithoutStaffsInput>
  }

  export type ManagementUpsertWithoutStaffsInput = {
    update: XOR<ManagementUpdateWithoutStaffsInput, ManagementUncheckedUpdateWithoutStaffsInput>
    create: XOR<ManagementCreateWithoutStaffsInput, ManagementUncheckedCreateWithoutStaffsInput>
    where?: ManagementWhereInput
  }

  export type ManagementUpdateToOneWithWhereWithoutStaffsInput = {
    where?: ManagementWhereInput
    data: XOR<ManagementUpdateWithoutStaffsInput, ManagementUncheckedUpdateWithoutStaffsInput>
  }

  export type ManagementUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    buildings?: BuildingUpdateManyWithoutManagementNestedInput
    user?: UserUpdateOneRequiredWithoutManagementNestedInput
  }

  export type ManagementUncheckedUpdateWithoutStaffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    buildings?: BuildingUncheckedUpdateManyWithoutManagementNestedInput
  }

  export type ManagementCreateWithoutBuildingsInput = {
    id?: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffCreateNestedManyWithoutManagementInput
    user: UserCreateNestedOneWithoutManagementInput
  }

  export type ManagementUncheckedCreateWithoutBuildingsInput = {
    id?: string
    user_id: string
    company_name?: string | null
    business_email?: string | null
    phone_number?: string | null
    customer_service_email?: string | null
    emergency_email?: string | null
    address?: string | null
    address2?: string | null
    lat?: number | null
    lng?: number | null
    subscription_plan_type?: $Enums.Subscription_PlanType | null
    subscription_state?: $Enums.Active_State | null
    business_state?: $Enums.Active_State | null
    date_joined?: Date | string
    last_login?: Date | string
    last_updated?: Date | string
    onboard_state?: $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedCreateNestedManyWithoutManagementInput
  }

  export type ManagementCreateOrConnectWithoutBuildingsInput = {
    where: ManagementWhereUniqueInput
    create: XOR<ManagementCreateWithoutBuildingsInput, ManagementUncheckedCreateWithoutBuildingsInput>
  }

  export type CommunityMembersCreateWithoutBuildingInput = {
    id?: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code?: QRCodeCreateNestedOneWithoutOwnerInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
    user?: UserCreateNestedOneWithoutCommunity_membersInput
  }

  export type CommunityMembersUncheckedCreateWithoutBuildingInput = {
    id?: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type CommunityMembersCreateOrConnectWithoutBuildingInput = {
    where: CommunityMembersWhereUniqueInput
    create: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput>
  }

  export type CommunityMembersCreateManyBuildingInputEnvelope = {
    data: CommunityMembersCreateManyBuildingInput | CommunityMembersCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSpotCreateWithoutBuildingInput = {
    id?: string
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
    owner?: CommunityMembersCreateNestedOneWithoutParking_spotsInput
    qr_code?: QRCodeCreateNestedOneWithoutParking_spotInput
    vehicle?: VehicleCreateNestedOneWithoutParking_spotsInput
  }

  export type ParkingSpotUncheckedCreateWithoutBuildingInput = {
    id?: string
    owner_id?: string | null
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotCreateOrConnectWithoutBuildingInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput>
  }

  export type ParkingSpotCreateManyBuildingInputEnvelope = {
    data: ParkingSpotCreateManyBuildingInput | ParkingSpotCreateManyBuildingInput[]
    skipDuplicates?: boolean
  }

  export type ManagementUpsertWithoutBuildingsInput = {
    update: XOR<ManagementUpdateWithoutBuildingsInput, ManagementUncheckedUpdateWithoutBuildingsInput>
    create: XOR<ManagementCreateWithoutBuildingsInput, ManagementUncheckedCreateWithoutBuildingsInput>
    where?: ManagementWhereInput
  }

  export type ManagementUpdateToOneWithWhereWithoutBuildingsInput = {
    where?: ManagementWhereInput
    data: XOR<ManagementUpdateWithoutBuildingsInput, ManagementUncheckedUpdateWithoutBuildingsInput>
  }

  export type ManagementUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUpdateManyWithoutManagementNestedInput
    user?: UserUpdateOneRequiredWithoutManagementNestedInput
  }

  export type ManagementUncheckedUpdateWithoutBuildingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    business_email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_service_email?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    subscription_plan_type?: NullableEnumSubscription_PlanTypeFieldUpdateOperationsInput | $Enums.Subscription_PlanType | null
    subscription_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    business_state?: NullableEnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    onboard_state?: NullableEnumOnboardingStateFieldUpdateOperationsInput | $Enums.OnboardingState | null
    staffs?: ManagementStaffUncheckedUpdateManyWithoutManagementNestedInput
  }

  export type CommunityMembersUpsertWithWhereUniqueWithoutBuildingInput = {
    where: CommunityMembersWhereUniqueInput
    update: XOR<CommunityMembersUpdateWithoutBuildingInput, CommunityMembersUncheckedUpdateWithoutBuildingInput>
    create: XOR<CommunityMembersCreateWithoutBuildingInput, CommunityMembersUncheckedCreateWithoutBuildingInput>
  }

  export type CommunityMembersUpdateWithWhereUniqueWithoutBuildingInput = {
    where: CommunityMembersWhereUniqueInput
    data: XOR<CommunityMembersUpdateWithoutBuildingInput, CommunityMembersUncheckedUpdateWithoutBuildingInput>
  }

  export type CommunityMembersUpdateManyWithWhereWithoutBuildingInput = {
    where: CommunityMembersScalarWhereInput
    data: XOR<CommunityMembersUpdateManyMutationInput, CommunityMembersUncheckedUpdateManyWithoutBuildingInput>
  }

  export type ParkingSpotUpsertWithWhereUniqueWithoutBuildingInput = {
    where: ParkingSpotWhereUniqueInput
    update: XOR<ParkingSpotUpdateWithoutBuildingInput, ParkingSpotUncheckedUpdateWithoutBuildingInput>
    create: XOR<ParkingSpotCreateWithoutBuildingInput, ParkingSpotUncheckedCreateWithoutBuildingInput>
  }

  export type ParkingSpotUpdateWithWhereUniqueWithoutBuildingInput = {
    where: ParkingSpotWhereUniqueInput
    data: XOR<ParkingSpotUpdateWithoutBuildingInput, ParkingSpotUncheckedUpdateWithoutBuildingInput>
  }

  export type ParkingSpotUpdateManyWithWhereWithoutBuildingInput = {
    where: ParkingSpotScalarWhereInput
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyWithoutBuildingInput>
  }

  export type ParkingSpotScalarWhereInput = {
    AND?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    OR?: ParkingSpotScalarWhereInput[]
    NOT?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    id?: StringFilter<"ParkingSpot"> | string
    building_id?: StringFilter<"ParkingSpot"> | string
    owner_id?: StringNullableFilter<"ParkingSpot"> | string | null
    qr_code_id?: StringNullableFilter<"ParkingSpot"> | string | null
    vehicle_id?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_level?: IntNullableFilter<"ParkingSpot"> | number | null
    parking_spot_number?: StringNullableFilter<"ParkingSpot"> | string | null
    parking_spot_type?: EnumParking_Spot_TypeFilter<"ParkingSpot"> | $Enums.Parking_Spot_Type
    parking_instructions?: StringNullableFilter<"ParkingSpot"> | string | null
  }

  export type BuildingCreateWithoutCommunity_membersInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    management: ManagementCreateNestedOneWithoutBuildingsInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutCommunity_membersInput = {
    id?: string
    management_id: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutCommunity_membersInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutCommunity_membersInput, BuildingUncheckedCreateWithoutCommunity_membersInput>
  }

  export type QRCodeCreateWithoutOwnerInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    parking_spot?: ParkingSpotCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeUncheckedCreateWithoutOwnerInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    parking_spot?: ParkingSpotUncheckedCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeCreateOrConnectWithoutOwnerInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutOwnerInput, QRCodeUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpotCreateWithoutOwnerInput = {
    id?: string
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
    building: BuildingCreateNestedOneWithoutParking_spotsInput
    qr_code?: QRCodeCreateNestedOneWithoutParking_spotInput
    vehicle?: VehicleCreateNestedOneWithoutParking_spotsInput
  }

  export type ParkingSpotUncheckedCreateWithoutOwnerInput = {
    id?: string
    building_id: string
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotCreateOrConnectWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpotCreateManyOwnerInputEnvelope = {
    data: ParkingSpotCreateManyOwnerInput | ParkingSpotCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCommunity_membersInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    management?: ManagementCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunity_membersInput = {
    id?: string
    email?: string | null
    phone_number?: string | null
    first_name?: string | null
    last_name?: string | null
    user_roles?: UserCreateuser_rolesInput | $Enums.User_Role[]
    verification_status?: $Enums.Verification_Status | null
    mobile_onboard_status?: $Enums.Mobile_Onboard_Status | null
    created_at?: Date | string
    last_login?: Date | string
    management?: ManagementUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunity_membersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunity_membersInput, UserUncheckedCreateWithoutCommunity_membersInput>
  }

  export type BuildingUpsertWithoutCommunity_membersInput = {
    update: XOR<BuildingUpdateWithoutCommunity_membersInput, BuildingUncheckedUpdateWithoutCommunity_membersInput>
    create: XOR<BuildingCreateWithoutCommunity_membersInput, BuildingUncheckedCreateWithoutCommunity_membersInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutCommunity_membersInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutCommunity_membersInput, BuildingUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type BuildingUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    management?: ManagementUpdateOneRequiredWithoutBuildingsNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type QRCodeUpsertWithoutOwnerInput = {
    update: XOR<QRCodeUpdateWithoutOwnerInput, QRCodeUncheckedUpdateWithoutOwnerInput>
    create: XOR<QRCodeCreateWithoutOwnerInput, QRCodeUncheckedCreateWithoutOwnerInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutOwnerInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutOwnerInput, QRCodeUncheckedUpdateWithoutOwnerInput>
  }

  export type QRCodeUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    parking_spot?: ParkingSpotUpdateOneWithoutQr_codeNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    parking_spot?: ParkingSpotUncheckedUpdateOneWithoutQr_codeNestedInput
  }

  export type ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    update: XOR<ParkingSpotUpdateWithoutOwnerInput, ParkingSpotUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    data: XOR<ParkingSpotUpdateWithoutOwnerInput, ParkingSpotUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingSpotUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingSpotScalarWhereInput
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserUpsertWithoutCommunity_membersInput = {
    update: XOR<UserUpdateWithoutCommunity_membersInput, UserUncheckedUpdateWithoutCommunity_membersInput>
    create: XOR<UserCreateWithoutCommunity_membersInput, UserUncheckedCreateWithoutCommunity_membersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunity_membersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunity_membersInput, UserUncheckedUpdateWithoutCommunity_membersInput>
  }

  export type UserUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunity_membersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_roles?: UserUpdateuser_rolesInput | $Enums.User_Role[]
    verification_status?: NullableEnumVerification_StatusFieldUpdateOperationsInput | $Enums.Verification_Status | null
    mobile_onboard_status?: NullableEnumMobile_Onboard_StatusFieldUpdateOperationsInput | $Enums.Mobile_Onboard_Status | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    management?: ManagementUncheckedUpdateOneWithoutUserNestedInput
  }

  export type BuildingCreateWithoutParking_spotsInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    management: ManagementCreateNestedOneWithoutBuildingsInput
    community_members?: CommunityMembersCreateNestedManyWithoutBuildingInput
  }

  export type BuildingUncheckedCreateWithoutParking_spotsInput = {
    id?: string
    management_id: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedCreateNestedManyWithoutBuildingInput
  }

  export type BuildingCreateOrConnectWithoutParking_spotsInput = {
    where: BuildingWhereUniqueInput
    create: XOR<BuildingCreateWithoutParking_spotsInput, BuildingUncheckedCreateWithoutParking_spotsInput>
  }

  export type CommunityMembersCreateWithoutParking_spotsInput = {
    id?: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    building: BuildingCreateNestedOneWithoutCommunity_membersInput
    qr_code?: QRCodeCreateNestedOneWithoutOwnerInput
    user?: UserCreateNestedOneWithoutCommunity_membersInput
  }

  export type CommunityMembersUncheckedCreateWithoutParking_spotsInput = {
    id?: string
    building_id: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
  }

  export type CommunityMembersCreateOrConnectWithoutParking_spotsInput = {
    where: CommunityMembersWhereUniqueInput
    create: XOR<CommunityMembersCreateWithoutParking_spotsInput, CommunityMembersUncheckedCreateWithoutParking_spotsInput>
  }

  export type QRCodeCreateWithoutParking_spotInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    owner?: CommunityMembersCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeUncheckedCreateWithoutParking_spotInput = {
    id: string
    qr_type: $Enums.QRCode_Type
    url: string
    image_url?: string | null
    qr_for: $Enums.QRCode_For
    owner?: CommunityMembersUncheckedCreateNestedOneWithoutQr_codeInput
  }

  export type QRCodeCreateOrConnectWithoutParking_spotInput = {
    where: QRCodeWhereUniqueInput
    create: XOR<QRCodeCreateWithoutParking_spotInput, QRCodeUncheckedCreateWithoutParking_spotInput>
  }

  export type VehicleCreateWithoutParking_spotsInput = {
    id?: string
    vehicle_plate?: string | null
    vehicle_type?: $Enums.Vehicle_Type
  }

  export type VehicleUncheckedCreateWithoutParking_spotsInput = {
    id?: string
    vehicle_plate?: string | null
    vehicle_type?: $Enums.Vehicle_Type
  }

  export type VehicleCreateOrConnectWithoutParking_spotsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutParking_spotsInput, VehicleUncheckedCreateWithoutParking_spotsInput>
  }

  export type BuildingUpsertWithoutParking_spotsInput = {
    update: XOR<BuildingUpdateWithoutParking_spotsInput, BuildingUncheckedUpdateWithoutParking_spotsInput>
    create: XOR<BuildingCreateWithoutParking_spotsInput, BuildingUncheckedCreateWithoutParking_spotsInput>
    where?: BuildingWhereInput
  }

  export type BuildingUpdateToOneWithWhereWithoutParking_spotsInput = {
    where?: BuildingWhereInput
    data: XOR<BuildingUpdateWithoutParking_spotsInput, BuildingUncheckedUpdateWithoutParking_spotsInput>
  }

  export type BuildingUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    management?: ManagementUpdateOneRequiredWithoutBuildingsNestedInput
    community_members?: CommunityMembersUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    management_id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type CommunityMembersUpsertWithoutParking_spotsInput = {
    update: XOR<CommunityMembersUpdateWithoutParking_spotsInput, CommunityMembersUncheckedUpdateWithoutParking_spotsInput>
    create: XOR<CommunityMembersCreateWithoutParking_spotsInput, CommunityMembersUncheckedCreateWithoutParking_spotsInput>
    where?: CommunityMembersWhereInput
  }

  export type CommunityMembersUpdateToOneWithWhereWithoutParking_spotsInput = {
    where?: CommunityMembersWhereInput
    data: XOR<CommunityMembersUpdateWithoutParking_spotsInput, CommunityMembersUncheckedUpdateWithoutParking_spotsInput>
  }

  export type CommunityMembersUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    building?: BuildingUpdateOneRequiredWithoutCommunity_membersNestedInput
    qr_code?: QRCodeUpdateOneWithoutOwnerNestedInput
    user?: UserUpdateOneWithoutCommunity_membersNestedInput
  }

  export type CommunityMembersUncheckedUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRCodeUpsertWithoutParking_spotInput = {
    update: XOR<QRCodeUpdateWithoutParking_spotInput, QRCodeUncheckedUpdateWithoutParking_spotInput>
    create: XOR<QRCodeCreateWithoutParking_spotInput, QRCodeUncheckedCreateWithoutParking_spotInput>
    where?: QRCodeWhereInput
  }

  export type QRCodeUpdateToOneWithWhereWithoutParking_spotInput = {
    where?: QRCodeWhereInput
    data: XOR<QRCodeUpdateWithoutParking_spotInput, QRCodeUncheckedUpdateWithoutParking_spotInput>
  }

  export type QRCodeUpdateWithoutParking_spotInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    owner?: CommunityMembersUpdateOneWithoutQr_codeNestedInput
  }

  export type QRCodeUncheckedUpdateWithoutParking_spotInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_type?: EnumQRCode_TypeFieldUpdateOperationsInput | $Enums.QRCode_Type
    url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    qr_for?: EnumQRCode_ForFieldUpdateOperationsInput | $Enums.QRCode_For
    owner?: CommunityMembersUncheckedUpdateOneWithoutQr_codeNestedInput
  }

  export type VehicleUpsertWithoutParking_spotsInput = {
    update: XOR<VehicleUpdateWithoutParking_spotsInput, VehicleUncheckedUpdateWithoutParking_spotsInput>
    create: XOR<VehicleCreateWithoutParking_spotsInput, VehicleUncheckedCreateWithoutParking_spotsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutParking_spotsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutParking_spotsInput, VehicleUncheckedUpdateWithoutParking_spotsInput>
  }

  export type VehicleUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
  }

  export type VehicleUncheckedUpdateWithoutParking_spotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_type?: EnumVehicle_TypeFieldUpdateOperationsInput | $Enums.Vehicle_Type
  }

  export type CommunityMembersCreateWithoutQr_codeInput = {
    id?: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    building: BuildingCreateNestedOneWithoutCommunity_membersInput
    parking_spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
    user?: UserCreateNestedOneWithoutCommunity_membersInput
  }

  export type CommunityMembersUncheckedCreateWithoutQr_codeInput = {
    id?: string
    building_id: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    parking_spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type CommunityMembersCreateOrConnectWithoutQr_codeInput = {
    where: CommunityMembersWhereUniqueInput
    create: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
  }

  export type ParkingSpotCreateWithoutQr_codeInput = {
    id?: string
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
    building: BuildingCreateNestedOneWithoutParking_spotsInput
    owner?: CommunityMembersCreateNestedOneWithoutParking_spotsInput
    vehicle?: VehicleCreateNestedOneWithoutParking_spotsInput
  }

  export type ParkingSpotUncheckedCreateWithoutQr_codeInput = {
    id?: string
    building_id: string
    owner_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotCreateOrConnectWithoutQr_codeInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
  }

  export type CommunityMembersUpsertWithoutQr_codeInput = {
    update: XOR<CommunityMembersUpdateWithoutQr_codeInput, CommunityMembersUncheckedUpdateWithoutQr_codeInput>
    create: XOR<CommunityMembersCreateWithoutQr_codeInput, CommunityMembersUncheckedCreateWithoutQr_codeInput>
    where?: CommunityMembersWhereInput
  }

  export type CommunityMembersUpdateToOneWithWhereWithoutQr_codeInput = {
    where?: CommunityMembersWhereInput
    data: XOR<CommunityMembersUpdateWithoutQr_codeInput, CommunityMembersUncheckedUpdateWithoutQr_codeInput>
  }

  export type CommunityMembersUpdateWithoutQr_codeInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    building?: BuildingUpdateOneRequiredWithoutCommunity_membersNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
    user?: UserUpdateOneWithoutCommunity_membersNestedInput
  }

  export type CommunityMembersUncheckedUpdateWithoutQr_codeInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ParkingSpotUpsertWithoutQr_codeInput = {
    update: XOR<ParkingSpotUpdateWithoutQr_codeInput, ParkingSpotUncheckedUpdateWithoutQr_codeInput>
    create: XOR<ParkingSpotCreateWithoutQr_codeInput, ParkingSpotUncheckedCreateWithoutQr_codeInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutQr_codeInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutQr_codeInput, ParkingSpotUncheckedUpdateWithoutQr_codeInput>
  }

  export type ParkingSpotUpdateWithoutQr_codeInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    building?: BuildingUpdateOneRequiredWithoutParking_spotsNestedInput
    owner?: CommunityMembersUpdateOneWithoutParking_spotsNestedInput
    vehicle?: VehicleUpdateOneWithoutParking_spotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutQr_codeInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateWithoutVehicleInput = {
    id?: string
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
    building: BuildingCreateNestedOneWithoutParking_spotsInput
    owner?: CommunityMembersCreateNestedOneWithoutParking_spotsInput
    qr_code?: QRCodeCreateNestedOneWithoutParking_spotInput
  }

  export type ParkingSpotUncheckedCreateWithoutVehicleInput = {
    id?: string
    building_id: string
    owner_id?: string | null
    qr_code_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotCreateOrConnectWithoutVehicleInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingSpotCreateManyVehicleInputEnvelope = {
    data: ParkingSpotCreateManyVehicleInput | ParkingSpotCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSpotUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ParkingSpotWhereUniqueInput
    update: XOR<ParkingSpotUpdateWithoutVehicleInput, ParkingSpotUncheckedUpdateWithoutVehicleInput>
    create: XOR<ParkingSpotCreateWithoutVehicleInput, ParkingSpotUncheckedCreateWithoutVehicleInput>
  }

  export type ParkingSpotUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ParkingSpotWhereUniqueInput
    data: XOR<ParkingSpotUpdateWithoutVehicleInput, ParkingSpotUncheckedUpdateWithoutVehicleInput>
  }

  export type ParkingSpotUpdateManyWithWhereWithoutVehicleInput = {
    where: ParkingSpotScalarWhereInput
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyWithoutVehicleInput>
  }

  export type CommunityMembersCreateManyUserInput = {
    id?: string
    building_id: string
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
  }

  export type CommunityMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    building?: BuildingUpdateOneRequiredWithoutCommunity_membersNestedInput
    qr_code?: QRCodeUpdateOneWithoutOwnerNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManagementStaffCreateManyManagementInput = {
    id?: string
    name?: string | null
    email?: string | null
    date_added?: Date | string
    last_updated?: Date | string
  }

  export type BuildingCreateManyManagementInput = {
    id?: string
    building_name?: string | null
    building_type?: $Enums.BuildingType | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    no_of_units?: number | null
    no_of_parking_floors?: number | null
    no_of_parking_spots?: number | null
    no_of_developer_parking_spots?: number | null
    facilities?: BuildingCreatefacilitiesInput | $Enums.BuildingFacility[]
  }

  export type ManagementStaffUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementStaffUncheckedUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ManagementStaffUncheckedUpdateManyWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    date_added?: DateTimeFieldUpdateOperationsInput | Date | string
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildingUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUpdateManyWithoutBuildingNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
    community_members?: CommunityMembersUncheckedUpdateManyWithoutBuildingNestedInput
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutBuildingNestedInput
  }

  export type BuildingUncheckedUpdateManyWithoutManagementInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_name?: NullableStringFieldUpdateOperationsInput | string | null
    building_type?: NullableEnumBuildingTypeFieldUpdateOperationsInput | $Enums.BuildingType | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    no_of_units?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_floors?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    no_of_developer_parking_spots?: NullableIntFieldUpdateOperationsInput | number | null
    facilities?: BuildingUpdatefacilitiesInput | $Enums.BuildingFacility[]
  }

  export type CommunityMembersCreateManyBuildingInput = {
    id?: string
    user_id?: string | null
    user_role?: $Enums.User_Role | null
    email?: string | null
    name?: string | null
    phone?: string | null
    unit_numbers?: CommunityMembersCreateunit_numbersInput | string[]
    status?: $Enums.Active_State
    qr_code_id?: string | null
  }

  export type ParkingSpotCreateManyBuildingInput = {
    id?: string
    owner_id?: string | null
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type CommunityMembersUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code?: QRCodeUpdateOneWithoutOwnerNestedInput
    parking_spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
    user?: UserUpdateOneWithoutCommunity_membersNestedInput
  }

  export type CommunityMembersUncheckedUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CommunityMembersUncheckedUpdateManyWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_role?: NullableEnumUser_RoleFieldUpdateOperationsInput | $Enums.User_Role | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    unit_numbers?: CommunityMembersUpdateunit_numbersInput | string[]
    status?: EnumActive_StateFieldUpdateOperationsInput | $Enums.Active_State
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: CommunityMembersUpdateOneWithoutParking_spotsNestedInput
    qr_code?: QRCodeUpdateOneWithoutParking_spotNestedInput
    vehicle?: VehicleUpdateOneWithoutParking_spotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotUncheckedUpdateManyWithoutBuildingInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateManyOwnerInput = {
    id?: string
    building_id: string
    qr_code_id?: string | null
    vehicle_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    building?: BuildingUpdateOneRequiredWithoutParking_spotsNestedInput
    qr_code?: QRCodeUpdateOneWithoutParking_spotNestedInput
    vehicle?: VehicleUpdateOneWithoutParking_spotsNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateManyVehicleInput = {
    id?: string
    building_id: string
    owner_id?: string | null
    qr_code_id?: string | null
    parking_level?: number | null
    parking_spot_number?: string | null
    parking_spot_type?: $Enums.Parking_Spot_Type
    parking_instructions?: string | null
  }

  export type ParkingSpotUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
    building?: BuildingUpdateOneRequiredWithoutParking_spotsNestedInput
    owner?: CommunityMembersUpdateOneWithoutParking_spotsNestedInput
    qr_code?: QRCodeUpdateOneWithoutParking_spotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    building_id?: StringFieldUpdateOperationsInput | string
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    qr_code_id?: NullableStringFieldUpdateOperationsInput | string | null
    parking_level?: NullableIntFieldUpdateOperationsInput | number | null
    parking_spot_number?: NullableStringFieldUpdateOperationsInput | string | null
    parking_spot_type?: EnumParking_Spot_TypeFieldUpdateOperationsInput | $Enums.Parking_Spot_Type
    parking_instructions?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManagementCountOutputTypeDefaultArgs instead
     */
    export type ManagementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManagementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildingCountOutputTypeDefaultArgs instead
     */
    export type BuildingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityMembersCountOutputTypeDefaultArgs instead
     */
    export type CommunityMembersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityMembersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PreSignUpManagementDefaultArgs instead
     */
    export type PreSignUpManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PreSignUpManagementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManagementDefaultArgs instead
     */
    export type ManagementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManagementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManagementStaffDefaultArgs instead
     */
    export type ManagementStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManagementStaffDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BuildingDefaultArgs instead
     */
    export type BuildingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BuildingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityMembersDefaultArgs instead
     */
    export type CommunityMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityMembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ParkingSpotDefaultArgs instead
     */
    export type ParkingSpotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ParkingSpotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QRCodeDefaultArgs instead
     */
    export type QRCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QRCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}