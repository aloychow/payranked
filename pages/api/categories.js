import { Category } from "../../models"
import { withMongoDB } from "../../middlewares"

const getCategories = async (_, response) => {
	try {
		const categories = await Category.find();
		response.status(200).json(categories);
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const createCategory = async (request, response) => {
	const newCat = new Category(request.body);
	try {
		const savedCat = await newCat.save();
		response.status(200).json(savedCat);
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getCategories(req, res);
		case 'POST': return createCategory(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)