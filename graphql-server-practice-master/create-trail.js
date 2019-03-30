const { prisma } = require('./generated/prisma-client')
const { trailData } = require('./data/trail-data.js')

// A `main` function so that we can use async/await
async function main() {
    trailData.foreach(async (trail) => {
        const newTrail = await prisma
        .createProduct({
            name: trail.name,
            type: trail.type,
            difficulty: trail.difficulty,
            stars: trail.stars
          })    
    })
 console.log(`Created new trail: ${trail.name} (ID: ${trail.id})`)

}

main().catch(e => console.error(e))