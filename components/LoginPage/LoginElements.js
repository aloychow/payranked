import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 7rem 0;
    }
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-text: center;
    height: auto;
    width: 90%;
    max-width: 75rem;

    @media screen and (max-width: 768px) {
        margin: 0 1.5rem;
    }
`;

export const LoginMainHeader = styled.h1`
    font-size: 2rem;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;


export const LoginGridWrapper = styled.div`
    display: grid;
    z-index: 1;
    background: #fff;
    grid-template-columns: 25rem 20rem;
    grid-gap: 1rem;
    border-radius: 2.5rem;
    overflow: hidden;
    height: auto;
    align-items: center;

    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
        border-radius: 1rem;
        width: auto;
    }

`;

export const LoginGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    padding: 2rem;
    height: auto;
`;

export const LoginHeader = styled.div`
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const LoginContent = styled.div`
    font-size: 1.125rem;
    line-height: 1.625rem;
    text-align: left;
    color: #212121;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`;


export const LoginGrid2 = styled.div`
    display: flex;
    height: auto;
    width: auto;
    flex-direction: flex-end;
    
`;

export const LoginIconWrapper = styled.img`
    width: 100%;
    height: 100%;
    align-text: center;

    @media screen and (max-width: 768px) {
        display: none
    }
`;