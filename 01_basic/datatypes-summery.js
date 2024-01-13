// primitive data type
// 7 type : string,  Number, boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")


const bigNumber = 123124321233412313213n

console.log(typeof bigNumber);

console.log(id === anotherId);

// Referance Type (Non-Primitive) Data Type
// Arry, Object, Functions


const heros = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "mayur",
    age: 22,
}

function myFunction(params) {
    console.log("hello world");
}