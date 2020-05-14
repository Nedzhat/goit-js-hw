let cost;
let country;
let finnalyCountry;
let normalizedCountry;

country = prompt(`Укажите вашу страну.`);

normalizedCountry = country.toLowerCase();

if (normalizedCountry === null) {
    console.log(`Отменено пользователем!`);
} else switch (normalizedCountry) {
  case 'китай':
    finnalyCountry = `Китай`;
    cost = 100;
    break;

  case 'чили':
    finnalyCountry = `Чили`;
    cost = 250;
    break;

  case 'австралия':
    finnalyCountry = `Австралию`;
    cost = 170;
    break;

  case 'индия':
    finnalyCountry = `Индию`;
    cost = 80;
    break;

  case 'ямайка':
    finnalyCountry = `Ямайку`;
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна.');
} 

if (normalizedCountry = finnalyCountry) {
    alert(`Доставка в ${finnalyCountry} будет стоить ${cost} кредитов`);
} else {
    console.log(`Отменено пользователем!`)
}