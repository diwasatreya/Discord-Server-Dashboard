 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

module.exports = (req, res, next) => {

  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};
