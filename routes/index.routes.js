import { artisteRouter } from "./artiste.routes.js";
import { musicRouter } from "./music.routes.js";

import { Router } from "express";
const indexRouter = Router();
indexRouter.use("/", artisteRouter);
indexRouter.use("/", musicRouter);

export { indexRouter };