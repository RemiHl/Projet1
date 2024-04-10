document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs des champs
    let titles = document.getElementById("title");
    let artist = document.getElementById("artist");
    let genre = document.getElementById("genre");
    let audioFile = document.getElementById("audio");

    // Stockage local
    localStorage.setItem('songData', JSON.stringify({ title: titles, artist: artist, genre: genre}));

    // Stockage local fichier audio
    let reader = new FileReader();
    reader.onload = function(event) {
        localStorage.setItem('audioFile', event.target.result);
    };
    reader.readAsDataURL(audioFile);

    // Redirection des données
    window.location.href = "../Song/index.html";
});