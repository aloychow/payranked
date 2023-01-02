import { Post } from "../../models"
import { withMongoDB } from "../../middlewares"

const getPosts = async ({ query: { user, cat } }, response) => {
	try {
		const condition = {};
		if (user) condition.username = user;
		if (cat) condition.category = { $in: [cat] }

		const posts = await Post.find(condition);
		return response.status(200).json(posts);

	}
	//
	catch (err) {
		return response.status(500).json(err);
	}
}

const createPost = async (req, res) => {
	try {
		const post = new Post(req.body);
		const vError = post.validateSync();

		if (vError) return res.status(422).json(vError)

		const savedPost = await post.save();
		return res.status(200).json(savedPost);
	}
	//
	catch (err) {
		return res.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getPosts(req, res);
		case 'POST': return createPost(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)