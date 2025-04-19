//Printing the string in javascript
console.log("To print in javascript")

/* comments for multiple lines*/

// 12.02.2025

console.log("Hello world")

let a=4
console.log(a)
console.log(typeof(a))

let b=234.5
console.log(typeof(b))

//Redeclaring

let x=10
let y=20
let c="JavaScript"
// This will throw identifier has been already declared error
//let c=x+y

// var will not throw this error
var f=10
var g=20
var h="JavaScript1"
var h=f+g
console.log(h)

// Reassigning can be done for both let and var
c=143
h=341
console.log(c,h)


//const var cant be changed in code anywhere
const p="move"
//This below line will throw error :- TypeError: Assignment to constant variable.
// p=1

// -------------------------------------------------------------------------------------
// Conditions and loops

const flag=true

if(!flag) // the only expression is false not the value
console.log("Condition is satisfied")
else
console.log("Condition is not satisfied")


// -- while loop

let i=0
while(i<3)
{
i++
console.log(i)
}


//------------ do while loop, atleast once the loop will execute

do{
i++
}while(i<7)
console.log(i)

//----------- for loop

for(let j=0;j<4;j++){
if(j%2==0)
{
    console.log(j)
}
}

//--------------------------
//17.02.2024
// Arrays
// array initialising
console.log("Array chapter")
let marks1=Array(6)
var marks=new Array(12,23,34,45,56,67)

var marks=[223,3,5,56]
console.log(marks[2])

// to assign specific value to element in array
marks[2]=143

console.log(marks[2])
console.log("Whole array is displayed",marks)
console.log("Length of array",marks.length)

// to append new element at the end
marks.push(78)
console.log("Whole array is displayed",marks)
  


//------------------------------------------------------

//19.04.2025 