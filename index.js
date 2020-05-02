const express = require('express');
const app = express();
const port = 8080;
// import layouts
const epxressLayouts = require('express-ejs-layouts');
// import db
const db = require('./config/mongoose')

// for static files
app.use(express.static('./assets'));

// middleware for layouts
app.use(epxressLayouts);

// extract styles and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// middleware to use express routes
app.use('/', require('./routes'));

// set up view engine
app.set('view engine', 'ejs');
// set views path
app.set('views', './views');


app.listen(port, function(error){
    if (error)
        console.log(`Error while running server ${error}`);

    console.log(`Server is up and running at port: ${port}`);
});