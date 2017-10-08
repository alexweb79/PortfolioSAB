'use strict';

// const $ = require('jquery'); // если будет нужен
import preloader from './common/preloader';
import hamburger from './common/hamburger';
import flip from './common/flip';
import arrowDown from './common/arrowDown';
import pageScrollMenu from './common/pageScrollMenu';
import slider from './common/slider';
import validForm from './common/validForm';

document.addEventListener('DOMContentLoaded', function() {
    slider();
    preloader();
    hamburger();
    flip();
    arrowDown();
    pageScrollMenu();
    validForm();
});