const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log(logins);

const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
      return true;
  } else {
      return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  let testLogin = logins.includes(login);
  if (testLogin === true){
      return false;
  } else {
      return true;
  }
};

const addLogin = function(allLogins, login) {
  let firstCheckLogin = isLoginValid(login);
  if(firstCheckLogin === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else {
    let secondCheckLogin = isLoginUnique(allLogins, login);
      if(secondCheckLogin === false) {
        return 'Такой логин уже используется!';
      } else {
        logins.push(login);
        return 'Логин успешно добавлен!';
      }
  }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);




