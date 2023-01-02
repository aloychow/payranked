import styled from 'styled-components';
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

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 2rem;
    background: #BDD7E0;
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
        // padding-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
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

// Career Info Styling

export const CareerContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    background: white;
    border-radius: 0.5rem;
`;

export const CareerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 0rem;
    height: 100%;
    width: 100%;
    
    // justify-content: center;
    // align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const CareerText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%; 
    
    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

export const CareerTextHeader = styled.h2`
    font-size: 2rem;
    color: #000;
    line-height: 3rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    transition: all 0.5s ease-in-out;
    width: 100%;
    max-width: 75rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 1.75rem;
        line-height: 2.5rem;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        line-height: 2.5rem;
        padding-bottom: 0.5rem;
    }
`;

export const CareerSubText = styled.p`
    color: #425466;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 0.5rem;
    padding-bottom: 1rem;
    
`;

export const CareerJobs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CareerImageWrapper = styled.div`
    background: #DCF0F0;
    display: flex;
    height: 100%;
    width: 100%;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    
    border-radius: 0 0.5rem 0.5rem 0;
    
    @media screen and (max-width: 768px) {
        height: 20rem;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    
    @media screen and (max-width: 480px) {
        height: 15rem;
    }
`;

export const CareerImage = styled.div`
    background: #DCF0F0;
    height: 10rem;
    width: 10rem;
    
    @media screen and (max-width: 480px) {
        height: 7rem;
        width: 7rem;
    }
`;

export const JobsIndividualLink = styled(Link)`
    text-decoration: none;  
    // width: auto;
    margin:auto;
`;

export const JobsIndividual = styled.div`
    color: #2030DF;
    font-size: 0.8875rem;
    font-weight: 600;
    margin: 0.25rem;
    padding: 0.5rem;
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

// ---------------

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

export const ContentText = styled.p`
    color: #425466;
    font-size: 1.125rem;
    line-height: 2rem;  
    padding-top: 1rem;
    text-align: center;
`;
