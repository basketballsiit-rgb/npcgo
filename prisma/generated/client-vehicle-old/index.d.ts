
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
    Vehicle_Requests: 'Vehicle_Requests'
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
      modelProps: "master_Vehicles" | "master_Drivers" | "vehicle_Requests"
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
  }

  export type Master_VehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_VehiclesCountOutputTypeCountRequestsArgs
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
   * Count Type Master_DriversCountOutputType
   */

  export type Master_DriversCountOutputType = {
    requests: number
  }

  export type Master_DriversCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_DriversCountOutputTypeCountRequestsArgs
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
    requests?: boolean | Master_Vehicles$requestsArgs<ExtArgs>
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
  }

  export type Master_VehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_Vehicles$requestsArgs<ExtArgs>
    _count?: boolean | Master_VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Master_VehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Master_Vehicles"
    objects: {
      requests: Prisma.$Vehicle_RequestsPayload<ExtArgs>[]
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
    lineUserId: string | null
  }

  export type Master_DriversMaxAggregateOutputType = {
    driverId: number | null
    driverName: string | null
    lineUserId: string | null
  }

  export type Master_DriversCountAggregateOutputType = {
    driverId: number
    driverName: number
    lineUserId: number
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
    lineUserId?: true
  }

  export type Master_DriversMaxAggregateInputType = {
    driverId?: true
    driverName?: true
    lineUserId?: true
  }

  export type Master_DriversCountAggregateInputType = {
    driverId?: true
    driverName?: true
    lineUserId?: true
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
    lineUserId: string | null
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
    lineUserId?: boolean
    requests?: boolean | Master_Drivers$requestsArgs<ExtArgs>
    _count?: boolean | Master_DriversCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["master_Drivers"]>


  export type Master_DriversSelectScalar = {
    driverId?: boolean
    driverName?: boolean
    lineUserId?: boolean
  }

  export type Master_DriversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | Master_Drivers$requestsArgs<ExtArgs>
    _count?: boolean | Master_DriversCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Master_DriversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Master_Drivers"
    objects: {
      requests: Prisma.$Vehicle_RequestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      driverId: number
      driverName: string
      lineUserId: string | null
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
    readonly lineUserId: FieldRef<"Master_Drivers", 'String'>
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
  }

  export type Vehicle_RequestsSumAggregateOutputType = {
    requestId: number | null
    requesterStaffId: number | null
    passengerCount: number | null
    carId: number | null
    driverId: number | null
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
  }

  export type Vehicle_RequestsSumAggregateInputType = {
    requestId?: true
    requesterStaffId?: true
    passengerCount?: true
    carId?: true
    driverId?: true
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
    createdAt?: boolean
    updatedAt?: boolean
    car?: boolean | Vehicle_Requests$carArgs<ExtArgs>
    driver?: boolean | Vehicle_Requests$driverArgs<ExtArgs>
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Vehicle_RequestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | Vehicle_Requests$carArgs<ExtArgs>
    driver?: boolean | Vehicle_Requests$driverArgs<ExtArgs>
  }

  export type $Vehicle_RequestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_Requests"
    objects: {
      car: Prisma.$Master_VehiclesPayload<ExtArgs> | null
      driver: Prisma.$Master_DriversPayload<ExtArgs> | null
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
    insuranceExpiryDate: 'insuranceExpiryDate'
  };

  export type Master_VehiclesScalarFieldEnum = (typeof Master_VehiclesScalarFieldEnum)[keyof typeof Master_VehiclesScalarFieldEnum]


  export const Master_DriversScalarFieldEnum: {
    driverId: 'driverId',
    driverName: 'driverName',
    lineUserId: 'lineUserId'
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Vehicle_RequestsScalarFieldEnum = (typeof Vehicle_RequestsScalarFieldEnum)[keyof typeof Vehicle_RequestsScalarFieldEnum]


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
    lineUserId: 'lineUserId'
  };

  export type Master_DriversOrderByRelevanceFieldEnum = (typeof Master_DriversOrderByRelevanceFieldEnum)[keyof typeof Master_DriversOrderByRelevanceFieldEnum]


  export const Vehicle_RequestsOrderByRelevanceFieldEnum: {
    purpose: 'purpose',
    destination: 'destination',
    province: 'province',
    refOrderNumber: 'refOrderNumber',
    passengerNames: 'passengerNames',
    status: 'status'
  };

  export type Vehicle_RequestsOrderByRelevanceFieldEnum = (typeof Vehicle_RequestsOrderByRelevanceFieldEnum)[keyof typeof Vehicle_RequestsOrderByRelevanceFieldEnum]


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
    requests?: Vehicle_RequestsListRelationFilter
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
    requests?: Vehicle_RequestsOrderByRelationAggregateInput
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
    requests?: Vehicle_RequestsListRelationFilter
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
  }

  export type Master_DriversWhereInput = {
    AND?: Master_DriversWhereInput | Master_DriversWhereInput[]
    OR?: Master_DriversWhereInput[]
    NOT?: Master_DriversWhereInput | Master_DriversWhereInput[]
    driverId?: IntFilter<"Master_Drivers"> | number
    driverName?: StringFilter<"Master_Drivers"> | string
    lineUserId?: StringNullableFilter<"Master_Drivers"> | string | null
    requests?: Vehicle_RequestsListRelationFilter
  }

  export type Master_DriversOrderByWithRelationInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    lineUserId?: SortOrderInput | SortOrder
    requests?: Vehicle_RequestsOrderByRelationAggregateInput
    _relevance?: Master_DriversOrderByRelevanceInput
  }

  export type Master_DriversWhereUniqueInput = Prisma.AtLeast<{
    driverId?: number
    AND?: Master_DriversWhereInput | Master_DriversWhereInput[]
    OR?: Master_DriversWhereInput[]
    NOT?: Master_DriversWhereInput | Master_DriversWhereInput[]
    driverName?: StringFilter<"Master_Drivers"> | string
    lineUserId?: StringNullableFilter<"Master_Drivers"> | string | null
    requests?: Vehicle_RequestsListRelationFilter
  }, "driverId">

  export type Master_DriversOrderByWithAggregationInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    lineUserId?: SortOrderInput | SortOrder
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
    lineUserId?: StringNullableWithAggregatesFilter<"Master_Drivers"> | string | null
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
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    driver?: XOR<Master_DriversNullableScalarRelationFilter, Master_DriversWhereInput> | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
    car?: Master_VehiclesOrderByWithRelationInput
    driver?: Master_DriversOrderByWithRelationInput
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
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    car?: XOR<Master_VehiclesNullableScalarRelationFilter, Master_VehiclesWhereInput> | null
    driver?: XOR<Master_DriversNullableScalarRelationFilter, Master_DriversWhereInput> | null
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
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle_Requests"> | Date | string
  }

  export type Master_VehiclesCreateInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutCarInput
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
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput
  }

  export type Master_VehiclesUpdateInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutCarNestedInput
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
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutCarNestedInput
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
  }

  export type Master_VehiclesUpdateManyMutationInput = {
    licensePlate?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    carType?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    actExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    insuranceExpiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  }

  export type Master_DriversCreateInput = {
    driverName: string
    lineUserId?: string | null
    requests?: Vehicle_RequestsCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUncheckedCreateInput = {
    driverId?: number
    driverName: string
    lineUserId?: string | null
    requests?: Vehicle_RequestsUncheckedCreateNestedManyWithoutDriverInput
  }

  export type Master_DriversUpdateInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversUncheckedUpdateInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: Vehicle_RequestsUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type Master_DriversCreateManyInput = {
    driverId?: number
    driverName: string
    lineUserId?: string | null
  }

  export type Master_DriversUpdateManyMutationInput = {
    driverName?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Master_DriversUncheckedUpdateManyInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutRequestsInput
    driver?: Master_DriversCreateNestedOneWithoutRequestsInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutRequestsNestedInput
    driver?: Master_DriversUpdateOneWithoutRequestsNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Vehicle_RequestsOrderByRelationAggregateInput = {
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

  export type Master_DriversOrderByRelevanceInput = {
    fields: Master_DriversOrderByRelevanceFieldEnum | Master_DriversOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type Master_DriversCountOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    lineUserId?: SortOrder
  }

  export type Master_DriversAvgOrderByAggregateInput = {
    driverId?: SortOrder
  }

  export type Master_DriversMaxOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    lineUserId?: SortOrder
  }

  export type Master_DriversMinOrderByAggregateInput = {
    driverId?: SortOrder
    driverName?: SortOrder
    lineUserId?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_RequestsAvgOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    passengerCount?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Vehicle_RequestsSumOrderByAggregateInput = {
    requestId?: SortOrder
    requesterStaffId?: SortOrder
    passengerCount?: SortOrder
    carId?: SortOrder
    driverId?: SortOrder
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

  export type Vehicle_RequestsCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Vehicle_RequestsUncheckedCreateNestedManyWithoutCarInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput> | Vehicle_RequestsCreateWithoutCarInput[] | Vehicle_RequestsUncheckedCreateWithoutCarInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutCarInput | Vehicle_RequestsCreateOrConnectWithoutCarInput[]
    createMany?: Vehicle_RequestsCreateManyCarInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
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

  export type Vehicle_RequestsCreateNestedManyWithoutDriverInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
  }

  export type Vehicle_RequestsUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput> | Vehicle_RequestsCreateWithoutDriverInput[] | Vehicle_RequestsUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: Vehicle_RequestsCreateOrConnectWithoutDriverInput | Vehicle_RequestsCreateOrConnectWithoutDriverInput[]
    createMany?: Vehicle_RequestsCreateManyDriverInputEnvelope
    connect?: Vehicle_RequestsWhereUniqueInput | Vehicle_RequestsWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: Master_DriversCreateNestedOneWithoutRequestsInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsCreateOrConnectWithoutCarInput = {
    where: Vehicle_RequestsWhereUniqueInput
    create: XOR<Vehicle_RequestsCreateWithoutCarInput, Vehicle_RequestsUncheckedCreateWithoutCarInput>
  }

  export type Vehicle_RequestsCreateManyCarInputEnvelope = {
    data: Vehicle_RequestsCreateManyCarInput | Vehicle_RequestsCreateManyCarInput[]
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
    createdAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle_Requests"> | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    car?: Master_VehiclesCreateNestedOneWithoutRequestsInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Vehicle_RequestsCreateOrConnectWithoutDriverInput = {
    where: Vehicle_RequestsWhereUniqueInput
    create: XOR<Vehicle_RequestsCreateWithoutDriverInput, Vehicle_RequestsUncheckedCreateWithoutDriverInput>
  }

  export type Vehicle_RequestsCreateManyDriverInputEnvelope = {
    data: Vehicle_RequestsCreateManyDriverInput | Vehicle_RequestsCreateManyDriverInput[]
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

  export type Master_VehiclesCreateWithoutRequestsInput = {
    licensePlate: string
    brand?: string | null
    carType: string
    capacity?: number
    status?: string
    actExpiryDate?: Date | string | null
    insuranceExpiryDate?: Date | string | null
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
  }

  export type Master_VehiclesCreateOrConnectWithoutRequestsInput = {
    where: Master_VehiclesWhereUniqueInput
    create: XOR<Master_VehiclesCreateWithoutRequestsInput, Master_VehiclesUncheckedCreateWithoutRequestsInput>
  }

  export type Master_DriversCreateWithoutRequestsInput = {
    driverName: string
    lineUserId?: string | null
  }

  export type Master_DriversUncheckedCreateWithoutRequestsInput = {
    driverId?: number
    driverName: string
    lineUserId?: string | null
  }

  export type Master_DriversCreateOrConnectWithoutRequestsInput = {
    where: Master_DriversWhereUniqueInput
    create: XOR<Master_DriversCreateWithoutRequestsInput, Master_DriversUncheckedCreateWithoutRequestsInput>
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
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Master_DriversUncheckedUpdateWithoutRequestsInput = {
    driverId?: IntFieldUpdateOperationsInput | number
    driverName?: StringFieldUpdateOperationsInput | string
    lineUserId?: NullableStringFieldUpdateOperationsInput | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: Master_DriversUpdateOneWithoutRequestsNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    car?: Master_VehiclesUpdateOneWithoutRequestsNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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