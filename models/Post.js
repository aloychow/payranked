const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },

        body: {
            type: Array,
            required: true,
        },

        image1: {
            type: String,
            required: false,
        },
        image2: {
            type: String,
            required: false,
        },
        image3: {
            type: String,
            required: false,
        },
        image4: {
            type: String,
            required: false,
        },
        image5: {
            type: String,
            required: false,
        },
        image6: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }

);

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export { Post };
export default Post;