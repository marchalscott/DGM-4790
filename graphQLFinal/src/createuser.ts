import * as express from "express";
import * as bodyParser from "body-parser";
import { prisma } from "./generated/prisma-client";

const server = express();

server.use(bodyParser.json());

// User APIs
server.post("/create/user", async (req, res) => {
  // Get our input arguments
  const { name, email } = req.body;

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

