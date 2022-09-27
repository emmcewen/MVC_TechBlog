const router = require('express').Router();
const {Comment} =require('../../models')
const withAuth = require('../../utils')

router.get ('/', withAuth, async (req,res)=>{
    try {
        const commentData = await Comment.findAll({
            include:[User],
        });
        const comments = commentData.map((comments)=> comment.get({plain: true}));

        req.session.save(()=> {
            req.session.user_id = userData.id;
            req.session.logged_in= true;
            res.status(200).json(userData);
        });  
    }catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req,res)=>{
        const body = req.body;
        try {
            const newComment = await Comment. create({
               ...body,
               userId: req.session.userId,
            });
    
            req.session.save(()=> {
                req.session.user_id = userData.id;
                req.session.logged_in= true;
                res.status(200).json(userData);
            });  
        }catch (err) {
            res.status(400).json(err);
        }
    });
        module.exports=router;