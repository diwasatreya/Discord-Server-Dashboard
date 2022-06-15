 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');

module.exports.Router = class Profile extends Router {
    
	constructor() {
		super();
		this.get('/', [CheckAuth], function(req, res) {
			res.status(200).render('profile.ejs', {
				bot: req.bot.user,
				user: req.user,
				is_logged: Boolean(req.session.user),
				guilds: req.user.guilds.filter(u => (u.permissions & 2146958591) === 2146958591),
				avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
				iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`
			});
		});
	}
};

module.exports.name = '/profile';
