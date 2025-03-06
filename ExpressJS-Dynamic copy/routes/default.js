const express = require('express');
const router = express.Router();


router.get("/", function (req, res) {
//   const htmlFilePath = path.join(__dirname, "frontend", "index.html");
//   res.sendFile(htmlFilePath);
    res.render('index');
});


router.get("/about", function (req, res) {
    // const htmlFilePath = path.join(__dirname, "frontend", "about.html");
    // res.sendFile(htmlFilePath);
    res.render('about');
  });

module.exports=router;