const Joi = require( "joi" );

// This is a class because we may want to pass
// in some kind of a config in the future.. 

const Validations = function( ){

};

Validations.prototype.mainConfig = function( ){
	return Joi.object( {
		slackbot: Joi.object( ).keys( {
			token: Joi.string( ).required( ),
			name: Joi.string( ).required( )
		} )
	} );
};

module.exports = Validations;
