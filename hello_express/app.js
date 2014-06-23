var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var mongoclient = new MongoClient(new Server('localhost', 27017,
    {'native_parser' : true}));

var db = mongoclient.db('course');

app.get('/', function(req, res) {
    db.collection('hello_mongo_express').findOne({}, function(err, doc) {

        if(err) throw err;

        res.render('hello', doc);

    });
});

app.get('*', function(req, res) {
    res.send('Page Not Found!', 404);
});

mongoclient.open(function(err, mongoclient) {
    
    if(err) throw err;

    app.listen(8080);
    console.log('server started at http://localhost:8080');
});