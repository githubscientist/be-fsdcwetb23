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
