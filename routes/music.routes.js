import { createMusic,getAllMusics, getMusicById, updateMusic, deleteMusic } from "../controllers/music.controllers.js";
import { Router } from "express";
const musicRouter = Router();
musicRouter.post("/music/", createMusic);
musicRouter.get("/music/", getAllMusics);
musicRouter.get("/music/:id", getMusicById);
musicRouter.patch("/music/:id", updateMusic);
musicRouter.delete("/music/:id", deleteMusic);
export { musicRouter };