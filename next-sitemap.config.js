/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: process.env.SITE_URL || 'https://www.payranked.com',
	generateRobotsTxt: true,
	additionalSitemaps: [
		"https://www.payranked.com/sitemap.xml"
	],
}

module.exports = config