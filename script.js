/*
step1: prompt the name of user
step2: prompt the user for 3 or 6 mini golf
step3: each hole of golf loop based on answer
step4: calculate based on answer
*/

let name= prompt("What is your name?");
let miniGolf= prompt("Would you like to play 3 or 6 holes of mini golf?");
let total= 0;
for (let i=1; i <= minigolf; i++) {
    let numPutts=( prompt("How many putts per hole +1+") );
    totalputts = totatlputts + parseInt(numpPutts);
}

console.log(name);
console.log(miniGolf);


if (miniGolf == 3, numputts > 9) {
    console.log("Nice try," + name +". your total par was: +"+totalputts+"");
} 
else if (miniGolf == 3, numputts > 9) {
    console.log("Great job, + name +". your total par was: -"+totalputts+"");
} else {
    alert(`Good game,${name}. Your total par was 0.`)
}


if (miniGolf == 6, numputts > 18) {
 console.log("Nice try," + name +".Your total par was: +"+totalputts+"");
}
 else if (miniGolf == 6, numputts < 18) {
    console.log("Great job," +name +"! Your total par was: -"+totalputts+"");
} else {
    alert("Good game, "+ name". Your total par was 0.");
}
