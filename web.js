var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var buf = fs.readFileSync('./index.html','utf8');
console.log(buf);

app.get('/', function(request, response) {
  response.end(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
