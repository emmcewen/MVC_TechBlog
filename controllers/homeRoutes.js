const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login')
})

router.get('/signup', async (req, res) => {
    res.render('signup')
})

router.get('/newpost', async (req, res) => {
    try {
        const postData = await PostData.findAll({
            include: [
                model: User,
                attributes: ['username'],
            },
});

const stories = postData.map((post) => post.get({
    console.log(posts)
    res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
    }
    {
            catch(err) {
                res.status(500).json(err);

            }
        },
router.post('/post/:id', async (req, res) => {
            const PostData = await NewPost.findByPk(req.params.id, {
                include: [
                    {
                        model: User,
                        attribute: ["name"],
                    },
                ],

                const post = postData.get({ plain: true });
                res.render('posts', {
                    ...posts,
                    logged_in: req.session.logged_in
                })
            } catch (err) {
                res.status(500).json(err);
            }

        })

    router.get('/signup', withAuth, sync(req,res) => {
    try {
        const userData = await User.findbyPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: NewPost }],
        });

        const user = userData.get({ plain: true });
        res.render('signup', {
            ...user,
            logged_in: true
        })
    } catch (err) {
        res.status(500).json(err);
    }
}

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/signup');
        return;
    }
    res.render('login');
});

module.exports = router;