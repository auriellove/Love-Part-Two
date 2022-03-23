/*
step1: prompt the name of user
step2: prompt the user for 3 or 6 mini golf
step3: each hole of golf loop based on answer
step4: calculate based on answer
*/

let firstName=prompt("What is your name?");
console.log(firstName);
let miniGolf=prompt("Would you like to play 3 or 6 holes of mini golf?");
let total= 0;
for (let n=3; n<20; n+=3) {
    let putts=Number( prompt("How many putts?") );
    total += putts;
}
console.log("Nice try, (firstName)...Your total par was: +(par)");
console.log("Great job, (firstName)! Your total par was: -(par)");
console.log("Good game, (firstName). Your total par was 0.")

if (total >= 20) {
alert("Nice try, (firstName)...Your total par was: +3");
} else if (total <= 20) {
    alert("Great job, (firstName)! Your total par was: -3");
} else {
    alert("Good game, (firstName). Your total par was 0.");
}