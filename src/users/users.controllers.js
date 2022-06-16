const crypto = require('../utils/crypto');
const uuid = require('uuid');
const sequelize = require('../models/index').sequelize;
const initModels = require('../models/init-models');

const usersDB = [];
/*
    {
        id: uuid
        name : "" ,
        email : "" ,
        password : "" ,
        username: "",
        age: ,
        image_profile: "",
        status: "",
        role: "",
        created_at: "",
        updated_at: ""
    }
*/

const models = initModels(sequelize)

const registerUser = async (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const userId = uuid.v4();
    //! const newUser = {
    //!     id: userId,
    //!     ...data,
    //!     password: hashedPassword
    //! };
    //! usersDB.push(newUser)

    const newUser = models.users.create({
        id: userId,
        ...data,
        password: hashedPassword
    })
    //? SQL Query: insert into users (id, ...data, password) values (.....)

    return {
        message: `User created succesfully with the id: ${userId}`,
        user: newUser,
    };
};

const getAllUsers = async () => {
    const users = await models.users.findAll({
        attributes : {
            exclude: ["password"]
        }
    })
    // select * from users;
    return users
}

const getUserByEmail = (email) => {
    const user = usersDB.filter((item) => item.email === email);
    return user[0];
};

module.exports = {
    registerUser,
    getUserByEmail,
    usersDB,
    getAllUsers
};
