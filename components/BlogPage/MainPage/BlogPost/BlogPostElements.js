import styled from 'styled-components';

export const BlogPostContainer = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;
    border-radius: 0.5rem;

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

export const PostImage = styled.img`
    display: flex;
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    border-radius: 0.5rem 0.5rem 0 0;
    border-radius: 0.5rem;
`;

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: left;
    padding: 1rem 0.25rem 0rem 0.25rem;
`;

export const PostCategories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const PostCategory = styled.div`
    font-size: 1.125rem;
    font-weight: 700;
    color: #8144FF;
    line-height: 1.5rem;
    padding-bottom: 0.375rem;
`;

export const PostTitle = styled.div`
    color: black;
    font-size: 1.3rem;
    line-height: 1.6rem;
    padding-bottom: 0.375rem;
    font-weight: 600;
`;

export const PostContent = styled.div`
    font-size: 0.8875rem;
    color: #505866;
    line-height: 1.375rem;
    margin: 0.375rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const PostBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top : 0.375rem;
`;

export const PostLength = styled.div`
    font-size: 0.8875rem;
    line-height: 1.5rem;
    color: #505866;
`;

export const PostDate = styled.div`
    font-size: 0.8875rem;
    line-height: 1.5rem;
    color: #505866;
`;