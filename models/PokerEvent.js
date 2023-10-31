const { Schema, model, SchemaTypes } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const pokerEventSchema = new Schema(
    {
        // email: {
        //   type: String,
        //   required: [true, 'Email is required.'],
        //   unique: true,
        //   lowercase: true,
        //   trim: true
        // },
        // passwordHash: {
        //   type: String,
        //   required: [true, 'Password is required.']
        // }
        // location
        // "Mordor"
        // name
        // "The Grisly Goblet (free entrance for Orcs)"
        // games
        // "Pot limit Omaha, deuce to seven Lowball."
        // buy-in:
        // "200 pieces of gold"
        // capacity
        // "50 players"
        // free grog:
        // "Only for the ones that reach the final table."
        // first prize
        // "An entrance ticket to the course: how to put a spell on Elfs"
        // image
        // "https://t4.ftcdn.net/jpg/06/06/40/97/360_F_606409747_ZdW3F7hhv2cZwgYqA…"
        // (add owner/user) 

        owner: { type: Schema.Types.ObjectId, ref: "User" }




    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const PokerEvent = model("PokerEvent", pokerEventSchema);

module.exports = PokerEvent;
