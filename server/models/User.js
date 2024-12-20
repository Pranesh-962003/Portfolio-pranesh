const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
        title:String, 
        description:String,
        link1:String,
        link2:String,
        image:String

})


const ProjectModel = mongoose.model('Projects',UserSchema)

module.exports = ProjectModel;