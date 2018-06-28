const express = require('express');
const router = express.Router();
const pool = require('../model/pool.js');
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', function (req, res) {
    let answer = req.body;
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            const queryString = 'INSERT INTO questionaire (firstname, lastname, email, question1, question2, question3, question4, question5, question6) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);';
            let item = [answer.firstname, answer.lastname, answer.email, answer.question1, answer.question2, answer.question3, answer.question4, answer.question5, answer.question6];
            client.query(queryString, item, function (queryErr, resultObj) {
                done();
                if (queryErr) {
                    console.log(queryErr)
                    res.sendStatus(500);
                } else {
                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'rodeo10.mailer@gmail.com',
                            pass: process.env.MAILERPASSWORD
                        }
                    })
                    let mailOptions = {
                        from: 'rodeo10.mailer@gmail.com',
                        to: answer.email,
                        subject: 'Thank You For Your Survey',
                        html: `<p>Thank you ${answer.firstname} ${answer.lastname} for your time in taking our survey!</p> <img src="https://static.boredpanda.com/blog/wp-content/uploads/2018/04/handicapped-cat-rexie-the-handicat-dasha-minaeva-48-5acb4f02de6d6__700.jpg">`

                    };
                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            console.log(err, info);
                        }
                    });
                    res.sendStatus(201);
                }
            });
        }
    });
});// end post

module.exports = router;