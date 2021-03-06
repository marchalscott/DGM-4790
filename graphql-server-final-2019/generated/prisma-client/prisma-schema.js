module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateProduct {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  brand: String!
  name: String!
  price: Float!
  color: String!
  size: String!
  style: String!
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  brand: String!
  name: String!
  price: Float!
  color: String!
  size: String!
  style: String!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  brand_ASC
  brand_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  color_ASC
  color_DESC
  size_ASC
  size_DESC
  style_ASC
  style_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  brand: String!
  name: String!
  price: Float!
  color: String!
  size: String!
  style: String!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  brand: String
  name: String
  price: Float
  color: String
  size: String
  style: String
}

input ProductUpdateManyMutationInput {
  brand: String
  name: String
  price: Float
  color: String
  size: String
  style: String
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  brand: String
  brand_not: String
  brand_in: [String!]
  brand_not_in: [String!]
  brand_lt: String
  brand_lte: String
  brand_gt: String
  brand_gte: String
  brand_contains: String
  brand_not_contains: String
  brand_starts_with: String
  brand_not_starts_with: String
  brand_ends_with: String
  brand_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  price: Float
  price_not: Float
  price_in: [Float!]
  price_not_in: [Float!]
  price_lt: Float
  price_lte: Float
  price_gt: Float
  price_gte: Float
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  size: String
  size_not: String
  size_in: [String!]
  size_not_in: [String!]
  size_lt: String
  size_lte: String
  size_gt: String
  size_gte: String
  size_contains: String
  size_not_contains: String
  size_starts_with: String
  size_not_starts_with: String
  size_ends_with: String
  size_not_ends_with: String
  style: String
  style_not: String
  style_in: [String!]
  style_not_in: [String!]
  style_lt: String
  style_lte: String
  style_gt: String
  style_gte: String
  style_contains: String
  style_not_contains: String
  style_starts_with: String
  style_not_starts_with: String
  style_ends_with: String
  style_not_ends_with: String
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  node(id: ID!): Node
}

type Subscription {
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
}
`
      }
    