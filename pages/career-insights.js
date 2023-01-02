import { Fragment } from 'react';

import Head from 'next/head';
import InsightsMainSection from '../components/InsightsPage/MainPage';

const Insights = () => {
	return (
		<Fragment>
			<Head>
				<title>Career Insights | Payranked</title>
				<meta name="description" content="" />
				<meta name="keywords" content="" />
				<link rel="canonical" href="https://www.payranked.com/career-insights" />
			</Head>
			<InsightsMainSection />
		</Fragment>
	);
}

export default Insights;
