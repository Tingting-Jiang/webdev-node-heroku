const dao = require("./tweet-dao");

module.exports = (app) =>{
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then((tweets) => res.json(tweets));
    
    
    const createTweet = (req, res) => {
        const newTweet = {
            ...req.body,
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "liked": false,
            "avatarImage": "/images/blue_fur.jpg",
            "logoImage": "/images/blue_fur.jpg",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
        }
    
        // console.log(newTweet);
    
        dao.createTweet(newTweet)
            .then((tweet) =>
                res.json(tweet));
  
    };
    
    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.param.id)
            .then((status) =>
                res.sendStatus(200));
    
    
    const likeTweet = (req, res) => {
    
        const id = req.params.id;
        dao.findTweetById(id)
            .then(tweet => {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                dao.updateTweet(id, tweet)
                    .then(status => res.send(status));
            });
    }
    
    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
    
    
    
}