const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", function (req, res) {
    db.Workout.find()
        .then(function (data) {
            console.log(data, "###")
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.put("/api/workouts/:id", function (req, res) {
    const id = req.params.id;

    console.log(id, "ID#")
    db.Workout.findByIdAndUpdate(id, req.body)
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.post("/api/workouts", function (req, res) {

    db.Workout.create({})
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).limit(7)
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})


module.exports = router;