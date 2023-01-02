import { Post } from "../../../models";
import { withMongoDB } from "../../../middlewares"

const getPostByTitle = async (request, response) => {
	try {
		const posts = await Post.find({ title: request.query.id })
		response.status(200).json(posts);
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const updatePostById = async (request, response) => {
	try {
		const post = await Post.findById(request.query.id);
		if (post.username === request.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(request.query.id,
					{
						$set: request.body,
					},
					{ new: true }
				);
				response.status(200).json(updatedPost);
			} catch (err) {
				response.status(500).json(err);
			}
		} else {
			response.status(401).json('You can only update your own posts')
		}
	} catch (err) {
		response.status(500).json(err);
	}
}

const deletePostById = async (request, response) => {
	try {
		const post = await Post.findById(request.query.id);
		if (post.username === request.query.username) {
			try {
				await post.delete()
				response.status(200).json('Post deleted');
			} catch (err) {
				response.status(500).json(err);
			}
		} else {
			response.status(401).json('You can only delete your own posts')
		}
	} catch (err) {
		response.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getPostByTitle(req, res);
		case 'PUT': return updatePostById(req, res);
		case 'DELETE': return deletePostById(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)