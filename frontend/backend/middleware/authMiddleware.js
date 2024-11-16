const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "4b8d933d6a3c7e677df8b1a2341c7fe5838e0d4886587fc87903292f09109a5b";

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try{
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  }catch(err){
    console.error("Token verification error: ", err);
    return res.sendStatus(403);
  }
}

module.exports = authenticateToken;
