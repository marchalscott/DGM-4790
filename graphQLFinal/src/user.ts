import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

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