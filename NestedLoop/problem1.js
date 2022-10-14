// Problem 1: Print the Calendar date in the below format
/* 1-1
2-1
3-1
.
.
.
.
.
31-1
.
.
.
.
.
31-12 */



for(let i = 1;i<=12;i++){
  for(let j=1;j<=31;j++){
    if(i==2 && j==28){
      console.log("Month: "+i,"Date: "+j);
      break;
    }else if((i==4 || i==6 ||i==9 || i==11)&& j==30){
      console.log("Month: "+i,"Date: "+j);
      break;
    }else{
      console.log("Month: "+i,"Date: "+j);
    }
  }
}
