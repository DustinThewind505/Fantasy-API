const jwt = require('jsonwebtoken');

module.exports = function restrictedByRole(req, res, next) {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'Lambda';

    if(token) {
        jwt.verify(token, secret, (err, decodedtoken) => {
            if(err) {
                res.status(401).json({errorMessage: 'blood'})
            } else {
                req.jwt = decodedtoken;
                next()
            }
        })
    } else {
        res.status(401).json({errorMessage: 'Must login'})
    }
}
