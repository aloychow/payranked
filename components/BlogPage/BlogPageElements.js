import styled from'styled-components';

export const Container = styled.div`
    background: #F4F9FF;
    // background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BlogContainer = styled.div`
    padding: 4rem 0;
    max-width: 80rem;
`;

export const BlogBodyContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1.3fr;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 1000px) {
        grid-gap: 1rem;
        grid-template-columns: 1fr;
    }
`;