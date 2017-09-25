document.addEventListener('DOMContentLoaded', function() {
    const hamb = document.querySelector(".hamburger");
    const menu = document.querySelector(".block__main-menu");
    hamb.addEventListener("click", function() {
        hamb.classList.add("is-active");
        document.getElementsByClassName('block__main-menu')[0].style = "visibility: visible";

        const hambActive = document.querySelector(".is-active");
        hamb.addEventListener("click", function() {
            hamb.classList.remove("is-active");
            document.getElementsByClassName('block__main-menu')[0].style = "visibility: hidden";
        });
    });

});