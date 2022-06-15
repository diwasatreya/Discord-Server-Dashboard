 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

module.exports = (req, res, next) => {
	return (req.session.user ? next() : res.status(401).redirect('/auth/login'));
};





