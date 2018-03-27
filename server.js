//Static HTTP Server

// modules
var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new static.Server();

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( process.env.PORT || port ); 

console.log("Your server is running on http://localhost:8080/");
