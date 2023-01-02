import { withMySQL } from "../../../middlewares";
import { Submission } from "../../../services";

const getSubmissionsCompany = async (req, res) => {
	Submission.getSubmissionsCompany(req.query.company, (error, submissions) => {
		if (error) {
			res.send({ error: error.message });
			return;
		}
		res.send({ submissions });
	});
};

const handler = (req, res) => {
	switch (req.method) {
		case "GET":
			return getSubmissionsCompany(req, res);
		default:
			return res.status(404).json({
				error: true,
				message: "Method Not Allowed",
			});
	}
};

export default withMySQL(handler);
