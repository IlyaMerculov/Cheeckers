const http = require('http');
const fs = require('fs');
console.log(fs)


var jsport = 8278;

http.createServer(function (request, response) {
    console.log( 'req.url: ' , request.url.substr(1) )
    fs.readFile( request.url.substr(1) , function (error , data){
        if(error){
            response.statusCode = 404;
            response.end(' Not found ');
            console.log(error)
        } else {
            response.writeHead(200, {
              'Content-Type': 'image/png image/jpeg',
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods' : 'GET , PUT , POST , DELETE'});
            console.log( data );
            response.end( data );
        }
    })

}).listen(jsport);

console.log('Server running at http://127.0.0.1:' + jsport + '/');
