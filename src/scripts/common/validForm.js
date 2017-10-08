document.addEventListener('DOMContentLoaded', function() {
    var btnSubmit = document.querySelector('#submit');
    var btnReset = document.querySelector('#reset');
    var inputName = document.querySelector('#name');
    var inputMail = document.querySelector('#email');
    var inputMessage = document.querySelector('#message');
    var errorName = document.querySelector('.error-message-name');
    var errorMail = document.querySelector('.error-message-email');
    var errorMessage = document.querySelector('.error-message-message');
    var regMail = /^[^@]+@[^@.]+\.[^@]+$/;
    var regName = /\D+\S+/g;


    return window.onload = function() {
        btnSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            var stringName = inputName.value;
            var stringMail = inputMail.value;
            var stringMessage = inputMessage.value;
            console.log((/a/).test(stringName));
            // проверяем валидность имени
            if ((regName).test(stringName) || stringName !== '') {
                inputName.style.border = '1px solid green';
                errorName.style.display = 'none';
            }
            if ((/\d/).test(stringName) || stringName == '') {
                inputName.style.border = '1px solid red';
                errorName.style.display = 'block';
            }
            // проверяем валидность почты
            if ((regMail).test(stringMail)) {
                inputMail.style.border = '1px solid green';
                errorMail.style.display = 'none';

            }
            if (!(regMail).test(stringMail)) {
                inputMail.style.border = '1px solid red';
                errorMail.style.display = 'block';
            }

            // проверяем валидность сообщения
            if ((/\w/).test(stringMessage) && stringMessage.length > 10) {
                inputMessage.style.border = '1px solid green';
                errorMessage.style.display = 'none';
            }
            if (!(/\w/).test(stringMessage) || stringMessage.length <= 10) {
                inputMessage.style.border = '1px solid red';
                errorMessage.style.display = 'block';
            }

            // else {
            //     ajaxValidate('../send.php')
            //         .then(function(value) {

            //         })
            //         .catch(function() {

            //         });
            // } 
        });
        btnReset.addEventListener('click', function() {
            errorName.style.display = 'none';
            errorMail.style.display = 'none';
            errorMessage.style.display = 'none';
            inputName.style.border = 'none';
            inputMail.style.border = 'none';
            inputMessage.style.border = 'none';
        });
    }

    function ajaxValidate(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.addEventListener('load', function() {
                resolve();
            });
            xhr.addEventListener('error', function() {
                reject();
            });
        });
    }
});