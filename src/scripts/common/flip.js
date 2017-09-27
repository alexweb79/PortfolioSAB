;
document.addEventListener('DOMContentLoaded', function() {
    var hamb = document.querySelector(".flip-button"),
        front = document.querySelector(".front"),
        back = document.querySelector(".back");
    hamb.addEventListener("click", function() {
        front.classList.add("hidden");
        back.classList.remove("hidden");
        hamb.classList.add("hidden");

        // hamb.addEventListener("click", function() {
        //     front.classList.toggle("hidden");
        //     back.classList.toggle("hidden");
        // });
    });
});