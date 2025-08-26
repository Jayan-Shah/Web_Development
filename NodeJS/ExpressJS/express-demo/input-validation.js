const Joi = require('joi');
const express = require('express'); // Returns a function 
const app = express(); // Object of fucntion express called app

app.use(express.json());  

const courses=[
    {id: 1, name:'course1'},
    {id: 2,name: 'course2'},
    {id:3, name:'course3'}
];

// Input Validation 
app.post('/api/courses', (req,res)=>{
    
    if(!req.body.name || req.body.name.length <3){
        // 400 Bad Request
        res.status(400).send('Name is required and should be minimum 3characters');
        return;
    }
});

// Use a node package for validation i.e. joi
app.post('/api/courses', (req,res)=>{
    // This is required for saying class Joi what is our schema required...
    const schema={
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
});

// PUT Request
app.put('/api/courses/:id', (req,res)=>{
   const course = course.find(c => c.id === parseInt(req.params.id));
   if(!course) 
    res.status(404).send('The course with the given ID was not found');

//    const result =validateCourse(req.body); Not using result again and again
    // Using object destructor
   const {error} = validateCourse(req.body);
   if (error) {
     res.status(400).send(result.error.details[0].message);
     return;
   }
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course){
    const schema ={
    name: Joi.string().min(3).required()
   }
   const result = Joi.validate(req.body,schema);
   return result;
};


// Delete Request
app.delete('/api/courses/:id', (req,res)=>{
    const course = course.find((c) => c.id === parseInt(req.params.id));
    if (!course){
        return res.status(404).send("The course with the given ID was not found"); 
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});








