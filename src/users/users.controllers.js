const crypto = require('../utils/crypto');
const uuid = require('uuid');

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

const registerUser = (data) => {
    const hashedPassword = crypto.hashPassword(data.password);
    const userId = uuid.v4();
    const newUser = {
        id: userId,
        ...data,
        password: hashedPassword,
        active: false,
        role: 'normal',
    };
    usersDB.push(newUser);
    return {
        message: `User created succesfully with the id: ${userId}`,
        user: newUser,
    };
};

console.log(
    registerUser({
        name: 'Sahid',
        email: 'admin@admin.com',
        password: '1234',
        username: 'root',
        age: 21,
        image_profile: '',
    })
);
