import { Fragment } from 'react';

import Head from 'next/head';
import SalariesMainSection from '../components/SalariesPage/MainPage';

const SalariesPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Explore Top Salaries in Singapore | Payranked</title>
				<meta name="description" content="Explore salaries from top paying companies and job roles across a variety of sectors. Make sure to never get underpaid ever again!" />
				<meta name="keywords" content="Salaries, companies, jobs, salary insights, salaries singapore, company salaries, job salaries" />
				<link rel="canonical" href="https://www.payranked.com/salaries" />
			</Head>
			<SalariesMainSection />
		</Fragment>
	);
}

export default SalariesPage;