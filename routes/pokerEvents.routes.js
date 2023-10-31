const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const User = require("../models/User.model");
const Artist = require("../models/PokerEvents")

router.get("/api/pokerVenues", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;