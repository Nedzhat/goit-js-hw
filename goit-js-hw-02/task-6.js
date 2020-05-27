let input;
const numbers = [];
let total = 0;

do {
    input = prompt(`Введите число.`);
    
    if (input !== null) {
    input = Number(input);
    numbers.push(input);
    }

    else if (input === null) {
        for(let number of numbers) {
            total += number;
        }
        alert(`Общая сумма чисел равна ${total}`)
        break;
    }
    

} while (true)

