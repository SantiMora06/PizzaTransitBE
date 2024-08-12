const { Schema, model } = require('mongoose')

const toppingSchema = new Schema(
    {
        name_ro: {
            type: String,
            required: [true, 'Name is required.'],
            trim: true,
        },
        name_hu: {
            type: String,
            required: [true, 'Name is required.'],
            enum: ["Mare - Nagy", "Familial - Családi"]
        },
        price_32cm: {
            type: Number,
            required: [true, 'Price for 32cm pizza is required']
        },
        price_50cm: {
            type: Number,
            required: [true, 'Price for 50cm pizza is required']
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Topping = model('Topping', toppingSchema)

module.exports = Topping
