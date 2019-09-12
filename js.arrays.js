//JS.Arrays
//JS.Arrays.1
'use strict'
function play(n) {
	return Math.floor(Math.random () * n + 1)
}

let sides = [0, 0, 0, 0, 0, 0];
let roll;

roll = play(6); //play() ændres til 2 hvis det skal bruges til f.eks en mønt
if (roll === 1)
    sides[0]++;
else if
    (roll === 2)
    sides[1]++;
else if
    (roll === 3)
    sides[2]++;
else if
    (roll === 4)
    sides[3]++;
else if
    (roll === 5)
    sides[4]++;
else
    sides[5]++;

console.log(roll);

//JS.Arrays.2 Palindrome
'use strict'
let text = prompt('Indtast ord');
let Palindrome = function Palindrome(s) {
	if (s.length <= 1 )	{ //Hvis str. length er 0 eller 1 = true
		return true;
	}
	return first(s) === last(s) && Palindrome(middle(s));
}

function first(s) {
    return s.charAt(0); 
}

function last(s) {
    return s.charAt(s.length - 1); 
}

function middle(s) {
    return s.substring(1, s.length -1);
}

console.log (Palindrome(text));

//JS.Arrays.3a
'use strict'
function play(n) {
	return Math.floor(Math.random () * n + 1)
}

let sides = [0, 0, 0, 0, 0, 0];
let roll;

roll = play(6);
if (roll === 1)
    sides[0]++;
else if
    (roll === 2)
    sides[1]++;
else if
    (roll === 3)
    sides[2]++;
else if
    (roll === 4)
    sides[3]++;
else if
    (roll === 5)
    sides[4]++;
else
    sides[5]++;

const myfunc = function (item) {
	return item === sides[0];
}
console.log (sides.every(myfunc));

//JS.Arrays.3b

