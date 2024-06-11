var temp;

while (isNaN(temp)) {
    temp = parseFloat(prompt("Enter temperature (C):"));
    if (isNaN(temp)) {
        console.log("Please enter a valid temperature. (Must be a number.)")
    }
}

var message;

if (temp <= 0) {
    message = "It's freezing outside!"  ;  
} else if (temp>0 && temp < 10) {
    message = "It's very cold today!";
} else if (temp>=10 && temp < 20) {
    message = "It's cold today.";
} else if (temp >= 20 && temp < 30 ) {
    message = "It's an average day.";
} else if (temp >=30 && temp < 40) {
    message = "Its hot today!";
} else if (temp >= 40) {
    message = "It's a very hot day!";
}

console.log(message);
document.getElementById('demo').innerHTML = message;