import Head from 'next/head';
import ProfileSection from '../components/Profile';

import { Fragment } from 'react';

const Profile = () => {
	return (
		<Fragment>
			<Head>
				<title>My Profile | Payranked</title>
				<meta name="description" content="This is your profile page. Set your personal preferences here." />
				<meta name="keywords" content="profile, about, email, password, username, settings" />
				<link rel="canonical" href="https://www.payranked.com/profile" />
			</Head>
			<ProfileSection />
		</Fragment>
	);
}

export default Profile;