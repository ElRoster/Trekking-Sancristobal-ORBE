const {model, Schema} = require ('mongoose')

const UserSchema = new Schema (
    {
        Id:{
            type:Number,
            unique:true,
            required:[true,"Id is required"],
            maxlength:[9,"maximun 9 characters"],
            minlength:[3,"minimun 3 characters"]
        },

        User_Name:{
            type:String,
            required:[true,"User name is required"]
        },

        Email:{
            type:String,
            required:[true,"Email is required"],
            unique:[true,"Email does exist"],
            minlength:[5,"Please enter a valid email"]
        }
    }
)

module.exports = model('User', UserSchema, 'Users')