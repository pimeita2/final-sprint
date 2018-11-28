const mongoService = require('./mongoService')
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    remove,
    add,
    update
}
function query(filter) {
    // console.log('in query', filter);
    // const byName = filter.name
    // const byType = filter.type
    // const sortBy = filter.sortBy
    // const sortObj = (sortBy === 'name') ? { name: 1 } : { price: 1 }
    // const findFilters = [{ name: { $regex: `.*${byName}.*` } }]
    // if (byStatus !== 'all') {
    //     if (byStatus === 'inStock') findFilters.push({ inStock: true })
    //     else findFilters.push({ inStock: false })
    // }
    // if (byType) {
    //     findFilters.push({ type: byType })
    // }
    // return mongoService.connectToDb()
    //     .then(dbConn => {
    //         const templateCollection = dbConn.collection('template');
    //         return templateCollection.find({ $and: findFilters }).sort(sortObj).toArray();
    //     })
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.find().toArray();
        })
        .catch(err=>{
            console.log('err:', err);
        })
      
}

function getById(templateId) {
    templateId = new ObjectId(templateId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.findOne({ _id: templateId })
        })
}
function remove(templateId) {
    templateId = new ObjectId(templateId)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');
            return templateCollection.remove({ _id: templateId })
        })
}

function add(template) {
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template');          
            return templateCollection.insertOne(template)
            .then(result=>{
                template._id = result.insertedId;
                return template; 
            })
        })
}

function update(template) { 
    const templateId = new ObjectId(template.id)
    return mongoService.connectToDb()
        .then(dbConn => {
            const templateCollection = dbConn.collection('template'); 
            return templateCollection.updateOne({_id:templateId}, { $set: template } ) 
            .then (result=>{
                return template;
            });      
    
        })
}



// function add(template) { // before
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const templateCollection = dbConn.collection('template');          
//             return templateCollection.insertOne(template)
//         })
// }

// function update(template) {//before 
//     const templateId = new ObjectId(template.id)
//     return mongoService.connectToDb()
//         .then(dbConn => {
//             const templateCollection = dbConn.collection('template'); 
//             return templateCollection.findOneAndUpdate({templateName: template.name}, {$set:{templateParts:template}})         
    
//         })
// }