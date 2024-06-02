document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Regex pour le mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //Si ca ne correspond pas, message erreur
    if (!passwordRegex.test(password)) {
        alert('Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.');
        return;
    }
    //si ca correspond, message ok sinon erreur
    if (username && password) {
        const user = {
            username: username,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(user));

        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');

        // Redirige vers la page de connexion après l'inscription
        window.location.href = '../Login/index.html'; 
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});