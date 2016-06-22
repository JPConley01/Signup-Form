// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.send('<form action="/formsubmit" method="POST"><label>Name</label><input id="inputName" type="text" placeholder="Name"><br/>' +
  '<label>Email</label><input id="inputEmail" type="text" placeholder="Email">' +
  '<button type="submit">Send</button></form>');
});

app.get('/success', function(req, res) {
  res.send('<h1>Success!</h1>');
});

app.post('/formsubmit', function(req, res) {
  res.redirect('/success');
});

// Creating Server and Listening for Connections \\
var port = 3000;
app.listen(port, function(){
  console.log('Server running on port ' + port);

});
