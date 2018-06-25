const express = require('express');
const router = express.Router();
const pool = require('../model/pool.js');

router.post('/', function (req, res) {
    let answer = req.body;
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            const queryString = 'INSERT INTO questionaire (firstname, lastname, email, question1, question2, question3, question4) VALUES ($1, $2, $3, $4, $5, $6, $7);';
            let item = [answer.firstname, answer.lastname, answer.email, answer.question1, answer.question2, answer.question3, answer.question4];
            client.query(queryString, item, function (queryErr, resultObj) {
                done();
                if (queryErr) {
                    console.log(queryErr)
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});// end post

module.exports = router;