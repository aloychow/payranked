import { withMySQL } from "../../../middlewares";
import { Submission } from "../../../services";

const getCompanyAbout = async (req, res) => {
  Submission.getCompanyAbout(req.query.company, (error, submissions) => {
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
      return getCompanyAbout(req, res);
    default:
      return res.status(404).json({
        error: true,
        message: "Method Not Allowed",
      });
  }
};

export default withMySQL(handler);
