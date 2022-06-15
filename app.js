 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya

const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const { readdir } = require('fs');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to Database")
);


class Website {
	constructor() {
		this.app = express();
		this.config = require('./config.json');
		this.config.callbackURL = this.config.callbackURL = this.config.bot.production
			? `${this.config.bot.url}/auth/login`
			: `${this.config.bot.url}:${this.config.app.port}/auth/login`;
		this.bot = require('./bot/index');
		this.bot = this.bot(this.config.bot.token);
		try {
			this._setup();
			this._loadRoutes();
			this._start();
		} catch (e) {
			throw typeof e === 'object' ? e : new Error(e);
		}
	}

	_setup() {
		this.app.set('views', 'views');
		this.app.set('view engine', 'ejs');
		this.app.use(express.static('assets'));
		this.app.set('port', this.config.app.port || 3000);
		this.app.use(morgan('dev'));
		this.app.use(session({
			secret: `ey.${Date.now()}${this.config.bot.id}${Date.now()}.dashboard.io`,
			resave: false,
			saveUninitialized: false
		}));
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			res.setHeader('Access-Control-Allow-Credentials', true);
			req.config = this.config;
			req.bot = this.bot;
			req.user = req.session.user;
			next();
		});

this.app.get('/discord', async (req, res) => {
    res.redirect(`https://discord.gg/whJeF4mDAX`)
});

this.app.get('/dc', async (req, res) => {
    res.redirect(`https://discord.gg/whJeF4mDAX`)
});

this.app.get('/youtube', async (req, res) => {
    res.redirect(`https://www.youtube.com/c/Kp18Gamer`)
});

this.app.get('/yt', async (req, res) => {
    res.redirect(`https://www.youtube.com/c/Kp18Gamer`)
});

this.app.get('/github', async (req, res) => {
    res.redirect(`https://github.com/diwasatreya`)
});

this.app.get('/git', async (req, res) => {
    res.redirect(`https://github.com/diwasatreya`)
});

this.app.get('/facebook', async (req, res) => {
    res.redirect(`https://www.facebook.com/profile.php?id=100075574807496`)
});

this.app.get('/fb', async (req, res) => {
    res.redirect(`https://www.facebook.com/profile.php?id=100075574807496`)
});

this.app.get('/instagram', async (req, res) => {
    res.redirect(`https://www.instagram.com/atreyadiwas/`)
});

this.app.get('/ig', async (req, res) => {
    res.redirect(`https://www.instagram.com/atreyadiwas/`)
});

this.app.get('/twitter', async (req, res) => {
    res.redirect(`https://twitter.com/DiwasAtreya`)
});

this.app.get('/reddit', async (req, res) => {
    res.redirect(`https://www.reddit.com/r/programmingwithmemes`)
});


        
	}

	_loadRoutes() {
		readdir('./routes', (err, files) => {
			if (err) return new Error(err);
			const routes = files.filter((c) => c.split('.').pop() === 'js');
			if (files.length === 0 || routes.length === 0) throw new Error('Application online on port');
			for (let i = 0; i < routes.length; i++) {
				let route = require(`./routes/${routes[i]}`);
				this.app.use(route.name, new route.Router());
			}
		});
	}


    

	_start() {
		try {
			this.app.listen(this.app.get('port'));
			console.log(`Application online on port ::${this.app.get('port')}::`);
		} catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = new Website();

 // * Code Owner: Diwas Atreya (Atreya#2401)
 // * Github: https://github.com/diwasatreya
 // * Contact on Twitter: https://twitter.com/DiwasAtreya