document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs des champs
    var title = document.getElementById("title").value;
    var artist = document.getElementById("artist").value;
    var genre = document.getElementById("genre").value;
    var audioFile = document.getElementById("audio").files[0];




});