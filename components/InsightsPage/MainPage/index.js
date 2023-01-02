import Image from 'next/image';
import { useState, useEffect } from 'react';

import {
    MainContainer,
    TopContainer,
    TopWrapper,
    MainHeader,
    
    BottomContainer,
    ContentWrapper,
    SubHeader,
    ContentText,
    
    CareerContainer,
    CareerWrapper,
    CareerText,
    CareerTextHeader,
    CareerSubText,
    CareerJobs,
    CareerImageWrapper,
    CareerImage,
    JobsIndividualLink,
    JobsIndividual,
    
} from './InsightsElements';

import { JobsNameToURL } from '../data';
import { jobsListTechnology } from '../SearchSection/data';
import OwlImg from '../../../public/images/Animals/owl.png';

function InsightsMainSection() {
    
    const [jobsMapTechnology, setJobsMapTechnology] = useState({});
    
    useEffect(() => {
        let jobsMapTechnology = {};
        let jobsURL = '';

        for (const jobs of jobsListTechnology) {
            jobsURL = JobsNameToURL[jobs]
            if (typeof jobsURL === 'undefined') {
                jobsURL = jobs.toLowerCase();
                jobsURL = jobsURL.replaceAll(" ", "-")
            }
            
            jobsMapTechnology[jobs] = jobsURL;
        }
        setJobsMapTechnology(jobsMapTechnology);
        console.log(jobsMapTechnology);
    }, [])
    
    return (
        <MainContainer>
            <TopContainer>
                <TopWrapper>
                    <MainHeader>Career Insights</MainHeader>
                    
                    <CareerContainer>
                        <CareerWrapper>
                            <CareerText>
                                <CareerTextHeader>Software Roles</CareerTextHeader>
                                <CareerSubText>Software roles are in charge of designing, developing, and maintaining computer software.</CareerSubText>
                                <CareerJobs>
                                    {Object.entries(jobsMapTechnology).map(([key, value]) =>
                                        <JobsIndividualLink key={key} href={`./career-insights/${value}`}>
                                            <JobsIndividual>
                                              {key}
                                            </JobsIndividual>
                                        </JobsIndividualLink>
                                     )}
                                </CareerJobs>
                            </CareerText>
                            <CareerImageWrapper>
                                <CareerImage>
                                    <Image
                                        src={OwlImg}
                                        alt='Image of an owl'
                                        layout="responsive"
                                />
                                </CareerImage>
                            </CareerImageWrapper>
                        </CareerWrapper>
                    </CareerContainer>

                </TopWrapper>
                
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

            </BottomContainer>
        </MainContainer>
    )
};

export default InsightsMainSection;