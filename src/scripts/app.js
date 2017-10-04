'use strict';
const $ = require('jquery'); // если будет нужен
// const preloader = require('./common/preloader');
// const hamburger = require('./common/hamburger');
// const flip = require('./common/flip');
// const arrowDown = require('./common/arrowDown');
// const pageScrollMenu = require('./common/pageScrollMenu');
// const validationForm = require('./common/validationForm');
import preloader from './common/preloader';
import hamburger from './common/hamburger';
import flip from './common/flip';
import arrowDown from './common/arrowDown';
import pageScrollMenu from './common/pageScrollMenu';
import validationForm from './common/validationForm';
// preloader();
// hamburger();
// flip();
// arrowDown();
// pageScrollMenu();
// validationForm();
$(() => {
    preloader.init({
        waiting: true
    });
    // preloader.init();
    hamburger.init();
    flip.init();
    arrowDown.init();
    pageScrollMenu.init();
    // comboSlider.init($('.combo-slider'));
    validationForm.init({
        $el: $('.contact-form'),
        $submitButton: $('.contact-form-submit'),
        $resetButton: $('.contact-form-reset')
    });
});