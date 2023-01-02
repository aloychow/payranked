import styled from 'styled-components';

export const Container = styled.div`
    background: #F4F9FF;;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SingleWrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    max-width: 75rem;
`;

export const SingleBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1.3fr;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    
    @media screen and (max-width: 768px) {
        grid-gap: 1rem;
        grid-template-columns: 1fr;
    }
`;