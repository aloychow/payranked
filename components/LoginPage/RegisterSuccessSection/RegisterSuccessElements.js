import styled from 'styled-components';
import { Button } from '@mui/material';
import Link from "next/link";

export const RegisterSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15rem 0;
    width: 100%;
    height: 100vh;
    background: #F4F9FF;
`;

export const RegisterSuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;

    height: auto;
    width: 90%;
    max-width: 75rem;
`;

export const RegisterSuccessIconWrapper = styled.img`
    height: 12rem;
    width: 12rem;
    align-text: center;
    margin: 2rem;

    @media screen and (max-width: 1200px) {
        height: 10rem;
        width: 10rem;
    }

    @media screen and (max-width: 480px) {
        height: 8rem;
        width: 8rem;
    }
`;

export const RegisterSuccessHeader = styled.div`
    font-size: 2.5rem;
    margin: 1rem;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 1.7rem;
    }
`;

export const RegisterSuccessBody = styled.div`
    font-size: 1.3rem;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
`;


export const RegisterSuccessButton = styled(Button)`
&& {
    margin-top: 1.5rem;
    text-transform: capitalize;
    color: #fff;
    background: #70A7B0;
    width: auto;

    &:hover {
        // color: #79B1BB;
        background: #486d73;
        // transition: 0.3s ease-out;
    }
}
`;