const { Schema, model } = require('mongoose')

const pizzaToppinggSchema = new Schema(
    {
        pizza_id: {
            type: String,
            required: [true, 'Pizza id is required'],
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

const PizzaTopping = model('PizzaTopping', pizzaToppinggSchema)

module.exports = PizzaTopping
