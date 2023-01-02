import styled from  "styled-components";
import { Button } from '@mui/material';
import Link from "next/link";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 1.5rem;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 6rem 1.5rem;
    }
`;

export const FormMainWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-gap: 1.5rem;
    padding-top: 1rem;
    width: 100%;
    max-width: 70rem;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    padding: 1rem;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const FormWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const FormWrapper3 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    padding: 1rem;
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    max-width: 70rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const FormHeader = styled.h1`
    font-size: 2rem;
    text-align: center;
`;

export const FormH2 = styled.h2`
    background: #CEE0FA;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 0;
    width: 100%;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
`;

export const FormSubHeader = styled.div`
    color: #425466;
    font-size: 1.1rem;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.3rem;
`;

export const FormSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 95%;
`;

export const OptionButton = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #16b59d;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;

        &:hover {
            background: #0c9682;
        }
    }
`;

export const OptionButton2 = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #626EE3;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        &:hover {
            background: #535DC5;
        }
    }
`;

export const OptionButton3 = styled(Button)`
    && {
        color: #70A7B0;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 1px solid #70A7B0;
        &:hover {
            transition: 0.3s ease-out;
        }
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    width: 100%;
`;

export const InfoIcon = styled.a`
     color: #b5b3b3;
     font-size: 1.5rem;
     padding: 0.3125rem 0 0 0.5rem;
     margin: 0.5rem;
     cursor: pointer;
`;

export const ParagraphHeader = styled.h3`
    font-size: 1.25rem;
    line-height: 1.625rem;
    padding: 0.5rem 0 0.125rem 0.75rem;
`;

export const Divider = styled.div`
    height: 3px;
    width: 40%;
    background: linear-gradient(90deg, #D3D3D3, #D3D3D3, white)
`;

export const ParagraphText = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 0.25rem 0.25rem 0.75rem;
`;
