const mongoose = require('mongoose');
const schema = mongoose.Schema({
    userName: String,
    bgImage: String,
    avatarIcon: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location:String,
    dateOfBirth: Date,
    dateJoined: String,
    followingCount: Number,
    followersCount: Number,
    tweetsNum: String
}, {collection: 'profile'});
module.exports = schema;

