import styled from 'styled-components';

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border-right: 1px solid #e3e3e3;

    @media screen and (max-width: 480px) {
        padding-top: 2.5rem;
    }
`;

export const BlogHeader = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    padding: 2rem 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
    width: fit-content;
    // border-bottom: 0.125rem solid #a7a4a4;

    @media screen and (max-width: 480px) {
        display: none;
        // padding-top: 0;
    }
`;

export const BlogHeader2 = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 3rem;
    padding: 2rem 0.5rem 0 0.5rem;
    margin-bottom: 1rem;
    width: fit-content;
    // border-bottom: 0.125rem solid #a7a4a4;

    @media screen and (max-width: 480px) {
        display: none;
        // padding-top: 0;
    }
`;

export const Divider = styled.div`
    text-align: center;
    width: 100%;
    padding-bottom: 1.5rem;
    margin-top: 1rem;
    border-top: 1px solid #a7a4a4;
`;

export const BlogPostMain = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 480px) { 
        display: none;  
    }
`;

export const BlogPostText = styled.h3`
    position: absolute;
    color: #fff;
    font-size: 2rem;
    line-height: 3rem;
    padding: 3rem 2rem 1.5rem 2rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    z-index: 2;
    border-radius: 0.5rem;

    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(39,46,82,0.9) 80%); 

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding: 1rem;
        padding-top: 3rem;
    }
`;

export const BlogPostCategory = styled.p`
    position: absolute;
    color: #ff6640;
    font-size: 1.5rem;
    line-height: 1.5rem;
    top: 2rem;
    left: 2rem;
    font-weight: 600;
`;

export const BlogPostImage = styled.img`
    display: flex;
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    border-radius: 0.5rem;
`;

export const BlogPostsContainer = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 1.5rem;
    height: 100%;
    justify-content: center;
    align-items: top;

    @media screen and (max-width: 768px) {
        grid-gap: 2.5rem;
        grid-template-columns: 1fr;
    }
`;

export const BackWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: auto;
    margin-bottom: 1rem;

    padding: 0.25rem 0.25rem;
    border-radius: 0.5rem;

    &:hover {
        background: #edf1ff;
    }
`;

export const BlogIcon = styled.img`
    height: 1rem;
    width: 1rem;
    margin: 0.1875rem 0.5rem 0.1875rem 0;
`;

export const BlogBack = styled.div`
    color: #505866;
    font-size: 1rem;
    line-height: 1.5rem;

    &:hover {
        color: #000;
        text-decoration: underline;
    }
`;

export const BlogPaginationContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 3rem;
    justify-content: center;
`;

export const BlogPaginationWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;