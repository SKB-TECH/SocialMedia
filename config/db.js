const monngoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })
// connection a la base de donnees
monngoose
    .connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => { console.log("Connection a la bdd reussie") })
    .catch((error) => { console.log("Il y a erreur" + error) })