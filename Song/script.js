document.addEventListener("DOMContentLoaded", function() {
    // Récupère les données stockées localement
    var songData = JSON.parse(localStorage.getItem('songData'));

    // Affiche les données sur la page
    if (songData) {
        document.getElementById("title").textContent = songData.title;
        document.getElementById("artist").textContent = songData.artist;
        document.getElementById("genre").textContent = songData.genre;
    }

        //Evénements sur le bouton de suppression
    var boutonSupprimer = document.getElementById("supprimerDonnees");
    if (boutonSupprimer) {
        boutonSupprimer.addEventListener("click", function() {

        // Supprime les données stockées localement
        localStorage.removeItem('songData');
        
        // Efface les données affichées sur la page
        document.getElementById("title").textContent = "";
        document.getElementById("artist").textContent = "";
        document.getElementById("genre").textContent = "";
    });
}});
