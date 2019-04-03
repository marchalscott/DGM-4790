const {
	prisma
} = require('./generated/prisma-client')
const {
	bikedata
} = require('./data/bikedata.js')
// A `main` function so that we can use async/await
async function main() {
	bikedata.foreach(async (bike) => {
		const newBike = await prisma.createProduct({
			brand: bike.brand,
			name: bike.name,
			price: bike.price,
			color: bike.color,
			size: bike.size,
			style: bike.style
		})
	})
	console.log(`Created new product: ${newBike.name} (ID: ${newBike.id})`)
}
main().catch(e => console.error(e))