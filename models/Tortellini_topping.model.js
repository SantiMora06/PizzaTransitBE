const { Schema, model } = require('mongoose')

const tortelliniToppinggSchema = new Schema(
    {
        tortellini_id: {
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

const TortelliniTopping = model('TortelliniTopping', tortelliniToppinggSchema)

module.exports = TortelliniTopping