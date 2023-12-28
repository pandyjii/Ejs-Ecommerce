const express = require('express');

const app = express();
const port = 8080;
const { data } = require('./data');
// app.set('views', './views')

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', function (req, res) {  // localhost:8080/
    // write a query to frtch this data from mongo db 
    
    res.render('pages/index', // ejs file in the browser
        {
            products: data,
            developer: "shubham"
        }
    );
});
app.listen(port, () => {
    console.log("server is up on port", port);
})