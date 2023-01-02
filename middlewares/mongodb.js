import mongoose from 'mongoose';

const connectMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB');
		return [false, null]
	}
	catch (error) {
		console.log('MongoDB::ERR', error.message);
		return [true, error]
	}
}

const withMongoDB = handler => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		return handler(req, res);
	}

	const [isError, error] = await connectMongoDB()
	if (isError) return res.status(500).json({
		error: true,
		message: error?.message
	})

	return handler(req, res);
};

export { withMongoDB }