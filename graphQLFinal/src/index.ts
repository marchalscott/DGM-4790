import * as express from "express";
import * as bodyParser from "body-parser";

const server = express();

server.use(bodyParser.json());

// User APIs
server.post("/create/user", () => {});
server.get("/user/:id", () => {});

// Post APIs
server.post("/create/draft", () => {});
server.post("/post/publish/:id", () => {});
server.get("/post/:id", () => {});
server.get("/posts", () => {});
server.get("/drafts", () => {});

server.listen(1337, () => {
  console.log("Listening on http://localhost:1337");
});