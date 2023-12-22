const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        //require: true,
    },
    email: {
        type: String,
        //unique: true,
        //require: true,
    },
    password: {
        type: String,
        // min: 6
        // require: true,
    },
    phone:{
        type: String,
    },
    gender:{
        type: String,
        enum: ['female', 'male', 'other'],
        default:'other'
    },
    hearAboutUs:{
        type: [String],
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    insertedAt:{
        type: Date
    },
    modifiedAt:{
        type: Date
    },
},
{
    versionKey:false,
     strict:false,
})

const User = mongoose.model("user", userSchema);
module.exports = User;