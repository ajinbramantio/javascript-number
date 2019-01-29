console.log('Javascript');
console.log('');

// Number
const num1 = 3;
const num2 = 5;
const num3 = 7;
const num4 = 9;
const num5 = 11;
// End Number

// Output Number
console.log('this is number ' + num1);
console.log('this is number ' + num2);
console.log('this is number ' + num3);
console.log('this is number ' + num4);
console.log('this is number ' + num5);
// end output Number
console.log('---------------------------');

// Addition
const result_multiplication = num1 * num2;
const result_divide = num4 / num1;
const result_addition = num3 + num4;
const result_subtraction = num5 - num4;
const result_modulus = num3 % num2;
const result_exponentiation = num2 ** num1;
// End Addition

// Output Addition
console.log(`${num1} multiplied ${num2} equals to ${result_multiplication}`);
console.log(`${num4} divided ${num1} equals to ${result_divide}`);
console.log(`${num3} added ${num4} equals to ${result_addition}`);
console.log(`${num5} substracted ${num4} equals to ${result_subtraction}`);
console.log(`${num3} modulus ${num2} equals to ${result_modulus}`);
console.log(
  `${num2} exponentiation ${num1} equals to ${result_exponentiation}`
);

// End Out Addition
console.log('---------------------------');

// String
const string1 = 'Hello';
const string2 = 'coders';
const string3 = 'welcome';
const string4 = 'to';
const string5 = 'the';
const string6 = 'world';
const string7 = 'of';
const string8 = 'coding';

const result_string = `${string1} ${string2} ${string3} ${string4} ${string5} ${string6} ${string7} ${string8}`;
//End String
//Output String
console.log(result_string);

console.log('---------------------------');

// Array
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrayString = [
  'one',
  'two',
  'tree',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];
var stroller = [
  {
    merk: 'Pliko',
    price: 650000,
    color: 'Red',
    stock: 6
  },
  {
    merk: 'Does',
    price: 825000,
    color: 'brown',
    stock: 3
  },
  {
    merk: 'Elle',
    price: 1250000,
    color: 'Blue',
    stock: 12
  }
];

arrayNumber.push(10);
//End Array

// Output Array
console.log(
  `values arrayNumber is ${arrayNumber}, number of lengths ${
    arrayNumber.length
  }`
);

arrayString.push('ten');
console.log(
  `values arrayNumber is ${arrayString}, number of lengths ${
    arrayString.length
  }`
);

stroller.push({
  merk: 'Bugaboo',
  price: 1500000,
  color: 'green',
  stock: 10
});
console.log(stroller);
console.log(stroller[stroller.length - 1].merk + ' is new Merk');
//End Output Array
