const {validationResult} = require('express-validator/check');

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{
            _id: 1,
            title: 'First Post', content: 'This is my first post',
            imageUrl: 'images/duck.png',
            creator: {
                name: 'Marchal'
            },
            createdAt: new Date()
        }]
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
            const error = new Error('Validation failed!');
            error.statusCode = 422;
            throw error;
    }
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title,
        content: content,
        imageUrl: 'images/duck.png',
        creator: {name: 'Marchal'},
    });
    post.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post created successfully',
            post: result
        });
    }).catch(err => {
        console.log(err);
    })
    //Create post in DB
};

