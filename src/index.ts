import express from "express";
import path from "path";
import remoteHQRouter from './remoteHQ';

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

const port = 8081; // default port to listen


// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

app.use('/remotehq', remoteHQRouter);

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );