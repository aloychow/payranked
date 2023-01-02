import { withMongoDB } from "../../middlewares"

const handler = async (_, res) => {
	return res.status(200).json([])
}

export default withMongoDB(handler)