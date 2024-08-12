const { Schema, model } = require('mongoose')

const spaghettiToppinggSchema = new Schema(
    {
        spaghetti_id: {
            type: String,
            required: [true, 'Spaghetti id is required'],
        },
        topping_id: {
            type: String,
            required: [true, 'Topping id is required']
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const SpaghettiTopping = model('SpaghettiTopping', spaghettiToppinggSchema)

module.exports = SpaghettiTopping
