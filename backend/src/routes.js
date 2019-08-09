const express = require('express');

const routes = express.Router();    

routes.get('/', (request, response) => {
    return response.json({ mensagen: `Hello ${request.query.name}` });
});

routes.post('/devs', (request, response) => {
    console.log(request.body);
    return response.json({ ok: true });
})

module.exports = routes;