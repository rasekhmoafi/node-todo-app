//const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

data = {
    id: 10
};

let token = jwt.sign(data, '123abc');//takes data and create hash
console.log(token);
let decoded = jwt.verify(token, '123abc');   //takes token and secret and make sure to verify
console.log('decoded: ', decoded);

// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString(),// sulting the hash
// };
//
// token.data.id = 5;// someone want to change data and re hash
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
//
// }
// else {
//     console.log('data was changed. dont trust!');
// }