import { Artiste } from "../models/artiste.model.js";


export const createArtiste = async (req, res) => {
    try {
        const { nom } = req.body;
        const newArtiste = await Artiste.create({ nom });
        res.status(201).json(newArtiste);
    }   catch (error) {
        res.status(500).json({ error: 'Failed to create artiste' });
    }
};  
export const getAllArtistes = async (req, res) => {
    try {
        const artistes = await Artiste.findAll();
        res.status(200).json(artistes);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve artistes' });
    }

};  

export const getArtisteById = async (req, res) => {
    try {
        const { id } = req.params;

        const artiste = await Artiste.findByPk(id);
        if (artiste) {
            res.status(200).json(artiste);  
        } else {
            res.status(404).json({ error: 'Artiste not found' });
        }   
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve artiste' });
    }   
};

export const updateArtiste = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom } = req.body;
        const artiste = await Artiste.findByPk(id);
        if (artiste) {
            artiste.nom = nom;
            await artiste.save();
            res.status(200).json(artiste);
        } else {
            res.status(404).json({ error: 'Artiste not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update artiste' });
    }   
};  
export const deleteArtiste = async (req, res) => {
    try {
        const { id } = req.params;  
        const artiste = await Artiste.findByPk(id);
        if (artiste) {
            await artiste.destroy();
            res.status(200).json({ message: 'Artiste deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'Artiste not found' });
        }   

    } catch (error) {
        res.status(500).json({ error: 'Failed to delete artiste' });
    }   
};  

