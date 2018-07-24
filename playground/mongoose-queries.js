const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

let id = '5b55e57297c16526f84258f0';

if (!ObjectId.isValid(id)) {
    console.log('Id not valid');
}


Todo.find({ //first match
    _id: id
}).then((todos) => {
   console.log('Todos', todos);
});

Todo.findOne({ //one individual
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
   console.log('Todo by id: ', todo);
}).catch((e) => {
    console.log(e);
});