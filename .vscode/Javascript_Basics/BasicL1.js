//Printing the string in javascript
console.log("To print in javascript")

/* comments for multiple lines*/


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
// To delete the element at the end
marks.pop()
console.log("After the deletion of last element", marks)
// to add element at the beginning.
marks.unshift(18)
console.log("After the element is added at the beginning", marks)

// To find out the index of element
console.log("To find the index of element",marks.indexOf(18))


// to check if the element is present or not
console.log("To check if the element is present in array or not",marks.includes(120))


// to break the array
console.log("The actual array before slicing",marks)
subMarks=marks.slice(2,6)
console.log("The sliced array is",subMarks)

// to the sum of all the elements in the array
var sum=0;
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
console.log("The sum of array elements using for loop",sum)

// reduce method will iterate through array and perform the function (example :- to sum all the elements)
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log("The total of array elements using sum",total)


// to print only even numbers in array
var scores=[12,23,28,57,88,56]
var evenScores=[]

for(let i=0;i<=marks.length;i++)
    {
       if(scores[i]%2==0)
       {
        evenScores.push(scores[i])
       }
    }

console.log("Printing only even numbers in array",evenScores)

// The filter method will filter the element of array according to condition
let newFilterEvenScores=scores.filter(score=>score%2==0)

console.log("The filter of array using filter method",newFilterEvenScores)

// to multiple all the even elements with 3 and sum it up
let mappedScores=newFilterEvenScores.map(score=>score*3)
console.log("The even elements are multiplied by 3",mappedScores)
let evenElementSum=mappedScores.reduce((sum,mark)=>sum+mark,0)
console.log("Sum of even elements which are multiplied by 3",evenElementSum)

// To reduce the line of code

var scores1=[12,23,24,45]

let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,mark)=>sum+mark,0)
console.log("The sum of array which is filtered and multiplied using less lines of code",sumValue)

// To sort arrays:- type (arrays with string and arrays with number)
let fruits=["banana","mango","apple","cherry"]
fruits.sort() // make sure all the string are in caps or small letters
console.log("Strings are sorted",fruits)
// to print the descending order
console.log("Printing the descending order sorted string array",fruits.reverse())

// sort method is used for sorting strings, if we use this to int it might break and give wrong order
// Sort method converts int into strings and then sorts the elements
// example:-

var numbers=[12,23,65,39,9]
numbers.sort()
console.log("Sorting number with sort method",numbers)


// to customize the sort method
// using function method
/* numbers.sort(function(a,b)
{
    return a-b //  bubble sort, returning the element which has less different to next element

}
) */

numbers.sort((a,b)=>a-b)
console.log("Number array sorted in ascending order",numbers)

// Descending order
numbers.sort((a,b)=>b-a)
console.log("Number array sorted in descending order",numbers)

// Functions
// The functions with name and declaration
function add(a,b)
{
  return a+b
}

let sum1=add(2,3)


// there are functios with no name:- Anonymous function
// Anonymous functions need to be assigned to a variable

let sumOfInt=function(c,d) // using function key word
{
    return c+d
}

// without using function keyword
let sumOfNum=(c,d)=>c+d

// call this undefined by using variables
console.log("Using function keyword output",sumOfInt(7,8))
console.log("Using without function keyword output",sumOfNum(10,20))


// scope of variables

// var keyword
//it is either global level or functional level

var greet="Evening"

if(1==1)
{
    var greet="Afternoon"
}

function scope()
{
     var greet="Night" // the scope of this variable is restricted to this function
     return greet
}

console.log("Var keyword scope check, it can be changed in the conditions :- ", greet)

// to overcome this confusion let keyword was introduced
// let keyword scope :- global or block level {}
// let keyword can be re-initialized

let greet1="Evening"
greet1="Late evening"

if(1==1)
{
    let greet1="Afternoon" // the scope of this variable is restricted to this block
}

function scope()
{
     var greet="Night" // the scope of this variable is restricted to this function
     return greet
}

console.log("Let keyword scope check :- ", greet1)

// const is keyword which can't be re-initialized


// String manipulation

let day='Tuesday'
console.log("Get the 3rd index char:- ",day[2])
console.log("The length of the string:- ",day.length)

let subDay=day.slice(0,4)
console.log("The sliced string:- ",subDay)

// split the string
let splitDay=day.split("s")
console.log("The string is splited and we print 2nd sub string",splitDay[0])

// when the string is split there will a space will be added.
console.log("Substring length after split:- ",splitDay[0].length)
// trim the spaces in the string
console.log("Trimming the space in the substring",splitDay[0].trim().length)

// Need to check this once again, there is no difference  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Casting string into int

let date="23"
let date1="27"
let diff=parseInt(date1)-parseInt(date)
console.log("Convert string into int and find difference:+ ",diff)
diff.toString() // to convert int to string

// concat string
let newQuote=day+" is fun day"
console.log("Concat string usiing + :- " ,newQuote)
let val=newQuote.indexOf("day")
console.log("Find the day in the whole string, it will return 1st one:-",val)
// to find the 2nd day in the string
let val1=newQuote.indexOf("day",5)
console.log("To find the 2nd day in the line:- ",val1)
// to find how many time the day occured in the line 
let count=0
let value=newQuote.indexOf("day")
while(value!==-1)
    {

    count++
    value=newQuote.indexOf("day",value+1)

    }

console.log("To find the count of the day in the line:-",count)




