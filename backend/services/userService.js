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


// function addUserTemplate(template, id) {
//     const templateId = new ObjectId(template.id)
//     getById(id).then(currUser => {
//         console.log(currUser);
//         currUser.templateParts.push(template);
//     })
// }


// function removeUserTemplate(template, id) {
//     const templateId = new ObjectId(template.id)
//     getById(id).then(currUser => {
//         console.log(currUser);
//         currUser.templateParts.splice(id, 1);
//     })
// }



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
