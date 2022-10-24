const express = require('express')
const db = require('./config/db')
const userRoutes = require('./routes/user.route')
const postRoutes = require('./routes/post.route')
const bodyParse = require('body-parser')
const cookieParser = require('cookie-parser')
//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const { checkUser, requireAuth } = require('./middleware/auth')
const app = express()

// les middlewares niveau application
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: false }))
app.use(cookieParser())

// verifie le token
app.get("*", checkUser)
app.get("/jwtid", requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

// les middlewares routage
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

//lancement du server
app.listen(process.env.PORT || 4200, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})