// function discon() {
//     document.getElementById("video-container").style.visibility = "visible";
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("body").style.overflowY = "scroll";
// }
const buttons = document.querySelectorAll('.btn-filter-child');
(function () {
    const storeVideos = document.querySelectorAll('.video-container-row-child-child');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;


            storeVideos.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = "flex";
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = "flex";
                    } else {
                        item.style.display = "none";
                    }
                }
            })
        })
    })
})();





buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    })
})