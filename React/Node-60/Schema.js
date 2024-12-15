const {mongoose} = require('./db');

const Schema = mongoose.Schema

const RegistrationSchema = new Schema({
    Email: {type:String, required:true},
    Password: {type:String, required:true},
    Confirm Password: {type:String },

});




const RegistrationModel = mongoose.model('Registration', RegistrationSchema);



module.exports = {RegistrationModel,BookingModel};