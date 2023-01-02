import { api } from '../utils'
import { useRouter } from 'next/router';
import { useState, useEffect, Fragment } from 'react';
import { BlogLayout } from '../layouts';

import Head from 'next/head';
import BlogPosts from '../components/BlogPage/MainPage/BlogPosts';
import BlogHeaderSection from '../components/BlogPage/MainPage/BlogHeader';

const BlogsPage = () => {

	const router = useRouter()
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await api.get('/posts', {
				params: router.query
			});
			setPosts(response.data.reverse());
		}
		fetchPosts();
	}, [router.query])

	return (
		<Fragment>
			<Head>
				<title>Our Blog | Payranked</title>
				<meta name="description" content="Breaking news and exclusive articles - about jobs, interview, salaries and more. Find anything from tips and tricks to get a job, to informative articles like why work-life balance is important." />
				<meta name="keywords" content="blog, articles, jobs, interviews, salary, tech" />
				<link rel="canonical" href="https://www.payranked.com/blog" />
			</Head>

			<BlogHeaderSection />
			<BlogPosts posts={posts} />
		</Fragment>
	);
}

BlogsPage.getLayout = (page) => {
	return (
		<BlogLayout>
			{page}
		</BlogLayout>
	)
}

export default BlogsPage;