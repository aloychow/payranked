import { MySQL } from "../middlewares";

function createSubmission(submission, callback) {
	const keys = [
		"submissionDate",
		"company",
		"jobTitle",
		"jobLevel",
		"jobCategory",
		"jobType",
		"jobLocation",
		"yoeCurrent",
		"yoeTotal",
		"monthOffer",
		"yearOffer",
		"baseSalary",
		"variableSalary",
		"stockSalary",
		"bonusSalary",
		"totalSalary",
		"wlbRating",
		"careerRating",
		"cultureRating",
		"growthRating",
		"recommend",
		"good",
		"bad",
	];
	const query = `
		INSERT INTO submissions (${keys.join(',')})
		VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
	`;
	MySQL.query(
		query,
		keys.map((key) => submission[key]),
		(error, results) => {
			if (error) return callback(error);
			callback(null, results);
		}
	);
}

function getSubmissions(callback) {
	const query = `SELECT * FROM submissions`;
	MySQL.query(query, (error, results) => {
		if (error) {
			callback(error);
			return;
		}
		callback(null, results);
	});
}

function getSubmissionsCategory(jobCategory, callback) {
	MySQL.query(
		"SELECT * FROM `submissions` WHERE `jobCategory` = ?",
		[jobCategory],
		(error, results) => {
			if (error) {
				callback(error);
				return;
			}
			callback(null, results);
		}
	);
}

function getSubmissionsCompany(company, callback) {
	MySQL.query(
		"SELECT * FROM `submissions` WHERE `company` = ?",
		[company],
		(error, results) => {
			if (error) {
				callback(error);
				return;
			}
			callback(null, results);
		}
	);
}

function getCompanyAbout(company, callback) {
	MySQL.query(
		"SELECT * FROM `company_about` WHERE `company` = ?",
		[company],
		(error, results) => {
			if (error) {
				callback(error);
				return;
			}
			callback(null, results);
		}
	);
}

export const Submission = {
	getSubmissions,
	getCompanyAbout,
	createSubmission,
	getSubmissionsCategory,
	getSubmissionsCompany,
};
