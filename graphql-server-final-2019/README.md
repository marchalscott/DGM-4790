## Prisma Server

#DataStore
Canyon Bikes datastore contains 25 items.

#### Clone the repository:


## Setup

#### Run the following commands

 npm install
 npm run dockerStart
 npm run deploy
 npm run start
 npm run load - to seed the data from my seed folder


## 3 Query Resolvers
Find/Read all products

query allProducts { 
    products { 
        id 
        brand
        name 
        price 
        color 
        size 
        style 
      } 
    }


Find/Read all products by type

query findProductByType { 
    productsConnection(where: {
        brand_contains: "Santa Cruz"
    })
    {
        edges {
            node {
                id
                brand
            }
        }
    }
    }


Find/Read all products by price.

query findProductByPrice { 
    productsConnection(where: {
        price: 3499
    })
    {
        edges {
            node {
                id
                name
                price
            }
        }
    }
    }


## 3 Mutation Resolvers

Create a product

mutation createProduct { 
    createProduct(
        data: { 
            brand: "Santa Cruz",
            name: "Nomad",
            price: 3499,
            color: "black",
            size: "Medium",
            style: "Enduro"
    }
)
 {
    id
    brand
    name
    price
    color
    size
    style
 }
}


Update a product

mutation updateProduct { 
    updateProduct(where: {
    id: "cju0o8pzb001008209zlj9g8c"
},
data: {
    brand: "Specialized"
    name: "Stumpjumper",
    price: 3999,
    color: "Black",
    size: "Large",
    style: "Enduro"
})
 {
    id
    brand
 }
}


Delete a product

mutation deleteProduct { 
    deleteProduct(where: {
    id: "cju0o7oo6000v0820hxmx1ous"
 })
 {
    id
 }
}

