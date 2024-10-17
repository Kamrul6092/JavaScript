
// for (let i = 0; i < 15; i++) {
//     console.log(i);
// }

// const a = 10;
// a = 20;

// let sentence = "i love";
// let city = "dhaka";
// //console.log(sentence + " " + city)
// console.log(`${sentence} ${city}`)
// let a = true
// console.log(typeof (a))

// let a = "20";
// let b = "30";

// // let c = parseInt(a)
// // let d = parseInt(b)

// console.log(a + b)
// //console.log(c + d)

// let a = "10";
// let b = Number(10);
// console.log(b);

// let a = 10.2154
// console.log(a.toFixed(3))

// let a = 10.2154
// console.log(a.toPrecision(3))

// const { studentArray } = require('./object.js')
// console.log(studentArray[1].name)

// const myjson = require('./student.json')
// console.log(myjson[1].name)

// const m = require('./function.js')
// let sum = m(1, 2, 3)
// console.log(sum)



const { tsum, tsub } = require('./function.js')
let sum = tsum(1, 2, 3)
let sub = tsub(7, 2, 3)
console.log(sum)
console.log(sub)