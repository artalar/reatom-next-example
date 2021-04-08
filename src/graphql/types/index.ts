export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Messages = {
  author: Scalars['String'];
  date: Scalars['timestamptz'];
  id: Scalars['Int'];
  text: Scalars['String'];
  user: Users;
};

export type Messages_Aggregate = {
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Fields = {
  avg?: Maybe<Messages_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
  stddev?: Maybe<Messages_Stddev_Order_By>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>;
  sum?: Maybe<Messages_Sum_Order_By>;
  var_pop?: Maybe<Messages_Var_Pop_Order_By>;
  var_samp?: Maybe<Messages_Var_Samp_Order_By>;
  variance?: Maybe<Messages_Variance_Order_By>;
};

export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

export type Messages_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  author?: Maybe<String_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

export type Messages_Constraint =
  | 'messages_pkey';

export type Messages_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Messages_Insert_Input = {
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

export type Messages_Max_Fields = {
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type Messages_Max_Order_By = {
  author?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

export type Messages_Min_Fields = {
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type Messages_Min_Order_By = {
  author?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
};

export type Messages_Mutation_Response = {
  affected_rows: Scalars['Int'];
  returning: Array<Messages>;
};

export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

export type Messages_Order_By = {
  author?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

export type Messages_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export type Messages_Select_Column =
  | 'author'
  | 'date'
  | 'id'
  | 'text';

export type Messages_Set_Input = {
  author?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type Messages_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

export type Messages_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Update_Column =
  | 'author'
  | 'date'
  | 'id'
  | 'text';

export type Messages_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Messages_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

export type Messages_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Mutation_Root = {
  delete_messages?: Maybe<Messages_Mutation_Response>;
  delete_messages_by_pk?: Maybe<Messages>;
  delete_users?: Maybe<Users_Mutation_Response>;
  delete_users_by_pk?: Maybe<Users>;
  insert_messages?: Maybe<Messages_Mutation_Response>;
  insert_messages_one?: Maybe<Messages>;
  insert_users?: Maybe<Users_Mutation_Response>;
  insert_users_one?: Maybe<Users>;
  update_messages?: Maybe<Messages_Mutation_Response>;
  update_messages_by_pk?: Maybe<Messages>;
  update_users?: Maybe<Users_Mutation_Response>;
  update_users_by_pk?: Maybe<Users>;
};


export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootDelete_Users_By_PkArgs = {
  name: Scalars['String'];
};


export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>;
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export type Order_By =
  | 'asc'
  | 'asc_nulls_first'
  | 'asc_nulls_last'
  | 'desc'
  | 'desc_nulls_first'
  | 'desc_nulls_last';

export type Query_Root = {
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  name: Scalars['String'];
};

export type Subscription_Root = {
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  name: Scalars['String'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type Users = {
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  name: Scalars['String'];
  password: Scalars['String'];
  session?: Maybe<Scalars['String']>;
};


export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};

export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  messages?: Maybe<Messages_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  session?: Maybe<String_Comparison_Exp>;
};

export type Users_Constraint =
  | 'users_pkey';

export type Users_Insert_Input = {
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['String']>;
};

export type Users_Max_Fields = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['String']>;
};

export type Users_Max_Order_By = {
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  session?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['String']>;
};

export type Users_Min_Order_By = {
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  session?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  session?: Maybe<Order_By>;
};

export type Users_Pk_Columns_Input = {
  name: Scalars['String'];
};

export type Users_Select_Column =
  | 'name'
  | 'password'
  | 'session';

export type Users_Set_Input = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  session?: Maybe<Scalars['String']>;
};

export type Users_Update_Column =
  | 'name'
  | 'password'
  | 'session';
