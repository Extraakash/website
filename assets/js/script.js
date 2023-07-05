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
        }
        top.style.visibility = "visible";
    }
    else {
        top.style.visibility = "hidden";
        socbot.style.display = "none";
    }
});
// visible go to top



(function () {
    if (window.innerWidth <= 670) {
        document.getElementById("testimonialdiv").style.width = "80vw";
    }
})();