const express = require('express'); 
const app=express();


app.set('view engine', 'pug');
app.set('views', './views'); // Your all templates in folder views


app.get('/',(req,res)=>{
    res.render('index',{title:'MyExpressApp',message:"Hello"});
});

app.listen(3000);