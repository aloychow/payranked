import { Post } from "../../../models";
import { withMongoDB } from "../../../middlewares";

const getFeaturedPosts = async (_, res) => {
	try {
		const featuredIds = [
			'6288d631776338cad1b964f7',
			'62893d332a88595aaf2fc494',
			'62c1e9504501c9bcb7a0d69f'
		]
		const posts = await Post.find({ _id: { $in: featuredIds } })
		return res.status(200).json(posts);
	}
	//
	catch (err) {
		return res.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getFeaturedPosts(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)