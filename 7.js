const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
;

const vowels = ["a","e","i","o","u","A","E","I","O","U"];

var input;

while (input === undefined || input === null || !alphabet.includes(input)) {
    input = prompt("Enter any character from the alphabet:");
}

var type;

if (vowels.includes(input)) {
    type = "Vowel"
} else {
    type = "Consonant"
}

console.log("You entered a: " + type);
document.getElementById('demo').innerHTML = "You entered a: " + type; 