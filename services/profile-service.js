let profile = require("../data/profile.json");

module.exports = (app) => {
    // get profile
    const getCurrentProfile = (req, res) => res.json(profile);
    app.get('/api/profile', getCurrentProfile);
    
    //update profile
    const updateCurrentProfile = (req, res) => {
        const newProfile = req.body;
        profile = {
            ...profile,
            userName: newProfile.userName,
            bio: newProfile.bio,
            location: newProfile.location,
            website: newProfile.website,
            dateOfBirth: newProfile.dateOfBirth,
        };
        res.sendStatus(200);
    }
    app.put('/api/profile/', updateCurrentProfile);
    
    
    
};
