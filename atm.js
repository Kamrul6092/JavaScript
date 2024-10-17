const prompt = require('prompt-sync')();
console.log("1. Check balance\n2. Check statement\n3. Cash withdraw\n4. Money transfer")
let input = parseInt(prompt("input any from following numbers:"));
switch (input) {
    case 1:
        console.log("you have selected balance check option");
        break;
    case 2:
        console.log("you have selected statement check option");
        break;
    case 3:
        console.log("you have selected cash withdrawn option");
        break;
    case 4:
        console.log("you have selected cash money transfer option");
        break;
    default:
        console.log("You must select any of the following numbers.");

}