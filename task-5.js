let cost;
let country;
let finnalyCountry;

country = prompt(`Укажите вашу страну.`);

if (country === null) {
    console.log(`Отменено пользователем!`);
} else switch (country) {
  case 'Китай':
    finnalyCountry = `Китай`;
    cost = 100;
    break;

  case 'Чили':
    finnalyCountry = `Чили`;
    cost = 250;
    break;

  case 'Австралия':
    finnalyCountry = `Австралию`;
    cost = 170;
    break;

  case 'Индия':
    finnalyCountry = `Индию`;
    cost = 80;
    break;

  case 'Ямайка':
    finnalyCountry = `Ямайку`;
    cost = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна.');
} 

if (country = finnalyCountry) {
    alert(`Доставка в ${finnalyCountry} будет стоить ${cost} кредитов`);
} else {
    console.log(`Отменено пользователем!`)
}