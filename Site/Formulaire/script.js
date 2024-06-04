document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulaire');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const genre = document.getElementById('genre').value;
        const audioInput = document.getElementById('audio');

        const reader = new FileReader();
        reader.onload = function (e) {
            const audioData = e.target.result;

            const song = {
                title: title,
                artist: artist,
                genre: genre,
                audio: audioData,
                likes: 0
            };

            let songs = JSON.parse(localStorage.getItem('songs')) || [];
            songs.push(song);
            localStorage.setItem('songs', JSON.stringify(songs));

            alert('Chanson ajoutée avec succès!');
            form.reset();

            window.location.href = '../Song/index.html';
        };

        reader.readAsDataURL(audioInput.files[0]);
    });
});

