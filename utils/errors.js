// la gestion des erreurs pour la platforme

exports.signupError = (err) => {
    let errors = { pseudo: "", email: "", password: "" }

    if (err.message.includes("pseudo")) {
        errors.pseudo = "le pseudo est incorrecte ou deja pris"
    }

    if (err.message.includes("email"))
        errors.email = "l'adresse email est incorrecte"

    if (err.message.includes("password"))
        errors.password = "le password est incorrecte doit contenir au moin 6 caracteres"

    if (err.code === 1100 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "ce pseudo est deja enregistre"

    if (err.code === 1100 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "cette adresse email est deja enregistre"

    return errors
}

// verification si l'email ou password ne contiennent pas d'erruers
exports.signInError = (err) => {
    let errors = { email: "", password: "" }
    if (err.message.includes("email"))
        errors.email = "Email est inconnu"
    if (err.message.includes("password"))
        errors.password = "le mot de passene correspond pas"
    return errors

}