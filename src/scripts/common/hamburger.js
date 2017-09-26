document.addEventListener('DOMContentLoaded', function() {
    var hamb = document.querySelector(".hamburger");
    var hidden = document.querySelector(".hidden");
    hamb.addEventListener("click", function() {
        hamb.classList.add("is-active");
        hidden.classList.add("visible");

        hamb.addEventListener("click", function() {
            hamb.classList.toggle("is-active");
            hidden.classList.toggle("visible");
        });
    });
});