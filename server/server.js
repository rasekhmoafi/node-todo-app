let express = require('express');
let bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
const _ = require('lodash');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
       res.send(doc);
       console.log('inserted successfully!');
    }, (e) => {
        res.status(400).send(e);
    });
});



// post /users
app.post('/users', (req, res) => {

    let body = _.pick(req.body, ['email', 'password']); //pick select and pick what you want and create an object
    let user = new User(body);



    user.save().then((user) => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
   let id = req.params.id;
   if (!ObjectId.isValid(id)) {
       return res.status(404).send();
   }

   Todo.findById(id).then((todo) => {
       if (!todo) {
           return res.status(404).send();
       }

       res.send({todo, name: 'rasekh moafi'});
   }).catch((e) => {
       res.status(400).send();
   });
});



app.listen(port, () => {
    console.log(`Started on port ${port}`);
});