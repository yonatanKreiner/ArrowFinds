import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'
import helmet from 'helmet'

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express()

app.use(helmet())
app.use(compression())
app.use(express.static('dist'))

app.get('/*', (req, res) => 	
	res.sendFile(path.join(__dirname, '../dist/index.html'))
)

app.listen(port, err => {
	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port)
	}
})
