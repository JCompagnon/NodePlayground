var express = require('express');
var router = express.Router();
var games = require('../services/games');

/* GET home page. */
router.get('/', function (req, res, next) {
    var visits = parseInt(req.cookies.visits) || 0;
    visits++;
    res.cookie('visits', visits);
    res.render('index', {
        title: 'Welcome',
        userId: req.user.id,
        visits: visits,
        createdGames: games.createdBy(req.user.id),
        availableGames: games.availableTo(req.user.id),
        partials: {createdGame: 'createdGame'}
    });
});

module.exports = router;