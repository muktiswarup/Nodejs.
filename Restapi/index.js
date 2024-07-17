const express= require('express');
const users=require('./MOCK_DATA.json')
const app= express();
PORT=8000;
//Routes
app.get('/api/users',(req,res)=>{           //RSt api 
    res.send(users );                       
})
app.get('/users',(req,res)=>{
   const html= `
   <ul> 
   ${users.map((user)=>`<li> ${user.first_name}</li>`).join('')} 
   </ul>
   `
   res.send(html);
})
app.get('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
})
app.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
}).patch((req,res)=>{
    res.json({status:'pending'})
}).delete((req,res)=>{
   return res.json({})
})


app.post('/api/users',(req,res)=>{
    // create new user 
    return res.json({status:'pending'});
})
app.patch('/api/users/:id',(req,res)=>{
    //edit the user
    return res.json({status:'edit'})
})
app.listen(PORT,()=>{
    console.log('Server Started');
})