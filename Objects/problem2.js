// Problem 2 : Given a string print, the number of times each character appears

let str="Deepan";

let newObj = {};

for(let i = 0;i<str.length;i++){
  count=0;
  for(let j=i;j<str.length;j++){
    if(str[i]==str[j]){
      count++;
    }
  }
  let flag = false;
  for(let k in newObj){
    if(str[i]==k){
      flag = true;
      break;
    }
  }
  if(flag){
    continue;
  }else{
    newObj[str[i]]=count;
  }
  
}

console.log(newObj);