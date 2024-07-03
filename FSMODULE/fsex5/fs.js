const fs= require('fs');
 let data=fs.readFile('note.text','utf-8',(err,data)=>{   // this method is used to read the file asynchronously...
    if(err) throw err;
    console.log(data);

})
