const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/JobChallenge';
mongoose.connect(url);

mongoose.connection.on('open', _ => {
    console.log("Conetado a: " + url)
});