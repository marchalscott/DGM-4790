const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {
  const allProducts = await prisma.products()
  console.log(allProducts)
}

main().catch(e => console.error(e))