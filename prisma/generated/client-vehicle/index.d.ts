
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Master_Vehicles
 * 
 */
export type Master_Vehicles = $Result.DefaultSelection<Prisma.$Master_VehiclesPayload>
/**
 * Model Master_Drivers
 * 
 */
export type Master_Drivers = $Result.DefaultSelection<Prisma.$Master_DriversPayload>
/**
 * Model Vehicle_Requests
 * 
 */
export type Vehicle_Requests = $Result.DefaultSelection<Prisma.$Vehicle_RequestsPayload>
/**
 * Model Driver_Leaves
 * 
 */
export type Driver_Leaves = $Result.DefaultSelection<Prisma.$Driver_LeavesPayload>
/**
 * Model Vehicle_Maintenances
 * 
 */
export type Vehicle_Maintenances = $Result.DefaultSelection<Prisma.$Vehicle_MaintenancesPayload>
/**
 * Model Vehicle_Fuel_Logs
 * 
 */
export type Vehicle_Fuel_Logs = $Result.DefaultSelection<Prisma.$Vehicle_Fuel_LogsPayload>
/**
 * Model Vehicle_Taxes
 * 
 */
export type Vehicle_Taxes = $Result.DefaultSelection<Prisma.$Vehicle_TaxesPayload>
/**
 * Model Vehicle_Tires
 * 
 */
export type Vehicle_Tires = $Result.DefaultSelection<Prisma.$Vehicle_TiresPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Master_Vehicles
 * const master_Vehicles = await prisma.master_Vehicles.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Master_Vehicles
   * const master_Vehicles = await prisma.master_Vehicles.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.master_Vehicles`: Exposes CRUD operations for the **Master_Vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_Vehicles
    * const master_Vehicles = await prisma.master_Vehicles.findMany()
    * ```
    */
  get master_Vehicles(): Prisma.Master_VehiclesDelegate<ExtArgs>;

  /**
   * `prisma.master_Drivers`: Exposes CRUD operations for the **Master_Drivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Master_Drivers
    * const master_Drivers = await prisma.master_Drivers.findMany()
    * ```
    */
  get master_Drivers(): Prisma.Master_DriversDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_Requests`: Exposes CRUD operations for the **Vehicle_Requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Requests
    * const vehicle_Requests = await prisma.vehicle_Requests.findMany()
    * ```
    */
  get vehicle_Requests(): Prisma.Vehicle_RequestsDelegate<ExtArgs>;

  /**
   * `prisma.driver_Leaves`: Exposes CRUD operations for the **Driver_Leaves** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Driver_Leaves
    * const driver_Leaves = await prisma.driver_Leaves.findMany()
    * ```
    */
  get driver_Leaves(): Prisma.Driver_LeavesDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_Maintenances`: Exposes CRUD operations for the **Vehicle_Maintenances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Maintenances
    * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findMany()
    * ```
    */
  get vehicle_Maintenances(): Prisma.Vehicle_MaintenancesDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_Fuel_Logs`: Exposes CRUD operations for the **Vehicle_Fuel_Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Fuel_Logs
    * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findMany()
    * ```
    */
  get vehicle_Fuel_Logs(): Prisma.Vehicle_Fuel_LogsDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_Taxes`: Exposes CRUD operations for the **Vehicle_Taxes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Taxes
    * const vehicle_Taxes = await prisma.vehicle_Taxes.findMany()
    * ```
    */
  get vehicle_Taxes(): Prisma.Vehicle_TaxesDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_Tires`: Exposes CRUD operations for the **Vehicle_Tires** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_Tires
    * const vehicle_Tires = await prisma.vehicle_Tires.findMany()
    * ```
    */
  get vehicle_Tires(): Prisma.Vehicle_TiresDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.0.0
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Master_Vehicles: 'Master_Vehicles',
    Master_Drivers: 'Master_Drivers',
    Vehicle_Requests: 'Vehicle_Requests',
    Driver_Leaves: 'Driver_Leaves',
    Vehicle_Maintenances: 'Vehicle_Maintenances',
    Vehicle_Fuel_Logs: 'Vehicle_Fuel_Logs',
    Vehicle_Taxes: 'Vehicle_Taxes',
    Vehicle_Tires: 'Vehicle_Tires'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "master_Vehicles" | "master_Drivers" | "vehicle_Requests" | "driver_Leaves" | "vehicle_Maintenances" | "vehicle_Fuel_Logs" | "vehicle_Taxes" | "vehicle_Tires"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Master_Vehicles: {
        payload: Prisma.$Master_VehiclesPayload<ExtArgs>
        fields: Prisma.Master_VehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Master_VehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Master_VehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          findFirst: {
            args: Prisma.Master_VehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Master_VehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          findMany: {
            args: Prisma.Master_VehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>[]
          }
          create: {
            args: Prisma.Master_VehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          createMany: {
            args: Prisma.Master_VehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Master_VehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          update: {
            args: Prisma.Master_VehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          deleteMany: {
            args: Prisma.Master_VehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Master_VehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Master_VehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_VehiclesPayload>
          }
          aggregate: {
            args: Prisma.Master_VehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_Vehicles>
          }
          groupBy: {
            args: Prisma.Master_VehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_VehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Master_VehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<Master_VehiclesCountAggregateOutputType> | number
          }
        }
      }
      Master_Drivers: {
        payload: Prisma.$Master_DriversPayload<ExtArgs>
        fields: Prisma.Master_DriversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Master_DriversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Master_DriversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          findFirst: {
            args: Prisma.Master_DriversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Master_DriversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          findMany: {
            args: Prisma.Master_DriversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>[]
          }
          create: {
            args: Prisma.Master_DriversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          createMany: {
            args: Prisma.Master_DriversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Master_DriversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          update: {
            args: Prisma.Master_DriversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          deleteMany: {
            args: Prisma.Master_DriversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Master_DriversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Master_DriversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Master_DriversPayload>
          }
          aggregate: {
            args: Prisma.Master_DriversAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaster_Drivers>
          }
          groupBy: {
            args: Prisma.Master_DriversGroupByArgs<ExtArgs>
            result: $Utils.Optional<Master_DriversGroupByOutputType>[]
          }
          count: {
            args: Prisma.Master_DriversCountArgs<ExtArgs>
            result: $Utils.Optional<Master_DriversCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Requests: {
        payload: Prisma.$Vehicle_RequestsPayload<ExtArgs>
        fields: Prisma.Vehicle_RequestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_RequestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_RequestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_RequestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_RequestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          findMany: {
            args: Prisma.Vehicle_RequestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>[]
          }
          create: {
            args: Prisma.Vehicle_RequestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          createMany: {
            args: Prisma.Vehicle_RequestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_RequestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          update: {
            args: Prisma.Vehicle_RequestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_RequestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_RequestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_RequestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_RequestsPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_RequestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Requests>
          }
          groupBy: {
            args: Prisma.Vehicle_RequestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_RequestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_RequestsCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_RequestsCountAggregateOutputType> | number
          }
        }
      }
      Driver_Leaves: {
        payload: Prisma.$Driver_LeavesPayload<ExtArgs>
        fields: Prisma.Driver_LeavesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Driver_LeavesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Driver_LeavesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          findFirst: {
            args: Prisma.Driver_LeavesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Driver_LeavesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          findMany: {
            args: Prisma.Driver_LeavesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>[]
          }
          create: {
            args: Prisma.Driver_LeavesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          createMany: {
            args: Prisma.Driver_LeavesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Driver_LeavesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          update: {
            args: Prisma.Driver_LeavesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          deleteMany: {
            args: Prisma.Driver_LeavesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Driver_LeavesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Driver_LeavesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Driver_LeavesPayload>
          }
          aggregate: {
            args: Prisma.Driver_LeavesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver_Leaves>
          }
          groupBy: {
            args: Prisma.Driver_LeavesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Driver_LeavesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Driver_LeavesCountArgs<ExtArgs>
            result: $Utils.Optional<Driver_LeavesCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Maintenances: {
        payload: Prisma.$Vehicle_MaintenancesPayload<ExtArgs>
        fields: Prisma.Vehicle_MaintenancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_MaintenancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_MaintenancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_MaintenancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_MaintenancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          findMany: {
            args: Prisma.Vehicle_MaintenancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>[]
          }
          create: {
            args: Prisma.Vehicle_MaintenancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          createMany: {
            args: Prisma.Vehicle_MaintenancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_MaintenancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          update: {
            args: Prisma.Vehicle_MaintenancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_MaintenancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_MaintenancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_MaintenancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_MaintenancesPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_MaintenancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Maintenances>
          }
          groupBy: {
            args: Prisma.Vehicle_MaintenancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_MaintenancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_MaintenancesCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_MaintenancesCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Fuel_Logs: {
        payload: Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>
        fields: Prisma.Vehicle_Fuel_LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_Fuel_LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_Fuel_LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_Fuel_LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_Fuel_LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          findMany: {
            args: Prisma.Vehicle_Fuel_LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>[]
          }
          create: {
            args: Prisma.Vehicle_Fuel_LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          createMany: {
            args: Prisma.Vehicle_Fuel_LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_Fuel_LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          update: {
            args: Prisma.Vehicle_Fuel_LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_Fuel_LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_Fuel_LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_Fuel_LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_Fuel_LogsPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_Fuel_LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Fuel_Logs>
          }
          groupBy: {
            args: Prisma.Vehicle_Fuel_LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_Fuel_LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_Fuel_LogsCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_Fuel_LogsCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Taxes: {
        payload: Prisma.$Vehicle_TaxesPayload<ExtArgs>
        fields: Prisma.Vehicle_TaxesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_TaxesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_TaxesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_TaxesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_TaxesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          findMany: {
            args: Prisma.Vehicle_TaxesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>[]
          }
          create: {
            args: Prisma.Vehicle_TaxesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          createMany: {
            args: Prisma.Vehicle_TaxesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_TaxesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          update: {
            args: Prisma.Vehicle_TaxesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_TaxesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_TaxesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_TaxesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TaxesPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_TaxesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Taxes>
          }
          groupBy: {
            args: Prisma.Vehicle_TaxesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_TaxesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_TaxesCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_TaxesCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_Tires: {
        payload: Prisma.$Vehicle_TiresPayload<ExtArgs>
        fields: Prisma.Vehicle_TiresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_TiresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_TiresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_TiresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_TiresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          findMany: {
            args: Prisma.Vehicle_TiresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>[]
          }
          create: {
            args: Prisma.Vehicle_TiresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          createMany: {
            args: Prisma.Vehicle_TiresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Vehicle_TiresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          update: {
            args: Prisma.Vehicle_TiresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_TiresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_TiresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Vehicle_TiresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_TiresPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_TiresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_Tires>
          }
          groupBy: {
            args: Prisma.Vehicle_TiresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_TiresGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_TiresCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_TiresCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type Master_VehiclesCountOutputType
   */

  export type Master_VehiclesCountOutputType = {
    requests: number
    maintenances: number
    fuelLogs: number
    taxes: number
    tires: number
  }

  export type Master_VehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_VehiclesCountOutputTypeCountRequestsArgs
    maintenances?: boolean | Master_VehiclesCountOutputTypeCountMaintenancesArgs
    fuelLogs?: boolean | Master_VehiclesCountOutputTypeCountFuelLogsArgs
    taxes?: boolean | Master_VehiclesCountOutputTypeCountTaxesArgs
    tires?: boolean | Master_VehiclesCountOutputTypeCountTiresArgs
  }

  // Custom InputTypes
  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_VehiclesCountOutputType
     */
    select?: Master_VehiclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_RequestsWhereInput
  }

  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_MaintenancesWhereInput
  }

  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_LogsWhereInput
  }

  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeCountTaxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_TaxesWhereInput
  }

  /**
   * Master_VehiclesCountOutputType without action
   */
  export type Master_VehiclesCountOutputTypeCountTiresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_TiresWhereInput
  }


  /**
   * Count Type Master_DriversCountOutputType
   */

  export type Master_DriversCountOutputType = {
    requests: number
    leaves: number
  }

  export type Master_DriversCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_DriversCountOutputTypeCountRequestsArgs
    leaves?: boolean | Master_DriversCountOutputTypeCountLeavesArgs
  }

  // Custom InputTypes
  /**
   * Master_DriversCountOutputType without action
   */
  export type Master_DriversCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_DriversCountOutputType
     */
    select?: Master_DriversCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Master_DriversCountOutputType without action
   */
  export type Master_DriversCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_RequestsWhereInput
  }

  /**
   * Master_DriversCountOutputType without action
   */
  export type Master_DriversCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Driver_LeavesWhereInput
  }


  /**
   * Count Type Vehicle_RequestsCountOutputType
   */

  export type Vehicle_RequestsCountOutputType = {
    fuelLogs: number
  }

  export type Vehicle_RequestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fuelLogs?: boolean | Vehicle_RequestsCountOutputTypeCountFuelLogsArgs
  }

  // Custom InputTypes
  /**
   * Vehicle_RequestsCountOutputType without action
   */
  export type Vehicle_RequestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_RequestsCountOutputType
     */
    select?: Vehicle_RequestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Vehicle_RequestsCountOutputType without action
   */
  export type Vehicle_RequestsCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_LogsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Master_Vehicles
   */

  export type AggregateMaster_Vehicles = {
    _count: Master_VehiclesCountAggregateOutputType | null
    _avg: Master_VehiclesAvgAggregateOutputType | null
    _sum: Master_VehiclesSumAggregateOutputType | null
    _min: Master_VehiclesMinAggregateOutputType | null
    _max: Master_VehiclesMaxAggregateOutputType | null
  }

  export type Master_VehiclesAvgAggregateOutputType = {
    carId: number | null
    capacity: number | null
  }

  export type Master_VehiclesSumAggregateOutputType = {
    carId: number | null
    capacity: number | null
  }

  export type Master_VehiclesMinAggregateOutputType = {
    carId: number | null
    licensePlate: string | null
    brand: string | null
    carType: string | null
    capacity: number | null
    status: string | null
    actExpiryDate: Date | null
    insuranceExpiryDate: Date | null
    taxExpiryDate: Date | null
  }

  export type Master_VehiclesMaxAggregateOutputType = {
    carId: number | null
    licensePlate: string | null
    brand: string | null
    carType: string | null
    capacity: number | null
    status: string | null
    actExpiryDate: Date | null
    insuranceExpiryDate: Date | null
    taxExpiryDate: Date | null
  }

  export type Master_VehiclesCountAggregateOutputType = {
    carId: number
    licensePlate: number
    brand: number
    carType: number
    capacity: number
    status: number
    actExpiryDate: number
    insuranceExpiryDate: number
    taxExpiryDate: number
    _all: number
  }


  export type Master_VehiclesAvgAggregateInputType = {
    carId?: true
    capacity?: true
  }

  export type Master_VehiclesSumAggregateInputType = {
    carId?: true
    capacity?: true
  }

  export type Master_VehiclesMinAggregateInputType = {
    carId?: true
    licensePlate?: true
    brand?: true
    carType?: true
    capacity?: true
    status?: true
    actExpiryDate?: true
    insuranceExpiryDate?: true
    taxExpiryDate?: true
  }

  export type Master_VehiclesMaxAggregateInputType = {
    carId?: true
    licensePlate?: true
    brand?: true
    carType?: true
    capacity?: true
    status?: true
    actExpiryDate?: true
    insuranceExpiryDate?: true
    taxExpiryDate?: true
  }

  export type Master_VehiclesCountAggregateInputType = {
    carId?: true
    licensePlate?: true
    brand?: true
    carType?: true
    capacity?: true
    status?: true
    actExpiryDate?: true
    insuranceExpiryDate?: true
    taxExpiryDate?: true
    _all?: true
  }

  export type Master_VehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Master_Vehicles to aggregate.
     */
    where?: Master_VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Vehicles to fetch.
     */
    orderBy?: Master_VehiclesOrderByWithRelationInput | Master_VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Master_VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Master_Vehicles
    **/
    _count?: true | Master_VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Master_VehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Master_VehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_VehiclesMaxAggregateInputType
  }

  export type GetMaster_VehiclesAggregateType<T extends Master_VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_Vehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_Vehicles[P]>
      : GetScalarType<T[P], AggregateMaster_Vehicles[P]>
  }




  export type Master_VehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Master_VehiclesWhereInput
    orderBy?: Master_VehiclesOrderByWithAggregationInput | Master_VehiclesOrderByWithAggregationInput[]
    by: Master_VehiclesScalarFieldEnum[] | Master_VehiclesScalarFieldEnum
    having?: Master_VehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_VehiclesCountAggregateInputType | true
    _avg?: Master_VehiclesAvgAggregateInputType
    _sum?: Master_VehiclesSumAggregateInputType
    _min?: Master_VehiclesMinAggregateInputType
    _max?: Master_VehiclesMaxAggregateInputType
  }

  export type Master_VehiclesGroupByOutputType = {
    carId: number
    licensePlate: string
    brand: string | null
    carType: string
    capacity: number
    status: string
    actExpiryDate: Date | null
    insuranceExpiryDate: Date | null
    taxExpiryDate: Date | null
    _count: Master_VehiclesCountAggregateOutputType | null
    _avg: Master_VehiclesAvgAggregateOutputType | null
    _sum: Master_VehiclesSumAggregateOutputType | null
    _min: Master_VehiclesMinAggregateOutputType | null
    _max: Master_VehiclesMaxAggregateOutputType | null
  }

  type GetMaster_VehiclesGroupByPayload<T extends Master_VehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], Master_VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type Master_VehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    carId?: boolean
    licensePlate?: boolean
    brand?: boolean
    carType?: boolean
    capacity?: boolean
    status?: boolean
    actExpiryDate?: boolean
    insuranceExpiryDate?: boolean
    taxExpiryDate?: boolean
    requests?: boolean | Master_Vehicles$requestsArgs<ExtArgs>
    maintenances?: boolean | Master_Vehicles$maintenancesArgs<ExtArgs>
    fuelLogs?: boolean | Master_Vehicles$fuelLogsArgs<ExtArgs>
    taxes?: boolean | Master_Vehicles$taxesArgs<ExtArgs>
    tires?: boolean | Master_Vehicles$tiresArgs<ExtArgs>
    _count?: boolean | Master_VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_Vehicles"]>


  export type Master_VehiclesSelectScalar = {
    carId?: boolean
    licensePlate?: boolean
    brand?: boolean
    carType?: boolean
    capacity?: boolean
    status?: boolean
    actExpiryDate?: boolean
    insuranceExpiryDate?: boolean
    taxExpiryDate?: boolean
  }

  export type Master_VehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_Vehicles$requestsArgs<ExtArgs>
    maintenances?: boolean | Master_Vehicles$maintenancesArgs<ExtArgs>
    fuelLogs?: boolean | Master_Vehicles$fuelLogsArgs<ExtArgs>
    taxes?: boolean | Master_Vehicles$taxesArgs<ExtArgs>
    tires?: boolean | Master_Vehicles$tiresArgs<ExtArgs>
    _count?: boolean | Master_VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Master_VehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Master_Vehicles"
    objects: {
      requests: Prisma.$Vehicle_RequestsPayload<ExtArgs>[]
      maintenances: Prisma.$Vehicle_MaintenancesPayload<ExtArgs>[]
      fuelLogs: Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>[]
      taxes: Prisma.$Vehicle_TaxesPayload<ExtArgs>[]
      tires: Prisma.$Vehicle_TiresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      carId: number
      licensePlate: string
      brand: string | null
      carType: string
      capacity: number
      status: string
      actExpiryDate: Date | null
      insuranceExpiryDate: Date | null
      taxExpiryDate: Date | null
    }, ExtArgs["result"]["master_Vehicles"]>
    composites: {}
  }

  type Master_VehiclesGetPayload<S extends boolean | null | undefined | Master_VehiclesDefaultArgs> = $Result.GetResult<Prisma.$Master_VehiclesPayload, S>

  type Master_VehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Master_VehiclesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Master_VehiclesCountAggregateInputType | true
    }

  export interface Master_VehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Master_Vehicles'], meta: { name: 'Master_Vehicles' } }
    /**
     * Find zero or one Master_Vehicles that matches the filter.
     * @param {Master_VehiclesFindUniqueArgs} args - Arguments to find a Master_Vehicles
     * @example
     * // Get one Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Master_VehiclesFindUniqueArgs>(args: SelectSubset<T, Master_VehiclesFindUniqueArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Master_Vehicles that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Master_VehiclesFindUniqueOrThrowArgs} args - Arguments to find a Master_Vehicles
     * @example
     * // Get one Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Master_VehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, Master_VehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Master_Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesFindFirstArgs} args - Arguments to find a Master_Vehicles
     * @example
     * // Get one Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Master_VehiclesFindFirstArgs>(args?: SelectSubset<T, Master_VehiclesFindFirstArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Master_Vehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesFindFirstOrThrowArgs} args - Arguments to find a Master_Vehicles
     * @example
     * // Get one Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Master_VehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, Master_VehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Master_Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findMany()
     * 
     * // Get first 10 Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.findMany({ take: 10 })
     * 
     * // Only select the `carId`
     * const master_VehiclesWithCarIdOnly = await prisma.master_Vehicles.findMany({ select: { carId: true } })
     * 
     */
    findMany<T extends Master_VehiclesFindManyArgs>(args?: SelectSubset<T, Master_VehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Master_Vehicles.
     * @param {Master_VehiclesCreateArgs} args - Arguments to create a Master_Vehicles.
     * @example
     * // Create one Master_Vehicles
     * const Master_Vehicles = await prisma.master_Vehicles.create({
     *   data: {
     *     // ... data to create a Master_Vehicles
     *   }
     * })
     * 
     */
    create<T extends Master_VehiclesCreateArgs>(args: SelectSubset<T, Master_VehiclesCreateArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Master_Vehicles.
     * @param {Master_VehiclesCreateManyArgs} args - Arguments to create many Master_Vehicles.
     * @example
     * // Create many Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Master_VehiclesCreateManyArgs>(args?: SelectSubset<T, Master_VehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_Vehicles.
     * @param {Master_VehiclesDeleteArgs} args - Arguments to delete one Master_Vehicles.
     * @example
     * // Delete one Master_Vehicles
     * const Master_Vehicles = await prisma.master_Vehicles.delete({
     *   where: {
     *     // ... filter to delete one Master_Vehicles
     *   }
     * })
     * 
     */
    delete<T extends Master_VehiclesDeleteArgs>(args: SelectSubset<T, Master_VehiclesDeleteArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Master_Vehicles.
     * @param {Master_VehiclesUpdateArgs} args - Arguments to update one Master_Vehicles.
     * @example
     * // Update one Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Master_VehiclesUpdateArgs>(args: SelectSubset<T, Master_VehiclesUpdateArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Master_Vehicles.
     * @param {Master_VehiclesDeleteManyArgs} args - Arguments to filter Master_Vehicles to delete.
     * @example
     * // Delete a few Master_Vehicles
     * const { count } = await prisma.master_Vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Master_VehiclesDeleteManyArgs>(args?: SelectSubset<T, Master_VehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Master_VehiclesUpdateManyArgs>(args: SelectSubset<T, Master_VehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_Vehicles.
     * @param {Master_VehiclesUpsertArgs} args - Arguments to update or create a Master_Vehicles.
     * @example
     * // Update or create a Master_Vehicles
     * const master_Vehicles = await prisma.master_Vehicles.upsert({
     *   create: {
     *     // ... data to create a Master_Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_Vehicles we want to update
     *   }
     * })
     */
    upsert<T extends Master_VehiclesUpsertArgs>(args: SelectSubset<T, Master_VehiclesUpsertArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Master_Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesCountArgs} args - Arguments to filter Master_Vehicles to count.
     * @example
     * // Count the number of Master_Vehicles
     * const count = await prisma.master_Vehicles.count({
     *   where: {
     *     // ... the filter for the Master_Vehicles we want to count
     *   }
     * })
    **/
    count<T extends Master_VehiclesCountArgs>(
      args?: Subset<T, Master_VehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Master_VehiclesAggregateArgs>(args: Subset<T, Master_VehiclesAggregateArgs>): Prisma.PrismaPromise<GetMaster_VehiclesAggregateType<T>>

    /**
     * Group by Master_Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_VehiclesGroupByArgs} args - Group by arguments.
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
      T extends Master_VehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Master_VehiclesGroupByArgs['orderBy'] }
        : { orderBy?: Master_VehiclesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Master_VehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_VehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Master_Vehicles model
   */
  readonly fields: Master_VehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Master_Vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Master_VehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Master_Vehicles$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Master_Vehicles$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findMany"> | Null>
    maintenances<T extends Master_Vehicles$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Master_Vehicles$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findMany"> | Null>
    fuelLogs<T extends Master_Vehicles$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Master_Vehicles$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findMany"> | Null>
    taxes<T extends Master_Vehicles$taxesArgs<ExtArgs> = {}>(args?: Subset<T, Master_Vehicles$taxesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findMany"> | Null>
    tires<T extends Master_Vehicles$tiresArgs<ExtArgs> = {}>(args?: Subset<T, Master_Vehicles$tiresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Master_Vehicles model
   */ 
  interface Master_VehiclesFieldRefs {
    readonly carId: FieldRef<"Master_Vehicles", 'Int'>
    readonly licensePlate: FieldRef<"Master_Vehicles", 'String'>
    readonly brand: FieldRef<"Master_Vehicles", 'String'>
    readonly carType: FieldRef<"Master_Vehicles", 'String'>
    readonly capacity: FieldRef<"Master_Vehicles", 'Int'>
    readonly status: FieldRef<"Master_Vehicles", 'String'>
    readonly actExpiryDate: FieldRef<"Master_Vehicles", 'DateTime'>
    readonly insuranceExpiryDate: FieldRef<"Master_Vehicles", 'DateTime'>
    readonly taxExpiryDate: FieldRef<"Master_Vehicles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Master_Vehicles findUnique
   */
  export type Master_VehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Master_Vehicles to fetch.
     */
    where: Master_VehiclesWhereUniqueInput
  }

  /**
   * Master_Vehicles findUniqueOrThrow
   */
  export type Master_VehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Master_Vehicles to fetch.
     */
    where: Master_VehiclesWhereUniqueInput
  }

  /**
   * Master_Vehicles findFirst
   */
  export type Master_VehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Master_Vehicles to fetch.
     */
    where?: Master_VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Vehicles to fetch.
     */
    orderBy?: Master_VehiclesOrderByWithRelationInput | Master_VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Master_Vehicles.
     */
    cursor?: Master_VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Master_Vehicles.
     */
    distinct?: Master_VehiclesScalarFieldEnum | Master_VehiclesScalarFieldEnum[]
  }

  /**
   * Master_Vehicles findFirstOrThrow
   */
  export type Master_VehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Master_Vehicles to fetch.
     */
    where?: Master_VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Vehicles to fetch.
     */
    orderBy?: Master_VehiclesOrderByWithRelationInput | Master_VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Master_Vehicles.
     */
    cursor?: Master_VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Master_Vehicles.
     */
    distinct?: Master_VehiclesScalarFieldEnum | Master_VehiclesScalarFieldEnum[]
  }

  /**
   * Master_Vehicles findMany
   */
  export type Master_VehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Master_Vehicles to fetch.
     */
    where?: Master_VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Vehicles to fetch.
     */
    orderBy?: Master_VehiclesOrderByWithRelationInput | Master_VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Master_Vehicles.
     */
    cursor?: Master_VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Vehicles.
     */
    skip?: number
    distinct?: Master_VehiclesScalarFieldEnum | Master_VehiclesScalarFieldEnum[]
  }

  /**
   * Master_Vehicles create
   */
  export type Master_VehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a Master_Vehicles.
     */
    data: XOR<Master_VehiclesCreateInput, Master_VehiclesUncheckedCreateInput>
  }

  /**
   * Master_Vehicles createMany
   */
  export type Master_VehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Master_Vehicles.
     */
    data: Master_VehiclesCreateManyInput | Master_VehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Master_Vehicles update
   */
  export type Master_VehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a Master_Vehicles.
     */
    data: XOR<Master_VehiclesUpdateInput, Master_VehiclesUncheckedUpdateInput>
    /**
     * Choose, which Master_Vehicles to update.
     */
    where: Master_VehiclesWhereUniqueInput
  }

  /**
   * Master_Vehicles updateMany
   */
  export type Master_VehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Master_Vehicles.
     */
    data: XOR<Master_VehiclesUpdateManyMutationInput, Master_VehiclesUncheckedUpdateManyInput>
    /**
     * Filter which Master_Vehicles to update
     */
    where?: Master_VehiclesWhereInput
  }

  /**
   * Master_Vehicles upsert
   */
  export type Master_VehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the Master_Vehicles to update in case it exists.
     */
    where: Master_VehiclesWhereUniqueInput
    /**
     * In case the Master_Vehicles found by the `where` argument doesn't exist, create a new Master_Vehicles with this data.
     */
    create: XOR<Master_VehiclesCreateInput, Master_VehiclesUncheckedCreateInput>
    /**
     * In case the Master_Vehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Master_VehiclesUpdateInput, Master_VehiclesUncheckedUpdateInput>
  }

  /**
   * Master_Vehicles delete
   */
  export type Master_VehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    /**
     * Filter which Master_Vehicles to delete.
     */
    where: Master_VehiclesWhereUniqueInput
  }

  /**
   * Master_Vehicles deleteMany
   */
  export type Master_VehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Master_Vehicles to delete
     */
    where?: Master_VehiclesWhereInput
  }

  /**
   * Master_Vehicles.requests
   */
  export type Master_Vehicles$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    where?: Vehicle_RequestsWhereInput
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    cursor?: Vehicle_RequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_RequestsScalarFieldEnum | Vehicle_RequestsScalarFieldEnum[]
  }

  /**
   * Master_Vehicles.maintenances
   */
  export type Master_Vehicles$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    where?: Vehicle_MaintenancesWhereInput
    orderBy?: Vehicle_MaintenancesOrderByWithRelationInput | Vehicle_MaintenancesOrderByWithRelationInput[]
    cursor?: Vehicle_MaintenancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_MaintenancesScalarFieldEnum | Vehicle_MaintenancesScalarFieldEnum[]
  }

  /**
   * Master_Vehicles.fuelLogs
   */
  export type Master_Vehicles$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    where?: Vehicle_Fuel_LogsWhereInput
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_Fuel_LogsScalarFieldEnum | Vehicle_Fuel_LogsScalarFieldEnum[]
  }

  /**
   * Master_Vehicles.taxes
   */
  export type Master_Vehicles$taxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    where?: Vehicle_TaxesWhereInput
    orderBy?: Vehicle_TaxesOrderByWithRelationInput | Vehicle_TaxesOrderByWithRelationInput[]
    cursor?: Vehicle_TaxesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_TaxesScalarFieldEnum | Vehicle_TaxesScalarFieldEnum[]
  }

  /**
   * Master_Vehicles.tires
   */
  export type Master_Vehicles$tiresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    where?: Vehicle_TiresWhereInput
    orderBy?: Vehicle_TiresOrderByWithRelationInput | Vehicle_TiresOrderByWithRelationInput[]
    cursor?: Vehicle_TiresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_TiresScalarFieldEnum | Vehicle_TiresScalarFieldEnum[]
  }

  /**
   * Master_Vehicles without action
   */
  export type Master_VehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
  }


  /**
   * Model Master_Drivers
   */

  export type AggregateMaster_Drivers = {
    _count: Master_DriversCountAggregateOutputType | null
    _avg: Master_DriversAvgAggregateOutputType | null
    _sum: Master_DriversSumAggregateOutputType | null
    _min: Master_DriversMinAggregateOutputType | null
    _max: Master_DriversMaxAggregateOutputType | null
  }

  export type Master_DriversAvgAggregateOutputType = {
    driverId: number | null
  }

  export type Master_DriversSumAggregateOutputType = {
    driverId: number | null
  }

  export type Master_DriversMinAggregateOutputType = {
    driverId: number | null
    driverName: string | null
    phone: string | null
    status: string | null
    lineUserId: string | null
    licenseNumber: string | null
    licenseExpiryDate: Date | null
    address: string | null
  }

  export type Master_DriversMaxAggregateOutputType = {
    driverId: number | null
    driverName: string | null
    phone: string | null
    status: string | null
    lineUserId: string | null
    licenseNumber: string | null
    licenseExpiryDate: Date | null
    address: string | null
  }

  export type Master_DriversCountAggregateOutputType = {
    driverId: number
    driverName: number
    phone: number
    status: number
    lineUserId: number
    licenseNumber: number
    licenseExpiryDate: number
    address: number
    _all: number
  }


  export type Master_DriversAvgAggregateInputType = {
    driverId?: true
  }

  export type Master_DriversSumAggregateInputType = {
    driverId?: true
  }

  export type Master_DriversMinAggregateInputType = {
    driverId?: true
    driverName?: true
    phone?: true
    status?: true
    lineUserId?: true
    licenseNumber?: true
    licenseExpiryDate?: true
    address?: true
  }

  export type Master_DriversMaxAggregateInputType = {
    driverId?: true
    driverName?: true
    phone?: true
    status?: true
    lineUserId?: true
    licenseNumber?: true
    licenseExpiryDate?: true
    address?: true
  }

  export type Master_DriversCountAggregateInputType = {
    driverId?: true
    driverName?: true
    phone?: true
    status?: true
    lineUserId?: true
    licenseNumber?: true
    licenseExpiryDate?: true
    address?: true
    _all?: true
  }

  export type Master_DriversAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Master_Drivers to aggregate.
     */
    where?: Master_DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Drivers to fetch.
     */
    orderBy?: Master_DriversOrderByWithRelationInput | Master_DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Master_DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Master_Drivers
    **/
    _count?: true | Master_DriversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Master_DriversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Master_DriversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Master_DriversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Master_DriversMaxAggregateInputType
  }

  export type GetMaster_DriversAggregateType<T extends Master_DriversAggregateArgs> = {
        [P in keyof T & keyof AggregateMaster_Drivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaster_Drivers[P]>
      : GetScalarType<T[P], AggregateMaster_Drivers[P]>
  }




  export type Master_DriversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Master_DriversWhereInput
    orderBy?: Master_DriversOrderByWithAggregationInput | Master_DriversOrderByWithAggregationInput[]
    by: Master_DriversScalarFieldEnum[] | Master_DriversScalarFieldEnum
    having?: Master_DriversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Master_DriversCountAggregateInputType | true
    _avg?: Master_DriversAvgAggregateInputType
    _sum?: Master_DriversSumAggregateInputType
    _min?: Master_DriversMinAggregateInputType
    _max?: Master_DriversMaxAggregateInputType
  }

  export type Master_DriversGroupByOutputType = {
    driverId: number
    driverName: string
    phone: string | null
    status: string
    lineUserId: string | null
    licenseNumber: string | null
    licenseExpiryDate: Date | null
    address: string | null
    _count: Master_DriversCountAggregateOutputType | null
    _avg: Master_DriversAvgAggregateOutputType | null
    _sum: Master_DriversSumAggregateOutputType | null
    _min: Master_DriversMinAggregateOutputType | null
    _max: Master_DriversMaxAggregateOutputType | null
  }

  type GetMaster_DriversGroupByPayload<T extends Master_DriversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Master_DriversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Master_DriversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Master_DriversGroupByOutputType[P]>
            : GetScalarType<T[P], Master_DriversGroupByOutputType[P]>
        }
      >
    >


  export type Master_DriversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    driverId?: boolean
    driverName?: boolean
    phone?: boolean
    status?: boolean
    lineUserId?: boolean
    licenseNumber?: boolean
    licenseExpiryDate?: boolean
    address?: boolean
    requests?: boolean | Master_Drivers$requestsArgs<ExtArgs>
    leaves?: boolean | Master_Drivers$leavesArgs<ExtArgs>
    _count?: boolean | Master_DriversCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_Drivers"]>


  export type Master_DriversSelectScalar = {
    driverId?: boolean
    driverName?: boolean
    phone?: boolean
    status?: boolean
    lineUserId?: boolean
    licenseNumber?: boolean
    licenseExpiryDate?: boolean
    address?: boolean
  }

  export type Master_DriversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_Drivers$requestsArgs<ExtArgs>
    leaves?: boolean | Master_Drivers$leavesArgs<ExtArgs>
    _count?: boolean | Master_DriversCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Master_DriversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Master_Drivers"
    objects: {
      requests: Prisma.$Vehicle_RequestsPayload<ExtArgs>[]
      leaves: Prisma.$Driver_LeavesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      driverId: number
      driverName: string
      phone: string | null
      status: string
      lineUserId: string | null
      licenseNumber: string | null
      licenseExpiryDate: Date | null
      address: string | null
    }, ExtArgs["result"]["master_Drivers"]>
    composites: {}
  }

  type Master_DriversGetPayload<S extends boolean | null | undefined | Master_DriversDefaultArgs> = $Result.GetResult<Prisma.$Master_DriversPayload, S>

  type Master_DriversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Master_DriversFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Master_DriversCountAggregateInputType | true
    }

  export interface Master_DriversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Master_Drivers'], meta: { name: 'Master_Drivers' } }
    /**
     * Find zero or one Master_Drivers that matches the filter.
     * @param {Master_DriversFindUniqueArgs} args - Arguments to find a Master_Drivers
     * @example
     * // Get one Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Master_DriversFindUniqueArgs>(args: SelectSubset<T, Master_DriversFindUniqueArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Master_Drivers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Master_DriversFindUniqueOrThrowArgs} args - Arguments to find a Master_Drivers
     * @example
     * // Get one Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Master_DriversFindUniqueOrThrowArgs>(args: SelectSubset<T, Master_DriversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Master_Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversFindFirstArgs} args - Arguments to find a Master_Drivers
     * @example
     * // Get one Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Master_DriversFindFirstArgs>(args?: SelectSubset<T, Master_DriversFindFirstArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Master_Drivers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversFindFirstOrThrowArgs} args - Arguments to find a Master_Drivers
     * @example
     * // Get one Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Master_DriversFindFirstOrThrowArgs>(args?: SelectSubset<T, Master_DriversFindFirstOrThrowArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Master_Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findMany()
     * 
     * // Get first 10 Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.findMany({ take: 10 })
     * 
     * // Only select the `driverId`
     * const master_DriversWithDriverIdOnly = await prisma.master_Drivers.findMany({ select: { driverId: true } })
     * 
     */
    findMany<T extends Master_DriversFindManyArgs>(args?: SelectSubset<T, Master_DriversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Master_Drivers.
     * @param {Master_DriversCreateArgs} args - Arguments to create a Master_Drivers.
     * @example
     * // Create one Master_Drivers
     * const Master_Drivers = await prisma.master_Drivers.create({
     *   data: {
     *     // ... data to create a Master_Drivers
     *   }
     * })
     * 
     */
    create<T extends Master_DriversCreateArgs>(args: SelectSubset<T, Master_DriversCreateArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Master_Drivers.
     * @param {Master_DriversCreateManyArgs} args - Arguments to create many Master_Drivers.
     * @example
     * // Create many Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Master_DriversCreateManyArgs>(args?: SelectSubset<T, Master_DriversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Master_Drivers.
     * @param {Master_DriversDeleteArgs} args - Arguments to delete one Master_Drivers.
     * @example
     * // Delete one Master_Drivers
     * const Master_Drivers = await prisma.master_Drivers.delete({
     *   where: {
     *     // ... filter to delete one Master_Drivers
     *   }
     * })
     * 
     */
    delete<T extends Master_DriversDeleteArgs>(args: SelectSubset<T, Master_DriversDeleteArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Master_Drivers.
     * @param {Master_DriversUpdateArgs} args - Arguments to update one Master_Drivers.
     * @example
     * // Update one Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Master_DriversUpdateArgs>(args: SelectSubset<T, Master_DriversUpdateArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Master_Drivers.
     * @param {Master_DriversDeleteManyArgs} args - Arguments to filter Master_Drivers to delete.
     * @example
     * // Delete a few Master_Drivers
     * const { count } = await prisma.master_Drivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Master_DriversDeleteManyArgs>(args?: SelectSubset<T, Master_DriversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Master_Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Master_DriversUpdateManyArgs>(args: SelectSubset<T, Master_DriversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Master_Drivers.
     * @param {Master_DriversUpsertArgs} args - Arguments to update or create a Master_Drivers.
     * @example
     * // Update or create a Master_Drivers
     * const master_Drivers = await prisma.master_Drivers.upsert({
     *   create: {
     *     // ... data to create a Master_Drivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Master_Drivers we want to update
     *   }
     * })
     */
    upsert<T extends Master_DriversUpsertArgs>(args: SelectSubset<T, Master_DriversUpsertArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Master_Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversCountArgs} args - Arguments to filter Master_Drivers to count.
     * @example
     * // Count the number of Master_Drivers
     * const count = await prisma.master_Drivers.count({
     *   where: {
     *     // ... the filter for the Master_Drivers we want to count
     *   }
     * })
    **/
    count<T extends Master_DriversCountArgs>(
      args?: Subset<T, Master_DriversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Master_DriversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Master_Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Master_DriversAggregateArgs>(args: Subset<T, Master_DriversAggregateArgs>): Prisma.PrismaPromise<GetMaster_DriversAggregateType<T>>

    /**
     * Group by Master_Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Master_DriversGroupByArgs} args - Group by arguments.
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
      T extends Master_DriversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Master_DriversGroupByArgs['orderBy'] }
        : { orderBy?: Master_DriversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Master_DriversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaster_DriversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Master_Drivers model
   */
  readonly fields: Master_DriversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Master_Drivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Master_DriversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends Master_Drivers$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Master_Drivers$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findMany"> | Null>
    leaves<T extends Master_Drivers$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Master_Drivers$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Master_Drivers model
   */ 
  interface Master_DriversFieldRefs {
    readonly driverId: FieldRef<"Master_Drivers", 'Int'>
    readonly driverName: FieldRef<"Master_Drivers", 'String'>
    readonly phone: FieldRef<"Master_Drivers", 'String'>
    readonly status: FieldRef<"Master_Drivers", 'String'>
    readonly lineUserId: FieldRef<"Master_Drivers", 'String'>
    readonly licenseNumber: FieldRef<"Master_Drivers", 'String'>
    readonly licenseExpiryDate: FieldRef<"Master_Drivers", 'DateTime'>
    readonly address: FieldRef<"Master_Drivers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Master_Drivers findUnique
   */
  export type Master_DriversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter, which Master_Drivers to fetch.
     */
    where: Master_DriversWhereUniqueInput
  }

  /**
   * Master_Drivers findUniqueOrThrow
   */
  export type Master_DriversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter, which Master_Drivers to fetch.
     */
    where: Master_DriversWhereUniqueInput
  }

  /**
   * Master_Drivers findFirst
   */
  export type Master_DriversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter, which Master_Drivers to fetch.
     */
    where?: Master_DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Drivers to fetch.
     */
    orderBy?: Master_DriversOrderByWithRelationInput | Master_DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Master_Drivers.
     */
    cursor?: Master_DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Master_Drivers.
     */
    distinct?: Master_DriversScalarFieldEnum | Master_DriversScalarFieldEnum[]
  }

  /**
   * Master_Drivers findFirstOrThrow
   */
  export type Master_DriversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter, which Master_Drivers to fetch.
     */
    where?: Master_DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Drivers to fetch.
     */
    orderBy?: Master_DriversOrderByWithRelationInput | Master_DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Master_Drivers.
     */
    cursor?: Master_DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Master_Drivers.
     */
    distinct?: Master_DriversScalarFieldEnum | Master_DriversScalarFieldEnum[]
  }

  /**
   * Master_Drivers findMany
   */
  export type Master_DriversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter, which Master_Drivers to fetch.
     */
    where?: Master_DriversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Master_Drivers to fetch.
     */
    orderBy?: Master_DriversOrderByWithRelationInput | Master_DriversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Master_Drivers.
     */
    cursor?: Master_DriversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Master_Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Master_Drivers.
     */
    skip?: number
    distinct?: Master_DriversScalarFieldEnum | Master_DriversScalarFieldEnum[]
  }

  /**
   * Master_Drivers create
   */
  export type Master_DriversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * The data needed to create a Master_Drivers.
     */
    data: XOR<Master_DriversCreateInput, Master_DriversUncheckedCreateInput>
  }

  /**
   * Master_Drivers createMany
   */
  export type Master_DriversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Master_Drivers.
     */
    data: Master_DriversCreateManyInput | Master_DriversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Master_Drivers update
   */
  export type Master_DriversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * The data needed to update a Master_Drivers.
     */
    data: XOR<Master_DriversUpdateInput, Master_DriversUncheckedUpdateInput>
    /**
     * Choose, which Master_Drivers to update.
     */
    where: Master_DriversWhereUniqueInput
  }

  /**
   * Master_Drivers updateMany
   */
  export type Master_DriversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Master_Drivers.
     */
    data: XOR<Master_DriversUpdateManyMutationInput, Master_DriversUncheckedUpdateManyInput>
    /**
     * Filter which Master_Drivers to update
     */
    where?: Master_DriversWhereInput
  }

  /**
   * Master_Drivers upsert
   */
  export type Master_DriversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * The filter to search for the Master_Drivers to update in case it exists.
     */
    where: Master_DriversWhereUniqueInput
    /**
     * In case the Master_Drivers found by the `where` argument doesn't exist, create a new Master_Drivers with this data.
     */
    create: XOR<Master_DriversCreateInput, Master_DriversUncheckedCreateInput>
    /**
     * In case the Master_Drivers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Master_DriversUpdateInput, Master_DriversUncheckedUpdateInput>
  }

  /**
   * Master_Drivers delete
   */
  export type Master_DriversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    /**
     * Filter which Master_Drivers to delete.
     */
    where: Master_DriversWhereUniqueInput
  }

  /**
   * Master_Drivers deleteMany
   */
  export type Master_DriversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Master_Drivers to delete
     */
    where?: Master_DriversWhereInput
  }

  /**
   * Master_Drivers.requests
   */
  export type Master_Drivers$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    where?: Vehicle_RequestsWhereInput
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    cursor?: Vehicle_RequestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_RequestsScalarFieldEnum | Vehicle_RequestsScalarFieldEnum[]
  }

  /**
   * Master_Drivers.leaves
   */
  export type Master_Drivers$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    where?: Driver_LeavesWhereInput
    orderBy?: Driver_LeavesOrderByWithRelationInput | Driver_LeavesOrderByWithRelationInput[]
    cursor?: Driver_LeavesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Driver_LeavesScalarFieldEnum | Driver_LeavesScalarFieldEnum[]
  }

  /**
   * Master_Drivers without action
   */
  export type Master_DriversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Requests
   */

  export type AggregateVehicle_Requests = {
    _count: Vehicle_RequestsCountAggregateOutputType | null
    _avg: Vehicle_RequestsAvgAggregateOutputType | null
    _sum: Vehicle_RequestsSumAggregateOutputType | null
    _min: Vehicle_RequestsMinAggregateOutputType | null
    _max: Vehicle_RequestsMaxAggregateOutputType | null
  }

  export type Vehicle_RequestsAvgAggregateOutputType = {
    requestId: number | null
    requesterStaffId: number | null
    passengerCount: number | null
    carId: number | null
    driverId: number | null
    startOdometer: number | null
    endOdometer: number | null
    actualDistance: number | null
    parentRequestId: number | null
  }

  export type Vehicle_RequestsSumAggregateOutputType = {
    requestId: number | null
    requesterStaffId: number | null
    passengerCount: number | null
    carId: number | null
    driverId: number | null
    startOdometer: number | null
    endOdometer: number | null
    actualDistance: number | null
    parentRequestId: number | null
  }

  export type Vehicle_RequestsMinAggregateOutputType = {
    requestId: number | null
    requesterStaffId: number | null
    purpose: string | null
    destination: string | null
    province: string | null
    refOrderNumber: string | null
    refOrderDate: Date | null
    startDateTime: Date | null
    endDateTime: Date | null
    passengerCount: number | null
    passengerNames: string | null
    carId: number | null
    driverId: number | null
    status: string | null
    startOdometer: number | null
    endOdometer: number | null
    startOdometerPhoto: string | null
    endOdometerPhoto: string | null
    actualDistance: number | null
    departureRecordedAt: Date | null
    arrivalRecordedAt: Date | null
    isRecurring: boolean | null
    recurrencePattern: string | null
    recurrenceGroupId: string | null
    parentRequestId: number | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_RequestsMaxAggregateOutputType = {
    requestId: number | null
    requesterStaffId: number | null
    purpose: string | null
    destination: string | null
    province: string | null
    refOrderNumber: string | null
    refOrderDate: Date | null
    startDateTime: Date | null
    endDateTime: Date | null
    passengerCount: number | null
    passengerNames: string | null
    carId: number | null
    driverId: number | null
    status: string | null
    startOdometer: number | null
    endOdometer: number | null
    startOdometerPhoto: string | null
    endOdometerPhoto: string | null
    actualDistance: number | null
    departureRecordedAt: Date | null
    arrivalRecordedAt: Date | null
    isRecurring: boolean | null
    recurrencePattern: string | null
    recurrenceGroupId: string | null
    parentRequestId: number | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_RequestsCountAggregateOutputType = {
    requestId: number
    requesterStaffId: number
    purpose: number
    destination: number
    province: number
    refOrderNumber: number
    refOrderDate: number
    startDateTime: number
    endDateTime: number
    passengerCount: number
    passengerNames: number
    carId: number
    driverId: number
    status: number
    startOdometer: number
    endOdometer: number
    startOdometerPhoto: number
    endOdometerPhoto: number
    actualDistance: number
    departureRecordedAt: number
    arrivalRecordedAt: number
    isRecurring: number
    recurrencePattern: number
    recurrenceGroupId: number
    parentRequestId: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Vehicle_RequestsAvgAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    passengerCount?: true
    carId?: true
    driverId?: true
    startOdometer?: true
    endOdometer?: true
    actualDistance?: true
    parentRequestId?: true
  }

  export type Vehicle_RequestsSumAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    passengerCount?: true
    carId?: true
    driverId?: true
    startOdometer?: true
    endOdometer?: true
    actualDistance?: true
    parentRequestId?: true
  }

  export type Vehicle_RequestsMinAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    purpose?: true
    destination?: true
    province?: true
    refOrderNumber?: true
    refOrderDate?: true
    startDateTime?: true
    endDateTime?: true
    passengerCount?: true
    passengerNames?: true
    carId?: true
    driverId?: true
    status?: true
    startOdometer?: true
    endOdometer?: true
    startOdometerPhoto?: true
    endOdometerPhoto?: true
    actualDistance?: true
    departureRecordedAt?: true
    arrivalRecordedAt?: true
    isRecurring?: true
    recurrencePattern?: true
    recurrenceGroupId?: true
    parentRequestId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_RequestsMaxAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    purpose?: true
    destination?: true
    province?: true
    refOrderNumber?: true
    refOrderDate?: true
    startDateTime?: true
    endDateTime?: true
    passengerCount?: true
    passengerNames?: true
    carId?: true
    driverId?: true
    status?: true
    startOdometer?: true
    endOdometer?: true
    startOdometerPhoto?: true
    endOdometerPhoto?: true
    actualDistance?: true
    departureRecordedAt?: true
    arrivalRecordedAt?: true
    isRecurring?: true
    recurrencePattern?: true
    recurrenceGroupId?: true
    parentRequestId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_RequestsCountAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    purpose?: true
    destination?: true
    province?: true
    refOrderNumber?: true
    refOrderDate?: true
    startDateTime?: true
    endDateTime?: true
    passengerCount?: true
    passengerNames?: true
    carId?: true
    driverId?: true
    status?: true
    startOdometer?: true
    endOdometer?: true
    startOdometerPhoto?: true
    endOdometerPhoto?: true
    actualDistance?: true
    departureRecordedAt?: true
    arrivalRecordedAt?: true
    isRecurring?: true
    recurrencePattern?: true
    recurrenceGroupId?: true
    parentRequestId?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Vehicle_RequestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Requests to aggregate.
     */
    where?: Vehicle_RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Requests to fetch.
     */
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Requests
    **/
    _count?: true | Vehicle_RequestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_RequestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_RequestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_RequestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_RequestsMaxAggregateInputType
  }

  export type GetVehicle_RequestsAggregateType<T extends Vehicle_RequestsAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Requests[P]>
      : GetScalarType<T[P], AggregateVehicle_Requests[P]>
  }




  export type Vehicle_RequestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_RequestsWhereInput
    orderBy?: Vehicle_RequestsOrderByWithAggregationInput | Vehicle_RequestsOrderByWithAggregationInput[]
    by: Vehicle_RequestsScalarFieldEnum[] | Vehicle_RequestsScalarFieldEnum
    having?: Vehicle_RequestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_RequestsCountAggregateInputType | true
    _avg?: Vehicle_RequestsAvgAggregateInputType
    _sum?: Vehicle_RequestsSumAggregateInputType
    _min?: Vehicle_RequestsMinAggregateInputType
    _max?: Vehicle_RequestsMaxAggregateInputType
  }

  export type Vehicle_RequestsGroupByOutputType = {
    requestId: number
    requesterStaffId: number
    purpose: string
    destination: string
    province: string
    refOrderNumber: string | null
    refOrderDate: Date | null
    startDateTime: Date
    endDateTime: Date
    passengerCount: number
    passengerNames: string
    carId: number | null
    driverId: number | null
    status: string
    startOdometer: number | null
    endOdometer: number | null
    startOdometerPhoto: string | null
    endOdometerPhoto: string | null
    actualDistance: number | null
    departureRecordedAt: Date | null
    arrivalRecordedAt: Date | null
    isRecurring: boolean
    recurrencePattern: string | null
    recurrenceGroupId: string | null
    parentRequestId: number | null
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: Vehicle_RequestsCountAggregateOutputType | null
    _avg: Vehicle_RequestsAvgAggregateOutputType | null
    _sum: Vehicle_RequestsSumAggregateOutputType | null
    _min: Vehicle_RequestsMinAggregateOutputType | null
    _max: Vehicle_RequestsMaxAggregateOutputType | null
  }

  type GetVehicle_RequestsGroupByPayload<T extends Vehicle_RequestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_RequestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_RequestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_RequestsGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_RequestsGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_RequestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestId?: boolean
    requesterStaffId?: boolean
    purpose?: boolean
    destination?: boolean
    province?: boolean
    refOrderNumber?: boolean
    refOrderDate?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    passengerCount?: boolean
    passengerNames?: boolean
    carId?: boolean
    driverId?: boolean
    status?: boolean
    startOdometer?: boolean
    endOdometer?: boolean
    startOdometerPhoto?: boolean
    endOdometerPhoto?: boolean
    actualDistance?: boolean
    departureRecordedAt?: boolean
    arrivalRecordedAt?: boolean
    isRecurring?: boolean
    recurrencePattern?: boolean
    recurrenceGroupId?: boolean
    parentRequestId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Vehicle_Requests$carArgs<ExtArgs>
    driver?: boolean | Vehicle_Requests$driverArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle_Requests$fuelLogsArgs<ExtArgs>
    _count?: boolean | Vehicle_RequestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Requests"]>


  export type Vehicle_RequestsSelectScalar = {
    requestId?: boolean
    requesterStaffId?: boolean
    purpose?: boolean
    destination?: boolean
    province?: boolean
    refOrderNumber?: boolean
    refOrderDate?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    passengerCount?: boolean
    passengerNames?: boolean
    carId?: boolean
    driverId?: boolean
    status?: boolean
    startOdometer?: boolean
    endOdometer?: boolean
    startOdometerPhoto?: boolean
    endOdometerPhoto?: boolean
    actualDistance?: boolean
    departureRecordedAt?: boolean
    arrivalRecordedAt?: boolean
    isRecurring?: boolean
    recurrencePattern?: boolean
    recurrenceGroupId?: boolean
    parentRequestId?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_RequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Vehicle_Requests$carArgs<ExtArgs>
    driver?: boolean | Vehicle_Requests$driverArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle_Requests$fuelLogsArgs<ExtArgs>
    _count?: boolean | Vehicle_RequestsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Vehicle_RequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Requests"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs> | null
      driver: Prisma.$Master_DriversPayload<ExtArgs> | null
      fuelLogs: Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      requestId: number
      requesterStaffId: number
      purpose: string
      destination: string
      province: string
      refOrderNumber: string | null
      refOrderDate: Date | null
      startDateTime: Date
      endDateTime: Date
      passengerCount: number
      passengerNames: string
      carId: number | null
      driverId: number | null
      status: string
      startOdometer: number | null
      endOdometer: number | null
      startOdometerPhoto: string | null
      endOdometerPhoto: string | null
      actualDistance: number | null
      departureRecordedAt: Date | null
      arrivalRecordedAt: Date | null
      isRecurring: boolean
      recurrencePattern: string | null
      recurrenceGroupId: string | null
      parentRequestId: number | null
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle_Requests"]>
    composites: {}
  }

  type Vehicle_RequestsGetPayload<S extends boolean | null | undefined | Vehicle_RequestsDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_RequestsPayload, S>

  type Vehicle_RequestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Vehicle_RequestsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_RequestsCountAggregateInputType | true
    }

  export interface Vehicle_RequestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Requests'], meta: { name: 'Vehicle_Requests' } }
    /**
     * Find zero or one Vehicle_Requests that matches the filter.
     * @param {Vehicle_RequestsFindUniqueArgs} args - Arguments to find a Vehicle_Requests
     * @example
     * // Get one Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_RequestsFindUniqueArgs>(args: SelectSubset<T, Vehicle_RequestsFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_Requests that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Vehicle_RequestsFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Requests
     * @example
     * // Get one Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_RequestsFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_RequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsFindFirstArgs} args - Arguments to find a Vehicle_Requests
     * @example
     * // Get one Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_RequestsFindFirstArgs>(args?: SelectSubset<T, Vehicle_RequestsFindFirstArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_Requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Requests
     * @example
     * // Get one Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_RequestsFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_RequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findMany()
     * 
     * // Get first 10 Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.findMany({ take: 10 })
     * 
     * // Only select the `requestId`
     * const vehicle_RequestsWithRequestIdOnly = await prisma.vehicle_Requests.findMany({ select: { requestId: true } })
     * 
     */
    findMany<T extends Vehicle_RequestsFindManyArgs>(args?: SelectSubset<T, Vehicle_RequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_Requests.
     * @param {Vehicle_RequestsCreateArgs} args - Arguments to create a Vehicle_Requests.
     * @example
     * // Create one Vehicle_Requests
     * const Vehicle_Requests = await prisma.vehicle_Requests.create({
     *   data: {
     *     // ... data to create a Vehicle_Requests
     *   }
     * })
     * 
     */
    create<T extends Vehicle_RequestsCreateArgs>(args: SelectSubset<T, Vehicle_RequestsCreateArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_Requests.
     * @param {Vehicle_RequestsCreateManyArgs} args - Arguments to create many Vehicle_Requests.
     * @example
     * // Create many Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_RequestsCreateManyArgs>(args?: SelectSubset<T, Vehicle_RequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Requests.
     * @param {Vehicle_RequestsDeleteArgs} args - Arguments to delete one Vehicle_Requests.
     * @example
     * // Delete one Vehicle_Requests
     * const Vehicle_Requests = await prisma.vehicle_Requests.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Requests
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_RequestsDeleteArgs>(args: SelectSubset<T, Vehicle_RequestsDeleteArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_Requests.
     * @param {Vehicle_RequestsUpdateArgs} args - Arguments to update one Vehicle_Requests.
     * @example
     * // Update one Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_RequestsUpdateArgs>(args: SelectSubset<T, Vehicle_RequestsUpdateArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_Requests.
     * @param {Vehicle_RequestsDeleteManyArgs} args - Arguments to filter Vehicle_Requests to delete.
     * @example
     * // Delete a few Vehicle_Requests
     * const { count } = await prisma.vehicle_Requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_RequestsDeleteManyArgs>(args?: SelectSubset<T, Vehicle_RequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_RequestsUpdateManyArgs>(args: SelectSubset<T, Vehicle_RequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Requests.
     * @param {Vehicle_RequestsUpsertArgs} args - Arguments to update or create a Vehicle_Requests.
     * @example
     * // Update or create a Vehicle_Requests
     * const vehicle_Requests = await prisma.vehicle_Requests.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Requests we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_RequestsUpsertArgs>(args: SelectSubset<T, Vehicle_RequestsUpsertArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsCountArgs} args - Arguments to filter Vehicle_Requests to count.
     * @example
     * // Count the number of Vehicle_Requests
     * const count = await prisma.vehicle_Requests.count({
     *   where: {
     *     // ... the filter for the Vehicle_Requests we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_RequestsCountArgs>(
      args?: Subset<T, Vehicle_RequestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_RequestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_RequestsAggregateArgs>(args: Subset<T, Vehicle_RequestsAggregateArgs>): Prisma.PrismaPromise<GetVehicle_RequestsAggregateType<T>>

    /**
     * Group by Vehicle_Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_RequestsGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_RequestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_RequestsGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_RequestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_RequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_RequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Requests model
   */
  readonly fields: Vehicle_RequestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_RequestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends Vehicle_Requests$carArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_Requests$carArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    driver<T extends Vehicle_Requests$driverArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_Requests$driverArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    fuelLogs<T extends Vehicle_Requests$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_Requests$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Requests model
   */ 
  interface Vehicle_RequestsFieldRefs {
    readonly requestId: FieldRef<"Vehicle_Requests", 'Int'>
    readonly requesterStaffId: FieldRef<"Vehicle_Requests", 'Int'>
    readonly purpose: FieldRef<"Vehicle_Requests", 'String'>
    readonly destination: FieldRef<"Vehicle_Requests", 'String'>
    readonly province: FieldRef<"Vehicle_Requests", 'String'>
    readonly refOrderNumber: FieldRef<"Vehicle_Requests", 'String'>
    readonly refOrderDate: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly startDateTime: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly endDateTime: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly passengerCount: FieldRef<"Vehicle_Requests", 'Int'>
    readonly passengerNames: FieldRef<"Vehicle_Requests", 'String'>
    readonly carId: FieldRef<"Vehicle_Requests", 'Int'>
    readonly driverId: FieldRef<"Vehicle_Requests", 'Int'>
    readonly status: FieldRef<"Vehicle_Requests", 'String'>
    readonly startOdometer: FieldRef<"Vehicle_Requests", 'Int'>
    readonly endOdometer: FieldRef<"Vehicle_Requests", 'Int'>
    readonly startOdometerPhoto: FieldRef<"Vehicle_Requests", 'String'>
    readonly endOdometerPhoto: FieldRef<"Vehicle_Requests", 'String'>
    readonly actualDistance: FieldRef<"Vehicle_Requests", 'Int'>
    readonly departureRecordedAt: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly arrivalRecordedAt: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly isRecurring: FieldRef<"Vehicle_Requests", 'Boolean'>
    readonly recurrencePattern: FieldRef<"Vehicle_Requests", 'String'>
    readonly recurrenceGroupId: FieldRef<"Vehicle_Requests", 'String'>
    readonly parentRequestId: FieldRef<"Vehicle_Requests", 'Int'>
    readonly rejectionReason: FieldRef<"Vehicle_Requests", 'String'>
    readonly createdAt: FieldRef<"Vehicle_Requests", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle_Requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Requests findUnique
   */
  export type Vehicle_RequestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Requests to fetch.
     */
    where: Vehicle_RequestsWhereUniqueInput
  }

  /**
   * Vehicle_Requests findUniqueOrThrow
   */
  export type Vehicle_RequestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Requests to fetch.
     */
    where: Vehicle_RequestsWhereUniqueInput
  }

  /**
   * Vehicle_Requests findFirst
   */
  export type Vehicle_RequestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Requests to fetch.
     */
    where?: Vehicle_RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Requests to fetch.
     */
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Requests.
     */
    cursor?: Vehicle_RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Requests.
     */
    distinct?: Vehicle_RequestsScalarFieldEnum | Vehicle_RequestsScalarFieldEnum[]
  }

  /**
   * Vehicle_Requests findFirstOrThrow
   */
  export type Vehicle_RequestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Requests to fetch.
     */
    where?: Vehicle_RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Requests to fetch.
     */
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Requests.
     */
    cursor?: Vehicle_RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Requests.
     */
    distinct?: Vehicle_RequestsScalarFieldEnum | Vehicle_RequestsScalarFieldEnum[]
  }

  /**
   * Vehicle_Requests findMany
   */
  export type Vehicle_RequestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Requests to fetch.
     */
    where?: Vehicle_RequestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Requests to fetch.
     */
    orderBy?: Vehicle_RequestsOrderByWithRelationInput | Vehicle_RequestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Requests.
     */
    cursor?: Vehicle_RequestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Requests.
     */
    skip?: number
    distinct?: Vehicle_RequestsScalarFieldEnum | Vehicle_RequestsScalarFieldEnum[]
  }

  /**
   * Vehicle_Requests create
   */
  export type Vehicle_RequestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Requests.
     */
    data: XOR<Vehicle_RequestsCreateInput, Vehicle_RequestsUncheckedCreateInput>
  }

  /**
   * Vehicle_Requests createMany
   */
  export type Vehicle_RequestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Requests.
     */
    data: Vehicle_RequestsCreateManyInput | Vehicle_RequestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Requests update
   */
  export type Vehicle_RequestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Requests.
     */
    data: XOR<Vehicle_RequestsUpdateInput, Vehicle_RequestsUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Requests to update.
     */
    where: Vehicle_RequestsWhereUniqueInput
  }

  /**
   * Vehicle_Requests updateMany
   */
  export type Vehicle_RequestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Requests.
     */
    data: XOR<Vehicle_RequestsUpdateManyMutationInput, Vehicle_RequestsUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Requests to update
     */
    where?: Vehicle_RequestsWhereInput
  }

  /**
   * Vehicle_Requests upsert
   */
  export type Vehicle_RequestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Requests to update in case it exists.
     */
    where: Vehicle_RequestsWhereUniqueInput
    /**
     * In case the Vehicle_Requests found by the `where` argument doesn't exist, create a new Vehicle_Requests with this data.
     */
    create: XOR<Vehicle_RequestsCreateInput, Vehicle_RequestsUncheckedCreateInput>
    /**
     * In case the Vehicle_Requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_RequestsUpdateInput, Vehicle_RequestsUncheckedUpdateInput>
  }

  /**
   * Vehicle_Requests delete
   */
  export type Vehicle_RequestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Requests to delete.
     */
    where: Vehicle_RequestsWhereUniqueInput
  }

  /**
   * Vehicle_Requests deleteMany
   */
  export type Vehicle_RequestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Requests to delete
     */
    where?: Vehicle_RequestsWhereInput
  }

  /**
   * Vehicle_Requests.car
   */
  export type Vehicle_Requests$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    where?: Master_VehiclesWhereInput
  }

  /**
   * Vehicle_Requests.driver
   */
  export type Vehicle_Requests$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Drivers
     */
    select?: Master_DriversSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_DriversInclude<ExtArgs> | null
    where?: Master_DriversWhereInput
  }

  /**
   * Vehicle_Requests.fuelLogs
   */
  export type Vehicle_Requests$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    where?: Vehicle_Fuel_LogsWhereInput
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_Fuel_LogsScalarFieldEnum | Vehicle_Fuel_LogsScalarFieldEnum[]
  }

  /**
   * Vehicle_Requests without action
   */
  export type Vehicle_RequestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
  }


  /**
   * Model Driver_Leaves
   */

  export type AggregateDriver_Leaves = {
    _count: Driver_LeavesCountAggregateOutputType | null
    _avg: Driver_LeavesAvgAggregateOutputType | null
    _sum: Driver_LeavesSumAggregateOutputType | null
    _min: Driver_LeavesMinAggregateOutputType | null
    _max: Driver_LeavesMaxAggregateOutputType | null
  }

  export type Driver_LeavesAvgAggregateOutputType = {
    leaveId: number | null
    driverId: number | null
  }

  export type Driver_LeavesSumAggregateOutputType = {
    leaveId: number | null
    driverId: number | null
  }

  export type Driver_LeavesMinAggregateOutputType = {
    leaveId: number | null
    driverId: number | null
    startDate: Date | null
    endDate: Date | null
    leaveType: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Driver_LeavesMaxAggregateOutputType = {
    leaveId: number | null
    driverId: number | null
    startDate: Date | null
    endDate: Date | null
    leaveType: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Driver_LeavesCountAggregateOutputType = {
    leaveId: number
    driverId: number
    startDate: number
    endDate: number
    leaveType: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Driver_LeavesAvgAggregateInputType = {
    leaveId?: true
    driverId?: true
  }

  export type Driver_LeavesSumAggregateInputType = {
    leaveId?: true
    driverId?: true
  }

  export type Driver_LeavesMinAggregateInputType = {
    leaveId?: true
    driverId?: true
    startDate?: true
    endDate?: true
    leaveType?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Driver_LeavesMaxAggregateInputType = {
    leaveId?: true
    driverId?: true
    startDate?: true
    endDate?: true
    leaveType?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Driver_LeavesCountAggregateInputType = {
    leaveId?: true
    driverId?: true
    startDate?: true
    endDate?: true
    leaveType?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Driver_LeavesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver_Leaves to aggregate.
     */
    where?: Driver_LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Driver_Leaves to fetch.
     */
    orderBy?: Driver_LeavesOrderByWithRelationInput | Driver_LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Driver_LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Driver_Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Driver_Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Driver_Leaves
    **/
    _count?: true | Driver_LeavesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Driver_LeavesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Driver_LeavesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Driver_LeavesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Driver_LeavesMaxAggregateInputType
  }

  export type GetDriver_LeavesAggregateType<T extends Driver_LeavesAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver_Leaves]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver_Leaves[P]>
      : GetScalarType<T[P], AggregateDriver_Leaves[P]>
  }




  export type Driver_LeavesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Driver_LeavesWhereInput
    orderBy?: Driver_LeavesOrderByWithAggregationInput | Driver_LeavesOrderByWithAggregationInput[]
    by: Driver_LeavesScalarFieldEnum[] | Driver_LeavesScalarFieldEnum
    having?: Driver_LeavesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Driver_LeavesCountAggregateInputType | true
    _avg?: Driver_LeavesAvgAggregateInputType
    _sum?: Driver_LeavesSumAggregateInputType
    _min?: Driver_LeavesMinAggregateInputType
    _max?: Driver_LeavesMaxAggregateInputType
  }

  export type Driver_LeavesGroupByOutputType = {
    leaveId: number
    driverId: number
    startDate: Date
    endDate: Date
    leaveType: string
    reason: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: Driver_LeavesCountAggregateOutputType | null
    _avg: Driver_LeavesAvgAggregateOutputType | null
    _sum: Driver_LeavesSumAggregateOutputType | null
    _min: Driver_LeavesMinAggregateOutputType | null
    _max: Driver_LeavesMaxAggregateOutputType | null
  }

  type GetDriver_LeavesGroupByPayload<T extends Driver_LeavesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Driver_LeavesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Driver_LeavesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Driver_LeavesGroupByOutputType[P]>
            : GetScalarType<T[P], Driver_LeavesGroupByOutputType[P]>
        }
      >
    >


  export type Driver_LeavesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leaveId?: boolean
    driverId?: boolean
    startDate?: boolean
    endDate?: boolean
    leaveType?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Master_DriversDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver_Leaves"]>


  export type Driver_LeavesSelectScalar = {
    leaveId?: boolean
    driverId?: boolean
    startDate?: boolean
    endDate?: boolean
    leaveType?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Driver_LeavesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Master_DriversDefaultArgs<ExtArgs>
  }

  export type $Driver_LeavesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver_Leaves"
    objects: {
      driver: Prisma.$Master_DriversPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      leaveId: number
      driverId: number
      startDate: Date
      endDate: Date
      leaveType: string
      reason: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver_Leaves"]>
    composites: {}
  }

  type Driver_LeavesGetPayload<S extends boolean | null | undefined | Driver_LeavesDefaultArgs> = $Result.GetResult<Prisma.$Driver_LeavesPayload, S>

  type Driver_LeavesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Driver_LeavesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Driver_LeavesCountAggregateInputType | true
    }

  export interface Driver_LeavesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver_Leaves'], meta: { name: 'Driver_Leaves' } }
    /**
     * Find zero or one Driver_Leaves that matches the filter.
     * @param {Driver_LeavesFindUniqueArgs} args - Arguments to find a Driver_Leaves
     * @example
     * // Get one Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Driver_LeavesFindUniqueArgs>(args: SelectSubset<T, Driver_LeavesFindUniqueArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Driver_Leaves that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Driver_LeavesFindUniqueOrThrowArgs} args - Arguments to find a Driver_Leaves
     * @example
     * // Get one Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Driver_LeavesFindUniqueOrThrowArgs>(args: SelectSubset<T, Driver_LeavesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Driver_Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesFindFirstArgs} args - Arguments to find a Driver_Leaves
     * @example
     * // Get one Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Driver_LeavesFindFirstArgs>(args?: SelectSubset<T, Driver_LeavesFindFirstArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Driver_Leaves that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesFindFirstOrThrowArgs} args - Arguments to find a Driver_Leaves
     * @example
     * // Get one Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Driver_LeavesFindFirstOrThrowArgs>(args?: SelectSubset<T, Driver_LeavesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Driver_Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findMany()
     * 
     * // Get first 10 Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.findMany({ take: 10 })
     * 
     * // Only select the `leaveId`
     * const driver_LeavesWithLeaveIdOnly = await prisma.driver_Leaves.findMany({ select: { leaveId: true } })
     * 
     */
    findMany<T extends Driver_LeavesFindManyArgs>(args?: SelectSubset<T, Driver_LeavesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Driver_Leaves.
     * @param {Driver_LeavesCreateArgs} args - Arguments to create a Driver_Leaves.
     * @example
     * // Create one Driver_Leaves
     * const Driver_Leaves = await prisma.driver_Leaves.create({
     *   data: {
     *     // ... data to create a Driver_Leaves
     *   }
     * })
     * 
     */
    create<T extends Driver_LeavesCreateArgs>(args: SelectSubset<T, Driver_LeavesCreateArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Driver_Leaves.
     * @param {Driver_LeavesCreateManyArgs} args - Arguments to create many Driver_Leaves.
     * @example
     * // Create many Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Driver_LeavesCreateManyArgs>(args?: SelectSubset<T, Driver_LeavesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver_Leaves.
     * @param {Driver_LeavesDeleteArgs} args - Arguments to delete one Driver_Leaves.
     * @example
     * // Delete one Driver_Leaves
     * const Driver_Leaves = await prisma.driver_Leaves.delete({
     *   where: {
     *     // ... filter to delete one Driver_Leaves
     *   }
     * })
     * 
     */
    delete<T extends Driver_LeavesDeleteArgs>(args: SelectSubset<T, Driver_LeavesDeleteArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Driver_Leaves.
     * @param {Driver_LeavesUpdateArgs} args - Arguments to update one Driver_Leaves.
     * @example
     * // Update one Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Driver_LeavesUpdateArgs>(args: SelectSubset<T, Driver_LeavesUpdateArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Driver_Leaves.
     * @param {Driver_LeavesDeleteManyArgs} args - Arguments to filter Driver_Leaves to delete.
     * @example
     * // Delete a few Driver_Leaves
     * const { count } = await prisma.driver_Leaves.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Driver_LeavesDeleteManyArgs>(args?: SelectSubset<T, Driver_LeavesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Driver_Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Driver_LeavesUpdateManyArgs>(args: SelectSubset<T, Driver_LeavesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver_Leaves.
     * @param {Driver_LeavesUpsertArgs} args - Arguments to update or create a Driver_Leaves.
     * @example
     * // Update or create a Driver_Leaves
     * const driver_Leaves = await prisma.driver_Leaves.upsert({
     *   create: {
     *     // ... data to create a Driver_Leaves
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver_Leaves we want to update
     *   }
     * })
     */
    upsert<T extends Driver_LeavesUpsertArgs>(args: SelectSubset<T, Driver_LeavesUpsertArgs<ExtArgs>>): Prisma__Driver_LeavesClient<$Result.GetResult<Prisma.$Driver_LeavesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Driver_Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesCountArgs} args - Arguments to filter Driver_Leaves to count.
     * @example
     * // Count the number of Driver_Leaves
     * const count = await prisma.driver_Leaves.count({
     *   where: {
     *     // ... the filter for the Driver_Leaves we want to count
     *   }
     * })
    **/
    count<T extends Driver_LeavesCountArgs>(
      args?: Subset<T, Driver_LeavesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Driver_LeavesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver_Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Driver_LeavesAggregateArgs>(args: Subset<T, Driver_LeavesAggregateArgs>): Prisma.PrismaPromise<GetDriver_LeavesAggregateType<T>>

    /**
     * Group by Driver_Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Driver_LeavesGroupByArgs} args - Group by arguments.
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
      T extends Driver_LeavesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Driver_LeavesGroupByArgs['orderBy'] }
        : { orderBy?: Driver_LeavesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Driver_LeavesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriver_LeavesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver_Leaves model
   */
  readonly fields: Driver_LeavesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver_Leaves.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Driver_LeavesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends Master_DriversDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Master_DriversDefaultArgs<ExtArgs>>): Prisma__Master_DriversClient<$Result.GetResult<Prisma.$Master_DriversPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver_Leaves model
   */ 
  interface Driver_LeavesFieldRefs {
    readonly leaveId: FieldRef<"Driver_Leaves", 'Int'>
    readonly driverId: FieldRef<"Driver_Leaves", 'Int'>
    readonly startDate: FieldRef<"Driver_Leaves", 'DateTime'>
    readonly endDate: FieldRef<"Driver_Leaves", 'DateTime'>
    readonly leaveType: FieldRef<"Driver_Leaves", 'String'>
    readonly reason: FieldRef<"Driver_Leaves", 'String'>
    readonly status: FieldRef<"Driver_Leaves", 'String'>
    readonly createdAt: FieldRef<"Driver_Leaves", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver_Leaves", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver_Leaves findUnique
   */
  export type Driver_LeavesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter, which Driver_Leaves to fetch.
     */
    where: Driver_LeavesWhereUniqueInput
  }

  /**
   * Driver_Leaves findUniqueOrThrow
   */
  export type Driver_LeavesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter, which Driver_Leaves to fetch.
     */
    where: Driver_LeavesWhereUniqueInput
  }

  /**
   * Driver_Leaves findFirst
   */
  export type Driver_LeavesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter, which Driver_Leaves to fetch.
     */
    where?: Driver_LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Driver_Leaves to fetch.
     */
    orderBy?: Driver_LeavesOrderByWithRelationInput | Driver_LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Driver_Leaves.
     */
    cursor?: Driver_LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Driver_Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Driver_Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Driver_Leaves.
     */
    distinct?: Driver_LeavesScalarFieldEnum | Driver_LeavesScalarFieldEnum[]
  }

  /**
   * Driver_Leaves findFirstOrThrow
   */
  export type Driver_LeavesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter, which Driver_Leaves to fetch.
     */
    where?: Driver_LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Driver_Leaves to fetch.
     */
    orderBy?: Driver_LeavesOrderByWithRelationInput | Driver_LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Driver_Leaves.
     */
    cursor?: Driver_LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Driver_Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Driver_Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Driver_Leaves.
     */
    distinct?: Driver_LeavesScalarFieldEnum | Driver_LeavesScalarFieldEnum[]
  }

  /**
   * Driver_Leaves findMany
   */
  export type Driver_LeavesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter, which Driver_Leaves to fetch.
     */
    where?: Driver_LeavesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Driver_Leaves to fetch.
     */
    orderBy?: Driver_LeavesOrderByWithRelationInput | Driver_LeavesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Driver_Leaves.
     */
    cursor?: Driver_LeavesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Driver_Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Driver_Leaves.
     */
    skip?: number
    distinct?: Driver_LeavesScalarFieldEnum | Driver_LeavesScalarFieldEnum[]
  }

  /**
   * Driver_Leaves create
   */
  export type Driver_LeavesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver_Leaves.
     */
    data: XOR<Driver_LeavesCreateInput, Driver_LeavesUncheckedCreateInput>
  }

  /**
   * Driver_Leaves createMany
   */
  export type Driver_LeavesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Driver_Leaves.
     */
    data: Driver_LeavesCreateManyInput | Driver_LeavesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver_Leaves update
   */
  export type Driver_LeavesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver_Leaves.
     */
    data: XOR<Driver_LeavesUpdateInput, Driver_LeavesUncheckedUpdateInput>
    /**
     * Choose, which Driver_Leaves to update.
     */
    where: Driver_LeavesWhereUniqueInput
  }

  /**
   * Driver_Leaves updateMany
   */
  export type Driver_LeavesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Driver_Leaves.
     */
    data: XOR<Driver_LeavesUpdateManyMutationInput, Driver_LeavesUncheckedUpdateManyInput>
    /**
     * Filter which Driver_Leaves to update
     */
    where?: Driver_LeavesWhereInput
  }

  /**
   * Driver_Leaves upsert
   */
  export type Driver_LeavesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver_Leaves to update in case it exists.
     */
    where: Driver_LeavesWhereUniqueInput
    /**
     * In case the Driver_Leaves found by the `where` argument doesn't exist, create a new Driver_Leaves with this data.
     */
    create: XOR<Driver_LeavesCreateInput, Driver_LeavesUncheckedCreateInput>
    /**
     * In case the Driver_Leaves was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Driver_LeavesUpdateInput, Driver_LeavesUncheckedUpdateInput>
  }

  /**
   * Driver_Leaves delete
   */
  export type Driver_LeavesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
    /**
     * Filter which Driver_Leaves to delete.
     */
    where: Driver_LeavesWhereUniqueInput
  }

  /**
   * Driver_Leaves deleteMany
   */
  export type Driver_LeavesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver_Leaves to delete
     */
    where?: Driver_LeavesWhereInput
  }

  /**
   * Driver_Leaves without action
   */
  export type Driver_LeavesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver_Leaves
     */
    select?: Driver_LeavesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Driver_LeavesInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Maintenances
   */

  export type AggregateVehicle_Maintenances = {
    _count: Vehicle_MaintenancesCountAggregateOutputType | null
    _avg: Vehicle_MaintenancesAvgAggregateOutputType | null
    _sum: Vehicle_MaintenancesSumAggregateOutputType | null
    _min: Vehicle_MaintenancesMinAggregateOutputType | null
    _max: Vehicle_MaintenancesMaxAggregateOutputType | null
  }

  export type Vehicle_MaintenancesAvgAggregateOutputType = {
    maintenanceId: number | null
    carId: number | null
    cost: number | null
  }

  export type Vehicle_MaintenancesSumAggregateOutputType = {
    maintenanceId: number | null
    carId: number | null
    cost: number | null
  }

  export type Vehicle_MaintenancesMinAggregateOutputType = {
    maintenanceId: number | null
    carId: number | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    cost: number | null
    details: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_MaintenancesMaxAggregateOutputType = {
    maintenanceId: number | null
    carId: number | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    cost: number | null
    details: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_MaintenancesCountAggregateOutputType = {
    maintenanceId: number
    carId: number
    startDate: number
    endDate: number
    type: number
    cost: number
    details: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Vehicle_MaintenancesAvgAggregateInputType = {
    maintenanceId?: true
    carId?: true
    cost?: true
  }

  export type Vehicle_MaintenancesSumAggregateInputType = {
    maintenanceId?: true
    carId?: true
    cost?: true
  }

  export type Vehicle_MaintenancesMinAggregateInputType = {
    maintenanceId?: true
    carId?: true
    startDate?: true
    endDate?: true
    type?: true
    cost?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_MaintenancesMaxAggregateInputType = {
    maintenanceId?: true
    carId?: true
    startDate?: true
    endDate?: true
    type?: true
    cost?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_MaintenancesCountAggregateInputType = {
    maintenanceId?: true
    carId?: true
    startDate?: true
    endDate?: true
    type?: true
    cost?: true
    details?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Vehicle_MaintenancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Maintenances to aggregate.
     */
    where?: Vehicle_MaintenancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Maintenances to fetch.
     */
    orderBy?: Vehicle_MaintenancesOrderByWithRelationInput | Vehicle_MaintenancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_MaintenancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Maintenances
    **/
    _count?: true | Vehicle_MaintenancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_MaintenancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_MaintenancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_MaintenancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_MaintenancesMaxAggregateInputType
  }

  export type GetVehicle_MaintenancesAggregateType<T extends Vehicle_MaintenancesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Maintenances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Maintenances[P]>
      : GetScalarType<T[P], AggregateVehicle_Maintenances[P]>
  }




  export type Vehicle_MaintenancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_MaintenancesWhereInput
    orderBy?: Vehicle_MaintenancesOrderByWithAggregationInput | Vehicle_MaintenancesOrderByWithAggregationInput[]
    by: Vehicle_MaintenancesScalarFieldEnum[] | Vehicle_MaintenancesScalarFieldEnum
    having?: Vehicle_MaintenancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_MaintenancesCountAggregateInputType | true
    _avg?: Vehicle_MaintenancesAvgAggregateInputType
    _sum?: Vehicle_MaintenancesSumAggregateInputType
    _min?: Vehicle_MaintenancesMinAggregateInputType
    _max?: Vehicle_MaintenancesMaxAggregateInputType
  }

  export type Vehicle_MaintenancesGroupByOutputType = {
    maintenanceId: number
    carId: number
    startDate: Date
    endDate: Date
    type: string
    cost: number | null
    details: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: Vehicle_MaintenancesCountAggregateOutputType | null
    _avg: Vehicle_MaintenancesAvgAggregateOutputType | null
    _sum: Vehicle_MaintenancesSumAggregateOutputType | null
    _min: Vehicle_MaintenancesMinAggregateOutputType | null
    _max: Vehicle_MaintenancesMaxAggregateOutputType | null
  }

  type GetVehicle_MaintenancesGroupByPayload<T extends Vehicle_MaintenancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_MaintenancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_MaintenancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_MaintenancesGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_MaintenancesGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_MaintenancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenanceId?: boolean
    carId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    cost?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Maintenances"]>


  export type Vehicle_MaintenancesSelectScalar = {
    maintenanceId?: boolean
    carId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    cost?: boolean
    details?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_MaintenancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }

  export type $Vehicle_MaintenancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Maintenances"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maintenanceId: number
      carId: number
      startDate: Date
      endDate: Date
      type: string
      cost: number | null
      details: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle_Maintenances"]>
    composites: {}
  }

  type Vehicle_MaintenancesGetPayload<S extends boolean | null | undefined | Vehicle_MaintenancesDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_MaintenancesPayload, S>

  type Vehicle_MaintenancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Vehicle_MaintenancesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_MaintenancesCountAggregateInputType | true
    }

  export interface Vehicle_MaintenancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Maintenances'], meta: { name: 'Vehicle_Maintenances' } }
    /**
     * Find zero or one Vehicle_Maintenances that matches the filter.
     * @param {Vehicle_MaintenancesFindUniqueArgs} args - Arguments to find a Vehicle_Maintenances
     * @example
     * // Get one Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_MaintenancesFindUniqueArgs>(args: SelectSubset<T, Vehicle_MaintenancesFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_Maintenances that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Vehicle_MaintenancesFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Maintenances
     * @example
     * // Get one Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_MaintenancesFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_MaintenancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesFindFirstArgs} args - Arguments to find a Vehicle_Maintenances
     * @example
     * // Get one Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_MaintenancesFindFirstArgs>(args?: SelectSubset<T, Vehicle_MaintenancesFindFirstArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_Maintenances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Maintenances
     * @example
     * // Get one Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_MaintenancesFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_MaintenancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findMany()
     * 
     * // Get first 10 Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.findMany({ take: 10 })
     * 
     * // Only select the `maintenanceId`
     * const vehicle_MaintenancesWithMaintenanceIdOnly = await prisma.vehicle_Maintenances.findMany({ select: { maintenanceId: true } })
     * 
     */
    findMany<T extends Vehicle_MaintenancesFindManyArgs>(args?: SelectSubset<T, Vehicle_MaintenancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesCreateArgs} args - Arguments to create a Vehicle_Maintenances.
     * @example
     * // Create one Vehicle_Maintenances
     * const Vehicle_Maintenances = await prisma.vehicle_Maintenances.create({
     *   data: {
     *     // ... data to create a Vehicle_Maintenances
     *   }
     * })
     * 
     */
    create<T extends Vehicle_MaintenancesCreateArgs>(args: SelectSubset<T, Vehicle_MaintenancesCreateArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesCreateManyArgs} args - Arguments to create many Vehicle_Maintenances.
     * @example
     * // Create many Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_MaintenancesCreateManyArgs>(args?: SelectSubset<T, Vehicle_MaintenancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesDeleteArgs} args - Arguments to delete one Vehicle_Maintenances.
     * @example
     * // Delete one Vehicle_Maintenances
     * const Vehicle_Maintenances = await prisma.vehicle_Maintenances.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Maintenances
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_MaintenancesDeleteArgs>(args: SelectSubset<T, Vehicle_MaintenancesDeleteArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesUpdateArgs} args - Arguments to update one Vehicle_Maintenances.
     * @example
     * // Update one Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_MaintenancesUpdateArgs>(args: SelectSubset<T, Vehicle_MaintenancesUpdateArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesDeleteManyArgs} args - Arguments to filter Vehicle_Maintenances to delete.
     * @example
     * // Delete a few Vehicle_Maintenances
     * const { count } = await prisma.vehicle_Maintenances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_MaintenancesDeleteManyArgs>(args?: SelectSubset<T, Vehicle_MaintenancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_MaintenancesUpdateManyArgs>(args: SelectSubset<T, Vehicle_MaintenancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Maintenances.
     * @param {Vehicle_MaintenancesUpsertArgs} args - Arguments to update or create a Vehicle_Maintenances.
     * @example
     * // Update or create a Vehicle_Maintenances
     * const vehicle_Maintenances = await prisma.vehicle_Maintenances.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Maintenances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Maintenances we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_MaintenancesUpsertArgs>(args: SelectSubset<T, Vehicle_MaintenancesUpsertArgs<ExtArgs>>): Prisma__Vehicle_MaintenancesClient<$Result.GetResult<Prisma.$Vehicle_MaintenancesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesCountArgs} args - Arguments to filter Vehicle_Maintenances to count.
     * @example
     * // Count the number of Vehicle_Maintenances
     * const count = await prisma.vehicle_Maintenances.count({
     *   where: {
     *     // ... the filter for the Vehicle_Maintenances we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_MaintenancesCountArgs>(
      args?: Subset<T, Vehicle_MaintenancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_MaintenancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_MaintenancesAggregateArgs>(args: Subset<T, Vehicle_MaintenancesAggregateArgs>): Prisma.PrismaPromise<GetVehicle_MaintenancesAggregateType<T>>

    /**
     * Group by Vehicle_Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_MaintenancesGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_MaintenancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_MaintenancesGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_MaintenancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_MaintenancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_MaintenancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Maintenances model
   */
  readonly fields: Vehicle_MaintenancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Maintenances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_MaintenancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends Master_VehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Master_VehiclesDefaultArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Maintenances model
   */ 
  interface Vehicle_MaintenancesFieldRefs {
    readonly maintenanceId: FieldRef<"Vehicle_Maintenances", 'Int'>
    readonly carId: FieldRef<"Vehicle_Maintenances", 'Int'>
    readonly startDate: FieldRef<"Vehicle_Maintenances", 'DateTime'>
    readonly endDate: FieldRef<"Vehicle_Maintenances", 'DateTime'>
    readonly type: FieldRef<"Vehicle_Maintenances", 'String'>
    readonly cost: FieldRef<"Vehicle_Maintenances", 'Float'>
    readonly details: FieldRef<"Vehicle_Maintenances", 'String'>
    readonly status: FieldRef<"Vehicle_Maintenances", 'String'>
    readonly createdAt: FieldRef<"Vehicle_Maintenances", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle_Maintenances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Maintenances findUnique
   */
  export type Vehicle_MaintenancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Maintenances to fetch.
     */
    where: Vehicle_MaintenancesWhereUniqueInput
  }

  /**
   * Vehicle_Maintenances findUniqueOrThrow
   */
  export type Vehicle_MaintenancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Maintenances to fetch.
     */
    where: Vehicle_MaintenancesWhereUniqueInput
  }

  /**
   * Vehicle_Maintenances findFirst
   */
  export type Vehicle_MaintenancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Maintenances to fetch.
     */
    where?: Vehicle_MaintenancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Maintenances to fetch.
     */
    orderBy?: Vehicle_MaintenancesOrderByWithRelationInput | Vehicle_MaintenancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Maintenances.
     */
    cursor?: Vehicle_MaintenancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Maintenances.
     */
    distinct?: Vehicle_MaintenancesScalarFieldEnum | Vehicle_MaintenancesScalarFieldEnum[]
  }

  /**
   * Vehicle_Maintenances findFirstOrThrow
   */
  export type Vehicle_MaintenancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Maintenances to fetch.
     */
    where?: Vehicle_MaintenancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Maintenances to fetch.
     */
    orderBy?: Vehicle_MaintenancesOrderByWithRelationInput | Vehicle_MaintenancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Maintenances.
     */
    cursor?: Vehicle_MaintenancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Maintenances.
     */
    distinct?: Vehicle_MaintenancesScalarFieldEnum | Vehicle_MaintenancesScalarFieldEnum[]
  }

  /**
   * Vehicle_Maintenances findMany
   */
  export type Vehicle_MaintenancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Maintenances to fetch.
     */
    where?: Vehicle_MaintenancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Maintenances to fetch.
     */
    orderBy?: Vehicle_MaintenancesOrderByWithRelationInput | Vehicle_MaintenancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Maintenances.
     */
    cursor?: Vehicle_MaintenancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Maintenances.
     */
    skip?: number
    distinct?: Vehicle_MaintenancesScalarFieldEnum | Vehicle_MaintenancesScalarFieldEnum[]
  }

  /**
   * Vehicle_Maintenances create
   */
  export type Vehicle_MaintenancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Maintenances.
     */
    data: XOR<Vehicle_MaintenancesCreateInput, Vehicle_MaintenancesUncheckedCreateInput>
  }

  /**
   * Vehicle_Maintenances createMany
   */
  export type Vehicle_MaintenancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Maintenances.
     */
    data: Vehicle_MaintenancesCreateManyInput | Vehicle_MaintenancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Maintenances update
   */
  export type Vehicle_MaintenancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Maintenances.
     */
    data: XOR<Vehicle_MaintenancesUpdateInput, Vehicle_MaintenancesUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Maintenances to update.
     */
    where: Vehicle_MaintenancesWhereUniqueInput
  }

  /**
   * Vehicle_Maintenances updateMany
   */
  export type Vehicle_MaintenancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Maintenances.
     */
    data: XOR<Vehicle_MaintenancesUpdateManyMutationInput, Vehicle_MaintenancesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Maintenances to update
     */
    where?: Vehicle_MaintenancesWhereInput
  }

  /**
   * Vehicle_Maintenances upsert
   */
  export type Vehicle_MaintenancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Maintenances to update in case it exists.
     */
    where: Vehicle_MaintenancesWhereUniqueInput
    /**
     * In case the Vehicle_Maintenances found by the `where` argument doesn't exist, create a new Vehicle_Maintenances with this data.
     */
    create: XOR<Vehicle_MaintenancesCreateInput, Vehicle_MaintenancesUncheckedCreateInput>
    /**
     * In case the Vehicle_Maintenances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_MaintenancesUpdateInput, Vehicle_MaintenancesUncheckedUpdateInput>
  }

  /**
   * Vehicle_Maintenances delete
   */
  export type Vehicle_MaintenancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Maintenances to delete.
     */
    where: Vehicle_MaintenancesWhereUniqueInput
  }

  /**
   * Vehicle_Maintenances deleteMany
   */
  export type Vehicle_MaintenancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Maintenances to delete
     */
    where?: Vehicle_MaintenancesWhereInput
  }

  /**
   * Vehicle_Maintenances without action
   */
  export type Vehicle_MaintenancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Maintenances
     */
    select?: Vehicle_MaintenancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_MaintenancesInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Fuel_Logs
   */

  export type AggregateVehicle_Fuel_Logs = {
    _count: Vehicle_Fuel_LogsCountAggregateOutputType | null
    _avg: Vehicle_Fuel_LogsAvgAggregateOutputType | null
    _sum: Vehicle_Fuel_LogsSumAggregateOutputType | null
    _min: Vehicle_Fuel_LogsMinAggregateOutputType | null
    _max: Vehicle_Fuel_LogsMaxAggregateOutputType | null
  }

  export type Vehicle_Fuel_LogsAvgAggregateOutputType = {
    fuelLogId: number | null
    amount: number | null
    carId: number | null
    liters: number | null
    odometerRead: number | null
    requestId: number | null
  }

  export type Vehicle_Fuel_LogsSumAggregateOutputType = {
    fuelLogId: number | null
    amount: number | null
    carId: number | null
    liters: number | null
    odometerRead: number | null
    requestId: number | null
  }

  export type Vehicle_Fuel_LogsMinAggregateOutputType = {
    fuelLogId: number | null
    amount: number | null
    fillDate: Date | null
    carId: number | null
    liters: number | null
    odometerRead: number | null
    requestId: number | null
    refSlip: string | null
    fuelProvider: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_Fuel_LogsMaxAggregateOutputType = {
    fuelLogId: number | null
    amount: number | null
    fillDate: Date | null
    carId: number | null
    liters: number | null
    odometerRead: number | null
    requestId: number | null
    refSlip: string | null
    fuelProvider: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_Fuel_LogsCountAggregateOutputType = {
    fuelLogId: number
    amount: number
    fillDate: number
    carId: number
    liters: number
    odometerRead: number
    requestId: number
    refSlip: number
    fuelProvider: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Vehicle_Fuel_LogsAvgAggregateInputType = {
    fuelLogId?: true
    amount?: true
    carId?: true
    liters?: true
    odometerRead?: true
    requestId?: true
  }

  export type Vehicle_Fuel_LogsSumAggregateInputType = {
    fuelLogId?: true
    amount?: true
    carId?: true
    liters?: true
    odometerRead?: true
    requestId?: true
  }

  export type Vehicle_Fuel_LogsMinAggregateInputType = {
    fuelLogId?: true
    amount?: true
    fillDate?: true
    carId?: true
    liters?: true
    odometerRead?: true
    requestId?: true
    refSlip?: true
    fuelProvider?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_Fuel_LogsMaxAggregateInputType = {
    fuelLogId?: true
    amount?: true
    fillDate?: true
    carId?: true
    liters?: true
    odometerRead?: true
    requestId?: true
    refSlip?: true
    fuelProvider?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_Fuel_LogsCountAggregateInputType = {
    fuelLogId?: true
    amount?: true
    fillDate?: true
    carId?: true
    liters?: true
    odometerRead?: true
    requestId?: true
    refSlip?: true
    fuelProvider?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Vehicle_Fuel_LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Fuel_Logs to aggregate.
     */
    where?: Vehicle_Fuel_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Logs to fetch.
     */
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Fuel_Logs
    **/
    _count?: true | Vehicle_Fuel_LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_Fuel_LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_Fuel_LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_Fuel_LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_Fuel_LogsMaxAggregateInputType
  }

  export type GetVehicle_Fuel_LogsAggregateType<T extends Vehicle_Fuel_LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Fuel_Logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Fuel_Logs[P]>
      : GetScalarType<T[P], AggregateVehicle_Fuel_Logs[P]>
  }




  export type Vehicle_Fuel_LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_Fuel_LogsWhereInput
    orderBy?: Vehicle_Fuel_LogsOrderByWithAggregationInput | Vehicle_Fuel_LogsOrderByWithAggregationInput[]
    by: Vehicle_Fuel_LogsScalarFieldEnum[] | Vehicle_Fuel_LogsScalarFieldEnum
    having?: Vehicle_Fuel_LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_Fuel_LogsCountAggregateInputType | true
    _avg?: Vehicle_Fuel_LogsAvgAggregateInputType
    _sum?: Vehicle_Fuel_LogsSumAggregateInputType
    _min?: Vehicle_Fuel_LogsMinAggregateInputType
    _max?: Vehicle_Fuel_LogsMaxAggregateInputType
  }

  export type Vehicle_Fuel_LogsGroupByOutputType = {
    fuelLogId: number
    amount: number
    fillDate: Date
    carId: number | null
    liters: number | null
    odometerRead: number | null
    requestId: number | null
    refSlip: string | null
    fuelProvider: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: Vehicle_Fuel_LogsCountAggregateOutputType | null
    _avg: Vehicle_Fuel_LogsAvgAggregateOutputType | null
    _sum: Vehicle_Fuel_LogsSumAggregateOutputType | null
    _min: Vehicle_Fuel_LogsMinAggregateOutputType | null
    _max: Vehicle_Fuel_LogsMaxAggregateOutputType | null
  }

  type GetVehicle_Fuel_LogsGroupByPayload<T extends Vehicle_Fuel_LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_Fuel_LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_Fuel_LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_Fuel_LogsGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_Fuel_LogsGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_Fuel_LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fuelLogId?: boolean
    amount?: boolean
    fillDate?: boolean
    carId?: boolean
    liters?: boolean
    odometerRead?: boolean
    requestId?: boolean
    refSlip?: boolean
    fuelProvider?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Vehicle_Fuel_Logs$carArgs<ExtArgs>
    request?: boolean | Vehicle_Fuel_Logs$requestArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Fuel_Logs"]>


  export type Vehicle_Fuel_LogsSelectScalar = {
    fuelLogId?: boolean
    amount?: boolean
    fillDate?: boolean
    carId?: boolean
    liters?: boolean
    odometerRead?: boolean
    requestId?: boolean
    refSlip?: boolean
    fuelProvider?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_Fuel_LogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Vehicle_Fuel_Logs$carArgs<ExtArgs>
    request?: boolean | Vehicle_Fuel_Logs$requestArgs<ExtArgs>
  }

  export type $Vehicle_Fuel_LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Fuel_Logs"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs> | null
      request: Prisma.$Vehicle_RequestsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      fuelLogId: number
      amount: number
      fillDate: Date
      carId: number | null
      liters: number | null
      odometerRead: number | null
      requestId: number | null
      refSlip: string | null
      fuelProvider: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle_Fuel_Logs"]>
    composites: {}
  }

  type Vehicle_Fuel_LogsGetPayload<S extends boolean | null | undefined | Vehicle_Fuel_LogsDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload, S>

  type Vehicle_Fuel_LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Vehicle_Fuel_LogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_Fuel_LogsCountAggregateInputType | true
    }

  export interface Vehicle_Fuel_LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Fuel_Logs'], meta: { name: 'Vehicle_Fuel_Logs' } }
    /**
     * Find zero or one Vehicle_Fuel_Logs that matches the filter.
     * @param {Vehicle_Fuel_LogsFindUniqueArgs} args - Arguments to find a Vehicle_Fuel_Logs
     * @example
     * // Get one Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_Fuel_LogsFindUniqueArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_Fuel_Logs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Vehicle_Fuel_LogsFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Fuel_Logs
     * @example
     * // Get one Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_Fuel_LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_Fuel_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsFindFirstArgs} args - Arguments to find a Vehicle_Fuel_Logs
     * @example
     * // Get one Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_Fuel_LogsFindFirstArgs>(args?: SelectSubset<T, Vehicle_Fuel_LogsFindFirstArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_Fuel_Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Fuel_Logs
     * @example
     * // Get one Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_Fuel_LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_Fuel_LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_Fuel_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findMany()
     * 
     * // Get first 10 Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.findMany({ take: 10 })
     * 
     * // Only select the `fuelLogId`
     * const vehicle_Fuel_LogsWithFuelLogIdOnly = await prisma.vehicle_Fuel_Logs.findMany({ select: { fuelLogId: true } })
     * 
     */
    findMany<T extends Vehicle_Fuel_LogsFindManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsCreateArgs} args - Arguments to create a Vehicle_Fuel_Logs.
     * @example
     * // Create one Vehicle_Fuel_Logs
     * const Vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.create({
     *   data: {
     *     // ... data to create a Vehicle_Fuel_Logs
     *   }
     * })
     * 
     */
    create<T extends Vehicle_Fuel_LogsCreateArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsCreateArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsCreateManyArgs} args - Arguments to create many Vehicle_Fuel_Logs.
     * @example
     * // Create many Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_Fuel_LogsCreateManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsDeleteArgs} args - Arguments to delete one Vehicle_Fuel_Logs.
     * @example
     * // Delete one Vehicle_Fuel_Logs
     * const Vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Fuel_Logs
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_Fuel_LogsDeleteArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsDeleteArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsUpdateArgs} args - Arguments to update one Vehicle_Fuel_Logs.
     * @example
     * // Update one Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_Fuel_LogsUpdateArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsUpdateArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsDeleteManyArgs} args - Arguments to filter Vehicle_Fuel_Logs to delete.
     * @example
     * // Delete a few Vehicle_Fuel_Logs
     * const { count } = await prisma.vehicle_Fuel_Logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_Fuel_LogsDeleteManyArgs>(args?: SelectSubset<T, Vehicle_Fuel_LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Fuel_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_Fuel_LogsUpdateManyArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Fuel_Logs.
     * @param {Vehicle_Fuel_LogsUpsertArgs} args - Arguments to update or create a Vehicle_Fuel_Logs.
     * @example
     * // Update or create a Vehicle_Fuel_Logs
     * const vehicle_Fuel_Logs = await prisma.vehicle_Fuel_Logs.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Fuel_Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Fuel_Logs we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_Fuel_LogsUpsertArgs>(args: SelectSubset<T, Vehicle_Fuel_LogsUpsertArgs<ExtArgs>>): Prisma__Vehicle_Fuel_LogsClient<$Result.GetResult<Prisma.$Vehicle_Fuel_LogsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_Fuel_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsCountArgs} args - Arguments to filter Vehicle_Fuel_Logs to count.
     * @example
     * // Count the number of Vehicle_Fuel_Logs
     * const count = await prisma.vehicle_Fuel_Logs.count({
     *   where: {
     *     // ... the filter for the Vehicle_Fuel_Logs we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_Fuel_LogsCountArgs>(
      args?: Subset<T, Vehicle_Fuel_LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_Fuel_LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Fuel_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_Fuel_LogsAggregateArgs>(args: Subset<T, Vehicle_Fuel_LogsAggregateArgs>): Prisma.PrismaPromise<GetVehicle_Fuel_LogsAggregateType<T>>

    /**
     * Group by Vehicle_Fuel_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_Fuel_LogsGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_Fuel_LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_Fuel_LogsGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_Fuel_LogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_Fuel_LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_Fuel_LogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Fuel_Logs model
   */
  readonly fields: Vehicle_Fuel_LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Fuel_Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_Fuel_LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends Vehicle_Fuel_Logs$carArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_Fuel_Logs$carArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    request<T extends Vehicle_Fuel_Logs$requestArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_Fuel_Logs$requestArgs<ExtArgs>>): Prisma__Vehicle_RequestsClient<$Result.GetResult<Prisma.$Vehicle_RequestsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Fuel_Logs model
   */ 
  interface Vehicle_Fuel_LogsFieldRefs {
    readonly fuelLogId: FieldRef<"Vehicle_Fuel_Logs", 'Int'>
    readonly amount: FieldRef<"Vehicle_Fuel_Logs", 'Float'>
    readonly fillDate: FieldRef<"Vehicle_Fuel_Logs", 'DateTime'>
    readonly carId: FieldRef<"Vehicle_Fuel_Logs", 'Int'>
    readonly liters: FieldRef<"Vehicle_Fuel_Logs", 'Float'>
    readonly odometerRead: FieldRef<"Vehicle_Fuel_Logs", 'Float'>
    readonly requestId: FieldRef<"Vehicle_Fuel_Logs", 'Int'>
    readonly refSlip: FieldRef<"Vehicle_Fuel_Logs", 'String'>
    readonly fuelProvider: FieldRef<"Vehicle_Fuel_Logs", 'String'>
    readonly notes: FieldRef<"Vehicle_Fuel_Logs", 'String'>
    readonly createdAt: FieldRef<"Vehicle_Fuel_Logs", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle_Fuel_Logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Fuel_Logs findUnique
   */
  export type Vehicle_Fuel_LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Logs to fetch.
     */
    where: Vehicle_Fuel_LogsWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Logs findUniqueOrThrow
   */
  export type Vehicle_Fuel_LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Logs to fetch.
     */
    where: Vehicle_Fuel_LogsWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Logs findFirst
   */
  export type Vehicle_Fuel_LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Logs to fetch.
     */
    where?: Vehicle_Fuel_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Logs to fetch.
     */
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Fuel_Logs.
     */
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Fuel_Logs.
     */
    distinct?: Vehicle_Fuel_LogsScalarFieldEnum | Vehicle_Fuel_LogsScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Logs findFirstOrThrow
   */
  export type Vehicle_Fuel_LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Logs to fetch.
     */
    where?: Vehicle_Fuel_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Logs to fetch.
     */
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Fuel_Logs.
     */
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Fuel_Logs.
     */
    distinct?: Vehicle_Fuel_LogsScalarFieldEnum | Vehicle_Fuel_LogsScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Logs findMany
   */
  export type Vehicle_Fuel_LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Fuel_Logs to fetch.
     */
    where?: Vehicle_Fuel_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Fuel_Logs to fetch.
     */
    orderBy?: Vehicle_Fuel_LogsOrderByWithRelationInput | Vehicle_Fuel_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Fuel_Logs.
     */
    cursor?: Vehicle_Fuel_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Fuel_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Fuel_Logs.
     */
    skip?: number
    distinct?: Vehicle_Fuel_LogsScalarFieldEnum | Vehicle_Fuel_LogsScalarFieldEnum[]
  }

  /**
   * Vehicle_Fuel_Logs create
   */
  export type Vehicle_Fuel_LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Fuel_Logs.
     */
    data: XOR<Vehicle_Fuel_LogsCreateInput, Vehicle_Fuel_LogsUncheckedCreateInput>
  }

  /**
   * Vehicle_Fuel_Logs createMany
   */
  export type Vehicle_Fuel_LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Fuel_Logs.
     */
    data: Vehicle_Fuel_LogsCreateManyInput | Vehicle_Fuel_LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Fuel_Logs update
   */
  export type Vehicle_Fuel_LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Fuel_Logs.
     */
    data: XOR<Vehicle_Fuel_LogsUpdateInput, Vehicle_Fuel_LogsUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Fuel_Logs to update.
     */
    where: Vehicle_Fuel_LogsWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Logs updateMany
   */
  export type Vehicle_Fuel_LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Fuel_Logs.
     */
    data: XOR<Vehicle_Fuel_LogsUpdateManyMutationInput, Vehicle_Fuel_LogsUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Fuel_Logs to update
     */
    where?: Vehicle_Fuel_LogsWhereInput
  }

  /**
   * Vehicle_Fuel_Logs upsert
   */
  export type Vehicle_Fuel_LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Fuel_Logs to update in case it exists.
     */
    where: Vehicle_Fuel_LogsWhereUniqueInput
    /**
     * In case the Vehicle_Fuel_Logs found by the `where` argument doesn't exist, create a new Vehicle_Fuel_Logs with this data.
     */
    create: XOR<Vehicle_Fuel_LogsCreateInput, Vehicle_Fuel_LogsUncheckedCreateInput>
    /**
     * In case the Vehicle_Fuel_Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_Fuel_LogsUpdateInput, Vehicle_Fuel_LogsUncheckedUpdateInput>
  }

  /**
   * Vehicle_Fuel_Logs delete
   */
  export type Vehicle_Fuel_LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Fuel_Logs to delete.
     */
    where: Vehicle_Fuel_LogsWhereUniqueInput
  }

  /**
   * Vehicle_Fuel_Logs deleteMany
   */
  export type Vehicle_Fuel_LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Fuel_Logs to delete
     */
    where?: Vehicle_Fuel_LogsWhereInput
  }

  /**
   * Vehicle_Fuel_Logs.car
   */
  export type Vehicle_Fuel_Logs$carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Master_Vehicles
     */
    select?: Master_VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Master_VehiclesInclude<ExtArgs> | null
    where?: Master_VehiclesWhereInput
  }

  /**
   * Vehicle_Fuel_Logs.request
   */
  export type Vehicle_Fuel_Logs$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Requests
     */
    select?: Vehicle_RequestsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_RequestsInclude<ExtArgs> | null
    where?: Vehicle_RequestsWhereInput
  }

  /**
   * Vehicle_Fuel_Logs without action
   */
  export type Vehicle_Fuel_LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Fuel_Logs
     */
    select?: Vehicle_Fuel_LogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_Fuel_LogsInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Taxes
   */

  export type AggregateVehicle_Taxes = {
    _count: Vehicle_TaxesCountAggregateOutputType | null
    _avg: Vehicle_TaxesAvgAggregateOutputType | null
    _sum: Vehicle_TaxesSumAggregateOutputType | null
    _min: Vehicle_TaxesMinAggregateOutputType | null
    _max: Vehicle_TaxesMaxAggregateOutputType | null
  }

  export type Vehicle_TaxesAvgAggregateOutputType = {
    taxId: number | null
    carId: number | null
    cost: number | null
  }

  export type Vehicle_TaxesSumAggregateOutputType = {
    taxId: number | null
    carId: number | null
    cost: number | null
  }

  export type Vehicle_TaxesMinAggregateOutputType = {
    taxId: number | null
    carId: number | null
    paymentDate: Date | null
    expiryDate: Date | null
    cost: number | null
    receiptNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_TaxesMaxAggregateOutputType = {
    taxId: number | null
    carId: number | null
    paymentDate: Date | null
    expiryDate: Date | null
    cost: number | null
    receiptNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_TaxesCountAggregateOutputType = {
    taxId: number
    carId: number
    paymentDate: number
    expiryDate: number
    cost: number
    receiptNumber: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Vehicle_TaxesAvgAggregateInputType = {
    taxId?: true
    carId?: true
    cost?: true
  }

  export type Vehicle_TaxesSumAggregateInputType = {
    taxId?: true
    carId?: true
    cost?: true
  }

  export type Vehicle_TaxesMinAggregateInputType = {
    taxId?: true
    carId?: true
    paymentDate?: true
    expiryDate?: true
    cost?: true
    receiptNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_TaxesMaxAggregateInputType = {
    taxId?: true
    carId?: true
    paymentDate?: true
    expiryDate?: true
    cost?: true
    receiptNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_TaxesCountAggregateInputType = {
    taxId?: true
    carId?: true
    paymentDate?: true
    expiryDate?: true
    cost?: true
    receiptNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Vehicle_TaxesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Taxes to aggregate.
     */
    where?: Vehicle_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Taxes to fetch.
     */
    orderBy?: Vehicle_TaxesOrderByWithRelationInput | Vehicle_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Taxes
    **/
    _count?: true | Vehicle_TaxesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_TaxesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_TaxesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_TaxesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_TaxesMaxAggregateInputType
  }

  export type GetVehicle_TaxesAggregateType<T extends Vehicle_TaxesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Taxes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Taxes[P]>
      : GetScalarType<T[P], AggregateVehicle_Taxes[P]>
  }




  export type Vehicle_TaxesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_TaxesWhereInput
    orderBy?: Vehicle_TaxesOrderByWithAggregationInput | Vehicle_TaxesOrderByWithAggregationInput[]
    by: Vehicle_TaxesScalarFieldEnum[] | Vehicle_TaxesScalarFieldEnum
    having?: Vehicle_TaxesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_TaxesCountAggregateInputType | true
    _avg?: Vehicle_TaxesAvgAggregateInputType
    _sum?: Vehicle_TaxesSumAggregateInputType
    _min?: Vehicle_TaxesMinAggregateInputType
    _max?: Vehicle_TaxesMaxAggregateInputType
  }

  export type Vehicle_TaxesGroupByOutputType = {
    taxId: number
    carId: number
    paymentDate: Date
    expiryDate: Date
    cost: number | null
    receiptNumber: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: Vehicle_TaxesCountAggregateOutputType | null
    _avg: Vehicle_TaxesAvgAggregateOutputType | null
    _sum: Vehicle_TaxesSumAggregateOutputType | null
    _min: Vehicle_TaxesMinAggregateOutputType | null
    _max: Vehicle_TaxesMaxAggregateOutputType | null
  }

  type GetVehicle_TaxesGroupByPayload<T extends Vehicle_TaxesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_TaxesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_TaxesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_TaxesGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_TaxesGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_TaxesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taxId?: boolean
    carId?: boolean
    paymentDate?: boolean
    expiryDate?: boolean
    cost?: boolean
    receiptNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Taxes"]>


  export type Vehicle_TaxesSelectScalar = {
    taxId?: boolean
    carId?: boolean
    paymentDate?: boolean
    expiryDate?: boolean
    cost?: boolean
    receiptNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_TaxesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }

  export type $Vehicle_TaxesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Taxes"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taxId: number
      carId: number
      paymentDate: Date
      expiryDate: Date
      cost: number | null
      receiptNumber: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle_Taxes"]>
    composites: {}
  }

  type Vehicle_TaxesGetPayload<S extends boolean | null | undefined | Vehicle_TaxesDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_TaxesPayload, S>

  type Vehicle_TaxesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Vehicle_TaxesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_TaxesCountAggregateInputType | true
    }

  export interface Vehicle_TaxesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Taxes'], meta: { name: 'Vehicle_Taxes' } }
    /**
     * Find zero or one Vehicle_Taxes that matches the filter.
     * @param {Vehicle_TaxesFindUniqueArgs} args - Arguments to find a Vehicle_Taxes
     * @example
     * // Get one Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_TaxesFindUniqueArgs>(args: SelectSubset<T, Vehicle_TaxesFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_Taxes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Vehicle_TaxesFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Taxes
     * @example
     * // Get one Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_TaxesFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_TaxesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesFindFirstArgs} args - Arguments to find a Vehicle_Taxes
     * @example
     * // Get one Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_TaxesFindFirstArgs>(args?: SelectSubset<T, Vehicle_TaxesFindFirstArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_Taxes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Taxes
     * @example
     * // Get one Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_TaxesFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_TaxesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_Taxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findMany()
     * 
     * // Get first 10 Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.findMany({ take: 10 })
     * 
     * // Only select the `taxId`
     * const vehicle_TaxesWithTaxIdOnly = await prisma.vehicle_Taxes.findMany({ select: { taxId: true } })
     * 
     */
    findMany<T extends Vehicle_TaxesFindManyArgs>(args?: SelectSubset<T, Vehicle_TaxesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_Taxes.
     * @param {Vehicle_TaxesCreateArgs} args - Arguments to create a Vehicle_Taxes.
     * @example
     * // Create one Vehicle_Taxes
     * const Vehicle_Taxes = await prisma.vehicle_Taxes.create({
     *   data: {
     *     // ... data to create a Vehicle_Taxes
     *   }
     * })
     * 
     */
    create<T extends Vehicle_TaxesCreateArgs>(args: SelectSubset<T, Vehicle_TaxesCreateArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_Taxes.
     * @param {Vehicle_TaxesCreateManyArgs} args - Arguments to create many Vehicle_Taxes.
     * @example
     * // Create many Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_TaxesCreateManyArgs>(args?: SelectSubset<T, Vehicle_TaxesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Taxes.
     * @param {Vehicle_TaxesDeleteArgs} args - Arguments to delete one Vehicle_Taxes.
     * @example
     * // Delete one Vehicle_Taxes
     * const Vehicle_Taxes = await prisma.vehicle_Taxes.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Taxes
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_TaxesDeleteArgs>(args: SelectSubset<T, Vehicle_TaxesDeleteArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_Taxes.
     * @param {Vehicle_TaxesUpdateArgs} args - Arguments to update one Vehicle_Taxes.
     * @example
     * // Update one Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_TaxesUpdateArgs>(args: SelectSubset<T, Vehicle_TaxesUpdateArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_Taxes.
     * @param {Vehicle_TaxesDeleteManyArgs} args - Arguments to filter Vehicle_Taxes to delete.
     * @example
     * // Delete a few Vehicle_Taxes
     * const { count } = await prisma.vehicle_Taxes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_TaxesDeleteManyArgs>(args?: SelectSubset<T, Vehicle_TaxesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_TaxesUpdateManyArgs>(args: SelectSubset<T, Vehicle_TaxesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Taxes.
     * @param {Vehicle_TaxesUpsertArgs} args - Arguments to update or create a Vehicle_Taxes.
     * @example
     * // Update or create a Vehicle_Taxes
     * const vehicle_Taxes = await prisma.vehicle_Taxes.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Taxes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Taxes we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_TaxesUpsertArgs>(args: SelectSubset<T, Vehicle_TaxesUpsertArgs<ExtArgs>>): Prisma__Vehicle_TaxesClient<$Result.GetResult<Prisma.$Vehicle_TaxesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesCountArgs} args - Arguments to filter Vehicle_Taxes to count.
     * @example
     * // Count the number of Vehicle_Taxes
     * const count = await prisma.vehicle_Taxes.count({
     *   where: {
     *     // ... the filter for the Vehicle_Taxes we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_TaxesCountArgs>(
      args?: Subset<T, Vehicle_TaxesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_TaxesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_TaxesAggregateArgs>(args: Subset<T, Vehicle_TaxesAggregateArgs>): Prisma.PrismaPromise<GetVehicle_TaxesAggregateType<T>>

    /**
     * Group by Vehicle_Taxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TaxesGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_TaxesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_TaxesGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_TaxesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_TaxesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_TaxesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Taxes model
   */
  readonly fields: Vehicle_TaxesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Taxes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_TaxesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends Master_VehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Master_VehiclesDefaultArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Taxes model
   */ 
  interface Vehicle_TaxesFieldRefs {
    readonly taxId: FieldRef<"Vehicle_Taxes", 'Int'>
    readonly carId: FieldRef<"Vehicle_Taxes", 'Int'>
    readonly paymentDate: FieldRef<"Vehicle_Taxes", 'DateTime'>
    readonly expiryDate: FieldRef<"Vehicle_Taxes", 'DateTime'>
    readonly cost: FieldRef<"Vehicle_Taxes", 'Float'>
    readonly receiptNumber: FieldRef<"Vehicle_Taxes", 'String'>
    readonly notes: FieldRef<"Vehicle_Taxes", 'String'>
    readonly createdAt: FieldRef<"Vehicle_Taxes", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle_Taxes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Taxes findUnique
   */
  export type Vehicle_TaxesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Taxes to fetch.
     */
    where: Vehicle_TaxesWhereUniqueInput
  }

  /**
   * Vehicle_Taxes findUniqueOrThrow
   */
  export type Vehicle_TaxesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Taxes to fetch.
     */
    where: Vehicle_TaxesWhereUniqueInput
  }

  /**
   * Vehicle_Taxes findFirst
   */
  export type Vehicle_TaxesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Taxes to fetch.
     */
    where?: Vehicle_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Taxes to fetch.
     */
    orderBy?: Vehicle_TaxesOrderByWithRelationInput | Vehicle_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Taxes.
     */
    cursor?: Vehicle_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Taxes.
     */
    distinct?: Vehicle_TaxesScalarFieldEnum | Vehicle_TaxesScalarFieldEnum[]
  }

  /**
   * Vehicle_Taxes findFirstOrThrow
   */
  export type Vehicle_TaxesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Taxes to fetch.
     */
    where?: Vehicle_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Taxes to fetch.
     */
    orderBy?: Vehicle_TaxesOrderByWithRelationInput | Vehicle_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Taxes.
     */
    cursor?: Vehicle_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Taxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Taxes.
     */
    distinct?: Vehicle_TaxesScalarFieldEnum | Vehicle_TaxesScalarFieldEnum[]
  }

  /**
   * Vehicle_Taxes findMany
   */
  export type Vehicle_TaxesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Taxes to fetch.
     */
    where?: Vehicle_TaxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Taxes to fetch.
     */
    orderBy?: Vehicle_TaxesOrderByWithRelationInput | Vehicle_TaxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Taxes.
     */
    cursor?: Vehicle_TaxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Taxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Taxes.
     */
    skip?: number
    distinct?: Vehicle_TaxesScalarFieldEnum | Vehicle_TaxesScalarFieldEnum[]
  }

  /**
   * Vehicle_Taxes create
   */
  export type Vehicle_TaxesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Taxes.
     */
    data: XOR<Vehicle_TaxesCreateInput, Vehicle_TaxesUncheckedCreateInput>
  }

  /**
   * Vehicle_Taxes createMany
   */
  export type Vehicle_TaxesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Taxes.
     */
    data: Vehicle_TaxesCreateManyInput | Vehicle_TaxesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Taxes update
   */
  export type Vehicle_TaxesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Taxes.
     */
    data: XOR<Vehicle_TaxesUpdateInput, Vehicle_TaxesUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Taxes to update.
     */
    where: Vehicle_TaxesWhereUniqueInput
  }

  /**
   * Vehicle_Taxes updateMany
   */
  export type Vehicle_TaxesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Taxes.
     */
    data: XOR<Vehicle_TaxesUpdateManyMutationInput, Vehicle_TaxesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Taxes to update
     */
    where?: Vehicle_TaxesWhereInput
  }

  /**
   * Vehicle_Taxes upsert
   */
  export type Vehicle_TaxesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Taxes to update in case it exists.
     */
    where: Vehicle_TaxesWhereUniqueInput
    /**
     * In case the Vehicle_Taxes found by the `where` argument doesn't exist, create a new Vehicle_Taxes with this data.
     */
    create: XOR<Vehicle_TaxesCreateInput, Vehicle_TaxesUncheckedCreateInput>
    /**
     * In case the Vehicle_Taxes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_TaxesUpdateInput, Vehicle_TaxesUncheckedUpdateInput>
  }

  /**
   * Vehicle_Taxes delete
   */
  export type Vehicle_TaxesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Taxes to delete.
     */
    where: Vehicle_TaxesWhereUniqueInput
  }

  /**
   * Vehicle_Taxes deleteMany
   */
  export type Vehicle_TaxesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Taxes to delete
     */
    where?: Vehicle_TaxesWhereInput
  }

  /**
   * Vehicle_Taxes without action
   */
  export type Vehicle_TaxesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Taxes
     */
    select?: Vehicle_TaxesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TaxesInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_Tires
   */

  export type AggregateVehicle_Tires = {
    _count: Vehicle_TiresCountAggregateOutputType | null
    _avg: Vehicle_TiresAvgAggregateOutputType | null
    _sum: Vehicle_TiresSumAggregateOutputType | null
    _min: Vehicle_TiresMinAggregateOutputType | null
    _max: Vehicle_TiresMaxAggregateOutputType | null
  }

  export type Vehicle_TiresAvgAggregateOutputType = {
    tireId: number | null
    carId: number | null
    odometerRead: number | null
    cost: number | null
    tireCount: number | null
    limitOdometer: number | null
    limitMonths: number | null
  }

  export type Vehicle_TiresSumAggregateOutputType = {
    tireId: number | null
    carId: number | null
    odometerRead: number | null
    cost: number | null
    tireCount: number | null
    limitOdometer: number | null
    limitMonths: number | null
  }

  export type Vehicle_TiresMinAggregateOutputType = {
    tireId: number | null
    carId: number | null
    changeDate: Date | null
    odometerRead: number | null
    brand: string | null
    spec: string | null
    cost: number | null
    tireCount: number | null
    limitOdometer: number | null
    limitMonths: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_TiresMaxAggregateOutputType = {
    tireId: number | null
    carId: number | null
    changeDate: Date | null
    odometerRead: number | null
    brand: string | null
    spec: string | null
    cost: number | null
    tireCount: number | null
    limitOdometer: number | null
    limitMonths: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Vehicle_TiresCountAggregateOutputType = {
    tireId: number
    carId: number
    changeDate: number
    odometerRead: number
    brand: number
    spec: number
    cost: number
    tireCount: number
    limitOdometer: number
    limitMonths: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Vehicle_TiresAvgAggregateInputType = {
    tireId?: true
    carId?: true
    odometerRead?: true
    cost?: true
    tireCount?: true
    limitOdometer?: true
    limitMonths?: true
  }

  export type Vehicle_TiresSumAggregateInputType = {
    tireId?: true
    carId?: true
    odometerRead?: true
    cost?: true
    tireCount?: true
    limitOdometer?: true
    limitMonths?: true
  }

  export type Vehicle_TiresMinAggregateInputType = {
    tireId?: true
    carId?: true
    changeDate?: true
    odometerRead?: true
    brand?: true
    spec?: true
    cost?: true
    tireCount?: true
    limitOdometer?: true
    limitMonths?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_TiresMaxAggregateInputType = {
    tireId?: true
    carId?: true
    changeDate?: true
    odometerRead?: true
    brand?: true
    spec?: true
    cost?: true
    tireCount?: true
    limitOdometer?: true
    limitMonths?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Vehicle_TiresCountAggregateInputType = {
    tireId?: true
    carId?: true
    changeDate?: true
    odometerRead?: true
    brand?: true
    spec?: true
    cost?: true
    tireCount?: true
    limitOdometer?: true
    limitMonths?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Vehicle_TiresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Tires to aggregate.
     */
    where?: Vehicle_TiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Tires to fetch.
     */
    orderBy?: Vehicle_TiresOrderByWithRelationInput | Vehicle_TiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_TiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Tires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Tires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_Tires
    **/
    _count?: true | Vehicle_TiresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_TiresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_TiresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_TiresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_TiresMaxAggregateInputType
  }

  export type GetVehicle_TiresAggregateType<T extends Vehicle_TiresAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_Tires]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_Tires[P]>
      : GetScalarType<T[P], AggregateVehicle_Tires[P]>
  }




  export type Vehicle_TiresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_TiresWhereInput
    orderBy?: Vehicle_TiresOrderByWithAggregationInput | Vehicle_TiresOrderByWithAggregationInput[]
    by: Vehicle_TiresScalarFieldEnum[] | Vehicle_TiresScalarFieldEnum
    having?: Vehicle_TiresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_TiresCountAggregateInputType | true
    _avg?: Vehicle_TiresAvgAggregateInputType
    _sum?: Vehicle_TiresSumAggregateInputType
    _min?: Vehicle_TiresMinAggregateInputType
    _max?: Vehicle_TiresMaxAggregateInputType
  }

  export type Vehicle_TiresGroupByOutputType = {
    tireId: number
    carId: number
    changeDate: Date
    odometerRead: number
    brand: string | null
    spec: string | null
    cost: number | null
    tireCount: number
    limitOdometer: number | null
    limitMonths: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: Vehicle_TiresCountAggregateOutputType | null
    _avg: Vehicle_TiresAvgAggregateOutputType | null
    _sum: Vehicle_TiresSumAggregateOutputType | null
    _min: Vehicle_TiresMinAggregateOutputType | null
    _max: Vehicle_TiresMaxAggregateOutputType | null
  }

  type GetVehicle_TiresGroupByPayload<T extends Vehicle_TiresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_TiresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_TiresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_TiresGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_TiresGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_TiresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tireId?: boolean
    carId?: boolean
    changeDate?: boolean
    odometerRead?: boolean
    brand?: boolean
    spec?: boolean
    cost?: boolean
    tireCount?: boolean
    limitOdometer?: boolean
    limitMonths?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_Tires"]>


  export type Vehicle_TiresSelectScalar = {
    tireId?: boolean
    carId?: boolean
    changeDate?: boolean
    odometerRead?: boolean
    brand?: boolean
    spec?: boolean
    cost?: boolean
    tireCount?: boolean
    limitOdometer?: boolean
    limitMonths?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_TiresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Master_VehiclesDefaultArgs<ExtArgs>
  }

  export type $Vehicle_TiresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Tires"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tireId: number
      carId: number
      changeDate: Date
      odometerRead: number
      brand: string | null
      spec: string | null
      cost: number | null
      tireCount: number
      limitOdometer: number | null
      limitMonths: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle_Tires"]>
    composites: {}
  }

  type Vehicle_TiresGetPayload<S extends boolean | null | undefined | Vehicle_TiresDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_TiresPayload, S>

  type Vehicle_TiresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Vehicle_TiresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_TiresCountAggregateInputType | true
    }

  export interface Vehicle_TiresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_Tires'], meta: { name: 'Vehicle_Tires' } }
    /**
     * Find zero or one Vehicle_Tires that matches the filter.
     * @param {Vehicle_TiresFindUniqueArgs} args - Arguments to find a Vehicle_Tires
     * @example
     * // Get one Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_TiresFindUniqueArgs>(args: SelectSubset<T, Vehicle_TiresFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_Tires that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Vehicle_TiresFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_Tires
     * @example
     * // Get one Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_TiresFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_TiresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_Tires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresFindFirstArgs} args - Arguments to find a Vehicle_Tires
     * @example
     * // Get one Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_TiresFindFirstArgs>(args?: SelectSubset<T, Vehicle_TiresFindFirstArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_Tires that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresFindFirstOrThrowArgs} args - Arguments to find a Vehicle_Tires
     * @example
     * // Get one Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_TiresFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_TiresFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_Tires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findMany()
     * 
     * // Get first 10 Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.findMany({ take: 10 })
     * 
     * // Only select the `tireId`
     * const vehicle_TiresWithTireIdOnly = await prisma.vehicle_Tires.findMany({ select: { tireId: true } })
     * 
     */
    findMany<T extends Vehicle_TiresFindManyArgs>(args?: SelectSubset<T, Vehicle_TiresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_Tires.
     * @param {Vehicle_TiresCreateArgs} args - Arguments to create a Vehicle_Tires.
     * @example
     * // Create one Vehicle_Tires
     * const Vehicle_Tires = await prisma.vehicle_Tires.create({
     *   data: {
     *     // ... data to create a Vehicle_Tires
     *   }
     * })
     * 
     */
    create<T extends Vehicle_TiresCreateArgs>(args: SelectSubset<T, Vehicle_TiresCreateArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_Tires.
     * @param {Vehicle_TiresCreateManyArgs} args - Arguments to create many Vehicle_Tires.
     * @example
     * // Create many Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_TiresCreateManyArgs>(args?: SelectSubset<T, Vehicle_TiresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle_Tires.
     * @param {Vehicle_TiresDeleteArgs} args - Arguments to delete one Vehicle_Tires.
     * @example
     * // Delete one Vehicle_Tires
     * const Vehicle_Tires = await prisma.vehicle_Tires.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_Tires
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_TiresDeleteArgs>(args: SelectSubset<T, Vehicle_TiresDeleteArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_Tires.
     * @param {Vehicle_TiresUpdateArgs} args - Arguments to update one Vehicle_Tires.
     * @example
     * // Update one Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_TiresUpdateArgs>(args: SelectSubset<T, Vehicle_TiresUpdateArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_Tires.
     * @param {Vehicle_TiresDeleteManyArgs} args - Arguments to filter Vehicle_Tires to delete.
     * @example
     * // Delete a few Vehicle_Tires
     * const { count } = await prisma.vehicle_Tires.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_TiresDeleteManyArgs>(args?: SelectSubset<T, Vehicle_TiresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_Tires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_TiresUpdateManyArgs>(args: SelectSubset<T, Vehicle_TiresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_Tires.
     * @param {Vehicle_TiresUpsertArgs} args - Arguments to update or create a Vehicle_Tires.
     * @example
     * // Update or create a Vehicle_Tires
     * const vehicle_Tires = await prisma.vehicle_Tires.upsert({
     *   create: {
     *     // ... data to create a Vehicle_Tires
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_Tires we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_TiresUpsertArgs>(args: SelectSubset<T, Vehicle_TiresUpsertArgs<ExtArgs>>): Prisma__Vehicle_TiresClient<$Result.GetResult<Prisma.$Vehicle_TiresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_Tires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresCountArgs} args - Arguments to filter Vehicle_Tires to count.
     * @example
     * // Count the number of Vehicle_Tires
     * const count = await prisma.vehicle_Tires.count({
     *   where: {
     *     // ... the filter for the Vehicle_Tires we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_TiresCountArgs>(
      args?: Subset<T, Vehicle_TiresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_TiresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_Tires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_TiresAggregateArgs>(args: Subset<T, Vehicle_TiresAggregateArgs>): Prisma.PrismaPromise<GetVehicle_TiresAggregateType<T>>

    /**
     * Group by Vehicle_Tires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_TiresGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_TiresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_TiresGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_TiresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_TiresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_TiresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_Tires model
   */
  readonly fields: Vehicle_TiresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_Tires.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_TiresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    car<T extends Master_VehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Master_VehiclesDefaultArgs<ExtArgs>>): Prisma__Master_VehiclesClient<$Result.GetResult<Prisma.$Master_VehiclesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle_Tires model
   */ 
  interface Vehicle_TiresFieldRefs {
    readonly tireId: FieldRef<"Vehicle_Tires", 'Int'>
    readonly carId: FieldRef<"Vehicle_Tires", 'Int'>
    readonly changeDate: FieldRef<"Vehicle_Tires", 'DateTime'>
    readonly odometerRead: FieldRef<"Vehicle_Tires", 'Int'>
    readonly brand: FieldRef<"Vehicle_Tires", 'String'>
    readonly spec: FieldRef<"Vehicle_Tires", 'String'>
    readonly cost: FieldRef<"Vehicle_Tires", 'Float'>
    readonly tireCount: FieldRef<"Vehicle_Tires", 'Int'>
    readonly limitOdometer: FieldRef<"Vehicle_Tires", 'Int'>
    readonly limitMonths: FieldRef<"Vehicle_Tires", 'Int'>
    readonly notes: FieldRef<"Vehicle_Tires", 'String'>
    readonly createdAt: FieldRef<"Vehicle_Tires", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle_Tires", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_Tires findUnique
   */
  export type Vehicle_TiresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Tires to fetch.
     */
    where: Vehicle_TiresWhereUniqueInput
  }

  /**
   * Vehicle_Tires findUniqueOrThrow
   */
  export type Vehicle_TiresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Tires to fetch.
     */
    where: Vehicle_TiresWhereUniqueInput
  }

  /**
   * Vehicle_Tires findFirst
   */
  export type Vehicle_TiresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Tires to fetch.
     */
    where?: Vehicle_TiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Tires to fetch.
     */
    orderBy?: Vehicle_TiresOrderByWithRelationInput | Vehicle_TiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Tires.
     */
    cursor?: Vehicle_TiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Tires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Tires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Tires.
     */
    distinct?: Vehicle_TiresScalarFieldEnum | Vehicle_TiresScalarFieldEnum[]
  }

  /**
   * Vehicle_Tires findFirstOrThrow
   */
  export type Vehicle_TiresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Tires to fetch.
     */
    where?: Vehicle_TiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Tires to fetch.
     */
    orderBy?: Vehicle_TiresOrderByWithRelationInput | Vehicle_TiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_Tires.
     */
    cursor?: Vehicle_TiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Tires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Tires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_Tires.
     */
    distinct?: Vehicle_TiresScalarFieldEnum | Vehicle_TiresScalarFieldEnum[]
  }

  /**
   * Vehicle_Tires findMany
   */
  export type Vehicle_TiresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_Tires to fetch.
     */
    where?: Vehicle_TiresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_Tires to fetch.
     */
    orderBy?: Vehicle_TiresOrderByWithRelationInput | Vehicle_TiresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_Tires.
     */
    cursor?: Vehicle_TiresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_Tires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_Tires.
     */
    skip?: number
    distinct?: Vehicle_TiresScalarFieldEnum | Vehicle_TiresScalarFieldEnum[]
  }

  /**
   * Vehicle_Tires create
   */
  export type Vehicle_TiresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_Tires.
     */
    data: XOR<Vehicle_TiresCreateInput, Vehicle_TiresUncheckedCreateInput>
  }

  /**
   * Vehicle_Tires createMany
   */
  export type Vehicle_TiresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_Tires.
     */
    data: Vehicle_TiresCreateManyInput | Vehicle_TiresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_Tires update
   */
  export type Vehicle_TiresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_Tires.
     */
    data: XOR<Vehicle_TiresUpdateInput, Vehicle_TiresUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_Tires to update.
     */
    where: Vehicle_TiresWhereUniqueInput
  }

  /**
   * Vehicle_Tires updateMany
   */
  export type Vehicle_TiresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_Tires.
     */
    data: XOR<Vehicle_TiresUpdateManyMutationInput, Vehicle_TiresUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_Tires to update
     */
    where?: Vehicle_TiresWhereInput
  }

  /**
   * Vehicle_Tires upsert
   */
  export type Vehicle_TiresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_Tires to update in case it exists.
     */
    where: Vehicle_TiresWhereUniqueInput
    /**
     * In case the Vehicle_Tires found by the `where` argument doesn't exist, create a new Vehicle_Tires with this data.
     */
    create: XOR<Vehicle_TiresCreateInput, Vehicle_TiresUncheckedCreateInput>
    /**
     * In case the Vehicle_Tires was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_TiresUpdateInput, Vehicle_TiresUncheckedUpdateInput>
  }

  /**
   * Vehicle_Tires delete
   */
  export type Vehicle_TiresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_Tires to delete.
     */
    where: Vehicle_TiresWhereUniqueInput
  }

  /**
   * Vehicle_Tires deleteMany
   */
  export type Vehicle_TiresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_Tires to delete
     */
    where?: Vehicle_TiresWhereInput
  }

  /**
   * Vehicle_Tires without action
   */
  export type Vehicle_TiresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_Tires
     */
    select?: Vehicle_TiresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_TiresInclude<ExtArgs> | null
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


  export const Master_VehiclesScalarFieldEnum: {
    carId: 'carId',
    licensePlate: 'licensePlate',
    brand: 'brand',
    carType: 'carType',
    capacity: 'capacity',
    status: 'status',
    actExpiryDate: 'actExpiryDate',
    insuranceExpiryDate: 'insuranceExpiryDate',
    taxExpiryDate: 'taxExpiryDate'
  };

  export type Master_VehiclesScalarFieldEnum = (typeof Master_VehiclesScalarFieldEnum)[keyof typeof Master_VehiclesScalarFieldEnum]


  export const Master_DriversScalarFieldEnum: {
    driverId: 'driverId',
    driverName: 'driverName',
    phone: 'phone',
    status: 'status',
    lineUserId: 'lineUserId',
    licenseNumber: 'licenseNumber',
    licenseExpiryDate: 'licenseExpiryDate',
    address: 'address'
  };

  export type Master_DriversScalarFieldEnum = (typeof Master_DriversScalarFieldEnum)[keyof typeof Master_DriversScalarFieldEnum]


  export const Vehicle_RequestsScalarFieldEnum: {
    requestId: 'requestId',
    requesterStaffId: 'requesterStaffId',
    purpose: 'purpose',
    destination: 'destination',
    province: 'province',
    refOrderNumber: 'refOrderNumber',
    refOrderDate: 'refOrderDate',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    passengerCount: 'passengerCount',
    passengerNames: 'passengerNames',
    carId: 'carId',
    driverId: 'driverId',
    status: 'status',
    startOdometer: 'startOdometer',
    endOdometer: 'endOdometer',
    startOdometerPhoto: 'startOdometerPhoto',
    endOdometerPhoto: 'endOdometerPhoto',
    actualDistance: 'actualDistance',
    departureRecordedAt: 'departureRecordedAt',
    arrivalRecordedAt: 'arrivalRecordedAt',
    isRecurring: 'isRecurring',
    recurrencePattern: 'recurrencePattern',
    recurrenceGroupId: 'recurrenceGroupId',
    parentRequestId: 'parentRequestId',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_RequestsScalarFieldEnum = (typeof Vehicle_RequestsScalarFieldEnum)[keyof typeof Vehicle_RequestsScalarFieldEnum]


  export const Driver_LeavesScalarFieldEnum: {
    leaveId: 'leaveId',
    driverId: 'driverId',
    startDate: 'startDate',
    endDate: 'endDate',
    leaveType: 'leaveType',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Driver_LeavesScalarFieldEnum = (typeof Driver_LeavesScalarFieldEnum)[keyof typeof Driver_LeavesScalarFieldEnum]


  export const Vehicle_MaintenancesScalarFieldEnum: {
    maintenanceId: 'maintenanceId',
    carId: 'carId',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    cost: 'cost',
    details: 'details',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_MaintenancesScalarFieldEnum = (typeof Vehicle_MaintenancesScalarFieldEnum)[keyof typeof Vehicle_MaintenancesScalarFieldEnum]


  export const Vehicle_Fuel_LogsScalarFieldEnum: {
    fuelLogId: 'fuelLogId',
    amount: 'amount',
    fillDate: 'fillDate',
    carId: 'carId',
    liters: 'liters',
    odometerRead: 'odometerRead',
    requestId: 'requestId',
    refSlip: 'refSlip',
    fuelProvider: 'fuelProvider',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_Fuel_LogsScalarFieldEnum = (typeof Vehicle_Fuel_LogsScalarFieldEnum)[keyof typeof Vehicle_Fuel_LogsScalarFieldEnum]


  export const Vehicle_TaxesScalarFieldEnum: {
    taxId: 'taxId',
    carId: 'carId',
    paymentDate: 'paymentDate',
    expiryDate: 'expiryDate',
    cost: 'cost',
    receiptNumber: 'receiptNumber',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_TaxesScalarFieldEnum = (typeof Vehicle_TaxesScalarFieldEnum)[keyof typeof Vehicle_TaxesScalarFieldEnum]


  export const Vehicle_TiresScalarFieldEnum: {
    tireId: 'tireId',
    carId: 'carId',
    changeDate: 'changeDate',
    odometerRead: 'odometerRead',
    brand: 'brand',
    spec: 'spec',
    cost: 'cost',
    tireCount: 'tireCount',
    limitOdometer: 'limitOdometer',
    limitMonths: 'limitMonths',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_TiresScalarFieldEnum = (typeof Vehicle_TiresScalarFieldEnum)[keyof typeof Vehicle_TiresScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const Master_VehiclesOrderByRelevanceFieldEnum: {
    licensePlate: 'licensePlate',
    brand: 'brand',
    carType: 'carType',
    status: 'status'
  };

  export type Master_VehiclesOrderByRelevanceFieldEnum = (typeof Master_VehiclesOrderByRelevanceFieldEnum)[keyof typeof Master_VehiclesOrderByRelevanceFieldEnum]


  export const Master_DriversOrderByRelevanceFieldEnum: {
    driverName: 'driverName',
    phone: 'phone',
    status: 'status',
    lineUserId: 'lineUserId',
    licenseNumber: 'licenseNumber',
    address: 'address'
  };

  export type Master_DriversOrderByRelevanceFieldEnum = (typeof Master_DriversOrderByRelevanceFieldEnum)[keyof typeof Master_DriversOrderByRelevanceFieldEnum]


  export const Vehicle_RequestsOrderByRelevanceFieldEnum: {
    purpose: 'purpose',
    destination: 'destination',
    province: 'province',
    refOrderNumber: 'refOrderNumber',
    passengerNames: 'passengerNames',
    status: 'status',
    startOdometerPhoto: 'startOdometerPhoto',
    endOdometerPhoto: 'endOdometerPhoto',
    recurrencePattern: 'recurrencePattern',
    recurrenceGroupId: 'recurrenceGroupId',
    rejectionReason: 'rejectionReason'
  };

  export type Vehicle_RequestsOrderByRelevanceFieldEnum = (typeof Vehicle_RequestsOrderByRelevanceFieldEnum)[keyof typeof Vehicle_RequestsOrderByRelevanceFieldEnum]


  export const Driver_LeavesOrderByRelevanceFieldEnum: {
    leaveType: 'leaveType',
    reason: 'reason',
    status: 'status'
  };

  export type Driver_LeavesOrderByRelevanceFieldEnum = (typeof Driver_LeavesOrderByRelevanceFieldEnum)[keyof typeof Driver_LeavesOrderByRelevanceFieldEnum]


  export const Vehicle_MaintenancesOrderByRelevanceFieldEnum: {
    type: 'type',
    details: 'details',
    status: 'status'
  };

  export type Vehicle_MaintenancesOrderByRelevanceFieldEnum = (typeof Vehicle_MaintenancesOrderByRelevanceFieldEnum)[keyof typeof Vehicle_MaintenancesOrderByRelevanceFieldEnum]


  export const Vehicle_Fuel_LogsOrderByRelevanceFieldEnum: {
    refSlip: 'refSlip',
    fuelProvider: 'fuelProvider',
    notes: 'notes'
  };

  export type Vehicle_Fuel_LogsOrderByRelevanceFieldEnum = (typeof Vehicle_Fuel_LogsOrderByRelevanceFieldEnum)[keyof typeof Vehicle_Fuel_LogsOrderByRelevanceFieldEnum]


  export const Vehicle_TaxesOrderByRelevanceFieldEnum: {
    receiptNumber: 'receiptNumber',
    notes: 'notes'
  };

  export type Vehicle_TaxesOrderByRelevanceFieldEnum = (typeof Vehicle_TaxesOrderByRelevanceFieldEnum)[keyof typeof Vehicle_TaxesOrderByRelevanceFieldEnum]


  export const Vehicle_TiresOrderByRelevanceFieldEnum: {
    brand: 'brand',
    spec: 'spec',
    notes: 'notes'
  };

  export type Vehicle_TiresOrderByRelevanceFieldEnum = (typeof Vehicle_TiresOrderByRelevanceFieldEnum)[keyof typeof Vehicle_TiresOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type Master_VehiclesWhereInput = {
    AND?: Master_VehiclesWhereInput | Master_VehiclesWhereInput[]
    OR?: Master_VehiclesWhereInput[]
    NOT?: Master_VehiclesWhereInput | Master_VehiclesWhereInput[]
    carId?: IntFilter<"Master_Vehicles"> | number
    licensePlate?: StringFilter<"Master_Vehicles"> | string
    brand?: StringNullableFilter<"Master_Vehicles"> | string | null
    carType?: StringFilter<"Master_Vehicles"> | string
    capacity?: IntFilter<"Master_Vehicles"> | number
    status?: StringFilter<"Master_Vehicles"> | string
    actExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    insuranceExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    taxExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    requests?: Vehicle_RequestsListRelationFilter
    maintenances?: Vehicle_MaintenancesListRelationFilter
    fuelLogs?: Vehicle_Fuel_LogsListRelationFilter
    taxes?: Vehicle_TaxesListRelationFilter
    tires?: Vehicle_TiresListRelationFilter
  }

  export type Master_VehiclesOrderByWithRelationInput = {
    carId?: SortOrder
    licensePlate?: SortOrder
    brand?: SortOrderInput | SortOrder
    carType?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    actExpiryDate?: SortOrderInput | SortOrder
    insuranceExpiryDate?: SortOrderInput | SortOrder
    taxExpiryDate?: SortOrderInput | SortOrder
    requests?: Vehicle_RequestsOrderByRelationAggregateInput
    maintenances?: Vehicle_MaintenancesOrderByRelationAggregateInput
    fuelLogs?: Vehicle_Fuel_LogsOrderByRelationAggregateInput
    taxes?: Vehicle_TaxesOrderByRelationAggregateInput
    tires?: Vehicle_TiresOrderByRelationAggregateInput
    _relevance?: Master_VehiclesOrderByRelevanceInput
  }

  export type Master_VehiclesWhereUniqueInput = Prisma.AtLeast<{
    carId?: number
    AND?: Master_VehiclesWhereInput | Master_VehiclesWhereInput[]
    OR?: Master_VehiclesWhereInput[]
    NOT?: Master_VehiclesWhereInput | Master_VehiclesWhereInput[]
    licensePlate?: StringFilter<"Master_Vehicles"> | string
    brand?: StringNullableFilter<"Master_Vehicles"> | string | null
    carType?: StringFilter<"Master_Vehicles"> | string
    capacity?: IntFilter<"Master_Vehicles"> | number
    status?: StringFilter<"Master_Vehicles"> | string
    actExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    insuranceExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    taxExpiryDate?: DateTimeNullableFilter<"Master_Vehicles"> | Date | string | null
    requests?: Vehicle_RequestsListRelationFilter
    maintenances?: Vehicle_MaintenancesListRelationFilter
    fuelLogs?: Vehicle_Fuel_LogsListRelationFilter
    taxes?: Vehicle_TaxesListRelationFilter
    tires?: Vehicle_TiresListRelationFilter
  }, "carId">

  export type Master_VehiclesOrderByWithAggregationInput = {
    carId?: SortOrder
    licensePlate?: SortOrder
    brand?: SortOrderInput | SortOrder
    carType?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    actExpiryDate?: SortOrderInput | SortOrder
    insuranceExpiryDate?: SortOrderInput | SortOrder
    taxExpiryDate?: SortOrderInput | SortOrder
    _count?: Master_VehiclesCountOrderByAggregateInput
    _avg?: Master_VehiclesAvgOrderByAggregateInput
    _max?: Master_VehiclesMaxOrderByAggregateInput
    _min?: Master_VehiclesMinOrderByAggregateInput
    _sum?: Master_VehiclesSumOrderByAggregateInput
  }

  export type Master_VehiclesScalarWhereWithAggregatesInput = {
    AND?: Master_VehiclesScalarWhereWithAggregatesInput | Master_VehiclesScalarWhereWithAggregatesInput[]
    OR?: Master_VehiclesScalarWhereWithAggregatesInput[]
    NOT?: Master_VehiclesScalarWhereWithAggregatesInput | Master_VehiclesScalarWhereWithAggregatesInput[]
    carId?: IntWithAggregatesFilter<"Master_Vehicles"> | number
    licensePlate?: StringWithAggregatesFilter<"Master_Vehicles"> | string
    brand?: StringNullableWithAggregatesFilter<"Master_Vehicles"> | string | null
    carType?: StringWithAggregatesFilter<"Master_Vehicles"> | string
    capacity?: IntWithAggregatesFilter<"Master_Vehicles"> | number
    status?: StringWithAggregatesFilter<"Master_Vehicles"> | string
    actExpiryDate?: DateTimeNullableWithAggregatesFilter<"Master_Vehicles"> | Date | string | null
    insuranceExpiryDate?: DateTimeNullableWithAggregatesFilter<"Master_Vehicles"> | Date | string | null
    taxExpiryDate?: DateTimeNullableWithAggregatesFilter<"Master_Vehicles"> | Date | string | null
  }

  export type Master_DriversWhereInput = {
    AND?: Master_DriversWhereInput | Master_DriversWhereInput[]
    OR?: Master_DriversWhereInput[]
    NOT?: Master_DriversWhereInput | Master_DriversWhereInput[]
    driverId?: IntFilter<"Master_Drivers"> | number
    driverName?: StringFilter<"Master_Drivers"> | string
    phone?: StringNullableFilter<"Master_Drivers"> | string | null
    status?: StringFilter<"Master_Drivers"> | string
    lineUserId?: StringNullableFilter<"Master_Drivers"> | string | null
    licenseNumber?: StringNullableFilter<"Master_Drivers"> | string | null
    licenseExpiryDate?: DateTimeNullableFilter<"Master_Drivers"> | Date | string | null
    address?: StringNullableFilter<"Master_Drivers"> | string | null
    requests?: Vehicle_RequestsListRelationFilter
    leaves?: Driver_LeavesListRelationFilter
  }

  export type Master_DriversOrderByWithRelationInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    lineUserId?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    licenseExpiryDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    requests?: Vehicle_RequestsOrderByRelationAggregateInput
    leaves?: Driver_LeavesOrderByRelationAggregateInput
    _relevance?: Master_DriversOrderByRelevanceInput
  }

  export type Master_DriversWhereUniqueInput = Prisma.AtLeast<{
    driverId?: number
    AND?: Master_DriversWhereInput | Master_DriversWhereInput[]
    OR?: Master_DriversWhereInput[]
    NOT?: Master_DriversWhereInput | Master_DriversWhereInput[]
    driverName?: StringFilter<"Master_Drivers"> | string
    phone?: StringNullableFilter<"Master_Drivers"> | string | null
    status?: StringFilter<"Master_Drivers"> | string
    lineUserId?: StringNullableFilter<"Master_Drivers"> | string | null
    licenseNumber?: StringNullableFilter<"Master_Drivers"> | string | null
    licenseExpiryDate?: DateTimeNullableFilter<"Master_Drivers"> | Date | string | null
    address?: StringNullableFilter<"Master_Drivers"> | string | null
    requests?: Vehicle_RequestsListRelationFilter
    leaves?: Driver_LeavesListRelationFilter
  }, "driverId">

  export type Master_DriversOrderByWithAggregationInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    lineUserId?: SortOrderInput | SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    licenseExpiryDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    _count?: Master_DriversCountOrderByAggregateInput
    _avg?: Master_DriversAvgOrderByAggregateInput
    _max?: Master_DriversMaxOrderByAggregateInput
    _min?: Master_DriversMinOrderByAggregateInput
    _sum?: Master_DriversSumOrderByAggregateInput
  }

  export type Master_DriversScalarWhereWithAggregatesInput = {
    AND?: Master_DriversScalarWhereWithAggregatesInput | Master_DriversScalarWhereWithAggregatesInput[]
    OR?: Master_DriversScalarWhereWithAggregatesInput[]
    NOT?: Master_DriversScalarWhereWithAggregatesInput | Master_DriversScalarWhereWithAggregatesInput[]
    driverId?: IntWithAggregatesFilter<"Master_Drivers"> | number
    driverName?: StringWithAggregatesFilter<"Master_Drivers"> | string
    phone?: StringNullableWithAggregatesFilter<"Master_Drivers"> | string | null
    status?: StringWithAggregatesFilter<"Master_Drivers"> | string
    lineUserId?: StringNullableWithAggregatesFilter<"Master_Drivers"> | string | null
    licenseNumber?: StringNullableWithAggregatesFilter<"Master_Drivers"> | string | null
    licenseExpiryDate?: DateTimeNullableWithAggregatesFilter<"Master_Drivers"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Master_Drivers"> | string | null
  }

  export type Vehicle_RequestsWhereInput = {
    AND?: Vehicle_RequestsWhereInput | Vehicle_RequestsWhereInput[]
    OR?: Vehicle_RequestsWhereInput[]
    NOT?: Vehicle_RequestsWhereInput | Vehicle_RequestsWhereInput[]
    requestId?: IntFilter<"Vehicle_Requests"> | number
    requesterStaffId?: IntFilter<"Vehicle_Requests"> | number
    purpose?: StringFilter<"Vehicle_Requests"> | string
    destination?: StringFilter<"Vehicle_Requests"> | string
    province?: StringFilter<"Vehicle_Requests"> | string
    refOrderNumber?: StringNullableFilter<"Vehicle_Requests"> | string | null
    refOrderDate?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    startDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    endDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    passengerCount?: IntFilter<"Vehicle_Requests"> | number
    passengerNames?: StringFilter<"Vehicle_Requests"> | string
    carId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    driverId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    status?: StringFilter<"Vehicle_Requests"> | string
    startOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    endOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    startOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    endOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    actualDistance?: IntNullableFilter<"Vehicle_Requests"> | number | null
    departureRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    arrivalRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    isRecurring?: BoolFilter<"Vehicle_Requests"> | boolean
    recurrencePattern?: StringNullableFilter<"Vehicle_Requests"> | string | null
    recurrenceGroupId?: StringNullableFilter<"Vehicle_Requests"> | string | null
    parentRequestId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    rejectionReason?: StringNullableFilter<"Vehicle_Requests"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    driver?: XOR<Master_DriversNullableScalarRelationFilter, Master_DriversWhereInput> | null
    fuelLogs?: Vehicle_Fuel_LogsListRelationFilter
  }

  export type Vehicle_RequestsOrderByWithRelationInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    purpose?: SortOrder
    destination?: SortOrder
    province?: SortOrder
    refOrderNumber?: SortOrderInput | SortOrder
    refOrderDate?: SortOrderInput | SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    passengerCount?: SortOrder
    passengerNames?: SortOrder
    carId?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    status?: SortOrder
    startOdometer?: SortOrderInput | SortOrder
    endOdometer?: SortOrderInput | SortOrder
    startOdometerPhoto?: SortOrderInput | SortOrder
    endOdometerPhoto?: SortOrderInput | SortOrder
    actualDistance?: SortOrderInput | SortOrder
    departureRecordedAt?: SortOrderInput | SortOrder
    arrivalRecordedAt?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrencePattern?: SortOrderInput | SortOrder
    recurrenceGroupId?: SortOrderInput | SortOrder
    parentRequestId?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    driver?: Master_DriversOrderByWithRelationInput
    fuelLogs?: Vehicle_Fuel_LogsOrderByRelationAggregateInput
    _relevance?: Vehicle_RequestsOrderByRelevanceInput
  }

  export type Vehicle_RequestsWhereUniqueInput = Prisma.AtLeast<{
    requestId?: number
    AND?: Vehicle_RequestsWhereInput | Vehicle_RequestsWhereInput[]
    OR?: Vehicle_RequestsWhereInput[]
    NOT?: Vehicle_RequestsWhereInput | Vehicle_RequestsWhereInput[]
    requesterStaffId?: IntFilter<"Vehicle_Requests"> | number
    purpose?: StringFilter<"Vehicle_Requests"> | string
    destination?: StringFilter<"Vehicle_Requests"> | string
    province?: StringFilter<"Vehicle_Requests"> | string
    refOrderNumber?: StringNullableFilter<"Vehicle_Requests"> | string | null
    refOrderDate?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    startDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    endDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    passengerCount?: IntFilter<"Vehicle_Requests"> | number
    passengerNames?: StringFilter<"Vehicle_Requests"> | string
    carId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    driverId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    status?: StringFilter<"Vehicle_Requests"> | string
    startOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    endOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    startOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    endOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    actualDistance?: IntNullableFilter<"Vehicle_Requests"> | number | null
    departureRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    arrivalRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    isRecurring?: BoolFilter<"Vehicle_Requests"> | boolean
    recurrencePattern?: StringNullableFilter<"Vehicle_Requests"> | string | null
    recurrenceGroupId?: StringNullableFilter<"Vehicle_Requests"> | string | null
    parentRequestId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    rejectionReason?: StringNullableFilter<"Vehicle_Requests"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    driver?: XOR<Master_DriversNullableScalarRelationFilter, Master_DriversWhereInput> | null
    fuelLogs?: Vehicle_Fuel_LogsListRelationFilter
  }, "requestId">

  export type Vehicle_RequestsOrderByWithAggregationInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    purpose?: SortOrder
    destination?: SortOrder
    province?: SortOrder
    refOrderNumber?: SortOrderInput | SortOrder
    refOrderDate?: SortOrderInput | SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    passengerCount?: SortOrder
    passengerNames?: SortOrder
    carId?: SortOrderInput | SortOrder
    driverId?: SortOrderInput | SortOrder
    status?: SortOrder
    startOdometer?: SortOrderInput | SortOrder
    endOdometer?: SortOrderInput | SortOrder
    startOdometerPhoto?: SortOrderInput | SortOrder
    endOdometerPhoto?: SortOrderInput | SortOrder
    actualDistance?: SortOrderInput | SortOrder
    departureRecordedAt?: SortOrderInput | SortOrder
    arrivalRecordedAt?: SortOrderInput | SortOrder
    isRecurring?: SortOrder
    recurrencePattern?: SortOrderInput | SortOrder
    recurrenceGroupId?: SortOrderInput | SortOrder
    parentRequestId?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Vehicle_RequestsCountOrderByAggregateInput
    _avg?: Vehicle_RequestsAvgOrderByAggregateInput
    _max?: Vehicle_RequestsMaxOrderByAggregateInput
    _min?: Vehicle_RequestsMinOrderByAggregateInput
    _sum?: Vehicle_RequestsSumOrderByAggregateInput
  }

  export type Vehicle_RequestsScalarWhereWithAggregatesInput = {
    AND?: Vehicle_RequestsScalarWhereWithAggregatesInput | Vehicle_RequestsScalarWhereWithAggregatesInput[]
    OR?: Vehicle_RequestsScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_RequestsScalarWhereWithAggregatesInput | Vehicle_RequestsScalarWhereWithAggregatesInput[]
    requestId?: IntWithAggregatesFilter<"Vehicle_Requests"> | number
    requesterStaffId?: IntWithAggregatesFilter<"Vehicle_Requests"> | number
    purpose?: StringWithAggregatesFilter<"Vehicle_Requests"> | string
    destination?: StringWithAggregatesFilter<"Vehicle_Requests"> | string
    province?: StringWithAggregatesFilter<"Vehicle_Requests"> | string
    refOrderNumber?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    refOrderDate?: DateTimeNullableWithAggregatesFilter<"Vehicle_Requests"> | Date | string | null
    startDateTime?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
    endDateTime?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
    passengerCount?: IntWithAggregatesFilter<"Vehicle_Requests"> | number
    passengerNames?: StringWithAggregatesFilter<"Vehicle_Requests"> | string
    carId?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    driverId?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    status?: StringWithAggregatesFilter<"Vehicle_Requests"> | string
    startOdometer?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    endOdometer?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    startOdometerPhoto?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    endOdometerPhoto?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    actualDistance?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    departureRecordedAt?: DateTimeNullableWithAggregatesFilter<"Vehicle_Requests"> | Date | string | null
    arrivalRecordedAt?: DateTimeNullableWithAggregatesFilter<"Vehicle_Requests"> | Date | string | null
    isRecurring?: BoolWithAggregatesFilter<"Vehicle_Requests"> | boolean
    recurrencePattern?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    recurrenceGroupId?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    parentRequestId?: IntNullableWithAggregatesFilter<"Vehicle_Requests"> | number | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Vehicle_Requests"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
  }

  export type Driver_LeavesWhereInput = {
    AND?: Driver_LeavesWhereInput | Driver_LeavesWhereInput[]
    OR?: Driver_LeavesWhereInput[]
    NOT?: Driver_LeavesWhereInput | Driver_LeavesWhereInput[]
    leaveId?: IntFilter<"Driver_Leaves"> | number
    driverId?: IntFilter<"Driver_Leaves"> | number
    startDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    endDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    leaveType?: StringFilter<"Driver_Leaves"> | string
    reason?: StringNullableFilter<"Driver_Leaves"> | string | null
    status?: StringFilter<"Driver_Leaves"> | string
    createdAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
    updatedAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
    driver?: XOR<Master_DriversScalarRelationFilter, Master_DriversWhereInput>
  }

  export type Driver_LeavesOrderByWithRelationInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    leaveType?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: Master_DriversOrderByWithRelationInput
    _relevance?: Driver_LeavesOrderByRelevanceInput
  }

  export type Driver_LeavesWhereUniqueInput = Prisma.AtLeast<{
    leaveId?: number
    AND?: Driver_LeavesWhereInput | Driver_LeavesWhereInput[]
    OR?: Driver_LeavesWhereInput[]
    NOT?: Driver_LeavesWhereInput | Driver_LeavesWhereInput[]
    driverId?: IntFilter<"Driver_Leaves"> | number
    startDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    endDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    leaveType?: StringFilter<"Driver_Leaves"> | string
    reason?: StringNullableFilter<"Driver_Leaves"> | string | null
    status?: StringFilter<"Driver_Leaves"> | string
    createdAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
    updatedAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
    driver?: XOR<Master_DriversScalarRelationFilter, Master_DriversWhereInput>
  }, "leaveId">

  export type Driver_LeavesOrderByWithAggregationInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    leaveType?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Driver_LeavesCountOrderByAggregateInput
    _avg?: Driver_LeavesAvgOrderByAggregateInput
    _max?: Driver_LeavesMaxOrderByAggregateInput
    _min?: Driver_LeavesMinOrderByAggregateInput
    _sum?: Driver_LeavesSumOrderByAggregateInput
  }

  export type Driver_LeavesScalarWhereWithAggregatesInput = {
    AND?: Driver_LeavesScalarWhereWithAggregatesInput | Driver_LeavesScalarWhereWithAggregatesInput[]
    OR?: Driver_LeavesScalarWhereWithAggregatesInput[]
    NOT?: Driver_LeavesScalarWhereWithAggregatesInput | Driver_LeavesScalarWhereWithAggregatesInput[]
    leaveId?: IntWithAggregatesFilter<"Driver_Leaves"> | number
    driverId?: IntWithAggregatesFilter<"Driver_Leaves"> | number
    startDate?: DateTimeWithAggregatesFilter<"Driver_Leaves"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Driver_Leaves"> | Date | string
    leaveType?: StringWithAggregatesFilter<"Driver_Leaves"> | string
    reason?: StringNullableWithAggregatesFilter<"Driver_Leaves"> | string | null
    status?: StringWithAggregatesFilter<"Driver_Leaves"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Driver_Leaves"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver_Leaves"> | Date | string
  }

  export type Vehicle_MaintenancesWhereInput = {
    AND?: Vehicle_MaintenancesWhereInput | Vehicle_MaintenancesWhereInput[]
    OR?: Vehicle_MaintenancesWhereInput[]
    NOT?: Vehicle_MaintenancesWhereInput | Vehicle_MaintenancesWhereInput[]
    maintenanceId?: IntFilter<"Vehicle_Maintenances"> | number
    carId?: IntFilter<"Vehicle_Maintenances"> | number
    startDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    endDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    type?: StringFilter<"Vehicle_Maintenances"> | string
    cost?: FloatNullableFilter<"Vehicle_Maintenances"> | number | null
    details?: StringNullableFilter<"Vehicle_Maintenances"> | string | null
    status?: StringFilter<"Vehicle_Maintenances"> | string
    createdAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }

  export type Vehicle_MaintenancesOrderByWithRelationInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    cost?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    _relevance?: Vehicle_MaintenancesOrderByRelevanceInput
  }

  export type Vehicle_MaintenancesWhereUniqueInput = Prisma.AtLeast<{
    maintenanceId?: number
    AND?: Vehicle_MaintenancesWhereInput | Vehicle_MaintenancesWhereInput[]
    OR?: Vehicle_MaintenancesWhereInput[]
    NOT?: Vehicle_MaintenancesWhereInput | Vehicle_MaintenancesWhereInput[]
    carId?: IntFilter<"Vehicle_Maintenances"> | number
    startDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    endDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    type?: StringFilter<"Vehicle_Maintenances"> | string
    cost?: FloatNullableFilter<"Vehicle_Maintenances"> | number | null
    details?: StringNullableFilter<"Vehicle_Maintenances"> | string | null
    status?: StringFilter<"Vehicle_Maintenances"> | string
    createdAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }, "maintenanceId">

  export type Vehicle_MaintenancesOrderByWithAggregationInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    cost?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Vehicle_MaintenancesCountOrderByAggregateInput
    _avg?: Vehicle_MaintenancesAvgOrderByAggregateInput
    _max?: Vehicle_MaintenancesMaxOrderByAggregateInput
    _min?: Vehicle_MaintenancesMinOrderByAggregateInput
    _sum?: Vehicle_MaintenancesSumOrderByAggregateInput
  }

  export type Vehicle_MaintenancesScalarWhereWithAggregatesInput = {
    AND?: Vehicle_MaintenancesScalarWhereWithAggregatesInput | Vehicle_MaintenancesScalarWhereWithAggregatesInput[]
    OR?: Vehicle_MaintenancesScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_MaintenancesScalarWhereWithAggregatesInput | Vehicle_MaintenancesScalarWhereWithAggregatesInput[]
    maintenanceId?: IntWithAggregatesFilter<"Vehicle_Maintenances"> | number
    carId?: IntWithAggregatesFilter<"Vehicle_Maintenances"> | number
    startDate?: DateTimeWithAggregatesFilter<"Vehicle_Maintenances"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Vehicle_Maintenances"> | Date | string
    type?: StringWithAggregatesFilter<"Vehicle_Maintenances"> | string
    cost?: FloatNullableWithAggregatesFilter<"Vehicle_Maintenances"> | number | null
    details?: StringNullableWithAggregatesFilter<"Vehicle_Maintenances"> | string | null
    status?: StringWithAggregatesFilter<"Vehicle_Maintenances"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Maintenances"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Maintenances"> | Date | string
  }

  export type Vehicle_Fuel_LogsWhereInput = {
    AND?: Vehicle_Fuel_LogsWhereInput | Vehicle_Fuel_LogsWhereInput[]
    OR?: Vehicle_Fuel_LogsWhereInput[]
    NOT?: Vehicle_Fuel_LogsWhereInput | Vehicle_Fuel_LogsWhereInput[]
    fuelLogId?: IntFilter<"Vehicle_Fuel_Logs"> | number
    amount?: FloatFilter<"Vehicle_Fuel_Logs"> | number
    fillDate?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    carId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    liters?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    odometerRead?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    requestId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    refSlip?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    fuelProvider?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    notes?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    request?: XOR<Vehicle_RequestsNullableScalarRelationFilter, Vehicle_RequestsWhereInput> | null
  }

  export type Vehicle_Fuel_LogsOrderByWithRelationInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    fillDate?: SortOrder
    carId?: SortOrderInput | SortOrder
    liters?: SortOrderInput | SortOrder
    odometerRead?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    refSlip?: SortOrderInput | SortOrder
    fuelProvider?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    request?: Vehicle_RequestsOrderByWithRelationInput
    _relevance?: Vehicle_Fuel_LogsOrderByRelevanceInput
  }

  export type Vehicle_Fuel_LogsWhereUniqueInput = Prisma.AtLeast<{
    fuelLogId?: number
    AND?: Vehicle_Fuel_LogsWhereInput | Vehicle_Fuel_LogsWhereInput[]
    OR?: Vehicle_Fuel_LogsWhereInput[]
    NOT?: Vehicle_Fuel_LogsWhereInput | Vehicle_Fuel_LogsWhereInput[]
    amount?: FloatFilter<"Vehicle_Fuel_Logs"> | number
    fillDate?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    carId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    liters?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    odometerRead?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    requestId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    refSlip?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    fuelProvider?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    notes?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    request?: XOR<Vehicle_RequestsNullableScalarRelationFilter, Vehicle_RequestsWhereInput> | null
  }, "fuelLogId">

  export type Vehicle_Fuel_LogsOrderByWithAggregationInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    fillDate?: SortOrder
    carId?: SortOrderInput | SortOrder
    liters?: SortOrderInput | SortOrder
    odometerRead?: SortOrderInput | SortOrder
    requestId?: SortOrderInput | SortOrder
    refSlip?: SortOrderInput | SortOrder
    fuelProvider?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Vehicle_Fuel_LogsCountOrderByAggregateInput
    _avg?: Vehicle_Fuel_LogsAvgOrderByAggregateInput
    _max?: Vehicle_Fuel_LogsMaxOrderByAggregateInput
    _min?: Vehicle_Fuel_LogsMinOrderByAggregateInput
    _sum?: Vehicle_Fuel_LogsSumOrderByAggregateInput
  }

  export type Vehicle_Fuel_LogsScalarWhereWithAggregatesInput = {
    AND?: Vehicle_Fuel_LogsScalarWhereWithAggregatesInput | Vehicle_Fuel_LogsScalarWhereWithAggregatesInput[]
    OR?: Vehicle_Fuel_LogsScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_Fuel_LogsScalarWhereWithAggregatesInput | Vehicle_Fuel_LogsScalarWhereWithAggregatesInput[]
    fuelLogId?: IntWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number
    amount?: FloatWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number
    fillDate?: DateTimeWithAggregatesFilter<"Vehicle_Fuel_Logs"> | Date | string
    carId?: IntNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number | null
    liters?: FloatNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number | null
    odometerRead?: FloatNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number | null
    requestId?: IntNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | number | null
    refSlip?: StringNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | string | null
    fuelProvider?: StringNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Vehicle_Fuel_Logs"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Fuel_Logs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Fuel_Logs"> | Date | string
  }

  export type Vehicle_TaxesWhereInput = {
    AND?: Vehicle_TaxesWhereInput | Vehicle_TaxesWhereInput[]
    OR?: Vehicle_TaxesWhereInput[]
    NOT?: Vehicle_TaxesWhereInput | Vehicle_TaxesWhereInput[]
    taxId?: IntFilter<"Vehicle_Taxes"> | number
    carId?: IntFilter<"Vehicle_Taxes"> | number
    paymentDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    expiryDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    cost?: FloatNullableFilter<"Vehicle_Taxes"> | number | null
    receiptNumber?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    notes?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }

  export type Vehicle_TaxesOrderByWithRelationInput = {
    taxId?: SortOrder
    carId?: SortOrder
    paymentDate?: SortOrder
    expiryDate?: SortOrder
    cost?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    _relevance?: Vehicle_TaxesOrderByRelevanceInput
  }

  export type Vehicle_TaxesWhereUniqueInput = Prisma.AtLeast<{
    taxId?: number
    AND?: Vehicle_TaxesWhereInput | Vehicle_TaxesWhereInput[]
    OR?: Vehicle_TaxesWhereInput[]
    NOT?: Vehicle_TaxesWhereInput | Vehicle_TaxesWhereInput[]
    carId?: IntFilter<"Vehicle_Taxes"> | number
    paymentDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    expiryDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    cost?: FloatNullableFilter<"Vehicle_Taxes"> | number | null
    receiptNumber?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    notes?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }, "taxId">

  export type Vehicle_TaxesOrderByWithAggregationInput = {
    taxId?: SortOrder
    carId?: SortOrder
    paymentDate?: SortOrder
    expiryDate?: SortOrder
    cost?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Vehicle_TaxesCountOrderByAggregateInput
    _avg?: Vehicle_TaxesAvgOrderByAggregateInput
    _max?: Vehicle_TaxesMaxOrderByAggregateInput
    _min?: Vehicle_TaxesMinOrderByAggregateInput
    _sum?: Vehicle_TaxesSumOrderByAggregateInput
  }

  export type Vehicle_TaxesScalarWhereWithAggregatesInput = {
    AND?: Vehicle_TaxesScalarWhereWithAggregatesInput | Vehicle_TaxesScalarWhereWithAggregatesInput[]
    OR?: Vehicle_TaxesScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_TaxesScalarWhereWithAggregatesInput | Vehicle_TaxesScalarWhereWithAggregatesInput[]
    taxId?: IntWithAggregatesFilter<"Vehicle_Taxes"> | number
    carId?: IntWithAggregatesFilter<"Vehicle_Taxes"> | number
    paymentDate?: DateTimeWithAggregatesFilter<"Vehicle_Taxes"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"Vehicle_Taxes"> | Date | string
    cost?: FloatNullableWithAggregatesFilter<"Vehicle_Taxes"> | number | null
    receiptNumber?: StringNullableWithAggregatesFilter<"Vehicle_Taxes"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Vehicle_Taxes"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Taxes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Taxes"> | Date | string
  }

  export type Vehicle_TiresWhereInput = {
    AND?: Vehicle_TiresWhereInput | Vehicle_TiresWhereInput[]
    OR?: Vehicle_TiresWhereInput[]
    NOT?: Vehicle_TiresWhereInput | Vehicle_TiresWhereInput[]
    tireId?: IntFilter<"Vehicle_Tires"> | number
    carId?: IntFilter<"Vehicle_Tires"> | number
    changeDate?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    odometerRead?: IntFilter<"Vehicle_Tires"> | number
    brand?: StringNullableFilter<"Vehicle_Tires"> | string | null
    spec?: StringNullableFilter<"Vehicle_Tires"> | string | null
    cost?: FloatNullableFilter<"Vehicle_Tires"> | number | null
    tireCount?: IntFilter<"Vehicle_Tires"> | number
    limitOdometer?: IntNullableFilter<"Vehicle_Tires"> | number | null
    limitMonths?: IntNullableFilter<"Vehicle_Tires"> | number | null
    notes?: StringNullableFilter<"Vehicle_Tires"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }

  export type Vehicle_TiresOrderByWithRelationInput = {
    tireId?: SortOrder
    carId?: SortOrder
    changeDate?: SortOrder
    odometerRead?: SortOrder
    brand?: SortOrderInput | SortOrder
    spec?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrderInput | SortOrder
    limitMonths?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    _relevance?: Vehicle_TiresOrderByRelevanceInput
  }

  export type Vehicle_TiresWhereUniqueInput = Prisma.AtLeast<{
    tireId?: number
    AND?: Vehicle_TiresWhereInput | Vehicle_TiresWhereInput[]
    OR?: Vehicle_TiresWhereInput[]
    NOT?: Vehicle_TiresWhereInput | Vehicle_TiresWhereInput[]
    carId?: IntFilter<"Vehicle_Tires"> | number
    changeDate?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    odometerRead?: IntFilter<"Vehicle_Tires"> | number
    brand?: StringNullableFilter<"Vehicle_Tires"> | string | null
    spec?: StringNullableFilter<"Vehicle_Tires"> | string | null
    cost?: FloatNullableFilter<"Vehicle_Tires"> | number | null
    tireCount?: IntFilter<"Vehicle_Tires"> | number
    limitOdometer?: IntNullableFilter<"Vehicle_Tires"> | number | null
    limitMonths?: IntNullableFilter<"Vehicle_Tires"> | number | null
    notes?: StringNullableFilter<"Vehicle_Tires"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    car?: XOR<Master_VehiclesScalarRelationFilter, Master_VehiclesWhereInput>
  }, "tireId">

  export type Vehicle_TiresOrderByWithAggregationInput = {
    tireId?: SortOrder
    carId?: SortOrder
    changeDate?: SortOrder
    odometerRead?: SortOrder
    brand?: SortOrderInput | SortOrder
    spec?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrderInput | SortOrder
    limitMonths?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Vehicle_TiresCountOrderByAggregateInput
    _avg?: Vehicle_TiresAvgOrderByAggregateInput
    _max?: Vehicle_TiresMaxOrderByAggregateInput
    _min?: Vehicle_TiresMinOrderByAggregateInput
    _sum?: Vehicle_TiresSumOrderByAggregateInput
  }

  export type Vehicle_TiresScalarWhereWithAggregatesInput = {
    AND?: Vehicle_TiresScalarWhereWithAggregatesInput | Vehicle_TiresScalarWhereWithAggregatesInput[]
    OR?: Vehicle_TiresScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_TiresScalarWhereWithAggregatesInput | Vehicle_TiresScalarWhereWithAggregatesInput[]
    tireId?: IntWithAggregatesFilter<"Vehicle_Tires"> | number
    carId?: IntWithAggregatesFilter<"Vehicle_Tires"> | number
    changeDate?: DateTimeWithAggregatesFilter<"Vehicle_Tires"> | Date | string
    odometerRead?: IntWithAggregatesFilter<"Vehicle_Tires"> | number
    brand?: StringNullableWithAggregatesFilter<"Vehicle_Tires"> | string | null
    spec?: StringNullableWithAggregatesFilter<"Vehicle_Tires"> | string | null
    cost?: FloatNullableWithAggregatesFilter<"Vehicle_Tires"> | number | null
    tireCount?: IntWithAggregatesFilter<"Vehicle_Tires"> | number
    limitOdometer?: IntNullableWithAggregatesFilter<"Vehicle_Tires"> | number | null
    limitMonths?: IntNullableWithAggregatesFilter<"Vehicle_Tires"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Vehicle_Tires"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Tires"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Tires"> | Date | string
  }

  export type Master_VehiclesCreateInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUpdateInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesCreateManyInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
  }

  export type Master_VehiclesUpdateManyMutationInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Master_VehiclesUncheckedUpdateManyInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Master_DriversCreateInput = {
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutDriverInput
    leaves?: Driver_LeavesCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUncheckedCreateInput = {
    driverId?: number
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutDriverInput
    leaves?: Driver_LeavesUncheckedCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUpdateInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutDriverNestedInput
    leaves?: Driver_LeavesUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversUncheckedUpdateInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutDriverNestedInput
    leaves?: Driver_LeavesUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversCreateManyInput = {
    driverId?: number
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
  }

  export type Master_DriversUpdateManyMutationInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Master_DriversUncheckedUpdateManyInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Vehicle_RequestsCreateInput = {
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutRequestsInput
    driver?: Master_DriversCreateNestedOneWithoutRequestsInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsUncheckedCreateInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    carId?: number | null
    driverId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsUpdateInput = {
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutRequestsNestedInput
    driver?: Master_DriversUpdateOneWithoutRequestsNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsCreateManyInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    carId?: number | null
    driverId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsUpdateManyMutationInput = {
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_RequestsUncheckedUpdateManyInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesCreateInput = {
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: Master_DriversCreateNestedOneWithoutLeavesInput
  }

  export type Driver_LeavesUncheckedCreateInput = {
    leaveId?: number
    driverId: number
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Driver_LeavesUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: Master_DriversUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type Driver_LeavesUncheckedUpdateInput = {
    leaveId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesCreateManyInput = {
    leaveId?: number
    driverId: number
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Driver_LeavesUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesUncheckedUpdateManyInput = {
    leaveId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesCreateInput = {
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    car: Master_VehiclesCreateNestedOneWithoutMaintenancesInput
  }

  export type Vehicle_MaintenancesUncheckedCreateInput = {
    maintenanceId?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_MaintenancesUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type Vehicle_MaintenancesUncheckedUpdateInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesCreateManyInput = {
    maintenanceId?: number
    carId: number
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_MaintenancesUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesUncheckedUpdateManyInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsCreateInput = {
    amount: number
    fillDate: Date | string
    liters?: number | null
    odometerRead?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutFuelLogsInput
    request?: Vehicle_RequestsCreateNestedOneWithoutFuelLogsInput
  }

  export type Vehicle_Fuel_LogsUncheckedCreateInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    carId?: number | null
    liters?: number | null
    odometerRead?: number | null
    requestId?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutFuelLogsNestedInput
    request?: Vehicle_RequestsUpdateOneWithoutFuelLogsNestedInput
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    requestId?: NullableIntFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsCreateManyInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    carId?: number | null
    liters?: number | null
    odometerRead?: number | null
    requestId?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateManyInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    requestId?: NullableIntFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesCreateInput = {
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: Master_VehiclesCreateNestedOneWithoutTaxesInput
  }

  export type Vehicle_TaxesUncheckedCreateInput = {
    taxId?: number
    carId: number
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TaxesUpdateInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneRequiredWithoutTaxesNestedInput
  }

  export type Vehicle_TaxesUncheckedUpdateInput = {
    taxId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesCreateManyInput = {
    taxId?: number
    carId: number
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TaxesUpdateManyMutationInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesUncheckedUpdateManyInput = {
    taxId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresCreateInput = {
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car: Master_VehiclesCreateNestedOneWithoutTiresInput
  }

  export type Vehicle_TiresUncheckedCreateInput = {
    tireId?: number
    carId: number
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TiresUpdateInput = {
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneRequiredWithoutTiresNestedInput
  }

  export type Vehicle_TiresUncheckedUpdateInput = {
    tireId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresCreateManyInput = {
    tireId?: number
    carId: number
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TiresUpdateManyMutationInput = {
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresUncheckedUpdateManyInput = {
    tireId?: IntFieldUpdateOperationsInput | number
    carId?: IntFieldUpdateOperationsInput | number
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Vehicle_RequestsListRelationFilter = {
    every?: Vehicle_RequestsWhereInput
    some?: Vehicle_RequestsWhereInput
    none?: Vehicle_RequestsWhereInput
  }

  export type Vehicle_MaintenancesListRelationFilter = {
    every?: Vehicle_MaintenancesWhereInput
    some?: Vehicle_MaintenancesWhereInput
    none?: Vehicle_MaintenancesWhereInput
  }

  export type Vehicle_Fuel_LogsListRelationFilter = {
    every?: Vehicle_Fuel_LogsWhereInput
    some?: Vehicle_Fuel_LogsWhereInput
    none?: Vehicle_Fuel_LogsWhereInput
  }

  export type Vehicle_TaxesListRelationFilter = {
    every?: Vehicle_TaxesWhereInput
    some?: Vehicle_TaxesWhereInput
    none?: Vehicle_TaxesWhereInput
  }

  export type Vehicle_TiresListRelationFilter = {
    every?: Vehicle_TiresWhereInput
    some?: Vehicle_TiresWhereInput
    none?: Vehicle_TiresWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Vehicle_RequestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Vehicle_MaintenancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Vehicle_Fuel_LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Vehicle_TaxesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Vehicle_TiresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Master_VehiclesOrderByRelevanceInput = {
    fields: Master_VehiclesOrderByRelevanceFieldEnum | Master_VehiclesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Master_VehiclesCountOrderByAggregateInput = {
    carId?: SortOrder
    licensePlate?: SortOrder
    brand?: SortOrder
    carType?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    actExpiryDate?: SortOrder
    insuranceExpiryDate?: SortOrder
    taxExpiryDate?: SortOrder
  }

  export type Master_VehiclesAvgOrderByAggregateInput = {
    carId?: SortOrder
    capacity?: SortOrder
  }

  export type Master_VehiclesMaxOrderByAggregateInput = {
    carId?: SortOrder
    licensePlate?: SortOrder
    brand?: SortOrder
    carType?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    actExpiryDate?: SortOrder
    insuranceExpiryDate?: SortOrder
    taxExpiryDate?: SortOrder
  }

  export type Master_VehiclesMinOrderByAggregateInput = {
    carId?: SortOrder
    licensePlate?: SortOrder
    brand?: SortOrder
    carType?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    actExpiryDate?: SortOrder
    insuranceExpiryDate?: SortOrder
    taxExpiryDate?: SortOrder
  }

  export type Master_VehiclesSumOrderByAggregateInput = {
    carId?: SortOrder
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Driver_LeavesListRelationFilter = {
    every?: Driver_LeavesWhereInput
    some?: Driver_LeavesWhereInput
    none?: Driver_LeavesWhereInput
  }

  export type Driver_LeavesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Master_DriversOrderByRelevanceInput = {
    fields: Master_DriversOrderByRelevanceFieldEnum | Master_DriversOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Master_DriversCountOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    lineUserId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiryDate?: SortOrder
    address?: SortOrder
  }

  export type Master_DriversAvgOrderByAggregateInput = {
    driverId?: SortOrder
  }

  export type Master_DriversMaxOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    lineUserId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiryDate?: SortOrder
    address?: SortOrder
  }

  export type Master_DriversMinOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    lineUserId?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiryDate?: SortOrder
    address?: SortOrder
  }

  export type Master_DriversSumOrderByAggregateInput = {
    driverId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Master_VehiclesNullableScalarRelationFilter = {
    is?: Master_VehiclesWhereInput | null
    isNot?: Master_VehiclesWhereInput | null
  }

  export type Master_DriversNullableScalarRelationFilter = {
    is?: Master_DriversWhereInput | null
    isNot?: Master_DriversWhereInput | null
  }

  export type Vehicle_RequestsOrderByRelevanceInput = {
    fields: Vehicle_RequestsOrderByRelevanceFieldEnum | Vehicle_RequestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_RequestsCountOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    purpose?: SortOrder
    destination?: SortOrder
    province?: SortOrder
    refOrderNumber?: SortOrder
    refOrderDate?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    passengerCount?: SortOrder
    passengerNames?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    startOdometerPhoto?: SortOrder
    endOdometerPhoto?: SortOrder
    actualDistance?: SortOrder
    departureRecordedAt?: SortOrder
    arrivalRecordedAt?: SortOrder
    isRecurring?: SortOrder
    recurrencePattern?: SortOrder
    recurrenceGroupId?: SortOrder
    parentRequestId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_RequestsAvgOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    passengerCount?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    actualDistance?: SortOrder
    parentRequestId?: SortOrder
  }

  export type Vehicle_RequestsMaxOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    purpose?: SortOrder
    destination?: SortOrder
    province?: SortOrder
    refOrderNumber?: SortOrder
    refOrderDate?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    passengerCount?: SortOrder
    passengerNames?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    startOdometerPhoto?: SortOrder
    endOdometerPhoto?: SortOrder
    actualDistance?: SortOrder
    departureRecordedAt?: SortOrder
    arrivalRecordedAt?: SortOrder
    isRecurring?: SortOrder
    recurrencePattern?: SortOrder
    recurrenceGroupId?: SortOrder
    parentRequestId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_RequestsMinOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    purpose?: SortOrder
    destination?: SortOrder
    province?: SortOrder
    refOrderNumber?: SortOrder
    refOrderDate?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    passengerCount?: SortOrder
    passengerNames?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    startOdometerPhoto?: SortOrder
    endOdometerPhoto?: SortOrder
    actualDistance?: SortOrder
    departureRecordedAt?: SortOrder
    arrivalRecordedAt?: SortOrder
    isRecurring?: SortOrder
    recurrencePattern?: SortOrder
    recurrenceGroupId?: SortOrder
    parentRequestId?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_RequestsSumOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    passengerCount?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
    startOdometer?: SortOrder
    endOdometer?: SortOrder
    actualDistance?: SortOrder
    parentRequestId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Master_DriversScalarRelationFilter = {
    is?: Master_DriversWhereInput
    isNot?: Master_DriversWhereInput
  }

  export type Driver_LeavesOrderByRelevanceInput = {
    fields: Driver_LeavesOrderByRelevanceFieldEnum | Driver_LeavesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Driver_LeavesCountOrderByAggregateInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    leaveType?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Driver_LeavesAvgOrderByAggregateInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
  }

  export type Driver_LeavesMaxOrderByAggregateInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    leaveType?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Driver_LeavesMinOrderByAggregateInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    leaveType?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Driver_LeavesSumOrderByAggregateInput = {
    leaveId?: SortOrder
    driverId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Master_VehiclesScalarRelationFilter = {
    is?: Master_VehiclesWhereInput
    isNot?: Master_VehiclesWhereInput
  }

  export type Vehicle_MaintenancesOrderByRelevanceInput = {
    fields: Vehicle_MaintenancesOrderByRelevanceFieldEnum | Vehicle_MaintenancesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_MaintenancesCountOrderByAggregateInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_MaintenancesAvgOrderByAggregateInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    cost?: SortOrder
  }

  export type Vehicle_MaintenancesMaxOrderByAggregateInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_MaintenancesMinOrderByAggregateInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    cost?: SortOrder
    details?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_MaintenancesSumOrderByAggregateInput = {
    maintenanceId?: SortOrder
    carId?: SortOrder
    cost?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Vehicle_RequestsNullableScalarRelationFilter = {
    is?: Vehicle_RequestsWhereInput | null
    isNot?: Vehicle_RequestsWhereInput | null
  }

  export type Vehicle_Fuel_LogsOrderByRelevanceInput = {
    fields: Vehicle_Fuel_LogsOrderByRelevanceFieldEnum | Vehicle_Fuel_LogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_Fuel_LogsCountOrderByAggregateInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    fillDate?: SortOrder
    carId?: SortOrder
    liters?: SortOrder
    odometerRead?: SortOrder
    requestId?: SortOrder
    refSlip?: SortOrder
    fuelProvider?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_Fuel_LogsAvgOrderByAggregateInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
    liters?: SortOrder
    odometerRead?: SortOrder
    requestId?: SortOrder
  }

  export type Vehicle_Fuel_LogsMaxOrderByAggregateInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    fillDate?: SortOrder
    carId?: SortOrder
    liters?: SortOrder
    odometerRead?: SortOrder
    requestId?: SortOrder
    refSlip?: SortOrder
    fuelProvider?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_Fuel_LogsMinOrderByAggregateInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    fillDate?: SortOrder
    carId?: SortOrder
    liters?: SortOrder
    odometerRead?: SortOrder
    requestId?: SortOrder
    refSlip?: SortOrder
    fuelProvider?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_Fuel_LogsSumOrderByAggregateInput = {
    fuelLogId?: SortOrder
    amount?: SortOrder
    carId?: SortOrder
    liters?: SortOrder
    odometerRead?: SortOrder
    requestId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Vehicle_TaxesOrderByRelevanceInput = {
    fields: Vehicle_TaxesOrderByRelevanceFieldEnum | Vehicle_TaxesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_TaxesCountOrderByAggregateInput = {
    taxId?: SortOrder
    carId?: SortOrder
    paymentDate?: SortOrder
    expiryDate?: SortOrder
    cost?: SortOrder
    receiptNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TaxesAvgOrderByAggregateInput = {
    taxId?: SortOrder
    carId?: SortOrder
    cost?: SortOrder
  }

  export type Vehicle_TaxesMaxOrderByAggregateInput = {
    taxId?: SortOrder
    carId?: SortOrder
    paymentDate?: SortOrder
    expiryDate?: SortOrder
    cost?: SortOrder
    receiptNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TaxesMinOrderByAggregateInput = {
    taxId?: SortOrder
    carId?: SortOrder
    paymentDate?: SortOrder
    expiryDate?: SortOrder
    cost?: SortOrder
    receiptNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TaxesSumOrderByAggregateInput = {
    taxId?: SortOrder
    carId?: SortOrder
    cost?: SortOrder
  }

  export type Vehicle_TiresOrderByRelevanceInput = {
    fields: Vehicle_TiresOrderByRelevanceFieldEnum | Vehicle_TiresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Vehicle_TiresCountOrderByAggregateInput = {
    tireId?: SortOrder
    carId?: SortOrder
    changeDate?: SortOrder
    odometerRead?: SortOrder
    brand?: SortOrder
    spec?: SortOrder
    cost?: SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrder
    limitMonths?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TiresAvgOrderByAggregateInput = {
    tireId?: SortOrder
    carId?: SortOrder
    odometerRead?: SortOrder
    cost?: SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrder
    limitMonths?: SortOrder
  }

  export type Vehicle_TiresMaxOrderByAggregateInput = {
    tireId?: SortOrder
    carId?: SortOrder
    changeDate?: SortOrder
    odometerRead?: SortOrder
    brand?: SortOrder
    spec?: SortOrder
    cost?: SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrder
    limitMonths?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TiresMinOrderByAggregateInput = {
    tireId?: SortOrder
    carId?: SortOrder
    changeDate?: SortOrder
    odometerRead?: SortOrder
    brand?: SortOrder
    spec?: SortOrder
    cost?: SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrder
    limitMonths?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_TiresSumOrderByAggregateInput = {
    tireId?: SortOrder
    carId?: SortOrder
    odometerRead?: SortOrder
    cost?: SortOrder
    tireCount?: SortOrder
    limitOdometer?: SortOrder
    limitMonths?: SortOrder
  }

  export type Vehicle_RequestsCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Vehicle_MaintenancesCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput> | Vehicle_MaintenancesCreateWithoutCarInput[] | Vehicle_MaintenancesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_MaintenancesCreateOrConnectWithoutCarInput | Vehicle_MaintenancesCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_MaintenancesCreateManyCarInputEnvelope
    connect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
  }

  export type Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput> | Vehicle_Fuel_LogsCreateWithoutCarInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput | Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyCarInputEnvelope
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
  }

  export type Vehicle_TaxesCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput> | Vehicle_TaxesCreateWithoutCarInput[] | Vehicle_TaxesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TaxesCreateOrConnectWithoutCarInput | Vehicle_TaxesCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_TaxesCreateManyCarInputEnvelope
    connect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
  }

  export type Vehicle_TiresCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput> | Vehicle_TiresCreateWithoutCarInput[] | Vehicle_TiresUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TiresCreateOrConnectWithoutCarInput | Vehicle_TiresCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_TiresCreateManyCarInputEnvelope
    connect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
  }

  export type Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput> | Vehicle_MaintenancesCreateWithoutCarInput[] | Vehicle_MaintenancesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_MaintenancesCreateOrConnectWithoutCarInput | Vehicle_MaintenancesCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_MaintenancesCreateManyCarInputEnvelope
    connect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
  }

  export type Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput> | Vehicle_Fuel_LogsCreateWithoutCarInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput | Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyCarInputEnvelope
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
  }

  export type Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput> | Vehicle_TaxesCreateWithoutCarInput[] | Vehicle_TaxesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TaxesCreateOrConnectWithoutCarInput | Vehicle_TaxesCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_TaxesCreateManyCarInputEnvelope
    connect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
  }

  export type Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput> | Vehicle_TiresCreateWithoutCarInput[] | Vehicle_TiresUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TiresCreateOrConnectWithoutCarInput | Vehicle_TiresCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_TiresCreateManyCarInputEnvelope
    connect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Vehicle_RequestsUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_RequestsUpsertWithWhereUniqueWithoutCarInput | Vehicle_RequestsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    set?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    disconnect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    delete?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    update?: Vehicle_RequestsUpdateWithWhereUniqueWithoutCarInput | Vehicle_RequestsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_RequestsUpdateManyWithWhereWithoutCarInput | Vehicle_RequestsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
  }

  export type Vehicle_MaintenancesUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput> | Vehicle_MaintenancesCreateWithoutCarInput[] | Vehicle_MaintenancesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_MaintenancesCreateOrConnectWithoutCarInput | Vehicle_MaintenancesCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_MaintenancesUpsertWithWhereUniqueWithoutCarInput | Vehicle_MaintenancesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_MaintenancesCreateManyCarInputEnvelope
    set?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    disconnect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    delete?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    connect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    update?: Vehicle_MaintenancesUpdateWithWhereUniqueWithoutCarInput | Vehicle_MaintenancesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_MaintenancesUpdateManyWithWhereWithoutCarInput | Vehicle_MaintenancesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_MaintenancesScalarWhereInput | Vehicle_MaintenancesScalarWhereInput[]
  }

  export type Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput> | Vehicle_Fuel_LogsCreateWithoutCarInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput | Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutCarInput | Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyCarInputEnvelope
    set?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    delete?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    update?: Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutCarInput | Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_Fuel_LogsUpdateManyWithWhereWithoutCarInput | Vehicle_Fuel_LogsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
  }

  export type Vehicle_TaxesUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput> | Vehicle_TaxesCreateWithoutCarInput[] | Vehicle_TaxesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TaxesCreateOrConnectWithoutCarInput | Vehicle_TaxesCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_TaxesUpsertWithWhereUniqueWithoutCarInput | Vehicle_TaxesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_TaxesCreateManyCarInputEnvelope
    set?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    disconnect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    delete?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    connect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    update?: Vehicle_TaxesUpdateWithWhereUniqueWithoutCarInput | Vehicle_TaxesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_TaxesUpdateManyWithWhereWithoutCarInput | Vehicle_TaxesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_TaxesScalarWhereInput | Vehicle_TaxesScalarWhereInput[]
  }

  export type Vehicle_TiresUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput> | Vehicle_TiresCreateWithoutCarInput[] | Vehicle_TiresUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TiresCreateOrConnectWithoutCarInput | Vehicle_TiresCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_TiresUpsertWithWhereUniqueWithoutCarInput | Vehicle_TiresUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_TiresCreateManyCarInputEnvelope
    set?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    disconnect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    delete?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    connect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    update?: Vehicle_TiresUpdateWithWhereUniqueWithoutCarInput | Vehicle_TiresUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_TiresUpdateManyWithWhereWithoutCarInput | Vehicle_TiresUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_TiresScalarWhereInput | Vehicle_TiresScalarWhereInput[]
  }

  export type Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_RequestsUpsertWithWhereUniqueWithoutCarInput | Vehicle_RequestsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    set?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    disconnect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    delete?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    update?: Vehicle_RequestsUpdateWithWhereUniqueWithoutCarInput | Vehicle_RequestsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_RequestsUpdateManyWithWhereWithoutCarInput | Vehicle_RequestsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
  }

  export type Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput> | Vehicle_MaintenancesCreateWithoutCarInput[] | Vehicle_MaintenancesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_MaintenancesCreateOrConnectWithoutCarInput | Vehicle_MaintenancesCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_MaintenancesUpsertWithWhereUniqueWithoutCarInput | Vehicle_MaintenancesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_MaintenancesCreateManyCarInputEnvelope
    set?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    disconnect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    delete?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    connect?: Vehicle_MaintenancesWhereUniqueInput | Vehicle_MaintenancesWhereUniqueInput[]
    update?: Vehicle_MaintenancesUpdateWithWhereUniqueWithoutCarInput | Vehicle_MaintenancesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_MaintenancesUpdateManyWithWhereWithoutCarInput | Vehicle_MaintenancesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_MaintenancesScalarWhereInput | Vehicle_MaintenancesScalarWhereInput[]
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput> | Vehicle_Fuel_LogsCreateWithoutCarInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput | Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutCarInput | Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyCarInputEnvelope
    set?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    delete?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    update?: Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutCarInput | Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_Fuel_LogsUpdateManyWithWhereWithoutCarInput | Vehicle_Fuel_LogsUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
  }

  export type Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput> | Vehicle_TaxesCreateWithoutCarInput[] | Vehicle_TaxesUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TaxesCreateOrConnectWithoutCarInput | Vehicle_TaxesCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_TaxesUpsertWithWhereUniqueWithoutCarInput | Vehicle_TaxesUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_TaxesCreateManyCarInputEnvelope
    set?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    disconnect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    delete?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    connect?: Vehicle_TaxesWhereUniqueInput | Vehicle_TaxesWhereUniqueInput[]
    update?: Vehicle_TaxesUpdateWithWhereUniqueWithoutCarInput | Vehicle_TaxesUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_TaxesUpdateManyWithWhereWithoutCarInput | Vehicle_TaxesUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_TaxesScalarWhereInput | Vehicle_TaxesScalarWhereInput[]
  }

  export type Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput = {
    create?: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput> | Vehicle_TiresCreateWithoutCarInput[] | Vehicle_TiresUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_TiresCreateOrConnectWithoutCarInput | Vehicle_TiresCreateOrConnectWithoutCarInput[]
    upsert?: Vehicle_TiresUpsertWithWhereUniqueWithoutCarInput | Vehicle_TiresUpsertWithWhereUniqueWithoutCarInput[]
    createMany?: Vehicle_TiresCreateManyCarInputEnvelope
    set?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    disconnect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    delete?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    connect?: Vehicle_TiresWhereUniqueInput | Vehicle_TiresWhereUniqueInput[]
    update?: Vehicle_TiresUpdateWithWhereUniqueWithoutCarInput | Vehicle_TiresUpdateWithWhereUniqueWithoutCarInput[]
    updateMany?: Vehicle_TiresUpdateManyWithWhereWithoutCarInput | Vehicle_TiresUpdateManyWithWhereWithoutCarInput[]
    deleteMany?: Vehicle_TiresScalarWhereInput | Vehicle_TiresScalarWhereInput[]
  }

  export type Vehicle_RequestsCreateNestedManyWithoutDriverInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Driver_LeavesCreateNestedManyWithoutDriverInput = {
    create?: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput> | Driver_LeavesCreateWithoutDriverInput[] | Driver_LeavesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Driver_LeavesCreateOrConnectWithoutDriverInput | Driver_LeavesCreateOrConnectWithoutDriverInput[]
    createMany?: Driver_LeavesCreateManyDriverInputEnvelope
    connect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
  }

  export type Vehicle_RequestsUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Driver_LeavesUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput> | Driver_LeavesCreateWithoutDriverInput[] | Driver_LeavesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Driver_LeavesCreateOrConnectWithoutDriverInput | Driver_LeavesCreateOrConnectWithoutDriverInput[]
    createMany?: Driver_LeavesCreateManyDriverInputEnvelope
    connect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
  }

  export type Vehicle_RequestsUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    upsert?: Vehicle_RequestsUpsertWithWhereUniqueWithoutDriverInput | Vehicle_RequestsUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    set?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    disconnect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    delete?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    update?: Vehicle_RequestsUpdateWithWhereUniqueWithoutDriverInput | Vehicle_RequestsUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Vehicle_RequestsUpdateManyWithWhereWithoutDriverInput | Vehicle_RequestsUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
  }

  export type Driver_LeavesUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput> | Driver_LeavesCreateWithoutDriverInput[] | Driver_LeavesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Driver_LeavesCreateOrConnectWithoutDriverInput | Driver_LeavesCreateOrConnectWithoutDriverInput[]
    upsert?: Driver_LeavesUpsertWithWhereUniqueWithoutDriverInput | Driver_LeavesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Driver_LeavesCreateManyDriverInputEnvelope
    set?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    disconnect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    delete?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    connect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    update?: Driver_LeavesUpdateWithWhereUniqueWithoutDriverInput | Driver_LeavesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Driver_LeavesUpdateManyWithWhereWithoutDriverInput | Driver_LeavesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Driver_LeavesScalarWhereInput | Driver_LeavesScalarWhereInput[]
  }

  export type Vehicle_RequestsUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    upsert?: Vehicle_RequestsUpsertWithWhereUniqueWithoutDriverInput | Vehicle_RequestsUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    set?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    disconnect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    delete?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
    update?: Vehicle_RequestsUpdateWithWhereUniqueWithoutDriverInput | Vehicle_RequestsUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Vehicle_RequestsUpdateManyWithWhereWithoutDriverInput | Vehicle_RequestsUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
  }

  export type Driver_LeavesUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput> | Driver_LeavesCreateWithoutDriverInput[] | Driver_LeavesUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Driver_LeavesCreateOrConnectWithoutDriverInput | Driver_LeavesCreateOrConnectWithoutDriverInput[]
    upsert?: Driver_LeavesUpsertWithWhereUniqueWithoutDriverInput | Driver_LeavesUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: Driver_LeavesCreateManyDriverInputEnvelope
    set?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    disconnect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    delete?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    connect?: Driver_LeavesWhereUniqueInput | Driver_LeavesWhereUniqueInput[]
    update?: Driver_LeavesUpdateWithWhereUniqueWithoutDriverInput | Driver_LeavesUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: Driver_LeavesUpdateManyWithWhereWithoutDriverInput | Driver_LeavesUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: Driver_LeavesScalarWhereInput | Driver_LeavesScalarWhereInput[]
  }

  export type Master_VehiclesCreateNestedOneWithoutRequestsInput = {
    create?: XOR<Master_VehiclesCreateWithoutRequestsInput, Master_VehiclesUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutRequestsInput
    connect?: Master_VehiclesWhereUniqueInput
  }

  export type Master_DriversCreateNestedOneWithoutRequestsInput = {
    create?: XOR<Master_DriversCreateWithoutRequestsInput, Master_DriversUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: Master_DriversCreateOrConnectWithoutRequestsInput
    connect?: Master_DriversWhereUniqueInput
  }

  export type Vehicle_Fuel_LogsCreateNestedManyWithoutRequestInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput> | Vehicle_Fuel_LogsCreateWithoutRequestInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput | Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyRequestInputEnvelope
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
  }

  export type Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput> | Vehicle_Fuel_LogsCreateWithoutRequestInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput | Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyRequestInputEnvelope
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Master_VehiclesUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<Master_VehiclesCreateWithoutRequestsInput, Master_VehiclesUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutRequestsInput
    upsert?: Master_VehiclesUpsertWithoutRequestsInput
    disconnect?: Master_VehiclesWhereInput | boolean
    delete?: Master_VehiclesWhereInput | boolean
    connect?: Master_VehiclesWhereUniqueInput
    update?: XOR<XOR<Master_VehiclesUpdateToOneWithWhereWithoutRequestsInput, Master_VehiclesUpdateWithoutRequestsInput>, Master_VehiclesUncheckedUpdateWithoutRequestsInput>
  }

  export type Master_DriversUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<Master_DriversCreateWithoutRequestsInput, Master_DriversUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: Master_DriversCreateOrConnectWithoutRequestsInput
    upsert?: Master_DriversUpsertWithoutRequestsInput
    disconnect?: Master_DriversWhereInput | boolean
    delete?: Master_DriversWhereInput | boolean
    connect?: Master_DriversWhereUniqueInput
    update?: XOR<XOR<Master_DriversUpdateToOneWithWhereWithoutRequestsInput, Master_DriversUpdateWithoutRequestsInput>, Master_DriversUncheckedUpdateWithoutRequestsInput>
  }

  export type Vehicle_Fuel_LogsUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput> | Vehicle_Fuel_LogsCreateWithoutRequestInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput | Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput[]
    upsert?: Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutRequestInput | Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyRequestInputEnvelope
    set?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    delete?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    update?: Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutRequestInput | Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: Vehicle_Fuel_LogsUpdateManyWithWhereWithoutRequestInput | Vehicle_Fuel_LogsUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput> | Vehicle_Fuel_LogsCreateWithoutRequestInput[] | Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput | Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput[]
    upsert?: Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutRequestInput | Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: Vehicle_Fuel_LogsCreateManyRequestInputEnvelope
    set?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    disconnect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    delete?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    connect?: Vehicle_Fuel_LogsWhereUniqueInput | Vehicle_Fuel_LogsWhereUniqueInput[]
    update?: Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutRequestInput | Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: Vehicle_Fuel_LogsUpdateManyWithWhereWithoutRequestInput | Vehicle_Fuel_LogsUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
  }

  export type Master_DriversCreateNestedOneWithoutLeavesInput = {
    create?: XOR<Master_DriversCreateWithoutLeavesInput, Master_DriversUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: Master_DriversCreateOrConnectWithoutLeavesInput
    connect?: Master_DriversWhereUniqueInput
  }

  export type Master_DriversUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<Master_DriversCreateWithoutLeavesInput, Master_DriversUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: Master_DriversCreateOrConnectWithoutLeavesInput
    upsert?: Master_DriversUpsertWithoutLeavesInput
    connect?: Master_DriversWhereUniqueInput
    update?: XOR<XOR<Master_DriversUpdateToOneWithWhereWithoutLeavesInput, Master_DriversUpdateWithoutLeavesInput>, Master_DriversUncheckedUpdateWithoutLeavesInput>
  }

  export type Master_VehiclesCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<Master_VehiclesCreateWithoutMaintenancesInput, Master_VehiclesUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutMaintenancesInput
    connect?: Master_VehiclesWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Master_VehiclesUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<Master_VehiclesCreateWithoutMaintenancesInput, Master_VehiclesUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutMaintenancesInput
    upsert?: Master_VehiclesUpsertWithoutMaintenancesInput
    connect?: Master_VehiclesWhereUniqueInput
    update?: XOR<XOR<Master_VehiclesUpdateToOneWithWhereWithoutMaintenancesInput, Master_VehiclesUpdateWithoutMaintenancesInput>, Master_VehiclesUncheckedUpdateWithoutMaintenancesInput>
  }

  export type Master_VehiclesCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<Master_VehiclesCreateWithoutFuelLogsInput, Master_VehiclesUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutFuelLogsInput
    connect?: Master_VehiclesWhereUniqueInput
  }

  export type Vehicle_RequestsCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutFuelLogsInput, Vehicle_RequestsUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutFuelLogsInput
    connect?: Vehicle_RequestsWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Master_VehiclesUpdateOneWithoutFuelLogsNestedInput = {
    create?: XOR<Master_VehiclesCreateWithoutFuelLogsInput, Master_VehiclesUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutFuelLogsInput
    upsert?: Master_VehiclesUpsertWithoutFuelLogsInput
    disconnect?: Master_VehiclesWhereInput | boolean
    delete?: Master_VehiclesWhereInput | boolean
    connect?: Master_VehiclesWhereUniqueInput
    update?: XOR<XOR<Master_VehiclesUpdateToOneWithWhereWithoutFuelLogsInput, Master_VehiclesUpdateWithoutFuelLogsInput>, Master_VehiclesUncheckedUpdateWithoutFuelLogsInput>
  }

  export type Vehicle_RequestsUpdateOneWithoutFuelLogsNestedInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutFuelLogsInput, Vehicle_RequestsUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutFuelLogsInput
    upsert?: Vehicle_RequestsUpsertWithoutFuelLogsInput
    disconnect?: Vehicle_RequestsWhereInput | boolean
    delete?: Vehicle_RequestsWhereInput | boolean
    connect?: Vehicle_RequestsWhereUniqueInput
    update?: XOR<XOR<Vehicle_RequestsUpdateToOneWithWhereWithoutFuelLogsInput, Vehicle_RequestsUpdateWithoutFuelLogsInput>, Vehicle_RequestsUncheckedUpdateWithoutFuelLogsInput>
  }

  export type Master_VehiclesCreateNestedOneWithoutTaxesInput = {
    create?: XOR<Master_VehiclesCreateWithoutTaxesInput, Master_VehiclesUncheckedCreateWithoutTaxesInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutTaxesInput
    connect?: Master_VehiclesWhereUniqueInput
  }

  export type Master_VehiclesUpdateOneRequiredWithoutTaxesNestedInput = {
    create?: XOR<Master_VehiclesCreateWithoutTaxesInput, Master_VehiclesUncheckedCreateWithoutTaxesInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutTaxesInput
    upsert?: Master_VehiclesUpsertWithoutTaxesInput
    connect?: Master_VehiclesWhereUniqueInput
    update?: XOR<XOR<Master_VehiclesUpdateToOneWithWhereWithoutTaxesInput, Master_VehiclesUpdateWithoutTaxesInput>, Master_VehiclesUncheckedUpdateWithoutTaxesInput>
  }

  export type Master_VehiclesCreateNestedOneWithoutTiresInput = {
    create?: XOR<Master_VehiclesCreateWithoutTiresInput, Master_VehiclesUncheckedCreateWithoutTiresInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutTiresInput
    connect?: Master_VehiclesWhereUniqueInput
  }

  export type Master_VehiclesUpdateOneRequiredWithoutTiresNestedInput = {
    create?: XOR<Master_VehiclesCreateWithoutTiresInput, Master_VehiclesUncheckedCreateWithoutTiresInput>
    connectOrCreate?: Master_VehiclesCreateOrConnectWithoutTiresInput
    upsert?: Master_VehiclesUpsertWithoutTiresInput
    connect?: Master_VehiclesWhereUniqueInput
    update?: XOR<XOR<Master_VehiclesUpdateToOneWithWhereWithoutTiresInput, Master_VehiclesUpdateWithoutTiresInput>, Master_VehiclesUncheckedUpdateWithoutTiresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Vehicle_RequestsCreateWithoutCarInput = {
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: Master_DriversCreateNestedOneWithoutRequestsInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsUncheckedCreateWithoutCarInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    driverId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsCreateOrConnectWithoutCarInput = {
    where: Vehicle_RequestsWhereUniqueInput
    create: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_RequestsCreateManyCarInputEnvelope = {
    data: Vehicle_RequestsCreateManyCarInput | Vehicle_RequestsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_MaintenancesCreateWithoutCarInput = {
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_MaintenancesUncheckedCreateWithoutCarInput = {
    maintenanceId?: number
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_MaintenancesCreateOrConnectWithoutCarInput = {
    where: Vehicle_MaintenancesWhereUniqueInput
    create: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_MaintenancesCreateManyCarInputEnvelope = {
    data: Vehicle_MaintenancesCreateManyCarInput | Vehicle_MaintenancesCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_Fuel_LogsCreateWithoutCarInput = {
    amount: number
    fillDate: Date | string
    liters?: number | null
    odometerRead?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    request?: Vehicle_RequestsCreateNestedOneWithoutFuelLogsInput
  }

  export type Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    liters?: number | null
    odometerRead?: number | null
    requestId?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsCreateOrConnectWithoutCarInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    create: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_Fuel_LogsCreateManyCarInputEnvelope = {
    data: Vehicle_Fuel_LogsCreateManyCarInput | Vehicle_Fuel_LogsCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_TaxesCreateWithoutCarInput = {
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TaxesUncheckedCreateWithoutCarInput = {
    taxId?: number
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TaxesCreateOrConnectWithoutCarInput = {
    where: Vehicle_TaxesWhereUniqueInput
    create: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_TaxesCreateManyCarInputEnvelope = {
    data: Vehicle_TaxesCreateManyCarInput | Vehicle_TaxesCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_TiresCreateWithoutCarInput = {
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TiresUncheckedCreateWithoutCarInput = {
    tireId?: number
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TiresCreateOrConnectWithoutCarInput = {
    where: Vehicle_TiresWhereUniqueInput
    create: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_TiresCreateManyCarInputEnvelope = {
    data: Vehicle_TiresCreateManyCarInput | Vehicle_TiresCreateManyCarInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_RequestsUpsertWithWhereUniqueWithoutCarInput = {
    where: Vehicle_RequestsWhereUniqueInput
    update: XOR<Vehicle_RequestsUpdateWithoutCarInput, Vehicle_RequestsUncheckedUpdateWithoutCarInput>
    create: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_RequestsUpdateWithWhereUniqueWithoutCarInput = {
    where: Vehicle_RequestsWhereUniqueInput
    data: XOR<Vehicle_RequestsUpdateWithoutCarInput, Vehicle_RequestsUncheckedUpdateWithoutCarInput>
  }

  export type Vehicle_RequestsUpdateManyWithWhereWithoutCarInput = {
    where: Vehicle_RequestsScalarWhereInput
    data: XOR<Vehicle_RequestsUpdateManyMutationInput, Vehicle_RequestsUncheckedUpdateManyWithoutCarInput>
  }

  export type Vehicle_RequestsScalarWhereInput = {
    AND?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
    OR?: Vehicle_RequestsScalarWhereInput[]
    NOT?: Vehicle_RequestsScalarWhereInput | Vehicle_RequestsScalarWhereInput[]
    requestId?: IntFilter<"Vehicle_Requests"> | number
    requesterStaffId?: IntFilter<"Vehicle_Requests"> | number
    purpose?: StringFilter<"Vehicle_Requests"> | string
    destination?: StringFilter<"Vehicle_Requests"> | string
    province?: StringFilter<"Vehicle_Requests"> | string
    refOrderNumber?: StringNullableFilter<"Vehicle_Requests"> | string | null
    refOrderDate?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    startDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    endDateTime?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    passengerCount?: IntFilter<"Vehicle_Requests"> | number
    passengerNames?: StringFilter<"Vehicle_Requests"> | string
    carId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    driverId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    status?: StringFilter<"Vehicle_Requests"> | string
    startOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    endOdometer?: IntNullableFilter<"Vehicle_Requests"> | number | null
    startOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    endOdometerPhoto?: StringNullableFilter<"Vehicle_Requests"> | string | null
    actualDistance?: IntNullableFilter<"Vehicle_Requests"> | number | null
    departureRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    arrivalRecordedAt?: DateTimeNullableFilter<"Vehicle_Requests"> | Date | string | null
    isRecurring?: BoolFilter<"Vehicle_Requests"> | boolean
    recurrencePattern?: StringNullableFilter<"Vehicle_Requests"> | string | null
    recurrenceGroupId?: StringNullableFilter<"Vehicle_Requests"> | string | null
    parentRequestId?: IntNullableFilter<"Vehicle_Requests"> | number | null
    rejectionReason?: StringNullableFilter<"Vehicle_Requests"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
  }

  export type Vehicle_MaintenancesUpsertWithWhereUniqueWithoutCarInput = {
    where: Vehicle_MaintenancesWhereUniqueInput
    update: XOR<Vehicle_MaintenancesUpdateWithoutCarInput, Vehicle_MaintenancesUncheckedUpdateWithoutCarInput>
    create: XOR<Vehicle_MaintenancesCreateWithoutCarInput, Vehicle_MaintenancesUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_MaintenancesUpdateWithWhereUniqueWithoutCarInput = {
    where: Vehicle_MaintenancesWhereUniqueInput
    data: XOR<Vehicle_MaintenancesUpdateWithoutCarInput, Vehicle_MaintenancesUncheckedUpdateWithoutCarInput>
  }

  export type Vehicle_MaintenancesUpdateManyWithWhereWithoutCarInput = {
    where: Vehicle_MaintenancesScalarWhereInput
    data: XOR<Vehicle_MaintenancesUpdateManyMutationInput, Vehicle_MaintenancesUncheckedUpdateManyWithoutCarInput>
  }

  export type Vehicle_MaintenancesScalarWhereInput = {
    AND?: Vehicle_MaintenancesScalarWhereInput | Vehicle_MaintenancesScalarWhereInput[]
    OR?: Vehicle_MaintenancesScalarWhereInput[]
    NOT?: Vehicle_MaintenancesScalarWhereInput | Vehicle_MaintenancesScalarWhereInput[]
    maintenanceId?: IntFilter<"Vehicle_Maintenances"> | number
    carId?: IntFilter<"Vehicle_Maintenances"> | number
    startDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    endDate?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    type?: StringFilter<"Vehicle_Maintenances"> | string
    cost?: FloatNullableFilter<"Vehicle_Maintenances"> | number | null
    details?: StringNullableFilter<"Vehicle_Maintenances"> | string | null
    status?: StringFilter<"Vehicle_Maintenances"> | string
    createdAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Maintenances"> | Date | string
  }

  export type Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutCarInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    update: XOR<Vehicle_Fuel_LogsUpdateWithoutCarInput, Vehicle_Fuel_LogsUncheckedUpdateWithoutCarInput>
    create: XOR<Vehicle_Fuel_LogsCreateWithoutCarInput, Vehicle_Fuel_LogsUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutCarInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    data: XOR<Vehicle_Fuel_LogsUpdateWithoutCarInput, Vehicle_Fuel_LogsUncheckedUpdateWithoutCarInput>
  }

  export type Vehicle_Fuel_LogsUpdateManyWithWhereWithoutCarInput = {
    where: Vehicle_Fuel_LogsScalarWhereInput
    data: XOR<Vehicle_Fuel_LogsUpdateManyMutationInput, Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarInput>
  }

  export type Vehicle_Fuel_LogsScalarWhereInput = {
    AND?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
    OR?: Vehicle_Fuel_LogsScalarWhereInput[]
    NOT?: Vehicle_Fuel_LogsScalarWhereInput | Vehicle_Fuel_LogsScalarWhereInput[]
    fuelLogId?: IntFilter<"Vehicle_Fuel_Logs"> | number
    amount?: FloatFilter<"Vehicle_Fuel_Logs"> | number
    fillDate?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    carId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    liters?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    odometerRead?: FloatNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    requestId?: IntNullableFilter<"Vehicle_Fuel_Logs"> | number | null
    refSlip?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    fuelProvider?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    notes?: StringNullableFilter<"Vehicle_Fuel_Logs"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Fuel_Logs"> | Date | string
  }

  export type Vehicle_TaxesUpsertWithWhereUniqueWithoutCarInput = {
    where: Vehicle_TaxesWhereUniqueInput
    update: XOR<Vehicle_TaxesUpdateWithoutCarInput, Vehicle_TaxesUncheckedUpdateWithoutCarInput>
    create: XOR<Vehicle_TaxesCreateWithoutCarInput, Vehicle_TaxesUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_TaxesUpdateWithWhereUniqueWithoutCarInput = {
    where: Vehicle_TaxesWhereUniqueInput
    data: XOR<Vehicle_TaxesUpdateWithoutCarInput, Vehicle_TaxesUncheckedUpdateWithoutCarInput>
  }

  export type Vehicle_TaxesUpdateManyWithWhereWithoutCarInput = {
    where: Vehicle_TaxesScalarWhereInput
    data: XOR<Vehicle_TaxesUpdateManyMutationInput, Vehicle_TaxesUncheckedUpdateManyWithoutCarInput>
  }

  export type Vehicle_TaxesScalarWhereInput = {
    AND?: Vehicle_TaxesScalarWhereInput | Vehicle_TaxesScalarWhereInput[]
    OR?: Vehicle_TaxesScalarWhereInput[]
    NOT?: Vehicle_TaxesScalarWhereInput | Vehicle_TaxesScalarWhereInput[]
    taxId?: IntFilter<"Vehicle_Taxes"> | number
    carId?: IntFilter<"Vehicle_Taxes"> | number
    paymentDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    expiryDate?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    cost?: FloatNullableFilter<"Vehicle_Taxes"> | number | null
    receiptNumber?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    notes?: StringNullableFilter<"Vehicle_Taxes"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Taxes"> | Date | string
  }

  export type Vehicle_TiresUpsertWithWhereUniqueWithoutCarInput = {
    where: Vehicle_TiresWhereUniqueInput
    update: XOR<Vehicle_TiresUpdateWithoutCarInput, Vehicle_TiresUncheckedUpdateWithoutCarInput>
    create: XOR<Vehicle_TiresCreateWithoutCarInput, Vehicle_TiresUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_TiresUpdateWithWhereUniqueWithoutCarInput = {
    where: Vehicle_TiresWhereUniqueInput
    data: XOR<Vehicle_TiresUpdateWithoutCarInput, Vehicle_TiresUncheckedUpdateWithoutCarInput>
  }

  export type Vehicle_TiresUpdateManyWithWhereWithoutCarInput = {
    where: Vehicle_TiresScalarWhereInput
    data: XOR<Vehicle_TiresUpdateManyMutationInput, Vehicle_TiresUncheckedUpdateManyWithoutCarInput>
  }

  export type Vehicle_TiresScalarWhereInput = {
    AND?: Vehicle_TiresScalarWhereInput | Vehicle_TiresScalarWhereInput[]
    OR?: Vehicle_TiresScalarWhereInput[]
    NOT?: Vehicle_TiresScalarWhereInput | Vehicle_TiresScalarWhereInput[]
    tireId?: IntFilter<"Vehicle_Tires"> | number
    carId?: IntFilter<"Vehicle_Tires"> | number
    changeDate?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    odometerRead?: IntFilter<"Vehicle_Tires"> | number
    brand?: StringNullableFilter<"Vehicle_Tires"> | string | null
    spec?: StringNullableFilter<"Vehicle_Tires"> | string | null
    cost?: FloatNullableFilter<"Vehicle_Tires"> | number | null
    tireCount?: IntFilter<"Vehicle_Tires"> | number
    limitOdometer?: IntNullableFilter<"Vehicle_Tires"> | number | null
    limitMonths?: IntNullableFilter<"Vehicle_Tires"> | number | null
    notes?: StringNullableFilter<"Vehicle_Tires"> | string | null
    createdAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Tires"> | Date | string
  }

  export type Vehicle_RequestsCreateWithoutDriverInput = {
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutRequestsInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsUncheckedCreateWithoutDriverInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    carId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutRequestInput
  }

  export type Vehicle_RequestsCreateOrConnectWithoutDriverInput = {
    where: Vehicle_RequestsWhereUniqueInput
    create: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput>
  }

  export type Vehicle_RequestsCreateManyDriverInputEnvelope = {
    data: Vehicle_RequestsCreateManyDriverInput | Vehicle_RequestsCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type Driver_LeavesCreateWithoutDriverInput = {
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Driver_LeavesUncheckedCreateWithoutDriverInput = {
    leaveId?: number
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Driver_LeavesCreateOrConnectWithoutDriverInput = {
    where: Driver_LeavesWhereUniqueInput
    create: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput>
  }

  export type Driver_LeavesCreateManyDriverInputEnvelope = {
    data: Driver_LeavesCreateManyDriverInput | Driver_LeavesCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_RequestsUpsertWithWhereUniqueWithoutDriverInput = {
    where: Vehicle_RequestsWhereUniqueInput
    update: XOR<Vehicle_RequestsUpdateWithoutDriverInput, Vehicle_RequestsUncheckedUpdateWithoutDriverInput>
    create: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput>
  }

  export type Vehicle_RequestsUpdateWithWhereUniqueWithoutDriverInput = {
    where: Vehicle_RequestsWhereUniqueInput
    data: XOR<Vehicle_RequestsUpdateWithoutDriverInput, Vehicle_RequestsUncheckedUpdateWithoutDriverInput>
  }

  export type Vehicle_RequestsUpdateManyWithWhereWithoutDriverInput = {
    where: Vehicle_RequestsScalarWhereInput
    data: XOR<Vehicle_RequestsUpdateManyMutationInput, Vehicle_RequestsUncheckedUpdateManyWithoutDriverInput>
  }

  export type Driver_LeavesUpsertWithWhereUniqueWithoutDriverInput = {
    where: Driver_LeavesWhereUniqueInput
    update: XOR<Driver_LeavesUpdateWithoutDriverInput, Driver_LeavesUncheckedUpdateWithoutDriverInput>
    create: XOR<Driver_LeavesCreateWithoutDriverInput, Driver_LeavesUncheckedCreateWithoutDriverInput>
  }

  export type Driver_LeavesUpdateWithWhereUniqueWithoutDriverInput = {
    where: Driver_LeavesWhereUniqueInput
    data: XOR<Driver_LeavesUpdateWithoutDriverInput, Driver_LeavesUncheckedUpdateWithoutDriverInput>
  }

  export type Driver_LeavesUpdateManyWithWhereWithoutDriverInput = {
    where: Driver_LeavesScalarWhereInput
    data: XOR<Driver_LeavesUpdateManyMutationInput, Driver_LeavesUncheckedUpdateManyWithoutDriverInput>
  }

  export type Driver_LeavesScalarWhereInput = {
    AND?: Driver_LeavesScalarWhereInput | Driver_LeavesScalarWhereInput[]
    OR?: Driver_LeavesScalarWhereInput[]
    NOT?: Driver_LeavesScalarWhereInput | Driver_LeavesScalarWhereInput[]
    leaveId?: IntFilter<"Driver_Leaves"> | number
    driverId?: IntFilter<"Driver_Leaves"> | number
    startDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    endDate?: DateTimeFilter<"Driver_Leaves"> | Date | string
    leaveType?: StringFilter<"Driver_Leaves"> | string
    reason?: StringNullableFilter<"Driver_Leaves"> | string | null
    status?: StringFilter<"Driver_Leaves"> | string
    createdAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
    updatedAt?: DateTimeFilter<"Driver_Leaves"> | Date | string
  }

  export type Master_VehiclesCreateWithoutRequestsInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    maintenances?: Vehicle_MaintenancesCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateWithoutRequestsInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    maintenances?: Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesCreateOrConnectWithoutRequestsInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutRequestsInput, Master_VehiclesUncheckedCreateWithoutRequestsInput>
  }

  export type Master_DriversCreateWithoutRequestsInput = {
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    leaves?: Driver_LeavesCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUncheckedCreateWithoutRequestsInput = {
    driverId?: number
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    leaves?: Driver_LeavesUncheckedCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversCreateOrConnectWithoutRequestsInput = {
    where: Master_DriversWhereUniqueInput
    create: XOR<Master_DriversCreateWithoutRequestsInput, Master_DriversUncheckedCreateWithoutRequestsInput>
  }

  export type Vehicle_Fuel_LogsCreateWithoutRequestInput = {
    amount: number
    fillDate: Date | string
    liters?: number | null
    odometerRead?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutFuelLogsInput
  }

  export type Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    carId?: number | null
    liters?: number | null
    odometerRead?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsCreateOrConnectWithoutRequestInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    create: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput>
  }

  export type Vehicle_Fuel_LogsCreateManyRequestInputEnvelope = {
    data: Vehicle_Fuel_LogsCreateManyRequestInput | Vehicle_Fuel_LogsCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type Master_VehiclesUpsertWithoutRequestsInput = {
    update: XOR<Master_VehiclesUpdateWithoutRequestsInput, Master_VehiclesUncheckedUpdateWithoutRequestsInput>
    create: XOR<Master_VehiclesCreateWithoutRequestsInput, Master_VehiclesUncheckedCreateWithoutRequestsInput>
    where?: Master_VehiclesWhereInput
  }

  export type Master_VehiclesUpdateToOneWithWhereWithoutRequestsInput = {
    where?: Master_VehiclesWhereInput
    data: XOR<Master_VehiclesUpdateWithoutRequestsInput, Master_VehiclesUncheckedUpdateWithoutRequestsInput>
  }

  export type Master_VehiclesUpdateWithoutRequestsInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maintenances?: Vehicle_MaintenancesUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateWithoutRequestsInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maintenances?: Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Master_DriversUpsertWithoutRequestsInput = {
    update: XOR<Master_DriversUpdateWithoutRequestsInput, Master_DriversUncheckedUpdateWithoutRequestsInput>
    create: XOR<Master_DriversCreateWithoutRequestsInput, Master_DriversUncheckedCreateWithoutRequestsInput>
    where?: Master_DriversWhereInput
  }

  export type Master_DriversUpdateToOneWithWhereWithoutRequestsInput = {
    where?: Master_DriversWhereInput
    data: XOR<Master_DriversUpdateWithoutRequestsInput, Master_DriversUncheckedUpdateWithoutRequestsInput>
  }

  export type Master_DriversUpdateWithoutRequestsInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: Driver_LeavesUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversUncheckedUpdateWithoutRequestsInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: Driver_LeavesUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type Vehicle_Fuel_LogsUpsertWithWhereUniqueWithoutRequestInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    update: XOR<Vehicle_Fuel_LogsUpdateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedUpdateWithoutRequestInput>
    create: XOR<Vehicle_Fuel_LogsCreateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedCreateWithoutRequestInput>
  }

  export type Vehicle_Fuel_LogsUpdateWithWhereUniqueWithoutRequestInput = {
    where: Vehicle_Fuel_LogsWhereUniqueInput
    data: XOR<Vehicle_Fuel_LogsUpdateWithoutRequestInput, Vehicle_Fuel_LogsUncheckedUpdateWithoutRequestInput>
  }

  export type Vehicle_Fuel_LogsUpdateManyWithWhereWithoutRequestInput = {
    where: Vehicle_Fuel_LogsScalarWhereInput
    data: XOR<Vehicle_Fuel_LogsUpdateManyMutationInput, Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestInput>
  }

  export type Master_DriversCreateWithoutLeavesInput = {
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUncheckedCreateWithoutLeavesInput = {
    driverId?: number
    driverName: string
    phone?: string | null
    status?: string
    lineUserId?: string | null
    licenseNumber?: string | null
    licenseExpiryDate?: Date | string | null
    address?: string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversCreateOrConnectWithoutLeavesInput = {
    where: Master_DriversWhereUniqueInput
    create: XOR<Master_DriversCreateWithoutLeavesInput, Master_DriversUncheckedCreateWithoutLeavesInput>
  }

  export type Master_DriversUpsertWithoutLeavesInput = {
    update: XOR<Master_DriversUpdateWithoutLeavesInput, Master_DriversUncheckedUpdateWithoutLeavesInput>
    create: XOR<Master_DriversCreateWithoutLeavesInput, Master_DriversUncheckedCreateWithoutLeavesInput>
    where?: Master_DriversWhereInput
  }

  export type Master_DriversUpdateToOneWithWhereWithoutLeavesInput = {
    where?: Master_DriversWhereInput
    data: XOR<Master_DriversUpdateWithoutLeavesInput, Master_DriversUncheckedUpdateWithoutLeavesInput>
  }

  export type Master_DriversUpdateWithoutLeavesInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversUncheckedUpdateWithoutLeavesInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type Master_VehiclesCreateWithoutMaintenancesInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateWithoutMaintenancesInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesCreateOrConnectWithoutMaintenancesInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutMaintenancesInput, Master_VehiclesUncheckedCreateWithoutMaintenancesInput>
  }

  export type Master_VehiclesUpsertWithoutMaintenancesInput = {
    update: XOR<Master_VehiclesUpdateWithoutMaintenancesInput, Master_VehiclesUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<Master_VehiclesCreateWithoutMaintenancesInput, Master_VehiclesUncheckedCreateWithoutMaintenancesInput>
    where?: Master_VehiclesWhereInput
  }

  export type Master_VehiclesUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: Master_VehiclesWhereInput
    data: XOR<Master_VehiclesUpdateWithoutMaintenancesInput, Master_VehiclesUncheckedUpdateWithoutMaintenancesInput>
  }

  export type Master_VehiclesUpdateWithoutMaintenancesInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateWithoutMaintenancesInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesCreateWithoutFuelLogsInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateWithoutFuelLogsInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesCreateOrConnectWithoutFuelLogsInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutFuelLogsInput, Master_VehiclesUncheckedCreateWithoutFuelLogsInput>
  }

  export type Vehicle_RequestsCreateWithoutFuelLogsInput = {
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutRequestsInput
    driver?: Master_DriversCreateNestedOneWithoutRequestsInput
  }

  export type Vehicle_RequestsUncheckedCreateWithoutFuelLogsInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    carId?: number | null
    driverId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsCreateOrConnectWithoutFuelLogsInput = {
    where: Vehicle_RequestsWhereUniqueInput
    create: XOR<Vehicle_RequestsCreateWithoutFuelLogsInput, Vehicle_RequestsUncheckedCreateWithoutFuelLogsInput>
  }

  export type Master_VehiclesUpsertWithoutFuelLogsInput = {
    update: XOR<Master_VehiclesUpdateWithoutFuelLogsInput, Master_VehiclesUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<Master_VehiclesCreateWithoutFuelLogsInput, Master_VehiclesUncheckedCreateWithoutFuelLogsInput>
    where?: Master_VehiclesWhereInput
  }

  export type Master_VehiclesUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: Master_VehiclesWhereInput
    data: XOR<Master_VehiclesUpdateWithoutFuelLogsInput, Master_VehiclesUncheckedUpdateWithoutFuelLogsInput>
  }

  export type Master_VehiclesUpdateWithoutFuelLogsInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateWithoutFuelLogsInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Vehicle_RequestsUpsertWithoutFuelLogsInput = {
    update: XOR<Vehicle_RequestsUpdateWithoutFuelLogsInput, Vehicle_RequestsUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<Vehicle_RequestsCreateWithoutFuelLogsInput, Vehicle_RequestsUncheckedCreateWithoutFuelLogsInput>
    where?: Vehicle_RequestsWhereInput
  }

  export type Vehicle_RequestsUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: Vehicle_RequestsWhereInput
    data: XOR<Vehicle_RequestsUpdateWithoutFuelLogsInput, Vehicle_RequestsUncheckedUpdateWithoutFuelLogsInput>
  }

  export type Vehicle_RequestsUpdateWithoutFuelLogsInput = {
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutRequestsNestedInput
    driver?: Master_DriversUpdateOneWithoutRequestsNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateWithoutFuelLogsInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Master_VehiclesCreateWithoutTaxesInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateWithoutTaxesInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput
    tires?: Vehicle_TiresUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesCreateOrConnectWithoutTaxesInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutTaxesInput, Master_VehiclesUncheckedCreateWithoutTaxesInput>
  }

  export type Master_VehiclesUpsertWithoutTaxesInput = {
    update: XOR<Master_VehiclesUpdateWithoutTaxesInput, Master_VehiclesUncheckedUpdateWithoutTaxesInput>
    create: XOR<Master_VehiclesCreateWithoutTaxesInput, Master_VehiclesUncheckedCreateWithoutTaxesInput>
    where?: Master_VehiclesWhereInput
  }

  export type Master_VehiclesUpdateToOneWithWhereWithoutTaxesInput = {
    where?: Master_VehiclesWhereInput
    data: XOR<Master_VehiclesUpdateWithoutTaxesInput, Master_VehiclesUncheckedUpdateWithoutTaxesInput>
  }

  export type Master_VehiclesUpdateWithoutTaxesInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateWithoutTaxesInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput
    tires?: Vehicle_TiresUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesCreateWithoutTiresInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUncheckedCreateWithoutTiresInput = {
    carId?: number
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    taxExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
    maintenances?: Vehicle_MaintenancesUncheckedCreateNestedManyWithoutCarInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedCreateNestedManyWithoutCarInput
    taxes?: Vehicle_TaxesUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesCreateOrConnectWithoutTiresInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutTiresInput, Master_VehiclesUncheckedCreateWithoutTiresInput>
  }

  export type Master_VehiclesUpsertWithoutTiresInput = {
    update: XOR<Master_VehiclesUpdateWithoutTiresInput, Master_VehiclesUncheckedUpdateWithoutTiresInput>
    create: XOR<Master_VehiclesCreateWithoutTiresInput, Master_VehiclesUncheckedCreateWithoutTiresInput>
    where?: Master_VehiclesWhereInput
  }

  export type Master_VehiclesUpdateToOneWithWhereWithoutTiresInput = {
    where?: Master_VehiclesWhereInput
    data: XOR<Master_VehiclesUpdateWithoutTiresInput, Master_VehiclesUncheckedUpdateWithoutTiresInput>
  }

  export type Master_VehiclesUpdateWithoutTiresInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUpdateManyWithoutCarNestedInput
  }

  export type Master_VehiclesUncheckedUpdateWithoutTiresInput = {
    carId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
    maintenances?: Vehicle_MaintenancesUncheckedUpdateManyWithoutCarNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarNestedInput
    taxes?: Vehicle_TaxesUncheckedUpdateManyWithoutCarNestedInput
  }

  export type Vehicle_RequestsCreateManyCarInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    driverId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_MaintenancesCreateManyCarInput = {
    maintenanceId?: number
    startDate: Date | string
    endDate: Date | string
    type: string
    cost?: number | null
    details?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsCreateManyCarInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    liters?: number | null
    odometerRead?: number | null
    requestId?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TaxesCreateManyCarInput = {
    taxId?: number
    paymentDate: Date | string
    expiryDate: Date | string
    cost?: number | null
    receiptNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_TiresCreateManyCarInput = {
    tireId?: number
    changeDate: Date | string
    odometerRead: number
    brand?: string | null
    spec?: string | null
    cost?: number | null
    tireCount?: number
    limitOdometer?: number | null
    limitMonths?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsUpdateWithoutCarInput = {
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: Master_DriversUpdateOneWithoutRequestsNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateWithoutCarInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateManyWithoutCarInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesUpdateWithoutCarInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesUncheckedUpdateWithoutCarInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_MaintenancesUncheckedUpdateManyWithoutCarInput = {
    maintenanceId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsUpdateWithoutCarInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request?: Vehicle_RequestsUpdateOneWithoutFuelLogsNestedInput
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateWithoutCarInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    requestId?: NullableIntFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateManyWithoutCarInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    requestId?: NullableIntFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesUpdateWithoutCarInput = {
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesUncheckedUpdateWithoutCarInput = {
    taxId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TaxesUncheckedUpdateManyWithoutCarInput = {
    taxId?: IntFieldUpdateOperationsInput | number
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresUpdateWithoutCarInput = {
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresUncheckedUpdateWithoutCarInput = {
    tireId?: IntFieldUpdateOperationsInput | number
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_TiresUncheckedUpdateManyWithoutCarInput = {
    tireId?: IntFieldUpdateOperationsInput | number
    changeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    odometerRead?: IntFieldUpdateOperationsInput | number
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    spec?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    tireCount?: IntFieldUpdateOperationsInput | number
    limitOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    limitMonths?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_RequestsCreateManyDriverInput = {
    requestId?: number
    requesterStaffId: number
    purpose: string
    destination: string
    province?: string
    refOrderNumber?: string | null
    refOrderDate?: Date | string | null
    startDateTime: Date | string
    endDateTime: Date | string
    passengerCount: number
    passengerNames: string
    carId?: number | null
    status?: string
    startOdometer?: number | null
    endOdometer?: number | null
    startOdometerPhoto?: string | null
    endOdometerPhoto?: string | null
    actualDistance?: number | null
    departureRecordedAt?: Date | string | null
    arrivalRecordedAt?: Date | string | null
    isRecurring?: boolean
    recurrencePattern?: string | null
    recurrenceGroupId?: string | null
    parentRequestId?: number | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Driver_LeavesCreateManyDriverInput = {
    leaveId?: number
    startDate: Date | string
    endDate: Date | string
    leaveType: string
    reason?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsUpdateWithoutDriverInput = {
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutRequestsNestedInput
    fuelLogs?: Vehicle_Fuel_LogsUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateWithoutDriverInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type Vehicle_RequestsUncheckedUpdateManyWithoutDriverInput = {
    requestId?: IntFieldUpdateOperationsInput | number
    requesterStaffId?: IntFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    refOrderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    refOrderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    passengerCount?: IntFieldUpdateOperationsInput | number
    passengerNames?: StringFieldUpdateOperationsInput | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    endOdometer?: NullableIntFieldUpdateOperationsInput | number | null
    startOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    endOdometerPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    actualDistance?: NullableIntFieldUpdateOperationsInput | number | null
    departureRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arrivalRecordedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRecurring?: BoolFieldUpdateOperationsInput | boolean
    recurrencePattern?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    parentRequestId?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesUpdateWithoutDriverInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesUncheckedUpdateWithoutDriverInput = {
    leaveId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Driver_LeavesUncheckedUpdateManyWithoutDriverInput = {
    leaveId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    leaveType?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsCreateManyRequestInput = {
    fuelLogId?: number
    amount: number
    fillDate: Date | string
    carId?: number | null
    liters?: number | null
    odometerRead?: number | null
    refSlip?: string | null
    fuelProvider?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_Fuel_LogsUpdateWithoutRequestInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutFuelLogsNestedInput
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateWithoutRequestInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Vehicle_Fuel_LogsUncheckedUpdateManyWithoutRequestInput = {
    fuelLogId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    fillDate?: DateTimeFieldUpdateOperationsInput | Date | string
    carId?: NullableIntFieldUpdateOperationsInput | number | null
    liters?: NullableFloatFieldUpdateOperationsInput | number | null
    odometerRead?: NullableFloatFieldUpdateOperationsInput | number | null
    refSlip?: NullableStringFieldUpdateOperationsInput | string | null
    fuelProvider?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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