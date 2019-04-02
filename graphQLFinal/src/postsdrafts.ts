import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

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