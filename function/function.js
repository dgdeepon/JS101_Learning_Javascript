function checkPrime(num){
	let flag = true;
	for(let i=2;i<num;i++){
	if(num%i==0){
	flag=flase;
	break;
}
}
return flag;
}

console.log(checkPrime(13));