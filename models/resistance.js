const mongoose = require("mongoose");
const { schema } = require("./cardio");

const Schema = mongoose.Schema;

const resistanceSchema = new schema({
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    weight: {
        type: Number,
        required: "Enter amount of weight used"
    },
    sets: {
        type: Number,
        required: "Enter amount of sets performed"
    },
    reps: {
        type: Number,
        required: "Enter amount of reps performed"
    }
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;