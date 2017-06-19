const express = require('express');
const loremIpsum = require('lorem-ipsum')
 , output     = loremIpsum();
const app = express();

 app.get('/',function(req,res){
   res.send("Hello, Welcome to my page!")
 });

app.get('/lorem', function (req, res) {
  var output = loremIpsum({count:3, units: 'paragraphs',format: "html"})
  res.send(output);
});

app.listen(3500, function () {
  console.log('Successfully started express application!')
});
