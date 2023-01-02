import { Fragment } from 'react'

import Head from 'next/head';
import FormSection from '../../components/SubmissionPage/Form/Full';

const SubmissionFull = () => {
	return (
		<Fragment>
			<Head>
				<title>Contribute Job Information | Payranked</title>
				<meta name="description" content="Share quantitative and qualitative information about both your compensation and experience at your job." />
				<meta name="keywords" content="submission, survey, contribute, salary, compensation, job, pay, benefits, good, bad, experience" />
				<link rel="canonical" href="https://www.payranked.com/submission/full" />
			</Head>
			<FormSection />
		</Fragment>
	);
}

export default SubmissionFull;
