const dao = require("./tweet-dao");

module.exports = (app) =>{
    const findAllTweets = (req, res) =>
        dao.findAllTweets()
            .then((tweets) => res.json(tweets));
    
    
    const createTweet = (req, res) =>
        dao.createTweet(res.body)
            .then((tweet) =>
                res.json(tweet));
    
    const deleteTweet = (req, res) =>
        dao.deleteTweet(req.param.id)
            .then((status) =>
                res.sendStatus(200));
        
    
    const likeTweet = (req, res) =>
        dao.updateTweet(req.params.id, res.body)
             .then((status) => res.sendStatus(200));
    
    app.put('/rest/tweets/:id/like', likeTweet);
    app.delete('/rest/tweets/:id', deleteTweet);
    app.post('/rest/tweets', createTweet);
    app.get('/rest/tweets', findAllTweets);
    
    
    
}