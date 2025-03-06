const express = require("express");

const path = require("path");
const filePath = path.join(__dirname, 'data', 'restaurant.json');
const app = express();
const defaultRoutes = require('./routes/default');
const restaurantRoutes= require('./routes/restaurants');






app.set('views',path.join(__dirname,'frontend'));
app.set('view engine','ejs');

app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));

app.use('/',defaultRoutes);
app.use('/',restaurantRoutes);


app.get("/confirm", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "frontend", "confirm.html");
  // res.sendFile(htmlFilePath);
  res.render('confirm');
});

app.use(function(req,res){
  res.status(404).render('404');
});


app.use(function(error,req,res,next){
  res.status(500).render(505);
});

app.listen(3000);
