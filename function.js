// function hlwdrone() {

//     console.log('hlw kemon acho')
// }

// hlwdrone()

// function tsum(n1, n2) {
//     return n1 + n2
// }

// let sum = tsum(5, 8)
// console.log(sum)


// let tsum = function (n1, n2) {
//     return n1 + n2
// }

// let sum = tsum(5, 8)
// console.log(sum)

// let tsum = (n1, n2, n3) => {
//     return n1 + n2 + n3
// }

// let sum = tsum(5, 8, 9)
// console.log(sum)

// let tsum = (n1, n2, n3) => n1 + n2 + n3


// let sum = tsum(5, 8, 9)
// console.log(sum)

// let tsum = (n1, n2, n3) => {
//     return n1 + n2 + n3
// }
// module.exports = tsum

function tsum(n1, n2, n3) {
    return n1 + n2 + n3;
}


function tsub(n1, n2, n3) {
    return n1 - n2 - n3;
}

module.exports = { tsum, tsub }