import bcrypt from "bcrypt";

import { User } from "../../../models"
import { withMongoDB } from "../../../middlewares"

const login = async (request, response) => {
	try {
		const { email, password } = request.body;
		let user = await User.findOne({ email });

		if (!user) return response
			.status(400)
			.json("Wrong Credentials!")

		const isValid = await bcrypt
			.compare(password, user.password)

		if (!isValid) return response
			.status(400)
			.json("Wrong Credentials!")

		user = await User
			.findOne({ email })
			.select("-password");

		response.status(200).json(user);
	}
	//
	catch (err) {
		response.status(500).send(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'POST': return login(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)