document.addEventListener('DOMContentLoaded', function() {
    var hamb = document.getElementsByClassName(".hamburger"),
        hidden = document.querySelector(".hidden"),
        fadeIn = document.querySelector(".hidden");
    hamb.addEventListener("click", function() {
        hamb.classList.add("is-active");
        hidden.classList.add("visible");
        fadeIn.classList.add("fadeIn");

        hamb.addEventListener("click", function() {
            hamb.classList.toggle("is-active");
            hidden.classList.toggle("visible");
            fadeIn.classList.toggle("fadeIn");
        });
    });
});