function getMin(a, b, c){
	if (a < b & a < c) {return a
	}	else if (b < c ) {return b
	} else{return c}
}
console.log(getMin(3, 0, -3));