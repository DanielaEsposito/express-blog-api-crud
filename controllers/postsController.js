
const postsData = require("../data/posts")

//index
function index(req, res) {
    const {tags, title} = req.query
    let filteredPosts = [...postsData];
    if(title){
        filteredPosts = postsData.filter ((post)=> post.title.toLowerCase()=== title.toLowerCase);

    }
    if(tags){
        filteredPosts= postsData.filter((post)=> post.tags.includes(tags));
    }

    res.json(postsData);
    }

//show
function show (req,res){
   const id = parseInt(req.params.id);
   const post = postsData.find(post=> post.id === id);
   if(!post){
    return res.status(404).json({
        error: "not found"
    })
   }

res.json(post);

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
   const id = parseInt(req.params.id);
   const post = postsData.find(post=> post.id === id);
   if(!post){
    return res.status(404).json({
        error: "not found...you can't delete"
    });
   } 
   const postIndex= postsData.indexOf(post);;
   postsData.splice(postIndex, 1);
   res.json(postsData);

}
module.exports ={index, show, create, modify, update, destroy};