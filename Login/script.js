document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validation de l'utilisateur avec localStorage
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("message").textContent = "Connexion réussie!";
        document.getElementById("message").style.color = "green";
        // Redirection après connexion réussie
        window.location.href = "../Acceuil/index.html";
    } else {
        document.getElementById("message").textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});

// Login test (remplacer par une vraie gestion côté serveur)
localStorage.setItem("username", "testuser");
localStorage.setItem("password", "password123");