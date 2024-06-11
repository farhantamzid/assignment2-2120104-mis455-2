var mark;
while (isNaN(mark) || mark<0 || mark > 100) {
    mark = parseInt(prompt("Enter your mark (0-100):"));
    if (isNaN(mark) || mark < 0 || mark > 100){
        console.log("Mark out of range. Please enter again. (0-100)");
        document.getElementById('demo').innerHTML = "Mark out of range. Please enter again. (0-100)";
    }
}
var grade;
if (mark >= 90) {
    grade = "A";
} else if (mark >=85 && mark < 90) {
    grade = "A-";
} else if (mark >= 80 && mark < 85) {
    grade = "B+";
} else if (mark >= 75 && mark < 80) {
    grade = "B";
} else if (mark >= 70 && mark < 75) {
    grade = "B-";
} else if (mark >= 65 && mark < 70) {
    grade = "C+";
} else if (mark >= 60 && mark < 65) {
    grade = "C";
} else if (mark >= 55 && mark < 60) {
    grade = "C-";
} else if (mark >= 50 && mark < 55) {
    grade = "D+";
} else if (mark >= 45 && mark < 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Your grade is: " + grade);
document.getElementById('demo').innerHTML = "Your grade is: " + grade;
