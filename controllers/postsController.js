
// importo file Array posts
const postsData = require("../data/posts")



//index
function index(req, res) {
    const {tags, title} = req.query
    let filteredPosts = [...postsData];
    if(title){
        filteredPosts = postsData.filter ((post)=> post.title.toLowerCase() === title.toLowerCase());

    }
    if(tags){
        filteredPosts= postsData.filter((post)=> post.tags.includes(tags));
    }
 
    


    res.json(filteredPosts);
    }
//show
function show (req,res){
   const {title} = req.query;
   const post = postsData.find(post=> post.title === title);
   if(!post){
    return res.status(404).json({
        error: "not found"
    })
   }
console.log(post);
;

res.json(post);



}
// create

function create (req,res){
    const {title, img , contenuto, tags} = req.body;
    const id = postsData.at(-1).id + 1;
    // if(
    //     !title || 
    //     !img  || 
    //     !contenuto ||
    //     // controllo prima se il dato che arriva è un array 
    //     !tags?.lenght ){
    
    //     return res.status(400).json({error: "not valid"});
    //     }

    const newPost={ id, title, contenuto , img , tags }

    postsData.push(newPost);
    res.json(newPost);
    console.log(newPost);
    
    

}
// update

function update(req,res){
   //cerco la pizza da modificare

//controllo errore
if (!post){
    return res.status(404).json({error: "not found"});
}
//recupero i nuovi parametri
const {title, img, tags, contenuto} =req.body;
// if(!title || !img || !contenuto || !tags?.length ){
//     return res.status(400).json({error: "not valid"});
// }
//aggiorno il post
post.title = title,
post.img = img,
post.contenuto = contenuto,
post.tags =tags

res.json(post)

}
//modify
function modify (req,res){
    

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