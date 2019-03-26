const { prisma } = require('./generated/prisma-client')

// A `main` function so that we can use async/await
async function main() {

  // Create a new user with a new post
  const newUser = await prisma
    .createUser({
      
      name: "Igor",
      email: "igor@yahoo.io",
      posts: {
        create: [{
          title: "Add a trail to our site!",
          comments: {
            create: [{bodyText: 'I loved mountain biking!'}, {bodyText: 'I love mountain biking!'}]
          }
        }, {
          title: "Subscribe to mountain bike trails Weekly for trail news",
        }]
      },
    })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)

  // const allPosts = await prisma.posts()
  // console.log(allPosts)
}

main().catch(e => console.error(e))