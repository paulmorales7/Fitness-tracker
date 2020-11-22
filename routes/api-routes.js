const router = require("express").Router();
const db = require("../models")

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.put("/api/workouts/:id", function (req, res) {
    const id = req.params.id;
    console.log("this is the body ", req.body)

    db.Workout.findByIdAndUpdate(id, req.body)
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.post("/api/workouts", function (req, res) {
    console.log("this is the body ", req.body)
    db.Workout.create(req.body)
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
        .then(function (data) {
            res.json(data)
        }).catch(function (err) {
            res.status(400).json(err)
        })
})


module.exports = router;