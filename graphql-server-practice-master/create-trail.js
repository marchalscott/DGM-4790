const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Read the previously created user from the database and print their posts to the console
  const postsByUser = await prisma
    .trail({ name: "Rush" })
    .posts()
  console.log(`All trails by that user: ${JSON.stringify(postsByUser)}`)

}

main().catch(e => console.error(e))