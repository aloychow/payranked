import { Fragment } from 'react';

import Head from 'next/head';
import CreatePageSection from '../../../components/BlogPage/CreatePage';

const CreateBlogPost = () => {
	return (
		<Fragment>
			<Head>
				<title>Write an Article | Payranked</title>
				<meta name="description" content="Write an article for the Payranked blog here." />
				<meta name="keywords" content="article, blog, write, writing, new" />
				<link rel="canonical" href="https://www.payranked.com/blog/admin/create" />
			</Head>
			<CreatePageSection />
		</Fragment>
	);
}

export default CreateBlogPost;
