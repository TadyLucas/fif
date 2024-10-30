const jwt = require('jsonwebtoken');
const JWT_SECRET = '4b8d933d6a3c7e677df8b1a2341c7fe5838e0d4886587fc87903292f09109a5b';

const authenticateToken = (req, res, next) => {
    console.log('Auth middleware called');
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token) return res.status(401);

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401);
        req.user = decoded;
        next();
    })
};

module.exports = authenticateToken;