const fs= require('fs');
fs.readFile('note.txt','utf-8',(err,newData)=>{
    fs.writeFile('one.txt',newData,(err)=>{    // how to create a file
        if(err) throw err
        console.log('file created')
    })
    console.log(newData)

})