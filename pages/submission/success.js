import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

import Head from 'next/head';
import FormSuccessSection from '../../components/SubmissionPage/FormSuccess';

const FormSuccess = () => {
	const router = useRouter();

	useEffect(() => {
		const timeout = setTimeout(() => {
			router.back();
		}, [1000])

		return () => {
			clearTimeout(timeout);
		}
	}, [router])

	return (
		<Fragment>
			<Head>
				<title>Form Submitted Successfully | Payranked</title>
				<meta name="keywords" content="form, submission, successful" />
				<link rel="canonical" href="https://www.payranked.com/submission/success" />
				<meta name="description" content="Thank you for your submission! Your submission will greatly help us in our goal for company transparency." />
			</Head>
			<FormSuccessSection />
		</Fragment>
	);
}

export default FormSuccess;
