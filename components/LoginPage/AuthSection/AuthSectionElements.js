import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import Link from "next/link";

export const LinkStyled = styled(Link)`
    text-decoration: none;
`;

export const AuthContainer = styled.div`
    display: flex:
    width: 100%;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`;

export const AuthWrapper = styled.div`
    width: 100%;
`;

export const AuthHeader = styled.div`
    font-size: 1rem;
    margin-top: 0.5rem;
    padding-left: 0.3rem;
`;

export const AuthEmailInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }
`;

export const AuthPasswordInput = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }
`;

export const AuthLoginButton = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    cursor: pointer;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

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

export const AuthRegisterButton = styled(Button)`
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
