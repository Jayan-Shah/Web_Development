const express = require('express');
const uuid = require('uuid');
const fs=require('fs');
const path = require("path");
const resData = require('../util/restaurant-data');

const router = express.Router();





router.get("/restaurant", function (req, res) {
    // const htmlFilePath = path.join(__dirname, "frontend", "restaurant.html");
    // res.sendFile(htmlFilePath);
    let order=req.query.order;
    let nextOrder ='desc';
    if(order!=='asc' && order!=='desc'){
        order='asc';
    }

    if(order==='desc'){
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurants();

    storedRestaurants.sort(function(resA,resB){
        if((order==='asc' && resA.name>resB.name) ||( order==='desc' && resB.name>resA.name)){
            return 1;
        } 
        return -1;
    });

    res.render('restaurant', {numberOfRestaurants : storedRestaurants.length,
                restaurant: storedRestaurants,
                 nextOrder: nextOrder
            });
  });

router.get('/restaurant/:id', function(req,res){
    const restaurantId= req.params.id;
    const storedRestaurants = resData.getStoredRestaurants();
  
    for (const restaurant of storedRestaurants){
     if(restaurant.id === restaurantId){
       return res.render('restaurant-detail', {restaurant:restaurant});
     }
    }
    res.status(404).render('404');
  });


router.get("/recommend", function (req, res) {
    // const htmlFilePath = path.join(__dirname, "frontend", "recommend.html");
    // res.sendFile(htmlFilePath);
    
    res.render('recommend');
  });
  
router.post('/recommend', function(req,res){
      // As whole body values we want to access
       const restaurant = req.body;
       restaurant.id = uuid.v4();
       const storedRestaurants = resData.getStoredRestaurants();
  
       storedRestaurants.push(restaurant);
  
       resData.storeRestaurants(storedRestaurants);
  
       res.redirect('/confirm');
  
  });

  module.exports=router;