function isprime(num) {
    if (num < 2) { 
       // 2 is the firs prime number hence any number before it is not a prime number
       return false;

    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
           // If any number from 2 to the square root of the given number divides it evenly,then it's not a prime number
           return false;
        }
    }
    return true;
}

function filterPrimes(numbers) {
    return numbers.filter(function(num) {
        return isprime(num);
    });
}
let inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,18,19,20];
let primeArray = filterPrimes(inputArray);
console.log(primesArray);