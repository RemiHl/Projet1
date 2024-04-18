document.addEventListener("DOMContentLoaded", function() {
    let songData = JSON.parse(localStorage.getItem('songData'));
    let audioData = localStorage.getItem('audioFile');

    if (songData && audioData) {
        document.getElementById("songTitle").textContent = songData.title;
        document.getElementById("songArtist").textContent = songData.artist;
        document.getElementById("songGenre").textContent = songData.genre;

        let audioPlayer = document.getElementById("audioPlayer");
        audioPlayer.src = audioData;
    } else {
        console.log("Les données ne sont pas disponibles dans le localStorage.");
    }

    document.getElementById("deleteDataButton").addEventListener("click", function () {
        localStorage.removeItem('songData');
        localStorage.removeItem('audioFile');
    });
});