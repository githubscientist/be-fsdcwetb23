## Backend Application - FSDCWETB23

### NodeJS

What is Node JS?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a web browser.
It is built on Chrome's V8 JavaScript engine and is designed to build scalable network applications.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, making it ideal for data-intensive real-time applications that run across distributed devices.

Version:

1.0.0

In this:

1 means Major changes
0 means Minor changes
0 means Patch changes

JavaScript Extensions:

1. mjs - Module JavaScript
2. cjs - CommonJS
3. js - JavaScript

The difference between mjs and cjs is that mjs supports ES6 modules, while cjs uses the CommonJS module system.
So, they would use different way of importing and exporting modules.

mjs -> import statement for importing modules and export statement for exporting modules.
cjs & js -> require() function for importing modules and module.exports or exports object for exporting modules.

#### Package.json

Package.json is a file that is used to manage the dependencies and scripts of a Node.js project. It also contains metadata about the project, such as its name, version, and author.

#### Dependencies

Dependencies are the libraries or modules that a Node.js project requires to function properly. They are listed in the package.json file under the "dependencies" section.

#### DevDependencies

DevDependencies are the libraries or modules that are only required for development purposes, such as testing or building the project. They are listed in the package.json file under the "devDependencies" section.

#### Built-in, Third-Party and Custom Modules

1. Built-in Modules

- These are the modules that come pre-installed with Node.js
- Examples:
  - fs (File System)
  - http (http server)
  - path (Path utilities)

2. Third-Party Modules

- These are the modules that are created by the community and can be installed using npm (Node Package Manager)
- Examples:
  - express: a web framework for Node.js
  - mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js
  - body-parser: a middleware for parsing incoming request bodies in a middleware before your handlers, available under the req.body property.
  - cors: a middleware for enabling Cross-Origin Resource Sharing (CORS) in Node.js applications
  - dotenv: a module for loading environment variables from a .env file into process.env
  - nodemon: a tool that helps develop Node.js applications by automatically restarting the node application when file changes in the directory are detected.
  - multer: a middleware for handling multipart/form-data, which is primarily used for uploading files
  - jsonwebtoken: a module for creating and verifying JSON Web Tokens (JWT) -- autentication and authorization
  - bcryptjs: a library for hashing and salting passwords
  - cookie-parser: a middleware for parsing cookies in Node.js applications
  - express-validator: a set of express.js middlewares that wraps validator.js, a library for string validation and sanitization.
  - morgan: a HTTP request logger middleware for Node.js
  - nodemailer: a module for sending emails from Node.js applications (alternative: sendgrid, mailgun)

3. Custom Modules

- These are the modules that are created by the developer for their specific project needs.
- Examples:
  - db.js: a module for connecting to the database
  - logger.js: a module for logging messages
  - auth.js: a module for handling authentication and authorization
  - errorHandler.js: a module for handling errors in the application
