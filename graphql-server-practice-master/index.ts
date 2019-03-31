import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const newTrail = await prisma.createTrails({ name: 'Alice' })
  console.log(`Created new user: ${newTrail.name} (ID: ${newTrail})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.trailses()
  console.log(allTrails)
}

main().catch(e => console.error(e))