import { Insight } from "../../../models";
import { withMongoDB } from "../../../middlewares"

const getInsightsByTitle = async (request, response) => {
	try {
		const career = await Insight.find({ job: request.query.id  })
		response.status(200).json(career);
		console.log(request.query.id)
		console.log('Hi', career.data)
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getInsightsByTitle(req, res);

		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)