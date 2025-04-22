const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/56', (res) => {
    let data='';
    res .on('data', (chunk) => {data += chunk;});
    res.on('end', () => {console.log(JSON.parse(data));});
}).on('error',err=> console.log(err));