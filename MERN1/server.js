const http=require('http');
const server = http.createServer((req, res) => {
    res.end('Hello from Nodejs server');});
    server.listen(5000, () => {
        console.log('Server is running on https://Localhost:5000');
    });