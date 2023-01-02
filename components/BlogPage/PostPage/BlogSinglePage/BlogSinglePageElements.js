import styled from 'styled-components';
import Button from '@mui/material/Button';

export const SinglePageMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid #e3e3e3;
`;

export const SinglePageContainer = styled.div`
    flex: 8;
    display: flex;
    padding: 0rem 2rem;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
`;

export const SinglePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

export const BlogInfoContainer = styled.div`
    width: 100%;
    height: auto; 
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
`;

export const TopInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding-left: 0.2rem;
    flex-direction: row;
`;

export const BackWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    padding: 0.25rem 0.25rem 0.25rem 0;
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

export const Divider = styled.div`
    color: #a5acb8;
    font-size: 1rem;
    line-height: 1.5rem;
    padding-left: 0.25rem;
`;

export const Divider2 = styled.div`
    color: #a5acb8;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 0.125rem;
`;

export const BlogDate = styled.div`
    color: #505866;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const BlogCategory = styled.div`
    color: #8144FF;
    font-size: 1rem;
    line-height: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 0.25rem;
    border-radius: 0.5rem;

    &:hover {
        background: #edf1ff;
    }
`;

export const BottomInfoWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AuthorText = styled.div`
    color: #505866;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const BlogAuthor = styled.div`
    color: #285ACC;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75rem;
`;

export const TimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
`;

export const TimeText = styled.div`
    color: #505866;
    font-size: 1rem;
    line-height: 1.5rem;
`;

export const BlogTime = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75rem;
`;

export const Icon = styled.img`
    height: 1.2rem;
    width: 1.2rem;
    margin: 0.5rem 0.5rem 0 0;
    cursor: pointer;
`;
    

export const SinglePageImage = styled.img`
    width: 100%;
    height: auto;
    // max-height: 40vh;
    object-fit: contain;
    background: white;
    margin: 1rem 0;
    border-radius: 1rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const BlogTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: left;
    padding: 0.5rem 0 2rem 0;
    
    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
        line-height: 2.25rem;
    }
`;

export const BlogH2 = styled.h2`
    font-size: 1.75rem;
    line-height: 2.25rem;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
`;

export const BlogH3 = styled.h3`
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
`;

export const BlogH4 = styled.h4`
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-weight: 600;
`;

export const BlogContent = styled.p`
    font-size: 1.125rem;
    color: #1D1D1F;
    line-height: 1.75rem;
    padding: 0.75rem 0;
`;

export const BlogSubContent = styled.span`
`;

export const BlogList = styled.p`
    font-size: 1.125rem;
    color: #1D1D1F;
    line-height: 1.75rem;
    text-indent: 0rem;
    display: list-item;
    list-style-type: disc;
    list-style-position: inside;
    text-indent: -1.6rem;
    padding: 0rem 0 0.25rem 3rem;
`;

export const BlogLink = styled.a`
     color: #285ACC;
     font-size: 1.125rem;
     line-height: 1.75rem;
     padding: 0.125rem 0.0625rem;
     border-radius: 0.25rem;
     text-decoration: none;
     
     &:hover {
         background: #d9e6ff;
     }
`;


// Editing post

export const InputTitle = styled.input`
    padding: 0.5rem;
    margin: 1rem 0;
    width: 100%;
    border: 1px solid #c7c7c7;
    border-radius: 0.8rem;
    font-size: 1.1rem;
    font-weight: 500;
`;

export const InputBody = styled.textarea`
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 1rem;
    background: white;
    width: 100%;
    font-size: 1.1rem;
`;

// Styled MUI Components
export const SubmitButton = styled(Button)`
    && {
        text-transform: capitalize;
        width: auto;
        
        &:hover {
            // color: #79B1BB;
            // background: white;
            transition: 0.3s ease-out;
        }
    }
`;

// Related Posts
export const SinglePageContainer2 = styled.div`
    flex: 8;
    display: flex;
    margin: 2rem 2rem;
    margin-top: 2rem;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
`;

export const SubHeader = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid #324E73;
`;

export const PostItem = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 3fr 1.2fr;
    margin: 0.5rem 0;
    border-radius: 0.5rem;

    &:hover {
        background: #edf1ff;
    }
`; 

export const PostImage = styled.img`
    width: 12rem;
    height: 8rem;
    object-fit: cover;
    background: white;
    margin: 0.5rem 0 0 1rem;
    border-radius: 1rem;
    text-align: right;

    @media screen and (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
    }
`;

export const PostDivider = styled.div`
    text-align: center;
    width: 100%;
    margin: 1rem 0;
    border-top: 1px solid #e3e3e3;

    @media screen and (max-width: 768px) {
        margin: 0;
    }
`;

export const PostTitle = styled.h3`
    color: #000;
    font-size: 1.25rem;
    line-height: 1.75rem;
    padding: 0.5rem 0;
    padding-bottom: 0.25rem;
    text-align: left;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.5rem;
    }
`;

export const PostContent = styled.p`
    font-size: 0.8875rem;
    color: #505866;
    line-height: 1.375rem;
    margin: 0.375rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media screen and (max-width: 768px) {
        display: none
    }
`;

export const PostRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PostBottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    color: #979797;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem 0.5rem 0rem;
`;