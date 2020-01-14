const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);
app.use('*', (req, res) => {
	res.status(404).send('error 404');
});
