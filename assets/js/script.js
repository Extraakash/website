var navbar = document.querySelector(".navbar").querySelectorAll('a');
console.log(navbar);
navbar.forEach(Element => {
    Element.addEventListener('click', function () {
        navbar.forEach(nav => nav.classList.remove("menuact"));
        this.classList.add("menuact");
    })
})
// visible go to top
window.addEventListener('scroll', function () {
    let top = document.getElementById("goto-top");
    let socbot = document.getElementById("social-container-bot");
    if (window.scrollY >= 20) {
        if (this.innerWidth <= 1100) {
            socbot.style.display = "flex";
            socbot.style.opacity = "1";
            socbot.style.transition = "all linear 1s";
        }
        top.style.visibility = "visible";
    }
    else {
        top.style.visibility = "hidden";
        // socbot.style.display = "none";
        socbot.style.opacity = "0";
    }
});
// visible go to top



(function () {
    if (window.innerWidth <= 670) {
        document.getElementById("testimonialdiv").style.width = "80vw";
    }
})();