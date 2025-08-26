const express = require('express'); // Returns a function 
const app = express(); // Object of fucntion express called app

const courses = require('./courses');
app.use(express.json());  


app.use('/api/courses',courses); // Because /api/courses is used so we need not mention this route in courses...


app.get('/',(req,res)=>{
    res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));

