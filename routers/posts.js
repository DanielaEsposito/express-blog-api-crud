const express = require('express');
const router = express.Router();


// index
router.get('/',(req, res)=> {
    const posts =[
{   
    titolo: "Ciambellone",
    contenuto:"",
    img:"./public/img/ciambellone.jpeg",
    tags : ["ciambellone", "dolce"]
},
{   
    titolo: "Cracker alla barbabietola",
    contenuto:"",
    img:"./public/img/cracker_barbabietola.jpeg",
    tags : ["snack","salato"]
},
{   
    titolo: "Pane fritto",
    contenuto:"",
    img:"./public/img/cracker_barbabietola.jpeg",
    tags : ["pane", "cina"]
},
{   
    titolo: "Pasta alla barbabietola",
    contenuto:"",
    img:"./public/img/pasta_barbabietola.jpeg",
    tags : ["pasta", "barbabietola", "rosso"]
},
{   
    titolo: "Torta paesana",
    contenuto:"",
    img:"./public/img/torta_paesana.jpeg",
    tags : ["tradizione", "torta", "dolce"]
}]
res.json({
    number : posts.length,
    posts :posts
})
})

// Show
router.get ("/:id", (req,res)=>{
    const posts =[
        {   
            titolo: "Ciambellone",
            contenuto:"",
            img:"./public/img/ciambellone.jpeg",
            tags : ["ciambellone", "dolce"]
        },
        {   
            titolo: "Cracker alla barbabietola",
            contenuto:"",
            img:"./public/img/cracker_barbabietola.jpeg",
            tags : ["snack","salato"]
        },
        {   
            titolo: "Pane fritto",
            contenuto:"",
            img:"./public/img/cracker_barbabietola.jpeg",
            tags : ["pane", "cina"]
        },
        {   
            titolo: "Pasta alla barbabietola",
            contenuto:"",
            img:"./public/img/pasta_barbabietola.jpeg",
            tags : ["pasta", "barbabietola", "rosso"]
        },
        {   
            titolo: "Torta paesana",
            contenuto:"",
            img:"./public/img/torta_paesana.jpeg",
            tags : ["tradizione", "torta", "dolce"]
        }]
    const {id} = req.params;
    res.json(posts[id]);

});

//Create
router.post ("/", (req,res)=>{
    const {id} = req.params;
    res.json(`crea un nuovo post`);

});
//Update
router.put ("/:id", (req,res)=>{
    const {id} = req.params;
    res.json(`modifica il post con id: ${id}`);

});
//Modify
router.patch ("/:id", (req,res)=>{
    const {id} = req.params;
    res.json(`modifica parziale il post con id: ${id}`);

});
//Delete
router.delete ("/:id", (req,res)=>{
    const {id} = req.params;
    res.json(`eliminazione del post con id: ${id}`);

});
module.exports= router