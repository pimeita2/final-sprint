const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

const COLLECTION_NAME = 'user';

module.exports = {
    query,
    getById,
    remove,
    add,
    update,
    checkLogin

}
function query() {
    return mongoService.connectToDb()
        .then(dbConn => dbConn.collection(COLLECTION_NAME).find({}).toArray())
            .then (users =>{
                users.forEach(user => {
                    delete user.password;
                })
        return users;
})
}


function getById(userId) {
    var userId = new ObjectId(userId)
    return mongoService.connectToDb()
        .then(dbConn => dbConn.collection(COLLECTION_NAME).findOne({userId}))
            .then(user => {
                delete user.password;
                return user;
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
            const collection = dbConn.collection('user');
            return collection.insertOne(user)
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

function checkLogin({ nickname, password }) {
    return mongoService.connectToDb()
        .then(dbConn => dbConn.collection(COLLECTION_NAME).findOne({ nickname }))
        .then(user =>{
                if (user.password === password) return user;
            throw new Error('The Password does not match');
        })
}








