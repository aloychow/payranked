import styled from 'styled-components';

export const BlogHeaderContainer = styled.div`
    display: flex:
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;

`;

export const BlogHeaderTitle = styled.h1`
    font-size: 0rem;
    text-align: left;
    opacity: 0;

    @media screen and (max-width: 480px) {
        font-size: 0rem;
    }
`;