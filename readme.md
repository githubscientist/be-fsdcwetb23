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

#### Why use express.js over node.js http module?

- Express.js is a web framework for Node.js that provides a set of features and tools for building web applications.
- Writing a web application using just node.js http module can be tedious and time-consuming, as it requires a lot of boilerplate code to handle routing, middleware, and other common tasks.
- Express.js provides easy debugging, routing, middleware support, maintainability, etc.

#### Terminologies

1. IP Address: An IP address is a unique identifier assigned to each device connected to a network that uses the Internet Protocol for communication.

2. DNS: The Domain Name System (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the internet or a private network. It translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other on the network.

3. PORT: A port is a communication endpoint that allows different applications or services to communicate with each other over a network. It is identified by a number between 0 and 65535. Some ports like 80 (HTTP) and 443 (HTTPS) are reserved for specific protocols, while others can be used by any application.

4. HTTP Methods: HTTP methods are a set of request methods used in the Hypertext Transfer Protocol (HTTP) to indicate the desired action to be performed on a resource. The most commonly used HTTP methods are GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, and TRACE.

5. REST API: REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API (Application Programming Interface) is a web service that follows the principles of REST and allows clients to interact with resources using standard HTTP methods.

6. Restful API: A RESTful API is an API that adheres to the principles of REST. It uses standard HTTP methods and status codes, and represents resources using URIs (Uniform Resource Identifiers).

7. URL Vs URI: A URL (Uniform Resource Locator) is a specific type of URI (Uniform Resource Identifier) that provides the location of a resource on the internet. A URI can be either a URL or a URN (Uniform Resource Name), which is a unique identifier for a resource that does not provide its location.
