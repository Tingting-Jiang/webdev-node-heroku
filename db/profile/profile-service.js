const dao = require('./profile-dao')

module.exports = (app) => {
    
    const findAllProfile = (req, res) =>
        dao.findAllProfile()
            .then(profile => {
                console.log(profile);
                res.json(profile);
            });

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    
    app.put("/rest/profile/:id", updateProfile);
    app.get("/rest/profile/:id", findProfileById);
    app.get("/rest/profile", findAllProfile);

    
}
