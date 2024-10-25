const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    file: String,
    likes: { type: Number, default: 0 },
    comments: [{ text: String, createdAt: { type: Date, default: Date.now } }], // Agrega createdAt si quieres
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;