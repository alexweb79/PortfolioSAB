window.addEventListener('DOMContentLoaded', function() {
    var preload = document.createElement('div');

    preload.className = "preloader";
    preload.innerHTML = '<div class="spinner sp1"></div><div class="spinner sp2">';
    document.body.appendChild(preload);

    window.addEventListener('load', function() {
        preload.className += ' fade';
        setTimeout(function() {
            preload.style.display = 'none';
        }, 600);
    });
});