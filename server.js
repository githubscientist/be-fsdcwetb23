const app = require("./app");

// start the server on port 3001
app.listen(3001, 'localhost', () => {
    console.log(`Server is running at http://localhost:3001`);
});