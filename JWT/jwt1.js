const jwt= require('jsonwebtoken');    // install the json web token ..... npm i json web token

let user={
    email: 'rahul@gmail.com',
    password: 'rahul123'
}
let payload={
    id: user.email
}
let secretKey= 'ABCDE';
let token= jwt.sign(payload,secretKey,{expiresIn:30*30})    // genereting the token using sign method
console.log(token);

// How to verify the token....

jwt.verify(token,secretKey,(err,newPayload)=>{
    if(err) throw err
    console.log(newPayload);
})