'use strict';

const $ = require('jquery'); // если будет нужен
import preloader from './common/preloader';
import hamburger from './common/hamburger';
import flip from './common/flip';
import arrowDown from './common/arrowDown';
import pageScrollMenu from './common/pageScrollMenu';
import slider from './common/slider';
import validationForm from './common/validationForm';

document.addEventListener('DOMContentLoaded', function() {
    slider();
    preloader();
    hamburger();
    flip();
    arrowDown();
    pageScrollMenu();
    validationForm();
});

// $(() => {
//     preloader.init({
//         waiting: true
//     });
//     preloader.init();
//     hamburger.init();
//     flip.init();
//     arrowDown.init();
//     pageScrollMenu.init();
//     slider.init($('.slider-1'));
//     validForm.init($('.submit'));
//     validationForm.init({
//         $el: $('.contact-form'),
//         $submitButton: $('.contact-form-submit'),
//         $resetButton: $('.contact-form-reset')
//     });
// });