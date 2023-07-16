const mongoose = require('mongoose');

const mongoURI= "mongodb+srv://root:root@cluster0.cnxqsip.mongodb.net/inotebook1"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully");
    })

}

module.exports = connectToMongo;
