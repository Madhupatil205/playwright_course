// Object is collection of properties

let person={
    firstName:'Tim',
    lastName:'Joe',
    fullName : function()
    {
         console.log("Function inside object:- ",this.firstName+this.lastName) // can also add methods
    }
}


console.log("To access the object and firstname:-",person.firstName)
// another way of accessing the object properties
console.log("To access the object and lastname:-",person["lastName"])
//to call function in object
console.log("The function for Fullname:- ",+person.fullName())

// to change the value
person.firstName="Tim Dan"
console.log("To access the object and firstname after the change:-",person.firstName)

// to add property
person.gender='male'

console.log("To print person object after adding gender",person)

// to delete the property gender
delete person.gender

console.log("To print person object after deleting gender",person)

// to check if the property exists in the object 
"gender" in person // return is true or false
console.log("if gender is present in the object or not", "gender" in person)

// to print all the keys

for(let key in person)
{
    console.log("Print all the values in object:-",person[key])
}