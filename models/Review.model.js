const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const reviewSchema = new Schema(
    {
        reviewer: {
            type: Schema.Types.ObjectId, ref: "User",
        },
        review: {
            type: String,
            required: [true, 'your comment here please, otherwise, whats the use?']
        },
        event: {
            type: Schema.Types.ObjectId, ref: "Event"
        }
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Review = model("Review", reviewSchema);

module.exports = Review;
