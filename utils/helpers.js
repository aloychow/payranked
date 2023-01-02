export const slugify = (text) => {
	return text.toString().toLowerCase()
		.replace(/\s+/g, '-')           // Replace spaces with -
		.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
		.replace(/\-\-+/g, '-')         // Replace multiple - with single -
		.replace(/^-+/, '')             // Trim - from start of text
		.replace(/-+$/, '');            // Trim - from end of text
}

export const getStatic = (path = 'no-img.jpg') => {
	return `/images/${path}`
}

export const getUpload = fileName => {
	if (!fileName) return getStatic()
	return `/images/uploads/${fileName}`
}