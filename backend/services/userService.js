const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

// const CURR_COLLECTION='user';
module.exports = {
    query,
    getById,
    remove,
    add,
    update

}
function query() {
    return mongoService.connectToDb()
        .then(dbConn => {
            const collection = dbConn.collection('user');
            return collection.find().toArray();
        })
        .catch(err => {
            console.log('err:', err);
        })
}


function getById(userId) {
    const userId = new ObjectId(userId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection =dbConn.collectiom('user');
            return userCollection.findOne({_id: userId})
            })
}

function remove(userId) {
    userId = new ObjectId(userId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection('user');
            return userCollection.remove({ _id: userId })
        })
}


function add(user) {
    user.modified = new Date(user.modified)
    return mongoService.connectToDb()
        .then(dbConn => {
            const collectiom = dbConn.collection('user');
            return collectiom.insertOne(user)
                .then(result => {
                    user._id = result.insertedId;
                    return user;
                })
        })
}

function update(user) {
    const userId = new ObjectId(user.id)
    return mongoService.connectToDb()
        .then(dbConn => {
            const userCollection = dbConn.collection('user');
            return userCollection.updateOne({ _id: userId }, { $set: user })
                .then(result => {
                    return user;
                });

        })
}

function checkLogin({ nickname }) {
    return mongoService.connect()
        .then(db => db.collection('user').findOne({ nickname }))
}










