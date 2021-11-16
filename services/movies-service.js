let movies = [
    {_id: '123', title: 'Aliens', rating: 4.5},
    {_id: '234', title: 'Terminator', rating: 4.8},
    {_id: '345', title: 'Avatar', rating: 4.7}
];

module.exports = (app) => {
    // get movie
    const getAllMovies = (req, res) => res.json(movies);
    app.get('/api/movies', getAllMovies);
    
    // delete movie
    const deleteMovie = (req, res) => {
        const id = req.params['mid'];
        movies = movies.filter(movie => movie._id !== id);
        // res.json(movies);
        res.sendStatus(200);
    };
    app.delete('/api/movies/:mid', deleteMovie);
    
    
    
    // create new movie
    const createMovie = (req, res) => {
        const newMovie = {
            _id: (new Date()).getTime() + '',
            rating: 2.5,
            ...req.body,
        }
        movies = [
            newMovie,
            ...movies
        ];
        
        res.json(newMovie);
    }
    app.post('/api/movies', createMovie);
    
    
    //update movie
    const saveMovie = (req, res) => {
        const newMovie = req.body;
        const movieId = req.params['mid'];
        movies = movies.map(movie =>
            movie._id === movieId ? newMovie : movie);
        // res.json(movies);
        res.sendStatus(200);
    }
    app.put('/api/movies/:mid', saveMovie);
    
    
    
};

