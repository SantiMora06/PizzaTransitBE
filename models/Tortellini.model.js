const { Schema, model } = require('mongoose')

const tortelliniSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
            trim: true,
        },
        description_ro: {
            type: String,
            required: [true, 'Description is required.'],
            trim: true,
        },
        description_hu: {
            type: String,
            required: [true, 'Description is required.'],
        },
        weight: {
            type: Number,
            required: [true, 'Weight is required']
        },
        base_price: {
            type: Number,
            required: "Price is required"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Tortellini = model('Tortellini', tortelliniSchema)

module.exports = Tortellini
