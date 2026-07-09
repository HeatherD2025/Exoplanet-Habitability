
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Planet
 * 
 */
export type Planet = $Result.DefaultSelection<Prisma.$PlanetPayload>
/**
 * Model PlanetaryTrait
 * 
 */
export type PlanetaryTrait = $Result.DefaultSelection<Prisma.$PlanetaryTraitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MassType: {
  MEASURED: 'MEASURED',
  CALCULATED: 'CALCULATED',
  UNKNOWN: 'UNKNOWN'
};

export type MassType = (typeof MassType)[keyof typeof MassType]

}

export type MassType = $Enums.MassType

export const MassType: typeof $Enums.MassType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Planets
 * const planets = await prisma.planet.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Planets
   * const planets = await prisma.planet.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.planet`: Exposes CRUD operations for the **Planet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planets
    * const planets = await prisma.planet.findMany()
    * ```
    */
  get planet(): Prisma.PlanetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planetaryTrait`: Exposes CRUD operations for the **PlanetaryTrait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanetaryTraits
    * const planetaryTraits = await prisma.planetaryTrait.findMany()
    * ```
    */
  get planetaryTrait(): Prisma.PlanetaryTraitDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Planet: 'Planet',
    PlanetaryTrait: 'PlanetaryTrait'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "planet" | "planetaryTrait"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Planet: {
        payload: Prisma.$PlanetPayload<ExtArgs>
        fields: Prisma.PlanetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          findFirst: {
            args: Prisma.PlanetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          findMany: {
            args: Prisma.PlanetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>[]
          }
          create: {
            args: Prisma.PlanetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          createMany: {
            args: Prisma.PlanetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>[]
          }
          delete: {
            args: Prisma.PlanetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          update: {
            args: Prisma.PlanetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          deleteMany: {
            args: Prisma.PlanetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>[]
          }
          upsert: {
            args: Prisma.PlanetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetPayload>
          }
          aggregate: {
            args: Prisma.PlanetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanet>
          }
          groupBy: {
            args: Prisma.PlanetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanetCountArgs<ExtArgs>
            result: $Utils.Optional<PlanetCountAggregateOutputType> | number
          }
        }
      }
      PlanetaryTrait: {
        payload: Prisma.$PlanetaryTraitPayload<ExtArgs>
        fields: Prisma.PlanetaryTraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanetaryTraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanetaryTraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          findFirst: {
            args: Prisma.PlanetaryTraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanetaryTraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          findMany: {
            args: Prisma.PlanetaryTraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>[]
          }
          create: {
            args: Prisma.PlanetaryTraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          createMany: {
            args: Prisma.PlanetaryTraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanetaryTraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>[]
          }
          delete: {
            args: Prisma.PlanetaryTraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          update: {
            args: Prisma.PlanetaryTraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          deleteMany: {
            args: Prisma.PlanetaryTraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanetaryTraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanetaryTraitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>[]
          }
          upsert: {
            args: Prisma.PlanetaryTraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanetaryTraitPayload>
          }
          aggregate: {
            args: Prisma.PlanetaryTraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanetaryTrait>
          }
          groupBy: {
            args: Prisma.PlanetaryTraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanetaryTraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanetaryTraitCountArgs<ExtArgs>
            result: $Utils.Optional<PlanetaryTraitCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    planet?: PlanetOmit
    planetaryTrait?: PlanetaryTraitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type PlanetCountOutputType
   */

  export type PlanetCountOutputType = {
    traits: number
  }

  export type PlanetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traits?: boolean | PlanetCountOutputTypeCountTraitsArgs
  }

  // Custom InputTypes
  /**
   * PlanetCountOutputType without action
   */
  export type PlanetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetCountOutputType
     */
    select?: PlanetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanetCountOutputType without action
   */
  export type PlanetCountOutputTypeCountTraitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanetaryTraitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Planet
   */

  export type AggregatePlanet = {
    _count: PlanetCountAggregateOutputType | null
    _avg: PlanetAvgAggregateOutputType | null
    _sum: PlanetSumAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  export type PlanetAvgAggregateOutputType = {
    discoveryYear: number | null
  }

  export type PlanetSumAggregateOutputType = {
    discoveryYear: number | null
  }

  export type PlanetMinAggregateOutputType = {
    id: string | null
    name: string | null
    discoveryYear: number | null
    hostStarName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    discoveryYear: number | null
    hostStarName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetCountAggregateOutputType = {
    id: number
    name: number
    discoveryYear: number
    hostStarName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanetAvgAggregateInputType = {
    discoveryYear?: true
  }

  export type PlanetSumAggregateInputType = {
    discoveryYear?: true
  }

  export type PlanetMinAggregateInputType = {
    id?: true
    name?: true
    discoveryYear?: true
    hostStarName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetMaxAggregateInputType = {
    id?: true
    name?: true
    discoveryYear?: true
    hostStarName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetCountAggregateInputType = {
    id?: true
    name?: true
    discoveryYear?: true
    hostStarName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planet to aggregate.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planets
    **/
    _count?: true | PlanetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanetMaxAggregateInputType
  }

  export type GetPlanetAggregateType<T extends PlanetAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanet[P]>
      : GetScalarType<T[P], AggregatePlanet[P]>
  }




  export type PlanetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanetWhereInput
    orderBy?: PlanetOrderByWithAggregationInput | PlanetOrderByWithAggregationInput[]
    by: PlanetScalarFieldEnum[] | PlanetScalarFieldEnum
    having?: PlanetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanetCountAggregateInputType | true
    _avg?: PlanetAvgAggregateInputType
    _sum?: PlanetSumAggregateInputType
    _min?: PlanetMinAggregateInputType
    _max?: PlanetMaxAggregateInputType
  }

  export type PlanetGroupByOutputType = {
    id: string
    name: string
    discoveryYear: number | null
    hostStarName: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlanetCountAggregateOutputType | null
    _avg: PlanetAvgAggregateOutputType | null
    _sum: PlanetSumAggregateOutputType | null
    _min: PlanetMinAggregateOutputType | null
    _max: PlanetMaxAggregateOutputType | null
  }

  type GetPlanetGroupByPayload<T extends PlanetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanetGroupByOutputType[P]>
            : GetScalarType<T[P], PlanetGroupByOutputType[P]>
        }
      >
    >


  export type PlanetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discoveryYear?: boolean
    hostStarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    traits?: boolean | Planet$traitsArgs<ExtArgs>
    _count?: boolean | PlanetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planet"]>

  export type PlanetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discoveryYear?: boolean
    hostStarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planet"]>

  export type PlanetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    discoveryYear?: boolean
    hostStarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planet"]>

  export type PlanetSelectScalar = {
    id?: boolean
    name?: boolean
    discoveryYear?: boolean
    hostStarName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "discoveryYear" | "hostStarName" | "createdAt" | "updatedAt", ExtArgs["result"]["planet"]>
  export type PlanetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    traits?: boolean | Planet$traitsArgs<ExtArgs>
    _count?: boolean | PlanetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planet"
    objects: {
      traits: Prisma.$PlanetaryTraitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      discoveryYear: number | null
      hostStarName: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planet"]>
    composites: {}
  }

  type PlanetGetPayload<S extends boolean | null | undefined | PlanetDefaultArgs> = $Result.GetResult<Prisma.$PlanetPayload, S>

  type PlanetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanetCountAggregateInputType | true
    }

  export interface PlanetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planet'], meta: { name: 'Planet' } }
    /**
     * Find zero or one Planet that matches the filter.
     * @param {PlanetFindUniqueArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanetFindUniqueArgs>(args: SelectSubset<T, PlanetFindUniqueArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanetFindUniqueOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanetFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanetFindFirstArgs>(args?: SelectSubset<T, PlanetFindFirstArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindFirstOrThrowArgs} args - Arguments to find a Planet
     * @example
     * // Get one Planet
     * const planet = await prisma.planet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanetFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planets
     * const planets = await prisma.planet.findMany()
     * 
     * // Get first 10 Planets
     * const planets = await prisma.planet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planetWithIdOnly = await prisma.planet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanetFindManyArgs>(args?: SelectSubset<T, PlanetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planet.
     * @param {PlanetCreateArgs} args - Arguments to create a Planet.
     * @example
     * // Create one Planet
     * const Planet = await prisma.planet.create({
     *   data: {
     *     // ... data to create a Planet
     *   }
     * })
     * 
     */
    create<T extends PlanetCreateArgs>(args: SelectSubset<T, PlanetCreateArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planets.
     * @param {PlanetCreateManyArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planet = await prisma.planet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanetCreateManyArgs>(args?: SelectSubset<T, PlanetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planets and returns the data saved in the database.
     * @param {PlanetCreateManyAndReturnArgs} args - Arguments to create many Planets.
     * @example
     * // Create many Planets
     * const planet = await prisma.planet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planets and only return the `id`
     * const planetWithIdOnly = await prisma.planet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanetCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Planet.
     * @param {PlanetDeleteArgs} args - Arguments to delete one Planet.
     * @example
     * // Delete one Planet
     * const Planet = await prisma.planet.delete({
     *   where: {
     *     // ... filter to delete one Planet
     *   }
     * })
     * 
     */
    delete<T extends PlanetDeleteArgs>(args: SelectSubset<T, PlanetDeleteArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planet.
     * @param {PlanetUpdateArgs} args - Arguments to update one Planet.
     * @example
     * // Update one Planet
     * const planet = await prisma.planet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanetUpdateArgs>(args: SelectSubset<T, PlanetUpdateArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planets.
     * @param {PlanetDeleteManyArgs} args - Arguments to filter Planets to delete.
     * @example
     * // Delete a few Planets
     * const { count } = await prisma.planet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanetDeleteManyArgs>(args?: SelectSubset<T, PlanetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planets
     * const planet = await prisma.planet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanetUpdateManyArgs>(args: SelectSubset<T, PlanetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planets and returns the data updated in the database.
     * @param {PlanetUpdateManyAndReturnArgs} args - Arguments to update many Planets.
     * @example
     * // Update many Planets
     * const planet = await prisma.planet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Planets and only return the `id`
     * const planetWithIdOnly = await prisma.planet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanetUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Planet.
     * @param {PlanetUpsertArgs} args - Arguments to update or create a Planet.
     * @example
     * // Update or create a Planet
     * const planet = await prisma.planet.upsert({
     *   create: {
     *     // ... data to create a Planet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planet we want to update
     *   }
     * })
     */
    upsert<T extends PlanetUpsertArgs>(args: SelectSubset<T, PlanetUpsertArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetCountArgs} args - Arguments to filter Planets to count.
     * @example
     * // Count the number of Planets
     * const count = await prisma.planet.count({
     *   where: {
     *     // ... the filter for the Planets we want to count
     *   }
     * })
    **/
    count<T extends PlanetCountArgs>(
      args?: Subset<T, PlanetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanetAggregateArgs>(args: Subset<T, PlanetAggregateArgs>): Prisma.PrismaPromise<GetPlanetAggregateType<T>>

    /**
     * Group by Planet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetGroupByArgs} args - Group by arguments.
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
      T extends PlanetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanetGroupByArgs['orderBy'] }
        : { orderBy?: PlanetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planet model
   */
  readonly fields: PlanetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    traits<T extends Planet$traitsArgs<ExtArgs> = {}>(args?: Subset<T, Planet$traitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Planet model
   */
  interface PlanetFieldRefs {
    readonly id: FieldRef<"Planet", 'String'>
    readonly name: FieldRef<"Planet", 'String'>
    readonly discoveryYear: FieldRef<"Planet", 'Int'>
    readonly hostStarName: FieldRef<"Planet", 'String'>
    readonly createdAt: FieldRef<"Planet", 'DateTime'>
    readonly updatedAt: FieldRef<"Planet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Planet findUnique
   */
  export type PlanetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet findUniqueOrThrow
   */
  export type PlanetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet findFirst
   */
  export type PlanetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet findFirstOrThrow
   */
  export type PlanetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planet to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet findMany
   */
  export type PlanetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter, which Planets to fetch.
     */
    where?: PlanetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planets to fetch.
     */
    orderBy?: PlanetOrderByWithRelationInput | PlanetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planets.
     */
    cursor?: PlanetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planets.
     */
    distinct?: PlanetScalarFieldEnum | PlanetScalarFieldEnum[]
  }

  /**
   * Planet create
   */
  export type PlanetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The data needed to create a Planet.
     */
    data: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
  }

  /**
   * Planet createMany
   */
  export type PlanetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planets.
     */
    data: PlanetCreateManyInput | PlanetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planet createManyAndReturn
   */
  export type PlanetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * The data used to create many Planets.
     */
    data: PlanetCreateManyInput | PlanetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planet update
   */
  export type PlanetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The data needed to update a Planet.
     */
    data: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
    /**
     * Choose, which Planet to update.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet updateMany
   */
  export type PlanetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planets.
     */
    data: XOR<PlanetUpdateManyMutationInput, PlanetUncheckedUpdateManyInput>
    /**
     * Filter which Planets to update
     */
    where?: PlanetWhereInput
    /**
     * Limit how many Planets to update.
     */
    limit?: number
  }

  /**
   * Planet updateManyAndReturn
   */
  export type PlanetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * The data used to update Planets.
     */
    data: XOR<PlanetUpdateManyMutationInput, PlanetUncheckedUpdateManyInput>
    /**
     * Filter which Planets to update
     */
    where?: PlanetWhereInput
    /**
     * Limit how many Planets to update.
     */
    limit?: number
  }

  /**
   * Planet upsert
   */
  export type PlanetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * The filter to search for the Planet to update in case it exists.
     */
    where: PlanetWhereUniqueInput
    /**
     * In case the Planet found by the `where` argument doesn't exist, create a new Planet with this data.
     */
    create: XOR<PlanetCreateInput, PlanetUncheckedCreateInput>
    /**
     * In case the Planet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanetUpdateInput, PlanetUncheckedUpdateInput>
  }

  /**
   * Planet delete
   */
  export type PlanetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
    /**
     * Filter which Planet to delete.
     */
    where: PlanetWhereUniqueInput
  }

  /**
   * Planet deleteMany
   */
  export type PlanetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planets to delete
     */
    where?: PlanetWhereInput
    /**
     * Limit how many Planets to delete.
     */
    limit?: number
  }

  /**
   * Planet.traits
   */
  export type Planet$traitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    where?: PlanetaryTraitWhereInput
    orderBy?: PlanetaryTraitOrderByWithRelationInput | PlanetaryTraitOrderByWithRelationInput[]
    cursor?: PlanetaryTraitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanetaryTraitScalarFieldEnum | PlanetaryTraitScalarFieldEnum[]
  }

  /**
   * Planet without action
   */
  export type PlanetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planet
     */
    select?: PlanetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planet
     */
    omit?: PlanetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetInclude<ExtArgs> | null
  }


  /**
   * Model PlanetaryTrait
   */

  export type AggregatePlanetaryTrait = {
    _count: PlanetaryTraitCountAggregateOutputType | null
    _avg: PlanetaryTraitAvgAggregateOutputType | null
    _sum: PlanetaryTraitSumAggregateOutputType | null
    _min: PlanetaryTraitMinAggregateOutputType | null
    _max: PlanetaryTraitMaxAggregateOutputType | null
  }

  export type PlanetaryTraitAvgAggregateOutputType = {
    planetaryMass: Decimal | null
    planetaryRadius: Decimal | null
    stellarFlux: Decimal | null
    orbitalDistance: Decimal | null
  }

  export type PlanetaryTraitSumAggregateOutputType = {
    planetaryMass: Decimal | null
    planetaryRadius: Decimal | null
    stellarFlux: Decimal | null
    orbitalDistance: Decimal | null
  }

  export type PlanetaryTraitMinAggregateOutputType = {
    id: string | null
    planetId: string | null
    planetaryMass: Decimal | null
    planetaryRadius: Decimal | null
    massType: $Enums.MassType | null
    stellarFlux: Decimal | null
    orbitalDistance: Decimal | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetaryTraitMaxAggregateOutputType = {
    id: string | null
    planetId: string | null
    planetaryMass: Decimal | null
    planetaryRadius: Decimal | null
    massType: $Enums.MassType | null
    stellarFlux: Decimal | null
    orbitalDistance: Decimal | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanetaryTraitCountAggregateOutputType = {
    id: number
    planetId: number
    planetaryMass: number
    planetaryRadius: number
    massType: number
    stellarFlux: number
    orbitalDistance: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanetaryTraitAvgAggregateInputType = {
    planetaryMass?: true
    planetaryRadius?: true
    stellarFlux?: true
    orbitalDistance?: true
  }

  export type PlanetaryTraitSumAggregateInputType = {
    planetaryMass?: true
    planetaryRadius?: true
    stellarFlux?: true
    orbitalDistance?: true
  }

  export type PlanetaryTraitMinAggregateInputType = {
    id?: true
    planetId?: true
    planetaryMass?: true
    planetaryRadius?: true
    massType?: true
    stellarFlux?: true
    orbitalDistance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetaryTraitMaxAggregateInputType = {
    id?: true
    planetId?: true
    planetaryMass?: true
    planetaryRadius?: true
    massType?: true
    stellarFlux?: true
    orbitalDistance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanetaryTraitCountAggregateInputType = {
    id?: true
    planetId?: true
    planetaryMass?: true
    planetaryRadius?: true
    massType?: true
    stellarFlux?: true
    orbitalDistance?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanetaryTraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanetaryTrait to aggregate.
     */
    where?: PlanetaryTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanetaryTraits to fetch.
     */
    orderBy?: PlanetaryTraitOrderByWithRelationInput | PlanetaryTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanetaryTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanetaryTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanetaryTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanetaryTraits
    **/
    _count?: true | PlanetaryTraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanetaryTraitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanetaryTraitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanetaryTraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanetaryTraitMaxAggregateInputType
  }

  export type GetPlanetaryTraitAggregateType<T extends PlanetaryTraitAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanetaryTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanetaryTrait[P]>
      : GetScalarType<T[P], AggregatePlanetaryTrait[P]>
  }




  export type PlanetaryTraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanetaryTraitWhereInput
    orderBy?: PlanetaryTraitOrderByWithAggregationInput | PlanetaryTraitOrderByWithAggregationInput[]
    by: PlanetaryTraitScalarFieldEnum[] | PlanetaryTraitScalarFieldEnum
    having?: PlanetaryTraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanetaryTraitCountAggregateInputType | true
    _avg?: PlanetaryTraitAvgAggregateInputType
    _sum?: PlanetaryTraitSumAggregateInputType
    _min?: PlanetaryTraitMinAggregateInputType
    _max?: PlanetaryTraitMaxAggregateInputType
  }

  export type PlanetaryTraitGroupByOutputType = {
    id: string
    planetId: string
    planetaryMass: Decimal | null
    planetaryRadius: Decimal | null
    massType: $Enums.MassType
    stellarFlux: Decimal | null
    orbitalDistance: Decimal | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlanetaryTraitCountAggregateOutputType | null
    _avg: PlanetaryTraitAvgAggregateOutputType | null
    _sum: PlanetaryTraitSumAggregateOutputType | null
    _min: PlanetaryTraitMinAggregateOutputType | null
    _max: PlanetaryTraitMaxAggregateOutputType | null
  }

  type GetPlanetaryTraitGroupByPayload<T extends PlanetaryTraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanetaryTraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanetaryTraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanetaryTraitGroupByOutputType[P]>
            : GetScalarType<T[P], PlanetaryTraitGroupByOutputType[P]>
        }
      >
    >


  export type PlanetaryTraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planetId?: boolean
    planetaryMass?: boolean
    planetaryRadius?: boolean
    massType?: boolean
    stellarFlux?: boolean
    orbitalDistance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planetaryTrait"]>

  export type PlanetaryTraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planetId?: boolean
    planetaryMass?: boolean
    planetaryRadius?: boolean
    massType?: boolean
    stellarFlux?: boolean
    orbitalDistance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planetaryTrait"]>

  export type PlanetaryTraitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planetId?: boolean
    planetaryMass?: boolean
    planetaryRadius?: boolean
    massType?: boolean
    stellarFlux?: boolean
    orbitalDistance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planetaryTrait"]>

  export type PlanetaryTraitSelectScalar = {
    id?: boolean
    planetId?: boolean
    planetaryMass?: boolean
    planetaryRadius?: boolean
    massType?: boolean
    stellarFlux?: boolean
    orbitalDistance?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanetaryTraitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planetId" | "planetaryMass" | "planetaryRadius" | "massType" | "stellarFlux" | "orbitalDistance" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["planetaryTrait"]>
  export type PlanetaryTraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }
  export type PlanetaryTraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }
  export type PlanetaryTraitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planet?: boolean | PlanetDefaultArgs<ExtArgs>
  }

  export type $PlanetaryTraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanetaryTrait"
    objects: {
      planet: Prisma.$PlanetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planetId: string
      planetaryMass: Prisma.Decimal | null
      planetaryRadius: Prisma.Decimal | null
      massType: $Enums.MassType
      stellarFlux: Prisma.Decimal | null
      orbitalDistance: Prisma.Decimal | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planetaryTrait"]>
    composites: {}
  }

  type PlanetaryTraitGetPayload<S extends boolean | null | undefined | PlanetaryTraitDefaultArgs> = $Result.GetResult<Prisma.$PlanetaryTraitPayload, S>

  type PlanetaryTraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanetaryTraitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanetaryTraitCountAggregateInputType | true
    }

  export interface PlanetaryTraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanetaryTrait'], meta: { name: 'PlanetaryTrait' } }
    /**
     * Find zero or one PlanetaryTrait that matches the filter.
     * @param {PlanetaryTraitFindUniqueArgs} args - Arguments to find a PlanetaryTrait
     * @example
     * // Get one PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanetaryTraitFindUniqueArgs>(args: SelectSubset<T, PlanetaryTraitFindUniqueArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanetaryTrait that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanetaryTraitFindUniqueOrThrowArgs} args - Arguments to find a PlanetaryTrait
     * @example
     * // Get one PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanetaryTraitFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanetaryTraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanetaryTrait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitFindFirstArgs} args - Arguments to find a PlanetaryTrait
     * @example
     * // Get one PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanetaryTraitFindFirstArgs>(args?: SelectSubset<T, PlanetaryTraitFindFirstArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanetaryTrait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitFindFirstOrThrowArgs} args - Arguments to find a PlanetaryTrait
     * @example
     * // Get one PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanetaryTraitFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanetaryTraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanetaryTraits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanetaryTraits
     * const planetaryTraits = await prisma.planetaryTrait.findMany()
     * 
     * // Get first 10 PlanetaryTraits
     * const planetaryTraits = await prisma.planetaryTrait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planetaryTraitWithIdOnly = await prisma.planetaryTrait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanetaryTraitFindManyArgs>(args?: SelectSubset<T, PlanetaryTraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanetaryTrait.
     * @param {PlanetaryTraitCreateArgs} args - Arguments to create a PlanetaryTrait.
     * @example
     * // Create one PlanetaryTrait
     * const PlanetaryTrait = await prisma.planetaryTrait.create({
     *   data: {
     *     // ... data to create a PlanetaryTrait
     *   }
     * })
     * 
     */
    create<T extends PlanetaryTraitCreateArgs>(args: SelectSubset<T, PlanetaryTraitCreateArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanetaryTraits.
     * @param {PlanetaryTraitCreateManyArgs} args - Arguments to create many PlanetaryTraits.
     * @example
     * // Create many PlanetaryTraits
     * const planetaryTrait = await prisma.planetaryTrait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanetaryTraitCreateManyArgs>(args?: SelectSubset<T, PlanetaryTraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanetaryTraits and returns the data saved in the database.
     * @param {PlanetaryTraitCreateManyAndReturnArgs} args - Arguments to create many PlanetaryTraits.
     * @example
     * // Create many PlanetaryTraits
     * const planetaryTrait = await prisma.planetaryTrait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanetaryTraits and only return the `id`
     * const planetaryTraitWithIdOnly = await prisma.planetaryTrait.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanetaryTraitCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanetaryTraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanetaryTrait.
     * @param {PlanetaryTraitDeleteArgs} args - Arguments to delete one PlanetaryTrait.
     * @example
     * // Delete one PlanetaryTrait
     * const PlanetaryTrait = await prisma.planetaryTrait.delete({
     *   where: {
     *     // ... filter to delete one PlanetaryTrait
     *   }
     * })
     * 
     */
    delete<T extends PlanetaryTraitDeleteArgs>(args: SelectSubset<T, PlanetaryTraitDeleteArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanetaryTrait.
     * @param {PlanetaryTraitUpdateArgs} args - Arguments to update one PlanetaryTrait.
     * @example
     * // Update one PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanetaryTraitUpdateArgs>(args: SelectSubset<T, PlanetaryTraitUpdateArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanetaryTraits.
     * @param {PlanetaryTraitDeleteManyArgs} args - Arguments to filter PlanetaryTraits to delete.
     * @example
     * // Delete a few PlanetaryTraits
     * const { count } = await prisma.planetaryTrait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanetaryTraitDeleteManyArgs>(args?: SelectSubset<T, PlanetaryTraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanetaryTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanetaryTraits
     * const planetaryTrait = await prisma.planetaryTrait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanetaryTraitUpdateManyArgs>(args: SelectSubset<T, PlanetaryTraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanetaryTraits and returns the data updated in the database.
     * @param {PlanetaryTraitUpdateManyAndReturnArgs} args - Arguments to update many PlanetaryTraits.
     * @example
     * // Update many PlanetaryTraits
     * const planetaryTrait = await prisma.planetaryTrait.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanetaryTraits and only return the `id`
     * const planetaryTraitWithIdOnly = await prisma.planetaryTrait.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanetaryTraitUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanetaryTraitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanetaryTrait.
     * @param {PlanetaryTraitUpsertArgs} args - Arguments to update or create a PlanetaryTrait.
     * @example
     * // Update or create a PlanetaryTrait
     * const planetaryTrait = await prisma.planetaryTrait.upsert({
     *   create: {
     *     // ... data to create a PlanetaryTrait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanetaryTrait we want to update
     *   }
     * })
     */
    upsert<T extends PlanetaryTraitUpsertArgs>(args: SelectSubset<T, PlanetaryTraitUpsertArgs<ExtArgs>>): Prisma__PlanetaryTraitClient<$Result.GetResult<Prisma.$PlanetaryTraitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanetaryTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitCountArgs} args - Arguments to filter PlanetaryTraits to count.
     * @example
     * // Count the number of PlanetaryTraits
     * const count = await prisma.planetaryTrait.count({
     *   where: {
     *     // ... the filter for the PlanetaryTraits we want to count
     *   }
     * })
    **/
    count<T extends PlanetaryTraitCountArgs>(
      args?: Subset<T, PlanetaryTraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanetaryTraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanetaryTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanetaryTraitAggregateArgs>(args: Subset<T, PlanetaryTraitAggregateArgs>): Prisma.PrismaPromise<GetPlanetaryTraitAggregateType<T>>

    /**
     * Group by PlanetaryTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanetaryTraitGroupByArgs} args - Group by arguments.
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
      T extends PlanetaryTraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanetaryTraitGroupByArgs['orderBy'] }
        : { orderBy?: PlanetaryTraitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanetaryTraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanetaryTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanetaryTrait model
   */
  readonly fields: PlanetaryTraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanetaryTrait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanetaryTraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planet<T extends PlanetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanetDefaultArgs<ExtArgs>>): Prisma__PlanetClient<$Result.GetResult<Prisma.$PlanetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanetaryTrait model
   */
  interface PlanetaryTraitFieldRefs {
    readonly id: FieldRef<"PlanetaryTrait", 'String'>
    readonly planetId: FieldRef<"PlanetaryTrait", 'String'>
    readonly planetaryMass: FieldRef<"PlanetaryTrait", 'Decimal'>
    readonly planetaryRadius: FieldRef<"PlanetaryTrait", 'Decimal'>
    readonly massType: FieldRef<"PlanetaryTrait", 'MassType'>
    readonly stellarFlux: FieldRef<"PlanetaryTrait", 'Decimal'>
    readonly orbitalDistance: FieldRef<"PlanetaryTrait", 'Decimal'>
    readonly isDefault: FieldRef<"PlanetaryTrait", 'Boolean'>
    readonly createdAt: FieldRef<"PlanetaryTrait", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanetaryTrait", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanetaryTrait findUnique
   */
  export type PlanetaryTraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter, which PlanetaryTrait to fetch.
     */
    where: PlanetaryTraitWhereUniqueInput
  }

  /**
   * PlanetaryTrait findUniqueOrThrow
   */
  export type PlanetaryTraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter, which PlanetaryTrait to fetch.
     */
    where: PlanetaryTraitWhereUniqueInput
  }

  /**
   * PlanetaryTrait findFirst
   */
  export type PlanetaryTraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter, which PlanetaryTrait to fetch.
     */
    where?: PlanetaryTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanetaryTraits to fetch.
     */
    orderBy?: PlanetaryTraitOrderByWithRelationInput | PlanetaryTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanetaryTraits.
     */
    cursor?: PlanetaryTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanetaryTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanetaryTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanetaryTraits.
     */
    distinct?: PlanetaryTraitScalarFieldEnum | PlanetaryTraitScalarFieldEnum[]
  }

  /**
   * PlanetaryTrait findFirstOrThrow
   */
  export type PlanetaryTraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter, which PlanetaryTrait to fetch.
     */
    where?: PlanetaryTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanetaryTraits to fetch.
     */
    orderBy?: PlanetaryTraitOrderByWithRelationInput | PlanetaryTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanetaryTraits.
     */
    cursor?: PlanetaryTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanetaryTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanetaryTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanetaryTraits.
     */
    distinct?: PlanetaryTraitScalarFieldEnum | PlanetaryTraitScalarFieldEnum[]
  }

  /**
   * PlanetaryTrait findMany
   */
  export type PlanetaryTraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter, which PlanetaryTraits to fetch.
     */
    where?: PlanetaryTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanetaryTraits to fetch.
     */
    orderBy?: PlanetaryTraitOrderByWithRelationInput | PlanetaryTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanetaryTraits.
     */
    cursor?: PlanetaryTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanetaryTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanetaryTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanetaryTraits.
     */
    distinct?: PlanetaryTraitScalarFieldEnum | PlanetaryTraitScalarFieldEnum[]
  }

  /**
   * PlanetaryTrait create
   */
  export type PlanetaryTraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanetaryTrait.
     */
    data: XOR<PlanetaryTraitCreateInput, PlanetaryTraitUncheckedCreateInput>
  }

  /**
   * PlanetaryTrait createMany
   */
  export type PlanetaryTraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanetaryTraits.
     */
    data: PlanetaryTraitCreateManyInput | PlanetaryTraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanetaryTrait createManyAndReturn
   */
  export type PlanetaryTraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * The data used to create many PlanetaryTraits.
     */
    data: PlanetaryTraitCreateManyInput | PlanetaryTraitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanetaryTrait update
   */
  export type PlanetaryTraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanetaryTrait.
     */
    data: XOR<PlanetaryTraitUpdateInput, PlanetaryTraitUncheckedUpdateInput>
    /**
     * Choose, which PlanetaryTrait to update.
     */
    where: PlanetaryTraitWhereUniqueInput
  }

  /**
   * PlanetaryTrait updateMany
   */
  export type PlanetaryTraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanetaryTraits.
     */
    data: XOR<PlanetaryTraitUpdateManyMutationInput, PlanetaryTraitUncheckedUpdateManyInput>
    /**
     * Filter which PlanetaryTraits to update
     */
    where?: PlanetaryTraitWhereInput
    /**
     * Limit how many PlanetaryTraits to update.
     */
    limit?: number
  }

  /**
   * PlanetaryTrait updateManyAndReturn
   */
  export type PlanetaryTraitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * The data used to update PlanetaryTraits.
     */
    data: XOR<PlanetaryTraitUpdateManyMutationInput, PlanetaryTraitUncheckedUpdateManyInput>
    /**
     * Filter which PlanetaryTraits to update
     */
    where?: PlanetaryTraitWhereInput
    /**
     * Limit how many PlanetaryTraits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanetaryTrait upsert
   */
  export type PlanetaryTraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanetaryTrait to update in case it exists.
     */
    where: PlanetaryTraitWhereUniqueInput
    /**
     * In case the PlanetaryTrait found by the `where` argument doesn't exist, create a new PlanetaryTrait with this data.
     */
    create: XOR<PlanetaryTraitCreateInput, PlanetaryTraitUncheckedCreateInput>
    /**
     * In case the PlanetaryTrait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanetaryTraitUpdateInput, PlanetaryTraitUncheckedUpdateInput>
  }

  /**
   * PlanetaryTrait delete
   */
  export type PlanetaryTraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
    /**
     * Filter which PlanetaryTrait to delete.
     */
    where: PlanetaryTraitWhereUniqueInput
  }

  /**
   * PlanetaryTrait deleteMany
   */
  export type PlanetaryTraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanetaryTraits to delete
     */
    where?: PlanetaryTraitWhereInput
    /**
     * Limit how many PlanetaryTraits to delete.
     */
    limit?: number
  }

  /**
   * PlanetaryTrait without action
   */
  export type PlanetaryTraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanetaryTrait
     */
    select?: PlanetaryTraitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanetaryTrait
     */
    omit?: PlanetaryTraitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanetaryTraitInclude<ExtArgs> | null
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


  export const PlanetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discoveryYear: 'discoveryYear',
    hostStarName: 'hostStarName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanetScalarFieldEnum = (typeof PlanetScalarFieldEnum)[keyof typeof PlanetScalarFieldEnum]


  export const PlanetaryTraitScalarFieldEnum: {
    id: 'id',
    planetId: 'planetId',
    planetaryMass: 'planetaryMass',
    planetaryRadius: 'planetaryRadius',
    massType: 'massType',
    stellarFlux: 'stellarFlux',
    orbitalDistance: 'orbitalDistance',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanetaryTraitScalarFieldEnum = (typeof PlanetaryTraitScalarFieldEnum)[keyof typeof PlanetaryTraitScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'MassType'
   */
  export type EnumMassTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MassType'>
    


  /**
   * Reference to a field of type 'MassType[]'
   */
  export type ListEnumMassTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MassType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlanetWhereInput = {
    AND?: PlanetWhereInput | PlanetWhereInput[]
    OR?: PlanetWhereInput[]
    NOT?: PlanetWhereInput | PlanetWhereInput[]
    id?: StringFilter<"Planet"> | string
    name?: StringFilter<"Planet"> | string
    discoveryYear?: IntNullableFilter<"Planet"> | number | null
    hostStarName?: StringNullableFilter<"Planet"> | string | null
    createdAt?: DateTimeFilter<"Planet"> | Date | string
    updatedAt?: DateTimeFilter<"Planet"> | Date | string
    traits?: PlanetaryTraitListRelationFilter
  }

  export type PlanetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discoveryYear?: SortOrderInput | SortOrder
    hostStarName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    traits?: PlanetaryTraitOrderByRelationAggregateInput
  }

  export type PlanetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlanetWhereInput | PlanetWhereInput[]
    OR?: PlanetWhereInput[]
    NOT?: PlanetWhereInput | PlanetWhereInput[]
    discoveryYear?: IntNullableFilter<"Planet"> | number | null
    hostStarName?: StringNullableFilter<"Planet"> | string | null
    createdAt?: DateTimeFilter<"Planet"> | Date | string
    updatedAt?: DateTimeFilter<"Planet"> | Date | string
    traits?: PlanetaryTraitListRelationFilter
  }, "id" | "name">

  export type PlanetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discoveryYear?: SortOrderInput | SortOrder
    hostStarName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanetCountOrderByAggregateInput
    _avg?: PlanetAvgOrderByAggregateInput
    _max?: PlanetMaxOrderByAggregateInput
    _min?: PlanetMinOrderByAggregateInput
    _sum?: PlanetSumOrderByAggregateInput
  }

  export type PlanetScalarWhereWithAggregatesInput = {
    AND?: PlanetScalarWhereWithAggregatesInput | PlanetScalarWhereWithAggregatesInput[]
    OR?: PlanetScalarWhereWithAggregatesInput[]
    NOT?: PlanetScalarWhereWithAggregatesInput | PlanetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Planet"> | string
    name?: StringWithAggregatesFilter<"Planet"> | string
    discoveryYear?: IntNullableWithAggregatesFilter<"Planet"> | number | null
    hostStarName?: StringNullableWithAggregatesFilter<"Planet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Planet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Planet"> | Date | string
  }

  export type PlanetaryTraitWhereInput = {
    AND?: PlanetaryTraitWhereInput | PlanetaryTraitWhereInput[]
    OR?: PlanetaryTraitWhereInput[]
    NOT?: PlanetaryTraitWhereInput | PlanetaryTraitWhereInput[]
    id?: StringFilter<"PlanetaryTrait"> | string
    planetId?: StringFilter<"PlanetaryTrait"> | string
    planetaryMass?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFilter<"PlanetaryTrait"> | $Enums.MassType
    stellarFlux?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFilter<"PlanetaryTrait"> | boolean
    createdAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
    updatedAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
    planet?: XOR<PlanetScalarRelationFilter, PlanetWhereInput>
  }

  export type PlanetaryTraitOrderByWithRelationInput = {
    id?: SortOrder
    planetId?: SortOrder
    planetaryMass?: SortOrderInput | SortOrder
    planetaryRadius?: SortOrderInput | SortOrder
    massType?: SortOrder
    stellarFlux?: SortOrderInput | SortOrder
    orbitalDistance?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planet?: PlanetOrderByWithRelationInput
  }

  export type PlanetaryTraitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanetaryTraitWhereInput | PlanetaryTraitWhereInput[]
    OR?: PlanetaryTraitWhereInput[]
    NOT?: PlanetaryTraitWhereInput | PlanetaryTraitWhereInput[]
    planetId?: StringFilter<"PlanetaryTrait"> | string
    planetaryMass?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFilter<"PlanetaryTrait"> | $Enums.MassType
    stellarFlux?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFilter<"PlanetaryTrait"> | boolean
    createdAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
    updatedAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
    planet?: XOR<PlanetScalarRelationFilter, PlanetWhereInput>
  }, "id">

  export type PlanetaryTraitOrderByWithAggregationInput = {
    id?: SortOrder
    planetId?: SortOrder
    planetaryMass?: SortOrderInput | SortOrder
    planetaryRadius?: SortOrderInput | SortOrder
    massType?: SortOrder
    stellarFlux?: SortOrderInput | SortOrder
    orbitalDistance?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanetaryTraitCountOrderByAggregateInput
    _avg?: PlanetaryTraitAvgOrderByAggregateInput
    _max?: PlanetaryTraitMaxOrderByAggregateInput
    _min?: PlanetaryTraitMinOrderByAggregateInput
    _sum?: PlanetaryTraitSumOrderByAggregateInput
  }

  export type PlanetaryTraitScalarWhereWithAggregatesInput = {
    AND?: PlanetaryTraitScalarWhereWithAggregatesInput | PlanetaryTraitScalarWhereWithAggregatesInput[]
    OR?: PlanetaryTraitScalarWhereWithAggregatesInput[]
    NOT?: PlanetaryTraitScalarWhereWithAggregatesInput | PlanetaryTraitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlanetaryTrait"> | string
    planetId?: StringWithAggregatesFilter<"PlanetaryTrait"> | string
    planetaryMass?: DecimalNullableWithAggregatesFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: DecimalNullableWithAggregatesFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeWithAggregatesFilter<"PlanetaryTrait"> | $Enums.MassType
    stellarFlux?: DecimalNullableWithAggregatesFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: DecimalNullableWithAggregatesFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolWithAggregatesFilter<"PlanetaryTrait"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlanetaryTrait"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanetaryTrait"> | Date | string
  }

  export type PlanetCreateInput = {
    id?: string
    name: string
    discoveryYear?: number | null
    hostStarName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    traits?: PlanetaryTraitCreateNestedManyWithoutPlanetInput
  }

  export type PlanetUncheckedCreateInput = {
    id?: string
    name: string
    discoveryYear?: number | null
    hostStarName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    traits?: PlanetaryTraitUncheckedCreateNestedManyWithoutPlanetInput
  }

  export type PlanetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traits?: PlanetaryTraitUpdateManyWithoutPlanetNestedInput
  }

  export type PlanetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traits?: PlanetaryTraitUncheckedUpdateManyWithoutPlanetNestedInput
  }

  export type PlanetCreateManyInput = {
    id?: string
    name: string
    discoveryYear?: number | null
    hostStarName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitCreateInput = {
    id?: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    planet: PlanetCreateNestedOneWithoutTraitsInput
  }

  export type PlanetaryTraitUncheckedCreateInput = {
    id?: string
    planetId: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetaryTraitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planet?: PlanetUpdateOneRequiredWithoutTraitsNestedInput
  }

  export type PlanetaryTraitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetId?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitCreateManyInput = {
    id?: string
    planetId: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetaryTraitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetId?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PlanetaryTraitListRelationFilter = {
    every?: PlanetaryTraitWhereInput
    some?: PlanetaryTraitWhereInput
    none?: PlanetaryTraitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanetaryTraitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discoveryYear?: SortOrder
    hostStarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetAvgOrderByAggregateInput = {
    discoveryYear?: SortOrder
  }

  export type PlanetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discoveryYear?: SortOrder
    hostStarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discoveryYear?: SortOrder
    hostStarName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetSumOrderByAggregateInput = {
    discoveryYear?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumMassTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MassType | EnumMassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMassTypeFilter<$PrismaModel> | $Enums.MassType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlanetScalarRelationFilter = {
    is?: PlanetWhereInput
    isNot?: PlanetWhereInput
  }

  export type PlanetaryTraitCountOrderByAggregateInput = {
    id?: SortOrder
    planetId?: SortOrder
    planetaryMass?: SortOrder
    planetaryRadius?: SortOrder
    massType?: SortOrder
    stellarFlux?: SortOrder
    orbitalDistance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetaryTraitAvgOrderByAggregateInput = {
    planetaryMass?: SortOrder
    planetaryRadius?: SortOrder
    stellarFlux?: SortOrder
    orbitalDistance?: SortOrder
  }

  export type PlanetaryTraitMaxOrderByAggregateInput = {
    id?: SortOrder
    planetId?: SortOrder
    planetaryMass?: SortOrder
    planetaryRadius?: SortOrder
    massType?: SortOrder
    stellarFlux?: SortOrder
    orbitalDistance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetaryTraitMinOrderByAggregateInput = {
    id?: SortOrder
    planetId?: SortOrder
    planetaryMass?: SortOrder
    planetaryRadius?: SortOrder
    massType?: SortOrder
    stellarFlux?: SortOrder
    orbitalDistance?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanetaryTraitSumOrderByAggregateInput = {
    planetaryMass?: SortOrder
    planetaryRadius?: SortOrder
    stellarFlux?: SortOrder
    orbitalDistance?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type EnumMassTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MassType | EnumMassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMassTypeWithAggregatesFilter<$PrismaModel> | $Enums.MassType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMassTypeFilter<$PrismaModel>
    _max?: NestedEnumMassTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlanetaryTraitCreateNestedManyWithoutPlanetInput = {
    create?: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput> | PlanetaryTraitCreateWithoutPlanetInput[] | PlanetaryTraitUncheckedCreateWithoutPlanetInput[]
    connectOrCreate?: PlanetaryTraitCreateOrConnectWithoutPlanetInput | PlanetaryTraitCreateOrConnectWithoutPlanetInput[]
    createMany?: PlanetaryTraitCreateManyPlanetInputEnvelope
    connect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
  }

  export type PlanetaryTraitUncheckedCreateNestedManyWithoutPlanetInput = {
    create?: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput> | PlanetaryTraitCreateWithoutPlanetInput[] | PlanetaryTraitUncheckedCreateWithoutPlanetInput[]
    connectOrCreate?: PlanetaryTraitCreateOrConnectWithoutPlanetInput | PlanetaryTraitCreateOrConnectWithoutPlanetInput[]
    createMany?: PlanetaryTraitCreateManyPlanetInputEnvelope
    connect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlanetaryTraitUpdateManyWithoutPlanetNestedInput = {
    create?: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput> | PlanetaryTraitCreateWithoutPlanetInput[] | PlanetaryTraitUncheckedCreateWithoutPlanetInput[]
    connectOrCreate?: PlanetaryTraitCreateOrConnectWithoutPlanetInput | PlanetaryTraitCreateOrConnectWithoutPlanetInput[]
    upsert?: PlanetaryTraitUpsertWithWhereUniqueWithoutPlanetInput | PlanetaryTraitUpsertWithWhereUniqueWithoutPlanetInput[]
    createMany?: PlanetaryTraitCreateManyPlanetInputEnvelope
    set?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    disconnect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    delete?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    connect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    update?: PlanetaryTraitUpdateWithWhereUniqueWithoutPlanetInput | PlanetaryTraitUpdateWithWhereUniqueWithoutPlanetInput[]
    updateMany?: PlanetaryTraitUpdateManyWithWhereWithoutPlanetInput | PlanetaryTraitUpdateManyWithWhereWithoutPlanetInput[]
    deleteMany?: PlanetaryTraitScalarWhereInput | PlanetaryTraitScalarWhereInput[]
  }

  export type PlanetaryTraitUncheckedUpdateManyWithoutPlanetNestedInput = {
    create?: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput> | PlanetaryTraitCreateWithoutPlanetInput[] | PlanetaryTraitUncheckedCreateWithoutPlanetInput[]
    connectOrCreate?: PlanetaryTraitCreateOrConnectWithoutPlanetInput | PlanetaryTraitCreateOrConnectWithoutPlanetInput[]
    upsert?: PlanetaryTraitUpsertWithWhereUniqueWithoutPlanetInput | PlanetaryTraitUpsertWithWhereUniqueWithoutPlanetInput[]
    createMany?: PlanetaryTraitCreateManyPlanetInputEnvelope
    set?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    disconnect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    delete?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    connect?: PlanetaryTraitWhereUniqueInput | PlanetaryTraitWhereUniqueInput[]
    update?: PlanetaryTraitUpdateWithWhereUniqueWithoutPlanetInput | PlanetaryTraitUpdateWithWhereUniqueWithoutPlanetInput[]
    updateMany?: PlanetaryTraitUpdateManyWithWhereWithoutPlanetInput | PlanetaryTraitUpdateManyWithWhereWithoutPlanetInput[]
    deleteMany?: PlanetaryTraitScalarWhereInput | PlanetaryTraitScalarWhereInput[]
  }

  export type PlanetCreateNestedOneWithoutTraitsInput = {
    create?: XOR<PlanetCreateWithoutTraitsInput, PlanetUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutTraitsInput
    connect?: PlanetWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumMassTypeFieldUpdateOperationsInput = {
    set?: $Enums.MassType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlanetUpdateOneRequiredWithoutTraitsNestedInput = {
    create?: XOR<PlanetCreateWithoutTraitsInput, PlanetUncheckedCreateWithoutTraitsInput>
    connectOrCreate?: PlanetCreateOrConnectWithoutTraitsInput
    upsert?: PlanetUpsertWithoutTraitsInput
    connect?: PlanetWhereUniqueInput
    update?: XOR<XOR<PlanetUpdateToOneWithWhereWithoutTraitsInput, PlanetUpdateWithoutTraitsInput>, PlanetUncheckedUpdateWithoutTraitsInput>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumMassTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MassType | EnumMassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMassTypeFilter<$PrismaModel> | $Enums.MassType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedEnumMassTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MassType | EnumMassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MassType[] | ListEnumMassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMassTypeWithAggregatesFilter<$PrismaModel> | $Enums.MassType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMassTypeFilter<$PrismaModel>
    _max?: NestedEnumMassTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlanetaryTraitCreateWithoutPlanetInput = {
    id?: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetaryTraitUncheckedCreateWithoutPlanetInput = {
    id?: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetaryTraitCreateOrConnectWithoutPlanetInput = {
    where: PlanetaryTraitWhereUniqueInput
    create: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput>
  }

  export type PlanetaryTraitCreateManyPlanetInputEnvelope = {
    data: PlanetaryTraitCreateManyPlanetInput | PlanetaryTraitCreateManyPlanetInput[]
    skipDuplicates?: boolean
  }

  export type PlanetaryTraitUpsertWithWhereUniqueWithoutPlanetInput = {
    where: PlanetaryTraitWhereUniqueInput
    update: XOR<PlanetaryTraitUpdateWithoutPlanetInput, PlanetaryTraitUncheckedUpdateWithoutPlanetInput>
    create: XOR<PlanetaryTraitCreateWithoutPlanetInput, PlanetaryTraitUncheckedCreateWithoutPlanetInput>
  }

  export type PlanetaryTraitUpdateWithWhereUniqueWithoutPlanetInput = {
    where: PlanetaryTraitWhereUniqueInput
    data: XOR<PlanetaryTraitUpdateWithoutPlanetInput, PlanetaryTraitUncheckedUpdateWithoutPlanetInput>
  }

  export type PlanetaryTraitUpdateManyWithWhereWithoutPlanetInput = {
    where: PlanetaryTraitScalarWhereInput
    data: XOR<PlanetaryTraitUpdateManyMutationInput, PlanetaryTraitUncheckedUpdateManyWithoutPlanetInput>
  }

  export type PlanetaryTraitScalarWhereInput = {
    AND?: PlanetaryTraitScalarWhereInput | PlanetaryTraitScalarWhereInput[]
    OR?: PlanetaryTraitScalarWhereInput[]
    NOT?: PlanetaryTraitScalarWhereInput | PlanetaryTraitScalarWhereInput[]
    id?: StringFilter<"PlanetaryTrait"> | string
    planetId?: StringFilter<"PlanetaryTrait"> | string
    planetaryMass?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFilter<"PlanetaryTrait"> | $Enums.MassType
    stellarFlux?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: DecimalNullableFilter<"PlanetaryTrait"> | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFilter<"PlanetaryTrait"> | boolean
    createdAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
    updatedAt?: DateTimeFilter<"PlanetaryTrait"> | Date | string
  }

  export type PlanetCreateWithoutTraitsInput = {
    id?: string
    name: string
    discoveryYear?: number | null
    hostStarName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetUncheckedCreateWithoutTraitsInput = {
    id?: string
    name: string
    discoveryYear?: number | null
    hostStarName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetCreateOrConnectWithoutTraitsInput = {
    where: PlanetWhereUniqueInput
    create: XOR<PlanetCreateWithoutTraitsInput, PlanetUncheckedCreateWithoutTraitsInput>
  }

  export type PlanetUpsertWithoutTraitsInput = {
    update: XOR<PlanetUpdateWithoutTraitsInput, PlanetUncheckedUpdateWithoutTraitsInput>
    create: XOR<PlanetCreateWithoutTraitsInput, PlanetUncheckedCreateWithoutTraitsInput>
    where?: PlanetWhereInput
  }

  export type PlanetUpdateToOneWithWhereWithoutTraitsInput = {
    where?: PlanetWhereInput
    data: XOR<PlanetUpdateWithoutTraitsInput, PlanetUncheckedUpdateWithoutTraitsInput>
  }

  export type PlanetUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetUncheckedUpdateWithoutTraitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discoveryYear?: NullableIntFieldUpdateOperationsInput | number | null
    hostStarName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitCreateManyPlanetInput = {
    id?: string
    planetaryMass?: Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: Decimal | DecimalJsLike | number | string | null
    massType?: $Enums.MassType
    stellarFlux?: Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: Decimal | DecimalJsLike | number | string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanetaryTraitUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitUncheckedUpdateWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanetaryTraitUncheckedUpdateManyWithoutPlanetInput = {
    id?: StringFieldUpdateOperationsInput | string
    planetaryMass?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planetaryRadius?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    massType?: EnumMassTypeFieldUpdateOperationsInput | $Enums.MassType
    stellarFlux?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orbitalDistance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
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