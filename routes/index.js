 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

const { Router } = require('express');
module.exports.Router = class Home extends Router {
	constructor() {
		super();
		this.get('/',function (req, res) {
            
			res.status(200).render('index.ejs', {
				bot: req.bot.user,
				user: req.user,
				is_logged: Boolean(req.session.user)
			});
		});
	}
};

module.exports.name = '/';