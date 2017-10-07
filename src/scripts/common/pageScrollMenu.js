document.addEventListener('DOMContentLoaded', function() {
    var fixmenu = document.getElementById('fixmenu');
    var fixmenuSourceTop = fixmenu.getBoundingClientRect().top + window.pageYOffset;

    window.onscroll = function() {
        if (fixmenu.classList.contains('fixed') && window.pageYOffset < fixmenuSourceTop) {
            fixmenu.classList.remove('fixed');
        } else if (window.pageYOffset > fixmenuSourceTop) {
            fixmenu.classList.add('fixed');
        }
    };
});


// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     $('.article-blog div').each(function(i) {
//         consol.log(windscroll);
//         if ($(this).position().top <= windscroll + 10) {
//             // $('nav a.active').removeClass('active');
//             $('nav a').eq(i).addClass('active');
//         }
//     });
// }).scroll();