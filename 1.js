var firstNumber = parseInt(prompt("Enter first number:"));
var secondNumber = parseInt(prompt("Enter second number:"));
var result;
if (firstNumber > secondNumber) {
  result = firstNumber;
} else {
  result = secondNumber;
}

console.log(result);

document.getElementById("demo").innerHTML = "The larger number is: " + result;
// test to check a little thing