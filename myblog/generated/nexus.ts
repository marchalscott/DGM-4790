/**
 * This file was automatically generated by Nexus 0.11.2
 * Do not make changes to this file directly
 */




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostCreateInput: { // input type
    author: NexusGenInputs['UserCreateOneWithoutPostsInput']; // UserCreateOneWithoutPostsInput!
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostCreateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
  }
  PostCreateWithoutAuthorInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title: string; // String!
  }
  PostScalarWhereInput: { // input type
    AND?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    OR?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  PostUpdateInput: { // input type
    author?: NexusGenInputs['UserUpdateOneRequiredWithoutPostsInput'] | null; // UserUpdateOneRequiredWithoutPostsInput
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyDataInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyMutationInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpdateManyWithWhereNestedInput: { // input type
    data: NexusGenInputs['PostUpdateManyDataInput']; // PostUpdateManyDataInput!
    where: NexusGenInputs['PostScalarWhereInput']; // PostScalarWhereInput!
  }
  PostUpdateManyWithoutAuthorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    create?: NexusGenInputs['PostCreateWithoutAuthorInput'][] | null; // [PostCreateWithoutAuthorInput!]
    delete?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    deleteMany?: NexusGenInputs['PostScalarWhereInput'][] | null; // [PostScalarWhereInput!]
    disconnect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    set?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    update?: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany?: NexusGenInputs['PostUpdateManyWithWhereNestedInput'][] | null; // [PostUpdateManyWithWhereNestedInput!]
    upsert?: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'][] | null; // [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  }
  PostUpdateWithWhereUniqueWithoutAuthorInput: { // input type
    data: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostUpdateWithoutAuthorDataInput: { // input type
    content?: string | null; // String
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  PostUpsertWithWhereUniqueWithoutAuthorInput: { // input type
    create: NexusGenInputs['PostCreateWithoutAuthorInput']; // PostCreateWithoutAuthorInput!
    update: NexusGenInputs['PostUpdateWithoutAuthorDataInput']; // PostUpdateWithoutAuthorDataInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    author?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    content?: string | null; // String
    content_contains?: string | null; // String
    content_ends_with?: string | null; // String
    content_gt?: string | null; // String
    content_gte?: string | null; // String
    content_in?: string[] | null; // [String!]
    content_lt?: string | null; // String
    content_lte?: string | null; // String
    content_not?: string | null; // String
    content_not_contains?: string | null; // String
    content_not_ends_with?: string | null; // String
    content_not_in?: string[] | null; // [String!]
    content_not_starts_with?: string | null; // String
    content_starts_with?: string | null; // String
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    published?: boolean | null; // Boolean
    published_not?: boolean | null; // Boolean
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  PostWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateManyWithoutAuthorInput'] | null; // PostCreateManyWithoutAuthorInput
  }
  UserCreateOneWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null; // UserCreateWithoutPostsInput
  }
  UserCreateWithoutPostsInput: { // input type
    email: string; // String!
    name?: string | null; // String
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
    posts?: NexusGenInputs['PostUpdateManyWithoutAuthorInput'] | null; // PostUpdateManyWithoutAuthorInput
  }
  UserUpdateManyMutationInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
  }
  UserUpdateOneRequiredWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null; // UserCreateWithoutPostsInput
    update?: NexusGenInputs['UserUpdateWithoutPostsDataInput'] | null; // UserUpdateWithoutPostsDataInput
    upsert?: NexusGenInputs['UserUpsertWithoutPostsInput'] | null; // UserUpsertWithoutPostsInput
  }
  UserUpdateWithoutPostsDataInput: { // input type
    email?: string | null; // String
    name?: string | null; // String
  }
  UserUpsertWithoutPostsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPostsInput']; // UserCreateWithoutPostsInput!
    update: NexusGenInputs['UserUpdateWithoutPostsDataInput']; // UserUpdateWithoutPostsDataInput!
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    posts_every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    posts_some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  PostOrderByInput: "content_ASC" | "content_DESC" | "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "published_ASC" | "published_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
}

export interface NexusGenRootTypes {
  AggregatePost: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: { // root type
    content?: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  PostConnection: { // root type
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name?: string | null; // String
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PostCreateInput: NexusGenInputs['PostCreateInput'];
  PostCreateManyWithoutAuthorInput: NexusGenInputs['PostCreateManyWithoutAuthorInput'];
  PostCreateWithoutAuthorInput: NexusGenInputs['PostCreateWithoutAuthorInput'];
  PostScalarWhereInput: NexusGenInputs['PostScalarWhereInput'];
  PostUpdateInput: NexusGenInputs['PostUpdateInput'];
  PostUpdateManyDataInput: NexusGenInputs['PostUpdateManyDataInput'];
  PostUpdateManyMutationInput: NexusGenInputs['PostUpdateManyMutationInput'];
  PostUpdateManyWithWhereNestedInput: NexusGenInputs['PostUpdateManyWithWhereNestedInput'];
  PostUpdateManyWithoutAuthorInput: NexusGenInputs['PostUpdateManyWithoutAuthorInput'];
  PostUpdateWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpdateWithWhereUniqueWithoutAuthorInput'];
  PostUpdateWithoutAuthorDataInput: NexusGenInputs['PostUpdateWithoutAuthorDataInput'];
  PostUpsertWithWhereUniqueWithoutAuthorInput: NexusGenInputs['PostUpsertWithWhereUniqueWithoutAuthorInput'];
  PostWhereInput: NexusGenInputs['PostWhereInput'];
  PostWhereUniqueInput: NexusGenInputs['PostWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserCreateOneWithoutPostsInput: NexusGenInputs['UserCreateOneWithoutPostsInput'];
  UserCreateWithoutPostsInput: NexusGenInputs['UserCreateWithoutPostsInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserUpdateOneRequiredWithoutPostsInput: NexusGenInputs['UserUpdateOneRequiredWithoutPostsInput'];
  UserUpdateWithoutPostsDataInput: NexusGenInputs['UserUpdateWithoutPostsDataInput'];
  UserUpsertWithoutPostsInput: NexusGenInputs['UserUpsertWithoutPostsInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  PostOrderByInput: NexusGenEnums['PostOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
}

export interface NexusGenFieldTypes {
  AggregatePost: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post']; // Post!
    createUser: NexusGenRootTypes['User']; // User!
    deleteManyPosts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    deleteUser: NexusGenRootTypes['User'] | null; // User
    updateManyPosts: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updatePost: NexusGenRootTypes['Post'] | null; // Post
    updateUser: NexusGenRootTypes['User'] | null; // User
    upsertPost: NexusGenRootTypes['Post']; // Post!
    upsertUser: NexusGenRootTypes['User']; // User!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    content: string | null; // String
    createdAt: any; // DateTime!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
    updatedAt: any; // DateTime!
  }
  PostConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregatePost']; // AggregatePost!
    edges: NexusGenRootTypes['PostEdge'][]; // [PostEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post']; // Post!
  }
  Query: { // field return type
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    postsConnection: NexusGenRootTypes['PostConnection']; // PostConnection!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string | null; // String
    posts: NexusGenRootTypes['Post'][] | null; // [Post!]
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyPosts: { // args
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deletePost: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    updateManyPosts: { // args
      data: NexusGenInputs['PostUpdateManyMutationInput']; // PostUpdateManyMutationInput!
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    updateManyUsers: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updatePost: { // args
      data: NexusGenInputs['PostUpdateInput']; // PostUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertPost: { // args
      create: NexusGenInputs['PostCreateInput']; // PostCreateInput!
      update: NexusGenInputs['PostUpdateInput']; // PostUpdateInput!
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    upsertUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    post: { // args
      where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    postsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PostOrderByInput'] | null; // PostOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregatePost" | "AggregateUser" | "BatchPayload" | "Mutation" | "PageInfo" | "Post" | "PostConnection" | "PostEdge" | "Query" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "PostCreateInput" | "PostCreateManyWithoutAuthorInput" | "PostCreateWithoutAuthorInput" | "PostScalarWhereInput" | "PostUpdateInput" | "PostUpdateManyDataInput" | "PostUpdateManyMutationInput" | "PostUpdateManyWithWhereNestedInput" | "PostUpdateManyWithoutAuthorInput" | "PostUpdateWithWhereUniqueWithoutAuthorInput" | "PostUpdateWithoutAuthorDataInput" | "PostUpsertWithWhereUniqueWithoutAuthorInput" | "PostWhereInput" | "PostWhereUniqueInput" | "UserCreateInput" | "UserCreateOneWithoutPostsInput" | "UserCreateWithoutPostsInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserUpdateOneRequiredWithoutPostsInput" | "UserUpdateWithoutPostsDataInput" | "UserUpsertWithoutPostsInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "PostOrderByInput" | "UserOrderByInput";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}