const express = require('express');
const sql = require('mssql')
const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
    executeQuery(res);
});


var executeQuery = function(res) {
    sql.connect('mssql://tableau:sord@GSCLSCL6019/BI', function(err) {
        if (err) {
            console.log("Error while connecting database :- " + err);
            res.send(err);
        } else {
            // create Request object
            var request = pool.execute('sp_get_cigo')

            // query to the database
            request.query(query, function(err, res) {
                if (err) {
                    console.log("Error while querying database :- " + err);
                    res.send(err);
                } else {
                    res.send(res);
                }
            });
        }
    });
}


module.exports = router;