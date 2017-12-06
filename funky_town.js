function fibonacci(n) {
    if (n == 0) { return 0; }
    else if ( n == 1) { return 1; }
    else {
	return fibonacci(n-1) + fibonacci(n-2);
    }
};

console.log(fibonacci (3));

function gcd(a, b){
    if (b > a){
	return gcd(b,a);
    }
    if (a%b == 0){
	return b
    }
    return gcd (b, a%b)
};

console.log(gcd(10,5));

function randomInt(min, max){
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
};

function randomStudent(l){
    var i = randomInt(0, l.length);
    return l[i];
};
