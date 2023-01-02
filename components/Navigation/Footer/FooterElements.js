import styled from 'styled-components';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { FaMagento } from 'react-icons/fa';

// Styled MUI Components
export const ButtonStyled = styled(Button)`
    && {
        color: #fff;
        background: #79B1BB;
        text-transform: capitalize;
        width: 100%;

        &:hover {
            // color: #79B1BB;
            background: #467780;
            transition: 0.3s ease-out;
        }
    }
`;

export const FooterContainer = styled.div`
    background-color: #314e73;
    padding: 1rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

`;

export const SubscribeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 0rem;
    width: 100%;
    // background: #434C5F;
`;

export const SubscribeGrid = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: auto;
    width: 100%;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    padding: 2rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SubscribeGrid1 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const SubscribeGrid2 = styled.div`
    display: flex;
    flex-direction: column;
   text-align: center;
`;

export const SubscribeHeader = styled.div`
    color: #fff;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    line-height: 3rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.7rem;
    }
`;

export const SubscribeSubHeading = styled.div`
    color: #ECEFF4;
    margin-bottom: 0.2rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
`;

export const SubscribeSubText = styled.div`
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.5rem;
    color: #D8DEE9;
    margin-bottom: 1.5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column
        width: 80%;
    }
`;

export const FormInput = styled.input`
    type="email";
    width: 100%;
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.8rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;
    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    &::placeholder{
        color: #9e9e9e;
        text-align: center;
    }

    &:invalid {
        border: 1px solid red;
      }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const FooterLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding-top: 1rem;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: grid;
    justify-content: center;
    align-items: start;
    max-width: 1000px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    width: 10rem;
    // box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0.7rem;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.div`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const FooterLink = styled.div`
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    &:hover {
        color: #5BC9D7;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 420px) {
        text-align: center;
    }
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    max-width: 75rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SocialMediaLogo = styled.div`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-left: 1.25rem;

    @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
     }
`;

export const SocialMediaIcon = styled(FaMagento)`
     margin-left: 1.25rem;

     @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
     }
`;

export const SocialMediaIcons = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 30%;
     max-width: 15rem;

     @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
     }
`;

export const SocialMediaIconLink = styled.a`
     color: #fff;
     font-size: 1.5rem;
`;


export const WebsiteRights = styled.div`
     color: #fff;
     font-size: 1rem;
     margin-bottom: 0.5rem;
     font-family: "Helvetica Neue", "Helvetica", sans-serif;

     @media screen and (max-width: 768px) {
        margin: 0.5rem 0;
     }
`;