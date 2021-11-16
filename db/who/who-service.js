const dao = require('./who-dao')

module.exports = (app) => {
    
    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(whoList => {
                console.log(whoList);
                res.json(whoList);
            });
    
    // const deleteWho= (req, res) =>
    //     dao.deleteWho(req.params.id)
    //         .then((status) => res.send(status));
    //
    // const createWho = (req, res) =>
    //     dao.createWho(req.body)
    //         .then((newWho) =>
    //             res.json(newWho));
    //
    // const findWhoById = (req, res) =>
    //     dao.findWhoById(req.params.id)
    //         .then(who => res.json(who));
    //
    // const updateWho = (req, res) =>
    //     dao.updateWho(req.params.id, req.body)
    //         .then(status => res.send(status));
    
    //
    // app.put("/rest/movies/:id", updateWho);
    // app.get("/rest/movies/:id", findWhoById);
    // app.post("/rest/movies", createWho);
    // app.delete("/rest/movies/:id", deleteWho)
    app.get("/rest/who", findAllWho);
    
}
