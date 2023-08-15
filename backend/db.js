const mongoose = require ("mongoose");

const mongoURI = 'mongodb://localhost:27017/gym';

const connectToMongo = async () =>{    try{
        await mongoose.connect(mongoURI);
        console.log('connected to mongodb')
    }catch(err){
        console.log('error')
        console.error(err);
    }
}

module.exports = connectToMongo;