const express = require('express');

const server = express();

// GET, POST, PUT, DELETE

server.get('/', (request, response) => {
    return response.send('Hello World!!!');
});

server.listen(3333);