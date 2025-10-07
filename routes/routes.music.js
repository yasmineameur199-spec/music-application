import { createNewMusic, getAllMusic, gettById, updateMusic, deleteMusic } from "../controllers/music.controllers.js";
import { Router } from "express";
import { isAuthenticated, isAdmin, isSubscriptionPaid } from "../middlewares/middlewares.js";
import{ getByArtiste, updateArtiste, deleteArtiste} from "../controllers/artiste.controllers.js";



const musicRouter = Router();
musicRouter.post("/music/", isAuthenticated,isAdmin, createNewMusic);
musicRouter.get("/music/", isAuthenticated, isSubscriptionPaid, getAllMusic);
musicRouter.get("/music/:id", isAuthenticated, isSubscriptionPaid, gettById);
musicRouter.put("/music/:id", isAuthenticated, isAdmin, updateMusic);
musicRouter.delete("/music/:id", isAuthenticated, isAdmin, deleteMusic);
musicRouter.get("/artiste/:artiste", isAuthenticated, isSubscriptionPaid, getByArtiste);
musicRouter.put("/artiste/:id", isAuthenticated, isAdmin, updateArtiste);
musicRouter.delete("/artiste/:artiste", isAuthenticated, isAdmin, deleteArtiste);
export { musicRouter };