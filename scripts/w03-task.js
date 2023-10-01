/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add(number1, number2)
{
  return number1 + number2;
}

function AddNumbers()
{
  let AddNumber1 = Number(document.querySelector('#add1').value);
  let AddNumber2 = Number(document.querySelector('#add2').value);

  return document.querySelector('#sum').value = Add(AddNumber1, AddNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', AddNumbers);


/* Function Expression - Subtract Numbers */

function subtract(subtract1, subtract2)
{
  return subtract1 - subtract2;
}

function subtructNumbers()
{
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

  return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtructNumbers);


/* Arrow Function - Multiply Numbers */

function multiply(factor1, factor2)
{
  return factor1 * factor2;
}

function multiplyNumbers()
{
  let multiplyNumber1 = Number(document.querySelector('#factor1').value);
  let multiplyNumber2 = Number(document.querySelector('#factor2').value);
  return document.querySelector('#product').value =  multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor)
{
  return dividend / divisor;
}

function divideNumbers()
{
  let divideNumber1 = Number(document.querySelector('#dividend').value);
  let divideNumber2 = Number(document.querySelector('#divisor').value);

  return document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

console.log(divideNumbers);


/* Decision Structure */

let date;
date = new Date();
const currentYear = date.getFullYear();

document.getElementById('year').innerHTML = currentYear;




/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').innerHTML = numbersArray;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function(number) {
  return number % 2 !== 0;
});
document.getElementById('odds').innerHTML = oddNumbers;

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
const arrSum = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = arrSum;


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = arrSum.reduce((sum, number) => sum + number);
