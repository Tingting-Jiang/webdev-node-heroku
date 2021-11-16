const dao = require('./profile-dao')

module.exports = (app) => {
    
    const findAllProfile = (req, res) =>
        dao.findAllProfile()
            .then(profiles => res.json(profiles));
    
    // const deleteWho= (req, res) =>
    //     dao.deleteWho(req.params.id)
    //         .then((status) => res.send(status));
    //
    // const createWho = (req, res) =>
    //     dao.createWho(req.body)
    //         .then((newWho) =>
    //             res.json(newWho));
    //
    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    
    app.put("/rest/profile/:id", updateProfile);
    app.get("/rest/profile/:id", findProfileById);
    app.get("/rest/profile", findAllProfile);
    // app.post("/rest/movies", createWho);
    // app.delete("/rest/movies/:id", deleteWho)
    
}
