var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(
    path.join(__dirname, 'dist'),
    {add:true},
    function(err){console.log(err);}
);
