import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #0B1930;
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

export const ProjectsHeader = styled.h3`
    font-size: 1.5rem;
    color: #fcbf49;
    padding-left: 1rem;
    font-weight: 600;
`;

export const ProjectsDescription = styled.h2`
    color: #fff;
    font-size: 3rem;
    line-height: 4.5rem;
    font-weight: 600;
    padding: 1.5rem 1rem;
    width: 70%;
    max-width: 75rem;
    transition: all 0.5s ease-in-out;
    
    @media screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 3rem;
        width: 100%;
    }
`;

export const ProjectsContent = styled.p`
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0 1rem 5rem 1rem;
    color: #e3e3e3;
    text-align: left;
    margin-top: 10px;

    @media screen and (max-width: 480px) {
        font-size: 1.125rem;
        padding: 0 1rem 2rem 1rem;
    }
`;

export const ProjectGridWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 75rem;
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5rem;
    margin: 0 1rem;
    padding-bottom: 2rem;
    height: 100%;
    max-width: 75rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 1rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0;
    }
`;

export const ProjectsCard1 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: left;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        padding: 1rem 1rem 0 1rem;
    }
`;

export const ProjectsCard2 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: left;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        padding: 1rem 1rem 0 1rem;
    }
`;

export const ProjectsCard3 = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: left;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        padding: 1rem 1rem 0 1rem;
    }
`;

export const ProjectsIcon = styled.div`
    height: auto;
    width: 6rem;
    margin-bottom: 1rem;
    padding-left: 1rem;

    @media screen and (max-width: 1200px) {
        width: 5rem;
    }

    @media screen and (max-width: 480px) {
        width: 4rem;
    }
`;
    
export const ProjectsH2 = styled.h4`
    font-size: 1.5rem;
    text-align: left;
    color: #fff;   
    border-left: 1px solid #fcbf49;
    padding-left: 1rem;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    line-height: 1.75rem;
    padding: 0 1rem;
    color: #ACBCCB;
    text-align: left;
    margin-top: 10px;
`;
