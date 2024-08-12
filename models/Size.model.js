const { Schema, model } = require('mongoose')

const sizeSchema = new Schema(
    {
        pizza_id: {
            type: String,
            required: [true, 'Name is required.'],
            trim: true,
        },
        size_id: {
            type: String,
            required: [true, 'Description is required.'],
            trim: true,
        },
        size_name: {
            type: String,
            required: [true, 'Description is required.'],
            enum: ["Mare - Nagy", "Familial - Családi"]
        },
        diameter: {
            type: Number,
            required: [true, 'Weight is required'],
            enum: [32, 50]
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required']
        },
        price: {
            type: Number,
            required: "Price is required"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Size = model('Size', sizeSchema)

module.exports = Size
