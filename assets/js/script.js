// visible go to top
window.addEventListener('scroll', function () {
    let top = document.getElementById("goto-top");
    let socbot = document.getElementById("social-container-bot");
    if (window.scrollY >= 20) {
        if (this.innerWidth <= 1100) {
            socbot.style.display = "flex";
        }
        top.style.visibility = "visible";
    }
    else {
        top.style.visibility = "hidden";
        socbot.style.display = "none";
    }
});
// visible go to top
