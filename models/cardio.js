const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    distance: {
        type: Number,
        required: "Enter distance covered"
    },
    duration: {
        type: Number,
        required: "Enter the amount of time"
    }
})

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;