/**
 * Static HTTP Server
 *
 * Create a static file server instance to serve files
 * and folder in the './app' folder
 */

// modules
var static = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new static.Server("./app");

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port ); 

console.log("Your server is running on http://localhost:8080/");
