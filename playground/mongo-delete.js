
const {MongoClient, ObjectID} = require('mongodb');//object destructuring

;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('unable to connect to mongodb server!');
    }

    console.log('connected');

    let db = client.db('TodoApp');

// deletemany
//    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
//         console.log(result);
//    });

//detele one
//     db.collection('Todos').deleteOne({text: 'Some to do'}).then((result) => {
//         console.log(result);
//     });


//find one and delete
//     db.collection('Todos').findOneAndDelete({text: 'Some to do'}).then((result) => {
//         console.log(result);
//     });



    //db.close();
});

