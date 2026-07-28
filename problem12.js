//Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
let mark = 100;
if (mark >= 80&& mark <= 100) {
    console.log("This grade is A+");
}
else if (mark >= 70) {
    console.log("This grade is A");
}
else if (mark >= 60) {
    console.log("This grade is A-");


}
else if (mark >= 50) {
    console.log("This grade is B");
}
else if (mark >= 40) {
    console.log("This grade is B-");
}
else if (mark>=33) {
    console.log( "This grade is D ");
}
else if (mark <=33){
    console.log("This grade is fail");

}
    
