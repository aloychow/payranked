import { withMySQL } from "../../middlewares";
import { Submission } from "../../services";

const getSubmissions = async (_, res) => {
	Submission.getSubmissions((error, submissions) => {
		if (error) {
			res.send({ error: error.message });
			return;
		}
		res.send({ submissions });
	});
};

const createSubmission = async (req, res) => {
	Submission.createSubmission(req.body, (error) => {
		if (!error) return res.send(req.body);
		return res.send({ error: error.message });
	});
};

const handler = (req, res) => {
	switch (req.method) {
		case "GET":
			return getSubmissions(req, res);
		case "POST":
			return createSubmission(req, res);
		default:
			return res.status(404).json({
				error: true,
				message: "Method Not Allowed",
			});
	}
};

export default withMySQL(handler);
