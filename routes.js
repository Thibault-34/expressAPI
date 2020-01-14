const express = require('express');
const { getFilms, getFilmById } = require('./database/utils');
const router = express.Router();

router.get('/films', (req, res) => {
	getFilms(req.query, films => res.json(films));
});

router.get('/films/:id', (req, res) =>
	getFilmById(req.params.id, films => res.json(films)),
);

module.exports = router;
