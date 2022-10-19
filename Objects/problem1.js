// Problem 1 : Given an array find the unique items in the array


let arr = ["Deepan","Sandip","Rakesh","Sandip","Rakesh"];

let newObj = {};

for(let i = 0;i<arr.length;i++){
  newObj[arr[i]]=1;
}

console.log(newObj);