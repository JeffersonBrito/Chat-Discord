import Router from "express";

import authMiddleware from "./app/middlewares/auth";
import indexMiddleware from "./app/middlewares/index";

import ChatController from "./app/controllers/ChatController";

const routes = new Router();

routes.use(indexMiddleware);

routes.get("/message", ChatController.index);
routes.post("/message", ChatController.store);

export default routes;
