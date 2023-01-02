import bcrypt from 'bcrypt';

import { User } from "../../../models"
import { withMongoDB } from "../../../middlewares"

const register = async (request, response) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(request.body.password, salt);

		const newUser = new User({
			username: request.body.username,
			email: request.body.email,
			password: hashedPass,
		});

		const user = await newUser.save();
		response.status(200).json(user);
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'POST': return register(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)