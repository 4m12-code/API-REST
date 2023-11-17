const express = require('express');
const router = express.Router()

router.post('/', async(req,res) => {
    const post = new Post({
        // title: req.body.title,
        // description: req.body.description
        username: req.body.username,
        password: req.body.password,
        nombre: req.body.nombre,
        telefono: req.body.telefono
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(error){
        res.json({message:error});
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).json({ message: 'El post no fue encontrado' });
        }
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
})

// router.delete('/:postId', async(req,res)=>{
//     try{
//         const removedPost = await Post.remove({_id:req.params.postId});
//         res.json(removedPost);
//     }catch(error){
//         res.json({message: error});
//     }
// })

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.findOneAndDelete({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error });
    }
})

// router.patch('/:postId', async(req,res) => {
//     try{
//         const updatePost = await Post.updateOne(
//             {_id: req.params.postId},
//             {$set:{title:req.body.title}});
//         res.json(updatePost);
//     }catch(error){
//         res.json({message:error});
//     }
// })
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            // { _id: req.params.postId },
            // { $set: { title: req.body.title } }
            { _id: req.params.userId },
            { $set: { username: req.body.username, password: req.body.password, nombre: req.body.nombre, telefono: req.body.telefono } }
        );
        if (updatePost.n === 0) {
            return res.status(404).json({ message: 'El post no fue encontrado' });
        }
        res.json(updatePost);
    } catch (error) {
        res.json({ message: error });
    }
})
module.exports = router;