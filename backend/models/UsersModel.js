const {model}= require('mongoose')
const {UserSchema}= require('../schemas/UserSchema')


const UsersModel= new model("User",UserSchema)   

module.exports= {UsersModel}