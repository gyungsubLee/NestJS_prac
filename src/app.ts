import express from "express";
import catRouter from "./cats/cats.route.js";

const port = 8000;

class Server {
  private static instance: Server;
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  private setRoute() {
    this.app.use(catRouter);
  }

  private setMiddleware() {
    //* logging middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware");
      next();
    });

    //* json middleware
    this.app.use(express.json());

    this.setRoute();

    //* 404 middleware
    this.app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found" });
    });
  }

  public listen(port: number) {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  }
}

function init() {
  const server = Server.getInstance(); // 🔄 항상 동일 인스턴스
  server.listen(port);
}

init();
