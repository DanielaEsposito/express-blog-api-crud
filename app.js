//! config enviroment variables
require ("dotenv").config();

//! configurazione express
// init express
const express = require('express');
const app = express();
const port = process.env.HOST_PORT;
const domain =process.env.HOST_DOMAIN;
//jason parser for body request
app.use (express.json());
// serving public folder
app.use(express.static('public'));

// importo file rotte nella cartella routers
const postsRouter = require("./routers/posts.js");

app.use("/posts", postsRouter);

// app.get('/',(req, res)=> {
//     res.send ("server del mio blog")
// })
// ;

// start listening
app.listen(port ,()=>{
    console.log(`App listening at ${domain}${port}`);
    
})
