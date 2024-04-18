document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs des champs
    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let genre = document.getElementById("genre").value;
    let audioFile = document.getElementById("audio").files[0];

    // Stockage local
    localStorage.setItem('songData', JSON.stringify({ title: title, artist: artist, genre: genre}));

    // Stockage local fichier audio
    let reader = new FileReader();
    reader.onload = function(event) {
        localStorage.setItem('audioFile', event.target.result);
    };
    reader.readAsDataURL(audioFile);

    // Redirection des données
    window.location.href = "../Song/index.html"; 
});









// document.getElementById('audioInput').addEventListener('change', function(e) {
//     console.log(e)
//     const file = e.target.files[0];
//     console.log(file)
//     window.parent.postMessage({ file: file }, '*');
// });

// window.parent.postMessage({ file: inputFile.files[0] }, '*');



// const audioInput = document.getElementById('audioInput');
// const audioPlayer = document.getElementById('audioPlayer');

// audioInput.addEventListener('change', (e) => {
//     const file = e.target.files[0]
//     const audioUrl = URL.createObjectURL(file)

//     audioPlayer.src = audioUrl;
//     audioPlayer.play();
// })