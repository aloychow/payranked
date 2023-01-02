import styled from 'styled-components';
import Button from '@mui/material/Button';

// Styled MUI Components
export const SubmitButton = styled(Button)`
    && {
        margin-top: 2%;
        text-transform: capitalize;
        width: 7rem;

        &:hover {
            // color: #79B1BB;
            // background: white;
            transition: 0.3s ease-out;
        }
    }
`;

// Styled components
export const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem 5rem;;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        font-size: 1.7rem;
    }
`;

export const CreateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75rem;
    text-align: left;
`;

export const Header = styled.h1`
    font-size: 2.5rem;
    padding-bottom: 2rem;
`;

export const SubHeader = styled.h2`
    font-size: 1.5rem;
    padding-left: 0.5rem;
    padding-bottom: 0.2rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-weight: 500;
`;

export const Explanation = styled.h3`
    font-size: 1.1rem;
    color: #425466;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-weight: 400;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0.4rem 0;
    // margin-right: 1rem;
`;

export const SubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0.1rem 0;
    // margin-right: 1rem;
`;

export const ImageName = styled.span`
    font-size: 0.8rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    font-weight: 400;
    text-align: center;
`;

export const Divider = styled.div`
    width: 2vw;
`;

export const InputDisplayImage = styled.img`
    height: 20rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InputDisplayImage2 = styled.img`
    height: 10rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InputDisplayContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem 0;
    width: 100%;
    height: auto;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const InputHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    // border: 1px solid black;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 75rem;
    height: auto;
`;

export const InputImageWrapper = styled.label`
    padding: 0.5rem 0.8rem;
    padding-top: 0.7rem;
    margin-right: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 500px;
    background: white;
    cursor: pointer;
`;

export const InputImage = styled.input`
    display: none;
`;

export const InputTitle = styled.input`
    padding: 0.5rem;
    width: 100%;
    border: 1px solid #c7c7c7;
    border-radius: 0.8rem;

    font-size: 1.1rem;
    font-weight: 500;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
`;

export const InputItems = styled.input`
    padding: 0.5rem;
    width: 100%;
    border: 1px solid #c7c7c7;
    border-radius: 0.8rem;

    font-size: 1.1rem;
    font-weight: 500;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
`;

export const InputBody = styled.textarea`
    padding: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 1rem;
    background: white;
    width: 100%;

    font-size: 1.1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
`;
