import { Fragment } from "react";

import Head from "next/head";
import MainPage from "../components/SubmissionPage/Main";

const SubmissionPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Share Your Job Information | Payranked</title>
				<meta
					name="description"
					content="By submitting information about your job, salary, or experience anonymously, you help to make job transparency possible! All our submissions are anonymous, secure and flexible to your needs."
				/>
				<meta
					name="keywords"
					content="submission, survey, contribute, salary, job, pay, benefits, experience"
				/>
				<link rel="canonical" href="https://www.payranked.com/submission" />
			</Head>
			<MainPage />
		</Fragment>
	);
};

export default SubmissionPage;
