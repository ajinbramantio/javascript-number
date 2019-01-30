console.log(
  '%c Javascript!',
  'font-size: 20px; background: #222; color: #bada55'
)

// Number
const number1 = 3
const number2 = 5
const number3 = 7
const number4 = 9
const number5 = 11

// Output Number
console.log('this is number ' + number1)
console.log('this is number ' + number2)
console.log('this is number ' + number3)
console.log('this is number ' + number4)
console.log('this is number ' + number5)
console.log('--------------------------')

// Addition
const result_multiplication = number1 * number2
const result_divide = number4 / number1
const result_addition = number3 + number4
const result_subtraction = number5 - number4
const result_modulus = number3 % number2
const result_exponentiation = number2 ** number1

// Output Addition
console.log(
  `${number1} multiplied by ${number2} equals to ${result_multiplication}`
)
console.log(`${number4} divided by ${number1} equals to ${result_divide}`)
console.log(`${number3} added by ${number4} equals to ${result_addition}`)
console.log(
  `${number5} substracted by ${number4} equals to ${result_subtraction}`
)
console.log(`${number3} modulus by ${number2} equals to ${result_modulus}`)
console.log(
  `${number2} exponentiation by ${number1} equals to ${result_exponentiation}`
)
console.log('---------------------------')

// String
const string1 = 'Hello'
const string2 = 'coders'
const string3 = 'welcome'
const string4 = 'to'
const string5 = 'the'
const string6 = 'world'
const string7 = 'of'
const string8 = 'coding'

const result_string = `${string1} ${string2} ${string3} ${string4} ${string5} ${string6} ${string7} ${string8}`

// Output String
console.log(result_string)
console.log('---------------------------')

// Array
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
]

var date = new Date()

var stroller = [
  {
    brand: 'Pliko',
    price: 650000,
    color: 'Red',
    stock: 6,
    boolean: true,
    dated: `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
  },
  {
    brand: 'Does',
    price: 825000,
    color: 'Brown',
    stock: null,
    boolean: false,
    dated: `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
  },
  {
    brand: 'Elle',
    price: 1250000,
    color: 'Blue',
    stock: 12,
    boolean: true,
    dated: `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
  }
]

arrayNumber.push(10)

// Output Array
console.log(
  `values arrayNumber is ${arrayNumber}, number of lengths ${
    arrayNumber.length
  }`
)

arrayString.push('ten')

console.log(
  `values arrayNumber is ${arrayString}, number of lengths ${
    arrayString.length
  }`
)

stroller.push({
  brand: 'Bugaboo',
  price: 1500000,
  color: 'Green',
  stock: 10,
  boolean: true,
  dated: `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
})

console.log(stroller)
console.log(stroller[stroller.length - 1].brand + ' is a new brand')
