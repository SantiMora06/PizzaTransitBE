const { Schema, model } = require('mongoose')

const nutritionSchema = new Schema(
    {
        item_id: {
            type: String,
            required: [true, 'Name is required.'],
            enum: ["Pizza", "Spaghetti", "Tortellini"]
        },
        energy_kj: {
            type: Number,
            required: [true, 'KJ is required.'],
        },
        calories_kcal: {
            type: Number,
            required: [true, 'Calories on Kcal is required.'],
        },
        Grasimi: {
            type: Number,
            required: "Grasimi is required",
            Acizi_grasi_saturati: {
                type: Number,
                required: "Acizi Grasi Saturati is required"
            }
        },
        Glucide: {
            type: Number,
            required: "Glucide is required",
            Zahar: {
                type: Number,
            },
        },
        Proteine: {
            type: Number,
            required: "Proteine is required"
        },
        Sare: {
            type: Number,
            required: "Sare is required"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`
        timestamps: true,
    }
)

const Nutrition = model('Nutrition', nutritionSchema)

module.exports = Nutrition
