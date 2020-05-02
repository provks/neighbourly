const mongoose = require('mongoose');

// local mongodb connection
// mongoose.connect('mongodb://localhost/neighbourly_development');
// atlas mongodb connection
mongoose.connect('mongodb+srv://provks:1234@cluster0-vx20s.mongodb.net/neightbourly_development?retryWrites=true&w=majority', {
    useUnifiedTopology: true, 
    useNewUrlParser: true 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log("Connected to Database : MongoDB");
});

module.exports = db;