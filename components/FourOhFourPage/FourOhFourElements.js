import styled from  "styled-components";
import { Button } from '@mui/material';
import Link from "next/link";

export const FourOhFourContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 1.5rem;
    width: 100%;
    height: auto;
    background: #F4F9FF;
    
    @media screen and (max-width: 480px) {
        padding: 9rem 1.5rem 6rem 1.5rem;
    }
`;

export const FourOhFourWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 7rem 2rem;
    max-width: 70rem;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        padding: 3rem 1.5rem;
    }
    
    @media screen and (max-width: 480px) {
        padding: 1rem 1rem;
    }
`;

export const FourOhFourImage = styled.div`
    width: 100%;
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
`;

export const Header = styled.h1`
    font-size: 4rem;
    line-height: 6rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 1200px) {
        font-size: 3.5rem;
        line-height: 4.5rem;
    }

    @media screen and (max-width:768px) {
        font-size: 3rem;
        line-height: 4.5rem;
        margin-bottom: 1rem;
    }

    @media screen and (max-width:480px) {
        font-size: 2.25rem;
        line-height: 3rem;
        margin-bottom: 0.5rem;
    }
`;

export const SubHeader = styled.h2`
    color: #3B4252;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    max-width: 75rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
    }
`;

export const LinkStyled = styled.div`
    width: auto;
    margin: 3rem 0 0 0;
    cursor: pointer;
    
    @media screen and (max-width: 768px) {
        margin: 2.5rem 0 0 0;
    }
`;

export const HomeButton = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #0B1930;
        width: auto;
        padding: 0.5rem 1rem;
        border: 2px solid #0B1930;
        border-radius: 2rem;
        text-align: center;

        &:hover {
            background: #0B1930;
        }
    }
`;