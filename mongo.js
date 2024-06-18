const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login-tut")
.then( () => {
    console.log("Mongodb Connected")
}).catch( () => {
    console.log("failed")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    }
})

const collection = mongoose.model("collection here",newSchema)

module.exports=collection