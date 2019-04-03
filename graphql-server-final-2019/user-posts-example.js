const {
	prisma
} = require('./generated/prisma-client')
// A `main` function so that we can use async/await
async function main() {
	// Create a new user with a new post
	const newUser = await prisma.createUser({
		name: "Marchal",
		email: "marchal@gmail.io",
		posts: {
			create: [{
				title: "Join Canyon Bikes now and explore more exciting news",
				comments: {
					create: [{
						bodyText: 'I love the Canyon Bike program!'
					}, {
						bodyText: 'Lets ride together!'
					}]
				}
			}, {
				title: "Subscribe to Canyon Bikes weekly for great offers",
			}]
		},
	})
	console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
}
main().catch(e => console.error(e))