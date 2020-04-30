const express = require('express');
const app = express();
const port = 8080;

// middleware to use express router
app.use('/', require('./routes'));

app.listen(port, function(error){
    if (error)
        console.log(`Error while running server ${error}`);

    console.log(`Server is up and running at port: ${port}`);
});