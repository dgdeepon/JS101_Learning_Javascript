// Problem 3 : Given an array of numbers find the average of all the even numbers.

let numbers = [1,2,3,4,5,6,7,8,9];
let sum = 0;
let count = 0;

for(let i = 0;i<numbers.length;i++){
  sum +=numbers[i];
  count ++;
}

console.log("Avg is",sum/count);