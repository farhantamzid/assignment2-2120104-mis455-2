const numbers = [];
numbers.push(parseFloat(prompt("Enter first of three integers/floats :")));
numbers.push(parseFloat(prompt("Enter second of three integers/floats :")));
numbers.push(parseFloat(prompt("Enter third of three integers/floats :")));
maxNumber = Math.max(...numbers);
console.log("The largest number is: " + maxNumber);
document.getElementById('demo').innerHTML= "The largest number is: " + maxNumber;
