//const jsonData = require('./student.json')
const jsonData = require('./resource/student.json')
const fs = require('fs')

// jsonData[2].id = '3'
// fs.writeFileSync('./student.json', JSON.stringify(jsonData))


// // console.log(jsonData) 


jsonData[0].class = "12"
fs.writeFileSync('./resource/student.json', JSON.stringify(jsonData))

