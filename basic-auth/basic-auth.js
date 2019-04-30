const crypto = require('crypto');
const HttpStatus = require('http-status-codes');

function sha1Encode(data) {
    // To be implemented!
    const hash = crypto.createHash('sha1');
    hash.update(data);
   return hash.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!
    const authorization = request.headers.authorization;
    const code_pass = sha1Encode('password');
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    const [login, password] = decoded.split(':');
    if (login == 'node' && password == code_pass) return next();
    response.sendStatus(HttpStatus.UNAUTHORIZED);
}