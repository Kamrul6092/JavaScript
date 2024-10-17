const input = require('prompt-sync')();

const _username = "atif";
const _passwaod = "1234";

let username = input("input username:")
let password = input("input password:")


if ((username == username) && (password == password)) {

    console.log("login successful");
}
else {
    console.log("faild");
}
