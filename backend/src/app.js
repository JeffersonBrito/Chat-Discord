import express from "express";
import routes from "./routes";
import http from "http";
import io from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = io(this.server);
    
    this.middlewares();
    this.routers();
    this.mongo_connect();
  }

  mongo_connect() {
    mongoose.connect(
      "mongodb+srv://admin:admin@cluster0-gdb9o.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    );
  }

  routers() {
    this.io.sockets.on("connection", function(socket) {
      console.log("client connect");
      socket.on("echo", function(data) {
        this.io.sockets.emit("message", data);
      });
    });
    this.app.use((req, res, next) => {
      req.io = this.io;
      console.log('passei aqui');
      next();
    })
    this.app.use(routes)
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }
}

export default new App().server;
