const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://marchalscott:S0l0w00k1E2000@cluster0-bl7yg.mongodb.net/test?retryWrites=true'
    )
        .then(result => {
            console.log('connected!');
            _db = client.db();
            callback();
        })
        .catch( err => {
            console.log(err);
            throw err;
    });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!'
};

exports.mongoConnect = mongoConnect;
exports.getDbv = getDb;

