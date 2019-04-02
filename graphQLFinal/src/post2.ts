import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

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