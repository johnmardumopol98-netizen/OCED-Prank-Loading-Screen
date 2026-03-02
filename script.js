function startPrank() {
    let progress = document.getElementById("progress");
    let text = document.getElementById("text");
    let width = 0;

    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            text.innerHTML = "😂 PRANKED! Wala pong hack, chill lang!";
        } else {
            width++;
            progress.style.width = width + "%";
            text.innerHTML = "Accessing OCED database... " + width + "%";
        }
    }, 50);
}
