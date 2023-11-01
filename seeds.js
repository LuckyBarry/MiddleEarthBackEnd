const mongoose = require("mongoose");
const MONGO_URI =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/MiddleEarthBackEnd";

const events = require("./db/pokerVenues.json")

const Event = require("./models/PokerEvent")

async function seeding() {
    try {
        await mongoose.connect(MONGO_URI)

        const allEvents = await Event.insertMany(events)
        console.log(allEvents)

    } catch (error) {
        console.log(error)
    }
}

seeding()