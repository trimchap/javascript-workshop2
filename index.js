console.log('go you!');
let name = 'Trish';
const interestRate = 1;
let selectedColor = null;
console.log(selectedColor)
// class
let person = {
    firstName: 'Trish',
    lastName: 'Tunney',
    age: 55
};
// dot notation
person.firstName = 'Tri';
console.log(person.firstName);
// bracket notation
person['firstName'] = 'try';
console.log(person.firstName);
// bracket notation is good for if a user is
// selecting the criteria at runtime, it can
// be passed using a variable and we can't
// use dot notation
let selection = 'lastName'
person[selection] = 'what?';
console.log(person[selection]);

let selectedColors = ['red','blue']; // array
console.log(selectedColors);
selectedColors[2] = 12;
console.log(selectedColors);

function greet(firstName,lastName) {
    console.log('hello ' + firstName + ' ' + lastName)
}

// call function 
greet('John','Smith')
greet('Tri','Everything')

function square(number){
    return number * number;
}
console.log("call square of 2")
console.log(square(2));


