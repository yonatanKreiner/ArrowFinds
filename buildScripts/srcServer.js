import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'
import webpackdev from 'webpack-dev-middleware'

/* eslint-disable no-console */

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(webpackdev(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use('/images', 
	express.static(path.join(__dirname, '../src/images'))
)

app.get('/favicon.ico', (req, res) => 	
res.sendFile(path.join(__dirname, '../src/favicon.ico'))
)

app.get('/*', (req, res) => 	
	res.sendFile(path.join(__dirname, '../src/index.html'))
)

app.listen(port, err => {
	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port)
	}
})
