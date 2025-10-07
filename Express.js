import express from 'express';
import { musicRouter } from './routes/routes.music.js';
const monServeur = express();
const PORT = 3000;
monServeur.use(express.json());
monServeur.use("/", musicRouter);
monServeur.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}` );  
});


