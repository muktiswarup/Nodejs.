// create server - http: node js core module...
//listen port no
const http= require('http');
const server=http.createServer((req,resp)=>{            // create server here

    resp.end(`<h1>Hello Http server. Chandra sekhar jena how are ypu </h1>`);                     
});

server.listen(7000,(err)=>{
    if(err) throw err
    console.log('server running on port no 8000');
});