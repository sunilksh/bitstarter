var express = require('express');
var app = express();
app.use(express.logger());
var buffer = buffer(100);
buffer = fs.readFile('./index.html');
var str = buffer.toString('utf8,0,buffer.length);
app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
