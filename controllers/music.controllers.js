

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
function  createNewMusic(requette,reponse){
    const titreMusic = requette.body.titre;
    const artistMusic = requette.body.artiste;
    let newId;
    if (mediatheque.length===0){
        newId=1;
    }else{
        newId= mediatheque[mediatheque.length-1].id+1;

    }
    const newMusic= {id: newId, titre:titreMusic, artiste: artistMusic}
    mediatheque.push(newMusic);
    reponse.status(201).json(newMusic);

    
}
function getAllMusic(requette,reponse){
    reponse.status(200).json(mediatheque)

}
function gettById(requette,reponse){
    const idRequette= parseInt(requette.params.id)
    const music = mediatheque.find(objet=> objet.id===idRequette);
    if (music){
         reponse.status(200).json(music);
    }else{
         reponse.status(404).json({ message: "music not found" });
    }
}
function updateMusic(requette,reponse){
    const idRequette= parseInt(requette.params.id)
    const music = mediatheque.find(objet=> objet.id===idRequette);
    if (music){
        music.titre=requette.body.titre;
        music.artiste=requette.body.artiste;
        reponse.status(200).json(music);

    }else{
        reponse.status(404).json({message: 'music not found'});
    }

}
function deleteMusic(requette,reponse){
    const idRequette= parseInt(requette.params.id)
    const index = mediatheque.findIndex(objet=> objet.id===idRequette);
    if (index !== -1){
        mediatheque.splice(index,1);
        reponse.status(204).end();
    }else{
        reponse.status(404).json({message: 'music not found'});
    }
    


}
export {createNewMusic, getAllMusic, gettById, updateMusic, deleteMusic};






