import styled from  "styled-components";
import Link from "next/link";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 5rem 0;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    width: 100%;
    max-width: 75rem;

    @media screen and (max-width: 480px) {
        padding: 0 0.5rem;
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #F4F9FF;
    padding: 1rem 2rem;
    justify-content: left;
    align-items: left;
`;

export const HeaderWrapper = styled.div`
    display: grid;
    width: 100%;
    height: auto;
    padding: 2rem 2rem 1rem 2rem;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 0 0rem;

    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const HeaderTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: left;
    transition: all 0.5s ease-in-out;
    
    @media screen and (max-width: 768px) {
        padding: 1rem 0 0 0;
    }
`;

export const SubWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    padding: 2rem 2rem 2rem 3rem;
    overflow: hidden;
    background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    
    @media screen and (max-width: 768px) {
        padding: 1rem 2rem 1rem 2rem;
    }
    
    @media screen and (max-width: 480px) {
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: auto;
    max-width: 35rem;
    margin-left: auto;
    margin-right: auto;
    
    @media screen and (max-width:1000px) {
        margin-top: 2rem;
    }
    
    @media screen and (max-width:768px) {
        margin-top: 0rem;
    }
`;

export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75rem;
    background: #F4F9FF;
    padding: 1rem;
    margin: 0.5rem 0 0.5rem 1.5rem;
    justify-content: left;
    align-items: left;
    
    @media screen and (max-width: 1200px) {
        padding-left: 2rem;
        margin: 0;
    }
    
    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

export const SliderWrapper2 = styled.div`
    width: 100%;
    margin: 0 0.25rem 1rem 0.25rem;
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 2rem;
    background: #BDD7E0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    padding: 1rem 2rem;
    margin: 1rem;
    justify-content: center;
    align-items: center;
`;

export const CompaniesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    padding: 1rem;
    margin: 0 1.5rem;
    align-items: center;
`;

export const MainHeader = styled.h1`
    font-size: 3rem;
    color: #000;
    line-height: 4rem;
    padding: 0rem 1rem 2rem 1rem;
    text-align: center;
    transition: all 0.5s ease-in-out;
    width: 100%;
    max-width: 75rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
        padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SubHeaderSmall = styled.p`
    font-size: 1.5rem;
    color: #FD5723;
    font-weight: 600;
`;

export const SubHeader = styled.h2`
    font-size: 3rem;
    color: #000;
    line-height: 4rem;
    padding: 0.5rem 0 00.5rem 0;
    transition: all 0.5s ease-in-out;
    width: 100%;
    max-width: 75rem;
    font-weight: 600;
    
    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const SubHeaderText = styled.p`
    font-size: 1.125rem;
    line-height: 2rem;
    color: #425466;
    text-align: left;
`;

export const TextSpan = styled.span`
`;

export const TextColor1 = styled.span`
    background-image: linear-gradient(to right, #00b4db, #0083b0);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const TextColor2 = styled.span`
    background-image: linear-gradient(to right, #F53D5C, #F48799);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const TextColor3 = styled.span`
    background-image: linear-gradient(to right, #5E44FF, #5E44FF);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const TextColor4 = styled.span`
    background-image: linear-gradient(to right, #0DBCA5, #0DBCA5);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;


export const SubText = styled.p`
    color: #000;
    font-size: 1.25rem;
    line-height: 1.5rem;
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.25rem;
    z-index: 1;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ContentText = styled.p`
    color: #425466;
    font-size: 1.125rem;
    line-height: 2rem;   
    padding-top: 1rem;
    text-align: center;
`;

export const ContentImage = styled.div`
    max-width: 75rem;
    width: 100%;
    height: auto;
`;

export const HeaderLogo = styled.div`
    position: absolute;
    height: 10rem;
    width: 10rem;
    top: 20%;
    right: 2%;
    z-index: 0;

    @media screen and (max-width: 480px) {
        height: 6rem;
        width: 6rem;
        top: 30%;
    }
`;

export const CompanyCardLink = styled(Link)`
    text-decoration: none;  
`;

export const CompanyCardWrapper = styled.div`
    width: 100%;
    padding: 0rem 2rem 1rem 0;
    
    transition: all 0.3s ease-in-out;
    
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
    }
    
    @media screen and (max-width: 480px) {
        padding: 0.5rem 2rem;
    }
`;

export const CompanyCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    height: auto;
    padding: 1rem 1rem;
    border-radius: 1rem;
`;

export const CompanyTopWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
`;

export const CompanyTopWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
`;

export const CompanyLogo = styled.div`
    height: 2.75rem;
    width: 2.75rem;
`;

export const CompanyName = styled.div`
    font-weight: 700;
    color: #000;
    font-size: 1.125rem;
    line-height: 1.5rem;
`;

export const CompanyAbout = styled.p`
    font-size: 0.875rem;
    color: #404040;
    line-height: 1.375rem;
    margin: 0.75rem 0.5rem 0.5rem 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

export const CompanySubmissions = styled.p`
    color: #425466;
    font-size: 0.9375rem;
`;

export const CompanyAllWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;
    align-items: center
`;

export const CompanyIndividualLink = styled(Link)`
    text-decoration: none;  
`;

export const CompanyIndividual = styled.div`
    color: #2030DF;
    font-weight: 600;
    margin: 0.5rem;
    padding: 0.75rem;
    background: #CEE0FA;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.375rem;
        margin: 0.25rem;
    }
`;