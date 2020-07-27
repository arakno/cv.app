const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const hostname = os.hostname()
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.send();
  res.end('<h1>Hello World</h1>');
});

server.listen(port,() => {
  console.info(`Server running at ${hostname}:${port}`);
});