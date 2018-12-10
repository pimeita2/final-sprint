const express = require('express')
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback');
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors({
    origin: ['http://localhost:8080'],
    credentials: true
}));
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Hello Miss')
})

const addTemplateRoutes = require('./routes/templateRoutes')
addTemplateRoutes(app);
const addUserRoutes = require('./routes/userRoutes')
addUserRoutes(app);
const addInviteRoutes = require('./routes/inviteRoutes')
addInviteRoutes(app);

// app.post('/singup', (req, res) => {
//     const nickname = req.body.nickname
//     userService.addUser({ nickname })
//       .then(user => res.json(user))
//   })

//   app.put('/login', (req, res) => {
//     const nickname = req.body.nickname
//     userService.checkLogin({ nickname })
//       .then(user => {
//         req.session.user = user
//         res.json(user)
//       })
//   })

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening at ${port}`))

// app.use(history());
