document.getElementsByClassName("commencer").onclick = function() {
    window.location.href = "../Formuaire/index.html";
}

function blink() {
    var title = document.getElementById('beatbench-title');
    title.classList.toggle('blink');
}

setInterval(blink, 2000);