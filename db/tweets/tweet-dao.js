const model = require('./tweet-model');

// const findAllTweets = () => model.find().sort({"_id":-1});
const findAllTweets = () => model.find();

const createTweet = (tweet) => model.create(tweet);

const deleteTweet = (id) => model.removeOne({_id: id});

const updateTweet = (id, tweet) =>
    model.updateOne({_id:id},
        {$set: tweet});

const findTweetById = (id) =>
    model.findById(id);
    

module.exports = {
    findAllTweets,
    createTweet,
    deleteTweet,
    updateTweet,
    findTweetById,
};

