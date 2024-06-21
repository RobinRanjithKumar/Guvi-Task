//a. Print odd numbers in an array
const printOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
console.log(printOddNumbers([1, 2, 3, 4, 5]));

//b. Convert all the strings to title caps in a string array
const toTitleCaps = (arr) => arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
console.log(toTitleCaps(['hello world', 'javascript is fun'])); // Output: ['Hello World', 'Javascript Is Fun']

//c. Sum of all numbers in an array
const sumOfNumbers = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Output: 15

//d.Return all the prime numbers in an array

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getPrimes = (arr) => arr.filter(isPrime);
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
