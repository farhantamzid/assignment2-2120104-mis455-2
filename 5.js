const date = new Date;
var currentYear = date.getFullYear();
var userName = prompt("Enter your name:");

var fees;

while (isNaN(fees) || fees <= 0) {
    fees = parseInt(prompt("Enter your tuition fee:"));
    if (isNaN(fees) || fees <= 0) {
        console.log("Please enter valid tuition fee. (Greater than 0)");
    }
}

var birthYear;

while (isNaN(birthYear) || birthYear>currentYear) {
    birthYear = parseInt(prompt("Enter your birth year: "));
    if (isNaN(birthYear) || birthYear>currentYear) {
        console.log("Please enter valid birth year. (Current year or before)")
    }
}

var age = currentYear - birthYear;

var discountAmount, discountPercentage, payableFees;

if (fees>50000 && age>21) {
    discountPercentage = 15;
    discountAmount = fees * 0.15;
    payableFees = fees - discountAmount;
} else if (fees>40000 && age >20) {
    discountPercentage = 10;
    discountAmount = fees * 0.10;
    payableFees = fees - discountAmount;
} else if (fees>30000 && age > 19) {
    discountPercentage = 5;
    discountAmount = fees * 0.05;
    payableFees = fees - discountAmount;
} else {
    discountPercentage = 2;
    discountAmount = fees * 0.02;
    payableFees = fees - discountAmount;
}

console.log("Name: " + userName + "\nAge: " + age + "\nApplied Discount Percentage: " + discountPercentage + "%\nTotal amount deducted: " + discountAmount + "\nTotal payable tuition fees: " + payableFees);
document.getElementById('demo').innerHTML = "Name: " + userName + "<br>Age: " + age + "<br>Applied Discount Percentage: " + discountPercentage + "%<br>Total amount deducted: " + discountAmount + "<br>Total payable tuition fees: " + payableFees
