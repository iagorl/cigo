// server.js

// set up ========================
const express = require('express');
const morgan = require('morgan'); // log requests to the console (express4)
const bodyParser = require('body-parser'); // pull information from HTML POST (express4)
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
const api = require('./api');


// configuration =================

var app = express(); // create our app w/ express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || '8090';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));



(async function() {
    try {
        const pool = await sql.connect('mssql://tableau:sord@GSCLSCL6019/BI')
            // Stored procedure
        let result = await pool.request()
            .execute('sp_get_cigo')

        console.dir(result2)
    } catch (err) {
        console.log("error connecting to the DB")
    }
})()


sql.on('error', err => {
    console.log("Query error")
})


app.get('/api/data', function(req, res) {

    // use mongoose to get all todos in the database
    Todo.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });
});