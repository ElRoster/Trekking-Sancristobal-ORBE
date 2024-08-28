const {model, Schema} = require ('mongoose')

const SchemaPermision = new Schema(
    {
        Id:{
            type:Number,
            required:[true,"Id is required"],
            unique:[true,"Id is must be unique"],
            maxlength:[9,"maximum 9 characters"],
            minlength:[3,"minimum 3 characters"],
        },

        Name:{
            type:String,
            required:[true,"Name is required"],
            maxlength:[50,"maximum 50 characters"],
            minlength:[3,"minimum 3 characters"],
        },

        Description:{
            type: String,
            required:[true,"Description is required"],
            maxlength:[250,"maximum 250 characters"],
        },

        State:{
            type: String,
            required:[true,"State is required"]
        }
    }
)

module.exports = model ('Permision', SchemaPermision, 'Permisions' )