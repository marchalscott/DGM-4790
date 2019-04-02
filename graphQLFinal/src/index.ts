import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

// User APIs
server.post("/create/user", async (req, res) => {
  // Get our input arguments
  const { name, email} = req.body;

  // Use the createUser API from prisma client
  try {
    const user = await prisma.createUser({
      name,
      email
    });

    return res.send(user).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

server.get("/user/:id", async (req, res) => {
  const userId = req.params.id;
  // Use the user API from prisma client
  try {
    const user = await prisma.user({
      id: userId
    });

    return res.send(user).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

// Post APIs
server.post("/create/draft", async (req, res) => {
  const { title, authorId } = req.body;
  // Use the createPost API from prisma client
  try {
    const draftPost = await prisma.createPost({
      title,
      author: {
        connect: {
          id: authorId
        }
      }
    });

    return res.send(draftPost).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

server.post("/post/publish/:id", async (req, res) => {
  const postId = req.params.id;
  // Use the updatePost API from prisma client
  try {
    const publishedPost = await prisma.updatePost({
      where: {
        id: postId
      },
      data: {
        published: true
      }
    });

    return res.send(publishedPost).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

server.get("/post/:id", async (req, res) => {
  const postId = req.params.id;
  // Use the post API from prisma client
  try {
    const post = await prisma.post({
      id: postId
    });

    const author = await prisma
      .post({
        id: postId
      })
      .author();

    return res
      .send({
        ...post,
        author
      })
      .status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

server.get("/posts", async (_req, res) => {
  // Use the posts API from prisma client
  try {
    const posts = await prisma.posts({
      where: {
        published: true
      }
    });

    return res.send(posts).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});
server.get("/drafts", async (_req, res) => {
  // Use the posts API from prisma client
  try {
    const posts = await prisma.posts({
      where: {
        published: false
      }
    });

    return res.send(posts).status(200);
  } catch (e) {
    console.error(e);

    return res.sendStatus(500);
  }
});

server.listen(1337, () => {
  console.log("Listening on http://localhost:1337");
});