// Creating server with node js


// const http = require("http");

// function handleRequest(request, response) {

//     if(request.url === '/currenttime'){
//         response.statusCode =200;
//         response.end('<h1>' + new Date().toISOString() +'</h1>');
//     }
//    // localhost:3000/ currenttime 
//    // localhost:3000
//   else if(request.url==='/'){
//       response.statusCode = 200;
//       response.end("<h1>Hello World!</h1>");
// } 
// }

// const server = http.createServer(handleRequest);

// server.listen(3000);

//-------------------------------------------------------------------

// Creating server with Express JS

const fs = require('fs');
const path = require('path');
const express = require('express');

//  Express creates the server by itself
const app = express();

app.use(express.urlencoded({extended: false}));

// function handleCurrentTimeRequest(){

// }
// app.get('/currenttime',  handleCurrentTimeRequest );

// - Can be also written without function name in both node js and express js

app.get('/currenttime', function(req, res){
    res.send('<h1>' + new Date().toISOString() +'</h1>');
});

// By default it use status code as 200 if not mentioned
app.get('/',function(req,res){
    res.send('<form action="/store-user"  method="POST"> <label>Your Name: </label> <input type="text" name= "username"> <button> Submit </button> </form>');
}) // localhost:3000/




app.post('/store-user', function(req,res){
    // It is not parsing data i.e it is not converting data into JS object directly as it is simply text attached thus shows error
    // const userName = req.body.username;
    
    // We will need to parse data
    
    const userName = req.body.username;
    
    const filePath = path.join(__dirname, 'data', 'user.json');
    // filedata will store the data as simple text
    const fileData = fs.readFileSync(filePath);
    // Parse will simply convert json to javascript object
    const existingUsers = JSON.parse(fileData);
    // push is used for adding in end of array
    existingUsers.push(userName);
    // stringify is used to convert again to json
    fs.writeFileSync(filePath,JSON.stringify(existingUsers));
    console.log(userName);
});

app.get('/users',function(req,res){
    const filePath = path.join(__dirname, 'data', 'user.json');
    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of existingUsers){
        responseData += '<li>'+ user +'</li>';
    }
    responseData += '</ul>';
    res.send(responseData);
})

app.listen(3000); 


