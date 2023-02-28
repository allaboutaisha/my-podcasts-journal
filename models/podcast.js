const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { type: String, required: true},
    host: { type: String, required: true},
    episodeName: String,
    episodeNum: Number,
    guest: String,
    dateListened: Date,
    listening: {
        type: String,
        enum: [' currently listening', 'listened', 'want to listen'],
        default: 'currently listening',
        required: true
    },
    entry: { 
        type: Schema.Types.ObjectId, 
        ref: 'Entry'
    },
    genre: { 
        type: Schema.types.ObjectId, 
        ref: 'Genre'
    },
    rating: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Podcast', podcastSchema);