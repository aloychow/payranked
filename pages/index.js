import { Fragment } from 'react';

import Head from 'next/head'
import HomeSection from '../components/MainPage/HomeSection';
import WhyUsSection from '../components/MainPage/WhyUsSection';
import FrameworkSection from '../components/MainPage/FrameworkSection';
import LogoSection from '../components/MainPage/LogoSection';


const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Payranked | Empowering the community to find their dream job</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Payranked uses a combination of qualitative and quantitative metrics like salary, work-life balance, and many more to help job seekers find their dream job." />
        <meta name="keywords" content="Job information, career information, pay transparency, job transparency, career insights, tech jobs, engineering jobs" />
        <link rel="canonical" href="https://www.payranked.com" />
      </Head>
      <HomeSection />
      <WhyUsSection />
      <FrameworkSection />
      <LogoSection />
    </Fragment>
  )
}

export default Home;
