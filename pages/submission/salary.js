import { Fragment } from 'react';

import Head from 'next/head';
import FormSection from '../../components/SubmissionPage/Form/Salary';

const SubmissionSalary = () => {
	return (
		<Fragment>
			<Head>
				<title>Share About Your Job Compensation | Payranked</title>
				<meta name="description" content="Share information about your job, salary, and compensation such as stocks and bonuses." />
				<meta name="keywords" content="submission, survey, contribute, salary, job, pay, stocks, RSUs, bonuses" />
				<link rel="canonical" href="https://www.payranked.com/submission/salary" />
			</Head>
			<FormSection />
		</Fragment>
	);
}

export default SubmissionSalary;