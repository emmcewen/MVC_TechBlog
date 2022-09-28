const User = require ('./User');
const Post = require ('./Post');
const Comment = require ('./Comment');

User.hasMany (Post,{
    foriegnKey:'user_id'
});
Post.belongsTo(User,{
    foriegnKey:'user_id'
});

Post.hasMany(Comment,{
    foriegnKey:'post_id'
});

Comment.belongsTo(Post,{
    foriegnKey: 'post_id',
});
Comment.belongsTo(User,{
    foriegnKey:'user_id'
});
User.hasMany(Comment,{
    foriegnKey: 'user_id'
});

module.exports = {User,Post};