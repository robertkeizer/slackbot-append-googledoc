const assert = require( "assert" );

const Main = require( "../" );

describe( "Main", function( ){
	it( "Is a function", function( ){
		assert.ok( typeof( Main ) == "function" );
	} );
} );
