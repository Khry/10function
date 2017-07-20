function isPrime(a){
	var i = a;
	while(k !== 0 & i !== 1){
		i--;
		var k = a % i;	
	}
	return i === 1 ? true : false
}
isPrime(5);

console.log("77" + isPrime(77));
console.log("23" + isPrime(23));
console.log("4" + isPrime(4));
console.log("2" + isPrime(2));
console.log("1" + isPrime(1));
