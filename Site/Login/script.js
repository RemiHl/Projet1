document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Connexion réussie !');
        // Redirige vers la page d'accueil
        window.location.href = '../index.html';
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
});