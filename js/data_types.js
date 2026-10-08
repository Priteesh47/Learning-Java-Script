// console.log("Hello World"); //print
//1. single line comment
//2. multi line comment

// the double backslash is used to write single line comment and the forward slash and asterisk is used to write multi line comment.
// this is the multi line comment (/**/)
/*
Primitive Data Types:

String, NUmber, Null, Boolean, undefined

- Default datatype is String
- Comment is simply used to understand the code. 


Complex Data Types:

Object: (Object,Array, Date)
*/

const string = "Priteesh is a good boy"; //String"; Character, Words and more

const pi = 3.14; //Number

//const largeNumber = BigInt(3.14); //BigInt Typecasting from integer to big int
let x; //undefined variable cannot be used as the const use the variable let
console.log(x);
//console.log(largeNumber);

const d = null;
console.log(d); //null

const is_male = true;
console.log(is_male); //boolean

//Type conversion or Type cohersion

const value = "12";

// console.log(typeof value); // use this to see the datatype

console.log(typeof value);

const actualNumber = Number(value); //Typecasting from string to number variables

console.log(typeof actualNumber); //12

const Bu = 12;

console.log(typeof Bu); //number

const n = String(Bu);
console.log(n);
