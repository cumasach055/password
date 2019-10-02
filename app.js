let password = 'mypassword';

var question = prompt("Введите пароль");

if (question == password) {
	alert("пароль введен правильно");
	alert("Доступ разрешен!");
	document.write('Очень секретная информация');

} else {
	alert('Пароль введен не правильно');
	document.write('Обычная страница');
}