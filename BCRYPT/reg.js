const bcrypt=require('bcryptjs')
let userDetails= {
    name: "sikanth",
    email: 'srikanth@gmai.com',
    password: '123456'
}                                                                   ////install and import bcrypt js bu using npm i bcryptjs
let newPassword= bcrypt.hashSync(userDetails.password,10);
console.log(newPassword);
// console.log(userDetails.name)
userDetails= {...userDetails,password:newPassword};
console.log(userDetails);
if(bcrypt.compareSync('123456',userDetails.password)){
    console.log('password matched');
}
else {
    console.log('not matched')
}
