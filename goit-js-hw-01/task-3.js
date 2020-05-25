const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt(`Введите пожалуйста пароль.`);

if (message === ADMIN_PASSWORD) {
    console.log(`Добро пожаловать!`);
    message = `Добро пожаловать!`;
} else if (message === null) {
    console.log(`Отменено пользователем.`)
    message = `Отменено пользователем.`;
} else {
    console.log(`Доступ запрещен, неверный пароль!`)
    message = `Доступ запрещен, неверный пароль!`;
}

alert(message)