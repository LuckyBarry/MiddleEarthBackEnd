const mongoose = require("mongoose");
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/MiddleEarthBackEnd";

const events = require("./db/pokerVenues.json")
const reviews = require("./db/reviews.json")
const User = require('./models/User.model')
const Event = require("./models/PokerEvent")
const Review = require("./models/Review.model")

async function seeding() {
    try {
        await mongoose.connect(MONGO_URI)

        const allEvents = await Review.insertMany(reviews)
        console.log(allEvents)

    } catch (error) {
        console.log(error)
    }
}

seeding()