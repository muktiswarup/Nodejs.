const http= require('http');
const express= require('express');

const app = express();

app.get('/',(req,res)=>{
    return res.send('Hello from Home page');
})
app.get('/about',(req,res)=>{
    return res.send('Hello from about page.'+'Hi Mr.'+ req.query.name+'Your age is '+ req.query.age);
})
const myServer=http.createServer(app);
myServer.listen(8000,'127.0.0.1',()=>console.log('Server Started'));


