// server.js

// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
const sql = require('mssql')
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

(async function() {
    try {
        let pool = await sql.connect(config)

        // Stored procedure

        let result = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')

        console.dir(result2)
    } catch (err) {
        console.log("error connecting to the DB")
    }
})()


sql.on('error', err => {
    console.log("Query error")
})


app.use(express.static(__dirname + '/dist')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(8090);
console.log("App listening on port 8080");