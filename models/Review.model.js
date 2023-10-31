const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const reviewSchema = new Schema(
    {
        reviewersName: {
            type: String,
            required: [true, 'reviewers name is required.'],
            lowercase: true,
            trim: true
        },
        pokerVenueName: {
            type: String,
            required: [true, 'Pokervenue name is required.']
        }
        whenWasThis: {
            type: String
        }
        review: {
            type: String,
            required: [true, 'your comment here please, otherwise, whats the use?']
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const User = model("User", userSchema);

module.exports = User;
