document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs des champs
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var genre = document.getElementById("genre").value;
    var audioFile = document.getElementById("audio").files[0];

    // Stockage local
    localStorage.setItem('songData', JSON.stringify({ title: title, artist: artist, genre: genre}));

    // Stockage local fichier audio
    var reader = new FileReader();
    reader.onload = function(event) {
        localStorage.setItem('audioFile', event.target.result);
    };
    reader.readAsDataURL(audioFile);

    // Redirection des données
    window.location.href = "../Song/index.html";
});