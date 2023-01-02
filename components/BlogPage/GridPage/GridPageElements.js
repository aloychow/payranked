import styled from "styled-components";

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 2rem 2rem 2rem;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 1000px) {
        padding: 4rem 1rem 1rem 1rem;
    }
    
    @media screen and (max-width: 768px) {
        padding: 3.5rem 0.5rem 0.5rem 0.5rem;
    }
`;

export const BlogGridWrapper = styled.div`
    display: grid;
    z-index: 1;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 1.5rem;
    height: auto;
    justify-content: center;
    align-items: top;
    
    @media screen and (max-width: 1000px) {
        grid-gap: 1rem;
    }

    @media screen and (max-width: 768px) {
        grid-gap: 0.5rem;
        grid-template-columns: 1fr 1fr;
    }
`;

export const BlogPost = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 0.5rem;
    height: auto;
    width: 100%;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

export const BlogPostText = styled.h2`
    position: absolute;
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 1rem 2rem 1.5rem 2rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    z-index: 2;
    font-weight: 600;
    border-radius: 0.5rem;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(39,46,82,0.9) 80%); 

    @media screen and (max-width: 1000px) {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.5rem;
        padding-top: 1.5rem;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding-top: 0.5rem;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 0.625rem;
        line-height: 1rem;
        padding-top: 0.5rem;
    }
`;

export const BlogPostImage = styled.img`
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    border-radius: 0.5rem;
`;