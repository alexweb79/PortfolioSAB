$(document).ready(function() {
    $('.submit').click(function() {
        var errCount = 0; /*устанавливаем счётчик ошибок*/
        $('.errorEmail').remove(); /*удаляем сообщение о ошибке если такое было*/
        $('#email').css({ 'border-color': '#aaa' }); /*возвращаем не красный цвет границе*/
        var pole1 = $('#email').val(); /*получаем значение введённое в поле*/
        var pole1RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; /*шаблон регулярного выражения для проверки*/
        if (!pole1RegExp.test(pole1)) { /*проверка через ф-ю .test() соотнош рег выражения и данных в форме*/
            /*если данные не совпали делаем цвет рамки красным, выводим сообщение о ошибке, к счётчику ошибок плюсуем 1*/
            $('#email').css({ 'border-color': '#DF4831' }).before('<div class="errorEmail" style="color: #e82517" >Вы не ввели email или он не правильный</div>');
            errCount++;
        }
        $('.errorFirstname').remove();
        $('#firstname').css({ 'border-color': '#aaa' });
        var pole2 = $('#firstname').val();
        var pole2RegExp = /\S/;
        if (!pole2RegExp.test(pole2)) {
            errCount++;
            $('#firstname').css({ 'border-color': '#DF4831' }).before('<div class="errorFirstname" style="color: #e82517">Вы не ввели имя</div>');
        }
        $('.errorLastname').remove();
        $('#lastname').css({ 'border-color': '#aaa' });
        var pole3 = $('#lastname').val();
        var pole3RegExp = /\S/;
        if (!pole3RegExp.test(pole3)) {
            errCount++;
            $('#lastname').css({ 'border-color': '#DF4831' }).before('<div class="errorLastname" style="color: #e82517">Вы не ввели фамилию</div>');
        }
        $('.errorPass').remove();
        $('#pass').css({ 'border-color': '#aaa' });
        var pole4 = $('#pass').val();
        var pole4RegExp = /\S/;
        if (!pole4RegExp.test(pole4)) {
            errCount++;
            $('#pass').css({ 'border-color': '#DF4831' }).before('<div class="errorPass" style="color: #e82517">Вы не ввели пароль</div>');
        }
        $('.errorPasstwo').remove();
        $('#passtwo').css({ 'border-color': '#aaa' });
        var pole5 = $('#passtwo').val();
        if (pole5 !== pole4) {
            errCount++;
            $('#passtwo').css({ 'border-color': '#DF4831' }).before('<div class="errorPasstwo" style="color: #e82517">Не правильно повторили пароль</div>');
        }
        /*если счётчик ошибок больше 0 то форму не отправляем return false*/
        if (errCount > 0) {
            return false;
        }
    });
});