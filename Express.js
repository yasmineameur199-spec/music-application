import express from "express";
import { indexRouter } from "./routes/index.routes.js";
import { dataBase } from "./database.js";

const monServeur = express();
monServeur.use(express.urlencoded({ extended: true }));
monServeur.use(express.json());
const PORT = 3000;
monServeur.use(express.json());
monServeur.use("/", indexRouter);

dataBase
  .sync()
  .then(() => {
    monServeur.listen(PORT, () => {
      console.log(`the server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
