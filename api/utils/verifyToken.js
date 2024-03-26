const jwt = require("jsonwebtoken");
function verify(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
}

module.exports = verify;
