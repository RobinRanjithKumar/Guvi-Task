const mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://probin1843:8nVMNRq8y6jGPMuX@cluster.b2xi1.mongodb.net/'

const connectDb = async () => {
    if(!mongoose.connection.readyState ===1){

        await mongoose.connect(dbUrl)

    }
    console.log(mongoose.connection.readyState,'mongoose.connection.readyState');

}

module.exports = {connectDb,mongoose};