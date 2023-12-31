const Post = require('../models/post');
const comment = require('../models/comment');

module.exports.create = function(req, res){
    Post.create({
        content : req.body.content,
        user :  req.user._id
    },function(err, post){ 
        if(err){console.log('error in creating a post'); return }
    
    return res.redirect('back');
    });
}

module.exports.destory = function(req,res){
    Post.findById(req.param.id, function(err,post){
        // .id meaning converting the object id into string
        if (post.user == req.user.id){
            post.remove();
            comment.deleteMany({post: req.param.id}, function(err){
             return res.redirect('back');
            });
        }else{
            return res.redirect('back');    
        }
    })
}