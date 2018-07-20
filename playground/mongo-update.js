
const {MongoClient, ObjectID} = require('mongodb');//object destructuring



MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('unable to connect to mongodb server!');
    }

    console.log('connected');

    let db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b517d7519b3e71b9434381b")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false//we dont want return pre one
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID("5b517d5114a2e22f6c8e4af7")
    }, {
        $set: {
            name: 'jasmin'
        },
        $inc: {
            age: 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
       console.log(result);
    });


    //db.close();
});