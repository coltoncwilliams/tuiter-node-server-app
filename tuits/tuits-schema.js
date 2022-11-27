import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userName: String,
    handle: String,
    image: String,
    tuit: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    disliked: Boolean,
    time: String,
    replies: Number,
    retuits: Number
}, {collection: 'tuits'});
export default schema;