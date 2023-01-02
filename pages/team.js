import { Fragment } from 'react';

import Head from 'next/head';
import TeamPageInner from '../components/TeamPage';

const TeamPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Meet Our Team | Payranked</title>
				<meta name="description" content="Meet the people that made Payranked possible. Our professional team of experts is always available to help. Don't forget to subscribe for the latest updates and information." />
				<meta name="keywords" content="Team, employees, Payranked, meet the team" />
				<link rel="canonical" href="https://www.payranked.com/team" />
			</Head>
			<TeamPageInner />
		</Fragment>
	);
}

export default TeamPage;
