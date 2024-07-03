const fs= require('fs');
let data = fs.readFileSync('classtxt.txt','utf-8'); // this method is used  read  synchronously file ..
console.log(data);