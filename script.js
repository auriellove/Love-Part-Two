/*
step1: prompt the name of user
step2: prompt the user for 3 or 6 mini golf
step3: each hole of golf loop based on answer
step4: calculate based on answer
*/

let Par= 0;
let Total= 0;
let name= prompt("What is your name?");
console.log(name);
let miniGolf= 0;
miniGolf=parseInt(prompt("Hell0" + name +" Would you like to play 3 or 6 holes?"));
Par= (3*miniGolf);
console.log(miniGolf);
for (let i= 0; i < miniGolf; i++) {
    Total= Total + parseInt(prompt(`How many putts for hole${i + 1}? (par 3)`));
}

Addsum= Total - Par;
console.log(Addsum);

if (Total > Par) {
    console.log(`Nice try,${name}! Your total was ${Addsum}`);
} else if (Total < Par) {
    console.log(`Great Job,${name}! Your total was ${Addsum}`);
} else (Total == Par) 
    console.log(`Good game,${name}! Your total was ${Addsum}`);
