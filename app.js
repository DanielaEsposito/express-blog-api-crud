require ("dotenv").config();


const express = require('express');
const app = express();
const port = process.env.HOST_PORT;
const domain =process.env.HOST_DOMAIN;

app.use(express.static('public'));

const postsRouter = require("./routers/posts.js");

app.use("/posts", postsRouter);

// app.get('/',(req, res)=> {
//     res.send ("server del mio blog")
// })
// ;

app.listen(port ,()=>{
    console.log(`App listening at ${domain}${port}`);
    
})
