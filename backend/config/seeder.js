const User = require("../models/userModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.insertuser =()=>{

    User.findOne({'email':'admin@gmail.com'}).exec()
    .then(user=>{
        if(user == null)
        {
            let userObj = new User()
            userObj.name = 'admin'
            userObj.email = 'admin@gmail.com'
            userObj.password = bcrypt.hashSync('admin',saltRounds)
            userObj.user_type = 0
            userObj.save()
            console.log("Admin Register")
        }
        else{
            console.log("Admin Already Register")
        }
    })
    .catch(err=>{
        console.log("Error while adding admin")
    })
}