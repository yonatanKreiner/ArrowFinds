var express = require('express');
var path = require('path');
var compression = require('compression');
var helmet = require('helmet');

var port = process.env.PORT || 5000;
var app = express();

app.use(helmet())
app.use(compression())
app.use(express.static(__dirname));

app.get('/*', (req, res) => 	
	res.sendFile(path.join(__dirname, './index.html'))
)

app.listen(port);
