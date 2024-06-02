//Redirection du bouton "Begin"
document.getElementsByClassName("commencer").onclick = function() {
    window.location.href = "../Formuaire/index.html";
}

//Effet de clignotement du titre
function blink() {
    const title = document.getElementById('beatbench-title');
    title.classList.toggle('blink');
}

setInterval(blink, 2000);