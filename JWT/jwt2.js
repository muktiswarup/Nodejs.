let jwt=require('jsonwebtoken');
let user={
    name:'Virat Kohli',
    email:'virat@123',
    password: '123abcd'
};
let token=jwt.sign(user,'cccdse',(err,token)=>{
    if(err) throw err
    console.log(token)
})