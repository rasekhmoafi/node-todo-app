//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');//object destructuring

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
       return console.log('unable to connect to mongodb server!');
    }

    console.log('connected');

    // client.db('TodoApp').collection('Todos').find({_id: new ObjectID('5b508ea97e2b32241c011971')}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch');
    // });

    client.db('TodoApp').collection('Todos').find().count().then((count) => {
        console.log('Todos count: ', count);
    }, (err) => {
        console.log('Unable to fetch');
    });

});

