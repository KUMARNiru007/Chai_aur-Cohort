# Build Your Own Express

A lightweight implementation of Express-like functionality using Node.js core modules. This project demonstrates how to create a basic HTTP server with routing capabilities similar to Express.js.

## Features

- Custom HTTP server implementation
- Support for common HTTP methods (GET, POST, PUT, PATCH, DELETE)
- Simple routing system
- Path-based route handling

## Installation

1. Clone the repository:
```bash
 clone this folder
cd Build-Express
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Creating a Server

```javascript
const {customExpress} = require('./server.js');
const app = new customExpress();
const port = 3000;
```

### Defining Routes

```javascript
// GET request
app.customGet('/', (req, res) => {
    res.end('Hello from GET');
});

// POST request
app.customPost('/', (req, res) => {
    res.end('Hello from POST');
});

// PUT request
app.customPut('/', (req, res) => {
    res.end('Hello from PUT');
});

// PATCH request
app.customPatch('/', (req, res) => {
    res.end('Hello from PATCH');
});

// DELETE request
app.customDelete('/', (req, res) => {
    res.end('Hello from DELETE');
});
```

### Starting the Server

```javascript
app.customListen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});
```

## API Reference

### Methods

- `customGet(path, callback)`: Handle GET requests
- `customPost(path, callback)`: Handle POST requests
- `customPut(path, callback)`: Handle PUT requests
- `customPatch(path, callback)`: Handle PATCH requests
- `customDelete(path, callback)`: Handle DELETE requests
- `customListen(port, host, callback)`: Start the server

## How It Works

1. The server is built using Node.js's native `http` module
2. Routing is implemented using a custom class that stores route handlers in method-specific objects
3. When a request comes in, the server:
   - Extracts the HTTP method and URL
   - Matches the route with stored handlers
   - Executes the corresponding callback function

## Project Structure

```
Build-Express/
├── server.js      # Core server implementation
├── index.js       # Example usage
└── package.json   # Project configuration
```

## Running the Project

```bash
npm start
```

## Testing Routes

Use tools like cURL, Postman, or your browser to test the different endpoints:

```bash
# GET request
curl http://localhost:3000/

# POST request
curl -X POST http://localhost:3000/

# Other methods
curl -X PUT http://localhost:3000/
curl -X PATCH http://localhost:3000/
curl -X DELETE http://localhost:3000/
```

## License

ISC

## Author

[Kumar Nirupam]