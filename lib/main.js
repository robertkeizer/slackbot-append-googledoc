const SlackBot = require( "slackbots" );
const Joi = require( "joi" );
const async = require( "async" );
const validations = new require( "./validations" )( );
const events = require( "events" );
const util = require( "util" );

const Main = function( config ){
	const self = this;

	async.waterfall( [ function( cb ){
		Joi.validate( config, validations.mainConfig( ), function( err, newConfig ){
			if( err ){ return cb( err ); }
			// Note that we could have defaults in the validations, hence
			// why this is set as newConfig.
			self.config = newConfig;
			return cb( null );
		} );
	}, function( cb ){

		// Let's go ahead and get connected to slack.
		self._connectSlack( cb );

	} ], function( err ){
		if( err ){
			return self.emit( "error", err );
		}
	} );
};

util.inherits( Main, events.EventEmitter );

Main.prototype._connectSlack = function( cb ){

	// Create the instance of the slackbot;
	this._bot = new SlackBot( this.config.slackbot );

	const self = this;

	// Chain the error to bubble to the instance of our
	// bot.
	this._bot.on( "error", function( err ){
		self.emit( "error", err );
	} );

	this._bot.once( "open", function( ){
		
	} );

	this._bot.once( "close", function( ){
		
	} );

	this._bot.on( "message", function( data ){
		
	} );
};

module.exports = Main;
