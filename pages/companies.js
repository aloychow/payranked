import Head from 'next/head';
import CompaniesMainSection from '../components/CompaniesPage/MainPage';

import { Fragment } from 'react';

const CompaniesMain = () => {
	return (
		<Fragment>
			<Head>
				<title>Explore and find your Dream Company | Payranked</title>
				<meta name="description" content="Explore and find your dream company today! With comprehensive insights such as ratings, reviews, and complete salary transparency across hundreds of companies, you can easily compare and gain deeper insights into the job market today." />
				<meta name="keywords" content="Companies, company information, company insights, company ratings, careers, tech companies, engineering companies, consulting companies, healthcare companies" />
				<link rel="canonical" href="https://www.payranked.com/companies" />
			</Head>
			<CompaniesMainSection />
		</Fragment>
	);
}

export default CompaniesMain;