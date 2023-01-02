import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import Link from "next/link";

export const LinkStyled = styled(Link)`
    text-decoration: none;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 6rem 0;
    }
`;

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 30rem;
    background: #fff;
    padding: 2rem;
    // border: 1px solid grey;
    border-radius: 1rem;

    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 1rem;
    }
`;

export const RegisterHeader = styled.h1`
    text-size: 2rem;
    text-align: center;
`;

export const RegisterSubHeader = styled.div`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-left: 0.3rem;
`;

export const RegisterText = styled.div`
    font-size: 1.125rem;
    line-height: 1.625rem;
    padding: 1rem 0;
`;

export const InvitationCodeInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;
    font-size: 1rem;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const EmailInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const UsernameInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const PasswordInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const RegisterButton = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    cursor: pointer;

    font-size: 1rem;

    && {
        margin-top: 1.5rem;
        text-transform: capitalize;
        color: #fff;
        background: #70A7B0;
        width: 100%;

        &:hover {
            // color: #79B1BB;
            background: #486d73;
            // transition: 0.3s ease-out;
        }
    }
`;

export const BackButton = styled(Button)`
    && {
        margin-top: 0.5rem;
        text-transform: capitalize;
        color: #70A7B0;
        border: 1px solid #70A7B0;
        width: 100%;

        &:hover {
            // color: #79B1BB;
            // background: white;
            transition: 0.3s ease-out;
        }
    }
`;

export const ErrorMessageStyled = styled.div`
    color: red;
    font-size: 0.9rem;
    padding-left: 0.2rem;
`;
