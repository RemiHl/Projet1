// Récupérer les données du formulaire
let titles = document.getElementById("title");
let artist = document.getElementById("artist");
let genre = document.getElementById("genre");
let audioFile = document.getElementById("audio");

// Créer un nouvel élément liste
let newItem = document.createElement("li");
newItem.textContent = "Titre: " + titles + ", Artiste: " + artist + ", Genre: " + genre + ", Audio: " + audioFile;

// Créer un lecteur audio
var audioPlayer = document.createElement("audio");
audioPlayer.controls = true; // Ajoute les contrôles du lecteur audio

// Créer une source audio avec le fichier audio
var source = document.createElement("source");
console.log(newItem)
source.src = URL.createObjectURL(audioFile); // Utilise le fichier audio entré dans le formulaire
source.type = "audio/mp3"; // Spécifie le type de fichier audio 

// Ajouter la source audio au lecteur
audioPlayer.appendChild(source);

// Ajouter le lecteur audio à l'élément de liste
newItem.appendChild(audioPlayer);

// Créer un bouton de suppression
let deleteButton = document.createElement("button");
deleteButton.textContent = "Supprimer";
deleteButton.addEventListener("click", function() {
    newItem.remove(); // Supprimer l'élément de la liste lors du clic sur le bouton
    });

// Ajouter le bouton de suppression à l'élément 
newItem.appendChild(deleteButton);

// Ajouter l'élément à la liste sur la page "Song"
document.getElementById("songList").appendChild(newItem);
