var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {
  fs.readFile('login.html', function(err, data) {
       response.writeHead(200, {'Content-Type': 'text/html'});
       response.write(data);		 // Contents of the file.   
       return response.end();
      });
     }).listen(8080);
