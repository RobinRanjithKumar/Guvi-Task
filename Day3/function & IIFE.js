//a. Print odd numbers in an array
(function(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//b.Convert all the strings to title caps in a string array
(function(arr) {
    let titleCaps = arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
    console.log(titleCaps);
})(["hello world", "javascript is fun", "iife and anonymous functions"]);

//c.Sum of all numbers in an array
(function(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    console.log(sum);
})([1, 2, 3, 4, 5]);

//d. Return all the prime numbers in an array
(function(arr) {
    let isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    let primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

//e. Return all the palindromes in an array
(function(arr) {
    let isPalindrome = str => {
        str = str.toLowerCase();
        return str === str.split('').reverse().join('');
    };
    let palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(["madam", "racecar", "hello", "world", "level"]);

//f. Return median of two sorted arrays of the same size
(function(arr1, arr2) {
    let mergeAndFindMedian = (arr1, arr2) => {
        let merged = arr1.concat(arr2).sort((a, b) => a - b);
        let mid = merged.length / 2;
        return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[Math.floor(mid)];
    };
    console.log(mergeAndFindMedian(arr1, arr2));
})([1, 3, 5], [2, 4, 6]);

//g. Remove duplicates from an array
(function(arr) {
    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);

//h. Rotate an array by k times
(function(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(rotatedArray);
})([1, 2, 3, 4, 5], 2);