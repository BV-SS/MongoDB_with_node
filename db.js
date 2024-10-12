const { MongoClient } = require('mongodb');

const dbUrl = "mongodb://localhost:27017/bookstore";
let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect(dbUrl)
            .then((client) => {
                dbConnection = client.db()
                return cb();
            })
            .catch((err) => {
                console.log();
                return cb(err);
            })
    },
    getDB: () => dbConnection
}