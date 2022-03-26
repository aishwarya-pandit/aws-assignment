const config = {
development: require('../config/environments/development'),
production: require('../config/environments/production')
}

module.exports = config[process.env.NODE_ENV || 'development']; //setting default val