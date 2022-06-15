const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashPassword, done) => {
    return bcrypt.compare(plainPassword, hashPassword, done)
}

module.exports = {
    hashPassword,
    comparePassword
}
