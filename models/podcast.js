const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: { type: String, required: true},
    host: { type: String, required: true},
    thumbnail: String,
    episodeName: String,
    episodeNum: Number,
    guest: String,
    dateListened: Date,
    listening: String,
    entry: { 
        type: Schema.Types.ObjectId, 
        ref: 'Entry'
    },
    rating: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Podcast', podcastSchema);