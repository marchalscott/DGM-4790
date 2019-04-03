const {
	prisma
} = require('./generated/prisma-client')
// A `main` function to use async/await
async function main() {
	//create bike product
	const newProduct = await prisma.createProduct({
		brand: 'Nomad'
	})
	console.log(`Created new product: ${newProduct.brand} (ID: ${newProduct.id})`)
	// Read all products from the database and print them to the console
	const allProducts = await prisma.products()
	console.log(allProducts)
	const product = await prisma.product({
		id: 'cju0nz0xf000q0820os0sjc7h'
	})
	console.log(product)
	const updateProduct = await prisma.updateProduct({
		where: {
			id: 'cju0o7oo6000v0820hxmx1ous'
		},
		data: {
			brand: 'Specialized'
		}
	})
	console.log(updateProduct)
	const deleteProduct = await prisma.deleteProduct({
		id: 'cju0o8pzb001008209zlj9g8c'
	})
	console.log(deleteProduct)
}
main().catch(e => console.error(e))