import Image from 'next/image';

import {
    JobsCardLink,
    JobsCardWrapper,
    JobsCard,
    JobsTopWrapper,
    JobsTopWrapper2,
    JobsLogo,
    JobsName,
    JobsAbout,
    JobsSubmissions,
} from './JobsElements';

export const JobsCardFull = (props) => {
    
    const path = './jobs/' + props.url
    return (
    <JobsCardLink href={path}>
        <JobsCardWrapper>
            <JobsCard>
                <JobsTopWrapper>
                    <JobsLogo>
                        <Image
                            src={props.logo}
                            alt={`${props.job} Logo`}
                            layout="responsive"
                        />
                    </JobsLogo>
                    <JobsTopWrapper2>
                        <JobsName>{props.job}</JobsName>
                        <JobsSubmissions>{props.rating}★</JobsSubmissions>
                    </JobsTopWrapper2>
                </JobsTopWrapper>
                <JobsAbout>{props.about}</JobsAbout>
                <JobsSubmissions style={{marginLeft: "0.5rem"}}>{props.salaries} Salaries · {props.reviews} Reviews</JobsSubmissions>
            </JobsCard>
        </JobsCardWrapper>
    </JobsCardLink>
    )
}