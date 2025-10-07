const mediatheque =[
  { "id": 1, "titre": "Blinding Lights", "artiste": "The Weeknd" },
  { "id": 2, "titre": "Levitating", "artiste": "Dua Lipa" },
  { "id": 3, "titre": "Shape of You", "artiste": "Ed Sheeran" },
  { "id": 4, "titre": "Save Your Tears", "artiste": "The Weeknd" },
  { "id": 5, "titre": "As It Was", "artiste": "Harry Styles" },
  { "id": 6, "titre": "Dance Monkey", "artiste": "Tones and I" },
  { "id": 7, "titre": "Flowers", "artiste": "Miley Cyrus" },
  { "id": 8, "titre": "Stay", "artiste": "The Kid LAROI & Justin Bieber" },
  { "id": 9, "titre": "Someone Like You", "artiste": "Adele" },
  { "id": 10, "titre": "Bad Guy", "artiste": "Billie Eilish" }
]
function getByArtiste(requette, reponse) {
    const artisteRequette = requette.params.artiste; 
    const resultat = mediatheque.filter(
        objet => objet.artiste === artisteRequette
    );

    if (resultat.length > 0) {
        reponse.status(200).json(resultat);
    } else {
        reponse.status(404).json({ message: "artist not found" });
    }
}

function updateArtiste(requette, reponse) {
    const idRequette = parseInt(requette.params.id);
    const music = mediatheque.find(objet => objet.id === idRequette);

    if (music) {
        music.artiste = requette.body.artiste;
        reponse.status(200).json(music);
    } else {
        reponse.status(404).json({ message: "artist not found" });
    }
}
function deleteArtiste(requette, reponse) {
    const artisteRequette = requette.params.artiste;
    const indexToRemove = mediatheque.findIndex(objet => objet.artiste === artisteRequette);

    if (indexToRemove !== -1) {
        // Supprime toutes les musiques de cet artiste
        for (let i = mediatheque.length - 1; i >= 0; i--) {
            if (mediatheque[i].artiste === artisteRequette) {
                mediatheque.splice(i, 1);
            }
        }
        reponse.status(204).end();
    } else {
        reponse.status(404).json({ message: "artist not found" });
    }
}

export { getByArtiste, updateArtiste, deleteArtiste };