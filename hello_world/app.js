var MongoClient = require('mongodb').MongoClient;

// open the connection to the server
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    
    if(err) throw err;
    
    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {

        if(err) throw err;

        // print the result
        console.dir(doc);

        // close the DB
        db.close();

    });

    // Declare success
    console.dir('Called findOne!');
});