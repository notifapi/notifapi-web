
var env = process.env.NODE_ENV || 'development';

module.exports.get = function(param) {

    var conf = env === 'production' ?
        require('./production.json')[env] :
        require('./development.json')[env];

    console.log(process.env.NODE_ENV);

    return conf.use_env_variable ? process.env[conf[param]] : conf[param];
}