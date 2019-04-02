import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

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