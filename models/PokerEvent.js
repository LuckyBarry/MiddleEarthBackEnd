const { Schema, model, SchemaTypes } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const pokerEventSchema = new Schema(
    {
        location: {
            type: String,
            required: [true, 'location is required.'],
            lowercase: true,
            trim: true
        },
        name: {
            type: String,
            required: [true, 'Pokervenue name is required.']
        },
        games: {
            type: String,
        },
        buyIn: {
            type: String,
        },
        capacity: {
            type: String,
        },
        freeGrog: {
            type: String,
        },
        firstPrize: {
            type: String,
        },
        image: {
            type: String,
        },

        owner: {
            type: Schema.Types.ObjectId, ref: "User"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const PokerEvent = model("PokerEvent", pokerEventSchema);

module.exports = PokerEvent;
