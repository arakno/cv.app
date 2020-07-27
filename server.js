// const express = require('express')
// const http = require('http')
// const path = require('path')
// const fs = require('fs')
// const os = require('os')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')

// // const dishRouter = require('./routes/dishRouter')

// const hostname = os.hostname()
// const port = 3000
// const app = express()

// app.use(morgan('dev'))
// app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'public')))

// const server = http.createServer(app)

// // app.all((req,res,next) => {
// //   res.statusCode = 200;
// //   res.setHeader('Content-Type', 'text/plain');
// //   next();
// // })
// app.get('/', (req,res,next) => {
// 		let fileUrl
// 		if (req.url == '/') fileUrl = '/index.html'
// 		else fileUrl = req.url

// 		let filePath = path.resolve('./public' + fileUrl)
// 		const fileExt = path.extname(filePath)

// 		if (fileExt == '.html') {
// 			fs.exists(filePath, (exists) => {
// 				console.log(fileUrl, filePath)
// 				if (!exists) {
// 					res.statusCode = 404
// 					res.setHeader('Content-Type', 'text/html')
// 					res.end('<html><body><h1>ERROR 404' + fileUrl + 'NOT FOUND</h1></body></html>')
// 					return
// 				}
// 				res.statusCode = 200
// 				res.setHeader('Content-Type', 'text/html')
// 				fs.createReadStream(filePath).pipe(res)
// 			})
// 		}
// })




const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const hostname = os.hostname()
const port = process.env.PORT || 3000


const server = http.createServer((req, res) => {

	if (req.method == 'GET') {
		let fileUrl
		if (req.url == '/') fileUrl = '/index.html'
		else fileUrl = req.url

		let filePath = path.resolve('./public' + fileUrl)
		const fileExt = path.extname(filePath)

		if (fileExt == '.html') {
			fs.exists(filePath, (exists) => {
				//console.log(fileUrl, filePath)
				if (!exists) {
					res.statusCode = 404
					res.setHeader('Content-Type', 'text/html')
					res.end('<html><body><h1>ERROR 404' + fileUrl + 'NOT FOUND</h1></body></html>')
					return
				}
				res.statusCode = 200
				res.setHeader('Content-Type', 'text/html')
				fs.createReadStream(filePath).pipe(res)
			})
		}
		else {
			res.statusCode = 404
			res.setHeader('Content-Type', 'text/html')
			res.end('<html><body><h1>ERROR 404' + fileUrl + 'NOT HTML FILE</h1></body></html>')
		}
	}
	else {
		res.statusCode = 404
		res.setHeader('Content-Type', 'text/html')
		res.end('<html><body><h1>ERROR 404' + req.method + 'NOT SUPPORTED</h1></body></html>')
	}

	// 
})


server.listen(port, hostname, () => {
	console.log(`server running at ${hostname}:${port}`)
});