import { Fragment } from 'react';

import Head from 'next/head';
import FormSection from '../../components/SubmissionPage/Form/Experience';

const SubmissionExperience = () => {
	return (
		<Fragment>
			<Head>
				<title>Share About Your Job Experience | Payranked</title>
				<meta name="description" content="Share about qualitative aspects regarding your job, as well as the good and bad about the company." />
				<meta name="keywords" content="submission, survey, contribute, job, pay, benefits, qualitative, good, bad, experience" />
				<link rel="canonical" href="https://www.payranked.com/submission/experience" />
			</Head>
			<FormSection />
		</Fragment>
	);
}

export default SubmissionExperience;