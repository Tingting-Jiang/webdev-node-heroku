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
    dateJoined: Date,
    followingCount: Number,
    followersCount: Number,
    tweetsNum: Number
}, {collection: 'profile'});
module.exports = schema;

