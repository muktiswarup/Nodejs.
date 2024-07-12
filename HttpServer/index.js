const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('A new request from server.');
    console.log(req.url); // Log URL immediately

    const demo = `${Date.now()} ${req.url} :New request received \n`;
    fs.appendFile('Demo.txt', demo, (err, result) => {
        if (err) {
            console.error('Error appending to file:', err);
           
        } else {
            console.log(result);
        }
    
    });

    switch (req.url) {
        case '/':
            res.end('You are in home page');
            break;
        case '/about':
            res.end('you are in about page');
            break;
        default:
            res.end('404: Error ');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started');
});
