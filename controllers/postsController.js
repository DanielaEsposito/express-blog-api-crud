
const posts = require("../data/posts")

//index
function index(req, res) {

    res.json({
        number : posts.length,
        posts :posts
    })}

//show
function show (req,res){
   
    const {id} = req.params;
    res.json(posts[id]);

}
// create

function create (req,res){
    const {id} = req.params;
    res.json(`crea un nuovo post`);

}
// update

function update(req,res){
    const {id} = req.params;
    res.json(`modifica il post con id: ${id}`);

}
//modify
function modify (req,res){
    const {id} = req.params;
    res.json(`modifica parziale il post con id: ${id}`);

}
// destroy

function destroy(req,res){
    const {id} = req.params;
    res.json(`eliminazione del post con id: ${id}`);

}
module.exports ={index, show, create, modify, update,destroy};