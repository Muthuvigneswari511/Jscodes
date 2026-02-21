//let,var,const
let x=10;               //declare and initialize
console.log(x);         
let y;                  //declare
console.log(y);
y=20;                   //initialize
console.log(y);
let userName="muthu";  //camelCase convention
let user_name="mu";     //underscore not recommended old convention not current;=ly used
console.log("Welcome "+userName);
console.log("Hi"+ user_name);
console.log("Bye "+userName);

//incorrect variable convention
/*
let 5date; // wrong
let john@Jane="friends"; //wrong
*/

//Reserved keywords
//let new='data';
//let function=2;

//symbols in a variable name
//let #function=3;
//let @function='data'
let $mu='data';

//constants
const PI=3.1415;
console.log(PI);

//var
var job="Developer";
console.log(job);

var job="manager";
console.log(job);

/*
scope of the variable
var= function scoped
let,const = block scoped
*/

var gender='m';
console.log(gender);

var gender='f';
console.log(gender)

let b=2;
b=3;
console.log(b);
