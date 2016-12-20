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

VerifySchema.statics = {
    findOneVerify: function (data, cb) {
        this.findOne({
                'data': new RegExp(["^", data, "$"].join(""), "i")
        }, 'data uuid', cb);
    },
    saveUUID: (data, uuid, cb) => {
        var Verify = mongoose.model('Verify', UserSchema);
        // valid if the user exist
        Verify.findOneVerify(data, (err, verify) => {
            if (err) throw err;

            if (verify) {
                verify.uuid = uuid;
            }
            else {
                verify = new Verify({
                    data: data,
                    uuid: uuid
                });
            }

            verify.save((error, savedVerify) => {
                if (error) throw error;

                return cb();
            });

        })

    }
};

module.exports = mongoose.model('Verify', VerifySchema);