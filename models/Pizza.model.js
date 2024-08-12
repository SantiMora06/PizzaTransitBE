const { Schema, model } = require('mongoose')

const pizzaSchema = new Schema(
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

const Pizza = model('Pizza', pizzaSchema)

module.exports = Pizza
