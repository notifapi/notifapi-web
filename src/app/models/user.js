
var mongoose = require('mongoose');

/** initialize mongoDB **/
if (mongoose.connection.readyState == 0) {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI);
}

var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    username: String,
    email: String,
    password: String,
    status: Boolean,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);