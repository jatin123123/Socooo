const mongoose = require('mongoose');

const db=async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECT);
        console.log("DB Connect Successfully");
    } catch (error) {
        console.log(error)
    }
}

module.exports=db;