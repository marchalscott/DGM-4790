import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

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