import Head from 'next/head';
import { Fragment } from 'react';

import FourOhFourSection from '../components/FourOhFourPage';

const FourOhFour = () => {
    return (
		<Fragment>
			<Head>
				<title>404 Page not found | Payranked</title>
				<meta name="description" content="Payranked uses a combination of qualitative and quantitative metrics like salary, work-life balance, and many more to help job seekers find their dream job." />
				<meta name="keywords" content="Frequently asked questions, faq, faqs, questions, answers, help" />
				<link rel="canonical" href="https://www.payranked.com/faq" />
			</Head>
			<FourOhFourSection />
		</Fragment>
	);
}

export default FourOhFour;