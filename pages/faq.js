import Head from 'next/head';
import FAQSection from '../components/FAQPage/FAQSection';

import { Fragment } from 'react';

const FAQ = () => {
	return (
		<Fragment>
			<Head>
				<title>Frequently Asked Questions (FAQ) | Payranked</title>
				<meta name="description" content="Find answers to any questions you may have. View our FAQs page for more information about tech, engineering, and many more jobs offered on Payranked, the leading job and company information site in Singapore" />
				<meta name="keywords" content="Frequently asked questions, faq, faqs, questions, answers, help" />
				<link rel="canonical" href="https://www.payranked.com/faq" />
			</Head>
			<FAQSection />
		</Fragment>
	);
}

export default FAQ;
