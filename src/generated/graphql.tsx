import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};



export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


export type Flow = {
  __typename?: 'Flow';
  id: Scalars['ID'];
  sender: Scalars['String'];
  receiver: Scalars['String'];
  lastUpdated: Scalars['BigInt'];
  flowRate: Scalars['BigInt'];
  deposit: Scalars['BigInt'];
  owedDeposit: Scalars['BigInt'];
};

export type Flow_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  sender?: Maybe<Scalars['String']>;
  sender_not?: Maybe<Scalars['String']>;
  sender_gt?: Maybe<Scalars['String']>;
  sender_lt?: Maybe<Scalars['String']>;
  sender_gte?: Maybe<Scalars['String']>;
  sender_lte?: Maybe<Scalars['String']>;
  sender_in?: Maybe<Array<Scalars['String']>>;
  sender_not_in?: Maybe<Array<Scalars['String']>>;
  sender_contains?: Maybe<Scalars['String']>;
  sender_not_contains?: Maybe<Scalars['String']>;
  sender_starts_with?: Maybe<Scalars['String']>;
  sender_not_starts_with?: Maybe<Scalars['String']>;
  sender_ends_with?: Maybe<Scalars['String']>;
  sender_not_ends_with?: Maybe<Scalars['String']>;
  receiver?: Maybe<Scalars['String']>;
  receiver_not?: Maybe<Scalars['String']>;
  receiver_gt?: Maybe<Scalars['String']>;
  receiver_lt?: Maybe<Scalars['String']>;
  receiver_gte?: Maybe<Scalars['String']>;
  receiver_lte?: Maybe<Scalars['String']>;
  receiver_in?: Maybe<Array<Scalars['String']>>;
  receiver_not_in?: Maybe<Array<Scalars['String']>>;
  receiver_contains?: Maybe<Scalars['String']>;
  receiver_not_contains?: Maybe<Scalars['String']>;
  receiver_starts_with?: Maybe<Scalars['String']>;
  receiver_not_starts_with?: Maybe<Scalars['String']>;
  receiver_ends_with?: Maybe<Scalars['String']>;
  receiver_not_ends_with?: Maybe<Scalars['String']>;
  lastUpdated?: Maybe<Scalars['BigInt']>;
  lastUpdated_not?: Maybe<Scalars['BigInt']>;
  lastUpdated_gt?: Maybe<Scalars['BigInt']>;
  lastUpdated_lt?: Maybe<Scalars['BigInt']>;
  lastUpdated_gte?: Maybe<Scalars['BigInt']>;
  lastUpdated_lte?: Maybe<Scalars['BigInt']>;
  lastUpdated_in?: Maybe<Array<Scalars['BigInt']>>;
  lastUpdated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  flowRate?: Maybe<Scalars['BigInt']>;
  flowRate_not?: Maybe<Scalars['BigInt']>;
  flowRate_gt?: Maybe<Scalars['BigInt']>;
  flowRate_lt?: Maybe<Scalars['BigInt']>;
  flowRate_gte?: Maybe<Scalars['BigInt']>;
  flowRate_lte?: Maybe<Scalars['BigInt']>;
  flowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  flowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit?: Maybe<Scalars['BigInt']>;
  deposit_not?: Maybe<Scalars['BigInt']>;
  deposit_gt?: Maybe<Scalars['BigInt']>;
  deposit_lt?: Maybe<Scalars['BigInt']>;
  deposit_gte?: Maybe<Scalars['BigInt']>;
  deposit_lte?: Maybe<Scalars['BigInt']>;
  deposit_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  owedDeposit?: Maybe<Scalars['BigInt']>;
  owedDeposit_not?: Maybe<Scalars['BigInt']>;
  owedDeposit_gt?: Maybe<Scalars['BigInt']>;
  owedDeposit_lt?: Maybe<Scalars['BigInt']>;
  owedDeposit_gte?: Maybe<Scalars['BigInt']>;
  owedDeposit_lte?: Maybe<Scalars['BigInt']>;
  owedDeposit_in?: Maybe<Array<Scalars['BigInt']>>;
  owedDeposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum Flow_OrderBy {
  Id = 'id',
  Sender = 'sender',
  Receiver = 'receiver',
  LastUpdated = 'lastUpdated',
  FlowRate = 'flowRate',
  Deposit = 'deposit',
  OwedDeposit = 'owedDeposit'
}

export type Liquidation = {
  __typename?: 'Liquidation';
  id: Scalars['ID'];
  penaltyAccount: Scalars['String'];
  rewardAccount: Scalars['String'];
  deposit: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type Liquidation_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  penaltyAccount?: Maybe<Scalars['String']>;
  penaltyAccount_not?: Maybe<Scalars['String']>;
  penaltyAccount_gt?: Maybe<Scalars['String']>;
  penaltyAccount_lt?: Maybe<Scalars['String']>;
  penaltyAccount_gte?: Maybe<Scalars['String']>;
  penaltyAccount_lte?: Maybe<Scalars['String']>;
  penaltyAccount_in?: Maybe<Array<Scalars['String']>>;
  penaltyAccount_not_in?: Maybe<Array<Scalars['String']>>;
  penaltyAccount_contains?: Maybe<Scalars['String']>;
  penaltyAccount_not_contains?: Maybe<Scalars['String']>;
  penaltyAccount_starts_with?: Maybe<Scalars['String']>;
  penaltyAccount_not_starts_with?: Maybe<Scalars['String']>;
  penaltyAccount_ends_with?: Maybe<Scalars['String']>;
  penaltyAccount_not_ends_with?: Maybe<Scalars['String']>;
  rewardAccount?: Maybe<Scalars['String']>;
  rewardAccount_not?: Maybe<Scalars['String']>;
  rewardAccount_gt?: Maybe<Scalars['String']>;
  rewardAccount_lt?: Maybe<Scalars['String']>;
  rewardAccount_gte?: Maybe<Scalars['String']>;
  rewardAccount_lte?: Maybe<Scalars['String']>;
  rewardAccount_in?: Maybe<Array<Scalars['String']>>;
  rewardAccount_not_in?: Maybe<Array<Scalars['String']>>;
  rewardAccount_contains?: Maybe<Scalars['String']>;
  rewardAccount_not_contains?: Maybe<Scalars['String']>;
  rewardAccount_starts_with?: Maybe<Scalars['String']>;
  rewardAccount_not_starts_with?: Maybe<Scalars['String']>;
  rewardAccount_ends_with?: Maybe<Scalars['String']>;
  rewardAccount_not_ends_with?: Maybe<Scalars['String']>;
  deposit?: Maybe<Scalars['BigInt']>;
  deposit_not?: Maybe<Scalars['BigInt']>;
  deposit_gt?: Maybe<Scalars['BigInt']>;
  deposit_lt?: Maybe<Scalars['BigInt']>;
  deposit_gte?: Maybe<Scalars['BigInt']>;
  deposit_lte?: Maybe<Scalars['BigInt']>;
  deposit_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Liquidation_OrderBy {
  Id = 'id',
  PenaltyAccount = 'penaltyAccount',
  RewardAccount = 'rewardAccount',
  Deposit = 'deposit',
  Timestamp = 'timestamp'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  flow?: Maybe<Flow>;
  flows: Array<Flow>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Liquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Liquidation_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Flow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Flow_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type Subscription = {
  __typename?: 'Subscription';
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  flow?: Maybe<Flow>;
  flows: Array<Flow>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Liquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Liquidation_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Flow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Flow_Filter>;
  block?: Maybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_MetaArgs = {
  block?: Maybe<Block_Height>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type LiquidationQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Liquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
}>;


export type LiquidationQuery = (
  { __typename?: 'Query' }
  & { liquidations: Array<(
    { __typename: 'Liquidation' }
    & Pick<Liquidation, 'id' | 'deposit' | 'penaltyAccount' | 'rewardAccount' | 'timestamp'>
  )> }
);


export const LiquidationDocument = gql`
    query Liquidation($first: Int, $skip: Int, $orderBy: Liquidation_orderBy, $orderDirection: OrderDirection) {
  liquidations(
    first: $first
    skip: $skip
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    id
    deposit
    penaltyAccount
    rewardAccount
    timestamp
    __typename
  }
}
    `;

export function useLiquidationQuery(options: Omit<Urql.UseQueryArgs<LiquidationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LiquidationQuery>({ query: LiquidationDocument, ...options });
};