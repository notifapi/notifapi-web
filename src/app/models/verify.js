var mongoose = require('mongoose');

/** initialize mongoDB **/
if (mongoose.connection.readyState == 0) {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI);
}

var Schema       = mongoose.Schema;

var VerifySchema   = new Schema({
    uuid: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});


VerifySchema.index({uuid: 1});

module.exports = mongoose.model('Verify', VerifySchema);