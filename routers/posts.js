const express = require('express');
const router = express.Router();


// index
router.get('/',postsController.index
)
// Show
router.get ("/:id", postsController.show);
//Create
router.post ("/", postsController.create);
//Update
router.put ("/:id",postsController.update );
//Modify
router.patch ("/:id", postsController.modify);
//Delete
router.delete ("/:id", postsController.destroy);
module.exports= router