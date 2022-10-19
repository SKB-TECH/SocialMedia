const monngoose = require('mongoose');

// connection a la base de donnees

monngoose
.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(())