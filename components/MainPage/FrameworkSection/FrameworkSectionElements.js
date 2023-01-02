import styled from 'styled-components';

export const FrameworkContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #F4F9FF;
    padding: 7rem 5rem;
    height: auto;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding: 6rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 5rem 3rem;
    }

    @media screen and (max-width: 480px) {
        padding: 4rem 0.5rem;
    }
`;

export const FrameworkWrapper = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: 1.2fr 1.5fr;
    grid-gap: 1rem;
    max-width: 75rem;
    align-items: center;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

export const FrameworkGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;

    @media screen and (max-width: 768px) {
        align-items: left;
    }
`;

export const FrameworkHeader = styled.h3`
    font-size: 1.5rem;
    color: #f0643a;
    padding-left: 1rem;

    font-weight: 600;
`;

export const FrameworkDescription = styled.h2`
    color: #000;
    font-size: 3rem;
    line-height: 4.5rem;
    font-weight: 600;
    padding: 1.5rem 1rem;
    max-width: 75rem;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        line-height: 3rem;
        width: 100%;
    }
`;

export const FrameworkContent = styled.p`
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0 1rem 1rem 1rem;
    color: #425466;
    text-align: left;
    margin-top: 10px;
`;

export const FrameworkGrid2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FrameworkImage = styled.div`  
    height: auto;
    width:  80%;
    margin-right: 0.5rem;

    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-bottom: 3rem;
        width: 90%;
    }


`;