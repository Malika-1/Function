let age = +prompt('Сколько тебе лет ?')

function checkAge(age) {

    if ( age > 18) {
        alert('Можно')
    } else if (age < 18) {
        alert('Нельзя')
    } else {
        alert('Дебил')
    }
    
}

checkAge(age)

let  a = +prompt('a')
let b = +prompt('b')
let mark = +prompt('/ * - + ** %')


function calculator( a, b, mark) {
   if (mark === '+') {
     alert(`${a} + ${b} = ${a + b}`);
   } else if (mark === '-') {
    alert(`${a} - ${b} = ${a - b}`);
   } else if (mark === '*') {
    alert(`${a} * ${b} = ${a * b}`);
   } else if (mark === '/') {
    alert(`${a} / ${b} = ${a / b}`);
   } else if (mark === '**') {
    alert(`${a} ** ${b} = ${a ** b}`);
   } else if (mark === '%') {
    alert(`${a} % ${b} = ${a % b}`);
   } else{
    alert('ничего не найдено')
   }
}

calculator(mark)


function fn(n) {
    return 11 - n / 10;

}

for (i = 10; i <= 100; i += 10) {
    console.log(i, fn(i));
}