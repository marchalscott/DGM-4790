const fs = require('fs')
const {
	GraphQLClient
} = require('graphql-request')
const client = new GraphQLClient('http://localhost:4466')
const mutation = `mutation createProduct(
    $brand: String!
    $name: String!
    $price: Float!
    $color: String!
    $size: String!
    $style: String!
) {
    createProduct(data: {
      brand: $brand
      name: $name
      price: $price
      color: $color
      size: $size
      style: $style
    })
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
`
const sampleFiles = ['bikedata.json']
async function main(inputFile) {
	const content = fs.readFileSync(`./seed/${inputFile}`)
	const allProducts = JSON.parse(content)
	allProducts.forEach(async item => {
		const variables = {
			brand: item.brand,
			name: item.name,
			price: item.price,
			color: item.color,
			size: item.size,
			style: item.style,
		}
		await client.request(mutation, variables).then(data => console.log(data)).catch(err => console.log(`${err}`))
	})
}
for (let fileName of sampleFiles) {
	main(fileName).catch(e => console.error(e))
}