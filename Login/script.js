// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     // Validation de l'utilisateur avec localStorage
//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (username === storedUsername && password === storedPassword) {
//         document.getElementById("message").textContent = "Connexion réussie!";
//         document.getElementById("message").style.color = "green";
//         // Redirection après connexion réussie
//         window.location.href = "../Acceuil/index.html";
//     } else {
//         document.getElementById("message").textContent = "Nom d'utilisateur ou mot de passe incorrect.";
//     }
// });

// Login test (remplacer par une vraie gestion côté serveur)
// localStorage.setItem("username", "testuser");
// localStorage.setItem("password", "password123");

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert('Connexion réussie !');
        // Redirige vers la page d'accueil
        window.location.href = '../Acceuil/index.html';
    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
    }
});