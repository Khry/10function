function getClosestToZero(a, b, c, d){
  var min =  Math.min(Math.abs(a), Math.abs(b), Math.abs(c), Math.abs(d));
  console.log()
  if (Math.abs(a) < Math.abs(b) & Math.abs(a) < Math.abs(c) & Math.abs(a) < Math.abs(d)) {return a
	}	else if ( Math.abs(b) < Math.abs(c) & Math.abs(b) < Math.abs(d)) {return b
	} else if ( Math.abs(c) < Math.abs(d)) {return c
	} else {return d
	}
}
console.log(getClosestToZero(9, 5, -4, -9))
 
