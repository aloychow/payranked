import styled from 'styled-components';

export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding: 6rem 0;
    width: 100%;
    height: auto;
    background: #F1F5F8;
`;

export const TeamWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 90%;
    max-width: 75rem;
`;

export const TeamHeader = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const TeamMembersContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-bottom: 2rem;
    height: 100%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 2rem;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const TeamMember = styled.div`
    // background: #B4CFB0;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    border-radius: 1rem;
    padding: 30px;
    padding-bottom: 10px;
    margin: 10px;
    margin-bottom: 5px;
    // box-shadow: 0.7rem 0.7rem #759e6f;
    transition: all 0.5s ease-in-out;


    @media screen and (max-width: 768px) {
        padding: 24px;
        padding-bottom: 0px;
    }

    @media screen and (max-width: 480px) {
        padding: 20px;
        padding-bottom: 0px;
    }
`;

// export const TeamMemberImage = styled.img`
//     height: 15rem;
//     width: auto;
//     margin: 0.5rem;
//     margin-bottom: 0;

//     @media screen and (max-width: 1200px) {
//         height: 13rem;
//     }

//     @media screen and (max-width: 480px) {
//         height: 15rem;
//     }
// `;

export const TeamMemberImageNoHover = styled.img.attrs(
    props => ({'src': props.img})
)`
    display: inline;
    height: 15rem;
    width: auto;
`;

export const TeamMemberImageHover = styled.img.attrs(
        props => ({'src': props.img})
    )`
    display: none;
    height: 15rem;
    width: auto;
`;

export const TeamMemberImage = styled.div`
    margin: 0.5rem;
    margin-bottom: 0;

    &:hover ${TeamMemberImageHover} {
        display: inline;
    }

    &:hover ${TeamMemberImageNoHover} {
        display: none;
    }
`;

export const TeamMemberName = styled.div`
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-weight: 600;
`;

export const TeamMemberTitle = styled.div`
    font-size: 1.1rem;
    color: #212121;
`;