const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

// const CURR_COLLECTION='user';
module.exports = {
    query,
    getById,


}


function query() {
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('user');
            return templateCollection.find().toArray();
        })
}

function getById(id) {
    const _id = new ObjectId(id)
    return mongoService.connectToDb()
        .then(db => db.collection('user').findOne({ _id }))
}



function addUser({ nickname }) {
    var user = { nickname }
    return mongoService.connect()
        .then(db => db.collection('user').insertOne(user))
        .then(res => {
            user._id = res.insertedId
            return user
        })
}
function checkLogin({ nickname }) {
    return mongoService.connect()
        .then(db => db.collection('user').findOne({ nickname }))
}
