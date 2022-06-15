 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya


const { Router } = require('express');
const CheckAuth = require('../middlewares/CheckAuth');

module.exports.Router = class Server extends Router {
	constructor() {
		super();
		this.get('/:guildID', [CheckAuth], (req, res) => {
			const guild = req.bot.guilds.cache.get(req.params.guildID);
			if (!guild) return res.redirect(`https://discord.com/channels/${req.params.guildID}`);
			if (!req.bot.guilds.cache.get(req.params.guildID).members.cache.get(req.user.id).hasPermission('MANAGE_GUILD')) return res.redirect('/profile');
			
		});
		this.post('/:guildID', [CheckAuth], async (req, res) => {
			if (!req.body.send_CHANNELID || req.body.send_CHANNELID === 'NOT_SET') return res.status(400).send('Erreur, pas de salon spécifié !');
			if (!req.body.send_MESSAGE || req.body.send_MESSAGE.length === 0) return res.status(400).send('Erreur, pas de message spécifié !');
			if (!req.bot.guilds.cache.get(req.params.guildID).members.cache.get(req.user.id).hasPermission('MANAGE_GUILD')) return res.redirect('/profile');
			await req.bot.guilds.cache.get(req.params.guildID).channels.cache.get(req.body.send_CHANNELID).send(req.body.send_MESSAGE);
			await res.redirect(`/server/${req.params.guildID}`);
		});
	}
};

module.exports.name = '/server';
