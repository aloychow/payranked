import styled from 'styled-components';
import { Button } from '@mui/material';

export const HomeContainer = styled.div`
    color: #000;
    background: #F4F9FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width:480px) {
        padding: 0 1.5rem 1.5rem 1.5rem;
    }

`;

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;
    height: auto;
    margin: 3rem 5rem 2rem 5rem;
    
    @media screen and (max-width:1200px) {
        margin: 5rem 5rem 2rem 5rem;
    }
    
    @media screen and (max-width:1000px) {
        margin: 8rem 4rem 2rem 4rem;
    }
    
    @media screen and (max-width:700px) {
        margin: 6rem 2rem 2rem 2rem;
    }
    
    @media screen and (max-width:480px) {
        margin: 6rem 0 0 0;
    }
`;

export const HomeGridWrapper = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: 1fr 1fr;
    margin: 0 1rem;
    gap: 3rem;
    padding-bottom: 2rem;
    height: auto;
    width: 100%;
    max-width: 75rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 0;
    }
    
    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

export const HomeItem = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: left;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        padding: 1rem 1rem 0 1rem;
    }
    
    @media screen and (max-width: 768px) {
        padding: 1rem 0 0 0;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 4rem;
    line-height: 5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: left;

    @media screen and (max-width: 1200px) {
        font-size: 3.5rem;
        line-height: 4.5rem;
    }

    @media screen and (max-width:768px) {
        font-size: 3rem;
        line-height: 4rem;
    }

    @media screen and (max-width:480px) {
        font-size: 2.75rem;
        line-height: 3.5rem;
        width: 90%;
    }
`;

export const HeaderTitleSpan = styled.span`
`;

export const HeaderTitleColor1 = styled.span`
    background-image: linear-gradient(to right, #00b4db, #0083b0);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const HeaderTitleColor2 = styled.span`
    background-image: linear-gradient(to right, #8e2de2, #4a00e0);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`;

export const StyledTypist = styled.div`
    color: #18191A;
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 75rem;
    text-align: left;
    // font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.125rem;
    }
`;

export const HorizontalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;
    
    @media screen and (max-width:700px) {
        flex-direction: column;
    }
`;

export const LinkStyled = styled.div`
    width: 100%;
    margin: 0 1rem;
    cursor: pointer;
    
    @media screen and (max-width:700px) {
        margin: 0;
    }
`;

export const JobsButton = styled(Button)`
    && {
        color: #0B1930;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        width: 100%;
        padding: 0.5rem 1rem;
        border: 2px solid #0B1930;
        border-radius: 2rem;
        
        &:hover {
            transition: 0.3s ease-out;
        }
        
        @media screen and (max-width:700px) {
            margin-bottom: 1rem;
        }
    }
`;

export const CompaniesButton = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #0B1930;
        width: 100%;
        padding: 0.5rem 1rem;
        border: 2px solid #0B1930;
        border-radius: 2rem;

        &:hover {
            background: #0B1930;
        }
    }
`;

export const LandingImage = styled.div`
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
    
    @media screen and (max-width:480px) {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }
`;