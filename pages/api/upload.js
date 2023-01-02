import fs from 'fs'
import formidable from 'formidable';

export const config = {
	api: {
		bodyParser: false,
	},
};

const upload = (req, res) => {
	const form = new formidable.IncomingForm({
		keepExtensions: true,
		uploadDir: "public/images/uploads"
	});

	form.parse(req, (err, fields, files) => {
		// FILE UPLOAD / PARSE ERROR
		if (err) return res.status(500).json({
			error: true,
			message: err?.message
		});

		// RENAMING TO GIVEN NAME
		fs.rename(files.file.filepath, form.uploadDir + "/" + fields.name, (err) => {
			// FILE RENAME ERROR 
			if (err) return res.status(500).json({
				error: true,
				message: err?.message
			});

			return res
				.status(200)
				.json({
					file: files.file,
					filename: fields.name,
					message: 'File has been uploaded',
				});
		});
	});
}

const handler = (req, res) => {
	switch (req.method) {
		case 'POST': return upload(req, res);
		default: return res.status(404).json({
			error: true,
			message: 'Method Not Allowed'
		})
	}
}

export default handler