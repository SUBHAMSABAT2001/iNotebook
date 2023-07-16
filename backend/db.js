const mongoose = require('mongoose');

const mongoURI= "mongodb+srv://root123:root1234@cluster0.cnxqsip.mongodb.net/inotebook1"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully");
    })

}

module.exports = connectToMongo;
