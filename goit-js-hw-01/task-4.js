let credits = 23580;
const pricePerDroid = 3000;
let sumDroids = Number;
let totalPrice;

sumDroids = prompt(`Какое количество дронов вас интересует?`);

if (sumDroids === null) {
    console.log(`Отменено пользователем.`)
} else {
    typeof Number(sumDroids);
    totalPrice = sumDroids * 3000;
}

if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`)
    alert(`Недостаточно средств на счету!`)
} else if (sumDroids > 0) {
    credits = credits - totalPrice;
    alert(`Вы купили ${sumDroids} дроидов, на счету осталось ${credits} кредитов.`)
}

