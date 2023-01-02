import styled from 'styled-components';
import { Button } from '@mui/material';
import Link from "next/link";

export const FormSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15rem 0;
    width: 100%;
    height: 100vh;
    background: #F4F9FF;
`;

export const FormSuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    padding 1.5rem;

    height: auto;
    width: 100%%;
    max-width: 75rem;
`;

export const FormSuccessIconWrapper = styled.img`
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

export const FormSuccessHeader = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 1rem;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const FormSuccessBody = styled.div`
    font-size: 1rem;
    color: #505866;
    text-align: center;
    padding-bottom: 2rem;

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
`;

export const FormSuccessButton = styled(Button)`
&& {
    margin-top: 1.5rem;
    text-transform: capitalize;
    color: #fff;
    background: #70A7B0;
    padding: 0.5rem;
    width: 20rem;
    max-width: 70vw;

    &:hover {
        background: #486d73;
    }
}
`;