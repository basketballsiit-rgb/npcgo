
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
 * Model Departments
 * 
 */
export type Departments = $Result.DefaultSelection<Prisma.$DepartmentsPayload>
/**
 * Model evaluation_criteria
 * 
 */
export type evaluation_criteria = $Result.DefaultSelection<Prisma.$evaluation_criteriaPayload>
/**
 * Model evaluation_criteria_inputs
 * 
 */
export type evaluation_criteria_inputs = $Result.DefaultSelection<Prisma.$evaluation_criteria_inputsPayload>
/**
 * Model evaluation_evaluator_scores
 * 
 */
export type evaluation_evaluator_scores = $Result.DefaultSelection<Prisma.$evaluation_evaluator_scoresPayload>
/**
 * Model evaluation_evaluator_status
 * 
 */
export type evaluation_evaluator_status = $Result.DefaultSelection<Prisma.$evaluation_evaluator_statusPayload>
/**
 * Model evaluation_hierarchies
 * 
 */
export type evaluation_hierarchies = $Result.DefaultSelection<Prisma.$evaluation_hierarchiesPayload>
/**
 * Model evaluation_instances
 * 
 */
export type evaluation_instances = $Result.DefaultSelection<Prisma.$evaluation_instancesPayload>
/**
 * Model evaluation_rounds
 * 
 */
export type evaluation_rounds = $Result.DefaultSelection<Prisma.$evaluation_roundsPayload>
/**
 * Model jobs
 * 
 */
export type jobs = $Result.DefaultSelection<Prisma.$jobsPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model user_jobs
 * 
 */
export type user_jobs = $Result.DefaultSelection<Prisma.$user_jobsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const evaluation_evaluator_status_status: {
  pending: 'pending',
  completed: 'completed'
};

export type evaluation_evaluator_status_status = (typeof evaluation_evaluator_status_status)[keyof typeof evaluation_evaluator_status_status]


export const evaluation_rounds_status: {
  open: 'open',
  closed: 'closed'
};

export type evaluation_rounds_status = (typeof evaluation_rounds_status)[keyof typeof evaluation_rounds_status]


export const evaluation_instances_status: {
  pending_staff: 'pending_staff',
  pending_evaluator: 'pending_evaluator',
  completed: 'completed'
};

export type evaluation_instances_status = (typeof evaluation_instances_status)[keyof typeof evaluation_instances_status]


export const users_role: {
  admin: 'admin',
  evaluator: 'evaluator',
  staff: 'staff'
};

export type users_role = (typeof users_role)[keyof typeof users_role]

}

export type evaluation_evaluator_status_status = $Enums.evaluation_evaluator_status_status

export const evaluation_evaluator_status_status: typeof $Enums.evaluation_evaluator_status_status

export type evaluation_rounds_status = $Enums.evaluation_rounds_status

export const evaluation_rounds_status: typeof $Enums.evaluation_rounds_status

export type evaluation_instances_status = $Enums.evaluation_instances_status

export const evaluation_instances_status: typeof $Enums.evaluation_instances_status

export type users_role = $Enums.users_role

export const users_role: typeof $Enums.users_role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.departments.findMany()
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
   * // Fetch zero or more Departments
   * const departments = await prisma.departments.findMany()
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
   * `prisma.departments`: Exposes CRUD operations for the **Departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.DepartmentsDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_criteria`: Exposes CRUD operations for the **evaluation_criteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_criteria
    * const evaluation_criteria = await prisma.evaluation_criteria.findMany()
    * ```
    */
  get evaluation_criteria(): Prisma.evaluation_criteriaDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_criteria_inputs`: Exposes CRUD operations for the **evaluation_criteria_inputs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_criteria_inputs
    * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findMany()
    * ```
    */
  get evaluation_criteria_inputs(): Prisma.evaluation_criteria_inputsDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_evaluator_scores`: Exposes CRUD operations for the **evaluation_evaluator_scores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_evaluator_scores
    * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findMany()
    * ```
    */
  get evaluation_evaluator_scores(): Prisma.evaluation_evaluator_scoresDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_evaluator_status`: Exposes CRUD operations for the **evaluation_evaluator_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_evaluator_statuses
    * const evaluation_evaluator_statuses = await prisma.evaluation_evaluator_status.findMany()
    * ```
    */
  get evaluation_evaluator_status(): Prisma.evaluation_evaluator_statusDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_hierarchies`: Exposes CRUD operations for the **evaluation_hierarchies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_hierarchies
    * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findMany()
    * ```
    */
  get evaluation_hierarchies(): Prisma.evaluation_hierarchiesDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_instances`: Exposes CRUD operations for the **evaluation_instances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_instances
    * const evaluation_instances = await prisma.evaluation_instances.findMany()
    * ```
    */
  get evaluation_instances(): Prisma.evaluation_instancesDelegate<ExtArgs>;

  /**
   * `prisma.evaluation_rounds`: Exposes CRUD operations for the **evaluation_rounds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluation_rounds
    * const evaluation_rounds = await prisma.evaluation_rounds.findMany()
    * ```
    */
  get evaluation_rounds(): Prisma.evaluation_roundsDelegate<ExtArgs>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.jobsDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs>;

  /**
   * `prisma.user_jobs`: Exposes CRUD operations for the **user_jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_jobs
    * const user_jobs = await prisma.user_jobs.findMany()
    * ```
    */
  get user_jobs(): Prisma.user_jobsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;
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
    Departments: 'Departments',
    evaluation_criteria: 'evaluation_criteria',
    evaluation_criteria_inputs: 'evaluation_criteria_inputs',
    evaluation_evaluator_scores: 'evaluation_evaluator_scores',
    evaluation_evaluator_status: 'evaluation_evaluator_status',
    evaluation_hierarchies: 'evaluation_hierarchies',
    evaluation_instances: 'evaluation_instances',
    evaluation_rounds: 'evaluation_rounds',
    jobs: 'jobs',
    settings: 'settings',
    user_jobs: 'user_jobs',
    users: 'users'
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
      modelProps: "departments" | "evaluation_criteria" | "evaluation_criteria_inputs" | "evaluation_evaluator_scores" | "evaluation_evaluator_status" | "evaluation_hierarchies" | "evaluation_instances" | "evaluation_rounds" | "jobs" | "settings" | "user_jobs" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Departments: {
        payload: Prisma.$DepartmentsPayload<ExtArgs>
        fields: Prisma.DepartmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findFirst: {
            args: Prisma.DepartmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          findMany: {
            args: Prisma.DepartmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>[]
          }
          create: {
            args: Prisma.DepartmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          createMany: {
            args: Prisma.DepartmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          update: {
            args: Prisma.DepartmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.DepartmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      evaluation_criteria: {
        payload: Prisma.$evaluation_criteriaPayload<ExtArgs>
        fields: Prisma.evaluation_criteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_criteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_criteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          findFirst: {
            args: Prisma.evaluation_criteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_criteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          findMany: {
            args: Prisma.evaluation_criteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>[]
          }
          create: {
            args: Prisma.evaluation_criteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          createMany: {
            args: Prisma.evaluation_criteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_criteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          update: {
            args: Prisma.evaluation_criteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_criteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_criteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_criteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteriaPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_criteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_criteria>
          }
          groupBy: {
            args: Prisma.evaluation_criteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_criteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_criteriaCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_criteriaCountAggregateOutputType> | number
          }
        }
      }
      evaluation_criteria_inputs: {
        payload: Prisma.$evaluation_criteria_inputsPayload<ExtArgs>
        fields: Prisma.evaluation_criteria_inputsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_criteria_inputsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_criteria_inputsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          findFirst: {
            args: Prisma.evaluation_criteria_inputsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_criteria_inputsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          findMany: {
            args: Prisma.evaluation_criteria_inputsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>[]
          }
          create: {
            args: Prisma.evaluation_criteria_inputsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          createMany: {
            args: Prisma.evaluation_criteria_inputsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_criteria_inputsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          update: {
            args: Prisma.evaluation_criteria_inputsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_criteria_inputsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_criteria_inputsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_criteria_inputsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_criteria_inputsPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_criteria_inputsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_criteria_inputs>
          }
          groupBy: {
            args: Prisma.evaluation_criteria_inputsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_criteria_inputsGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_criteria_inputsCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_criteria_inputsCountAggregateOutputType> | number
          }
        }
      }
      evaluation_evaluator_scores: {
        payload: Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>
        fields: Prisma.evaluation_evaluator_scoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_evaluator_scoresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_evaluator_scoresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          findFirst: {
            args: Prisma.evaluation_evaluator_scoresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_evaluator_scoresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          findMany: {
            args: Prisma.evaluation_evaluator_scoresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>[]
          }
          create: {
            args: Prisma.evaluation_evaluator_scoresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          createMany: {
            args: Prisma.evaluation_evaluator_scoresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_evaluator_scoresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          update: {
            args: Prisma.evaluation_evaluator_scoresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_evaluator_scoresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_evaluator_scoresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_evaluator_scoresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_scoresPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_evaluator_scoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_evaluator_scores>
          }
          groupBy: {
            args: Prisma.evaluation_evaluator_scoresGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_evaluator_scoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_evaluator_scoresCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_evaluator_scoresCountAggregateOutputType> | number
          }
        }
      }
      evaluation_evaluator_status: {
        payload: Prisma.$evaluation_evaluator_statusPayload<ExtArgs>
        fields: Prisma.evaluation_evaluator_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_evaluator_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_evaluator_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          findFirst: {
            args: Prisma.evaluation_evaluator_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_evaluator_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          findMany: {
            args: Prisma.evaluation_evaluator_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>[]
          }
          create: {
            args: Prisma.evaluation_evaluator_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          createMany: {
            args: Prisma.evaluation_evaluator_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_evaluator_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          update: {
            args: Prisma.evaluation_evaluator_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_evaluator_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_evaluator_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_evaluator_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_evaluator_statusPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_evaluator_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_evaluator_status>
          }
          groupBy: {
            args: Prisma.evaluation_evaluator_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_evaluator_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_evaluator_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_evaluator_statusCountAggregateOutputType> | number
          }
        }
      }
      evaluation_hierarchies: {
        payload: Prisma.$evaluation_hierarchiesPayload<ExtArgs>
        fields: Prisma.evaluation_hierarchiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_hierarchiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_hierarchiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          findFirst: {
            args: Prisma.evaluation_hierarchiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_hierarchiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          findMany: {
            args: Prisma.evaluation_hierarchiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>[]
          }
          create: {
            args: Prisma.evaluation_hierarchiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          createMany: {
            args: Prisma.evaluation_hierarchiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_hierarchiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          update: {
            args: Prisma.evaluation_hierarchiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_hierarchiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_hierarchiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_hierarchiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_hierarchiesPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_hierarchiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_hierarchies>
          }
          groupBy: {
            args: Prisma.evaluation_hierarchiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_hierarchiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_hierarchiesCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_hierarchiesCountAggregateOutputType> | number
          }
        }
      }
      evaluation_instances: {
        payload: Prisma.$evaluation_instancesPayload<ExtArgs>
        fields: Prisma.evaluation_instancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_instancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_instancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          findFirst: {
            args: Prisma.evaluation_instancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_instancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          findMany: {
            args: Prisma.evaluation_instancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>[]
          }
          create: {
            args: Prisma.evaluation_instancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          createMany: {
            args: Prisma.evaluation_instancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_instancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          update: {
            args: Prisma.evaluation_instancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_instancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_instancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_instancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_instancesPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_instancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_instances>
          }
          groupBy: {
            args: Prisma.evaluation_instancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_instancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_instancesCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_instancesCountAggregateOutputType> | number
          }
        }
      }
      evaluation_rounds: {
        payload: Prisma.$evaluation_roundsPayload<ExtArgs>
        fields: Prisma.evaluation_roundsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluation_roundsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluation_roundsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          findFirst: {
            args: Prisma.evaluation_roundsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluation_roundsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          findMany: {
            args: Prisma.evaluation_roundsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>[]
          }
          create: {
            args: Prisma.evaluation_roundsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          createMany: {
            args: Prisma.evaluation_roundsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluation_roundsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          update: {
            args: Prisma.evaluation_roundsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          deleteMany: {
            args: Prisma.evaluation_roundsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluation_roundsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluation_roundsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluation_roundsPayload>
          }
          aggregate: {
            args: Prisma.Evaluation_roundsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation_rounds>
          }
          groupBy: {
            args: Prisma.evaluation_roundsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_roundsGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluation_roundsCountArgs<ExtArgs>
            result: $Utils.Optional<Evaluation_roundsCountAggregateOutputType> | number
          }
        }
      }
      jobs: {
        payload: Prisma.$jobsPayload<ExtArgs>
        fields: Prisma.jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findFirst: {
            args: Prisma.jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          findMany: {
            args: Prisma.jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>[]
          }
          create: {
            args: Prisma.jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          createMany: {
            args: Prisma.jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          update: {
            args: Prisma.jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          deleteMany: {
            args: Prisma.jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.jobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      user_jobs: {
        payload: Prisma.$user_jobsPayload<ExtArgs>
        fields: Prisma.user_jobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_jobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_jobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          findFirst: {
            args: Prisma.user_jobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_jobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          findMany: {
            args: Prisma.user_jobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>[]
          }
          create: {
            args: Prisma.user_jobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          createMany: {
            args: Prisma.user_jobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_jobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          update: {
            args: Prisma.user_jobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          deleteMany: {
            args: Prisma.user_jobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_jobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_jobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_jobsPayload>
          }
          aggregate: {
            args: Prisma.User_jobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_jobs>
          }
          groupBy: {
            args: Prisma.user_jobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_jobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_jobsCountArgs<ExtArgs>
            result: $Utils.Optional<User_jobsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    jobs: number
    users: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | DepartmentsCountOutputTypeCountJobsArgs
    users?: boolean | DepartmentsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type Evaluation_criteriaCountOutputType
   */

  export type Evaluation_criteriaCountOutputType = {
    other_evaluation_criteria: number
    evaluation_criteria_inputs: number
    evaluation_evaluator_scores: number
  }

  export type Evaluation_criteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_evaluation_criteria?: boolean | Evaluation_criteriaCountOutputTypeCountOther_evaluation_criteriaArgs
    evaluation_criteria_inputs?: boolean | Evaluation_criteriaCountOutputTypeCountEvaluation_criteria_inputsArgs
    evaluation_evaluator_scores?: boolean | Evaluation_criteriaCountOutputTypeCountEvaluation_evaluator_scoresArgs
  }

  // Custom InputTypes
  /**
   * Evaluation_criteriaCountOutputType without action
   */
  export type Evaluation_criteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_criteriaCountOutputType
     */
    select?: Evaluation_criteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Evaluation_criteriaCountOutputType without action
   */
  export type Evaluation_criteriaCountOutputTypeCountOther_evaluation_criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_criteriaWhereInput
  }

  /**
   * Evaluation_criteriaCountOutputType without action
   */
  export type Evaluation_criteriaCountOutputTypeCountEvaluation_criteria_inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_criteria_inputsWhereInput
  }

  /**
   * Evaluation_criteriaCountOutputType without action
   */
  export type Evaluation_criteriaCountOutputTypeCountEvaluation_evaluator_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_scoresWhereInput
  }


  /**
   * Count Type Evaluation_evaluator_statusCountOutputType
   */

  export type Evaluation_evaluator_statusCountOutputType = {
    evaluation_evaluator_scores: number
  }

  export type Evaluation_evaluator_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_evaluator_scores?: boolean | Evaluation_evaluator_statusCountOutputTypeCountEvaluation_evaluator_scoresArgs
  }

  // Custom InputTypes
  /**
   * Evaluation_evaluator_statusCountOutputType without action
   */
  export type Evaluation_evaluator_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_evaluator_statusCountOutputType
     */
    select?: Evaluation_evaluator_statusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Evaluation_evaluator_statusCountOutputType without action
   */
  export type Evaluation_evaluator_statusCountOutputTypeCountEvaluation_evaluator_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_scoresWhereInput
  }


  /**
   * Count Type Evaluation_instancesCountOutputType
   */

  export type Evaluation_instancesCountOutputType = {
    evaluation_criteria_inputs: number
    evaluation_evaluator_status: number
  }

  export type Evaluation_instancesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_criteria_inputs?: boolean | Evaluation_instancesCountOutputTypeCountEvaluation_criteria_inputsArgs
    evaluation_evaluator_status?: boolean | Evaluation_instancesCountOutputTypeCountEvaluation_evaluator_statusArgs
  }

  // Custom InputTypes
  /**
   * Evaluation_instancesCountOutputType without action
   */
  export type Evaluation_instancesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_instancesCountOutputType
     */
    select?: Evaluation_instancesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Evaluation_instancesCountOutputType without action
   */
  export type Evaluation_instancesCountOutputTypeCountEvaluation_criteria_inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_criteria_inputsWhereInput
  }

  /**
   * Evaluation_instancesCountOutputType without action
   */
  export type Evaluation_instancesCountOutputTypeCountEvaluation_evaluator_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_statusWhereInput
  }


  /**
   * Count Type Evaluation_roundsCountOutputType
   */

  export type Evaluation_roundsCountOutputType = {
    evaluation_instances: number
  }

  export type Evaluation_roundsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_instances?: boolean | Evaluation_roundsCountOutputTypeCountEvaluation_instancesArgs
  }

  // Custom InputTypes
  /**
   * Evaluation_roundsCountOutputType without action
   */
  export type Evaluation_roundsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation_roundsCountOutputType
     */
    select?: Evaluation_roundsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Evaluation_roundsCountOutputType without action
   */
  export type Evaluation_roundsCountOutputTypeCountEvaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_instancesWhereInput
  }


  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs: number
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs: number
    evaluation_instances: number
    user_jobs: number
    users: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: boolean | JobsCountOutputTypeCountEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: boolean | JobsCountOutputTypeCountEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs
    evaluation_instances?: boolean | JobsCountOutputTypeCountEvaluation_instancesArgs
    user_jobs?: boolean | JobsCountOutputTypeCountUser_jobsArgs
    users?: boolean | JobsCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     */
    select?: JobsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_hierarchiesWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_hierarchiesWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountEvaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_instancesWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountUser_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_jobsWhereInput
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    evaluation_evaluator_status: number
    evaluation_instances: number
    user_jobs: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_evaluator_status?: boolean | UsersCountOutputTypeCountEvaluation_evaluator_statusArgs
    evaluation_instances?: boolean | UsersCountOutputTypeCountEvaluation_instancesArgs
    user_jobs?: boolean | UsersCountOutputTypeCountUser_jobsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEvaluation_evaluator_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_statusWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEvaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_instancesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_jobsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type DepartmentsAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentsSumAggregateInputType = {
    id?: true
  }

  export type DepartmentsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to aggregate.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type DepartmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentsWhereInput
    orderBy?: DepartmentsOrderByWithAggregationInput | DepartmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: DepartmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _avg?: DepartmentsAvgAggregateInputType
    _sum?: DepartmentsSumAggregateInputType
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    _count: DepartmentsCountAggregateOutputType | null
    _avg: DepartmentsAvgAggregateOutputType | null
    _sum: DepartmentsSumAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends DepartmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    jobs?: boolean | Departments$jobsArgs<ExtArgs>
    users?: boolean | Departments$usersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>


  export type DepartmentsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type DepartmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Departments$jobsArgs<ExtArgs>
    users?: boolean | Departments$usersArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departments"
    objects: {
      jobs: Prisma.$jobsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type DepartmentsGetPayload<S extends boolean | null | undefined | DepartmentsDefaultArgs> = $Result.GetResult<Prisma.$DepartmentsPayload, S>

  type DepartmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface DepartmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departments'], meta: { name: 'Departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {DepartmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentsFindUniqueArgs>(args: SelectSubset<T, DepartmentsFindUniqueArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentsFindFirstArgs>(args?: SelectSubset<T, DepartmentsFindFirstArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentsFindManyArgs>(args?: SelectSubset<T, DepartmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Departments.
     * @param {DepartmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends DepartmentsCreateArgs>(args: SelectSubset<T, DepartmentsCreateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentsCreateManyArgs>(args?: SelectSubset<T, DepartmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Departments.
     * @param {DepartmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends DepartmentsDeleteArgs>(args: SelectSubset<T, DepartmentsDeleteArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Departments.
     * @param {DepartmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentsUpdateArgs>(args: SelectSubset<T, DepartmentsUpdateArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentsDeleteManyArgs>(args?: SelectSubset<T, DepartmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentsUpdateManyArgs>(args: SelectSubset<T, DepartmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Departments.
     * @param {DepartmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentsUpsertArgs>(args: SelectSubset<T, DepartmentsUpsertArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentsCountArgs>(
      args?: Subset<T, DepartmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsGroupByArgs} args - Group by arguments.
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
      T extends DepartmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentsGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departments model
   */
  readonly fields: DepartmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Departments$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Departments$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Departments$usersArgs<ExtArgs> = {}>(args?: Subset<T, Departments$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Departments model
   */ 
  interface DepartmentsFieldRefs {
    readonly id: FieldRef<"Departments", 'Int'>
    readonly name: FieldRef<"Departments", 'String'>
    readonly created_at: FieldRef<"Departments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departments findUnique
   */
  export type DepartmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findUniqueOrThrow
   */
  export type DepartmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments findFirst
   */
  export type DepartmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findFirstOrThrow
   */
  export type DepartmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments findMany
   */
  export type DepartmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentsOrderByWithRelationInput | DepartmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * Departments create
   */
  export type DepartmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Departments.
     */
    data: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
  }

  /**
   * Departments createMany
   */
  export type DepartmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentsCreateManyInput | DepartmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departments update
   */
  export type DepartmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Departments.
     */
    data: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
    /**
     * Choose, which Departments to update.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments updateMany
   */
  export type DepartmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentsUpdateManyMutationInput, DepartmentsUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentsWhereInput
  }

  /**
   * Departments upsert
   */
  export type DepartmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Departments to update in case it exists.
     */
    where: DepartmentsWhereUniqueInput
    /**
     * In case the Departments found by the `where` argument doesn't exist, create a new Departments with this data.
     */
    create: XOR<DepartmentsCreateInput, DepartmentsUncheckedCreateInput>
    /**
     * In case the Departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentsUpdateInput, DepartmentsUncheckedUpdateInput>
  }

  /**
   * Departments delete
   */
  export type DepartmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    /**
     * Filter which Departments to delete.
     */
    where: DepartmentsWhereUniqueInput
  }

  /**
   * Departments deleteMany
   */
  export type DepartmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentsWhereInput
  }

  /**
   * Departments.jobs
   */
  export type Departments$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    cursor?: jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Departments.users
   */
  export type Departments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Departments without action
   */
  export type DepartmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_criteria
   */

  export type AggregateEvaluation_criteria = {
    _count: Evaluation_criteriaCountAggregateOutputType | null
    _avg: Evaluation_criteriaAvgAggregateOutputType | null
    _sum: Evaluation_criteriaSumAggregateOutputType | null
    _min: Evaluation_criteriaMinAggregateOutputType | null
    _max: Evaluation_criteriaMaxAggregateOutputType | null
  }

  export type Evaluation_criteriaAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
    max_score: Decimal | null
    sort_order: number | null
  }

  export type Evaluation_criteriaSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
    max_score: Decimal | null
    sort_order: number | null
  }

  export type Evaluation_criteriaMinAggregateOutputType = {
    id: number | null
    parent_id: number | null
    title: string | null
    description: string | null
    max_score: Decimal | null
    sort_order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_criteriaMaxAggregateOutputType = {
    id: number | null
    parent_id: number | null
    title: string | null
    description: string | null
    max_score: Decimal | null
    sort_order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_criteriaCountAggregateOutputType = {
    id: number
    parent_id: number
    title: number
    description: number
    max_score: number
    sort_order: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Evaluation_criteriaAvgAggregateInputType = {
    id?: true
    parent_id?: true
    max_score?: true
    sort_order?: true
  }

  export type Evaluation_criteriaSumAggregateInputType = {
    id?: true
    parent_id?: true
    max_score?: true
    sort_order?: true
  }

  export type Evaluation_criteriaMinAggregateInputType = {
    id?: true
    parent_id?: true
    title?: true
    description?: true
    max_score?: true
    sort_order?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_criteriaMaxAggregateInputType = {
    id?: true
    parent_id?: true
    title?: true
    description?: true
    max_score?: true
    sort_order?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_criteriaCountAggregateInputType = {
    id?: true
    parent_id?: true
    title?: true
    description?: true
    max_score?: true
    sort_order?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Evaluation_criteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_criteria to aggregate.
     */
    where?: evaluation_criteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria to fetch.
     */
    orderBy?: evaluation_criteriaOrderByWithRelationInput | evaluation_criteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_criteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_criteria
    **/
    _count?: true | Evaluation_criteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_criteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_criteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_criteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_criteriaMaxAggregateInputType
  }

  export type GetEvaluation_criteriaAggregateType<T extends Evaluation_criteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_criteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_criteria[P]>
      : GetScalarType<T[P], AggregateEvaluation_criteria[P]>
  }




  export type evaluation_criteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_criteriaWhereInput
    orderBy?: evaluation_criteriaOrderByWithAggregationInput | evaluation_criteriaOrderByWithAggregationInput[]
    by: Evaluation_criteriaScalarFieldEnum[] | Evaluation_criteriaScalarFieldEnum
    having?: evaluation_criteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_criteriaCountAggregateInputType | true
    _avg?: Evaluation_criteriaAvgAggregateInputType
    _sum?: Evaluation_criteriaSumAggregateInputType
    _min?: Evaluation_criteriaMinAggregateInputType
    _max?: Evaluation_criteriaMaxAggregateInputType
  }

  export type Evaluation_criteriaGroupByOutputType = {
    id: number
    parent_id: number | null
    title: string
    description: string | null
    max_score: Decimal
    sort_order: number | null
    created_at: Date
    updated_at: Date
    _count: Evaluation_criteriaCountAggregateOutputType | null
    _avg: Evaluation_criteriaAvgAggregateOutputType | null
    _sum: Evaluation_criteriaSumAggregateOutputType | null
    _min: Evaluation_criteriaMinAggregateOutputType | null
    _max: Evaluation_criteriaMaxAggregateOutputType | null
  }

  type GetEvaluation_criteriaGroupByPayload<T extends evaluation_criteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_criteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_criteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_criteriaGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_criteriaGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_criteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parent_id?: boolean
    title?: boolean
    description?: boolean
    max_score?: boolean
    sort_order?: boolean
    created_at?: boolean
    updated_at?: boolean
    evaluation_criteria?: boolean | evaluation_criteria$evaluation_criteriaArgs<ExtArgs>
    other_evaluation_criteria?: boolean | evaluation_criteria$other_evaluation_criteriaArgs<ExtArgs>
    evaluation_criteria_inputs?: boolean | evaluation_criteria$evaluation_criteria_inputsArgs<ExtArgs>
    evaluation_evaluator_scores?: boolean | evaluation_criteria$evaluation_evaluator_scoresArgs<ExtArgs>
    _count?: boolean | Evaluation_criteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_criteria"]>


  export type evaluation_criteriaSelectScalar = {
    id?: boolean
    parent_id?: boolean
    title?: boolean
    description?: boolean
    max_score?: boolean
    sort_order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type evaluation_criteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_criteria?: boolean | evaluation_criteria$evaluation_criteriaArgs<ExtArgs>
    other_evaluation_criteria?: boolean | evaluation_criteria$other_evaluation_criteriaArgs<ExtArgs>
    evaluation_criteria_inputs?: boolean | evaluation_criteria$evaluation_criteria_inputsArgs<ExtArgs>
    evaluation_evaluator_scores?: boolean | evaluation_criteria$evaluation_evaluator_scoresArgs<ExtArgs>
    _count?: boolean | Evaluation_criteriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $evaluation_criteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_criteria"
    objects: {
      evaluation_criteria: Prisma.$evaluation_criteriaPayload<ExtArgs> | null
      other_evaluation_criteria: Prisma.$evaluation_criteriaPayload<ExtArgs>[]
      evaluation_criteria_inputs: Prisma.$evaluation_criteria_inputsPayload<ExtArgs>[]
      evaluation_evaluator_scores: Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      parent_id: number | null
      title: string
      description: string | null
      max_score: Prisma.Decimal
      sort_order: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["evaluation_criteria"]>
    composites: {}
  }

  type evaluation_criteriaGetPayload<S extends boolean | null | undefined | evaluation_criteriaDefaultArgs> = $Result.GetResult<Prisma.$evaluation_criteriaPayload, S>

  type evaluation_criteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_criteriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_criteriaCountAggregateInputType | true
    }

  export interface evaluation_criteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_criteria'], meta: { name: 'evaluation_criteria' } }
    /**
     * Find zero or one Evaluation_criteria that matches the filter.
     * @param {evaluation_criteriaFindUniqueArgs} args - Arguments to find a Evaluation_criteria
     * @example
     * // Get one Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_criteriaFindUniqueArgs>(args: SelectSubset<T, evaluation_criteriaFindUniqueArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_criteria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_criteriaFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_criteria
     * @example
     * // Get one Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_criteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_criteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaFindFirstArgs} args - Arguments to find a Evaluation_criteria
     * @example
     * // Get one Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_criteriaFindFirstArgs>(args?: SelectSubset<T, evaluation_criteriaFindFirstArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_criteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaFindFirstOrThrowArgs} args - Arguments to find a Evaluation_criteria
     * @example
     * // Get one Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_criteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_criteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findMany()
     * 
     * // Get first 10 Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_criteriaWithIdOnly = await prisma.evaluation_criteria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_criteriaFindManyArgs>(args?: SelectSubset<T, evaluation_criteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_criteria.
     * @param {evaluation_criteriaCreateArgs} args - Arguments to create a Evaluation_criteria.
     * @example
     * // Create one Evaluation_criteria
     * const Evaluation_criteria = await prisma.evaluation_criteria.create({
     *   data: {
     *     // ... data to create a Evaluation_criteria
     *   }
     * })
     * 
     */
    create<T extends evaluation_criteriaCreateArgs>(args: SelectSubset<T, evaluation_criteriaCreateArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_criteria.
     * @param {evaluation_criteriaCreateManyArgs} args - Arguments to create many Evaluation_criteria.
     * @example
     * // Create many Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_criteriaCreateManyArgs>(args?: SelectSubset<T, evaluation_criteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_criteria.
     * @param {evaluation_criteriaDeleteArgs} args - Arguments to delete one Evaluation_criteria.
     * @example
     * // Delete one Evaluation_criteria
     * const Evaluation_criteria = await prisma.evaluation_criteria.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_criteria
     *   }
     * })
     * 
     */
    delete<T extends evaluation_criteriaDeleteArgs>(args: SelectSubset<T, evaluation_criteriaDeleteArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_criteria.
     * @param {evaluation_criteriaUpdateArgs} args - Arguments to update one Evaluation_criteria.
     * @example
     * // Update one Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_criteriaUpdateArgs>(args: SelectSubset<T, evaluation_criteriaUpdateArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_criteria.
     * @param {evaluation_criteriaDeleteManyArgs} args - Arguments to filter Evaluation_criteria to delete.
     * @example
     * // Delete a few Evaluation_criteria
     * const { count } = await prisma.evaluation_criteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_criteriaDeleteManyArgs>(args?: SelectSubset<T, evaluation_criteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_criteriaUpdateManyArgs>(args: SelectSubset<T, evaluation_criteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_criteria.
     * @param {evaluation_criteriaUpsertArgs} args - Arguments to update or create a Evaluation_criteria.
     * @example
     * // Update or create a Evaluation_criteria
     * const evaluation_criteria = await prisma.evaluation_criteria.upsert({
     *   create: {
     *     // ... data to create a Evaluation_criteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_criteria we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_criteriaUpsertArgs>(args: SelectSubset<T, evaluation_criteriaUpsertArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaCountArgs} args - Arguments to filter Evaluation_criteria to count.
     * @example
     * // Count the number of Evaluation_criteria
     * const count = await prisma.evaluation_criteria.count({
     *   where: {
     *     // ... the filter for the Evaluation_criteria we want to count
     *   }
     * })
    **/
    count<T extends evaluation_criteriaCountArgs>(
      args?: Subset<T, evaluation_criteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_criteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_criteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_criteriaAggregateArgs>(args: Subset<T, Evaluation_criteriaAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_criteriaAggregateType<T>>

    /**
     * Group by Evaluation_criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteriaGroupByArgs} args - Group by arguments.
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
      T extends evaluation_criteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_criteriaGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_criteriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_criteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_criteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_criteria model
   */
  readonly fields: evaluation_criteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_criteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_criteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_criteria<T extends evaluation_criteria$evaluation_criteriaArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteria$evaluation_criteriaArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    other_evaluation_criteria<T extends evaluation_criteria$other_evaluation_criteriaArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteria$other_evaluation_criteriaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_criteria_inputs<T extends evaluation_criteria$evaluation_criteria_inputsArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteria$evaluation_criteria_inputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_evaluator_scores<T extends evaluation_criteria$evaluation_evaluator_scoresArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteria$evaluation_evaluator_scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the evaluation_criteria model
   */ 
  interface evaluation_criteriaFieldRefs {
    readonly id: FieldRef<"evaluation_criteria", 'Int'>
    readonly parent_id: FieldRef<"evaluation_criteria", 'Int'>
    readonly title: FieldRef<"evaluation_criteria", 'String'>
    readonly description: FieldRef<"evaluation_criteria", 'String'>
    readonly max_score: FieldRef<"evaluation_criteria", 'Decimal'>
    readonly sort_order: FieldRef<"evaluation_criteria", 'Int'>
    readonly created_at: FieldRef<"evaluation_criteria", 'DateTime'>
    readonly updated_at: FieldRef<"evaluation_criteria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_criteria findUnique
   */
  export type evaluation_criteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria to fetch.
     */
    where: evaluation_criteriaWhereUniqueInput
  }

  /**
   * evaluation_criteria findUniqueOrThrow
   */
  export type evaluation_criteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria to fetch.
     */
    where: evaluation_criteriaWhereUniqueInput
  }

  /**
   * evaluation_criteria findFirst
   */
  export type evaluation_criteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria to fetch.
     */
    where?: evaluation_criteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria to fetch.
     */
    orderBy?: evaluation_criteriaOrderByWithRelationInput | evaluation_criteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_criteria.
     */
    cursor?: evaluation_criteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_criteria.
     */
    distinct?: Evaluation_criteriaScalarFieldEnum | Evaluation_criteriaScalarFieldEnum[]
  }

  /**
   * evaluation_criteria findFirstOrThrow
   */
  export type evaluation_criteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria to fetch.
     */
    where?: evaluation_criteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria to fetch.
     */
    orderBy?: evaluation_criteriaOrderByWithRelationInput | evaluation_criteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_criteria.
     */
    cursor?: evaluation_criteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_criteria.
     */
    distinct?: Evaluation_criteriaScalarFieldEnum | Evaluation_criteriaScalarFieldEnum[]
  }

  /**
   * evaluation_criteria findMany
   */
  export type evaluation_criteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria to fetch.
     */
    where?: evaluation_criteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria to fetch.
     */
    orderBy?: evaluation_criteriaOrderByWithRelationInput | evaluation_criteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_criteria.
     */
    cursor?: evaluation_criteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria.
     */
    skip?: number
    distinct?: Evaluation_criteriaScalarFieldEnum | Evaluation_criteriaScalarFieldEnum[]
  }

  /**
   * evaluation_criteria create
   */
  export type evaluation_criteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_criteria.
     */
    data: XOR<evaluation_criteriaCreateInput, evaluation_criteriaUncheckedCreateInput>
  }

  /**
   * evaluation_criteria createMany
   */
  export type evaluation_criteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_criteria.
     */
    data: evaluation_criteriaCreateManyInput | evaluation_criteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_criteria update
   */
  export type evaluation_criteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_criteria.
     */
    data: XOR<evaluation_criteriaUpdateInput, evaluation_criteriaUncheckedUpdateInput>
    /**
     * Choose, which evaluation_criteria to update.
     */
    where: evaluation_criteriaWhereUniqueInput
  }

  /**
   * evaluation_criteria updateMany
   */
  export type evaluation_criteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_criteria.
     */
    data: XOR<evaluation_criteriaUpdateManyMutationInput, evaluation_criteriaUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_criteria to update
     */
    where?: evaluation_criteriaWhereInput
  }

  /**
   * evaluation_criteria upsert
   */
  export type evaluation_criteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_criteria to update in case it exists.
     */
    where: evaluation_criteriaWhereUniqueInput
    /**
     * In case the evaluation_criteria found by the `where` argument doesn't exist, create a new evaluation_criteria with this data.
     */
    create: XOR<evaluation_criteriaCreateInput, evaluation_criteriaUncheckedCreateInput>
    /**
     * In case the evaluation_criteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_criteriaUpdateInput, evaluation_criteriaUncheckedUpdateInput>
  }

  /**
   * evaluation_criteria delete
   */
  export type evaluation_criteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    /**
     * Filter which evaluation_criteria to delete.
     */
    where: evaluation_criteriaWhereUniqueInput
  }

  /**
   * evaluation_criteria deleteMany
   */
  export type evaluation_criteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_criteria to delete
     */
    where?: evaluation_criteriaWhereInput
  }

  /**
   * evaluation_criteria.evaluation_criteria
   */
  export type evaluation_criteria$evaluation_criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    where?: evaluation_criteriaWhereInput
  }

  /**
   * evaluation_criteria.other_evaluation_criteria
   */
  export type evaluation_criteria$other_evaluation_criteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
    where?: evaluation_criteriaWhereInput
    orderBy?: evaluation_criteriaOrderByWithRelationInput | evaluation_criteriaOrderByWithRelationInput[]
    cursor?: evaluation_criteriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_criteriaScalarFieldEnum | Evaluation_criteriaScalarFieldEnum[]
  }

  /**
   * evaluation_criteria.evaluation_criteria_inputs
   */
  export type evaluation_criteria$evaluation_criteria_inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    where?: evaluation_criteria_inputsWhereInput
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_criteria_inputsScalarFieldEnum | Evaluation_criteria_inputsScalarFieldEnum[]
  }

  /**
   * evaluation_criteria.evaluation_evaluator_scores
   */
  export type evaluation_criteria$evaluation_evaluator_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    where?: evaluation_evaluator_scoresWhereInput
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_evaluator_scoresScalarFieldEnum | Evaluation_evaluator_scoresScalarFieldEnum[]
  }

  /**
   * evaluation_criteria without action
   */
  export type evaluation_criteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria
     */
    select?: evaluation_criteriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteriaInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_criteria_inputs
   */

  export type AggregateEvaluation_criteria_inputs = {
    _count: Evaluation_criteria_inputsCountAggregateOutputType | null
    _avg: Evaluation_criteria_inputsAvgAggregateOutputType | null
    _sum: Evaluation_criteria_inputsSumAggregateOutputType | null
    _min: Evaluation_criteria_inputsMinAggregateOutputType | null
    _max: Evaluation_criteria_inputsMaxAggregateOutputType | null
  }

  export type Evaluation_criteria_inputsAvgAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    criteria_id: number | null
  }

  export type Evaluation_criteria_inputsSumAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    criteria_id: number | null
  }

  export type Evaluation_criteria_inputsMinAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    criteria_id: number | null
    staff_input_text: string | null
    staff_attachment: string | null
  }

  export type Evaluation_criteria_inputsMaxAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    criteria_id: number | null
    staff_input_text: string | null
    staff_attachment: string | null
  }

  export type Evaluation_criteria_inputsCountAggregateOutputType = {
    id: number
    evaluation_instance_id: number
    criteria_id: number
    staff_input_text: number
    staff_attachment: number
    _all: number
  }


  export type Evaluation_criteria_inputsAvgAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    criteria_id?: true
  }

  export type Evaluation_criteria_inputsSumAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    criteria_id?: true
  }

  export type Evaluation_criteria_inputsMinAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    criteria_id?: true
    staff_input_text?: true
    staff_attachment?: true
  }

  export type Evaluation_criteria_inputsMaxAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    criteria_id?: true
    staff_input_text?: true
    staff_attachment?: true
  }

  export type Evaluation_criteria_inputsCountAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    criteria_id?: true
    staff_input_text?: true
    staff_attachment?: true
    _all?: true
  }

  export type Evaluation_criteria_inputsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_criteria_inputs to aggregate.
     */
    where?: evaluation_criteria_inputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria_inputs to fetch.
     */
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria_inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria_inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_criteria_inputs
    **/
    _count?: true | Evaluation_criteria_inputsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_criteria_inputsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_criteria_inputsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_criteria_inputsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_criteria_inputsMaxAggregateInputType
  }

  export type GetEvaluation_criteria_inputsAggregateType<T extends Evaluation_criteria_inputsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_criteria_inputs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_criteria_inputs[P]>
      : GetScalarType<T[P], AggregateEvaluation_criteria_inputs[P]>
  }




  export type evaluation_criteria_inputsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_criteria_inputsWhereInput
    orderBy?: evaluation_criteria_inputsOrderByWithAggregationInput | evaluation_criteria_inputsOrderByWithAggregationInput[]
    by: Evaluation_criteria_inputsScalarFieldEnum[] | Evaluation_criteria_inputsScalarFieldEnum
    having?: evaluation_criteria_inputsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_criteria_inputsCountAggregateInputType | true
    _avg?: Evaluation_criteria_inputsAvgAggregateInputType
    _sum?: Evaluation_criteria_inputsSumAggregateInputType
    _min?: Evaluation_criteria_inputsMinAggregateInputType
    _max?: Evaluation_criteria_inputsMaxAggregateInputType
  }

  export type Evaluation_criteria_inputsGroupByOutputType = {
    id: number
    evaluation_instance_id: number
    criteria_id: number
    staff_input_text: string | null
    staff_attachment: string | null
    _count: Evaluation_criteria_inputsCountAggregateOutputType | null
    _avg: Evaluation_criteria_inputsAvgAggregateOutputType | null
    _sum: Evaluation_criteria_inputsSumAggregateOutputType | null
    _min: Evaluation_criteria_inputsMinAggregateOutputType | null
    _max: Evaluation_criteria_inputsMaxAggregateOutputType | null
  }

  type GetEvaluation_criteria_inputsGroupByPayload<T extends evaluation_criteria_inputsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_criteria_inputsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_criteria_inputsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_criteria_inputsGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_criteria_inputsGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_criteria_inputsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_instance_id?: boolean
    criteria_id?: boolean
    staff_input_text?: boolean
    staff_attachment?: boolean
    evaluation_criteria?: boolean | evaluation_criteriaDefaultArgs<ExtArgs>
    evaluation_instances?: boolean | evaluation_instancesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_criteria_inputs"]>


  export type evaluation_criteria_inputsSelectScalar = {
    id?: boolean
    evaluation_instance_id?: boolean
    criteria_id?: boolean
    staff_input_text?: boolean
    staff_attachment?: boolean
  }

  export type evaluation_criteria_inputsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_criteria?: boolean | evaluation_criteriaDefaultArgs<ExtArgs>
    evaluation_instances?: boolean | evaluation_instancesDefaultArgs<ExtArgs>
  }

  export type $evaluation_criteria_inputsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_criteria_inputs"
    objects: {
      evaluation_criteria: Prisma.$evaluation_criteriaPayload<ExtArgs>
      evaluation_instances: Prisma.$evaluation_instancesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluation_instance_id: number
      criteria_id: number
      staff_input_text: string | null
      staff_attachment: string | null
    }, ExtArgs["result"]["evaluation_criteria_inputs"]>
    composites: {}
  }

  type evaluation_criteria_inputsGetPayload<S extends boolean | null | undefined | evaluation_criteria_inputsDefaultArgs> = $Result.GetResult<Prisma.$evaluation_criteria_inputsPayload, S>

  type evaluation_criteria_inputsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_criteria_inputsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_criteria_inputsCountAggregateInputType | true
    }

  export interface evaluation_criteria_inputsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_criteria_inputs'], meta: { name: 'evaluation_criteria_inputs' } }
    /**
     * Find zero or one Evaluation_criteria_inputs that matches the filter.
     * @param {evaluation_criteria_inputsFindUniqueArgs} args - Arguments to find a Evaluation_criteria_inputs
     * @example
     * // Get one Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_criteria_inputsFindUniqueArgs>(args: SelectSubset<T, evaluation_criteria_inputsFindUniqueArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_criteria_inputs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_criteria_inputsFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_criteria_inputs
     * @example
     * // Get one Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_criteria_inputsFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_criteria_inputsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_criteria_inputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsFindFirstArgs} args - Arguments to find a Evaluation_criteria_inputs
     * @example
     * // Get one Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_criteria_inputsFindFirstArgs>(args?: SelectSubset<T, evaluation_criteria_inputsFindFirstArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_criteria_inputs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsFindFirstOrThrowArgs} args - Arguments to find a Evaluation_criteria_inputs
     * @example
     * // Get one Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_criteria_inputsFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_criteria_inputsFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_criteria_inputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findMany()
     * 
     * // Get first 10 Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_criteria_inputsWithIdOnly = await prisma.evaluation_criteria_inputs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_criteria_inputsFindManyArgs>(args?: SelectSubset<T, evaluation_criteria_inputsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsCreateArgs} args - Arguments to create a Evaluation_criteria_inputs.
     * @example
     * // Create one Evaluation_criteria_inputs
     * const Evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.create({
     *   data: {
     *     // ... data to create a Evaluation_criteria_inputs
     *   }
     * })
     * 
     */
    create<T extends evaluation_criteria_inputsCreateArgs>(args: SelectSubset<T, evaluation_criteria_inputsCreateArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsCreateManyArgs} args - Arguments to create many Evaluation_criteria_inputs.
     * @example
     * // Create many Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_criteria_inputsCreateManyArgs>(args?: SelectSubset<T, evaluation_criteria_inputsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsDeleteArgs} args - Arguments to delete one Evaluation_criteria_inputs.
     * @example
     * // Delete one Evaluation_criteria_inputs
     * const Evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_criteria_inputs
     *   }
     * })
     * 
     */
    delete<T extends evaluation_criteria_inputsDeleteArgs>(args: SelectSubset<T, evaluation_criteria_inputsDeleteArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsUpdateArgs} args - Arguments to update one Evaluation_criteria_inputs.
     * @example
     * // Update one Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_criteria_inputsUpdateArgs>(args: SelectSubset<T, evaluation_criteria_inputsUpdateArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsDeleteManyArgs} args - Arguments to filter Evaluation_criteria_inputs to delete.
     * @example
     * // Delete a few Evaluation_criteria_inputs
     * const { count } = await prisma.evaluation_criteria_inputs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_criteria_inputsDeleteManyArgs>(args?: SelectSubset<T, evaluation_criteria_inputsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_criteria_inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_criteria_inputsUpdateManyArgs>(args: SelectSubset<T, evaluation_criteria_inputsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_criteria_inputs.
     * @param {evaluation_criteria_inputsUpsertArgs} args - Arguments to update or create a Evaluation_criteria_inputs.
     * @example
     * // Update or create a Evaluation_criteria_inputs
     * const evaluation_criteria_inputs = await prisma.evaluation_criteria_inputs.upsert({
     *   create: {
     *     // ... data to create a Evaluation_criteria_inputs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_criteria_inputs we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_criteria_inputsUpsertArgs>(args: SelectSubset<T, evaluation_criteria_inputsUpsertArgs<ExtArgs>>): Prisma__evaluation_criteria_inputsClient<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_criteria_inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsCountArgs} args - Arguments to filter Evaluation_criteria_inputs to count.
     * @example
     * // Count the number of Evaluation_criteria_inputs
     * const count = await prisma.evaluation_criteria_inputs.count({
     *   where: {
     *     // ... the filter for the Evaluation_criteria_inputs we want to count
     *   }
     * })
    **/
    count<T extends evaluation_criteria_inputsCountArgs>(
      args?: Subset<T, evaluation_criteria_inputsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_criteria_inputsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_criteria_inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_criteria_inputsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_criteria_inputsAggregateArgs>(args: Subset<T, Evaluation_criteria_inputsAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_criteria_inputsAggregateType<T>>

    /**
     * Group by Evaluation_criteria_inputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_criteria_inputsGroupByArgs} args - Group by arguments.
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
      T extends evaluation_criteria_inputsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_criteria_inputsGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_criteria_inputsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_criteria_inputsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_criteria_inputsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_criteria_inputs model
   */
  readonly fields: evaluation_criteria_inputsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_criteria_inputs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_criteria_inputsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_criteria<T extends evaluation_criteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteriaDefaultArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    evaluation_instances<T extends evaluation_instancesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_instancesDefaultArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the evaluation_criteria_inputs model
   */ 
  interface evaluation_criteria_inputsFieldRefs {
    readonly id: FieldRef<"evaluation_criteria_inputs", 'Int'>
    readonly evaluation_instance_id: FieldRef<"evaluation_criteria_inputs", 'Int'>
    readonly criteria_id: FieldRef<"evaluation_criteria_inputs", 'Int'>
    readonly staff_input_text: FieldRef<"evaluation_criteria_inputs", 'String'>
    readonly staff_attachment: FieldRef<"evaluation_criteria_inputs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_criteria_inputs findUnique
   */
  export type evaluation_criteria_inputsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria_inputs to fetch.
     */
    where: evaluation_criteria_inputsWhereUniqueInput
  }

  /**
   * evaluation_criteria_inputs findUniqueOrThrow
   */
  export type evaluation_criteria_inputsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria_inputs to fetch.
     */
    where: evaluation_criteria_inputsWhereUniqueInput
  }

  /**
   * evaluation_criteria_inputs findFirst
   */
  export type evaluation_criteria_inputsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria_inputs to fetch.
     */
    where?: evaluation_criteria_inputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria_inputs to fetch.
     */
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_criteria_inputs.
     */
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria_inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria_inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_criteria_inputs.
     */
    distinct?: Evaluation_criteria_inputsScalarFieldEnum | Evaluation_criteria_inputsScalarFieldEnum[]
  }

  /**
   * evaluation_criteria_inputs findFirstOrThrow
   */
  export type evaluation_criteria_inputsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria_inputs to fetch.
     */
    where?: evaluation_criteria_inputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria_inputs to fetch.
     */
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_criteria_inputs.
     */
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria_inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria_inputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_criteria_inputs.
     */
    distinct?: Evaluation_criteria_inputsScalarFieldEnum | Evaluation_criteria_inputsScalarFieldEnum[]
  }

  /**
   * evaluation_criteria_inputs findMany
   */
  export type evaluation_criteria_inputsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_criteria_inputs to fetch.
     */
    where?: evaluation_criteria_inputsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_criteria_inputs to fetch.
     */
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_criteria_inputs.
     */
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_criteria_inputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_criteria_inputs.
     */
    skip?: number
    distinct?: Evaluation_criteria_inputsScalarFieldEnum | Evaluation_criteria_inputsScalarFieldEnum[]
  }

  /**
   * evaluation_criteria_inputs create
   */
  export type evaluation_criteria_inputsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_criteria_inputs.
     */
    data: XOR<evaluation_criteria_inputsCreateInput, evaluation_criteria_inputsUncheckedCreateInput>
  }

  /**
   * evaluation_criteria_inputs createMany
   */
  export type evaluation_criteria_inputsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_criteria_inputs.
     */
    data: evaluation_criteria_inputsCreateManyInput | evaluation_criteria_inputsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_criteria_inputs update
   */
  export type evaluation_criteria_inputsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_criteria_inputs.
     */
    data: XOR<evaluation_criteria_inputsUpdateInput, evaluation_criteria_inputsUncheckedUpdateInput>
    /**
     * Choose, which evaluation_criteria_inputs to update.
     */
    where: evaluation_criteria_inputsWhereUniqueInput
  }

  /**
   * evaluation_criteria_inputs updateMany
   */
  export type evaluation_criteria_inputsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_criteria_inputs.
     */
    data: XOR<evaluation_criteria_inputsUpdateManyMutationInput, evaluation_criteria_inputsUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_criteria_inputs to update
     */
    where?: evaluation_criteria_inputsWhereInput
  }

  /**
   * evaluation_criteria_inputs upsert
   */
  export type evaluation_criteria_inputsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_criteria_inputs to update in case it exists.
     */
    where: evaluation_criteria_inputsWhereUniqueInput
    /**
     * In case the evaluation_criteria_inputs found by the `where` argument doesn't exist, create a new evaluation_criteria_inputs with this data.
     */
    create: XOR<evaluation_criteria_inputsCreateInput, evaluation_criteria_inputsUncheckedCreateInput>
    /**
     * In case the evaluation_criteria_inputs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_criteria_inputsUpdateInput, evaluation_criteria_inputsUncheckedUpdateInput>
  }

  /**
   * evaluation_criteria_inputs delete
   */
  export type evaluation_criteria_inputsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    /**
     * Filter which evaluation_criteria_inputs to delete.
     */
    where: evaluation_criteria_inputsWhereUniqueInput
  }

  /**
   * evaluation_criteria_inputs deleteMany
   */
  export type evaluation_criteria_inputsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_criteria_inputs to delete
     */
    where?: evaluation_criteria_inputsWhereInput
  }

  /**
   * evaluation_criteria_inputs without action
   */
  export type evaluation_criteria_inputsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_evaluator_scores
   */

  export type AggregateEvaluation_evaluator_scores = {
    _count: Evaluation_evaluator_scoresCountAggregateOutputType | null
    _avg: Evaluation_evaluator_scoresAvgAggregateOutputType | null
    _sum: Evaluation_evaluator_scoresSumAggregateOutputType | null
    _min: Evaluation_evaluator_scoresMinAggregateOutputType | null
    _max: Evaluation_evaluator_scoresMaxAggregateOutputType | null
  }

  export type Evaluation_evaluator_scoresAvgAggregateOutputType = {
    id: number | null
    evaluation_evaluator_status_id: number | null
    criteria_id: number | null
    score: Decimal | null
  }

  export type Evaluation_evaluator_scoresSumAggregateOutputType = {
    id: number | null
    evaluation_evaluator_status_id: number | null
    criteria_id: number | null
    score: Decimal | null
  }

  export type Evaluation_evaluator_scoresMinAggregateOutputType = {
    id: number | null
    evaluation_evaluator_status_id: number | null
    criteria_id: number | null
    score: Decimal | null
    comment: string | null
  }

  export type Evaluation_evaluator_scoresMaxAggregateOutputType = {
    id: number | null
    evaluation_evaluator_status_id: number | null
    criteria_id: number | null
    score: Decimal | null
    comment: string | null
  }

  export type Evaluation_evaluator_scoresCountAggregateOutputType = {
    id: number
    evaluation_evaluator_status_id: number
    criteria_id: number
    score: number
    comment: number
    _all: number
  }


  export type Evaluation_evaluator_scoresAvgAggregateInputType = {
    id?: true
    evaluation_evaluator_status_id?: true
    criteria_id?: true
    score?: true
  }

  export type Evaluation_evaluator_scoresSumAggregateInputType = {
    id?: true
    evaluation_evaluator_status_id?: true
    criteria_id?: true
    score?: true
  }

  export type Evaluation_evaluator_scoresMinAggregateInputType = {
    id?: true
    evaluation_evaluator_status_id?: true
    criteria_id?: true
    score?: true
    comment?: true
  }

  export type Evaluation_evaluator_scoresMaxAggregateInputType = {
    id?: true
    evaluation_evaluator_status_id?: true
    criteria_id?: true
    score?: true
    comment?: true
  }

  export type Evaluation_evaluator_scoresCountAggregateInputType = {
    id?: true
    evaluation_evaluator_status_id?: true
    criteria_id?: true
    score?: true
    comment?: true
    _all?: true
  }

  export type Evaluation_evaluator_scoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_evaluator_scores to aggregate.
     */
    where?: evaluation_evaluator_scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_scores to fetch.
     */
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_evaluator_scores
    **/
    _count?: true | Evaluation_evaluator_scoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_evaluator_scoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_evaluator_scoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_evaluator_scoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_evaluator_scoresMaxAggregateInputType
  }

  export type GetEvaluation_evaluator_scoresAggregateType<T extends Evaluation_evaluator_scoresAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_evaluator_scores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_evaluator_scores[P]>
      : GetScalarType<T[P], AggregateEvaluation_evaluator_scores[P]>
  }




  export type evaluation_evaluator_scoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_scoresWhereInput
    orderBy?: evaluation_evaluator_scoresOrderByWithAggregationInput | evaluation_evaluator_scoresOrderByWithAggregationInput[]
    by: Evaluation_evaluator_scoresScalarFieldEnum[] | Evaluation_evaluator_scoresScalarFieldEnum
    having?: evaluation_evaluator_scoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_evaluator_scoresCountAggregateInputType | true
    _avg?: Evaluation_evaluator_scoresAvgAggregateInputType
    _sum?: Evaluation_evaluator_scoresSumAggregateInputType
    _min?: Evaluation_evaluator_scoresMinAggregateInputType
    _max?: Evaluation_evaluator_scoresMaxAggregateInputType
  }

  export type Evaluation_evaluator_scoresGroupByOutputType = {
    id: number
    evaluation_evaluator_status_id: number
    criteria_id: number
    score: Decimal
    comment: string | null
    _count: Evaluation_evaluator_scoresCountAggregateOutputType | null
    _avg: Evaluation_evaluator_scoresAvgAggregateOutputType | null
    _sum: Evaluation_evaluator_scoresSumAggregateOutputType | null
    _min: Evaluation_evaluator_scoresMinAggregateOutputType | null
    _max: Evaluation_evaluator_scoresMaxAggregateOutputType | null
  }

  type GetEvaluation_evaluator_scoresGroupByPayload<T extends evaluation_evaluator_scoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_evaluator_scoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_evaluator_scoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_evaluator_scoresGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_evaluator_scoresGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_evaluator_scoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_evaluator_status_id?: boolean
    criteria_id?: boolean
    score?: boolean
    comment?: boolean
    evaluation_evaluator_status?: boolean | evaluation_evaluator_statusDefaultArgs<ExtArgs>
    evaluation_criteria?: boolean | evaluation_criteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_evaluator_scores"]>


  export type evaluation_evaluator_scoresSelectScalar = {
    id?: boolean
    evaluation_evaluator_status_id?: boolean
    criteria_id?: boolean
    score?: boolean
    comment?: boolean
  }

  export type evaluation_evaluator_scoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_evaluator_status?: boolean | evaluation_evaluator_statusDefaultArgs<ExtArgs>
    evaluation_criteria?: boolean | evaluation_criteriaDefaultArgs<ExtArgs>
  }

  export type $evaluation_evaluator_scoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_evaluator_scores"
    objects: {
      evaluation_evaluator_status: Prisma.$evaluation_evaluator_statusPayload<ExtArgs>
      evaluation_criteria: Prisma.$evaluation_criteriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluation_evaluator_status_id: number
      criteria_id: number
      score: Prisma.Decimal
      comment: string | null
    }, ExtArgs["result"]["evaluation_evaluator_scores"]>
    composites: {}
  }

  type evaluation_evaluator_scoresGetPayload<S extends boolean | null | undefined | evaluation_evaluator_scoresDefaultArgs> = $Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload, S>

  type evaluation_evaluator_scoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_evaluator_scoresFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_evaluator_scoresCountAggregateInputType | true
    }

  export interface evaluation_evaluator_scoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_evaluator_scores'], meta: { name: 'evaluation_evaluator_scores' } }
    /**
     * Find zero or one Evaluation_evaluator_scores that matches the filter.
     * @param {evaluation_evaluator_scoresFindUniqueArgs} args - Arguments to find a Evaluation_evaluator_scores
     * @example
     * // Get one Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_evaluator_scoresFindUniqueArgs>(args: SelectSubset<T, evaluation_evaluator_scoresFindUniqueArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_evaluator_scores that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_evaluator_scoresFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_evaluator_scores
     * @example
     * // Get one Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_evaluator_scoresFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_evaluator_scoresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_evaluator_scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresFindFirstArgs} args - Arguments to find a Evaluation_evaluator_scores
     * @example
     * // Get one Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_evaluator_scoresFindFirstArgs>(args?: SelectSubset<T, evaluation_evaluator_scoresFindFirstArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_evaluator_scores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresFindFirstOrThrowArgs} args - Arguments to find a Evaluation_evaluator_scores
     * @example
     * // Get one Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_evaluator_scoresFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_evaluator_scoresFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_evaluator_scores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findMany()
     * 
     * // Get first 10 Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_evaluator_scoresWithIdOnly = await prisma.evaluation_evaluator_scores.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_evaluator_scoresFindManyArgs>(args?: SelectSubset<T, evaluation_evaluator_scoresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresCreateArgs} args - Arguments to create a Evaluation_evaluator_scores.
     * @example
     * // Create one Evaluation_evaluator_scores
     * const Evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.create({
     *   data: {
     *     // ... data to create a Evaluation_evaluator_scores
     *   }
     * })
     * 
     */
    create<T extends evaluation_evaluator_scoresCreateArgs>(args: SelectSubset<T, evaluation_evaluator_scoresCreateArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresCreateManyArgs} args - Arguments to create many Evaluation_evaluator_scores.
     * @example
     * // Create many Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_evaluator_scoresCreateManyArgs>(args?: SelectSubset<T, evaluation_evaluator_scoresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresDeleteArgs} args - Arguments to delete one Evaluation_evaluator_scores.
     * @example
     * // Delete one Evaluation_evaluator_scores
     * const Evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_evaluator_scores
     *   }
     * })
     * 
     */
    delete<T extends evaluation_evaluator_scoresDeleteArgs>(args: SelectSubset<T, evaluation_evaluator_scoresDeleteArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresUpdateArgs} args - Arguments to update one Evaluation_evaluator_scores.
     * @example
     * // Update one Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_evaluator_scoresUpdateArgs>(args: SelectSubset<T, evaluation_evaluator_scoresUpdateArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresDeleteManyArgs} args - Arguments to filter Evaluation_evaluator_scores to delete.
     * @example
     * // Delete a few Evaluation_evaluator_scores
     * const { count } = await prisma.evaluation_evaluator_scores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_evaluator_scoresDeleteManyArgs>(args?: SelectSubset<T, evaluation_evaluator_scoresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_evaluator_scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_evaluator_scoresUpdateManyArgs>(args: SelectSubset<T, evaluation_evaluator_scoresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_evaluator_scores.
     * @param {evaluation_evaluator_scoresUpsertArgs} args - Arguments to update or create a Evaluation_evaluator_scores.
     * @example
     * // Update or create a Evaluation_evaluator_scores
     * const evaluation_evaluator_scores = await prisma.evaluation_evaluator_scores.upsert({
     *   create: {
     *     // ... data to create a Evaluation_evaluator_scores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_evaluator_scores we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_evaluator_scoresUpsertArgs>(args: SelectSubset<T, evaluation_evaluator_scoresUpsertArgs<ExtArgs>>): Prisma__evaluation_evaluator_scoresClient<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_evaluator_scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresCountArgs} args - Arguments to filter Evaluation_evaluator_scores to count.
     * @example
     * // Count the number of Evaluation_evaluator_scores
     * const count = await prisma.evaluation_evaluator_scores.count({
     *   where: {
     *     // ... the filter for the Evaluation_evaluator_scores we want to count
     *   }
     * })
    **/
    count<T extends evaluation_evaluator_scoresCountArgs>(
      args?: Subset<T, evaluation_evaluator_scoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_evaluator_scoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_evaluator_scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_evaluator_scoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_evaluator_scoresAggregateArgs>(args: Subset<T, Evaluation_evaluator_scoresAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_evaluator_scoresAggregateType<T>>

    /**
     * Group by Evaluation_evaluator_scores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_scoresGroupByArgs} args - Group by arguments.
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
      T extends evaluation_evaluator_scoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_evaluator_scoresGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_evaluator_scoresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_evaluator_scoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_evaluator_scoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_evaluator_scores model
   */
  readonly fields: evaluation_evaluator_scoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_evaluator_scores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_evaluator_scoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_evaluator_status<T extends evaluation_evaluator_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_evaluator_statusDefaultArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    evaluation_criteria<T extends evaluation_criteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_criteriaDefaultArgs<ExtArgs>>): Prisma__evaluation_criteriaClient<$Result.GetResult<Prisma.$evaluation_criteriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the evaluation_evaluator_scores model
   */ 
  interface evaluation_evaluator_scoresFieldRefs {
    readonly id: FieldRef<"evaluation_evaluator_scores", 'Int'>
    readonly evaluation_evaluator_status_id: FieldRef<"evaluation_evaluator_scores", 'Int'>
    readonly criteria_id: FieldRef<"evaluation_evaluator_scores", 'Int'>
    readonly score: FieldRef<"evaluation_evaluator_scores", 'Decimal'>
    readonly comment: FieldRef<"evaluation_evaluator_scores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_evaluator_scores findUnique
   */
  export type evaluation_evaluator_scoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_scores to fetch.
     */
    where: evaluation_evaluator_scoresWhereUniqueInput
  }

  /**
   * evaluation_evaluator_scores findUniqueOrThrow
   */
  export type evaluation_evaluator_scoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_scores to fetch.
     */
    where: evaluation_evaluator_scoresWhereUniqueInput
  }

  /**
   * evaluation_evaluator_scores findFirst
   */
  export type evaluation_evaluator_scoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_scores to fetch.
     */
    where?: evaluation_evaluator_scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_scores to fetch.
     */
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_evaluator_scores.
     */
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_evaluator_scores.
     */
    distinct?: Evaluation_evaluator_scoresScalarFieldEnum | Evaluation_evaluator_scoresScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_scores findFirstOrThrow
   */
  export type evaluation_evaluator_scoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_scores to fetch.
     */
    where?: evaluation_evaluator_scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_scores to fetch.
     */
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_evaluator_scores.
     */
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_scores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_evaluator_scores.
     */
    distinct?: Evaluation_evaluator_scoresScalarFieldEnum | Evaluation_evaluator_scoresScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_scores findMany
   */
  export type evaluation_evaluator_scoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_scores to fetch.
     */
    where?: evaluation_evaluator_scoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_scores to fetch.
     */
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_evaluator_scores.
     */
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_scores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_scores.
     */
    skip?: number
    distinct?: Evaluation_evaluator_scoresScalarFieldEnum | Evaluation_evaluator_scoresScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_scores create
   */
  export type evaluation_evaluator_scoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_evaluator_scores.
     */
    data: XOR<evaluation_evaluator_scoresCreateInput, evaluation_evaluator_scoresUncheckedCreateInput>
  }

  /**
   * evaluation_evaluator_scores createMany
   */
  export type evaluation_evaluator_scoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_evaluator_scores.
     */
    data: evaluation_evaluator_scoresCreateManyInput | evaluation_evaluator_scoresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_evaluator_scores update
   */
  export type evaluation_evaluator_scoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_evaluator_scores.
     */
    data: XOR<evaluation_evaluator_scoresUpdateInput, evaluation_evaluator_scoresUncheckedUpdateInput>
    /**
     * Choose, which evaluation_evaluator_scores to update.
     */
    where: evaluation_evaluator_scoresWhereUniqueInput
  }

  /**
   * evaluation_evaluator_scores updateMany
   */
  export type evaluation_evaluator_scoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_evaluator_scores.
     */
    data: XOR<evaluation_evaluator_scoresUpdateManyMutationInput, evaluation_evaluator_scoresUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_evaluator_scores to update
     */
    where?: evaluation_evaluator_scoresWhereInput
  }

  /**
   * evaluation_evaluator_scores upsert
   */
  export type evaluation_evaluator_scoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_evaluator_scores to update in case it exists.
     */
    where: evaluation_evaluator_scoresWhereUniqueInput
    /**
     * In case the evaluation_evaluator_scores found by the `where` argument doesn't exist, create a new evaluation_evaluator_scores with this data.
     */
    create: XOR<evaluation_evaluator_scoresCreateInput, evaluation_evaluator_scoresUncheckedCreateInput>
    /**
     * In case the evaluation_evaluator_scores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_evaluator_scoresUpdateInput, evaluation_evaluator_scoresUncheckedUpdateInput>
  }

  /**
   * evaluation_evaluator_scores delete
   */
  export type evaluation_evaluator_scoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    /**
     * Filter which evaluation_evaluator_scores to delete.
     */
    where: evaluation_evaluator_scoresWhereUniqueInput
  }

  /**
   * evaluation_evaluator_scores deleteMany
   */
  export type evaluation_evaluator_scoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_evaluator_scores to delete
     */
    where?: evaluation_evaluator_scoresWhereInput
  }

  /**
   * evaluation_evaluator_scores without action
   */
  export type evaluation_evaluator_scoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_evaluator_status
   */

  export type AggregateEvaluation_evaluator_status = {
    _count: Evaluation_evaluator_statusCountAggregateOutputType | null
    _avg: Evaluation_evaluator_statusAvgAggregateOutputType | null
    _sum: Evaluation_evaluator_statusSumAggregateOutputType | null
    _min: Evaluation_evaluator_statusMinAggregateOutputType | null
    _max: Evaluation_evaluator_statusMaxAggregateOutputType | null
  }

  export type Evaluation_evaluator_statusAvgAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    evaluator_id: number | null
    total_score: Decimal | null
  }

  export type Evaluation_evaluator_statusSumAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    evaluator_id: number | null
    total_score: Decimal | null
  }

  export type Evaluation_evaluator_statusMinAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    evaluator_id: number | null
    status: $Enums.evaluation_evaluator_status_status | null
    total_score: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_evaluator_statusMaxAggregateOutputType = {
    id: number | null
    evaluation_instance_id: number | null
    evaluator_id: number | null
    status: $Enums.evaluation_evaluator_status_status | null
    total_score: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_evaluator_statusCountAggregateOutputType = {
    id: number
    evaluation_instance_id: number
    evaluator_id: number
    status: number
    total_score: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Evaluation_evaluator_statusAvgAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    evaluator_id?: true
    total_score?: true
  }

  export type Evaluation_evaluator_statusSumAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    evaluator_id?: true
    total_score?: true
  }

  export type Evaluation_evaluator_statusMinAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    evaluator_id?: true
    status?: true
    total_score?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_evaluator_statusMaxAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    evaluator_id?: true
    status?: true
    total_score?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_evaluator_statusCountAggregateInputType = {
    id?: true
    evaluation_instance_id?: true
    evaluator_id?: true
    status?: true
    total_score?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Evaluation_evaluator_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_evaluator_status to aggregate.
     */
    where?: evaluation_evaluator_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_statuses to fetch.
     */
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_evaluator_statuses
    **/
    _count?: true | Evaluation_evaluator_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_evaluator_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_evaluator_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_evaluator_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_evaluator_statusMaxAggregateInputType
  }

  export type GetEvaluation_evaluator_statusAggregateType<T extends Evaluation_evaluator_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_evaluator_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_evaluator_status[P]>
      : GetScalarType<T[P], AggregateEvaluation_evaluator_status[P]>
  }




  export type evaluation_evaluator_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_evaluator_statusWhereInput
    orderBy?: evaluation_evaluator_statusOrderByWithAggregationInput | evaluation_evaluator_statusOrderByWithAggregationInput[]
    by: Evaluation_evaluator_statusScalarFieldEnum[] | Evaluation_evaluator_statusScalarFieldEnum
    having?: evaluation_evaluator_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_evaluator_statusCountAggregateInputType | true
    _avg?: Evaluation_evaluator_statusAvgAggregateInputType
    _sum?: Evaluation_evaluator_statusSumAggregateInputType
    _min?: Evaluation_evaluator_statusMinAggregateInputType
    _max?: Evaluation_evaluator_statusMaxAggregateInputType
  }

  export type Evaluation_evaluator_statusGroupByOutputType = {
    id: number
    evaluation_instance_id: number
    evaluator_id: number
    status: $Enums.evaluation_evaluator_status_status
    total_score: Decimal | null
    created_at: Date
    updated_at: Date
    _count: Evaluation_evaluator_statusCountAggregateOutputType | null
    _avg: Evaluation_evaluator_statusAvgAggregateOutputType | null
    _sum: Evaluation_evaluator_statusSumAggregateOutputType | null
    _min: Evaluation_evaluator_statusMinAggregateOutputType | null
    _max: Evaluation_evaluator_statusMaxAggregateOutputType | null
  }

  type GetEvaluation_evaluator_statusGroupByPayload<T extends evaluation_evaluator_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_evaluator_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_evaluator_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_evaluator_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_evaluator_statusGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_evaluator_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluation_instance_id?: boolean
    evaluator_id?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    evaluation_evaluator_scores?: boolean | evaluation_evaluator_status$evaluation_evaluator_scoresArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    evaluation_instances?: boolean | evaluation_instancesDefaultArgs<ExtArgs>
    _count?: boolean | Evaluation_evaluator_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_evaluator_status"]>


  export type evaluation_evaluator_statusSelectScalar = {
    id?: boolean
    evaluation_instance_id?: boolean
    evaluator_id?: boolean
    status?: boolean
    total_score?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type evaluation_evaluator_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_evaluator_scores?: boolean | evaluation_evaluator_status$evaluation_evaluator_scoresArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    evaluation_instances?: boolean | evaluation_instancesDefaultArgs<ExtArgs>
    _count?: boolean | Evaluation_evaluator_statusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $evaluation_evaluator_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_evaluator_status"
    objects: {
      evaluation_evaluator_scores: Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      evaluation_instances: Prisma.$evaluation_instancesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluation_instance_id: number
      evaluator_id: number
      status: $Enums.evaluation_evaluator_status_status
      total_score: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["evaluation_evaluator_status"]>
    composites: {}
  }

  type evaluation_evaluator_statusGetPayload<S extends boolean | null | undefined | evaluation_evaluator_statusDefaultArgs> = $Result.GetResult<Prisma.$evaluation_evaluator_statusPayload, S>

  type evaluation_evaluator_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_evaluator_statusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_evaluator_statusCountAggregateInputType | true
    }

  export interface evaluation_evaluator_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_evaluator_status'], meta: { name: 'evaluation_evaluator_status' } }
    /**
     * Find zero or one Evaluation_evaluator_status that matches the filter.
     * @param {evaluation_evaluator_statusFindUniqueArgs} args - Arguments to find a Evaluation_evaluator_status
     * @example
     * // Get one Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_evaluator_statusFindUniqueArgs>(args: SelectSubset<T, evaluation_evaluator_statusFindUniqueArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_evaluator_status that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_evaluator_statusFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_evaluator_status
     * @example
     * // Get one Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_evaluator_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_evaluator_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_evaluator_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusFindFirstArgs} args - Arguments to find a Evaluation_evaluator_status
     * @example
     * // Get one Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_evaluator_statusFindFirstArgs>(args?: SelectSubset<T, evaluation_evaluator_statusFindFirstArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_evaluator_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusFindFirstOrThrowArgs} args - Arguments to find a Evaluation_evaluator_status
     * @example
     * // Get one Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_evaluator_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_evaluator_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_evaluator_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_evaluator_statuses
     * const evaluation_evaluator_statuses = await prisma.evaluation_evaluator_status.findMany()
     * 
     * // Get first 10 Evaluation_evaluator_statuses
     * const evaluation_evaluator_statuses = await prisma.evaluation_evaluator_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_evaluator_statusWithIdOnly = await prisma.evaluation_evaluator_status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_evaluator_statusFindManyArgs>(args?: SelectSubset<T, evaluation_evaluator_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_evaluator_status.
     * @param {evaluation_evaluator_statusCreateArgs} args - Arguments to create a Evaluation_evaluator_status.
     * @example
     * // Create one Evaluation_evaluator_status
     * const Evaluation_evaluator_status = await prisma.evaluation_evaluator_status.create({
     *   data: {
     *     // ... data to create a Evaluation_evaluator_status
     *   }
     * })
     * 
     */
    create<T extends evaluation_evaluator_statusCreateArgs>(args: SelectSubset<T, evaluation_evaluator_statusCreateArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_evaluator_statuses.
     * @param {evaluation_evaluator_statusCreateManyArgs} args - Arguments to create many Evaluation_evaluator_statuses.
     * @example
     * // Create many Evaluation_evaluator_statuses
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_evaluator_statusCreateManyArgs>(args?: SelectSubset<T, evaluation_evaluator_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_evaluator_status.
     * @param {evaluation_evaluator_statusDeleteArgs} args - Arguments to delete one Evaluation_evaluator_status.
     * @example
     * // Delete one Evaluation_evaluator_status
     * const Evaluation_evaluator_status = await prisma.evaluation_evaluator_status.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_evaluator_status
     *   }
     * })
     * 
     */
    delete<T extends evaluation_evaluator_statusDeleteArgs>(args: SelectSubset<T, evaluation_evaluator_statusDeleteArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_evaluator_status.
     * @param {evaluation_evaluator_statusUpdateArgs} args - Arguments to update one Evaluation_evaluator_status.
     * @example
     * // Update one Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_evaluator_statusUpdateArgs>(args: SelectSubset<T, evaluation_evaluator_statusUpdateArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_evaluator_statuses.
     * @param {evaluation_evaluator_statusDeleteManyArgs} args - Arguments to filter Evaluation_evaluator_statuses to delete.
     * @example
     * // Delete a few Evaluation_evaluator_statuses
     * const { count } = await prisma.evaluation_evaluator_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_evaluator_statusDeleteManyArgs>(args?: SelectSubset<T, evaluation_evaluator_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_evaluator_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_evaluator_statuses
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_evaluator_statusUpdateManyArgs>(args: SelectSubset<T, evaluation_evaluator_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_evaluator_status.
     * @param {evaluation_evaluator_statusUpsertArgs} args - Arguments to update or create a Evaluation_evaluator_status.
     * @example
     * // Update or create a Evaluation_evaluator_status
     * const evaluation_evaluator_status = await prisma.evaluation_evaluator_status.upsert({
     *   create: {
     *     // ... data to create a Evaluation_evaluator_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_evaluator_status we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_evaluator_statusUpsertArgs>(args: SelectSubset<T, evaluation_evaluator_statusUpsertArgs<ExtArgs>>): Prisma__evaluation_evaluator_statusClient<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_evaluator_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusCountArgs} args - Arguments to filter Evaluation_evaluator_statuses to count.
     * @example
     * // Count the number of Evaluation_evaluator_statuses
     * const count = await prisma.evaluation_evaluator_status.count({
     *   where: {
     *     // ... the filter for the Evaluation_evaluator_statuses we want to count
     *   }
     * })
    **/
    count<T extends evaluation_evaluator_statusCountArgs>(
      args?: Subset<T, evaluation_evaluator_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_evaluator_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_evaluator_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_evaluator_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_evaluator_statusAggregateArgs>(args: Subset<T, Evaluation_evaluator_statusAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_evaluator_statusAggregateType<T>>

    /**
     * Group by Evaluation_evaluator_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_evaluator_statusGroupByArgs} args - Group by arguments.
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
      T extends evaluation_evaluator_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_evaluator_statusGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_evaluator_statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_evaluator_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_evaluator_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_evaluator_status model
   */
  readonly fields: evaluation_evaluator_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_evaluator_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_evaluator_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_evaluator_scores<T extends evaluation_evaluator_status$evaluation_evaluator_scoresArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_evaluator_status$evaluation_evaluator_scoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_scoresPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    evaluation_instances<T extends evaluation_instancesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_instancesDefaultArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the evaluation_evaluator_status model
   */ 
  interface evaluation_evaluator_statusFieldRefs {
    readonly id: FieldRef<"evaluation_evaluator_status", 'Int'>
    readonly evaluation_instance_id: FieldRef<"evaluation_evaluator_status", 'Int'>
    readonly evaluator_id: FieldRef<"evaluation_evaluator_status", 'Int'>
    readonly status: FieldRef<"evaluation_evaluator_status", 'evaluation_evaluator_status_status'>
    readonly total_score: FieldRef<"evaluation_evaluator_status", 'Decimal'>
    readonly created_at: FieldRef<"evaluation_evaluator_status", 'DateTime'>
    readonly updated_at: FieldRef<"evaluation_evaluator_status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_evaluator_status findUnique
   */
  export type evaluation_evaluator_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_status to fetch.
     */
    where: evaluation_evaluator_statusWhereUniqueInput
  }

  /**
   * evaluation_evaluator_status findUniqueOrThrow
   */
  export type evaluation_evaluator_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_status to fetch.
     */
    where: evaluation_evaluator_statusWhereUniqueInput
  }

  /**
   * evaluation_evaluator_status findFirst
   */
  export type evaluation_evaluator_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_status to fetch.
     */
    where?: evaluation_evaluator_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_statuses to fetch.
     */
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_evaluator_statuses.
     */
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_evaluator_statuses.
     */
    distinct?: Evaluation_evaluator_statusScalarFieldEnum | Evaluation_evaluator_statusScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_status findFirstOrThrow
   */
  export type evaluation_evaluator_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_status to fetch.
     */
    where?: evaluation_evaluator_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_statuses to fetch.
     */
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_evaluator_statuses.
     */
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_evaluator_statuses.
     */
    distinct?: Evaluation_evaluator_statusScalarFieldEnum | Evaluation_evaluator_statusScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_status findMany
   */
  export type evaluation_evaluator_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_evaluator_statuses to fetch.
     */
    where?: evaluation_evaluator_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_evaluator_statuses to fetch.
     */
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_evaluator_statuses.
     */
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_evaluator_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_evaluator_statuses.
     */
    skip?: number
    distinct?: Evaluation_evaluator_statusScalarFieldEnum | Evaluation_evaluator_statusScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_status create
   */
  export type evaluation_evaluator_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_evaluator_status.
     */
    data: XOR<evaluation_evaluator_statusCreateInput, evaluation_evaluator_statusUncheckedCreateInput>
  }

  /**
   * evaluation_evaluator_status createMany
   */
  export type evaluation_evaluator_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_evaluator_statuses.
     */
    data: evaluation_evaluator_statusCreateManyInput | evaluation_evaluator_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_evaluator_status update
   */
  export type evaluation_evaluator_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_evaluator_status.
     */
    data: XOR<evaluation_evaluator_statusUpdateInput, evaluation_evaluator_statusUncheckedUpdateInput>
    /**
     * Choose, which evaluation_evaluator_status to update.
     */
    where: evaluation_evaluator_statusWhereUniqueInput
  }

  /**
   * evaluation_evaluator_status updateMany
   */
  export type evaluation_evaluator_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_evaluator_statuses.
     */
    data: XOR<evaluation_evaluator_statusUpdateManyMutationInput, evaluation_evaluator_statusUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_evaluator_statuses to update
     */
    where?: evaluation_evaluator_statusWhereInput
  }

  /**
   * evaluation_evaluator_status upsert
   */
  export type evaluation_evaluator_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_evaluator_status to update in case it exists.
     */
    where: evaluation_evaluator_statusWhereUniqueInput
    /**
     * In case the evaluation_evaluator_status found by the `where` argument doesn't exist, create a new evaluation_evaluator_status with this data.
     */
    create: XOR<evaluation_evaluator_statusCreateInput, evaluation_evaluator_statusUncheckedCreateInput>
    /**
     * In case the evaluation_evaluator_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_evaluator_statusUpdateInput, evaluation_evaluator_statusUncheckedUpdateInput>
  }

  /**
   * evaluation_evaluator_status delete
   */
  export type evaluation_evaluator_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    /**
     * Filter which evaluation_evaluator_status to delete.
     */
    where: evaluation_evaluator_statusWhereUniqueInput
  }

  /**
   * evaluation_evaluator_status deleteMany
   */
  export type evaluation_evaluator_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_evaluator_statuses to delete
     */
    where?: evaluation_evaluator_statusWhereInput
  }

  /**
   * evaluation_evaluator_status.evaluation_evaluator_scores
   */
  export type evaluation_evaluator_status$evaluation_evaluator_scoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_scores
     */
    select?: evaluation_evaluator_scoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_scoresInclude<ExtArgs> | null
    where?: evaluation_evaluator_scoresWhereInput
    orderBy?: evaluation_evaluator_scoresOrderByWithRelationInput | evaluation_evaluator_scoresOrderByWithRelationInput[]
    cursor?: evaluation_evaluator_scoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_evaluator_scoresScalarFieldEnum | Evaluation_evaluator_scoresScalarFieldEnum[]
  }

  /**
   * evaluation_evaluator_status without action
   */
  export type evaluation_evaluator_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_hierarchies
   */

  export type AggregateEvaluation_hierarchies = {
    _count: Evaluation_hierarchiesCountAggregateOutputType | null
    _avg: Evaluation_hierarchiesAvgAggregateOutputType | null
    _sum: Evaluation_hierarchiesSumAggregateOutputType | null
    _min: Evaluation_hierarchiesMinAggregateOutputType | null
    _max: Evaluation_hierarchiesMaxAggregateOutputType | null
  }

  export type Evaluation_hierarchiesAvgAggregateOutputType = {
    id: number | null
    evaluatee_job_id: number | null
    evaluator_job_id: number | null
    level: number | null
  }

  export type Evaluation_hierarchiesSumAggregateOutputType = {
    id: number | null
    evaluatee_job_id: number | null
    evaluator_job_id: number | null
    level: number | null
  }

  export type Evaluation_hierarchiesMinAggregateOutputType = {
    id: number | null
    evaluatee_job_id: number | null
    evaluator_job_id: number | null
    level: number | null
    created_at: Date | null
  }

  export type Evaluation_hierarchiesMaxAggregateOutputType = {
    id: number | null
    evaluatee_job_id: number | null
    evaluator_job_id: number | null
    level: number | null
    created_at: Date | null
  }

  export type Evaluation_hierarchiesCountAggregateOutputType = {
    id: number
    evaluatee_job_id: number
    evaluator_job_id: number
    level: number
    created_at: number
    _all: number
  }


  export type Evaluation_hierarchiesAvgAggregateInputType = {
    id?: true
    evaluatee_job_id?: true
    evaluator_job_id?: true
    level?: true
  }

  export type Evaluation_hierarchiesSumAggregateInputType = {
    id?: true
    evaluatee_job_id?: true
    evaluator_job_id?: true
    level?: true
  }

  export type Evaluation_hierarchiesMinAggregateInputType = {
    id?: true
    evaluatee_job_id?: true
    evaluator_job_id?: true
    level?: true
    created_at?: true
  }

  export type Evaluation_hierarchiesMaxAggregateInputType = {
    id?: true
    evaluatee_job_id?: true
    evaluator_job_id?: true
    level?: true
    created_at?: true
  }

  export type Evaluation_hierarchiesCountAggregateInputType = {
    id?: true
    evaluatee_job_id?: true
    evaluator_job_id?: true
    level?: true
    created_at?: true
    _all?: true
  }

  export type Evaluation_hierarchiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_hierarchies to aggregate.
     */
    where?: evaluation_hierarchiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_hierarchies to fetch.
     */
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_hierarchiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_hierarchies
    **/
    _count?: true | Evaluation_hierarchiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_hierarchiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_hierarchiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_hierarchiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_hierarchiesMaxAggregateInputType
  }

  export type GetEvaluation_hierarchiesAggregateType<T extends Evaluation_hierarchiesAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_hierarchies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_hierarchies[P]>
      : GetScalarType<T[P], AggregateEvaluation_hierarchies[P]>
  }




  export type evaluation_hierarchiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_hierarchiesWhereInput
    orderBy?: evaluation_hierarchiesOrderByWithAggregationInput | evaluation_hierarchiesOrderByWithAggregationInput[]
    by: Evaluation_hierarchiesScalarFieldEnum[] | Evaluation_hierarchiesScalarFieldEnum
    having?: evaluation_hierarchiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_hierarchiesCountAggregateInputType | true
    _avg?: Evaluation_hierarchiesAvgAggregateInputType
    _sum?: Evaluation_hierarchiesSumAggregateInputType
    _min?: Evaluation_hierarchiesMinAggregateInputType
    _max?: Evaluation_hierarchiesMaxAggregateInputType
  }

  export type Evaluation_hierarchiesGroupByOutputType = {
    id: number
    evaluatee_job_id: number
    evaluator_job_id: number
    level: number | null
    created_at: Date
    _count: Evaluation_hierarchiesCountAggregateOutputType | null
    _avg: Evaluation_hierarchiesAvgAggregateOutputType | null
    _sum: Evaluation_hierarchiesSumAggregateOutputType | null
    _min: Evaluation_hierarchiesMinAggregateOutputType | null
    _max: Evaluation_hierarchiesMaxAggregateOutputType | null
  }

  type GetEvaluation_hierarchiesGroupByPayload<T extends evaluation_hierarchiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_hierarchiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_hierarchiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_hierarchiesGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_hierarchiesGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_hierarchiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    evaluatee_job_id?: boolean
    evaluator_job_id?: boolean
    level?: boolean
    created_at?: boolean
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: boolean | jobsDefaultArgs<ExtArgs>
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: boolean | jobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_hierarchies"]>


  export type evaluation_hierarchiesSelectScalar = {
    id?: boolean
    evaluatee_job_id?: boolean
    evaluator_job_id?: boolean
    level?: boolean
    created_at?: boolean
  }

  export type evaluation_hierarchiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: boolean | jobsDefaultArgs<ExtArgs>
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: boolean | jobsDefaultArgs<ExtArgs>
  }

  export type $evaluation_hierarchiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_hierarchies"
    objects: {
      jobs_evaluation_hierarchies_evaluatee_job_idTojobs: Prisma.$jobsPayload<ExtArgs>
      jobs_evaluation_hierarchies_evaluator_job_idTojobs: Prisma.$jobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      evaluatee_job_id: number
      evaluator_job_id: number
      level: number | null
      created_at: Date
    }, ExtArgs["result"]["evaluation_hierarchies"]>
    composites: {}
  }

  type evaluation_hierarchiesGetPayload<S extends boolean | null | undefined | evaluation_hierarchiesDefaultArgs> = $Result.GetResult<Prisma.$evaluation_hierarchiesPayload, S>

  type evaluation_hierarchiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_hierarchiesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_hierarchiesCountAggregateInputType | true
    }

  export interface evaluation_hierarchiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_hierarchies'], meta: { name: 'evaluation_hierarchies' } }
    /**
     * Find zero or one Evaluation_hierarchies that matches the filter.
     * @param {evaluation_hierarchiesFindUniqueArgs} args - Arguments to find a Evaluation_hierarchies
     * @example
     * // Get one Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_hierarchiesFindUniqueArgs>(args: SelectSubset<T, evaluation_hierarchiesFindUniqueArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_hierarchies that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_hierarchiesFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_hierarchies
     * @example
     * // Get one Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_hierarchiesFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_hierarchiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_hierarchies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesFindFirstArgs} args - Arguments to find a Evaluation_hierarchies
     * @example
     * // Get one Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_hierarchiesFindFirstArgs>(args?: SelectSubset<T, evaluation_hierarchiesFindFirstArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_hierarchies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesFindFirstOrThrowArgs} args - Arguments to find a Evaluation_hierarchies
     * @example
     * // Get one Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_hierarchiesFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_hierarchiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_hierarchies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findMany()
     * 
     * // Get first 10 Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_hierarchiesWithIdOnly = await prisma.evaluation_hierarchies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_hierarchiesFindManyArgs>(args?: SelectSubset<T, evaluation_hierarchiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_hierarchies.
     * @param {evaluation_hierarchiesCreateArgs} args - Arguments to create a Evaluation_hierarchies.
     * @example
     * // Create one Evaluation_hierarchies
     * const Evaluation_hierarchies = await prisma.evaluation_hierarchies.create({
     *   data: {
     *     // ... data to create a Evaluation_hierarchies
     *   }
     * })
     * 
     */
    create<T extends evaluation_hierarchiesCreateArgs>(args: SelectSubset<T, evaluation_hierarchiesCreateArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_hierarchies.
     * @param {evaluation_hierarchiesCreateManyArgs} args - Arguments to create many Evaluation_hierarchies.
     * @example
     * // Create many Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_hierarchiesCreateManyArgs>(args?: SelectSubset<T, evaluation_hierarchiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_hierarchies.
     * @param {evaluation_hierarchiesDeleteArgs} args - Arguments to delete one Evaluation_hierarchies.
     * @example
     * // Delete one Evaluation_hierarchies
     * const Evaluation_hierarchies = await prisma.evaluation_hierarchies.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_hierarchies
     *   }
     * })
     * 
     */
    delete<T extends evaluation_hierarchiesDeleteArgs>(args: SelectSubset<T, evaluation_hierarchiesDeleteArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_hierarchies.
     * @param {evaluation_hierarchiesUpdateArgs} args - Arguments to update one Evaluation_hierarchies.
     * @example
     * // Update one Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_hierarchiesUpdateArgs>(args: SelectSubset<T, evaluation_hierarchiesUpdateArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_hierarchies.
     * @param {evaluation_hierarchiesDeleteManyArgs} args - Arguments to filter Evaluation_hierarchies to delete.
     * @example
     * // Delete a few Evaluation_hierarchies
     * const { count } = await prisma.evaluation_hierarchies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_hierarchiesDeleteManyArgs>(args?: SelectSubset<T, evaluation_hierarchiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_hierarchiesUpdateManyArgs>(args: SelectSubset<T, evaluation_hierarchiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_hierarchies.
     * @param {evaluation_hierarchiesUpsertArgs} args - Arguments to update or create a Evaluation_hierarchies.
     * @example
     * // Update or create a Evaluation_hierarchies
     * const evaluation_hierarchies = await prisma.evaluation_hierarchies.upsert({
     *   create: {
     *     // ... data to create a Evaluation_hierarchies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_hierarchies we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_hierarchiesUpsertArgs>(args: SelectSubset<T, evaluation_hierarchiesUpsertArgs<ExtArgs>>): Prisma__evaluation_hierarchiesClient<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesCountArgs} args - Arguments to filter Evaluation_hierarchies to count.
     * @example
     * // Count the number of Evaluation_hierarchies
     * const count = await prisma.evaluation_hierarchies.count({
     *   where: {
     *     // ... the filter for the Evaluation_hierarchies we want to count
     *   }
     * })
    **/
    count<T extends evaluation_hierarchiesCountArgs>(
      args?: Subset<T, evaluation_hierarchiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_hierarchiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_hierarchiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_hierarchiesAggregateArgs>(args: Subset<T, Evaluation_hierarchiesAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_hierarchiesAggregateType<T>>

    /**
     * Group by Evaluation_hierarchies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_hierarchiesGroupByArgs} args - Group by arguments.
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
      T extends evaluation_hierarchiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_hierarchiesGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_hierarchiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_hierarchiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_hierarchiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_hierarchies model
   */
  readonly fields: evaluation_hierarchiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_hierarchies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_hierarchiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs<T extends jobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobsDefaultArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    jobs_evaluation_hierarchies_evaluator_job_idTojobs<T extends jobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobsDefaultArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the evaluation_hierarchies model
   */ 
  interface evaluation_hierarchiesFieldRefs {
    readonly id: FieldRef<"evaluation_hierarchies", 'Int'>
    readonly evaluatee_job_id: FieldRef<"evaluation_hierarchies", 'Int'>
    readonly evaluator_job_id: FieldRef<"evaluation_hierarchies", 'Int'>
    readonly level: FieldRef<"evaluation_hierarchies", 'Int'>
    readonly created_at: FieldRef<"evaluation_hierarchies", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_hierarchies findUnique
   */
  export type evaluation_hierarchiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_hierarchies to fetch.
     */
    where: evaluation_hierarchiesWhereUniqueInput
  }

  /**
   * evaluation_hierarchies findUniqueOrThrow
   */
  export type evaluation_hierarchiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_hierarchies to fetch.
     */
    where: evaluation_hierarchiesWhereUniqueInput
  }

  /**
   * evaluation_hierarchies findFirst
   */
  export type evaluation_hierarchiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_hierarchies to fetch.
     */
    where?: evaluation_hierarchiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_hierarchies to fetch.
     */
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_hierarchies.
     */
    cursor?: evaluation_hierarchiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_hierarchies.
     */
    distinct?: Evaluation_hierarchiesScalarFieldEnum | Evaluation_hierarchiesScalarFieldEnum[]
  }

  /**
   * evaluation_hierarchies findFirstOrThrow
   */
  export type evaluation_hierarchiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_hierarchies to fetch.
     */
    where?: evaluation_hierarchiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_hierarchies to fetch.
     */
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_hierarchies.
     */
    cursor?: evaluation_hierarchiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_hierarchies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_hierarchies.
     */
    distinct?: Evaluation_hierarchiesScalarFieldEnum | Evaluation_hierarchiesScalarFieldEnum[]
  }

  /**
   * evaluation_hierarchies findMany
   */
  export type evaluation_hierarchiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_hierarchies to fetch.
     */
    where?: evaluation_hierarchiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_hierarchies to fetch.
     */
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_hierarchies.
     */
    cursor?: evaluation_hierarchiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_hierarchies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_hierarchies.
     */
    skip?: number
    distinct?: Evaluation_hierarchiesScalarFieldEnum | Evaluation_hierarchiesScalarFieldEnum[]
  }

  /**
   * evaluation_hierarchies create
   */
  export type evaluation_hierarchiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_hierarchies.
     */
    data: XOR<evaluation_hierarchiesCreateInput, evaluation_hierarchiesUncheckedCreateInput>
  }

  /**
   * evaluation_hierarchies createMany
   */
  export type evaluation_hierarchiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_hierarchies.
     */
    data: evaluation_hierarchiesCreateManyInput | evaluation_hierarchiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_hierarchies update
   */
  export type evaluation_hierarchiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_hierarchies.
     */
    data: XOR<evaluation_hierarchiesUpdateInput, evaluation_hierarchiesUncheckedUpdateInput>
    /**
     * Choose, which evaluation_hierarchies to update.
     */
    where: evaluation_hierarchiesWhereUniqueInput
  }

  /**
   * evaluation_hierarchies updateMany
   */
  export type evaluation_hierarchiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_hierarchies.
     */
    data: XOR<evaluation_hierarchiesUpdateManyMutationInput, evaluation_hierarchiesUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_hierarchies to update
     */
    where?: evaluation_hierarchiesWhereInput
  }

  /**
   * evaluation_hierarchies upsert
   */
  export type evaluation_hierarchiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_hierarchies to update in case it exists.
     */
    where: evaluation_hierarchiesWhereUniqueInput
    /**
     * In case the evaluation_hierarchies found by the `where` argument doesn't exist, create a new evaluation_hierarchies with this data.
     */
    create: XOR<evaluation_hierarchiesCreateInput, evaluation_hierarchiesUncheckedCreateInput>
    /**
     * In case the evaluation_hierarchies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_hierarchiesUpdateInput, evaluation_hierarchiesUncheckedUpdateInput>
  }

  /**
   * evaluation_hierarchies delete
   */
  export type evaluation_hierarchiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    /**
     * Filter which evaluation_hierarchies to delete.
     */
    where: evaluation_hierarchiesWhereUniqueInput
  }

  /**
   * evaluation_hierarchies deleteMany
   */
  export type evaluation_hierarchiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_hierarchies to delete
     */
    where?: evaluation_hierarchiesWhereInput
  }

  /**
   * evaluation_hierarchies without action
   */
  export type evaluation_hierarchiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_instances
   */

  export type AggregateEvaluation_instances = {
    _count: Evaluation_instancesCountAggregateOutputType | null
    _avg: Evaluation_instancesAvgAggregateOutputType | null
    _sum: Evaluation_instancesSumAggregateOutputType | null
    _min: Evaluation_instancesMinAggregateOutputType | null
    _max: Evaluation_instancesMaxAggregateOutputType | null
  }

  export type Evaluation_instancesAvgAggregateOutputType = {
    id: number | null
    round_id: number | null
    evaluatee_id: number | null
    evaluated_job_id: number | null
    total_score_average: Decimal | null
  }

  export type Evaluation_instancesSumAggregateOutputType = {
    id: number | null
    round_id: number | null
    evaluatee_id: number | null
    evaluated_job_id: number | null
    total_score_average: Decimal | null
  }

  export type Evaluation_instancesMinAggregateOutputType = {
    id: number | null
    round_id: number | null
    evaluatee_id: number | null
    evaluated_job_id: number | null
    status: $Enums.evaluation_instances_status | null
    total_score_average: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_instancesMaxAggregateOutputType = {
    id: number | null
    round_id: number | null
    evaluatee_id: number | null
    evaluated_job_id: number | null
    status: $Enums.evaluation_instances_status | null
    total_score_average: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Evaluation_instancesCountAggregateOutputType = {
    id: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id: number
    status: number
    total_score_average: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Evaluation_instancesAvgAggregateInputType = {
    id?: true
    round_id?: true
    evaluatee_id?: true
    evaluated_job_id?: true
    total_score_average?: true
  }

  export type Evaluation_instancesSumAggregateInputType = {
    id?: true
    round_id?: true
    evaluatee_id?: true
    evaluated_job_id?: true
    total_score_average?: true
  }

  export type Evaluation_instancesMinAggregateInputType = {
    id?: true
    round_id?: true
    evaluatee_id?: true
    evaluated_job_id?: true
    status?: true
    total_score_average?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_instancesMaxAggregateInputType = {
    id?: true
    round_id?: true
    evaluatee_id?: true
    evaluated_job_id?: true
    status?: true
    total_score_average?: true
    created_at?: true
    updated_at?: true
  }

  export type Evaluation_instancesCountAggregateInputType = {
    id?: true
    round_id?: true
    evaluatee_id?: true
    evaluated_job_id?: true
    status?: true
    total_score_average?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Evaluation_instancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_instances to aggregate.
     */
    where?: evaluation_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_instances to fetch.
     */
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_instances
    **/
    _count?: true | Evaluation_instancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_instancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_instancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_instancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_instancesMaxAggregateInputType
  }

  export type GetEvaluation_instancesAggregateType<T extends Evaluation_instancesAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_instances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_instances[P]>
      : GetScalarType<T[P], AggregateEvaluation_instances[P]>
  }




  export type evaluation_instancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_instancesWhereInput
    orderBy?: evaluation_instancesOrderByWithAggregationInput | evaluation_instancesOrderByWithAggregationInput[]
    by: Evaluation_instancesScalarFieldEnum[] | Evaluation_instancesScalarFieldEnum
    having?: evaluation_instancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_instancesCountAggregateInputType | true
    _avg?: Evaluation_instancesAvgAggregateInputType
    _sum?: Evaluation_instancesSumAggregateInputType
    _min?: Evaluation_instancesMinAggregateInputType
    _max?: Evaluation_instancesMaxAggregateInputType
  }

  export type Evaluation_instancesGroupByOutputType = {
    id: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id: number | null
    status: $Enums.evaluation_instances_status
    total_score_average: Decimal | null
    created_at: Date
    updated_at: Date
    _count: Evaluation_instancesCountAggregateOutputType | null
    _avg: Evaluation_instancesAvgAggregateOutputType | null
    _sum: Evaluation_instancesSumAggregateOutputType | null
    _min: Evaluation_instancesMinAggregateOutputType | null
    _max: Evaluation_instancesMaxAggregateOutputType | null
  }

  type GetEvaluation_instancesGroupByPayload<T extends evaluation_instancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_instancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_instancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_instancesGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_instancesGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_instancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    round_id?: boolean
    evaluatee_id?: boolean
    evaluated_job_id?: boolean
    status?: boolean
    total_score_average?: boolean
    created_at?: boolean
    updated_at?: boolean
    evaluation_criteria_inputs?: boolean | evaluation_instances$evaluation_criteria_inputsArgs<ExtArgs>
    evaluation_evaluator_status?: boolean | evaluation_instances$evaluation_evaluator_statusArgs<ExtArgs>
    evaluation_rounds?: boolean | evaluation_roundsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    jobs?: boolean | evaluation_instances$jobsArgs<ExtArgs>
    _count?: boolean | Evaluation_instancesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_instances"]>


  export type evaluation_instancesSelectScalar = {
    id?: boolean
    round_id?: boolean
    evaluatee_id?: boolean
    evaluated_job_id?: boolean
    status?: boolean
    total_score_average?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type evaluation_instancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_criteria_inputs?: boolean | evaluation_instances$evaluation_criteria_inputsArgs<ExtArgs>
    evaluation_evaluator_status?: boolean | evaluation_instances$evaluation_evaluator_statusArgs<ExtArgs>
    evaluation_rounds?: boolean | evaluation_roundsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    jobs?: boolean | evaluation_instances$jobsArgs<ExtArgs>
    _count?: boolean | Evaluation_instancesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $evaluation_instancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_instances"
    objects: {
      evaluation_criteria_inputs: Prisma.$evaluation_criteria_inputsPayload<ExtArgs>[]
      evaluation_evaluator_status: Prisma.$evaluation_evaluator_statusPayload<ExtArgs>[]
      evaluation_rounds: Prisma.$evaluation_roundsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
      jobs: Prisma.$jobsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      round_id: number
      evaluatee_id: number
      evaluated_job_id: number | null
      status: $Enums.evaluation_instances_status
      total_score_average: Prisma.Decimal | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["evaluation_instances"]>
    composites: {}
  }

  type evaluation_instancesGetPayload<S extends boolean | null | undefined | evaluation_instancesDefaultArgs> = $Result.GetResult<Prisma.$evaluation_instancesPayload, S>

  type evaluation_instancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_instancesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_instancesCountAggregateInputType | true
    }

  export interface evaluation_instancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_instances'], meta: { name: 'evaluation_instances' } }
    /**
     * Find zero or one Evaluation_instances that matches the filter.
     * @param {evaluation_instancesFindUniqueArgs} args - Arguments to find a Evaluation_instances
     * @example
     * // Get one Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_instancesFindUniqueArgs>(args: SelectSubset<T, evaluation_instancesFindUniqueArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_instances that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_instancesFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_instances
     * @example
     * // Get one Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_instancesFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_instancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesFindFirstArgs} args - Arguments to find a Evaluation_instances
     * @example
     * // Get one Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_instancesFindFirstArgs>(args?: SelectSubset<T, evaluation_instancesFindFirstArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_instances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesFindFirstOrThrowArgs} args - Arguments to find a Evaluation_instances
     * @example
     * // Get one Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_instancesFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_instancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findMany()
     * 
     * // Get first 10 Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_instancesWithIdOnly = await prisma.evaluation_instances.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_instancesFindManyArgs>(args?: SelectSubset<T, evaluation_instancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_instances.
     * @param {evaluation_instancesCreateArgs} args - Arguments to create a Evaluation_instances.
     * @example
     * // Create one Evaluation_instances
     * const Evaluation_instances = await prisma.evaluation_instances.create({
     *   data: {
     *     // ... data to create a Evaluation_instances
     *   }
     * })
     * 
     */
    create<T extends evaluation_instancesCreateArgs>(args: SelectSubset<T, evaluation_instancesCreateArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_instances.
     * @param {evaluation_instancesCreateManyArgs} args - Arguments to create many Evaluation_instances.
     * @example
     * // Create many Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_instancesCreateManyArgs>(args?: SelectSubset<T, evaluation_instancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_instances.
     * @param {evaluation_instancesDeleteArgs} args - Arguments to delete one Evaluation_instances.
     * @example
     * // Delete one Evaluation_instances
     * const Evaluation_instances = await prisma.evaluation_instances.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_instances
     *   }
     * })
     * 
     */
    delete<T extends evaluation_instancesDeleteArgs>(args: SelectSubset<T, evaluation_instancesDeleteArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_instances.
     * @param {evaluation_instancesUpdateArgs} args - Arguments to update one Evaluation_instances.
     * @example
     * // Update one Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_instancesUpdateArgs>(args: SelectSubset<T, evaluation_instancesUpdateArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_instances.
     * @param {evaluation_instancesDeleteManyArgs} args - Arguments to filter Evaluation_instances to delete.
     * @example
     * // Delete a few Evaluation_instances
     * const { count } = await prisma.evaluation_instances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_instancesDeleteManyArgs>(args?: SelectSubset<T, evaluation_instancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_instancesUpdateManyArgs>(args: SelectSubset<T, evaluation_instancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_instances.
     * @param {evaluation_instancesUpsertArgs} args - Arguments to update or create a Evaluation_instances.
     * @example
     * // Update or create a Evaluation_instances
     * const evaluation_instances = await prisma.evaluation_instances.upsert({
     *   create: {
     *     // ... data to create a Evaluation_instances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_instances we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_instancesUpsertArgs>(args: SelectSubset<T, evaluation_instancesUpsertArgs<ExtArgs>>): Prisma__evaluation_instancesClient<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesCountArgs} args - Arguments to filter Evaluation_instances to count.
     * @example
     * // Count the number of Evaluation_instances
     * const count = await prisma.evaluation_instances.count({
     *   where: {
     *     // ... the filter for the Evaluation_instances we want to count
     *   }
     * })
    **/
    count<T extends evaluation_instancesCountArgs>(
      args?: Subset<T, evaluation_instancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_instancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_instancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_instancesAggregateArgs>(args: Subset<T, Evaluation_instancesAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_instancesAggregateType<T>>

    /**
     * Group by Evaluation_instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_instancesGroupByArgs} args - Group by arguments.
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
      T extends evaluation_instancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_instancesGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_instancesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_instancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_instancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_instances model
   */
  readonly fields: evaluation_instancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_instances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_instancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_criteria_inputs<T extends evaluation_instances$evaluation_criteria_inputsArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_instances$evaluation_criteria_inputsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_criteria_inputsPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_evaluator_status<T extends evaluation_instances$evaluation_evaluator_statusArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_instances$evaluation_evaluator_statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_rounds<T extends evaluation_roundsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_roundsDefaultArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    jobs<T extends evaluation_instances$jobsArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_instances$jobsArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the evaluation_instances model
   */ 
  interface evaluation_instancesFieldRefs {
    readonly id: FieldRef<"evaluation_instances", 'Int'>
    readonly round_id: FieldRef<"evaluation_instances", 'Int'>
    readonly evaluatee_id: FieldRef<"evaluation_instances", 'Int'>
    readonly evaluated_job_id: FieldRef<"evaluation_instances", 'Int'>
    readonly status: FieldRef<"evaluation_instances", 'evaluation_instances_status'>
    readonly total_score_average: FieldRef<"evaluation_instances", 'Decimal'>
    readonly created_at: FieldRef<"evaluation_instances", 'DateTime'>
    readonly updated_at: FieldRef<"evaluation_instances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_instances findUnique
   */
  export type evaluation_instancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_instances to fetch.
     */
    where: evaluation_instancesWhereUniqueInput
  }

  /**
   * evaluation_instances findUniqueOrThrow
   */
  export type evaluation_instancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_instances to fetch.
     */
    where: evaluation_instancesWhereUniqueInput
  }

  /**
   * evaluation_instances findFirst
   */
  export type evaluation_instancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_instances to fetch.
     */
    where?: evaluation_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_instances to fetch.
     */
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_instances.
     */
    cursor?: evaluation_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_instances.
     */
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * evaluation_instances findFirstOrThrow
   */
  export type evaluation_instancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_instances to fetch.
     */
    where?: evaluation_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_instances to fetch.
     */
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_instances.
     */
    cursor?: evaluation_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_instances.
     */
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * evaluation_instances findMany
   */
  export type evaluation_instancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_instances to fetch.
     */
    where?: evaluation_instancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_instances to fetch.
     */
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_instances.
     */
    cursor?: evaluation_instancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_instances.
     */
    skip?: number
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * evaluation_instances create
   */
  export type evaluation_instancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_instances.
     */
    data: XOR<evaluation_instancesCreateInput, evaluation_instancesUncheckedCreateInput>
  }

  /**
   * evaluation_instances createMany
   */
  export type evaluation_instancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_instances.
     */
    data: evaluation_instancesCreateManyInput | evaluation_instancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_instances update
   */
  export type evaluation_instancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_instances.
     */
    data: XOR<evaluation_instancesUpdateInput, evaluation_instancesUncheckedUpdateInput>
    /**
     * Choose, which evaluation_instances to update.
     */
    where: evaluation_instancesWhereUniqueInput
  }

  /**
   * evaluation_instances updateMany
   */
  export type evaluation_instancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_instances.
     */
    data: XOR<evaluation_instancesUpdateManyMutationInput, evaluation_instancesUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_instances to update
     */
    where?: evaluation_instancesWhereInput
  }

  /**
   * evaluation_instances upsert
   */
  export type evaluation_instancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_instances to update in case it exists.
     */
    where: evaluation_instancesWhereUniqueInput
    /**
     * In case the evaluation_instances found by the `where` argument doesn't exist, create a new evaluation_instances with this data.
     */
    create: XOR<evaluation_instancesCreateInput, evaluation_instancesUncheckedCreateInput>
    /**
     * In case the evaluation_instances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_instancesUpdateInput, evaluation_instancesUncheckedUpdateInput>
  }

  /**
   * evaluation_instances delete
   */
  export type evaluation_instancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    /**
     * Filter which evaluation_instances to delete.
     */
    where: evaluation_instancesWhereUniqueInput
  }

  /**
   * evaluation_instances deleteMany
   */
  export type evaluation_instancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_instances to delete
     */
    where?: evaluation_instancesWhereInput
  }

  /**
   * evaluation_instances.evaluation_criteria_inputs
   */
  export type evaluation_instances$evaluation_criteria_inputsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_criteria_inputs
     */
    select?: evaluation_criteria_inputsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_criteria_inputsInclude<ExtArgs> | null
    where?: evaluation_criteria_inputsWhereInput
    orderBy?: evaluation_criteria_inputsOrderByWithRelationInput | evaluation_criteria_inputsOrderByWithRelationInput[]
    cursor?: evaluation_criteria_inputsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_criteria_inputsScalarFieldEnum | Evaluation_criteria_inputsScalarFieldEnum[]
  }

  /**
   * evaluation_instances.evaluation_evaluator_status
   */
  export type evaluation_instances$evaluation_evaluator_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    where?: evaluation_evaluator_statusWhereInput
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_evaluator_statusScalarFieldEnum | Evaluation_evaluator_statusScalarFieldEnum[]
  }

  /**
   * evaluation_instances.jobs
   */
  export type evaluation_instances$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
  }

  /**
   * evaluation_instances without action
   */
  export type evaluation_instancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
  }


  /**
   * Model evaluation_rounds
   */

  export type AggregateEvaluation_rounds = {
    _count: Evaluation_roundsCountAggregateOutputType | null
    _avg: Evaluation_roundsAvgAggregateOutputType | null
    _sum: Evaluation_roundsSumAggregateOutputType | null
    _min: Evaluation_roundsMinAggregateOutputType | null
    _max: Evaluation_roundsMaxAggregateOutputType | null
  }

  export type Evaluation_roundsAvgAggregateOutputType = {
    id: number | null
    target_score: Decimal | null
  }

  export type Evaluation_roundsSumAggregateOutputType = {
    id: number | null
    target_score: Decimal | null
  }

  export type Evaluation_roundsMinAggregateOutputType = {
    id: number | null
    title: string | null
    target_score: Decimal | null
    status: $Enums.evaluation_rounds_status | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type Evaluation_roundsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    target_score: Decimal | null
    status: $Enums.evaluation_rounds_status | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type Evaluation_roundsCountAggregateOutputType = {
    id: number
    title: number
    target_score: number
    status: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type Evaluation_roundsAvgAggregateInputType = {
    id?: true
    target_score?: true
  }

  export type Evaluation_roundsSumAggregateInputType = {
    id?: true
    target_score?: true
  }

  export type Evaluation_roundsMinAggregateInputType = {
    id?: true
    title?: true
    target_score?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type Evaluation_roundsMaxAggregateInputType = {
    id?: true
    title?: true
    target_score?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type Evaluation_roundsCountAggregateInputType = {
    id?: true
    title?: true
    target_score?: true
    status?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type Evaluation_roundsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_rounds to aggregate.
     */
    where?: evaluation_roundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_rounds to fetch.
     */
    orderBy?: evaluation_roundsOrderByWithRelationInput | evaluation_roundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluation_roundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluation_rounds
    **/
    _count?: true | Evaluation_roundsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Evaluation_roundsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Evaluation_roundsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Evaluation_roundsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Evaluation_roundsMaxAggregateInputType
  }

  export type GetEvaluation_roundsAggregateType<T extends Evaluation_roundsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation_rounds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation_rounds[P]>
      : GetScalarType<T[P], AggregateEvaluation_rounds[P]>
  }




  export type evaluation_roundsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluation_roundsWhereInput
    orderBy?: evaluation_roundsOrderByWithAggregationInput | evaluation_roundsOrderByWithAggregationInput[]
    by: Evaluation_roundsScalarFieldEnum[] | Evaluation_roundsScalarFieldEnum
    having?: evaluation_roundsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Evaluation_roundsCountAggregateInputType | true
    _avg?: Evaluation_roundsAvgAggregateInputType
    _sum?: Evaluation_roundsSumAggregateInputType
    _min?: Evaluation_roundsMinAggregateInputType
    _max?: Evaluation_roundsMaxAggregateInputType
  }

  export type Evaluation_roundsGroupByOutputType = {
    id: number
    title: string
    target_score: Decimal | null
    status: $Enums.evaluation_rounds_status
    start_date: Date | null
    end_date: Date | null
    created_at: Date
    _count: Evaluation_roundsCountAggregateOutputType | null
    _avg: Evaluation_roundsAvgAggregateOutputType | null
    _sum: Evaluation_roundsSumAggregateOutputType | null
    _min: Evaluation_roundsMinAggregateOutputType | null
    _max: Evaluation_roundsMaxAggregateOutputType | null
  }

  type GetEvaluation_roundsGroupByPayload<T extends evaluation_roundsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Evaluation_roundsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Evaluation_roundsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Evaluation_roundsGroupByOutputType[P]>
            : GetScalarType<T[P], Evaluation_roundsGroupByOutputType[P]>
        }
      >
    >


  export type evaluation_roundsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    target_score?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    evaluation_instances?: boolean | evaluation_rounds$evaluation_instancesArgs<ExtArgs>
    _count?: boolean | Evaluation_roundsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation_rounds"]>


  export type evaluation_roundsSelectScalar = {
    id?: boolean
    title?: boolean
    target_score?: boolean
    status?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type evaluation_roundsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_instances?: boolean | evaluation_rounds$evaluation_instancesArgs<ExtArgs>
    _count?: boolean | Evaluation_roundsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $evaluation_roundsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluation_rounds"
    objects: {
      evaluation_instances: Prisma.$evaluation_instancesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      target_score: Prisma.Decimal | null
      status: $Enums.evaluation_rounds_status
      start_date: Date | null
      end_date: Date | null
      created_at: Date
    }, ExtArgs["result"]["evaluation_rounds"]>
    composites: {}
  }

  type evaluation_roundsGetPayload<S extends boolean | null | undefined | evaluation_roundsDefaultArgs> = $Result.GetResult<Prisma.$evaluation_roundsPayload, S>

  type evaluation_roundsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluation_roundsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Evaluation_roundsCountAggregateInputType | true
    }

  export interface evaluation_roundsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluation_rounds'], meta: { name: 'evaluation_rounds' } }
    /**
     * Find zero or one Evaluation_rounds that matches the filter.
     * @param {evaluation_roundsFindUniqueArgs} args - Arguments to find a Evaluation_rounds
     * @example
     * // Get one Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluation_roundsFindUniqueArgs>(args: SelectSubset<T, evaluation_roundsFindUniqueArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluation_rounds that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluation_roundsFindUniqueOrThrowArgs} args - Arguments to find a Evaluation_rounds
     * @example
     * // Get one Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluation_roundsFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluation_roundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluation_rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsFindFirstArgs} args - Arguments to find a Evaluation_rounds
     * @example
     * // Get one Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluation_roundsFindFirstArgs>(args?: SelectSubset<T, evaluation_roundsFindFirstArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluation_rounds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsFindFirstOrThrowArgs} args - Arguments to find a Evaluation_rounds
     * @example
     * // Get one Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluation_roundsFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluation_roundsFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluation_rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findMany()
     * 
     * // Get first 10 Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluation_roundsWithIdOnly = await prisma.evaluation_rounds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends evaluation_roundsFindManyArgs>(args?: SelectSubset<T, evaluation_roundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluation_rounds.
     * @param {evaluation_roundsCreateArgs} args - Arguments to create a Evaluation_rounds.
     * @example
     * // Create one Evaluation_rounds
     * const Evaluation_rounds = await prisma.evaluation_rounds.create({
     *   data: {
     *     // ... data to create a Evaluation_rounds
     *   }
     * })
     * 
     */
    create<T extends evaluation_roundsCreateArgs>(args: SelectSubset<T, evaluation_roundsCreateArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluation_rounds.
     * @param {evaluation_roundsCreateManyArgs} args - Arguments to create many Evaluation_rounds.
     * @example
     * // Create many Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluation_roundsCreateManyArgs>(args?: SelectSubset<T, evaluation_roundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation_rounds.
     * @param {evaluation_roundsDeleteArgs} args - Arguments to delete one Evaluation_rounds.
     * @example
     * // Delete one Evaluation_rounds
     * const Evaluation_rounds = await prisma.evaluation_rounds.delete({
     *   where: {
     *     // ... filter to delete one Evaluation_rounds
     *   }
     * })
     * 
     */
    delete<T extends evaluation_roundsDeleteArgs>(args: SelectSubset<T, evaluation_roundsDeleteArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluation_rounds.
     * @param {evaluation_roundsUpdateArgs} args - Arguments to update one Evaluation_rounds.
     * @example
     * // Update one Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluation_roundsUpdateArgs>(args: SelectSubset<T, evaluation_roundsUpdateArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluation_rounds.
     * @param {evaluation_roundsDeleteManyArgs} args - Arguments to filter Evaluation_rounds to delete.
     * @example
     * // Delete a few Evaluation_rounds
     * const { count } = await prisma.evaluation_rounds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluation_roundsDeleteManyArgs>(args?: SelectSubset<T, evaluation_roundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluation_rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluation_roundsUpdateManyArgs>(args: SelectSubset<T, evaluation_roundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation_rounds.
     * @param {evaluation_roundsUpsertArgs} args - Arguments to update or create a Evaluation_rounds.
     * @example
     * // Update or create a Evaluation_rounds
     * const evaluation_rounds = await prisma.evaluation_rounds.upsert({
     *   create: {
     *     // ... data to create a Evaluation_rounds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation_rounds we want to update
     *   }
     * })
     */
    upsert<T extends evaluation_roundsUpsertArgs>(args: SelectSubset<T, evaluation_roundsUpsertArgs<ExtArgs>>): Prisma__evaluation_roundsClient<$Result.GetResult<Prisma.$evaluation_roundsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluation_rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsCountArgs} args - Arguments to filter Evaluation_rounds to count.
     * @example
     * // Count the number of Evaluation_rounds
     * const count = await prisma.evaluation_rounds.count({
     *   where: {
     *     // ... the filter for the Evaluation_rounds we want to count
     *   }
     * })
    **/
    count<T extends evaluation_roundsCountArgs>(
      args?: Subset<T, evaluation_roundsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Evaluation_roundsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation_rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Evaluation_roundsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Evaluation_roundsAggregateArgs>(args: Subset<T, Evaluation_roundsAggregateArgs>): Prisma.PrismaPromise<GetEvaluation_roundsAggregateType<T>>

    /**
     * Group by Evaluation_rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluation_roundsGroupByArgs} args - Group by arguments.
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
      T extends evaluation_roundsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluation_roundsGroupByArgs['orderBy'] }
        : { orderBy?: evaluation_roundsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluation_roundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluation_roundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluation_rounds model
   */
  readonly fields: evaluation_roundsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluation_rounds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluation_roundsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_instances<T extends evaluation_rounds$evaluation_instancesArgs<ExtArgs> = {}>(args?: Subset<T, evaluation_rounds$evaluation_instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the evaluation_rounds model
   */ 
  interface evaluation_roundsFieldRefs {
    readonly id: FieldRef<"evaluation_rounds", 'Int'>
    readonly title: FieldRef<"evaluation_rounds", 'String'>
    readonly target_score: FieldRef<"evaluation_rounds", 'Decimal'>
    readonly status: FieldRef<"evaluation_rounds", 'evaluation_rounds_status'>
    readonly start_date: FieldRef<"evaluation_rounds", 'DateTime'>
    readonly end_date: FieldRef<"evaluation_rounds", 'DateTime'>
    readonly created_at: FieldRef<"evaluation_rounds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluation_rounds findUnique
   */
  export type evaluation_roundsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_rounds to fetch.
     */
    where: evaluation_roundsWhereUniqueInput
  }

  /**
   * evaluation_rounds findUniqueOrThrow
   */
  export type evaluation_roundsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_rounds to fetch.
     */
    where: evaluation_roundsWhereUniqueInput
  }

  /**
   * evaluation_rounds findFirst
   */
  export type evaluation_roundsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_rounds to fetch.
     */
    where?: evaluation_roundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_rounds to fetch.
     */
    orderBy?: evaluation_roundsOrderByWithRelationInput | evaluation_roundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_rounds.
     */
    cursor?: evaluation_roundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_rounds.
     */
    distinct?: Evaluation_roundsScalarFieldEnum | Evaluation_roundsScalarFieldEnum[]
  }

  /**
   * evaluation_rounds findFirstOrThrow
   */
  export type evaluation_roundsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_rounds to fetch.
     */
    where?: evaluation_roundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_rounds to fetch.
     */
    orderBy?: evaluation_roundsOrderByWithRelationInput | evaluation_roundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluation_rounds.
     */
    cursor?: evaluation_roundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluation_rounds.
     */
    distinct?: Evaluation_roundsScalarFieldEnum | Evaluation_roundsScalarFieldEnum[]
  }

  /**
   * evaluation_rounds findMany
   */
  export type evaluation_roundsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter, which evaluation_rounds to fetch.
     */
    where?: evaluation_roundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluation_rounds to fetch.
     */
    orderBy?: evaluation_roundsOrderByWithRelationInput | evaluation_roundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluation_rounds.
     */
    cursor?: evaluation_roundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluation_rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluation_rounds.
     */
    skip?: number
    distinct?: Evaluation_roundsScalarFieldEnum | Evaluation_roundsScalarFieldEnum[]
  }

  /**
   * evaluation_rounds create
   */
  export type evaluation_roundsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluation_rounds.
     */
    data: XOR<evaluation_roundsCreateInput, evaluation_roundsUncheckedCreateInput>
  }

  /**
   * evaluation_rounds createMany
   */
  export type evaluation_roundsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluation_rounds.
     */
    data: evaluation_roundsCreateManyInput | evaluation_roundsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluation_rounds update
   */
  export type evaluation_roundsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluation_rounds.
     */
    data: XOR<evaluation_roundsUpdateInput, evaluation_roundsUncheckedUpdateInput>
    /**
     * Choose, which evaluation_rounds to update.
     */
    where: evaluation_roundsWhereUniqueInput
  }

  /**
   * evaluation_rounds updateMany
   */
  export type evaluation_roundsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluation_rounds.
     */
    data: XOR<evaluation_roundsUpdateManyMutationInput, evaluation_roundsUncheckedUpdateManyInput>
    /**
     * Filter which evaluation_rounds to update
     */
    where?: evaluation_roundsWhereInput
  }

  /**
   * evaluation_rounds upsert
   */
  export type evaluation_roundsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluation_rounds to update in case it exists.
     */
    where: evaluation_roundsWhereUniqueInput
    /**
     * In case the evaluation_rounds found by the `where` argument doesn't exist, create a new evaluation_rounds with this data.
     */
    create: XOR<evaluation_roundsCreateInput, evaluation_roundsUncheckedCreateInput>
    /**
     * In case the evaluation_rounds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluation_roundsUpdateInput, evaluation_roundsUncheckedUpdateInput>
  }

  /**
   * evaluation_rounds delete
   */
  export type evaluation_roundsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
    /**
     * Filter which evaluation_rounds to delete.
     */
    where: evaluation_roundsWhereUniqueInput
  }

  /**
   * evaluation_rounds deleteMany
   */
  export type evaluation_roundsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluation_rounds to delete
     */
    where?: evaluation_roundsWhereInput
  }

  /**
   * evaluation_rounds.evaluation_instances
   */
  export type evaluation_rounds$evaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    where?: evaluation_instancesWhereInput
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    cursor?: evaluation_instancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * evaluation_rounds without action
   */
  export type evaluation_roundsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_rounds
     */
    select?: evaluation_roundsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_roundsInclude<ExtArgs> | null
  }


  /**
   * Model jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    department_id: number | null
    job_level: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    department_id: number | null
    job_level: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    department_id: number | null
    title: string | null
    job_level: number | null
    description: string | null
    created_at: Date | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    department_id: number | null
    title: string | null
    job_level: number | null
    description: string | null
    created_at: Date | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    department_id: number
    title: number
    job_level: number
    description: number
    created_at: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    department_id?: true
    job_level?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    department_id?: true
    job_level?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    department_id?: true
    title?: true
    job_level?: true
    description?: true
    created_at?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    department_id?: true
    title?: true
    job_level?: true
    description?: true
    created_at?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    department_id?: true
    title?: true
    job_level?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to aggregate.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jobsWhereInput
    orderBy?: jobsOrderByWithAggregationInput | jobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    department_id: number
    title: string
    job_level: number | null
    description: string | null
    created_at: Date
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    department_id?: boolean
    title?: boolean
    job_level?: boolean
    description?: boolean
    created_at?: boolean
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: boolean | jobs$evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs>
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: boolean | jobs$evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs>
    evaluation_instances?: boolean | jobs$evaluation_instancesArgs<ExtArgs>
    departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    user_jobs?: boolean | jobs$user_jobsArgs<ExtArgs>
    users?: boolean | jobs$usersArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>


  export type jobsSelectScalar = {
    id?: boolean
    department_id?: boolean
    title?: boolean
    job_level?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: boolean | jobs$evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs>
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: boolean | jobs$evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs>
    evaluation_instances?: boolean | jobs$evaluation_instancesArgs<ExtArgs>
    departments?: boolean | DepartmentsDefaultArgs<ExtArgs>
    user_jobs?: boolean | jobs$user_jobsArgs<ExtArgs>
    users?: boolean | jobs$usersArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jobs"
    objects: {
      evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs: Prisma.$evaluation_hierarchiesPayload<ExtArgs>[]
      evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs: Prisma.$evaluation_hierarchiesPayload<ExtArgs>[]
      evaluation_instances: Prisma.$evaluation_instancesPayload<ExtArgs>[]
      departments: Prisma.$DepartmentsPayload<ExtArgs>
      user_jobs: Prisma.$user_jobsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      department_id: number
      title: string
      job_level: number | null
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type jobsGetPayload<S extends boolean | null | undefined | jobsDefaultArgs> = $Result.GetResult<Prisma.$jobsPayload, S>

  type jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<jobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jobs'], meta: { name: 'jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {jobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jobsFindUniqueArgs>(args: SelectSubset<T, jobsFindUniqueArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {jobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jobsFindFirstArgs>(args?: SelectSubset<T, jobsFindFirstArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jobsFindManyArgs>(args?: SelectSubset<T, jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jobs.
     * @param {jobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends jobsCreateArgs>(args: SelectSubset<T, jobsCreateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jobs.
     * @param {jobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jobsCreateManyArgs>(args?: SelectSubset<T, jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {jobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends jobsDeleteArgs>(args: SelectSubset<T, jobsDeleteArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jobs.
     * @param {jobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jobsUpdateArgs>(args: SelectSubset<T, jobsUpdateArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {jobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jobsDeleteManyArgs>(args?: SelectSubset<T, jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jobsUpdateManyArgs>(args: SelectSubset<T, jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {jobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends jobsUpsertArgs>(args: SelectSubset<T, jobsUpsertArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends jobsCountArgs>(
      args?: Subset<T, jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jobsGroupByArgs} args - Group by arguments.
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
      T extends jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jobsGroupByArgs['orderBy'] }
        : { orderBy?: jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jobs model
   */
  readonly fields: jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs<T extends jobs$evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs> = {}>(args?: Subset<T, jobs$evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs<T extends jobs$evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs> = {}>(args?: Subset<T, jobs$evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_hierarchiesPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_instances<T extends jobs$evaluation_instancesArgs<ExtArgs> = {}>(args?: Subset<T, jobs$evaluation_instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findMany"> | Null>
    departments<T extends DepartmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentsDefaultArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user_jobs<T extends jobs$user_jobsArgs<ExtArgs> = {}>(args?: Subset<T, jobs$user_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends jobs$usersArgs<ExtArgs> = {}>(args?: Subset<T, jobs$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the jobs model
   */ 
  interface jobsFieldRefs {
    readonly id: FieldRef<"jobs", 'Int'>
    readonly department_id: FieldRef<"jobs", 'Int'>
    readonly title: FieldRef<"jobs", 'String'>
    readonly job_level: FieldRef<"jobs", 'Int'>
    readonly description: FieldRef<"jobs", 'String'>
    readonly created_at: FieldRef<"jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jobs findUnique
   */
  export type jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findUniqueOrThrow
   */
  export type jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs findFirst
   */
  export type jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findFirstOrThrow
   */
  export type jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs findMany
   */
  export type jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter, which jobs to fetch.
     */
    where?: jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jobs to fetch.
     */
    orderBy?: jobsOrderByWithRelationInput | jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jobs.
     */
    cursor?: jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * jobs create
   */
  export type jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a jobs.
     */
    data: XOR<jobsCreateInput, jobsUncheckedCreateInput>
  }

  /**
   * jobs createMany
   */
  export type jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jobs.
     */
    data: jobsCreateManyInput | jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jobs update
   */
  export type jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a jobs.
     */
    data: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
    /**
     * Choose, which jobs to update.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs updateMany
   */
  export type jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jobs.
     */
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyInput>
    /**
     * Filter which jobs to update
     */
    where?: jobsWhereInput
  }

  /**
   * jobs upsert
   */
  export type jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the jobs to update in case it exists.
     */
    where: jobsWhereUniqueInput
    /**
     * In case the jobs found by the `where` argument doesn't exist, create a new jobs with this data.
     */
    create: XOR<jobsCreateInput, jobsUncheckedCreateInput>
    /**
     * In case the jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jobsUpdateInput, jobsUncheckedUpdateInput>
  }

  /**
   * jobs delete
   */
  export type jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    /**
     * Filter which jobs to delete.
     */
    where: jobsWhereUniqueInput
  }

  /**
   * jobs deleteMany
   */
  export type jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jobs to delete
     */
    where?: jobsWhereInput
  }

  /**
   * jobs.evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs
   */
  export type jobs$evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    where?: evaluation_hierarchiesWhereInput
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    cursor?: evaluation_hierarchiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_hierarchiesScalarFieldEnum | Evaluation_hierarchiesScalarFieldEnum[]
  }

  /**
   * jobs.evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs
   */
  export type jobs$evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_hierarchies
     */
    select?: evaluation_hierarchiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_hierarchiesInclude<ExtArgs> | null
    where?: evaluation_hierarchiesWhereInput
    orderBy?: evaluation_hierarchiesOrderByWithRelationInput | evaluation_hierarchiesOrderByWithRelationInput[]
    cursor?: evaluation_hierarchiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_hierarchiesScalarFieldEnum | Evaluation_hierarchiesScalarFieldEnum[]
  }

  /**
   * jobs.evaluation_instances
   */
  export type jobs$evaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    where?: evaluation_instancesWhereInput
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    cursor?: evaluation_instancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * jobs.user_jobs
   */
  export type jobs$user_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    where?: user_jobsWhereInput
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    cursor?: user_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_jobsScalarFieldEnum | User_jobsScalarFieldEnum[]
  }

  /**
   * jobs.users
   */
  export type jobs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * jobs without action
   */
  export type jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsMinAggregateOutputType = {
    setting_key: string | null
    setting_value: string | null
    updated_at: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    setting_key: string | null
    setting_value: string | null
    updated_at: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    setting_key: number
    setting_value: number
    updated_at: number
    _all: number
  }


  export type SettingsMinAggregateInputType = {
    setting_key?: true
    setting_value?: true
    updated_at?: true
  }

  export type SettingsMaxAggregateInputType = {
    setting_key?: true
    setting_value?: true
    updated_at?: true
  }

  export type SettingsCountAggregateInputType = {
    setting_key?: true
    setting_value?: true
    updated_at?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    setting_key: string
    setting_value: string | null
    updated_at: Date
    _count: SettingsCountAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    setting_key?: boolean
    setting_value?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>


  export type settingsSelectScalar = {
    setting_key?: boolean
    setting_value?: boolean
    updated_at?: boolean
  }


  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      setting_key: string
      setting_value: string | null
      updated_at: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `setting_key`
     * const settingsWithSetting_keyOnly = await prisma.settings.findMany({ select: { setting_key: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the settings model
   */ 
  interface settingsFieldRefs {
    readonly setting_key: FieldRef<"settings", 'String'>
    readonly setting_value: FieldRef<"settings", 'String'>
    readonly updated_at: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
  }


  /**
   * Model user_jobs
   */

  export type AggregateUser_jobs = {
    _count: User_jobsCountAggregateOutputType | null
    _avg: User_jobsAvgAggregateOutputType | null
    _sum: User_jobsSumAggregateOutputType | null
    _min: User_jobsMinAggregateOutputType | null
    _max: User_jobsMaxAggregateOutputType | null
  }

  export type User_jobsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type User_jobsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
  }

  export type User_jobsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    created_at: Date | null
  }

  export type User_jobsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    job_id: number | null
    created_at: Date | null
  }

  export type User_jobsCountAggregateOutputType = {
    id: number
    user_id: number
    job_id: number
    created_at: number
    _all: number
  }


  export type User_jobsAvgAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
  }

  export type User_jobsSumAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
  }

  export type User_jobsMinAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    created_at?: true
  }

  export type User_jobsMaxAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    created_at?: true
  }

  export type User_jobsCountAggregateInputType = {
    id?: true
    user_id?: true
    job_id?: true
    created_at?: true
    _all?: true
  }

  export type User_jobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_jobs to aggregate.
     */
    where?: user_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_jobs to fetch.
     */
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_jobs
    **/
    _count?: true | User_jobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_jobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_jobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_jobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_jobsMaxAggregateInputType
  }

  export type GetUser_jobsAggregateType<T extends User_jobsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_jobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_jobs[P]>
      : GetScalarType<T[P], AggregateUser_jobs[P]>
  }




  export type user_jobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_jobsWhereInput
    orderBy?: user_jobsOrderByWithAggregationInput | user_jobsOrderByWithAggregationInput[]
    by: User_jobsScalarFieldEnum[] | User_jobsScalarFieldEnum
    having?: user_jobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_jobsCountAggregateInputType | true
    _avg?: User_jobsAvgAggregateInputType
    _sum?: User_jobsSumAggregateInputType
    _min?: User_jobsMinAggregateInputType
    _max?: User_jobsMaxAggregateInputType
  }

  export type User_jobsGroupByOutputType = {
    id: number
    user_id: number
    job_id: number
    created_at: Date
    _count: User_jobsCountAggregateOutputType | null
    _avg: User_jobsAvgAggregateOutputType | null
    _sum: User_jobsSumAggregateOutputType | null
    _min: User_jobsMinAggregateOutputType | null
    _max: User_jobsMaxAggregateOutputType | null
  }

  type GetUser_jobsGroupByPayload<T extends user_jobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_jobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_jobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_jobsGroupByOutputType[P]>
            : GetScalarType<T[P], User_jobsGroupByOutputType[P]>
        }
      >
    >


  export type user_jobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    job_id?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    jobs?: boolean | jobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_jobs"]>


  export type user_jobsSelectScalar = {
    id?: boolean
    user_id?: boolean
    job_id?: boolean
    created_at?: boolean
  }

  export type user_jobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    jobs?: boolean | jobsDefaultArgs<ExtArgs>
  }

  export type $user_jobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_jobs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      jobs: Prisma.$jobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      job_id: number
      created_at: Date
    }, ExtArgs["result"]["user_jobs"]>
    composites: {}
  }

  type user_jobsGetPayload<S extends boolean | null | undefined | user_jobsDefaultArgs> = $Result.GetResult<Prisma.$user_jobsPayload, S>

  type user_jobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<user_jobsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: User_jobsCountAggregateInputType | true
    }

  export interface user_jobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_jobs'], meta: { name: 'user_jobs' } }
    /**
     * Find zero or one User_jobs that matches the filter.
     * @param {user_jobsFindUniqueArgs} args - Arguments to find a User_jobs
     * @example
     * // Get one User_jobs
     * const user_jobs = await prisma.user_jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_jobsFindUniqueArgs>(args: SelectSubset<T, user_jobsFindUniqueArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User_jobs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {user_jobsFindUniqueOrThrowArgs} args - Arguments to find a User_jobs
     * @example
     * // Get one User_jobs
     * const user_jobs = await prisma.user_jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_jobsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_jobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsFindFirstArgs} args - Arguments to find a User_jobs
     * @example
     * // Get one User_jobs
     * const user_jobs = await prisma.user_jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_jobsFindFirstArgs>(args?: SelectSubset<T, user_jobsFindFirstArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User_jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsFindFirstOrThrowArgs} args - Arguments to find a User_jobs
     * @example
     * // Get one User_jobs
     * const user_jobs = await prisma.user_jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_jobsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_jobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more User_jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_jobs
     * const user_jobs = await prisma.user_jobs.findMany()
     * 
     * // Get first 10 User_jobs
     * const user_jobs = await prisma.user_jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_jobsWithIdOnly = await prisma.user_jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_jobsFindManyArgs>(args?: SelectSubset<T, user_jobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User_jobs.
     * @param {user_jobsCreateArgs} args - Arguments to create a User_jobs.
     * @example
     * // Create one User_jobs
     * const User_jobs = await prisma.user_jobs.create({
     *   data: {
     *     // ... data to create a User_jobs
     *   }
     * })
     * 
     */
    create<T extends user_jobsCreateArgs>(args: SelectSubset<T, user_jobsCreateArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many User_jobs.
     * @param {user_jobsCreateManyArgs} args - Arguments to create many User_jobs.
     * @example
     * // Create many User_jobs
     * const user_jobs = await prisma.user_jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_jobsCreateManyArgs>(args?: SelectSubset<T, user_jobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_jobs.
     * @param {user_jobsDeleteArgs} args - Arguments to delete one User_jobs.
     * @example
     * // Delete one User_jobs
     * const User_jobs = await prisma.user_jobs.delete({
     *   where: {
     *     // ... filter to delete one User_jobs
     *   }
     * })
     * 
     */
    delete<T extends user_jobsDeleteArgs>(args: SelectSubset<T, user_jobsDeleteArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User_jobs.
     * @param {user_jobsUpdateArgs} args - Arguments to update one User_jobs.
     * @example
     * // Update one User_jobs
     * const user_jobs = await prisma.user_jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_jobsUpdateArgs>(args: SelectSubset<T, user_jobsUpdateArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more User_jobs.
     * @param {user_jobsDeleteManyArgs} args - Arguments to filter User_jobs to delete.
     * @example
     * // Delete a few User_jobs
     * const { count } = await prisma.user_jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_jobsDeleteManyArgs>(args?: SelectSubset<T, user_jobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_jobs
     * const user_jobs = await prisma.user_jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_jobsUpdateManyArgs>(args: SelectSubset<T, user_jobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_jobs.
     * @param {user_jobsUpsertArgs} args - Arguments to update or create a User_jobs.
     * @example
     * // Update or create a User_jobs
     * const user_jobs = await prisma.user_jobs.upsert({
     *   create: {
     *     // ... data to create a User_jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_jobs we want to update
     *   }
     * })
     */
    upsert<T extends user_jobsUpsertArgs>(args: SelectSubset<T, user_jobsUpsertArgs<ExtArgs>>): Prisma__user_jobsClient<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of User_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsCountArgs} args - Arguments to filter User_jobs to count.
     * @example
     * // Count the number of User_jobs
     * const count = await prisma.user_jobs.count({
     *   where: {
     *     // ... the filter for the User_jobs we want to count
     *   }
     * })
    **/
    count<T extends user_jobsCountArgs>(
      args?: Subset<T, user_jobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_jobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_jobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_jobsAggregateArgs>(args: Subset<T, User_jobsAggregateArgs>): Prisma.PrismaPromise<GetUser_jobsAggregateType<T>>

    /**
     * Group by User_jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_jobsGroupByArgs} args - Group by arguments.
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
      T extends user_jobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_jobsGroupByArgs['orderBy'] }
        : { orderBy?: user_jobsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_jobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_jobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_jobs model
   */
  readonly fields: user_jobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_jobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    jobs<T extends jobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jobsDefaultArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the user_jobs model
   */ 
  interface user_jobsFieldRefs {
    readonly id: FieldRef<"user_jobs", 'Int'>
    readonly user_id: FieldRef<"user_jobs", 'Int'>
    readonly job_id: FieldRef<"user_jobs", 'Int'>
    readonly created_at: FieldRef<"user_jobs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_jobs findUnique
   */
  export type user_jobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter, which user_jobs to fetch.
     */
    where: user_jobsWhereUniqueInput
  }

  /**
   * user_jobs findUniqueOrThrow
   */
  export type user_jobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter, which user_jobs to fetch.
     */
    where: user_jobsWhereUniqueInput
  }

  /**
   * user_jobs findFirst
   */
  export type user_jobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter, which user_jobs to fetch.
     */
    where?: user_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_jobs to fetch.
     */
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_jobs.
     */
    cursor?: user_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_jobs.
     */
    distinct?: User_jobsScalarFieldEnum | User_jobsScalarFieldEnum[]
  }

  /**
   * user_jobs findFirstOrThrow
   */
  export type user_jobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter, which user_jobs to fetch.
     */
    where?: user_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_jobs to fetch.
     */
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_jobs.
     */
    cursor?: user_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_jobs.
     */
    distinct?: User_jobsScalarFieldEnum | User_jobsScalarFieldEnum[]
  }

  /**
   * user_jobs findMany
   */
  export type user_jobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter, which user_jobs to fetch.
     */
    where?: user_jobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_jobs to fetch.
     */
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_jobs.
     */
    cursor?: user_jobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_jobs.
     */
    skip?: number
    distinct?: User_jobsScalarFieldEnum | User_jobsScalarFieldEnum[]
  }

  /**
   * user_jobs create
   */
  export type user_jobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_jobs.
     */
    data: XOR<user_jobsCreateInput, user_jobsUncheckedCreateInput>
  }

  /**
   * user_jobs createMany
   */
  export type user_jobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_jobs.
     */
    data: user_jobsCreateManyInput | user_jobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_jobs update
   */
  export type user_jobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_jobs.
     */
    data: XOR<user_jobsUpdateInput, user_jobsUncheckedUpdateInput>
    /**
     * Choose, which user_jobs to update.
     */
    where: user_jobsWhereUniqueInput
  }

  /**
   * user_jobs updateMany
   */
  export type user_jobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_jobs.
     */
    data: XOR<user_jobsUpdateManyMutationInput, user_jobsUncheckedUpdateManyInput>
    /**
     * Filter which user_jobs to update
     */
    where?: user_jobsWhereInput
  }

  /**
   * user_jobs upsert
   */
  export type user_jobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_jobs to update in case it exists.
     */
    where: user_jobsWhereUniqueInput
    /**
     * In case the user_jobs found by the `where` argument doesn't exist, create a new user_jobs with this data.
     */
    create: XOR<user_jobsCreateInput, user_jobsUncheckedCreateInput>
    /**
     * In case the user_jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_jobsUpdateInput, user_jobsUncheckedUpdateInput>
  }

  /**
   * user_jobs delete
   */
  export type user_jobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    /**
     * Filter which user_jobs to delete.
     */
    where: user_jobsWhereUniqueInput
  }

  /**
   * user_jobs deleteMany
   */
  export type user_jobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_jobs to delete
     */
    where?: user_jobsWhereInput
  }

  /**
   * user_jobs without action
   */
  export type user_jobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    department_id: number | null
    job_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    department_id: number | null
    job_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    prefix: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    role: $Enums.users_role | null
    department_id: number | null
    job_id: number | null
    profile_image: string | null
    line_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    prefix: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    password: string | null
    role: $Enums.users_role | null
    department_id: number | null
    job_id: number | null
    profile_image: string | null
    line_user_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    prefix: number
    firstname: number
    lastname: number
    username: number
    password: number
    role: number
    department_id: number
    job_id: number
    profile_image: number
    line_user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    department_id?: true
    job_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    department_id?: true
    job_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    prefix?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    role?: true
    department_id?: true
    job_id?: true
    profile_image?: true
    line_user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    prefix?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    role?: true
    department_id?: true
    job_id?: true
    profile_image?: true
    line_user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    prefix?: true
    firstname?: true
    lastname?: true
    username?: true
    password?: true
    role?: true
    department_id?: true
    job_id?: true
    profile_image?: true
    line_user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    prefix: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role: $Enums.users_role
    department_id: number | null
    job_id: number | null
    profile_image: string | null
    line_user_id: string | null
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prefix?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    department_id?: boolean
    job_id?: boolean
    profile_image?: boolean
    line_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    evaluation_evaluator_status?: boolean | users$evaluation_evaluator_statusArgs<ExtArgs>
    evaluation_instances?: boolean | users$evaluation_instancesArgs<ExtArgs>
    user_jobs?: boolean | users$user_jobsArgs<ExtArgs>
    departments?: boolean | users$departmentsArgs<ExtArgs>
    jobs?: boolean | users$jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type usersSelectScalar = {
    id?: boolean
    prefix?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    department_id?: boolean
    job_id?: boolean
    profile_image?: boolean
    line_user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluation_evaluator_status?: boolean | users$evaluation_evaluator_statusArgs<ExtArgs>
    evaluation_instances?: boolean | users$evaluation_instancesArgs<ExtArgs>
    user_jobs?: boolean | users$user_jobsArgs<ExtArgs>
    departments?: boolean | users$departmentsArgs<ExtArgs>
    jobs?: boolean | users$jobsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      evaluation_evaluator_status: Prisma.$evaluation_evaluator_statusPayload<ExtArgs>[]
      evaluation_instances: Prisma.$evaluation_instancesPayload<ExtArgs>[]
      user_jobs: Prisma.$user_jobsPayload<ExtArgs>[]
      departments: Prisma.$DepartmentsPayload<ExtArgs> | null
      jobs: Prisma.$jobsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      prefix: string | null
      firstname: string
      lastname: string
      username: string
      password: string
      role: $Enums.users_role
      department_id: number | null
      job_id: number | null
      profile_image: string | null
      line_user_id: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evaluation_evaluator_status<T extends users$evaluation_evaluator_statusArgs<ExtArgs> = {}>(args?: Subset<T, users$evaluation_evaluator_statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_evaluator_statusPayload<ExtArgs>, T, "findMany"> | Null>
    evaluation_instances<T extends users$evaluation_instancesArgs<ExtArgs> = {}>(args?: Subset<T, users$evaluation_instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluation_instancesPayload<ExtArgs>, T, "findMany"> | Null>
    user_jobs<T extends users$user_jobsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_jobsPayload<ExtArgs>, T, "findMany"> | Null>
    departments<T extends users$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, users$departmentsArgs<ExtArgs>>): Prisma__DepartmentsClient<$Result.GetResult<Prisma.$DepartmentsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    jobs<T extends users$jobsArgs<ExtArgs> = {}>(args?: Subset<T, users$jobsArgs<ExtArgs>>): Prisma__jobsClient<$Result.GetResult<Prisma.$jobsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly prefix: FieldRef<"users", 'String'>
    readonly firstname: FieldRef<"users", 'String'>
    readonly lastname: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'users_role'>
    readonly department_id: FieldRef<"users", 'Int'>
    readonly job_id: FieldRef<"users", 'Int'>
    readonly profile_image: FieldRef<"users", 'String'>
    readonly line_user_id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.evaluation_evaluator_status
   */
  export type users$evaluation_evaluator_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_evaluator_status
     */
    select?: evaluation_evaluator_statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_evaluator_statusInclude<ExtArgs> | null
    where?: evaluation_evaluator_statusWhereInput
    orderBy?: evaluation_evaluator_statusOrderByWithRelationInput | evaluation_evaluator_statusOrderByWithRelationInput[]
    cursor?: evaluation_evaluator_statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_evaluator_statusScalarFieldEnum | Evaluation_evaluator_statusScalarFieldEnum[]
  }

  /**
   * users.evaluation_instances
   */
  export type users$evaluation_instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluation_instances
     */
    select?: evaluation_instancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluation_instancesInclude<ExtArgs> | null
    where?: evaluation_instancesWhereInput
    orderBy?: evaluation_instancesOrderByWithRelationInput | evaluation_instancesOrderByWithRelationInput[]
    cursor?: evaluation_instancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Evaluation_instancesScalarFieldEnum | Evaluation_instancesScalarFieldEnum[]
  }

  /**
   * users.user_jobs
   */
  export type users$user_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_jobs
     */
    select?: user_jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_jobsInclude<ExtArgs> | null
    where?: user_jobsWhereInput
    orderBy?: user_jobsOrderByWithRelationInput | user_jobsOrderByWithRelationInput[]
    cursor?: user_jobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_jobsScalarFieldEnum | User_jobsScalarFieldEnum[]
  }

  /**
   * users.departments
   */
  export type users$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departments
     */
    select?: DepartmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentsInclude<ExtArgs> | null
    where?: DepartmentsWhereInput
  }

  /**
   * users.jobs
   */
  export type users$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jobs
     */
    select?: jobsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jobsInclude<ExtArgs> | null
    where?: jobsWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const Evaluation_criteriaScalarFieldEnum: {
    id: 'id',
    parent_id: 'parent_id',
    title: 'title',
    description: 'description',
    max_score: 'max_score',
    sort_order: 'sort_order',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Evaluation_criteriaScalarFieldEnum = (typeof Evaluation_criteriaScalarFieldEnum)[keyof typeof Evaluation_criteriaScalarFieldEnum]


  export const Evaluation_criteria_inputsScalarFieldEnum: {
    id: 'id',
    evaluation_instance_id: 'evaluation_instance_id',
    criteria_id: 'criteria_id',
    staff_input_text: 'staff_input_text',
    staff_attachment: 'staff_attachment'
  };

  export type Evaluation_criteria_inputsScalarFieldEnum = (typeof Evaluation_criteria_inputsScalarFieldEnum)[keyof typeof Evaluation_criteria_inputsScalarFieldEnum]


  export const Evaluation_evaluator_scoresScalarFieldEnum: {
    id: 'id',
    evaluation_evaluator_status_id: 'evaluation_evaluator_status_id',
    criteria_id: 'criteria_id',
    score: 'score',
    comment: 'comment'
  };

  export type Evaluation_evaluator_scoresScalarFieldEnum = (typeof Evaluation_evaluator_scoresScalarFieldEnum)[keyof typeof Evaluation_evaluator_scoresScalarFieldEnum]


  export const Evaluation_evaluator_statusScalarFieldEnum: {
    id: 'id',
    evaluation_instance_id: 'evaluation_instance_id',
    evaluator_id: 'evaluator_id',
    status: 'status',
    total_score: 'total_score',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Evaluation_evaluator_statusScalarFieldEnum = (typeof Evaluation_evaluator_statusScalarFieldEnum)[keyof typeof Evaluation_evaluator_statusScalarFieldEnum]


  export const Evaluation_hierarchiesScalarFieldEnum: {
    id: 'id',
    evaluatee_job_id: 'evaluatee_job_id',
    evaluator_job_id: 'evaluator_job_id',
    level: 'level',
    created_at: 'created_at'
  };

  export type Evaluation_hierarchiesScalarFieldEnum = (typeof Evaluation_hierarchiesScalarFieldEnum)[keyof typeof Evaluation_hierarchiesScalarFieldEnum]


  export const Evaluation_instancesScalarFieldEnum: {
    id: 'id',
    round_id: 'round_id',
    evaluatee_id: 'evaluatee_id',
    evaluated_job_id: 'evaluated_job_id',
    status: 'status',
    total_score_average: 'total_score_average',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Evaluation_instancesScalarFieldEnum = (typeof Evaluation_instancesScalarFieldEnum)[keyof typeof Evaluation_instancesScalarFieldEnum]


  export const Evaluation_roundsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    target_score: 'target_score',
    status: 'status',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type Evaluation_roundsScalarFieldEnum = (typeof Evaluation_roundsScalarFieldEnum)[keyof typeof Evaluation_roundsScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    department_id: 'department_id',
    title: 'title',
    job_level: 'job_level',
    description: 'description',
    created_at: 'created_at'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    setting_key: 'setting_key',
    setting_value: 'setting_value',
    updated_at: 'updated_at'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const User_jobsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    job_id: 'job_id',
    created_at: 'created_at'
  };

  export type User_jobsScalarFieldEnum = (typeof User_jobsScalarFieldEnum)[keyof typeof User_jobsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    prefix: 'prefix',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    password: 'password',
    role: 'role',
    department_id: 'department_id',
    job_id: 'job_id',
    profile_image: 'profile_image',
    line_user_id: 'line_user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const DepartmentsOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type DepartmentsOrderByRelevanceFieldEnum = (typeof DepartmentsOrderByRelevanceFieldEnum)[keyof typeof DepartmentsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const evaluation_criteriaOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type evaluation_criteriaOrderByRelevanceFieldEnum = (typeof evaluation_criteriaOrderByRelevanceFieldEnum)[keyof typeof evaluation_criteriaOrderByRelevanceFieldEnum]


  export const evaluation_criteria_inputsOrderByRelevanceFieldEnum: {
    staff_input_text: 'staff_input_text',
    staff_attachment: 'staff_attachment'
  };

  export type evaluation_criteria_inputsOrderByRelevanceFieldEnum = (typeof evaluation_criteria_inputsOrderByRelevanceFieldEnum)[keyof typeof evaluation_criteria_inputsOrderByRelevanceFieldEnum]


  export const evaluation_evaluator_scoresOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type evaluation_evaluator_scoresOrderByRelevanceFieldEnum = (typeof evaluation_evaluator_scoresOrderByRelevanceFieldEnum)[keyof typeof evaluation_evaluator_scoresOrderByRelevanceFieldEnum]


  export const evaluation_roundsOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type evaluation_roundsOrderByRelevanceFieldEnum = (typeof evaluation_roundsOrderByRelevanceFieldEnum)[keyof typeof evaluation_roundsOrderByRelevanceFieldEnum]


  export const jobsOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description'
  };

  export type jobsOrderByRelevanceFieldEnum = (typeof jobsOrderByRelevanceFieldEnum)[keyof typeof jobsOrderByRelevanceFieldEnum]


  export const settingsOrderByRelevanceFieldEnum: {
    setting_key: 'setting_key',
    setting_value: 'setting_value'
  };

  export type settingsOrderByRelevanceFieldEnum = (typeof settingsOrderByRelevanceFieldEnum)[keyof typeof settingsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    prefix: 'prefix',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    password: 'password',
    profile_image: 'profile_image',
    line_user_id: 'line_user_id'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'evaluation_evaluator_status_status'
   */
  export type Enumevaluation_evaluator_status_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'evaluation_evaluator_status_status'>
    


  /**
   * Reference to a field of type 'evaluation_instances_status'
   */
  export type Enumevaluation_instances_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'evaluation_instances_status'>
    


  /**
   * Reference to a field of type 'evaluation_rounds_status'
   */
  export type Enumevaluation_rounds_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'evaluation_rounds_status'>
    


  /**
   * Reference to a field of type 'users_role'
   */
  export type Enumusers_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DepartmentsWhereInput = {
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    id?: IntFilter<"Departments"> | number
    name?: StringFilter<"Departments"> | string
    created_at?: DateTimeFilter<"Departments"> | Date | string
    jobs?: JobsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type DepartmentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    jobs?: jobsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: DepartmentsOrderByRelevanceInput
  }

  export type DepartmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartmentsWhereInput | DepartmentsWhereInput[]
    OR?: DepartmentsWhereInput[]
    NOT?: DepartmentsWhereInput | DepartmentsWhereInput[]
    name?: StringFilter<"Departments"> | string
    created_at?: DateTimeFilter<"Departments"> | Date | string
    jobs?: JobsListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type DepartmentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: DepartmentsCountOrderByAggregateInput
    _avg?: DepartmentsAvgOrderByAggregateInput
    _max?: DepartmentsMaxOrderByAggregateInput
    _min?: DepartmentsMinOrderByAggregateInput
    _sum?: DepartmentsSumOrderByAggregateInput
  }

  export type DepartmentsScalarWhereWithAggregatesInput = {
    AND?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    OR?: DepartmentsScalarWhereWithAggregatesInput[]
    NOT?: DepartmentsScalarWhereWithAggregatesInput | DepartmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departments"> | number
    name?: StringWithAggregatesFilter<"Departments"> | string
    created_at?: DateTimeWithAggregatesFilter<"Departments"> | Date | string
  }

  export type evaluation_criteriaWhereInput = {
    AND?: evaluation_criteriaWhereInput | evaluation_criteriaWhereInput[]
    OR?: evaluation_criteriaWhereInput[]
    NOT?: evaluation_criteriaWhereInput | evaluation_criteriaWhereInput[]
    id?: IntFilter<"evaluation_criteria"> | number
    parent_id?: IntNullableFilter<"evaluation_criteria"> | number | null
    title?: StringFilter<"evaluation_criteria"> | string
    description?: StringNullableFilter<"evaluation_criteria"> | string | null
    max_score?: DecimalFilter<"evaluation_criteria"> | Decimal | DecimalJsLike | number | string
    sort_order?: IntNullableFilter<"evaluation_criteria"> | number | null
    created_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
    evaluation_criteria?: XOR<Evaluation_criteriaNullableScalarRelationFilter, evaluation_criteriaWhereInput> | null
    other_evaluation_criteria?: Evaluation_criteriaListRelationFilter
    evaluation_criteria_inputs?: Evaluation_criteria_inputsListRelationFilter
    evaluation_evaluator_scores?: Evaluation_evaluator_scoresListRelationFilter
  }

  export type evaluation_criteriaOrderByWithRelationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    max_score?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    evaluation_criteria?: evaluation_criteriaOrderByWithRelationInput
    other_evaluation_criteria?: evaluation_criteriaOrderByRelationAggregateInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsOrderByRelationAggregateInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresOrderByRelationAggregateInput
    _relevance?: evaluation_criteriaOrderByRelevanceInput
  }

  export type evaluation_criteriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: evaluation_criteriaWhereInput | evaluation_criteriaWhereInput[]
    OR?: evaluation_criteriaWhereInput[]
    NOT?: evaluation_criteriaWhereInput | evaluation_criteriaWhereInput[]
    parent_id?: IntNullableFilter<"evaluation_criteria"> | number | null
    title?: StringFilter<"evaluation_criteria"> | string
    description?: StringNullableFilter<"evaluation_criteria"> | string | null
    max_score?: DecimalFilter<"evaluation_criteria"> | Decimal | DecimalJsLike | number | string
    sort_order?: IntNullableFilter<"evaluation_criteria"> | number | null
    created_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
    evaluation_criteria?: XOR<Evaluation_criteriaNullableScalarRelationFilter, evaluation_criteriaWhereInput> | null
    other_evaluation_criteria?: Evaluation_criteriaListRelationFilter
    evaluation_criteria_inputs?: Evaluation_criteria_inputsListRelationFilter
    evaluation_evaluator_scores?: Evaluation_evaluator_scoresListRelationFilter
  }, "id">

  export type evaluation_criteriaOrderByWithAggregationInput = {
    id?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    max_score?: SortOrder
    sort_order?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: evaluation_criteriaCountOrderByAggregateInput
    _avg?: evaluation_criteriaAvgOrderByAggregateInput
    _max?: evaluation_criteriaMaxOrderByAggregateInput
    _min?: evaluation_criteriaMinOrderByAggregateInput
    _sum?: evaluation_criteriaSumOrderByAggregateInput
  }

  export type evaluation_criteriaScalarWhereWithAggregatesInput = {
    AND?: evaluation_criteriaScalarWhereWithAggregatesInput | evaluation_criteriaScalarWhereWithAggregatesInput[]
    OR?: evaluation_criteriaScalarWhereWithAggregatesInput[]
    NOT?: evaluation_criteriaScalarWhereWithAggregatesInput | evaluation_criteriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_criteria"> | number
    parent_id?: IntNullableWithAggregatesFilter<"evaluation_criteria"> | number | null
    title?: StringWithAggregatesFilter<"evaluation_criteria"> | string
    description?: StringNullableWithAggregatesFilter<"evaluation_criteria"> | string | null
    max_score?: DecimalWithAggregatesFilter<"evaluation_criteria"> | Decimal | DecimalJsLike | number | string
    sort_order?: IntNullableWithAggregatesFilter<"evaluation_criteria"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"evaluation_criteria"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"evaluation_criteria"> | Date | string
  }

  export type evaluation_criteria_inputsWhereInput = {
    AND?: evaluation_criteria_inputsWhereInput | evaluation_criteria_inputsWhereInput[]
    OR?: evaluation_criteria_inputsWhereInput[]
    NOT?: evaluation_criteria_inputsWhereInput | evaluation_criteria_inputsWhereInput[]
    id?: IntFilter<"evaluation_criteria_inputs"> | number
    evaluation_instance_id?: IntFilter<"evaluation_criteria_inputs"> | number
    criteria_id?: IntFilter<"evaluation_criteria_inputs"> | number
    staff_input_text?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
    staff_attachment?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
    evaluation_criteria?: XOR<Evaluation_criteriaScalarRelationFilter, evaluation_criteriaWhereInput>
    evaluation_instances?: XOR<Evaluation_instancesScalarRelationFilter, evaluation_instancesWhereInput>
  }

  export type evaluation_criteria_inputsOrderByWithRelationInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
    staff_input_text?: SortOrderInput | SortOrder
    staff_attachment?: SortOrderInput | SortOrder
    evaluation_criteria?: evaluation_criteriaOrderByWithRelationInput
    evaluation_instances?: evaluation_instancesOrderByWithRelationInput
    _relevance?: evaluation_criteria_inputsOrderByRelevanceInput
  }

  export type evaluation_criteria_inputsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    evaluation_instance_id_criteria_id?: evaluation_criteria_inputsEvaluation_instance_idCriteria_idCompoundUniqueInput
    AND?: evaluation_criteria_inputsWhereInput | evaluation_criteria_inputsWhereInput[]
    OR?: evaluation_criteria_inputsWhereInput[]
    NOT?: evaluation_criteria_inputsWhereInput | evaluation_criteria_inputsWhereInput[]
    evaluation_instance_id?: IntFilter<"evaluation_criteria_inputs"> | number
    criteria_id?: IntFilter<"evaluation_criteria_inputs"> | number
    staff_input_text?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
    staff_attachment?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
    evaluation_criteria?: XOR<Evaluation_criteriaScalarRelationFilter, evaluation_criteriaWhereInput>
    evaluation_instances?: XOR<Evaluation_instancesScalarRelationFilter, evaluation_instancesWhereInput>
  }, "id" | "evaluation_instance_id_criteria_id">

  export type evaluation_criteria_inputsOrderByWithAggregationInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
    staff_input_text?: SortOrderInput | SortOrder
    staff_attachment?: SortOrderInput | SortOrder
    _count?: evaluation_criteria_inputsCountOrderByAggregateInput
    _avg?: evaluation_criteria_inputsAvgOrderByAggregateInput
    _max?: evaluation_criteria_inputsMaxOrderByAggregateInput
    _min?: evaluation_criteria_inputsMinOrderByAggregateInput
    _sum?: evaluation_criteria_inputsSumOrderByAggregateInput
  }

  export type evaluation_criteria_inputsScalarWhereWithAggregatesInput = {
    AND?: evaluation_criteria_inputsScalarWhereWithAggregatesInput | evaluation_criteria_inputsScalarWhereWithAggregatesInput[]
    OR?: evaluation_criteria_inputsScalarWhereWithAggregatesInput[]
    NOT?: evaluation_criteria_inputsScalarWhereWithAggregatesInput | evaluation_criteria_inputsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_criteria_inputs"> | number
    evaluation_instance_id?: IntWithAggregatesFilter<"evaluation_criteria_inputs"> | number
    criteria_id?: IntWithAggregatesFilter<"evaluation_criteria_inputs"> | number
    staff_input_text?: StringNullableWithAggregatesFilter<"evaluation_criteria_inputs"> | string | null
    staff_attachment?: StringNullableWithAggregatesFilter<"evaluation_criteria_inputs"> | string | null
  }

  export type evaluation_evaluator_scoresWhereInput = {
    AND?: evaluation_evaluator_scoresWhereInput | evaluation_evaluator_scoresWhereInput[]
    OR?: evaluation_evaluator_scoresWhereInput[]
    NOT?: evaluation_evaluator_scoresWhereInput | evaluation_evaluator_scoresWhereInput[]
    id?: IntFilter<"evaluation_evaluator_scores"> | number
    evaluation_evaluator_status_id?: IntFilter<"evaluation_evaluator_scores"> | number
    criteria_id?: IntFilter<"evaluation_evaluator_scores"> | number
    score?: DecimalFilter<"evaluation_evaluator_scores"> | Decimal | DecimalJsLike | number | string
    comment?: StringNullableFilter<"evaluation_evaluator_scores"> | string | null
    evaluation_evaluator_status?: XOR<Evaluation_evaluator_statusScalarRelationFilter, evaluation_evaluator_statusWhereInput>
    evaluation_criteria?: XOR<Evaluation_criteriaScalarRelationFilter, evaluation_criteriaWhereInput>
  }

  export type evaluation_evaluator_scoresOrderByWithRelationInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    evaluation_evaluator_status?: evaluation_evaluator_statusOrderByWithRelationInput
    evaluation_criteria?: evaluation_criteriaOrderByWithRelationInput
    _relevance?: evaluation_evaluator_scoresOrderByRelevanceInput
  }

  export type evaluation_evaluator_scoresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    evaluation_evaluator_status_id_criteria_id?: evaluation_evaluator_scoresEvaluation_evaluator_status_idCriteria_idCompoundUniqueInput
    AND?: evaluation_evaluator_scoresWhereInput | evaluation_evaluator_scoresWhereInput[]
    OR?: evaluation_evaluator_scoresWhereInput[]
    NOT?: evaluation_evaluator_scoresWhereInput | evaluation_evaluator_scoresWhereInput[]
    evaluation_evaluator_status_id?: IntFilter<"evaluation_evaluator_scores"> | number
    criteria_id?: IntFilter<"evaluation_evaluator_scores"> | number
    score?: DecimalFilter<"evaluation_evaluator_scores"> | Decimal | DecimalJsLike | number | string
    comment?: StringNullableFilter<"evaluation_evaluator_scores"> | string | null
    evaluation_evaluator_status?: XOR<Evaluation_evaluator_statusScalarRelationFilter, evaluation_evaluator_statusWhereInput>
    evaluation_criteria?: XOR<Evaluation_criteriaScalarRelationFilter, evaluation_criteriaWhereInput>
  }, "id" | "evaluation_evaluator_status_id_criteria_id">

  export type evaluation_evaluator_scoresOrderByWithAggregationInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: evaluation_evaluator_scoresCountOrderByAggregateInput
    _avg?: evaluation_evaluator_scoresAvgOrderByAggregateInput
    _max?: evaluation_evaluator_scoresMaxOrderByAggregateInput
    _min?: evaluation_evaluator_scoresMinOrderByAggregateInput
    _sum?: evaluation_evaluator_scoresSumOrderByAggregateInput
  }

  export type evaluation_evaluator_scoresScalarWhereWithAggregatesInput = {
    AND?: evaluation_evaluator_scoresScalarWhereWithAggregatesInput | evaluation_evaluator_scoresScalarWhereWithAggregatesInput[]
    OR?: evaluation_evaluator_scoresScalarWhereWithAggregatesInput[]
    NOT?: evaluation_evaluator_scoresScalarWhereWithAggregatesInput | evaluation_evaluator_scoresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_evaluator_scores"> | number
    evaluation_evaluator_status_id?: IntWithAggregatesFilter<"evaluation_evaluator_scores"> | number
    criteria_id?: IntWithAggregatesFilter<"evaluation_evaluator_scores"> | number
    score?: DecimalWithAggregatesFilter<"evaluation_evaluator_scores"> | Decimal | DecimalJsLike | number | string
    comment?: StringNullableWithAggregatesFilter<"evaluation_evaluator_scores"> | string | null
  }

  export type evaluation_evaluator_statusWhereInput = {
    AND?: evaluation_evaluator_statusWhereInput | evaluation_evaluator_statusWhereInput[]
    OR?: evaluation_evaluator_statusWhereInput[]
    NOT?: evaluation_evaluator_statusWhereInput | evaluation_evaluator_statusWhereInput[]
    id?: IntFilter<"evaluation_evaluator_status"> | number
    evaluation_instance_id?: IntFilter<"evaluation_evaluator_status"> | number
    evaluator_id?: IntFilter<"evaluation_evaluator_status"> | number
    status?: Enumevaluation_evaluator_status_statusFilter<"evaluation_evaluator_status"> | $Enums.evaluation_evaluator_status_status
    total_score?: DecimalNullableFilter<"evaluation_evaluator_status"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
    evaluation_evaluator_scores?: Evaluation_evaluator_scoresListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    evaluation_instances?: XOR<Evaluation_instancesScalarRelationFilter, evaluation_instancesWhereInput>
  }

  export type evaluation_evaluator_statusOrderByWithRelationInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    status?: SortOrder
    total_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    evaluation_evaluator_scores?: evaluation_evaluator_scoresOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    evaluation_instances?: evaluation_instancesOrderByWithRelationInput
  }

  export type evaluation_evaluator_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    evaluation_instance_id_evaluator_id?: evaluation_evaluator_statusEvaluation_instance_idEvaluator_idCompoundUniqueInput
    AND?: evaluation_evaluator_statusWhereInput | evaluation_evaluator_statusWhereInput[]
    OR?: evaluation_evaluator_statusWhereInput[]
    NOT?: evaluation_evaluator_statusWhereInput | evaluation_evaluator_statusWhereInput[]
    evaluation_instance_id?: IntFilter<"evaluation_evaluator_status"> | number
    evaluator_id?: IntFilter<"evaluation_evaluator_status"> | number
    status?: Enumevaluation_evaluator_status_statusFilter<"evaluation_evaluator_status"> | $Enums.evaluation_evaluator_status_status
    total_score?: DecimalNullableFilter<"evaluation_evaluator_status"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
    evaluation_evaluator_scores?: Evaluation_evaluator_scoresListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    evaluation_instances?: XOR<Evaluation_instancesScalarRelationFilter, evaluation_instancesWhereInput>
  }, "id" | "evaluation_instance_id_evaluator_id">

  export type evaluation_evaluator_statusOrderByWithAggregationInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    status?: SortOrder
    total_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: evaluation_evaluator_statusCountOrderByAggregateInput
    _avg?: evaluation_evaluator_statusAvgOrderByAggregateInput
    _max?: evaluation_evaluator_statusMaxOrderByAggregateInput
    _min?: evaluation_evaluator_statusMinOrderByAggregateInput
    _sum?: evaluation_evaluator_statusSumOrderByAggregateInput
  }

  export type evaluation_evaluator_statusScalarWhereWithAggregatesInput = {
    AND?: evaluation_evaluator_statusScalarWhereWithAggregatesInput | evaluation_evaluator_statusScalarWhereWithAggregatesInput[]
    OR?: evaluation_evaluator_statusScalarWhereWithAggregatesInput[]
    NOT?: evaluation_evaluator_statusScalarWhereWithAggregatesInput | evaluation_evaluator_statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_evaluator_status"> | number
    evaluation_instance_id?: IntWithAggregatesFilter<"evaluation_evaluator_status"> | number
    evaluator_id?: IntWithAggregatesFilter<"evaluation_evaluator_status"> | number
    status?: Enumevaluation_evaluator_status_statusWithAggregatesFilter<"evaluation_evaluator_status"> | $Enums.evaluation_evaluator_status_status
    total_score?: DecimalNullableWithAggregatesFilter<"evaluation_evaluator_status"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"evaluation_evaluator_status"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"evaluation_evaluator_status"> | Date | string
  }

  export type evaluation_hierarchiesWhereInput = {
    AND?: evaluation_hierarchiesWhereInput | evaluation_hierarchiesWhereInput[]
    OR?: evaluation_hierarchiesWhereInput[]
    NOT?: evaluation_hierarchiesWhereInput | evaluation_hierarchiesWhereInput[]
    id?: IntFilter<"evaluation_hierarchies"> | number
    evaluatee_job_id?: IntFilter<"evaluation_hierarchies"> | number
    evaluator_job_id?: IntFilter<"evaluation_hierarchies"> | number
    level?: IntNullableFilter<"evaluation_hierarchies"> | number | null
    created_at?: DateTimeFilter<"evaluation_hierarchies"> | Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
  }

  export type evaluation_hierarchiesOrderByWithRelationInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrderInput | SortOrder
    created_at?: SortOrder
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: jobsOrderByWithRelationInput
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: jobsOrderByWithRelationInput
  }

  export type evaluation_hierarchiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    evaluatee_job_id_evaluator_job_id?: evaluation_hierarchiesEvaluatee_job_idEvaluator_job_idCompoundUniqueInput
    AND?: evaluation_hierarchiesWhereInput | evaluation_hierarchiesWhereInput[]
    OR?: evaluation_hierarchiesWhereInput[]
    NOT?: evaluation_hierarchiesWhereInput | evaluation_hierarchiesWhereInput[]
    evaluatee_job_id?: IntFilter<"evaluation_hierarchies"> | number
    evaluator_job_id?: IntFilter<"evaluation_hierarchies"> | number
    level?: IntNullableFilter<"evaluation_hierarchies"> | number | null
    created_at?: DateTimeFilter<"evaluation_hierarchies"> | Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
  }, "id" | "evaluatee_job_id_evaluator_job_id">

  export type evaluation_hierarchiesOrderByWithAggregationInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: evaluation_hierarchiesCountOrderByAggregateInput
    _avg?: evaluation_hierarchiesAvgOrderByAggregateInput
    _max?: evaluation_hierarchiesMaxOrderByAggregateInput
    _min?: evaluation_hierarchiesMinOrderByAggregateInput
    _sum?: evaluation_hierarchiesSumOrderByAggregateInput
  }

  export type evaluation_hierarchiesScalarWhereWithAggregatesInput = {
    AND?: evaluation_hierarchiesScalarWhereWithAggregatesInput | evaluation_hierarchiesScalarWhereWithAggregatesInput[]
    OR?: evaluation_hierarchiesScalarWhereWithAggregatesInput[]
    NOT?: evaluation_hierarchiesScalarWhereWithAggregatesInput | evaluation_hierarchiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_hierarchies"> | number
    evaluatee_job_id?: IntWithAggregatesFilter<"evaluation_hierarchies"> | number
    evaluator_job_id?: IntWithAggregatesFilter<"evaluation_hierarchies"> | number
    level?: IntNullableWithAggregatesFilter<"evaluation_hierarchies"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"evaluation_hierarchies"> | Date | string
  }

  export type evaluation_instancesWhereInput = {
    AND?: evaluation_instancesWhereInput | evaluation_instancesWhereInput[]
    OR?: evaluation_instancesWhereInput[]
    NOT?: evaluation_instancesWhereInput | evaluation_instancesWhereInput[]
    id?: IntFilter<"evaluation_instances"> | number
    round_id?: IntFilter<"evaluation_instances"> | number
    evaluatee_id?: IntFilter<"evaluation_instances"> | number
    evaluated_job_id?: IntNullableFilter<"evaluation_instances"> | number | null
    status?: Enumevaluation_instances_statusFilter<"evaluation_instances"> | $Enums.evaluation_instances_status
    total_score_average?: DecimalNullableFilter<"evaluation_instances"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_instances"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_instances"> | Date | string
    evaluation_criteria_inputs?: Evaluation_criteria_inputsListRelationFilter
    evaluation_evaluator_status?: Evaluation_evaluator_statusListRelationFilter
    evaluation_rounds?: XOR<Evaluation_roundsScalarRelationFilter, evaluation_roundsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jobs?: XOR<JobsNullableScalarRelationFilter, jobsWhereInput> | null
  }

  export type evaluation_instancesOrderByWithRelationInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrderInput | SortOrder
    status?: SortOrder
    total_score_average?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    evaluation_criteria_inputs?: evaluation_criteria_inputsOrderByRelationAggregateInput
    evaluation_evaluator_status?: evaluation_evaluator_statusOrderByRelationAggregateInput
    evaluation_rounds?: evaluation_roundsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    jobs?: jobsOrderByWithRelationInput
  }

  export type evaluation_instancesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    round_id_evaluatee_id_evaluated_job_id?: evaluation_instancesRound_idEvaluatee_idEvaluated_job_idCompoundUniqueInput
    AND?: evaluation_instancesWhereInput | evaluation_instancesWhereInput[]
    OR?: evaluation_instancesWhereInput[]
    NOT?: evaluation_instancesWhereInput | evaluation_instancesWhereInput[]
    round_id?: IntFilter<"evaluation_instances"> | number
    evaluatee_id?: IntFilter<"evaluation_instances"> | number
    evaluated_job_id?: IntNullableFilter<"evaluation_instances"> | number | null
    status?: Enumevaluation_instances_statusFilter<"evaluation_instances"> | $Enums.evaluation_instances_status
    total_score_average?: DecimalNullableFilter<"evaluation_instances"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_instances"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_instances"> | Date | string
    evaluation_criteria_inputs?: Evaluation_criteria_inputsListRelationFilter
    evaluation_evaluator_status?: Evaluation_evaluator_statusListRelationFilter
    evaluation_rounds?: XOR<Evaluation_roundsScalarRelationFilter, evaluation_roundsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jobs?: XOR<JobsNullableScalarRelationFilter, jobsWhereInput> | null
  }, "id" | "round_id_evaluatee_id_evaluated_job_id">

  export type evaluation_instancesOrderByWithAggregationInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrderInput | SortOrder
    status?: SortOrder
    total_score_average?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: evaluation_instancesCountOrderByAggregateInput
    _avg?: evaluation_instancesAvgOrderByAggregateInput
    _max?: evaluation_instancesMaxOrderByAggregateInput
    _min?: evaluation_instancesMinOrderByAggregateInput
    _sum?: evaluation_instancesSumOrderByAggregateInput
  }

  export type evaluation_instancesScalarWhereWithAggregatesInput = {
    AND?: evaluation_instancesScalarWhereWithAggregatesInput | evaluation_instancesScalarWhereWithAggregatesInput[]
    OR?: evaluation_instancesScalarWhereWithAggregatesInput[]
    NOT?: evaluation_instancesScalarWhereWithAggregatesInput | evaluation_instancesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_instances"> | number
    round_id?: IntWithAggregatesFilter<"evaluation_instances"> | number
    evaluatee_id?: IntWithAggregatesFilter<"evaluation_instances"> | number
    evaluated_job_id?: IntNullableWithAggregatesFilter<"evaluation_instances"> | number | null
    status?: Enumevaluation_instances_statusWithAggregatesFilter<"evaluation_instances"> | $Enums.evaluation_instances_status
    total_score_average?: DecimalNullableWithAggregatesFilter<"evaluation_instances"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeWithAggregatesFilter<"evaluation_instances"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"evaluation_instances"> | Date | string
  }

  export type evaluation_roundsWhereInput = {
    AND?: evaluation_roundsWhereInput | evaluation_roundsWhereInput[]
    OR?: evaluation_roundsWhereInput[]
    NOT?: evaluation_roundsWhereInput | evaluation_roundsWhereInput[]
    id?: IntFilter<"evaluation_rounds"> | number
    title?: StringFilter<"evaluation_rounds"> | string
    target_score?: DecimalNullableFilter<"evaluation_rounds"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFilter<"evaluation_rounds"> | $Enums.evaluation_rounds_status
    start_date?: DateTimeNullableFilter<"evaluation_rounds"> | Date | string | null
    end_date?: DateTimeNullableFilter<"evaluation_rounds"> | Date | string | null
    created_at?: DateTimeFilter<"evaluation_rounds"> | Date | string
    evaluation_instances?: Evaluation_instancesListRelationFilter
  }

  export type evaluation_roundsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    target_score?: SortOrderInput | SortOrder
    status?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    evaluation_instances?: evaluation_instancesOrderByRelationAggregateInput
    _relevance?: evaluation_roundsOrderByRelevanceInput
  }

  export type evaluation_roundsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: evaluation_roundsWhereInput | evaluation_roundsWhereInput[]
    OR?: evaluation_roundsWhereInput[]
    NOT?: evaluation_roundsWhereInput | evaluation_roundsWhereInput[]
    title?: StringFilter<"evaluation_rounds"> | string
    target_score?: DecimalNullableFilter<"evaluation_rounds"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFilter<"evaluation_rounds"> | $Enums.evaluation_rounds_status
    start_date?: DateTimeNullableFilter<"evaluation_rounds"> | Date | string | null
    end_date?: DateTimeNullableFilter<"evaluation_rounds"> | Date | string | null
    created_at?: DateTimeFilter<"evaluation_rounds"> | Date | string
    evaluation_instances?: Evaluation_instancesListRelationFilter
  }, "id">

  export type evaluation_roundsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    target_score?: SortOrderInput | SortOrder
    status?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: evaluation_roundsCountOrderByAggregateInput
    _avg?: evaluation_roundsAvgOrderByAggregateInput
    _max?: evaluation_roundsMaxOrderByAggregateInput
    _min?: evaluation_roundsMinOrderByAggregateInput
    _sum?: evaluation_roundsSumOrderByAggregateInput
  }

  export type evaluation_roundsScalarWhereWithAggregatesInput = {
    AND?: evaluation_roundsScalarWhereWithAggregatesInput | evaluation_roundsScalarWhereWithAggregatesInput[]
    OR?: evaluation_roundsScalarWhereWithAggregatesInput[]
    NOT?: evaluation_roundsScalarWhereWithAggregatesInput | evaluation_roundsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"evaluation_rounds"> | number
    title?: StringWithAggregatesFilter<"evaluation_rounds"> | string
    target_score?: DecimalNullableWithAggregatesFilter<"evaluation_rounds"> | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusWithAggregatesFilter<"evaluation_rounds"> | $Enums.evaluation_rounds_status
    start_date?: DateTimeNullableWithAggregatesFilter<"evaluation_rounds"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"evaluation_rounds"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"evaluation_rounds"> | Date | string
  }

  export type jobsWhereInput = {
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    id?: IntFilter<"jobs"> | number
    department_id?: IntFilter<"jobs"> | number
    title?: StringFilter<"jobs"> | string
    job_level?: IntNullableFilter<"jobs"> | number | null
    description?: StringNullableFilter<"jobs"> | string | null
    created_at?: DateTimeFilter<"jobs"> | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: Evaluation_hierarchiesListRelationFilter
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: Evaluation_hierarchiesListRelationFilter
    evaluation_instances?: Evaluation_instancesListRelationFilter
    departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    user_jobs?: User_jobsListRelationFilter
    users?: UsersListRelationFilter
  }

  export type jobsOrderByWithRelationInput = {
    id?: SortOrder
    department_id?: SortOrder
    title?: SortOrder
    job_level?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesOrderByRelationAggregateInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesOrderByRelationAggregateInput
    evaluation_instances?: evaluation_instancesOrderByRelationAggregateInput
    departments?: DepartmentsOrderByWithRelationInput
    user_jobs?: user_jobsOrderByRelationAggregateInput
    users?: usersOrderByRelationAggregateInput
    _relevance?: jobsOrderByRelevanceInput
  }

  export type jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jobsWhereInput | jobsWhereInput[]
    OR?: jobsWhereInput[]
    NOT?: jobsWhereInput | jobsWhereInput[]
    department_id?: IntFilter<"jobs"> | number
    title?: StringFilter<"jobs"> | string
    job_level?: IntNullableFilter<"jobs"> | number | null
    description?: StringNullableFilter<"jobs"> | string | null
    created_at?: DateTimeFilter<"jobs"> | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: Evaluation_hierarchiesListRelationFilter
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: Evaluation_hierarchiesListRelationFilter
    evaluation_instances?: Evaluation_instancesListRelationFilter
    departments?: XOR<DepartmentsScalarRelationFilter, DepartmentsWhereInput>
    user_jobs?: User_jobsListRelationFilter
    users?: UsersListRelationFilter
  }, "id">

  export type jobsOrderByWithAggregationInput = {
    id?: SortOrder
    department_id?: SortOrder
    title?: SortOrder
    job_level?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: jobsCountOrderByAggregateInput
    _avg?: jobsAvgOrderByAggregateInput
    _max?: jobsMaxOrderByAggregateInput
    _min?: jobsMinOrderByAggregateInput
    _sum?: jobsSumOrderByAggregateInput
  }

  export type jobsScalarWhereWithAggregatesInput = {
    AND?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    OR?: jobsScalarWhereWithAggregatesInput[]
    NOT?: jobsScalarWhereWithAggregatesInput | jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jobs"> | number
    department_id?: IntWithAggregatesFilter<"jobs"> | number
    title?: StringWithAggregatesFilter<"jobs"> | string
    job_level?: IntNullableWithAggregatesFilter<"jobs"> | number | null
    description?: StringNullableWithAggregatesFilter<"jobs"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"jobs"> | Date | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    setting_key?: StringFilter<"settings"> | string
    setting_value?: StringNullableFilter<"settings"> | string | null
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }

  export type settingsOrderByWithRelationInput = {
    setting_key?: SortOrder
    setting_value?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _relevance?: settingsOrderByRelevanceInput
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    setting_key?: string
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    setting_value?: StringNullableFilter<"settings"> | string | null
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }, "setting_key">

  export type settingsOrderByWithAggregationInput = {
    setting_key?: SortOrder
    setting_value?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: settingsCountOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    setting_key?: StringWithAggregatesFilter<"settings"> | string
    setting_value?: StringNullableWithAggregatesFilter<"settings"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"settings"> | Date | string
  }

  export type user_jobsWhereInput = {
    AND?: user_jobsWhereInput | user_jobsWhereInput[]
    OR?: user_jobsWhereInput[]
    NOT?: user_jobsWhereInput | user_jobsWhereInput[]
    id?: IntFilter<"user_jobs"> | number
    user_id?: IntFilter<"user_jobs"> | number
    job_id?: IntFilter<"user_jobs"> | number
    created_at?: DateTimeFilter<"user_jobs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
  }

  export type user_jobsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
    users?: usersOrderByWithRelationInput
    jobs?: jobsOrderByWithRelationInput
  }

  export type user_jobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_job_id?: user_jobsUser_idJob_idCompoundUniqueInput
    AND?: user_jobsWhereInput | user_jobsWhereInput[]
    OR?: user_jobsWhereInput[]
    NOT?: user_jobsWhereInput | user_jobsWhereInput[]
    user_id?: IntFilter<"user_jobs"> | number
    job_id?: IntFilter<"user_jobs"> | number
    created_at?: DateTimeFilter<"user_jobs"> | Date | string
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jobs?: XOR<JobsScalarRelationFilter, jobsWhereInput>
  }, "id" | "user_id_job_id">

  export type user_jobsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
    _count?: user_jobsCountOrderByAggregateInput
    _avg?: user_jobsAvgOrderByAggregateInput
    _max?: user_jobsMaxOrderByAggregateInput
    _min?: user_jobsMinOrderByAggregateInput
    _sum?: user_jobsSumOrderByAggregateInput
  }

  export type user_jobsScalarWhereWithAggregatesInput = {
    AND?: user_jobsScalarWhereWithAggregatesInput | user_jobsScalarWhereWithAggregatesInput[]
    OR?: user_jobsScalarWhereWithAggregatesInput[]
    NOT?: user_jobsScalarWhereWithAggregatesInput | user_jobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_jobs"> | number
    user_id?: IntWithAggregatesFilter<"user_jobs"> | number
    job_id?: IntWithAggregatesFilter<"user_jobs"> | number
    created_at?: DateTimeWithAggregatesFilter<"user_jobs"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    prefix?: StringNullableFilter<"users"> | string | null
    firstname?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    department_id?: IntNullableFilter<"users"> | number | null
    job_id?: IntNullableFilter<"users"> | number | null
    profile_image?: StringNullableFilter<"users"> | string | null
    line_user_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    evaluation_evaluator_status?: Evaluation_evaluator_statusListRelationFilter
    evaluation_instances?: Evaluation_instancesListRelationFilter
    user_jobs?: User_jobsListRelationFilter
    departments?: XOR<DepartmentsNullableScalarRelationFilter, DepartmentsWhereInput> | null
    jobs?: XOR<JobsNullableScalarRelationFilter, jobsWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department_id?: SortOrderInput | SortOrder
    job_id?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    line_user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    evaluation_evaluator_status?: evaluation_evaluator_statusOrderByRelationAggregateInput
    evaluation_instances?: evaluation_instancesOrderByRelationAggregateInput
    user_jobs?: user_jobsOrderByRelationAggregateInput
    departments?: DepartmentsOrderByWithRelationInput
    jobs?: jobsOrderByWithRelationInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    prefix?: StringNullableFilter<"users"> | string | null
    firstname?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    department_id?: IntNullableFilter<"users"> | number | null
    job_id?: IntNullableFilter<"users"> | number | null
    profile_image?: StringNullableFilter<"users"> | string | null
    line_user_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    evaluation_evaluator_status?: Evaluation_evaluator_statusListRelationFilter
    evaluation_instances?: Evaluation_instancesListRelationFilter
    user_jobs?: User_jobsListRelationFilter
    departments?: XOR<DepartmentsNullableScalarRelationFilter, DepartmentsWhereInput> | null
    jobs?: XOR<JobsNullableScalarRelationFilter, jobsWhereInput> | null
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    prefix?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department_id?: SortOrderInput | SortOrder
    job_id?: SortOrderInput | SortOrder
    profile_image?: SortOrderInput | SortOrder
    line_user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    prefix?: StringNullableWithAggregatesFilter<"users"> | string | null
    firstname?: StringWithAggregatesFilter<"users"> | string
    lastname?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumusers_roleWithAggregatesFilter<"users"> | $Enums.users_role
    department_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    job_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    profile_image?: StringNullableWithAggregatesFilter<"users"> | string | null
    line_user_id?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type DepartmentsCreateInput = {
    name: string
    created_at?: Date | string
    jobs?: jobsCreateNestedManyWithoutDepartmentsInput
    users?: usersCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    jobs?: jobsUncheckedCreateNestedManyWithoutDepartmentsInput
    users?: usersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: jobsUpdateManyWithoutDepartmentsNestedInput
    users?: usersUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: jobsUncheckedUpdateManyWithoutDepartmentsNestedInput
    users?: usersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
  }

  export type DepartmentsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteriaCreateInput = {
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria?: evaluation_criteriaCreateNestedOneWithoutOther_evaluation_criteriaInput
    other_evaluation_criteria?: evaluation_criteriaCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUncheckedCreateInput = {
    id?: number
    parent_id?: number | null
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria?: evaluation_criteriaUpdateOneWithoutOther_evaluation_criteriaNestedInput
    other_evaluation_criteria?: evaluation_criteriaUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaCreateManyInput = {
    id?: number
    parent_id?: number | null
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_criteriaUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteria_inputsCreateInput = {
    staff_input_text?: string | null
    staff_attachment?: string | null
    evaluation_criteria: evaluation_criteriaCreateNestedOneWithoutEvaluation_criteria_inputsInput
    evaluation_instances: evaluation_instancesCreateNestedOneWithoutEvaluation_criteria_inputsInput
  }

  export type evaluation_criteria_inputsUncheckedCreateInput = {
    id?: number
    evaluation_instance_id: number
    criteria_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_criteria_inputsUpdateInput = {
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_criteria?: evaluation_criteriaUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput
    evaluation_instances?: evaluation_instancesUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput
  }

  export type evaluation_criteria_inputsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_criteria_inputsCreateManyInput = {
    id?: number
    evaluation_instance_id: number
    criteria_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_criteria_inputsUpdateManyMutationInput = {
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_criteria_inputsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresCreateInput = {
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
    evaluation_evaluator_status: evaluation_evaluator_statusCreateNestedOneWithoutEvaluation_evaluator_scoresInput
    evaluation_criteria: evaluation_criteriaCreateNestedOneWithoutEvaluation_evaluator_scoresInput
  }

  export type evaluation_evaluator_scoresUncheckedCreateInput = {
    id?: number
    evaluation_evaluator_status_id: number
    criteria_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_evaluator_scoresUpdateInput = {
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput
    evaluation_criteria?: evaluation_criteriaUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput
  }

  export type evaluation_evaluator_scoresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_evaluator_status_id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresCreateManyInput = {
    id?: number
    evaluation_evaluator_status_id: number
    criteria_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_evaluator_scoresUpdateManyMutationInput = {
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_evaluator_status_id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_statusCreateInput = {
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_evaluator_statusInput
    users: usersCreateNestedOneWithoutEvaluation_evaluator_statusInput
    evaluation_instances: evaluation_instancesCreateNestedOneWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusUncheckedCreateInput = {
    id?: number
    evaluation_instance_id: number
    evaluator_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusUpdateInput = {
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_evaluator_statusNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
    evaluation_instances?: evaluation_instancesUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    evaluator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusCreateManyInput = {
    id?: number
    evaluation_instance_id: number
    evaluator_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_evaluator_statusUpdateManyMutationInput = {
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_evaluator_statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    evaluator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesCreateInput = {
    level?: number | null
    created_at?: Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs: jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput
    jobs_evaluation_hierarchies_evaluator_job_idTojobs: jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput
  }

  export type evaluation_hierarchiesUncheckedCreateInput = {
    id?: number
    evaluatee_job_id: number
    evaluator_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_hierarchiesUpdateInput = {
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
  }

  export type evaluation_hierarchiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_job_id?: IntFieldUpdateOperationsInput | number
    evaluator_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesCreateManyInput = {
    id?: number
    evaluatee_job_id: number
    evaluator_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_hierarchiesUpdateManyMutationInput = {
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_job_id?: IntFieldUpdateOperationsInput | number
    evaluator_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_instancesCreateInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_rounds: evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput
    users: usersCreateNestedOneWithoutEvaluation_instancesInput
    jobs?: jobsCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUpdateInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_rounds?: evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    jobs?: jobsUpdateOneWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesCreateManyInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_instancesUpdateManyMutationInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_instancesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_roundsCreateInput = {
    title: string
    target_score?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.evaluation_rounds_status
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutEvaluation_roundsInput
  }

  export type evaluation_roundsUncheckedCreateInput = {
    id?: number
    title: string
    target_score?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.evaluation_rounds_status
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutEvaluation_roundsInput
  }

  export type evaluation_roundsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_instances?: evaluation_instancesUpdateManyWithoutEvaluation_roundsNestedInput
  }

  export type evaluation_roundsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutEvaluation_roundsNestedInput
  }

  export type evaluation_roundsCreateManyInput = {
    id?: number
    title: string
    target_score?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.evaluation_rounds_status
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type evaluation_roundsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_roundsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsCreateInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type jobsCreateManyInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
  }

  export type jobsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateInput = {
    setting_key: string
    setting_value?: string | null
    updated_at?: Date | string
  }

  export type settingsUncheckedCreateInput = {
    setting_key: string
    setting_value?: string | null
    updated_at?: Date | string
  }

  export type settingsUpdateInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateManyInput = {
    setting_key: string
    setting_value?: string | null
    updated_at?: Date | string
  }

  export type settingsUpdateManyMutationInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateManyInput = {
    setting_key?: StringFieldUpdateOperationsInput | string
    setting_value?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsCreateInput = {
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUser_jobsInput
    jobs: jobsCreateNestedOneWithoutUser_jobsInput
  }

  export type user_jobsUncheckedCreateInput = {
    id?: number
    user_id: number
    job_id: number
    created_at?: Date | string
  }

  export type user_jobsUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_jobsNestedInput
    jobs?: jobsUpdateOneRequiredWithoutUser_jobsNestedInput
  }

  export type user_jobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsCreateManyInput = {
    id?: number
    user_id: number
    job_id: number
    created_at?: Date | string
  }

  export type user_jobsUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsCreateNestedManyWithoutUsersInput
    departments?: DepartmentsCreateNestedOneWithoutUsersInput
    jobs?: jobsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUpdateManyWithoutUsersNestedInput
    departments?: DepartmentsUpdateOneWithoutUsersNestedInput
    jobs?: jobsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type JobsListRelationFilter = {
    every?: jobsWhereInput
    some?: jobsWhereInput
    none?: jobsWhereInput
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentsOrderByRelevanceInput = {
    fields: DepartmentsOrderByRelevanceFieldEnum | DepartmentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type DepartmentsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type DepartmentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type DepartmentsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Evaluation_criteriaNullableScalarRelationFilter = {
    is?: evaluation_criteriaWhereInput | null
    isNot?: evaluation_criteriaWhereInput | null
  }

  export type Evaluation_criteriaListRelationFilter = {
    every?: evaluation_criteriaWhereInput
    some?: evaluation_criteriaWhereInput
    none?: evaluation_criteriaWhereInput
  }

  export type Evaluation_criteria_inputsListRelationFilter = {
    every?: evaluation_criteria_inputsWhereInput
    some?: evaluation_criteria_inputsWhereInput
    none?: evaluation_criteria_inputsWhereInput
  }

  export type Evaluation_evaluator_scoresListRelationFilter = {
    every?: evaluation_evaluator_scoresWhereInput
    some?: evaluation_evaluator_scoresWhereInput
    none?: evaluation_evaluator_scoresWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type evaluation_criteriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluation_criteria_inputsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluation_evaluator_scoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluation_criteriaOrderByRelevanceInput = {
    fields: evaluation_criteriaOrderByRelevanceFieldEnum | evaluation_criteriaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type evaluation_criteriaCountOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_score?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_criteriaAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    max_score?: SortOrder
    sort_order?: SortOrder
  }

  export type evaluation_criteriaMaxOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_score?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_criteriaMinOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    max_score?: SortOrder
    sort_order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_criteriaSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
    max_score?: SortOrder
    sort_order?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Evaluation_criteriaScalarRelationFilter = {
    is?: evaluation_criteriaWhereInput
    isNot?: evaluation_criteriaWhereInput
  }

  export type Evaluation_instancesScalarRelationFilter = {
    is?: evaluation_instancesWhereInput
    isNot?: evaluation_instancesWhereInput
  }

  export type evaluation_criteria_inputsOrderByRelevanceInput = {
    fields: evaluation_criteria_inputsOrderByRelevanceFieldEnum | evaluation_criteria_inputsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type evaluation_criteria_inputsEvaluation_instance_idCriteria_idCompoundUniqueInput = {
    evaluation_instance_id: number
    criteria_id: number
  }

  export type evaluation_criteria_inputsCountOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
    staff_input_text?: SortOrder
    staff_attachment?: SortOrder
  }

  export type evaluation_criteria_inputsAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
  }

  export type evaluation_criteria_inputsMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
    staff_input_text?: SortOrder
    staff_attachment?: SortOrder
  }

  export type evaluation_criteria_inputsMinOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
    staff_input_text?: SortOrder
    staff_attachment?: SortOrder
  }

  export type evaluation_criteria_inputsSumOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    criteria_id?: SortOrder
  }

  export type Evaluation_evaluator_statusScalarRelationFilter = {
    is?: evaluation_evaluator_statusWhereInput
    isNot?: evaluation_evaluator_statusWhereInput
  }

  export type evaluation_evaluator_scoresOrderByRelevanceInput = {
    fields: evaluation_evaluator_scoresOrderByRelevanceFieldEnum | evaluation_evaluator_scoresOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type evaluation_evaluator_scoresEvaluation_evaluator_status_idCriteria_idCompoundUniqueInput = {
    evaluation_evaluator_status_id: number
    criteria_id: number
  }

  export type evaluation_evaluator_scoresCountOrderByAggregateInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type evaluation_evaluator_scoresAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
  }

  export type evaluation_evaluator_scoresMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type evaluation_evaluator_scoresMinOrderByAggregateInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
    comment?: SortOrder
  }

  export type evaluation_evaluator_scoresSumOrderByAggregateInput = {
    id?: SortOrder
    evaluation_evaluator_status_id?: SortOrder
    criteria_id?: SortOrder
    score?: SortOrder
  }

  export type Enumevaluation_evaluator_status_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_evaluator_status_status | Enumevaluation_evaluator_status_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_evaluator_status_status[]
    notIn?: $Enums.evaluation_evaluator_status_status[]
    not?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel> | $Enums.evaluation_evaluator_status_status
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type evaluation_evaluator_statusEvaluation_instance_idEvaluator_idCompoundUniqueInput = {
    evaluation_instance_id: number
    evaluator_id: number
  }

  export type evaluation_evaluator_statusCountOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_evaluator_statusAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    total_score?: SortOrder
  }

  export type evaluation_evaluator_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_evaluator_statusMinOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    status?: SortOrder
    total_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_evaluator_statusSumOrderByAggregateInput = {
    id?: SortOrder
    evaluation_instance_id?: SortOrder
    evaluator_id?: SortOrder
    total_score?: SortOrder
  }

  export type Enumevaluation_evaluator_status_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_evaluator_status_status | Enumevaluation_evaluator_status_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_evaluator_status_status[]
    notIn?: $Enums.evaluation_evaluator_status_status[]
    not?: NestedEnumevaluation_evaluator_status_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_evaluator_status_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type JobsScalarRelationFilter = {
    is?: jobsWhereInput
    isNot?: jobsWhereInput
  }

  export type evaluation_hierarchiesEvaluatee_job_idEvaluator_job_idCompoundUniqueInput = {
    evaluatee_job_id: number
    evaluator_job_id: number
  }

  export type evaluation_hierarchiesCountOrderByAggregateInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_hierarchiesAvgOrderByAggregateInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrder
  }

  export type evaluation_hierarchiesMaxOrderByAggregateInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_hierarchiesMinOrderByAggregateInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_hierarchiesSumOrderByAggregateInput = {
    id?: SortOrder
    evaluatee_job_id?: SortOrder
    evaluator_job_id?: SortOrder
    level?: SortOrder
  }

  export type Enumevaluation_instances_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_instances_status | Enumevaluation_instances_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_instances_status[]
    notIn?: $Enums.evaluation_instances_status[]
    not?: NestedEnumevaluation_instances_statusFilter<$PrismaModel> | $Enums.evaluation_instances_status
  }

  export type Evaluation_evaluator_statusListRelationFilter = {
    every?: evaluation_evaluator_statusWhereInput
    some?: evaluation_evaluator_statusWhereInput
    none?: evaluation_evaluator_statusWhereInput
  }

  export type Evaluation_roundsScalarRelationFilter = {
    is?: evaluation_roundsWhereInput
    isNot?: evaluation_roundsWhereInput
  }

  export type JobsNullableScalarRelationFilter = {
    is?: jobsWhereInput | null
    isNot?: jobsWhereInput | null
  }

  export type evaluation_evaluator_statusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluation_instancesRound_idEvaluatee_idEvaluated_job_idCompoundUniqueInput = {
    round_id: number
    evaluatee_id: number
    evaluated_job_id: number
  }

  export type evaluation_instancesCountOrderByAggregateInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrder
    status?: SortOrder
    total_score_average?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_instancesAvgOrderByAggregateInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrder
    total_score_average?: SortOrder
  }

  export type evaluation_instancesMaxOrderByAggregateInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrder
    status?: SortOrder
    total_score_average?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_instancesMinOrderByAggregateInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrder
    status?: SortOrder
    total_score_average?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type evaluation_instancesSumOrderByAggregateInput = {
    id?: SortOrder
    round_id?: SortOrder
    evaluatee_id?: SortOrder
    evaluated_job_id?: SortOrder
    total_score_average?: SortOrder
  }

  export type Enumevaluation_instances_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_instances_status | Enumevaluation_instances_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_instances_status[]
    notIn?: $Enums.evaluation_instances_status[]
    not?: NestedEnumevaluation_instances_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_instances_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_instances_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_instances_statusFilter<$PrismaModel>
  }

  export type Enumevaluation_rounds_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_rounds_status | Enumevaluation_rounds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_rounds_status[]
    notIn?: $Enums.evaluation_rounds_status[]
    not?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel> | $Enums.evaluation_rounds_status
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

  export type Evaluation_instancesListRelationFilter = {
    every?: evaluation_instancesWhereInput
    some?: evaluation_instancesWhereInput
    none?: evaluation_instancesWhereInput
  }

  export type evaluation_instancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluation_roundsOrderByRelevanceInput = {
    fields: evaluation_roundsOrderByRelevanceFieldEnum | evaluation_roundsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type evaluation_roundsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target_score?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_roundsAvgOrderByAggregateInput = {
    id?: SortOrder
    target_score?: SortOrder
  }

  export type evaluation_roundsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target_score?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_roundsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target_score?: SortOrder
    status?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type evaluation_roundsSumOrderByAggregateInput = {
    id?: SortOrder
    target_score?: SortOrder
  }

  export type Enumevaluation_rounds_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_rounds_status | Enumevaluation_rounds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_rounds_status[]
    notIn?: $Enums.evaluation_rounds_status[]
    not?: NestedEnumevaluation_rounds_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_rounds_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel>
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

  export type Evaluation_hierarchiesListRelationFilter = {
    every?: evaluation_hierarchiesWhereInput
    some?: evaluation_hierarchiesWhereInput
    none?: evaluation_hierarchiesWhereInput
  }

  export type DepartmentsScalarRelationFilter = {
    is?: DepartmentsWhereInput
    isNot?: DepartmentsWhereInput
  }

  export type User_jobsListRelationFilter = {
    every?: user_jobsWhereInput
    some?: user_jobsWhereInput
    none?: user_jobsWhereInput
  }

  export type evaluation_hierarchiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_jobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jobsOrderByRelevanceInput = {
    fields: jobsOrderByRelevanceFieldEnum | jobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jobsCountOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    title?: SortOrder
    job_level?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    job_level?: SortOrder
  }

  export type jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    title?: SortOrder
    job_level?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type jobsMinOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    title?: SortOrder
    job_level?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type jobsSumOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    job_level?: SortOrder
  }

  export type settingsOrderByRelevanceInput = {
    fields: settingsOrderByRelevanceFieldEnum | settingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type settingsCountOrderByAggregateInput = {
    setting_key?: SortOrder
    setting_value?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    setting_key?: SortOrder
    setting_value?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    setting_key?: SortOrder
    setting_value?: SortOrder
    updated_at?: SortOrder
  }

  export type user_jobsUser_idJob_idCompoundUniqueInput = {
    user_id: number
    job_id: number
  }

  export type user_jobsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_jobsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type user_jobsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_jobsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
    created_at?: SortOrder
  }

  export type user_jobsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    job_id?: SortOrder
  }

  export type Enumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type DepartmentsNullableScalarRelationFilter = {
    is?: DepartmentsWhereInput | null
    isNot?: DepartmentsWhereInput | null
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department_id?: SortOrder
    job_id?: SortOrder
    profile_image?: SortOrder
    line_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    job_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department_id?: SortOrder
    job_id?: SortOrder
    profile_image?: SortOrder
    line_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    prefix?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    department_id?: SortOrder
    job_id?: SortOrder
    profile_image?: SortOrder
    line_user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    department_id?: SortOrder
    job_id?: SortOrder
  }

  export type Enumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type jobsCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput> | jobsCreateWithoutDepartmentsInput[] | jobsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutDepartmentsInput | jobsCreateOrConnectWithoutDepartmentsInput[]
    createMany?: jobsCreateManyDepartmentsInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type jobsUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput> | jobsCreateWithoutDepartmentsInput[] | jobsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutDepartmentsInput | jobsCreateOrConnectWithoutDepartmentsInput[]
    createMany?: jobsCreateManyDepartmentsInputEnvelope
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutDepartmentsInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type jobsUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput> | jobsCreateWithoutDepartmentsInput[] | jobsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutDepartmentsInput | jobsCreateOrConnectWithoutDepartmentsInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutDepartmentsInput | jobsUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: jobsCreateManyDepartmentsInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutDepartmentsInput | jobsUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutDepartmentsInput | jobsUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentsInput | usersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentsInput | usersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentsInput | usersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type jobsUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput> | jobsCreateWithoutDepartmentsInput[] | jobsUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: jobsCreateOrConnectWithoutDepartmentsInput | jobsCreateOrConnectWithoutDepartmentsInput[]
    upsert?: jobsUpsertWithWhereUniqueWithoutDepartmentsInput | jobsUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: jobsCreateManyDepartmentsInputEnvelope
    set?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    disconnect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    delete?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    connect?: jobsWhereUniqueInput | jobsWhereUniqueInput[]
    update?: jobsUpdateWithWhereUniqueWithoutDepartmentsInput | jobsUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: jobsUpdateManyWithWhereWithoutDepartmentsInput | jobsUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: jobsScalarWhereInput | jobsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutDepartmentsNestedInput = {
    create?: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput> | usersCreateWithoutDepartmentsInput[] | usersUncheckedCreateWithoutDepartmentsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutDepartmentsInput | usersCreateOrConnectWithoutDepartmentsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutDepartmentsInput | usersUpsertWithWhereUniqueWithoutDepartmentsInput[]
    createMany?: usersCreateManyDepartmentsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutDepartmentsInput | usersUpdateWithWhereUniqueWithoutDepartmentsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutDepartmentsInput | usersUpdateManyWithWhereWithoutDepartmentsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type evaluation_criteriaCreateNestedOneWithoutOther_evaluation_criteriaInput = {
    create?: XOR<evaluation_criteriaCreateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutOther_evaluation_criteriaInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutOther_evaluation_criteriaInput
    connect?: evaluation_criteriaWhereUniqueInput
  }

  export type evaluation_criteriaCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteriaCreateWithoutEvaluation_criteriaInput[] | evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteriaCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
  }

  export type evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
  }

  export type evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
  }

  export type evaluation_criteriaUncheckedCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteriaCreateWithoutEvaluation_criteriaInput[] | evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteriaCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
  }

  export type evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
  }

  export type evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_criteriaInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_criteriaInputEnvelope
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type evaluation_criteriaUpdateOneWithoutOther_evaluation_criteriaNestedInput = {
    create?: XOR<evaluation_criteriaCreateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutOther_evaluation_criteriaInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutOther_evaluation_criteriaInput
    upsert?: evaluation_criteriaUpsertWithoutOther_evaluation_criteriaInput
    disconnect?: evaluation_criteriaWhereInput | boolean
    delete?: evaluation_criteriaWhereInput | boolean
    connect?: evaluation_criteriaWhereUniqueInput
    update?: XOR<XOR<evaluation_criteriaUpdateToOneWithWhereWithoutOther_evaluation_criteriaInput, evaluation_criteriaUpdateWithoutOther_evaluation_criteriaInput>, evaluation_criteriaUncheckedUpdateWithoutOther_evaluation_criteriaInput>
  }

  export type evaluation_criteriaUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteriaCreateWithoutEvaluation_criteriaInput[] | evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_criteriaUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteriaUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteriaCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    disconnect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    delete?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    connect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    update?: evaluation_criteriaUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteriaUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_criteriaUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_criteriaUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_criteriaScalarWhereInput | evaluation_criteriaScalarWhereInput[]
  }

  export type evaluation_criteria_inputsUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    disconnect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    delete?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    update?: evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
  }

  export type evaluation_evaluator_scoresUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    disconnect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    delete?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    update?: evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
  }

  export type evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteriaCreateWithoutEvaluation_criteriaInput[] | evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_criteriaUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteriaUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteriaCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    disconnect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    delete?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    connect?: evaluation_criteriaWhereUniqueInput | evaluation_criteriaWhereUniqueInput[]
    update?: evaluation_criteriaUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteriaUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_criteriaUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_criteriaUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_criteriaScalarWhereInput | evaluation_criteriaScalarWhereInput[]
  }

  export type evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    disconnect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    delete?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    update?: evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
  }

  export type evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput[]
    upsert?: evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_criteriaInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_criteriaInputEnvelope
    set?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    disconnect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    delete?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    update?: evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_criteriaInput[]
    updateMany?: evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_criteriaInput | evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_criteriaInput[]
    deleteMany?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
  }

  export type evaluation_criteriaCreateNestedOneWithoutEvaluation_criteria_inputsInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteria_inputsInput
    connect?: evaluation_criteriaWhereUniqueInput
  }

  export type evaluation_instancesCreateNestedOneWithoutEvaluation_criteria_inputsInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_criteria_inputsInput
    connect?: evaluation_instancesWhereUniqueInput
  }

  export type evaluation_criteriaUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_criteria_inputsInput
    upsert?: evaluation_criteriaUpsertWithoutEvaluation_criteria_inputsInput
    connect?: evaluation_criteriaWhereUniqueInput
    update?: XOR<XOR<evaluation_criteriaUpdateToOneWithWhereWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUpdateWithoutEvaluation_criteria_inputsInput>, evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_instancesUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_criteria_inputsInput
    upsert?: evaluation_instancesUpsertWithoutEvaluation_criteria_inputsInput
    connect?: evaluation_instancesWhereUniqueInput
    update?: XOR<XOR<evaluation_instancesUpdateToOneWithWhereWithoutEvaluation_criteria_inputsInput, evaluation_instancesUpdateWithoutEvaluation_criteria_inputsInput>, evaluation_instancesUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_evaluator_statusCreateNestedOneWithoutEvaluation_evaluator_scoresInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_evaluator_scoresInput
    connect?: evaluation_evaluator_statusWhereUniqueInput
  }

  export type evaluation_criteriaCreateNestedOneWithoutEvaluation_evaluator_scoresInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_evaluator_scoresInput
    connect?: evaluation_criteriaWhereUniqueInput
  }

  export type evaluation_evaluator_statusUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_evaluator_scoresInput
    upsert?: evaluation_evaluator_statusUpsertWithoutEvaluation_evaluator_scoresInput
    connect?: evaluation_evaluator_statusWhereUniqueInput
    update?: XOR<XOR<evaluation_evaluator_statusUpdateToOneWithWhereWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUpdateWithoutEvaluation_evaluator_scoresInput>, evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_criteriaUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput = {
    create?: XOR<evaluation_criteriaCreateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    connectOrCreate?: evaluation_criteriaCreateOrConnectWithoutEvaluation_evaluator_scoresInput
    upsert?: evaluation_criteriaUpsertWithoutEvaluation_evaluator_scoresInput
    connect?: evaluation_criteriaWhereUniqueInput
    update?: XOR<XOR<evaluation_criteriaUpdateToOneWithWhereWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUpdateWithoutEvaluation_evaluator_scoresInput>, evaluation_criteriaUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_evaluator_statusInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInputEnvelope
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutEvaluation_evaluator_statusInput = {
    create?: XOR<usersCreateWithoutEvaluation_evaluator_statusInput, usersUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    connectOrCreate?: usersCreateOrConnectWithoutEvaluation_evaluator_statusInput
    connect?: usersWhereUniqueInput
  }

  export type evaluation_instancesCreateNestedOneWithoutEvaluation_evaluator_statusInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_evaluator_statusInput
    connect?: evaluation_instancesWhereUniqueInput
  }

  export type evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_evaluator_statusInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInputEnvelope
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
  }

  export type Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput = {
    set?: $Enums.evaluation_evaluator_status_status
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type evaluation_evaluator_scoresUpdateManyWithoutEvaluation_evaluator_statusNestedInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput[]
    upsert?: evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_evaluator_statusInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInputEnvelope
    set?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    disconnect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    delete?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    update?: evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_evaluator_statusInput[]
    updateMany?: evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_evaluator_statusInput[]
    deleteMany?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput = {
    create?: XOR<usersCreateWithoutEvaluation_evaluator_statusInput, usersUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    connectOrCreate?: usersCreateOrConnectWithoutEvaluation_evaluator_statusInput
    upsert?: usersUpsertWithoutEvaluation_evaluator_statusInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEvaluation_evaluator_statusInput, usersUpdateWithoutEvaluation_evaluator_statusInput>, usersUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_instancesUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_evaluator_statusInput
    upsert?: evaluation_instancesUpsertWithoutEvaluation_evaluator_statusInput
    connect?: evaluation_instancesWhereUniqueInput
    update?: XOR<XOR<evaluation_instancesUpdateToOneWithWhereWithoutEvaluation_evaluator_statusInput, evaluation_instancesUpdateWithoutEvaluation_evaluator_statusInput>, evaluation_instancesUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusNestedInput = {
    create?: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput> | evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput[] | evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput[]
    connectOrCreate?: evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput[]
    upsert?: evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_evaluator_statusInput[]
    createMany?: evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInputEnvelope
    set?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    disconnect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    delete?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    connect?: evaluation_evaluator_scoresWhereUniqueInput | evaluation_evaluator_scoresWhereUniqueInput[]
    update?: evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_evaluator_statusInput[]
    updateMany?: evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_evaluator_statusInput | evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_evaluator_statusInput[]
    deleteMany?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
  }

  export type jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    create?: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput
    connect?: jobsWhereUniqueInput
  }

  export type jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    create?: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput
    connect?: jobsWhereUniqueInput
  }

  export type jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput = {
    create?: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput
    upsert?: jobsUpsertWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsNestedInput = {
    create?: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput
    upsert?: jobsUpsertWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_instancesInputEnvelope
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
  }

  export type evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput[] | evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput | evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput[]
    createMany?: evaluation_evaluator_statusCreateManyEvaluation_instancesInputEnvelope
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
  }

  export type evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput = {
    create?: XOR<evaluation_roundsCreateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: evaluation_roundsCreateOrConnectWithoutEvaluation_instancesInput
    connect?: evaluation_roundsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEvaluation_instancesInput = {
    create?: XOR<usersCreateWithoutEvaluation_instancesInput, usersUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutEvaluation_instancesInput
    connect?: usersWhereUniqueInput
  }

  export type jobsCreateNestedOneWithoutEvaluation_instancesInput = {
    create?: XOR<jobsCreateWithoutEvaluation_instancesInput, jobsUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_instancesInput
    connect?: jobsWhereUniqueInput
  }

  export type evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_instancesInputEnvelope
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
  }

  export type evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput[] | evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput | evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput[]
    createMany?: evaluation_evaluator_statusCreateManyEvaluation_instancesInputEnvelope
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
  }

  export type Enumevaluation_instances_statusFieldUpdateOperationsInput = {
    set?: $Enums.evaluation_instances_status
  }

  export type evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput[]
    upsert?: evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_instancesInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_instancesInputEnvelope
    set?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    disconnect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    delete?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    update?: evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_instancesInput[]
    updateMany?: evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_instancesInput[]
    deleteMany?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
  }

  export type evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput[] | evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput | evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput[]
    upsert?: evaluation_evaluator_statusUpsertWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpsertWithWhereUniqueWithoutEvaluation_instancesInput[]
    createMany?: evaluation_evaluator_statusCreateManyEvaluation_instancesInputEnvelope
    set?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    disconnect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    delete?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    update?: evaluation_evaluator_statusUpdateWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpdateWithWhereUniqueWithoutEvaluation_instancesInput[]
    updateMany?: evaluation_evaluator_statusUpdateManyWithWhereWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpdateManyWithWhereWithoutEvaluation_instancesInput[]
    deleteMany?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
  }

  export type evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput = {
    create?: XOR<evaluation_roundsCreateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: evaluation_roundsCreateOrConnectWithoutEvaluation_instancesInput
    upsert?: evaluation_roundsUpsertWithoutEvaluation_instancesInput
    connect?: evaluation_roundsWhereUniqueInput
    update?: XOR<XOR<evaluation_roundsUpdateToOneWithWhereWithoutEvaluation_instancesInput, evaluation_roundsUpdateWithoutEvaluation_instancesInput>, evaluation_roundsUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput = {
    create?: XOR<usersCreateWithoutEvaluation_instancesInput, usersUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: usersCreateOrConnectWithoutEvaluation_instancesInput
    upsert?: usersUpsertWithoutEvaluation_instancesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEvaluation_instancesInput, usersUpdateWithoutEvaluation_instancesInput>, usersUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type jobsUpdateOneWithoutEvaluation_instancesNestedInput = {
    create?: XOR<jobsCreateWithoutEvaluation_instancesInput, jobsUncheckedCreateWithoutEvaluation_instancesInput>
    connectOrCreate?: jobsCreateOrConnectWithoutEvaluation_instancesInput
    upsert?: jobsUpsertWithoutEvaluation_instancesInput
    disconnect?: jobsWhereInput | boolean
    delete?: jobsWhereInput | boolean
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutEvaluation_instancesInput, jobsUpdateWithoutEvaluation_instancesInput>, jobsUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput = {
    create?: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput[] | evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput | evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput[]
    upsert?: evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_instancesInput[]
    createMany?: evaluation_criteria_inputsCreateManyEvaluation_instancesInputEnvelope
    set?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    disconnect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    delete?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    connect?: evaluation_criteria_inputsWhereUniqueInput | evaluation_criteria_inputsWhereUniqueInput[]
    update?: evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_instancesInput[]
    updateMany?: evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_instancesInput | evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_instancesInput[]
    deleteMany?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
  }

  export type evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput> | evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput[] | evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput | evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput[]
    upsert?: evaluation_evaluator_statusUpsertWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpsertWithWhereUniqueWithoutEvaluation_instancesInput[]
    createMany?: evaluation_evaluator_statusCreateManyEvaluation_instancesInputEnvelope
    set?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    disconnect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    delete?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    update?: evaluation_evaluator_statusUpdateWithWhereUniqueWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpdateWithWhereUniqueWithoutEvaluation_instancesInput[]
    updateMany?: evaluation_evaluator_statusUpdateManyWithWhereWithoutEvaluation_instancesInput | evaluation_evaluator_statusUpdateManyWithWhereWithoutEvaluation_instancesInput[]
    deleteMany?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
  }

  export type evaluation_instancesCreateNestedManyWithoutEvaluation_roundsInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput> | evaluation_instancesCreateWithoutEvaluation_roundsInput[] | evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput | evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput[]
    createMany?: evaluation_instancesCreateManyEvaluation_roundsInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type evaluation_instancesUncheckedCreateNestedManyWithoutEvaluation_roundsInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput> | evaluation_instancesCreateWithoutEvaluation_roundsInput[] | evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput | evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput[]
    createMany?: evaluation_instancesCreateManyEvaluation_roundsInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type Enumevaluation_rounds_statusFieldUpdateOperationsInput = {
    set?: $Enums.evaluation_rounds_status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type evaluation_instancesUpdateManyWithoutEvaluation_roundsNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput> | evaluation_instancesCreateWithoutEvaluation_roundsInput[] | evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput | evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutEvaluation_roundsInput | evaluation_instancesUpsertWithWhereUniqueWithoutEvaluation_roundsInput[]
    createMany?: evaluation_instancesCreateManyEvaluation_roundsInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutEvaluation_roundsInput | evaluation_instancesUpdateWithWhereUniqueWithoutEvaluation_roundsInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutEvaluation_roundsInput | evaluation_instancesUpdateManyWithWhereWithoutEvaluation_roundsInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutEvaluation_roundsNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput> | evaluation_instancesCreateWithoutEvaluation_roundsInput[] | evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput | evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutEvaluation_roundsInput | evaluation_instancesUpsertWithWhereUniqueWithoutEvaluation_roundsInput[]
    createMany?: evaluation_instancesCreateManyEvaluation_roundsInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutEvaluation_roundsInput | evaluation_instancesUpdateWithWhereUniqueWithoutEvaluation_roundsInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutEvaluation_roundsInput | evaluation_instancesUpdateManyWithWhereWithoutEvaluation_roundsInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInputEnvelope
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
  }

  export type evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInputEnvelope
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
  }

  export type evaluation_instancesCreateNestedManyWithoutJobsInput = {
    create?: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput> | evaluation_instancesCreateWithoutJobsInput[] | evaluation_instancesUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutJobsInput | evaluation_instancesCreateOrConnectWithoutJobsInput[]
    createMany?: evaluation_instancesCreateManyJobsInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type DepartmentsCreateNestedOneWithoutJobsInput = {
    create?: XOR<DepartmentsCreateWithoutJobsInput, DepartmentsUncheckedCreateWithoutJobsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutJobsInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type user_jobsCreateNestedManyWithoutJobsInput = {
    create?: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput> | user_jobsCreateWithoutJobsInput[] | user_jobsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutJobsInput | user_jobsCreateOrConnectWithoutJobsInput[]
    createMany?: user_jobsCreateManyJobsInputEnvelope
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
  }

  export type usersCreateNestedManyWithoutJobsInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput> | usersCreateWithoutJobsInput[] | usersUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput | usersCreateOrConnectWithoutJobsInput[]
    createMany?: usersCreateManyJobsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInputEnvelope
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
  }

  export type evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInputEnvelope
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
  }

  export type evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput> | evaluation_instancesCreateWithoutJobsInput[] | evaluation_instancesUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutJobsInput | evaluation_instancesCreateOrConnectWithoutJobsInput[]
    createMany?: evaluation_instancesCreateManyJobsInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type user_jobsUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput> | user_jobsCreateWithoutJobsInput[] | user_jobsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutJobsInput | user_jobsCreateOrConnectWithoutJobsInput[]
    createMany?: user_jobsCreateManyJobsInputEnvelope
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput> | usersCreateWithoutJobsInput[] | usersUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput | usersCreateOrConnectWithoutJobsInput[]
    createMany?: usersCreateManyJobsInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    upsert?: evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInputEnvelope
    set?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    disconnect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    delete?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    update?: evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    updateMany?: evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    deleteMany?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
  }

  export type evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    upsert?: evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInputEnvelope
    set?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    disconnect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    delete?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    update?: evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    updateMany?: evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    deleteMany?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
  }

  export type evaluation_instancesUpdateManyWithoutJobsNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput> | evaluation_instancesCreateWithoutJobsInput[] | evaluation_instancesUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutJobsInput | evaluation_instancesCreateOrConnectWithoutJobsInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutJobsInput | evaluation_instancesUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: evaluation_instancesCreateManyJobsInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutJobsInput | evaluation_instancesUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutJobsInput | evaluation_instancesUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type DepartmentsUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<DepartmentsCreateWithoutJobsInput, DepartmentsUncheckedCreateWithoutJobsInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutJobsInput
    upsert?: DepartmentsUpsertWithoutJobsInput
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutJobsInput, DepartmentsUpdateWithoutJobsInput>, DepartmentsUncheckedUpdateWithoutJobsInput>
  }

  export type user_jobsUpdateManyWithoutJobsNestedInput = {
    create?: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput> | user_jobsCreateWithoutJobsInput[] | user_jobsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutJobsInput | user_jobsCreateOrConnectWithoutJobsInput[]
    upsert?: user_jobsUpsertWithWhereUniqueWithoutJobsInput | user_jobsUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: user_jobsCreateManyJobsInputEnvelope
    set?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    disconnect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    delete?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    update?: user_jobsUpdateWithWhereUniqueWithoutJobsInput | user_jobsUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: user_jobsUpdateManyWithWhereWithoutJobsInput | user_jobsUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
  }

  export type usersUpdateManyWithoutJobsNestedInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput> | usersCreateWithoutJobsInput[] | usersUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput | usersCreateOrConnectWithoutJobsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJobsInput | usersUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: usersCreateManyJobsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJobsInput | usersUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJobsInput | usersUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    upsert?: evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInputEnvelope
    set?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    disconnect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    delete?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    update?: evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    updateMany?: evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    deleteMany?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
  }

  export type evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput = {
    create?: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput> | evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[] | evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    connectOrCreate?: evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    upsert?: evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    createMany?: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInputEnvelope
    set?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    disconnect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    delete?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    connect?: evaluation_hierarchiesWhereUniqueInput | evaluation_hierarchiesWhereUniqueInput[]
    update?: evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    updateMany?: evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    deleteMany?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput> | evaluation_instancesCreateWithoutJobsInput[] | evaluation_instancesUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutJobsInput | evaluation_instancesCreateOrConnectWithoutJobsInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutJobsInput | evaluation_instancesUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: evaluation_instancesCreateManyJobsInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutJobsInput | evaluation_instancesUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutJobsInput | evaluation_instancesUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type user_jobsUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput> | user_jobsCreateWithoutJobsInput[] | user_jobsUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutJobsInput | user_jobsCreateOrConnectWithoutJobsInput[]
    upsert?: user_jobsUpsertWithWhereUniqueWithoutJobsInput | user_jobsUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: user_jobsCreateManyJobsInputEnvelope
    set?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    disconnect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    delete?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    update?: user_jobsUpdateWithWhereUniqueWithoutJobsInput | user_jobsUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: user_jobsUpdateManyWithWhereWithoutJobsInput | user_jobsUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput> | usersCreateWithoutJobsInput[] | usersUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: usersCreateOrConnectWithoutJobsInput | usersCreateOrConnectWithoutJobsInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutJobsInput | usersUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: usersCreateManyJobsInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutJobsInput | usersUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: usersUpdateManyWithWhereWithoutJobsInput | usersUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUser_jobsInput = {
    create?: XOR<usersCreateWithoutUser_jobsInput, usersUncheckedCreateWithoutUser_jobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_jobsInput
    connect?: usersWhereUniqueInput
  }

  export type jobsCreateNestedOneWithoutUser_jobsInput = {
    create?: XOR<jobsCreateWithoutUser_jobsInput, jobsUncheckedCreateWithoutUser_jobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutUser_jobsInput
    connect?: jobsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUser_jobsNestedInput = {
    create?: XOR<usersCreateWithoutUser_jobsInput, usersUncheckedCreateWithoutUser_jobsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_jobsInput
    upsert?: usersUpsertWithoutUser_jobsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_jobsInput, usersUpdateWithoutUser_jobsInput>, usersUncheckedUpdateWithoutUser_jobsInput>
  }

  export type jobsUpdateOneRequiredWithoutUser_jobsNestedInput = {
    create?: XOR<jobsCreateWithoutUser_jobsInput, jobsUncheckedCreateWithoutUser_jobsInput>
    connectOrCreate?: jobsCreateOrConnectWithoutUser_jobsInput
    upsert?: jobsUpsertWithoutUser_jobsInput
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutUser_jobsInput, jobsUpdateWithoutUser_jobsInput>, jobsUncheckedUpdateWithoutUser_jobsInput>
  }

  export type evaluation_evaluator_statusCreateNestedManyWithoutUsersInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput> | evaluation_evaluator_statusCreateWithoutUsersInput[] | evaluation_evaluator_statusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutUsersInput | evaluation_evaluator_statusCreateOrConnectWithoutUsersInput[]
    createMany?: evaluation_evaluator_statusCreateManyUsersInputEnvelope
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
  }

  export type evaluation_instancesCreateNestedManyWithoutUsersInput = {
    create?: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput> | evaluation_instancesCreateWithoutUsersInput[] | evaluation_instancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutUsersInput | evaluation_instancesCreateOrConnectWithoutUsersInput[]
    createMany?: evaluation_instancesCreateManyUsersInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type user_jobsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput> | user_jobsCreateWithoutUsersInput[] | user_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutUsersInput | user_jobsCreateOrConnectWithoutUsersInput[]
    createMany?: user_jobsCreateManyUsersInputEnvelope
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
  }

  export type DepartmentsCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutUsersInput
    connect?: DepartmentsWhereUniqueInput
  }

  export type jobsCreateNestedOneWithoutUsersInput = {
    create?: XOR<jobsCreateWithoutUsersInput, jobsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: jobsCreateOrConnectWithoutUsersInput
    connect?: jobsWhereUniqueInput
  }

  export type evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput> | evaluation_evaluator_statusCreateWithoutUsersInput[] | evaluation_evaluator_statusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutUsersInput | evaluation_evaluator_statusCreateOrConnectWithoutUsersInput[]
    createMany?: evaluation_evaluator_statusCreateManyUsersInputEnvelope
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
  }

  export type evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput> | evaluation_instancesCreateWithoutUsersInput[] | evaluation_instancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutUsersInput | evaluation_instancesCreateOrConnectWithoutUsersInput[]
    createMany?: evaluation_instancesCreateManyUsersInputEnvelope
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
  }

  export type user_jobsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput> | user_jobsCreateWithoutUsersInput[] | user_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutUsersInput | user_jobsCreateOrConnectWithoutUsersInput[]
    createMany?: user_jobsCreateManyUsersInputEnvelope
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
  }

  export type Enumusers_roleFieldUpdateOperationsInput = {
    set?: $Enums.users_role
  }

  export type evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput> | evaluation_evaluator_statusCreateWithoutUsersInput[] | evaluation_evaluator_statusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutUsersInput | evaluation_evaluator_statusCreateOrConnectWithoutUsersInput[]
    upsert?: evaluation_evaluator_statusUpsertWithWhereUniqueWithoutUsersInput | evaluation_evaluator_statusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: evaluation_evaluator_statusCreateManyUsersInputEnvelope
    set?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    disconnect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    delete?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    update?: evaluation_evaluator_statusUpdateWithWhereUniqueWithoutUsersInput | evaluation_evaluator_statusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: evaluation_evaluator_statusUpdateManyWithWhereWithoutUsersInput | evaluation_evaluator_statusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
  }

  export type evaluation_instancesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput> | evaluation_instancesCreateWithoutUsersInput[] | evaluation_instancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutUsersInput | evaluation_instancesCreateOrConnectWithoutUsersInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutUsersInput | evaluation_instancesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: evaluation_instancesCreateManyUsersInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutUsersInput | evaluation_instancesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutUsersInput | evaluation_instancesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type user_jobsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput> | user_jobsCreateWithoutUsersInput[] | user_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutUsersInput | user_jobsCreateOrConnectWithoutUsersInput[]
    upsert?: user_jobsUpsertWithWhereUniqueWithoutUsersInput | user_jobsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_jobsCreateManyUsersInputEnvelope
    set?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    disconnect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    delete?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    update?: user_jobsUpdateWithWhereUniqueWithoutUsersInput | user_jobsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_jobsUpdateManyWithWhereWithoutUsersInput | user_jobsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
  }

  export type DepartmentsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentsCreateOrConnectWithoutUsersInput
    upsert?: DepartmentsUpsertWithoutUsersInput
    disconnect?: DepartmentsWhereInput | boolean
    delete?: DepartmentsWhereInput | boolean
    connect?: DepartmentsWhereUniqueInput
    update?: XOR<XOR<DepartmentsUpdateToOneWithWhereWithoutUsersInput, DepartmentsUpdateWithoutUsersInput>, DepartmentsUncheckedUpdateWithoutUsersInput>
  }

  export type jobsUpdateOneWithoutUsersNestedInput = {
    create?: XOR<jobsCreateWithoutUsersInput, jobsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: jobsCreateOrConnectWithoutUsersInput
    upsert?: jobsUpsertWithoutUsersInput
    disconnect?: jobsWhereInput | boolean
    delete?: jobsWhereInput | boolean
    connect?: jobsWhereUniqueInput
    update?: XOR<XOR<jobsUpdateToOneWithWhereWithoutUsersInput, jobsUpdateWithoutUsersInput>, jobsUncheckedUpdateWithoutUsersInput>
  }

  export type evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput> | evaluation_evaluator_statusCreateWithoutUsersInput[] | evaluation_evaluator_statusUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_evaluator_statusCreateOrConnectWithoutUsersInput | evaluation_evaluator_statusCreateOrConnectWithoutUsersInput[]
    upsert?: evaluation_evaluator_statusUpsertWithWhereUniqueWithoutUsersInput | evaluation_evaluator_statusUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: evaluation_evaluator_statusCreateManyUsersInputEnvelope
    set?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    disconnect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    delete?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    connect?: evaluation_evaluator_statusWhereUniqueInput | evaluation_evaluator_statusWhereUniqueInput[]
    update?: evaluation_evaluator_statusUpdateWithWhereUniqueWithoutUsersInput | evaluation_evaluator_statusUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: evaluation_evaluator_statusUpdateManyWithWhereWithoutUsersInput | evaluation_evaluator_statusUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput> | evaluation_instancesCreateWithoutUsersInput[] | evaluation_instancesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: evaluation_instancesCreateOrConnectWithoutUsersInput | evaluation_instancesCreateOrConnectWithoutUsersInput[]
    upsert?: evaluation_instancesUpsertWithWhereUniqueWithoutUsersInput | evaluation_instancesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: evaluation_instancesCreateManyUsersInputEnvelope
    set?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    disconnect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    delete?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    connect?: evaluation_instancesWhereUniqueInput | evaluation_instancesWhereUniqueInput[]
    update?: evaluation_instancesUpdateWithWhereUniqueWithoutUsersInput | evaluation_instancesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: evaluation_instancesUpdateManyWithWhereWithoutUsersInput | evaluation_instancesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
  }

  export type user_jobsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput> | user_jobsCreateWithoutUsersInput[] | user_jobsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_jobsCreateOrConnectWithoutUsersInput | user_jobsCreateOrConnectWithoutUsersInput[]
    upsert?: user_jobsUpsertWithWhereUniqueWithoutUsersInput | user_jobsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_jobsCreateManyUsersInputEnvelope
    set?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    disconnect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    delete?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    connect?: user_jobsWhereUniqueInput | user_jobsWhereUniqueInput[]
    update?: user_jobsUpdateWithWhereUniqueWithoutUsersInput | user_jobsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_jobsUpdateManyWithWhereWithoutUsersInput | user_jobsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_evaluator_status_status | Enumevaluation_evaluator_status_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_evaluator_status_status[]
    notIn?: $Enums.evaluation_evaluator_status_status[]
    not?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel> | $Enums.evaluation_evaluator_status_status
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumevaluation_evaluator_status_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_evaluator_status_status | Enumevaluation_evaluator_status_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_evaluator_status_status[]
    notIn?: $Enums.evaluation_evaluator_status_status[]
    not?: NestedEnumevaluation_evaluator_status_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_evaluator_status_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_evaluator_status_statusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumevaluation_instances_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_instances_status | Enumevaluation_instances_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_instances_status[]
    notIn?: $Enums.evaluation_instances_status[]
    not?: NestedEnumevaluation_instances_statusFilter<$PrismaModel> | $Enums.evaluation_instances_status
  }

  export type NestedEnumevaluation_instances_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_instances_status | Enumevaluation_instances_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_instances_status[]
    notIn?: $Enums.evaluation_instances_status[]
    not?: NestedEnumevaluation_instances_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_instances_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_instances_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_instances_statusFilter<$PrismaModel>
  }

  export type NestedEnumevaluation_rounds_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_rounds_status | Enumevaluation_rounds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_rounds_status[]
    notIn?: $Enums.evaluation_rounds_status[]
    not?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel> | $Enums.evaluation_rounds_status
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

  export type NestedEnumevaluation_rounds_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.evaluation_rounds_status | Enumevaluation_rounds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.evaluation_rounds_status[]
    notIn?: $Enums.evaluation_rounds_status[]
    not?: NestedEnumevaluation_rounds_statusWithAggregatesFilter<$PrismaModel> | $Enums.evaluation_rounds_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel>
    _max?: NestedEnumevaluation_rounds_statusFilter<$PrismaModel>
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

  export type NestedEnumusers_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleFilter<$PrismaModel> | $Enums.users_role
  }

  export type NestedEnumusers_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_role | Enumusers_roleFieldRefInput<$PrismaModel>
    in?: $Enums.users_role[]
    notIn?: $Enums.users_role[]
    not?: NestedEnumusers_roleWithAggregatesFilter<$PrismaModel> | $Enums.users_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumusers_roleFilter<$PrismaModel>
    _max?: NestedEnumusers_roleFilter<$PrismaModel>
  }

  export type jobsCreateWithoutDepartmentsInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutDepartmentsInput = {
    id?: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutDepartmentsInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput>
  }

  export type jobsCreateManyDepartmentsInputEnvelope = {
    data: jobsCreateManyDepartmentsInput | jobsCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutDepartmentsInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsCreateNestedManyWithoutUsersInput
    jobs?: jobsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDepartmentsInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput>
  }

  export type usersCreateManyDepartmentsInputEnvelope = {
    data: usersCreateManyDepartmentsInput | usersCreateManyDepartmentsInput[]
    skipDuplicates?: boolean
  }

  export type jobsUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: jobsWhereUniqueInput
    update: XOR<jobsUpdateWithoutDepartmentsInput, jobsUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<jobsCreateWithoutDepartmentsInput, jobsUncheckedCreateWithoutDepartmentsInput>
  }

  export type jobsUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: jobsWhereUniqueInput
    data: XOR<jobsUpdateWithoutDepartmentsInput, jobsUncheckedUpdateWithoutDepartmentsInput>
  }

  export type jobsUpdateManyWithWhereWithoutDepartmentsInput = {
    where: jobsScalarWhereInput
    data: XOR<jobsUpdateManyMutationInput, jobsUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type jobsScalarWhereInput = {
    AND?: jobsScalarWhereInput | jobsScalarWhereInput[]
    OR?: jobsScalarWhereInput[]
    NOT?: jobsScalarWhereInput | jobsScalarWhereInput[]
    id?: IntFilter<"jobs"> | number
    department_id?: IntFilter<"jobs"> | number
    title?: StringFilter<"jobs"> | string
    job_level?: IntNullableFilter<"jobs"> | number | null
    description?: StringNullableFilter<"jobs"> | string | null
    created_at?: DateTimeFilter<"jobs"> | Date | string
  }

  export type usersUpsertWithWhereUniqueWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutDepartmentsInput, usersUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<usersCreateWithoutDepartmentsInput, usersUncheckedCreateWithoutDepartmentsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutDepartmentsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutDepartmentsInput, usersUncheckedUpdateWithoutDepartmentsInput>
  }

  export type usersUpdateManyWithWhereWithoutDepartmentsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutDepartmentsInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<"users"> | number
    prefix?: StringNullableFilter<"users"> | string | null
    firstname?: StringFilter<"users"> | string
    lastname?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: Enumusers_roleFilter<"users"> | $Enums.users_role
    department_id?: IntNullableFilter<"users"> | number | null
    job_id?: IntNullableFilter<"users"> | number | null
    profile_image?: StringNullableFilter<"users"> | string | null
    line_user_id?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type evaluation_criteriaCreateWithoutOther_evaluation_criteriaInput = {
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria?: evaluation_criteriaCreateNestedOneWithoutOther_evaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUncheckedCreateWithoutOther_evaluation_criteriaInput = {
    id?: number
    parent_id?: number | null
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaCreateOrConnectWithoutOther_evaluation_criteriaInput = {
    where: evaluation_criteriaWhereUniqueInput
    create: XOR<evaluation_criteriaCreateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutOther_evaluation_criteriaInput>
  }

  export type evaluation_criteriaCreateWithoutEvaluation_criteriaInput = {
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    other_evaluation_criteria?: evaluation_criteriaCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput = {
    id?: number
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaCreateOrConnectWithoutEvaluation_criteriaInput = {
    where: evaluation_criteriaWhereUniqueInput
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteriaCreateManyEvaluation_criteriaInputEnvelope = {
    data: evaluation_criteriaCreateManyEvaluation_criteriaInput | evaluation_criteriaCreateManyEvaluation_criteriaInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput = {
    staff_input_text?: string | null
    staff_attachment?: string | null
    evaluation_instances: evaluation_instancesCreateNestedOneWithoutEvaluation_criteria_inputsInput
  }

  export type evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput = {
    id?: number
    evaluation_instance_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_criteriaInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    create: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteria_inputsCreateManyEvaluation_criteriaInputEnvelope = {
    data: evaluation_criteria_inputsCreateManyEvaluation_criteriaInput | evaluation_criteria_inputsCreateManyEvaluation_criteriaInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput = {
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
    evaluation_evaluator_status: evaluation_evaluator_statusCreateNestedOneWithoutEvaluation_evaluator_scoresInput
  }

  export type evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput = {
    id?: number
    evaluation_evaluator_status_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_criteriaInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    create: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_evaluator_scoresCreateManyEvaluation_criteriaInputEnvelope = {
    data: evaluation_evaluator_scoresCreateManyEvaluation_criteriaInput | evaluation_evaluator_scoresCreateManyEvaluation_criteriaInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_criteriaUpsertWithoutOther_evaluation_criteriaInput = {
    update: XOR<evaluation_criteriaUpdateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedUpdateWithoutOther_evaluation_criteriaInput>
    create: XOR<evaluation_criteriaCreateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutOther_evaluation_criteriaInput>
    where?: evaluation_criteriaWhereInput
  }

  export type evaluation_criteriaUpdateToOneWithWhereWithoutOther_evaluation_criteriaInput = {
    where?: evaluation_criteriaWhereInput
    data: XOR<evaluation_criteriaUpdateWithoutOther_evaluation_criteriaInput, evaluation_criteriaUncheckedUpdateWithoutOther_evaluation_criteriaInput>
  }

  export type evaluation_criteriaUpdateWithoutOther_evaluation_criteriaInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria?: evaluation_criteriaUpdateOneWithoutOther_evaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateWithoutOther_evaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUpsertWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_criteriaWhereUniqueInput
    update: XOR<evaluation_criteriaUpdateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteriaInput>
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteriaUpdateWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_criteriaWhereUniqueInput
    data: XOR<evaluation_criteriaUpdateWithoutEvaluation_criteriaInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteriaUpdateManyWithWhereWithoutEvaluation_criteriaInput = {
    where: evaluation_criteriaScalarWhereInput
    data: XOR<evaluation_criteriaUpdateManyMutationInput, evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteriaScalarWhereInput = {
    AND?: evaluation_criteriaScalarWhereInput | evaluation_criteriaScalarWhereInput[]
    OR?: evaluation_criteriaScalarWhereInput[]
    NOT?: evaluation_criteriaScalarWhereInput | evaluation_criteriaScalarWhereInput[]
    id?: IntFilter<"evaluation_criteria"> | number
    parent_id?: IntNullableFilter<"evaluation_criteria"> | number | null
    title?: StringFilter<"evaluation_criteria"> | string
    description?: StringNullableFilter<"evaluation_criteria"> | string | null
    max_score?: DecimalFilter<"evaluation_criteria"> | Decimal | DecimalJsLike | number | string
    sort_order?: IntNullableFilter<"evaluation_criteria"> | number | null
    created_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_criteria"> | Date | string
  }

  export type evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    update: XOR<evaluation_criteria_inputsUpdateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_criteriaInput>
    create: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    data: XOR<evaluation_criteria_inputsUpdateWithoutEvaluation_criteriaInput, evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_criteriaInput = {
    where: evaluation_criteria_inputsScalarWhereInput
    data: XOR<evaluation_criteria_inputsUpdateManyMutationInput, evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaInput>
  }

  export type evaluation_criteria_inputsScalarWhereInput = {
    AND?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
    OR?: evaluation_criteria_inputsScalarWhereInput[]
    NOT?: evaluation_criteria_inputsScalarWhereInput | evaluation_criteria_inputsScalarWhereInput[]
    id?: IntFilter<"evaluation_criteria_inputs"> | number
    evaluation_instance_id?: IntFilter<"evaluation_criteria_inputs"> | number
    criteria_id?: IntFilter<"evaluation_criteria_inputs"> | number
    staff_input_text?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
    staff_attachment?: StringNullableFilter<"evaluation_criteria_inputs"> | string | null
  }

  export type evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    update: XOR<evaluation_evaluator_scoresUpdateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_criteriaInput>
    create: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_criteriaInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    data: XOR<evaluation_evaluator_scoresUpdateWithoutEvaluation_criteriaInput, evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_criteriaInput>
  }

  export type evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_criteriaInput = {
    where: evaluation_evaluator_scoresScalarWhereInput
    data: XOR<evaluation_evaluator_scoresUpdateManyMutationInput, evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaInput>
  }

  export type evaluation_evaluator_scoresScalarWhereInput = {
    AND?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
    OR?: evaluation_evaluator_scoresScalarWhereInput[]
    NOT?: evaluation_evaluator_scoresScalarWhereInput | evaluation_evaluator_scoresScalarWhereInput[]
    id?: IntFilter<"evaluation_evaluator_scores"> | number
    evaluation_evaluator_status_id?: IntFilter<"evaluation_evaluator_scores"> | number
    criteria_id?: IntFilter<"evaluation_evaluator_scores"> | number
    score?: DecimalFilter<"evaluation_evaluator_scores"> | Decimal | DecimalJsLike | number | string
    comment?: StringNullableFilter<"evaluation_evaluator_scores"> | string | null
  }

  export type evaluation_criteriaCreateWithoutEvaluation_criteria_inputsInput = {
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria?: evaluation_criteriaCreateNestedOneWithoutOther_evaluation_criteriaInput
    other_evaluation_criteria?: evaluation_criteriaCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUncheckedCreateWithoutEvaluation_criteria_inputsInput = {
    id?: number
    parent_id?: number | null
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaCreateOrConnectWithoutEvaluation_criteria_inputsInput = {
    where: evaluation_criteriaWhereUniqueInput
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_instancesCreateWithoutEvaluation_criteria_inputsInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_rounds: evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput
    users: usersCreateNestedOneWithoutEvaluation_instancesInput
    jobs?: jobsCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateWithoutEvaluation_criteria_inputsInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesCreateOrConnectWithoutEvaluation_criteria_inputsInput = {
    where: evaluation_instancesWhereUniqueInput
    create: XOR<evaluation_instancesCreateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_criteriaUpsertWithoutEvaluation_criteria_inputsInput = {
    update: XOR<evaluation_criteriaUpdateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    where?: evaluation_criteriaWhereInput
  }

  export type evaluation_criteriaUpdateToOneWithWhereWithoutEvaluation_criteria_inputsInput = {
    where?: evaluation_criteriaWhereInput
    data: XOR<evaluation_criteriaUpdateWithoutEvaluation_criteria_inputsInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_criteriaUpdateWithoutEvaluation_criteria_inputsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria?: evaluation_criteriaUpdateOneWithoutOther_evaluation_criteriaNestedInput
    other_evaluation_criteria?: evaluation_criteriaUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteria_inputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_instancesUpsertWithoutEvaluation_criteria_inputsInput = {
    update: XOR<evaluation_instancesUpdateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
    create: XOR<evaluation_instancesCreateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_criteria_inputsInput>
    where?: evaluation_instancesWhereInput
  }

  export type evaluation_instancesUpdateToOneWithWhereWithoutEvaluation_criteria_inputsInput = {
    where?: evaluation_instancesWhereInput
    data: XOR<evaluation_instancesUpdateWithoutEvaluation_criteria_inputsInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_criteria_inputsInput>
  }

  export type evaluation_instancesUpdateWithoutEvaluation_criteria_inputsInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_rounds?: evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    jobs?: jobsUpdateOneWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateWithoutEvaluation_criteria_inputsInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_evaluator_statusCreateWithoutEvaluation_evaluator_scoresInput = {
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    users: usersCreateNestedOneWithoutEvaluation_evaluator_statusInput
    evaluation_instances: evaluation_instancesCreateNestedOneWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_evaluator_scoresInput = {
    id?: number
    evaluation_instance_id: number
    evaluator_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_evaluator_scoresInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    create: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_criteriaCreateWithoutEvaluation_evaluator_scoresInput = {
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria?: evaluation_criteriaCreateNestedOneWithoutOther_evaluation_criteriaInput
    other_evaluation_criteria?: evaluation_criteriaCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaUncheckedCreateWithoutEvaluation_evaluator_scoresInput = {
    id?: number
    parent_id?: number | null
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_criteriaInput
  }

  export type evaluation_criteriaCreateOrConnectWithoutEvaluation_evaluator_scoresInput = {
    where: evaluation_criteriaWhereUniqueInput
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_evaluator_statusUpsertWithoutEvaluation_evaluator_scoresInput = {
    update: XOR<evaluation_evaluator_statusUpdateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
    create: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    where?: evaluation_evaluator_statusWhereInput
  }

  export type evaluation_evaluator_statusUpdateToOneWithWhereWithoutEvaluation_evaluator_scoresInput = {
    where?: evaluation_evaluator_statusWhereInput
    data: XOR<evaluation_evaluator_statusUpdateWithoutEvaluation_evaluator_scoresInput, evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_evaluator_statusUpdateWithoutEvaluation_evaluator_scoresInput = {
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
    evaluation_instances?: evaluation_instancesUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_evaluator_scoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    evaluator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteriaUpsertWithoutEvaluation_evaluator_scoresInput = {
    update: XOR<evaluation_criteriaUpdateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
    create: XOR<evaluation_criteriaCreateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedCreateWithoutEvaluation_evaluator_scoresInput>
    where?: evaluation_criteriaWhereInput
  }

  export type evaluation_criteriaUpdateToOneWithWhereWithoutEvaluation_evaluator_scoresInput = {
    where?: evaluation_criteriaWhereInput
    data: XOR<evaluation_criteriaUpdateWithoutEvaluation_evaluator_scoresInput, evaluation_criteriaUncheckedUpdateWithoutEvaluation_evaluator_scoresInput>
  }

  export type evaluation_criteriaUpdateWithoutEvaluation_evaluator_scoresInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria?: evaluation_criteriaUpdateOneWithoutOther_evaluation_criteriaNestedInput
    other_evaluation_criteria?: evaluation_criteriaUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateWithoutEvaluation_evaluator_scoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput = {
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
    evaluation_criteria: evaluation_criteriaCreateNestedOneWithoutEvaluation_evaluator_scoresInput
  }

  export type evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput = {
    id?: number
    criteria_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_evaluator_scoresCreateOrConnectWithoutEvaluation_evaluator_statusInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    create: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInputEnvelope = {
    data: evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInput | evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutEvaluation_evaluator_statusInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsCreateNestedManyWithoutUsersInput
    departments?: DepartmentsCreateNestedOneWithoutUsersInput
    jobs?: jobsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEvaluation_evaluator_statusInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEvaluation_evaluator_statusInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEvaluation_evaluator_statusInput, usersUncheckedCreateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_instancesCreateWithoutEvaluation_evaluator_statusInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_rounds: evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput
    users: usersCreateNestedOneWithoutEvaluation_instancesInput
    jobs?: jobsCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateWithoutEvaluation_evaluator_statusInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesCreateOrConnectWithoutEvaluation_evaluator_statusInput = {
    where: evaluation_instancesWhereUniqueInput
    create: XOR<evaluation_instancesCreateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedCreateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_evaluator_scoresUpsertWithWhereUniqueWithoutEvaluation_evaluator_statusInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    update: XOR<evaluation_evaluator_scoresUpdateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
    create: XOR<evaluation_evaluator_scoresCreateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedCreateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_evaluator_scoresUpdateWithWhereUniqueWithoutEvaluation_evaluator_statusInput = {
    where: evaluation_evaluator_scoresWhereUniqueInput
    data: XOR<evaluation_evaluator_scoresUpdateWithoutEvaluation_evaluator_statusInput, evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_evaluator_scoresUpdateManyWithWhereWithoutEvaluation_evaluator_statusInput = {
    where: evaluation_evaluator_scoresScalarWhereInput
    data: XOR<evaluation_evaluator_scoresUpdateManyMutationInput, evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusInput>
  }

  export type usersUpsertWithoutEvaluation_evaluator_statusInput = {
    update: XOR<usersUpdateWithoutEvaluation_evaluator_statusInput, usersUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
    create: XOR<usersCreateWithoutEvaluation_evaluator_statusInput, usersUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEvaluation_evaluator_statusInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEvaluation_evaluator_statusInput, usersUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
  }

  export type usersUpdateWithoutEvaluation_evaluator_statusInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_instances?: evaluation_instancesUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUpdateManyWithoutUsersNestedInput
    departments?: DepartmentsUpdateOneWithoutUsersNestedInput
    jobs?: jobsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEvaluation_evaluator_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type evaluation_instancesUpsertWithoutEvaluation_evaluator_statusInput = {
    update: XOR<evaluation_instancesUpdateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
    create: XOR<evaluation_instancesCreateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedCreateWithoutEvaluation_evaluator_statusInput>
    where?: evaluation_instancesWhereInput
  }

  export type evaluation_instancesUpdateToOneWithWhereWithoutEvaluation_evaluator_statusInput = {
    where?: evaluation_instancesWhereInput
    data: XOR<evaluation_instancesUpdateWithoutEvaluation_evaluator_statusInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_evaluator_statusInput>
  }

  export type evaluation_instancesUpdateWithoutEvaluation_evaluator_statusInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_rounds?: evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    jobs?: jobsUpdateOneWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateWithoutEvaluation_evaluator_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type jobsUpsertWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    update: XOR<jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
    create: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type jobsUpsertWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    update: XOR<jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
    create: XOR<jobsCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedCreateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput, jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type jobsUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput = {
    staff_input_text?: string | null
    staff_attachment?: string | null
    evaluation_criteria: evaluation_criteriaCreateNestedOneWithoutEvaluation_criteria_inputsInput
  }

  export type evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput = {
    id?: number
    criteria_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_criteria_inputsCreateOrConnectWithoutEvaluation_instancesInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    create: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type evaluation_criteria_inputsCreateManyEvaluation_instancesInputEnvelope = {
    data: evaluation_criteria_inputsCreateManyEvaluation_instancesInput | evaluation_criteria_inputsCreateManyEvaluation_instancesInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput = {
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_evaluator_statusInput
    users: usersCreateNestedOneWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput = {
    id?: number
    evaluator_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusCreateOrConnectWithoutEvaluation_instancesInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    create: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type evaluation_evaluator_statusCreateManyEvaluation_instancesInputEnvelope = {
    data: evaluation_evaluator_statusCreateManyEvaluation_instancesInput | evaluation_evaluator_statusCreateManyEvaluation_instancesInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_roundsCreateWithoutEvaluation_instancesInput = {
    title: string
    target_score?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.evaluation_rounds_status
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type evaluation_roundsUncheckedCreateWithoutEvaluation_instancesInput = {
    id?: number
    title: string
    target_score?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.evaluation_rounds_status
    start_date?: Date | string | null
    end_date?: Date | string | null
    created_at?: Date | string
  }

  export type evaluation_roundsCreateOrConnectWithoutEvaluation_instancesInput = {
    where: evaluation_roundsWhereUniqueInput
    create: XOR<evaluation_roundsCreateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type usersCreateWithoutEvaluation_instancesInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsCreateNestedManyWithoutUsersInput
    departments?: DepartmentsCreateNestedOneWithoutUsersInput
    jobs?: jobsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutEvaluation_instancesInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutEvaluation_instancesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEvaluation_instancesInput, usersUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type jobsCreateWithoutEvaluation_instancesInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutEvaluation_instancesInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutEvaluation_instancesInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutEvaluation_instancesInput, jobsUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type evaluation_criteria_inputsUpsertWithWhereUniqueWithoutEvaluation_instancesInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    update: XOR<evaluation_criteria_inputsUpdateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_instancesInput>
    create: XOR<evaluation_criteria_inputsCreateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type evaluation_criteria_inputsUpdateWithWhereUniqueWithoutEvaluation_instancesInput = {
    where: evaluation_criteria_inputsWhereUniqueInput
    data: XOR<evaluation_criteria_inputsUpdateWithoutEvaluation_instancesInput, evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type evaluation_criteria_inputsUpdateManyWithWhereWithoutEvaluation_instancesInput = {
    where: evaluation_criteria_inputsScalarWhereInput
    data: XOR<evaluation_criteria_inputsUpdateManyMutationInput, evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesInput>
  }

  export type evaluation_evaluator_statusUpsertWithWhereUniqueWithoutEvaluation_instancesInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    update: XOR<evaluation_evaluator_statusUpdateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_instancesInput>
    create: XOR<evaluation_evaluator_statusCreateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedCreateWithoutEvaluation_instancesInput>
  }

  export type evaluation_evaluator_statusUpdateWithWhereUniqueWithoutEvaluation_instancesInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    data: XOR<evaluation_evaluator_statusUpdateWithoutEvaluation_instancesInput, evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type evaluation_evaluator_statusUpdateManyWithWhereWithoutEvaluation_instancesInput = {
    where: evaluation_evaluator_statusScalarWhereInput
    data: XOR<evaluation_evaluator_statusUpdateManyMutationInput, evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesInput>
  }

  export type evaluation_evaluator_statusScalarWhereInput = {
    AND?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
    OR?: evaluation_evaluator_statusScalarWhereInput[]
    NOT?: evaluation_evaluator_statusScalarWhereInput | evaluation_evaluator_statusScalarWhereInput[]
    id?: IntFilter<"evaluation_evaluator_status"> | number
    evaluation_instance_id?: IntFilter<"evaluation_evaluator_status"> | number
    evaluator_id?: IntFilter<"evaluation_evaluator_status"> | number
    status?: Enumevaluation_evaluator_status_statusFilter<"evaluation_evaluator_status"> | $Enums.evaluation_evaluator_status_status
    total_score?: DecimalNullableFilter<"evaluation_evaluator_status"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_evaluator_status"> | Date | string
  }

  export type evaluation_roundsUpsertWithoutEvaluation_instancesInput = {
    update: XOR<evaluation_roundsUpdateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedUpdateWithoutEvaluation_instancesInput>
    create: XOR<evaluation_roundsCreateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedCreateWithoutEvaluation_instancesInput>
    where?: evaluation_roundsWhereInput
  }

  export type evaluation_roundsUpdateToOneWithWhereWithoutEvaluation_instancesInput = {
    where?: evaluation_roundsWhereInput
    data: XOR<evaluation_roundsUpdateWithoutEvaluation_instancesInput, evaluation_roundsUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type evaluation_roundsUpdateWithoutEvaluation_instancesInput = {
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_roundsUncheckedUpdateWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    target_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: Enumevaluation_rounds_statusFieldUpdateOperationsInput | $Enums.evaluation_rounds_status
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutEvaluation_instancesInput = {
    update: XOR<usersUpdateWithoutEvaluation_instancesInput, usersUncheckedUpdateWithoutEvaluation_instancesInput>
    create: XOR<usersCreateWithoutEvaluation_instancesInput, usersUncheckedCreateWithoutEvaluation_instancesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEvaluation_instancesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEvaluation_instancesInput, usersUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type usersUpdateWithoutEvaluation_instancesInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUpdateManyWithoutUsersNestedInput
    departments?: DepartmentsUpdateOneWithoutUsersNestedInput
    jobs?: jobsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type jobsUpsertWithoutEvaluation_instancesInput = {
    update: XOR<jobsUpdateWithoutEvaluation_instancesInput, jobsUncheckedUpdateWithoutEvaluation_instancesInput>
    create: XOR<jobsCreateWithoutEvaluation_instancesInput, jobsUncheckedCreateWithoutEvaluation_instancesInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutEvaluation_instancesInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutEvaluation_instancesInput, jobsUncheckedUpdateWithoutEvaluation_instancesInput>
  }

  export type jobsUpdateWithoutEvaluation_instancesInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type evaluation_instancesCreateWithoutEvaluation_roundsInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput
    users: usersCreateNestedOneWithoutEvaluation_instancesInput
    jobs?: jobsCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput = {
    id?: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesCreateOrConnectWithoutEvaluation_roundsInput = {
    where: evaluation_instancesWhereUniqueInput
    create: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput>
  }

  export type evaluation_instancesCreateManyEvaluation_roundsInputEnvelope = {
    data: evaluation_instancesCreateManyEvaluation_roundsInput | evaluation_instancesCreateManyEvaluation_roundsInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_instancesUpsertWithWhereUniqueWithoutEvaluation_roundsInput = {
    where: evaluation_instancesWhereUniqueInput
    update: XOR<evaluation_instancesUpdateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_roundsInput>
    create: XOR<evaluation_instancesCreateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedCreateWithoutEvaluation_roundsInput>
  }

  export type evaluation_instancesUpdateWithWhereUniqueWithoutEvaluation_roundsInput = {
    where: evaluation_instancesWhereUniqueInput
    data: XOR<evaluation_instancesUpdateWithoutEvaluation_roundsInput, evaluation_instancesUncheckedUpdateWithoutEvaluation_roundsInput>
  }

  export type evaluation_instancesUpdateManyWithWhereWithoutEvaluation_roundsInput = {
    where: evaluation_instancesScalarWhereInput
    data: XOR<evaluation_instancesUpdateManyMutationInput, evaluation_instancesUncheckedUpdateManyWithoutEvaluation_roundsInput>
  }

  export type evaluation_instancesScalarWhereInput = {
    AND?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
    OR?: evaluation_instancesScalarWhereInput[]
    NOT?: evaluation_instancesScalarWhereInput | evaluation_instancesScalarWhereInput[]
    id?: IntFilter<"evaluation_instances"> | number
    round_id?: IntFilter<"evaluation_instances"> | number
    evaluatee_id?: IntFilter<"evaluation_instances"> | number
    evaluated_job_id?: IntNullableFilter<"evaluation_instances"> | number | null
    status?: Enumevaluation_instances_statusFilter<"evaluation_instances"> | $Enums.evaluation_instances_status
    total_score_average?: DecimalNullableFilter<"evaluation_instances"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFilter<"evaluation_instances"> | Date | string
    updated_at?: DateTimeFilter<"evaluation_instances"> | Date | string
  }

  export type evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    level?: number | null
    created_at?: Date | string
    jobs_evaluation_hierarchies_evaluator_job_idTojobs: jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsInput
  }

  export type evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: number
    evaluator_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    create: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInputEnvelope = {
    data: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput | evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    level?: number | null
    created_at?: Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs: jobsCreateNestedOneWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsInput
  }

  export type evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: number
    evaluatee_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_hierarchiesCreateOrConnectWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    create: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInputEnvelope = {
    data: evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInput | evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_instancesCreateWithoutJobsInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_rounds: evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput
    users: usersCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateWithoutJobsInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesCreateOrConnectWithoutJobsInput = {
    where: evaluation_instancesWhereUniqueInput
    create: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput>
  }

  export type evaluation_instancesCreateManyJobsInputEnvelope = {
    data: evaluation_instancesCreateManyJobsInput | evaluation_instancesCreateManyJobsInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentsCreateWithoutJobsInput = {
    name: string
    created_at?: Date | string
    users?: usersCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUncheckedCreateWithoutJobsInput = {
    id?: number
    name: string
    created_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsCreateOrConnectWithoutJobsInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutJobsInput, DepartmentsUncheckedCreateWithoutJobsInput>
  }

  export type user_jobsCreateWithoutJobsInput = {
    created_at?: Date | string
    users: usersCreateNestedOneWithoutUser_jobsInput
  }

  export type user_jobsUncheckedCreateWithoutJobsInput = {
    id?: number
    user_id: number
    created_at?: Date | string
  }

  export type user_jobsCreateOrConnectWithoutJobsInput = {
    where: user_jobsWhereUniqueInput
    create: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput>
  }

  export type user_jobsCreateManyJobsInputEnvelope = {
    data: user_jobsCreateManyJobsInput | user_jobsCreateManyJobsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutJobsInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsCreateNestedManyWithoutUsersInput
    departments?: DepartmentsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutJobsInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutJobsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
  }

  export type usersCreateManyJobsInputEnvelope = {
    data: usersCreateManyJobsInput | usersCreateManyJobsInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    update: XOR<evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput>
    create: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    data: XOR<evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput, evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    where: evaluation_hierarchiesScalarWhereInput
    data: XOR<evaluation_hierarchiesUpdateManyMutationInput, evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput>
  }

  export type evaluation_hierarchiesScalarWhereInput = {
    AND?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
    OR?: evaluation_hierarchiesScalarWhereInput[]
    NOT?: evaluation_hierarchiesScalarWhereInput | evaluation_hierarchiesScalarWhereInput[]
    id?: IntFilter<"evaluation_hierarchies"> | number
    evaluatee_job_id?: IntFilter<"evaluation_hierarchies"> | number
    evaluator_job_id?: IntFilter<"evaluation_hierarchies"> | number
    level?: IntNullableFilter<"evaluation_hierarchies"> | number | null
    created_at?: DateTimeFilter<"evaluation_hierarchies"> | Date | string
  }

  export type evaluation_hierarchiesUpsertWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    update: XOR<evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput>
    create: XOR<evaluation_hierarchiesCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedCreateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type evaluation_hierarchiesUpdateWithWhereUniqueWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where: evaluation_hierarchiesWhereUniqueInput
    data: XOR<evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput, evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type evaluation_hierarchiesUpdateManyWithWhereWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    where: evaluation_hierarchiesScalarWhereInput
    data: XOR<evaluation_hierarchiesUpdateManyMutationInput, evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput>
  }

  export type evaluation_instancesUpsertWithWhereUniqueWithoutJobsInput = {
    where: evaluation_instancesWhereUniqueInput
    update: XOR<evaluation_instancesUpdateWithoutJobsInput, evaluation_instancesUncheckedUpdateWithoutJobsInput>
    create: XOR<evaluation_instancesCreateWithoutJobsInput, evaluation_instancesUncheckedCreateWithoutJobsInput>
  }

  export type evaluation_instancesUpdateWithWhereUniqueWithoutJobsInput = {
    where: evaluation_instancesWhereUniqueInput
    data: XOR<evaluation_instancesUpdateWithoutJobsInput, evaluation_instancesUncheckedUpdateWithoutJobsInput>
  }

  export type evaluation_instancesUpdateManyWithWhereWithoutJobsInput = {
    where: evaluation_instancesScalarWhereInput
    data: XOR<evaluation_instancesUpdateManyMutationInput, evaluation_instancesUncheckedUpdateManyWithoutJobsInput>
  }

  export type DepartmentsUpsertWithoutJobsInput = {
    update: XOR<DepartmentsUpdateWithoutJobsInput, DepartmentsUncheckedUpdateWithoutJobsInput>
    create: XOR<DepartmentsCreateWithoutJobsInput, DepartmentsUncheckedCreateWithoutJobsInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutJobsInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutJobsInput, DepartmentsUncheckedUpdateWithoutJobsInput>
  }

  export type DepartmentsUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type user_jobsUpsertWithWhereUniqueWithoutJobsInput = {
    where: user_jobsWhereUniqueInput
    update: XOR<user_jobsUpdateWithoutJobsInput, user_jobsUncheckedUpdateWithoutJobsInput>
    create: XOR<user_jobsCreateWithoutJobsInput, user_jobsUncheckedCreateWithoutJobsInput>
  }

  export type user_jobsUpdateWithWhereUniqueWithoutJobsInput = {
    where: user_jobsWhereUniqueInput
    data: XOR<user_jobsUpdateWithoutJobsInput, user_jobsUncheckedUpdateWithoutJobsInput>
  }

  export type user_jobsUpdateManyWithWhereWithoutJobsInput = {
    where: user_jobsScalarWhereInput
    data: XOR<user_jobsUpdateManyMutationInput, user_jobsUncheckedUpdateManyWithoutJobsInput>
  }

  export type user_jobsScalarWhereInput = {
    AND?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
    OR?: user_jobsScalarWhereInput[]
    NOT?: user_jobsScalarWhereInput | user_jobsScalarWhereInput[]
    id?: IntFilter<"user_jobs"> | number
    user_id?: IntFilter<"user_jobs"> | number
    job_id?: IntFilter<"user_jobs"> | number
    created_at?: DateTimeFilter<"user_jobs"> | Date | string
  }

  export type usersUpsertWithWhereUniqueWithoutJobsInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutJobsInput, usersUncheckedUpdateWithoutJobsInput>
    create: XOR<usersCreateWithoutJobsInput, usersUncheckedCreateWithoutJobsInput>
  }

  export type usersUpdateWithWhereUniqueWithoutJobsInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutJobsInput, usersUncheckedUpdateWithoutJobsInput>
  }

  export type usersUpdateManyWithWhereWithoutJobsInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutJobsInput>
  }

  export type usersCreateWithoutUser_jobsInput = {
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutUsersInput
    departments?: DepartmentsCreateNestedOneWithoutUsersInput
    jobs?: jobsCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_jobsInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutUsersInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_jobsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_jobsInput, usersUncheckedCreateWithoutUser_jobsInput>
  }

  export type jobsCreateWithoutUser_jobsInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    users?: usersCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutUser_jobsInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    users?: usersUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutUser_jobsInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutUser_jobsInput, jobsUncheckedCreateWithoutUser_jobsInput>
  }

  export type usersUpsertWithoutUser_jobsInput = {
    update: XOR<usersUpdateWithoutUser_jobsInput, usersUncheckedUpdateWithoutUser_jobsInput>
    create: XOR<usersCreateWithoutUser_jobsInput, usersUncheckedCreateWithoutUser_jobsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_jobsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_jobsInput, usersUncheckedUpdateWithoutUser_jobsInput>
  }

  export type usersUpdateWithoutUser_jobsInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutUsersNestedInput
    departments?: DepartmentsUpdateOneWithoutUsersNestedInput
    jobs?: jobsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_jobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type jobsUpsertWithoutUser_jobsInput = {
    update: XOR<jobsUpdateWithoutUser_jobsInput, jobsUncheckedUpdateWithoutUser_jobsInput>
    create: XOR<jobsCreateWithoutUser_jobsInput, jobsUncheckedCreateWithoutUser_jobsInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutUser_jobsInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutUser_jobsInput, jobsUncheckedUpdateWithoutUser_jobsInput>
  }

  export type jobsUpdateWithoutUser_jobsInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutUser_jobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type evaluation_evaluator_statusCreateWithoutUsersInput = {
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresCreateNestedManyWithoutEvaluation_evaluator_statusInput
    evaluation_instances: evaluation_instancesCreateNestedOneWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusUncheckedCreateWithoutUsersInput = {
    id?: number
    evaluation_instance_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedCreateNestedManyWithoutEvaluation_evaluator_statusInput
  }

  export type evaluation_evaluator_statusCreateOrConnectWithoutUsersInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    create: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput>
  }

  export type evaluation_evaluator_statusCreateManyUsersInputEnvelope = {
    data: evaluation_evaluator_statusCreateManyUsersInput | evaluation_evaluator_statusCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type evaluation_instancesCreateWithoutUsersInput = {
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_rounds: evaluation_roundsCreateNestedOneWithoutEvaluation_instancesInput
    jobs?: jobsCreateNestedOneWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesUncheckedCreateWithoutUsersInput = {
    id?: number
    round_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedCreateNestedManyWithoutEvaluation_instancesInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedCreateNestedManyWithoutEvaluation_instancesInput
  }

  export type evaluation_instancesCreateOrConnectWithoutUsersInput = {
    where: evaluation_instancesWhereUniqueInput
    create: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput>
  }

  export type evaluation_instancesCreateManyUsersInputEnvelope = {
    data: evaluation_instancesCreateManyUsersInput | evaluation_instancesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_jobsCreateWithoutUsersInput = {
    created_at?: Date | string
    jobs: jobsCreateNestedOneWithoutUser_jobsInput
  }

  export type user_jobsUncheckedCreateWithoutUsersInput = {
    id?: number
    job_id: number
    created_at?: Date | string
  }

  export type user_jobsCreateOrConnectWithoutUsersInput = {
    where: user_jobsWhereUniqueInput
    create: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput>
  }

  export type user_jobsCreateManyUsersInputEnvelope = {
    data: user_jobsCreateManyUsersInput | user_jobsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentsCreateWithoutUsersInput = {
    name: string
    created_at?: Date | string
    jobs?: jobsCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    created_at?: Date | string
    jobs?: jobsUncheckedCreateNestedManyWithoutDepartmentsInput
  }

  export type DepartmentsCreateOrConnectWithoutUsersInput = {
    where: DepartmentsWhereUniqueInput
    create: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
  }

  export type jobsCreateWithoutUsersInput = {
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesCreateNestedManyWithoutJobsInput
    departments: DepartmentsCreateNestedOneWithoutJobsInput
    user_jobs?: user_jobsCreateNestedManyWithoutJobsInput
  }

  export type jobsUncheckedCreateWithoutUsersInput = {
    id?: number
    department_id: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedCreateNestedManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput
    evaluation_instances?: evaluation_instancesUncheckedCreateNestedManyWithoutJobsInput
    user_jobs?: user_jobsUncheckedCreateNestedManyWithoutJobsInput
  }

  export type jobsCreateOrConnectWithoutUsersInput = {
    where: jobsWhereUniqueInput
    create: XOR<jobsCreateWithoutUsersInput, jobsUncheckedCreateWithoutUsersInput>
  }

  export type evaluation_evaluator_statusUpsertWithWhereUniqueWithoutUsersInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    update: XOR<evaluation_evaluator_statusUpdateWithoutUsersInput, evaluation_evaluator_statusUncheckedUpdateWithoutUsersInput>
    create: XOR<evaluation_evaluator_statusCreateWithoutUsersInput, evaluation_evaluator_statusUncheckedCreateWithoutUsersInput>
  }

  export type evaluation_evaluator_statusUpdateWithWhereUniqueWithoutUsersInput = {
    where: evaluation_evaluator_statusWhereUniqueInput
    data: XOR<evaluation_evaluator_statusUpdateWithoutUsersInput, evaluation_evaluator_statusUncheckedUpdateWithoutUsersInput>
  }

  export type evaluation_evaluator_statusUpdateManyWithWhereWithoutUsersInput = {
    where: evaluation_evaluator_statusScalarWhereInput
    data: XOR<evaluation_evaluator_statusUpdateManyMutationInput, evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersInput>
  }

  export type evaluation_instancesUpsertWithWhereUniqueWithoutUsersInput = {
    where: evaluation_instancesWhereUniqueInput
    update: XOR<evaluation_instancesUpdateWithoutUsersInput, evaluation_instancesUncheckedUpdateWithoutUsersInput>
    create: XOR<evaluation_instancesCreateWithoutUsersInput, evaluation_instancesUncheckedCreateWithoutUsersInput>
  }

  export type evaluation_instancesUpdateWithWhereUniqueWithoutUsersInput = {
    where: evaluation_instancesWhereUniqueInput
    data: XOR<evaluation_instancesUpdateWithoutUsersInput, evaluation_instancesUncheckedUpdateWithoutUsersInput>
  }

  export type evaluation_instancesUpdateManyWithWhereWithoutUsersInput = {
    where: evaluation_instancesScalarWhereInput
    data: XOR<evaluation_instancesUpdateManyMutationInput, evaluation_instancesUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_jobsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_jobsWhereUniqueInput
    update: XOR<user_jobsUpdateWithoutUsersInput, user_jobsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_jobsCreateWithoutUsersInput, user_jobsUncheckedCreateWithoutUsersInput>
  }

  export type user_jobsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_jobsWhereUniqueInput
    data: XOR<user_jobsUpdateWithoutUsersInput, user_jobsUncheckedUpdateWithoutUsersInput>
  }

  export type user_jobsUpdateManyWithWhereWithoutUsersInput = {
    where: user_jobsScalarWhereInput
    data: XOR<user_jobsUpdateManyMutationInput, user_jobsUncheckedUpdateManyWithoutUsersInput>
  }

  export type DepartmentsUpsertWithoutUsersInput = {
    update: XOR<DepartmentsUpdateWithoutUsersInput, DepartmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentsCreateWithoutUsersInput, DepartmentsUncheckedCreateWithoutUsersInput>
    where?: DepartmentsWhereInput
  }

  export type DepartmentsUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentsWhereInput
    data: XOR<DepartmentsUpdateWithoutUsersInput, DepartmentsUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: jobsUpdateManyWithoutDepartmentsNestedInput
  }

  export type DepartmentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: jobsUncheckedUpdateManyWithoutDepartmentsNestedInput
  }

  export type jobsUpsertWithoutUsersInput = {
    update: XOR<jobsUpdateWithoutUsersInput, jobsUncheckedUpdateWithoutUsersInput>
    create: XOR<jobsCreateWithoutUsersInput, jobsUncheckedCreateWithoutUsersInput>
    where?: jobsWhereInput
  }

  export type jobsUpdateToOneWithWhereWithoutUsersInput = {
    where?: jobsWhereInput
    data: XOR<jobsUpdateWithoutUsersInput, jobsUncheckedUpdateWithoutUsersInput>
  }

  export type jobsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    departments?: DepartmentsUpdateOneRequiredWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type jobsCreateManyDepartmentsInput = {
    id?: number
    title: string
    job_level?: number | null
    description?: string | null
    created_at?: Date | string
  }

  export type usersCreateManyDepartmentsInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    job_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type jobsUpdateWithoutDepartmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUpdateManyWithoutJobsNestedInput
    users?: usersUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
    evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs?: evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutJobsNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutJobsNestedInput
    users?: usersUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type jobsUncheckedUpdateManyWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    job_level?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpdateWithoutDepartmentsInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUpdateManyWithoutUsersNestedInput
    jobs?: jobsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    job_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteriaCreateManyEvaluation_criteriaInput = {
    id?: number
    title: string
    description?: string | null
    max_score?: Decimal | DecimalJsLike | number | string
    sort_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_criteria_inputsCreateManyEvaluation_criteriaInput = {
    id?: number
    evaluation_instance_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_evaluator_scoresCreateManyEvaluation_criteriaInput = {
    id?: number
    evaluation_evaluator_status_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_criteriaUpdateWithoutEvaluation_criteriaInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    other_evaluation_criteria?: evaluation_criteriaUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    other_evaluation_criteria?: evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaNestedInput
  }

  export type evaluation_criteriaUncheckedUpdateManyWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    max_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sort_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_criteria_inputsUpdateWithoutEvaluation_criteriaInput = {
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_instances?: evaluation_instancesUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput
  }

  export type evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresUpdateWithoutEvaluation_criteriaInput = {
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput
  }

  export type evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_evaluator_status_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_criteriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_evaluator_status_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresCreateManyEvaluation_evaluator_statusInput = {
    id?: number
    criteria_id: number
    score?: Decimal | DecimalJsLike | number | string
    comment?: string | null
  }

  export type evaluation_evaluator_scoresUpdateWithoutEvaluation_evaluator_statusInput = {
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_criteria?: evaluation_criteriaUpdateOneRequiredWithoutEvaluation_evaluator_scoresNestedInput
  }

  export type evaluation_evaluator_scoresUncheckedUpdateWithoutEvaluation_evaluator_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusInput = {
    id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_criteria_inputsCreateManyEvaluation_instancesInput = {
    id?: number
    criteria_id: number
    staff_input_text?: string | null
    staff_attachment?: string | null
  }

  export type evaluation_evaluator_statusCreateManyEvaluation_instancesInput = {
    id?: number
    evaluator_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_criteria_inputsUpdateWithoutEvaluation_instancesInput = {
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
    evaluation_criteria?: evaluation_criteriaUpdateOneRequiredWithoutEvaluation_criteria_inputsNestedInput
  }

  export type evaluation_criteria_inputsUncheckedUpdateWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    criteria_id?: IntFieldUpdateOperationsInput | number
    staff_input_text?: NullableStringFieldUpdateOperationsInput | string | null
    staff_attachment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type evaluation_evaluator_statusUpdateWithoutEvaluation_instancesInput = {
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_evaluator_statusNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluator_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_instancesCreateManyEvaluation_roundsInput = {
    id?: number
    evaluatee_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_instancesUpdateWithoutEvaluation_roundsInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    jobs?: jobsUpdateOneWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateWithoutEvaluation_roundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutEvaluation_roundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: number
    evaluator_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_hierarchiesCreateManyJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: number
    evaluatee_job_id: number
    level?: number | null
    created_at?: Date | string
  }

  export type evaluation_instancesCreateManyJobsInput = {
    id?: number
    round_id: number
    evaluatee_id: number
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_jobsCreateManyJobsInput = {
    id?: number
    user_id: number
    created_at?: Date | string
  }

  export type usersCreateManyJobsInput = {
    id?: number
    prefix?: string | null
    firstname: string
    lastname: string
    username: string
    password: string
    role?: $Enums.users_role
    department_id?: number | null
    profile_image?: string | null
    line_user_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs_evaluation_hierarchies_evaluator_job_idTojobs?: jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobsNestedInput
  }

  export type evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluator_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluatee_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluator_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs_evaluation_hierarchies_evaluatee_job_idTojobs?: jobsUpdateOneRequiredWithoutEvaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobsNestedInput
  }

  export type evaluation_hierarchiesUncheckedUpdateWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_hierarchiesUncheckedUpdateManyWithoutJobs_evaluation_hierarchies_evaluator_job_idTojobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluatee_job_id?: IntFieldUpdateOperationsInput | number
    level?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_instancesUpdateWithoutJobsInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_rounds?: evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    users?: usersUpdateOneRequiredWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluatee_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsUpdateWithoutJobsInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutUser_jobsNestedInput
  }

  export type user_jobsUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsUncheckedUpdateManyWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpdateWithoutJobsInput = {
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUpdateManyWithoutUsersNestedInput
    departments?: DepartmentsUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersNestedInput
    evaluation_instances?: evaluation_instancesUncheckedUpdateManyWithoutUsersNestedInput
    user_jobs?: user_jobsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prefix?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumusers_roleFieldUpdateOperationsInput | $Enums.users_role
    department_id?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image?: NullableStringFieldUpdateOperationsInput | string | null
    line_user_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_evaluator_statusCreateManyUsersInput = {
    id?: number
    evaluation_instance_id: number
    status?: $Enums.evaluation_evaluator_status_status
    total_score?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type evaluation_instancesCreateManyUsersInput = {
    id?: number
    round_id: number
    evaluated_job_id?: number | null
    status?: $Enums.evaluation_instances_status
    total_score_average?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type user_jobsCreateManyUsersInput = {
    id?: number
    job_id: number
    created_at?: Date | string
  }

  export type evaluation_evaluator_statusUpdateWithoutUsersInput = {
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUpdateManyWithoutEvaluation_evaluator_statusNestedInput
    evaluation_instances?: evaluation_instancesUpdateOneRequiredWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_evaluator_scores?: evaluation_evaluator_scoresUncheckedUpdateManyWithoutEvaluation_evaluator_statusNestedInput
  }

  export type evaluation_evaluator_statusUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    evaluation_instance_id?: IntFieldUpdateOperationsInput | number
    status?: Enumevaluation_evaluator_status_statusFieldUpdateOperationsInput | $Enums.evaluation_evaluator_status_status
    total_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluation_instancesUpdateWithoutUsersInput = {
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_rounds?: evaluation_roundsUpdateOneRequiredWithoutEvaluation_instancesNestedInput
    jobs?: jobsUpdateOneWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation_criteria_inputs?: evaluation_criteria_inputsUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
    evaluation_evaluator_status?: evaluation_evaluator_statusUncheckedUpdateManyWithoutEvaluation_instancesNestedInput
  }

  export type evaluation_instancesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    round_id?: IntFieldUpdateOperationsInput | number
    evaluated_job_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: Enumevaluation_instances_statusFieldUpdateOperationsInput | $Enums.evaluation_instances_status
    total_score_average?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsUpdateWithoutUsersInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: jobsUpdateOneRequiredWithoutUser_jobsNestedInput
  }

  export type user_jobsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_jobsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    job_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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