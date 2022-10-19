const monngoose = require('mongoose');

// connection a la base de donnees

monngoose
    .connect(process., {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => { console.log("Connection a la bdd reussie") })
    .catch((error) => { console.log("Il y a erreur" + error) })