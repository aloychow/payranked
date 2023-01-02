import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    SearchWrapper,
    SearchRowTop,
} from '../SearchSection/SearchElements';

import {
    MainContainer,
    TopContainer,
    TopWrapper,
    HeaderWrapper,
    HeaderTextWrapper,
    ImageWrapper,
    SubWrapper,
    SliderWrapper,
    SliderWrapper2,
    BottomContainer,
    ContentWrapper,
    ContentImage,
    JobsWrapper,
    MainHeader,
    SubHeaderSmall,
    SubHeader,
    SubHeaderText,
    TextSpan,
    TextColor1,
    TextColor2,
    TextColor3,
    TextColor4,
    SubText,
    ContentText,
    HeaderLogo,
    JobsAllWrapper,
    JobsIndividualLink,
    JobsIndividual,
} from './JobsElements';

import { JobsNameToURL } from '../data';
import { JobsCardFull } from './JobsCard';
import { jobsList } from '../SearchSection/data';
import { JobsDropdown } from '../SearchSection/SearchFields';

// import ITImg from '../../../public/images/Miscellaneous/it.png';
import FinanceImg from '../../../public/images/Miscellaneous/finance.png';
import EngineeringImg from '../../../public/images/Miscellaneous/engineering.png';

import ITImg from '../../../public/images/Miscellaneous/it.png';
import BusinessImg from '../../../public/images/Miscellaneous/business.png';
import EngineerImg from '../../../public/images/Miscellaneous/engineer.png';

import OwlImg from '../../../public/images/Animals/owl.png';
import SquirrelImg from '../../../public/images/Animals/squirrel.png';
import SnakeImg from '../../../public/images/Animals/snake.png';
import BearImg from '../../../public/images/Animals/bear.png';
import CrocodileImg from '../../../public/images/Animals/crocodile.png';
import CatImg from '../../../public/images/Animals/cat.png';
import WhaleImg from '../../../public/images/Animals/whale.png';
import LionImg from '../../../public/images/Animals/lion.png';
import MonkeyImg from '../../../public/images/Animals/monkey.png';

import JobsImg from '../../../public/images/Miscellaneous/jobs-collection.png';

function JobsMainSection() {

    // Dynamic slider display based on media screen size
    const [jobsMap, setJobsMap] = useState({});
    const [matches768, setMatches768] = useState(false);
    const [matches1200, setMatches1200] = useState(false);
    
    // Create Routes (uncomment and copy from console for routes)
    // useEffect(() => {
    //     function createRoutes() {
    //         var routes = [];
    //         {Object.entries(jobsMap).map(([key, value]) => { 
    //             routes.push('<url>' +
    //                             '<loc>https://www.payranked.com/jobs/' + `${value}` + 
    //                             '</loc>' +
    //                             '<changefreq>daily</changefreq>' +
    //                             '<priority>0.8</priority>' +
    //                             '<xhtml:link rel="alternate" hreflang="en" ' +
    //                             'href="https://www.payranked.com/jobs/' + `${value}` + '"/>' +
    //                             '</url>') }
    //         )}
    //         return routes;
    //     }
    //     let routesList = createRoutes();
    //     console.log(routesList.join("\n"));
    // }, [jobsMap]);

    useEffect(() => {
        const minWidth768 = window.matchMedia("(min-width: 768px)")
        const minWidth1200 = window.matchMedia("(min-width: 1200px)")

        setMatches768(minWidth768.matches)
        setMatches1200(minWidth1200.matches)

        minWidth768.addEventListener("change", (e) => setMatches768(e.matches));
        minWidth1200.addEventListener("change", (e) => setMatches1200(e.matches));
    }, []);

    // Used to navigate on dropdown change
    const router = useRouter();

    let jobsDropdown = "";
    const createHandleChange = (name) => {
        return (value) => {
            try {
                switch (name) {
                    case "jobs":
                        jobsDropdown = value;

                        if (jobsDropdown !== "") {

                            // For unique names
                            let jobsDropdownURL = JobsNameToURL[jobsDropdown];

                            // For normal names
                            if (typeof jobsDropdownURL === 'undefined') {
                                jobsDropdownURL = jobsDropdown.toLowerCase();
                                jobsDropdownURL = jobsDropdownURL.replace(" ", "-")
                            }

                            router.push({
                                pathname: `jobs/${jobsDropdownURL}`,
                                state: {
                                    response: ''
                                }
                            });
                        }
                        break;
                    default:
                        break;
                }
            } catch { // Issue when reading empty label (e.g. null entry)
                switch (name) {
                    case "jobs":
                        break;
                    default:
                        break;
                }
            }

        };
    }

    const settings = useMemo(() => {
        const slidesCount = matches1200 ? 3 : matches768 ? 2 : 1
        return {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: slidesCount,
            slidesToScroll: slidesCount,
            arrows: false,
            lazyLoad: true,
        }
    }, [matches1200, matches768])

    useEffect(() => {
        let jobsMap = {};
        let jobsURL = '';

        for (const jobs of jobsList) {
            jobsURL = JobsNameToURL[jobs]
            if (typeof jobsURL === 'undefined') {
                jobsURL = jobs.toLowerCase();
                jobsURL = jobsURL.replaceAll(" ", "-")
            }
            
            jobsMap[jobs] = jobsURL;
        }
        setJobsMap(jobsMap);
        console.log(jobsMap);
    }, [])

    return (
        <MainContainer>
            <TopContainer>
                <TopWrapper>
                    <MainHeader>Explore Jobs</MainHeader>

                    <SearchWrapper style={{ padding: "0" }}>
                        <SearchRowTop>
                            <JobsDropdown
                                // value={jobs}
                                handleChange={createHandleChange("jobs")}
                            />
                        </SearchRowTop>
                    </SearchWrapper>
                </TopWrapper>
                
                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Check Out Top</SubHeaderSmall>
                        <SubHeader>
                            <TextColor1>Information Technology </TextColor1>
                            <TextSpan>Jobs That Are Highly Demanded</TextSpan>
                        </SubHeader>
                        <SubHeaderText>With technology revolutionising the world, it is of no surprise that the demand for tech jobs across all fields have surged. From product managers to software engineers, check out some highly demanded tech jobs now.</SubHeaderText>
                    </HeaderTextWrapper>
                        
                    <ImageWrapper>
                        <Image
                            src={ITImg}
                            alt="Vector illustration of people building a website"
                            layout="responsive"
                            priority
                        />
                    </ImageWrapper>
                </HeaderWrapper>

                <SliderWrapper>
                    <SliderWrapper2>
                        <Slider {...settings}>

                            <JobsCardFull
                                logo={OwlImg}
                                job='Software Engineer'
                                rating={3.9}
                                about='Software engineers create, design, develop and test software applications. Some also engage in consultations with clients, product managers, and other stakeholders.'
                                salaries={494}
                                reviews={20}
                                url='software-engineer'
                            />

                            <JobsCardFull
                                logo={SquirrelImg}
                                job='Product Manager'
                                rating={4.3}
                                about='A product manager identifies customer and business needs in order to develop company products. They work closely with both the business and engineering teams.'
                                salaries={26}
                                reviews={0}
                                url='product-manager'
                            />

                            <JobsCardFull
                                logo={SnakeImg}
                                job='UI/UX Designer'
                                rating={3.8}
                                about='User Interface (UI) and User Experience (UX) designers help collect user requirements, design graphic interfaces, and collaborate with product managers and engineers to bring these illustrations to life.'
                                salaries={53}
                                reviews={0}
                                url='ui-ux-designer'
                            />

                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>
                
                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Discover Exclusive</SubHeaderSmall>
                        <SubHeader>
                            <TextColor3>Business & Finance </TextColor3>
                            <TextSpan>Jobs Across The Board</TextSpan>
                        </SubHeader>
                        
                        <SubHeaderText>An indispensible aspect of society, business and finance jobs are prevalent in all sectors. Friendly human resources associates, charismatic salesmen, and hardworking investment bankers - the business job market is limitless.</SubHeaderText>
                    </HeaderTextWrapper>

                    <ImageWrapper>
                        <Image
                            src={BusinessImg}
                            alt="People analysing charts and graphs"
                            layout="responsive"
                        />
                    </ImageWrapper>
                </HeaderWrapper>

                <SliderWrapper>
                    <SliderWrapper2>
                        <Slider {...settings}>

                            <JobsCardFull
                                logo={BearImg}
                                job='Business Development'
                                rating={4.4}
                                about="Business development associates and managers are in charge of conceptualising ideas and initiatives, liaising across teams, to drive a business' growth."
                                salaries={2}
                                reviews={0}
                                url='business-development'
                            />

                            <JobsCardFull
                                logo={CrocodileImg}
                                job='Banking & Finance'
                                rating={3.9}
                                about='Banking and finance individuals span across investment banking, financial analysts, wealth management, and many more. These roles typically operate in banks and hedge funds, but can also appear in smaller boutique firms.'
                                salaries={0}
                                reviews={0}
                                url='finance'
                            />

                            <JobsCardFull
                                logo={CatImg}
                                job='Accountancy'
                                rating={4.3}
                                about='Accountants are in charge of managing and reporting accurate financial information in an organisation. They are also in charge of evaluating financial operations to ensure best practices and strategies for the firm.'
                                salaries={0}
                                reviews={0}
                                url='accountant'
                            />

                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>

                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Uncover Indispensible</SubHeaderSmall>
                        <SubHeader>
                            <TextColor2>Engineering Jobs </TextColor2>
                            <TextSpan>That All Companies Need</TextSpan>
                        </SubHeader>
                        
                        <SubHeaderText>From maintaining our public transportation to developing new processes and medicines that advances humanity, engineers are responsible for many things we see today. Check out exclusive information about the engineers that shape society.</SubHeaderText>
                    </HeaderTextWrapper>
                    
                    <ImageWrapper>
                        <Image
                            src={EngineerImg}
                            alt="Three engineers looking at the blueprint of a building"
                            layout="responsive"
                        />
                    </ImageWrapper>
                </HeaderWrapper>

                <SliderWrapper>
                    <SliderWrapper2>
                        <Slider {...settings}>

                            <JobsCardFull
                                logo={WhaleImg}
                                job='Process Engineer'
                                rating={0}
                                about="Process engineers oversee the design and production of a facility's processes, and are in charge of optimising and developing industrial processes."
                                salaries={0}
                                reviews={0}
                                url='process-engineer'
                            />

                            <JobsCardFull
                                logo={LionImg}
                                job='Chemical Engineer'
                                rating={0}
                                about='Chemical engieers perform chemical analysis as well as property testing of various materials. They are also in charge of designing and developing industrial chemical processes.'
                                salaries={0}
                                reviews={0}
                                url='chemical-engineer'
                            />

                            <JobsCardFull
                                logo={MonkeyImg}
                                job='Mechanical Engineer'
                                rating={0}
                                about="Mechanical engineers' responsibilities include analysing, designing, and manufacturing mechanical and thermal devices, ranging from semiconductors to NASA space probes."
                                salaries={0}
                                reviews={0}
                                url='mechanical-engineer'
                            />

                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>
            </TopContainer>

            <BottomContainer>
                <ContentWrapper>
                    <SubHeader style={{ textAlign: 'center' }}>
                        About Our Jobs
                    </SubHeader>
                    <ContentText>
                        Payranked is the leading job transparency-offering website with hundreds of different jobs - 
                        ranging from tech jobs to educational jobs. We have consistently helped new and experienced 
                        job seekers alike in discovering their potential and reaching their professional goals through
                        exclusive insights such as salary and welfare benefits not found elsewhere. We have a expansive 
                        database containing all sorts of jobs - information technology, engineering, 
                        business, and many more. Get exclusive insights to some of the most popular jobs and know your worth.
                    </ContentText>
                </ContentWrapper>
                <ContentImage>
                    <Image
                        src={JobsImg}
                        alt="Illustration of people with different jobs"
                        layout="responsive"
                    />
                </ContentImage>
            </BottomContainer>


            <JobsWrapper>
                <SubHeader style={{ paddingBottom: '1.5rem', textAlign: "center" }}>All Jobs</SubHeader>
                <JobsAllWrapper>
                    {Object.entries(jobsMap).map(([key, value]) =>
                        <JobsIndividualLink key={key} href={`./jobs/${value}`}>
                            <JobsIndividual>
                                {key}
                            </JobsIndividual>
                        </JobsIndividualLink>
                    )}
                </JobsAllWrapper>
            </JobsWrapper>
        </MainContainer>

    )
}

export default JobsMainSection;