const express = require('express');
const app = express();
const PORT = 8080;

// Set the images/stylesheets to be in /static
app.use(express.static(__dirname + '/static'));

// Tell the server to render ejs files
app.set('trust proxy', true);
app.set("view engine", "html");
app.engine('.html', require('ejs').__express);

// Opens up the server to the port specified above 
app.listen(PORT, function () {
    console.log(`An app listening on port ${PORT}`);
});

// Render the homepage upon visiting
app.get('/', function(req, res) {
    res.render('index') 
});

