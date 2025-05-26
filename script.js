//1. need to check weather user insert a big value than the 100 or less.
//2. need to check userfirst value is greater or user second value.
//3. need to check uservalue is perfect divisible by 2 or not.
//4. need to check uservalue is perfect divisible by 3 or not.
//5. need to check uservalue is perfect divisible by 5 or not.
//6. need to check uservalue what is the reminder by divided by 2. 
//7. need to check uservalue what is the reminder by divided by 3. 
//8. need to check uservalue what is the reminder by divided by 5. 

// // 1.
let value = prompt("Enter a number less than or equal to 100:");
if (value > 100) {
    alert("The value is greater than 100.");
}
else{
    alert("The value is less than or equal to 100.");
}

// // 2.
let FirstValue = prompt("enter first value:");
let SecondValue = prompt("enter second value:");
if(FirstValue > SecondValue){
    alert("First value is greater than second value.");
}
else if (FirstValue < SecondValue){
    alert("Second value is greater than first value.");
}
else if (FirstValue == SecondValue){
    alert("Both values are equal.");
}
else{
    alert("Invalid input.");
}

// 3.
let uservalue = parseInt(prompt("Enter your value to check is your value is divisible by 2."))

if(uservalue % 2 == 0 ){
    alert('Number is perfectly divisible by 2.')
}
else (
    alert('Number is not divisible by 2.')
)

// 4.
let uservalue2 = parseInt(prompt("Enter your value to check is your value is divisible by 3."))
if(uservalue2 % 3 == 0 ){
    alert('Number is perfectly divisible by 3.')
}
else (
    alert('Number is not divisible by 3.')
)
// 5.
let uservalue3 = parseInt(prompt("Enter your value to check is your value is divisible by 5."))
if(uservalue3 % 5 == 0 ){
    alert('Number is perfectly divisible by 5.')
}
else (
    alert('Number is not divisible by 5.')
)

// 6.
let value6 = parseInt(prompt("enter the value"))
let remainder6 = value6 % 2
if(value6){
    alert(`the ramainder is ${remainder6}`)
}
else(
    alert('invalid value')
)

// 7.
let value7 = parseInt(prompt("enter the value"))
let remainder7 = value7 % 3
if(value7){
    alert(`the ramainder is ${remainder7}`)
}
else(
    alert('invalid value')
)

// 8.
let value8 = parseInt(prompt("enter the value"))
let remainder8 = value8 % 5
if(value8){
    alert(`the ramainder is ${remainder8}`)
}
else(
    alert('invalid value')
)