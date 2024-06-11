var age = parseInt(prompt("Enter your age:"));
if (age>17) {
    console.log("You are eligible to cast vote.");
    document.getElementById("demo").innerHTML = "You are eligible to cast vote.";
} else {
    console.log("You are not eligible to cast vote.");
    document.getElementById("demo").innerHTML = "You are not eligible to cast vote.";
}
