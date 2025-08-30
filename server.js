// Create a http server using NodeJS
// import the http library
const http = require('http');

// create a server object
const server = http.createServer((request, response) => {
    response.end('Hello World\n');
});

// start the server and listen on port 3001
server.listen(3001, 'localhost', () => {
    console.log('Server is listening on http://localhost:3001');
});