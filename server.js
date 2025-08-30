// Create a http server using NodeJS
// import the http library
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    // set the response HTTP header with HTTP status and Content type
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello World</h1><p>This is my first NodeJS server</p>');
});

// start the server and listen on port 3001
server.listen(3001, 'localhost', () => {
    console.log('Server is listening on http://localhost:3001');
});