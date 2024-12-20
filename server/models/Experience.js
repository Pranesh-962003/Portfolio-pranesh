const mongoose = require('mongoose');



const ExpSchema = new mongoose.Schema({
    comapny:String,
    role:String,
    des:String,
})

const ExpModel = mongoose.model('experiences',ExpSchema)

module.exports = ExpModel