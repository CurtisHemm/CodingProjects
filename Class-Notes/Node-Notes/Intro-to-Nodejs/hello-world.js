const http = require('node:http');

const hostName = '127.0.0.1';

const port = 3200;

const server = http.createServer((request,
    response) => {
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain"); // We are informing the client that recieves our response that it will be in the format of text/plain
        response.end("Hello World! \n"); // We are sending the following data as the body of the response
    })

    server.listen(port, hostName, () => { // We are configuring our server to listen to the port 3200
        console.log(`Server running out http://${hostName}:${port}/`); // The callback arrow function is a handler that will execute once the server confirms that it is listening
    });