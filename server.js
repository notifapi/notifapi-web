'use strict';

var throng = require('throng');
var os = require('os');

/** clustering **/
var WORKERS = int(process.env.CONCURRENCY) || os.cpus().length;
throng({
    workers: WORKERS,
    lifetime: Infinity
}, start);

function start(id) {
    console.log("Started web worker " + id);

    const app = require('./src/app');

    const PORT = process.env.PORT || 9000;

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
}

function int(str) {
    if (!str) return 0;
    return parseInt(str, 10);
}