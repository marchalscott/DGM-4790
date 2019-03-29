const { prisma } = require('./generated/prisma-client')
const { traildata } = require('./data/trail-data.js/index.js')

// A `main` function so that we can use async/await
async function main() {
    traildata.forEach(async (trail) => {
    const newTrail = await prisma.createTrails({
      name: trail.name,
      type: trail.type,
      summary: trail.summary,
      url: trail.url
    })
    console.log(`Created new trail: ${newTrail.name} (ID: ${newTrail.id})`)
    })
}

main().catch(e => console.error(e))