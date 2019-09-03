// see a list of pre-populated movies
// add a movie to the list
// update movie information
// remove a movie
// see only released movies

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...'})
})


module.exports = server // commonJS modules (node)
//module.exports = { server } // commonJS modules (node)

// exports.add = (a, b) => { return a + b }
// exports.secret = 'keep it secret, keep it safe'