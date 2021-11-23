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
    
        console.log(newTweet);
    
        dao.createTweet(newTweet)
            .then((tweet) =>
                res.json(tweet));
  
    };
    
    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.param.id)
            .then((status) =>
                res.sendStatus(200));
    
    
    const likeTweet = (req, res) => {
    //     const id = req.params.id;
    //
    //     dao.findTweetById(id)
    //         .then(tweet => {
    //             return res.json(tweet).json();})
    //         .then(tweetItem=> {
    //             console.log("new tweetItem ----", tweetItem);
    //             if (tweetItem.liked === true) {
    //                 tweetItem.liked = false;
    //                 tweetItem.stats.likes--;
    //             } else {
    //                 tweetItem.liked = true;
    //                 tweetItem.stats.likes++;
    //             }
    //             ;
    //             dao.updateTweet(id, tweetItem);
    //         })
    //             .then(status => res.end(status));
    // }
        
        const tweetItem = dao.findTweetById(req.params._id)
            .then(tweetItem => res.send(tweetItem));
        // console.log("returned tweet________", tweetItem);
        if (tweetItem.liked === true) {
            tweetItem.liked = false;
            tweetItem.stats.likes--;
        } else {
            tweetItem.liked = true;
            tweetItem.stats.likes++;
        };

        dao.updateTweet(req.params.id, tweetItem)
            .then((status) => res.sendStatus(200));
    };
    
    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
    
    
    
}