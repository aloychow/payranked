import bcrypt from 'bcrypt'

import { User } from "../../../models"
import { withMongoDB } from "../../../middlewares"

const getUserById = async (request, response) => {
	try {
		const user = await User.findById(request.query.id).select('-password -__v');
		response.status(200).json(user);
	}
	//
	catch (err) {
		response.status(500).json(err);
	}
}

const updateUserById = async (request, response) => {
	if (request.body.userId === request.query.id) {
		if (request.body.password) {
			const salt = await bcrypt.genSalt(10);
			request.body.password = await bcrypt.hash(request.body.password, salt)
		}
		try {
			const updatedUser = await User.findByIdAndUpdate(request.query.id,
				{
					$set: request.body,
				},
				{ new: true }
			);
			response.status(200).json(updatedUser);
		} catch (err) {
			response.status(500).json(err);
		}
	} else {
		response.status(401).json('Update not allowed');
	}
}

const deleteUserById = async (request, response) => {
	if (request.body.userId === request.query.id) {
		try {
			const user = await User.findById(request.query.id);
			try {
				// Uncomment below if want to delete post if user is deleted
				// await Post.deleteMany({username: user.username })

				await User.findByIdAndDelete(request.query.id);
				response.status(200).json('User has been deleted');
			} catch (err) {
				response.status(500).json(err);
			}
		} catch (err) {
			response.status(404).json('User not found');
		}
	} else {
		response.status(401).json('Delete not allowed');
	}
}

const handler = (req, res) => {
	switch (req.method) {
		case 'GET': return getUserById(req, res);
		case 'PUT': return updateUserById(req, res);
		case 'DELETE': return deleteUserById(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default withMongoDB(handler)