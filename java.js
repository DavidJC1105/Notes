console.log("Hello world") //This will print hello to console
// Single line comment
/*
Multi line comment
This comment will cover
several lines
*/
//Variables

/*
There are two ways to declare variables in javascript

var a = 10;

let a = 10;

const x = 20;

*/

let a =10;
console.log(a);

const x =20;
console.log(x)

let bob =20;
console.log(bob)
let boB =10;
console.log(boB)

// Datatypes

/*
Numbers
Strings
Booleans
*/

let temp=10; //Datatype number

let temp1="10"; //Datatype string

/*
All numbers in javascript are floating point numbers
*/

/*
All variables in javascript must begin with a
letter or an underscore_. You can not a reserved word
as a variable word.
*/

//Arithmatic Operaters

//Addition

console.log(5+2);

console.log("abc+def");

//Substraction

console.log(5-2);

//multiplication

console.log(5*2);

//division

console.log(5/2);

//exponent

console.log(3**4);

//increment

let h=11;

console.log(h++);

console.log(h);

let k =10;

console.log(++k);

//decerment operator

let c = 5;

console.log(c--);

console.log(c);

console.log(--c);

//comparison operators

//equlas ==

console.log(5 == 3);

console.log(4 == 4);

// not equals !=

console.log(5!=4);

console.log(4!=4);

// greater than >

console.log(5>4);

console.log(4>5);

// less than <

console.log(5<4);

console.log(4<5);

//greater than or less than >=

console.log(5>=4);

console.log(4>=5);

// less than or equal to <=

console.log(5<=4);

console.log(4<=5);

//assignment operators

// equals =
//This is the simple assignment

let n=12;

//add and assignment +=

n +=12;  //This is the same as writing n = n + 12
console.log(n);

//subtract and assignment -=
n -= 4;  // This is the same as n = n-4
console.log(n);

// multiply and assignment *=

n*=5; //this is the same as writing n= n*5
console.log(n);

//divided and assignment /=

let y = 4;

y/=2;  // this is the sasme as writing y=y/4

console.log(y);

// modulus and assignment

y %=2; // this is the same as writing y= y%2

console.log(y);

// consfidential operator ?;

/*
THE CONFIDENTIAL OPERATOR EVALUATES AN EXPRESSION
FOR TRUE OR FALSE. IF TRUE, IT EXECUES THE FIRST STATEMNENT, OTHERWISE IT EXECUTES THE SECOND STATEMENT
*/

let first =10;
let second= 12;

console.log(first>second?"true":"false");

// typeof operator

let mystring = "hello"

console.log(typeof(mystring));

let mynumber = 12;

console.log(typeof(mynumber));

// user input

/*
The prompt() function is used to take input
from the user
The default datatype for input is string
To convert the input to a number, wrap the 
prompt in a number() function call
*/

let mysecondstring= prompt("Enter something")

console.log(mysecondstring);

let mysecondnumber = Number(prompt("enter a number"));
console.log(mysecondnumber);

// IF statement 

/*
The IF statement is a control statement 
which executes IF the tes condition
evaluates to true
*/

let myage=400;

if(myage > 500){
    console.log("Your are over 500 years old")
}

//IF ELSE statement 

/*
IF ELSE is also a control statement
If the test condition is true it executes
the code in the if block, otherwise,
it executes the code in the else block
*/

if (myage>500){
    console.log("your are over 500 years old");
}else{
    console.log("You are not over 500 years old");
}

//IF ELSE - IF ELSE statement

/*
Similar to the two control statements above,
this can test multiple different conditions,
if they all fail they will run the else condition
*/

if(myage>500){
    console.log("You are over 500 years old");
} else if(myage<500){
    console.log("You are not less than 500 years old");
} else{
    console.log("You must be 500 years old");
}


/*
Loguical operators
These test for 'true' and 'false' conditions
*/

/*
Logaical and(&&)
Returns true if both operands are true
*/

a=true
let b=true
console.log(a && b); //Will print true to the console
                    //as both a and b are true
b=false;
console.log(a && b); //Will print false to the console
                    //as a and b are not both true

let firstnumber= 10;
let secondnumber= 20;

if((firstnumber>5) && (secondnumber >15)){
    console.log("first is greater than 5 and second than 15")
}else{
    console.log("one of the expressions failed the test")
}

/*
Logical OR (||) - If either a or b is true then it is all true
*/

a= true;
b= false;

console.log(a||b);

/*
Logical NOT (!) - Reserves the result  if true becomes false
If false becomes true
*/

console.log(!(a));

/*
Switch statement
*/

let myVar= 'A';

switch (myVar){
case 'A':
    console.log("You got an A")
    break;
case 'B':
    console.log("You got a B")
    break;
default:
    console.log("Grade not recognised");
}

