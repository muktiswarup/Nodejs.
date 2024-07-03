require('http').
createServer((req,res)=>{
    res.end('hi server how are you')
}).
listen(8000, ()=>{
    console.log('server started')
})