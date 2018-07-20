//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//object destructuring

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
       return console.log('unable to connect to mongodb server!');
    }

    console.log('connected');


    client.db('TodoApp').collection('Todos').insertOne({
        _id: 12345,
        text: 'Some to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to inset');
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.db('TodoApp').collection('users').insertOne({
        name: 'rasekh',
        age: '26',
        location: 'kerman'
    }, (err, result) => {
        if (err) {

        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
    client.close();
});

