import mysql from "mysql";

const MySQL = mysql.createConnection({
	host:
		process.env.MYSQL_HOST ||
		"jhdjjtqo9w5bzq2t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: process.env.MYSQL_USER || "i7z9sf2sh5ufdyw4",
	password: process.env.MYSQL_PASSWORD || "einqxs504rojlh5u",
	database: process.env.MYSQL_DATABASE || "mnxnxuiaxosph9iy",
	port: process.env.MYSQL_PORT || 3306,
});

const connectMySQL = () => {
	return new Promise((resolve) => {
		MySQL.connect({}, error => {
			if (error) {
				console.log("MySQL::ERR", error.message);
				return resolve(error);
			}

			console.log("Connected to MySQL");
			resolve(null);
		});
	})
};

const withMySQL = (handler) => async (req, res) => {
	if (MySQL.state === "disconnected") {
		const error = await connectMySQL();
		if (error) return res.status(500).json({
			error: true,
			message: error?.message
		})
	}
	return handler(req, res);
};

export { withMySQL, MySQL };
