
const userService = require('../services/userService')
const BASE = '/api/user';


function addRoutesUser(app) {
    console.log('in user');

    app.get(BASE, (req, res) => {
        userService.query()
            .then(users => res.json(users))
    })
    app.get(`${BASE}/:id`, (req, res) => {
        const userId = req.params.id;
        userService.getById(userId)
            .then((user) => {
                res.json(user)
            })
    })
  


}
module.exports = addRoutesUser

