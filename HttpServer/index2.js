const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204, { 'Content-Type': 'image/x-icon' });
    return res.end();
  }

  console.log('A new request from server.');
  console.log(req.url); // Log URL immediately

  const demo = `${Date.now()} ${req.method} ${req.url} : New request received\n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  // Send the response first
  switch (myUrl.pathname) {
    case '/':
      if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('You are on the home page');
      } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
      }
      break;

    case '/about':
      const userName = myUrl.query.myname || 'Guest';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hi ${userName}, you are on the about page`);
      break;

    case '/search':
      const search = myUrl.query.search_query;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Here are your results for ${search}`);
      break;

    case '/signup':
      if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a signup form');
      } else if (req.method === 'POST') {
        // Simulate a DB query or other processing
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Signup Success');
      } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
      }
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: Error');
  }

  // Append to file asynchronously
  fs.appendFile('Demo.txt', demo, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
    } else {
      console.log('Request logged successfully');
    }
  });
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server has started');
});
