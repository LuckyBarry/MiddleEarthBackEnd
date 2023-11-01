const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { isAuthenticated } = require("../middlewares/routeGuard.middleware")


const Event = require("../models/PokerEvent")

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

module.exports = router;