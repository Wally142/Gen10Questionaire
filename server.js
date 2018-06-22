const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const questionRouter = require('./routes/questions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/questions', questionRouter);

app.listen(port, function () {
    console.log('listening on', port);
});