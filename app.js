
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const postsRouter = require("./routers/posts");

app.use("/posts", postsRouter);

app.get('/',(req, res)=> {
    res.send ("server del mio blog")
})


;
app.listen(port ,()=>{
    console.log("il server è online");
    
})
