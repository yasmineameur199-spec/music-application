import { createArtiste,getAllArtistes, getArtisteById, updateArtiste, deleteArtiste} from "../controllers/artiste.controllers.js";
import { Router } from "express";

const artisteRouter = Router();
artisteRouter.post("/artiste/", createArtiste);
artisteRouter.get("/artiste/", getAllArtistes);
artisteRouter.get("/artiste/:id", getArtisteById);  
artisteRouter.patch("/artiste/:id", updateArtiste);
artisteRouter.delete("/artiste/:id", deleteArtiste);
export { artisteRouter };
