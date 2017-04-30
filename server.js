/**
 * Created by JohnWu on 2016-10-26.
 */

// set up ======================================================================
var express = require('express');
var app = express();
var port  	 = process.env.PORT || 5000;

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
// bootstrap ----------------------------------------------------------------
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listing on port " + port);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/summer-2017', function (req, res) {
    res.sendFile(__dirname + '/public/summer-2017.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/public/contact.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/experience', function (req, res) {
    res.sendFile(__dirname + '/public/experience.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/projects', function (req, res) {
    res.sendFile(__dirname + '/public/projects.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.get('/skills', function (req, res) {
    res.sendFile(__dirname + '/public/skills.html'); // load the single view file (angular will handle the page changes on the front-end)
});
