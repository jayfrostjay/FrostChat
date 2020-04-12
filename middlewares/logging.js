const moment = require('moment');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log(req.get('user-agent'));
    console.log(req.params);
    console.log(req.method);
    console.log(moment().format()); 
    next();
    // save request to file for logging
}; 

module.exports = logger; 