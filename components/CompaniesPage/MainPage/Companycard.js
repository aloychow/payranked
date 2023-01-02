import Image from 'next/image';

import {
    CompanyCardLink,
    CompanyCardWrapper,
    CompanyCard,
    CompanyTopWrapper,
    CompanyTopWrapper2,
    CompanyLogo,
    CompanyName,
    CompanyAbout,
    CompanySubmissions,
} from './CompanyElements';

export const CompanyCardFull = (props) => {
    
    const path = './companies/' + props.url
    return (
    <CompanyCardLink href={path}>
        <CompanyCardWrapper>
            <CompanyCard>
                <CompanyTopWrapper>
                    <CompanyLogo>
                        <Image
                            src={props.logo}
                            alt={`${props.company} Logo`}
                            layout="responsive"
                        />
                    </CompanyLogo>
                    <CompanyTopWrapper2>
                        <CompanyName>{props.company}</CompanyName>
                        <CompanySubmissions>{props.rating}★</CompanySubmissions>
                    </CompanyTopWrapper2>
                </CompanyTopWrapper>
                <CompanyAbout>{props.about}</CompanyAbout>
                <CompanySubmissions style={{marginLeft: "0.5rem"}}>{props.salaries} Salaries · {props.reviews} Reviews</CompanySubmissions>
            </CompanyCard>
        </CompanyCardWrapper>
    </CompanyCardLink>
    )
}