//Bouton like et affichage musiques
document.addEventListener("DOMContentLoaded", function() {
    // Afficher les musiques depuis le localStorage
    function displaySongs() {
        let songsContainer = document.getElementById("songsContainer");
        songsContainer.innerHTML = '';

        let songs = JSON.parse(localStorage.getItem('songs')) || [];
        //Cree une div "song"
        songs.forEach((song, index) => {
            let songElement = document.createElement("div");
            songElement.classList.add("song");
            //affiche les donnees dans la div
            songElement.innerHTML = `
                <h1>${song.title}</h1>
                <p>${song.artist}</p>
                <p>${song.genre}</p>
                <audio controls><source src="${song.audio}" type="audio/mp3"></audio>
                <button class="likeButton"><span class="heart">&#x2665;</span></button>
                <span class="likeCount">${song.likes || 0}</span>
            `;

            // Evénement au bouton de like
            let likeButton = songElement.querySelector('.likeButton');
            let likeCount = songElement.querySelector('.likeCount');

            // Vérifie si l'utilisateur a déjà liké cette musique
            let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || {};
            if (likedSongs[song.title]) {
                likeButton.classList.add('liked');
            }
            //Evenement au click
            likeButton.addEventListener('click', function() {
                let currentLikes = parseInt(likeCount.textContent);

                if (likeButton.classList.contains('liked')) {
                    // Si déjà liké, on dislike
                    likeCount.textContent = currentLikes - 1;
                    delete likedSongs[song.title];
                } else {
                    // Sinon, on like
                    likeCount.textContent = currentLikes + 1;
                    likedSongs[song.title] = true;
                }

                // Mise à jour du nombre de likes
                songs[index].likes = parseInt(likeCount.textContent);

                // Mise à jour des donnees et du localStorage
                localStorage.setItem('songs', JSON.stringify(songs));
                localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
                likeButton.classList.toggle('liked');
            });
            //Ajout des nouvelles musique a la suite
            songsContainer.appendChild(songElement);
        });
    }

    // Bouton test de suppression
    document.getElementById("deleteDataButton").addEventListener("click", function() {
        localStorage.removeItem('songs');
        localStorage.removeItem('likedSongs');
        displaySongs();
    });

    // Affiche les chansons lors du chargement de la page
    displaySongs();
});