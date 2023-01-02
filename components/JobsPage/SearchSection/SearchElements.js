import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    max-width: 75rem;
    
    @media screen and (max-width: 480px) {
        padding: 0 1rem;
    }
`;

export const SearchRowTop = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    height: auto;
    width: 100%;
    max-width: 75rem;
    justify-content: center;
    align-items: center;
`;

export const SearchRowBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: auto;
    width: 100%;
    max-width: 75rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;