const http = require('http');
const server = http.createServer((req, res) => {
    if(res.method === 'GET') {
       res.write('You sent a GET request');
    }
    else if(res.method === 'POST') {
       res.write('You sent a POST request');
    }
    else if(res.method === 'PUT') {
       res.write('You sent a PUT request');
    }
    else if(res.method === 'DELETE') { 
         res.write('You sent a DELETE request');
     }
    res.end();
});
server.listen(3000, () => {
console.log('Server is running on https://localhost:3000')});