// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const singup = require('./routes/singup');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup logger
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
}

// ExpressJs routes
app.use('/', routes);
app.use('/sing-up', singup);

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'build', 'index.html'));
});

module.exports = app;