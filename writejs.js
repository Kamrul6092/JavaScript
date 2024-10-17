const myStudentArray = require('./student.json');

const fs = require('fs')
// let newstudentobj = {
//     id: "6",
//     name: "mr klid",
//     class: "7"

// }

// let studentobj = [];
// studentobj.push(newstudentobj)
// console.log(studentobj)



let newstudentobj = {
    id: "6",
    name: "mr khalid",
    class: "7"

}


myStudentArray.push(newstudentobj)

fs.writeFileSync('./student.json', JSON.stringify(myStudentArray))

console.log(myStudentArray)
