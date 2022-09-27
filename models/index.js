const User = require ('./User');
const Post = require ('./Post');

User.hasMany (Post,{
    foriegnKey:'user_id'
});
Post.belongsTo(User,{
    foriegnKey:'user_id'
});

module.exports = {User,Post};