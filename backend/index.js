const express = require('express');
const login = import('./login.mjs');
const app = express();

app.get('/', (req, res) => {
	res.send('hello!');
});

app.listen(8080);