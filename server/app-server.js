const router = require('express').Router();
const movies = require('./router/_movies');

/* Landing for movies */
router.get('/movies', movies.index);

/* show a movie */
// router.get('/movies/:movieFolder/:movieName', movies.movie);

module.exports = router;
