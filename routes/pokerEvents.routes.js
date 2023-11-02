const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/routeGuard.middleware")


const Event = require("../models/PokerEvent");
const Review = require("../models/Review.model");

router.get("/api/pokerVenues", async (req, res) => {
    try {
        const allPokerVenues = await Event.find();
        res.status(200).json(allPokerVenues);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});

router.post("/api/pokerEvents", isAuthenticated, async (req, res) => {
    console.log(req.body)
    try {
        const newEvent = await Event.create({ ...req.body, owner: req.payload.userId })
        res.status(201).json(newEvent)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})


router.get("/api/pokerEvents/:_id", async (req, res) => {
    const { _id } = req.params;

    if (mongoose.isValidObjectId(_id)) {
        try {
            const pokerEvent = await Event.findById(_id);
            if (pokerEvent) {
                res.status(200).json(pokerEvent);
            } else {
                res.status(404).json({ message: "poker event not found" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(400).json({ message: "Invalid ID format" });
    }
});
router.put("/api/pokerEvents/:_id", async (req, res) => {
    const { _id } = req.params;

    if (mongoose.isValidObjectId(_id)) {
        try {
            const updatedEvent = await Event.findByIdAndUpdate(_id, req.body, { new: true })
            console.log(updatedEvent)
            res.status(202).json(updatedEvent)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }

    } else {
        res.status(400).json({ message: "Invalid ID format" });
    }

})

router.delete("/api/pokerEvents/:_id", async (req, res) => {
    const { _id } = req.params;

    if (mongoose.isValidObjectId(_id)) {
        try {
            const deletedEvent = await Event.findByIdAndDelete(_id)
            console.log(deletedEvent)
            res.status(202).json(deletedEvent)
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }

    } else {
        res.status(400).json({ message: "Invalid ID format" });
    }

})

router.get("/api/reviews/:eventId", async (req, res) => {

    const { eventId } = req.params;

    try {
        const allReviews = await Review.find({ event: eventId }).populate("reviewer");
        const reviewDocs = allReviews.map(review => review._doc)
        reviewDocs.forEach(review => {
            review.reviewer.passwordHash = ""
        })
        console.log(reviewDocs)
        res.status(200).json(reviewDocs);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;