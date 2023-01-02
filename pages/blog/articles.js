import { Fragment } from 'react';

import Head from 'next/head';
import BlogGridPage from '../../components/BlogPage/GridPage';

const BlogGrid = () => {
	return (
		<Fragment>
			<Head>
				<title>Our Blog | Payranked</title>
				<meta name="description" content="Breaking news and exclusive articles - about jobs, interview, salaries and more. Find anything from tips and tricks to get a job, to informative articles like why work-life balance is important." />
				<meta name="keywords" content="blog, articles, jobs, interviews, salary, tech" />
				<link rel="canonical" href="https://www.payranked.com/blog/grid" />
			</Head>
			<BlogGridPage />
		</Fragment>
	);
}

export default BlogGrid;