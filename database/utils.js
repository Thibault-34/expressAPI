const con = require('./connect');

const stringifyParams = params => {
	if (Object.keys(params).length === 0) {
		return '';
	}
	return (
		'WHERE ' +
		Object.keys(params)
			.map(query => `${query} = "${params[query]}"`)
			.join(' AND ')
	);
};

const getFilms = (params, callback) => {
	con.query(
		`SELECT * FROM film ${stringifyParams(params)}`,
		(error, results, fields) => {
			if (error) throw error;
			callback(results);
		},
	);
};

const getFilmById = (id, callback) => {
	con.query(
		`SELECT * FROM film WHERE idFilm = ${id}`,
		(error, results, fields) => {
			if (error) throw error;
			callback(results);
		},
	);
};

module.exports = { getFilms, getFilmById };
