//import {useEffec} from "react"
// es6 module system -->
// common js module system 

//const modulename=require("uiiuii")
// One is the system modules --->
// Our custom modules 
const {subtract,sum,c}=require("./module");
const filter=require("./example");

console.log(sum(3,5));
console.log(subtract(3,5));
console.log(c);
console.log(filter("Jagrutis"));