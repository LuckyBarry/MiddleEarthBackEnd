const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/routeGuard.middleware"); // Your authentication middleware
const Review = require("../models/Review.model")
// Create a review for an event
router.post("/:eventId", isAuthenticated, async (req, res) => {
    try {
        const { eventId } = req.params;
        const { userId } = req.payload; // Assuming your auth middleware sets the user ID in req.user

        const newReview = await Review.create({
            event: eventId,
            reviewer: userId,
            review: req.body.review,
        });


        res.status(201).json(newReview);
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
