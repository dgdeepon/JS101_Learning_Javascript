// Problem 2: Print Prime Numbers from 1 to given limit

for(let i = 1;i<=100;i++){
  let count=0;
  for(let j=1;j<=i;j++){
    if(i==1){
      count=count+3;
    }else{
    i%j==0 ? count++:"";
    }
  }
  if(count>2){
    console.log(i,"Is not prime");
  }else{
    console.log(i,"Is prime")
  }
}