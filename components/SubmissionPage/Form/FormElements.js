import styled from 'styled-components';
import Button from '@mui/material/Button';

// Styled MUI Components
export const ButtonStyled = styled(Button)`
    && {
        margin-top: 7%;
        text-transform: capitalize;

        &:hover {
            // color: #79B1BB;
            // background: white;
            transition: 0.3s ease-out;
        }
    }
`;

export const RegisterButton = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    cursor: pointer;

    font-size: 1rem;

    && {
        margin-top: 1.5rem;
        text-transform: capitalize;
        color: #fff;
        background: #70A7B0;
        width: 100%;

        &:hover {
            // color: #79B1BB;
            background: #486d73;
            // transition: 0.3s ease-out;
        }
    }
`;

// General CSS Layout 
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    width: 100%;
    // background: #F4F9FF;
`;

export const FormHeader = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
`;

export const FormSubHeader = styled.div`
    font-size: 1rem;
    text-align: center;
    color: #212121;
    margin: 0.7rem 2rem 0 2rem;

    @media screen and (max-width: 480px) {
        font-size: 0.9375rem;
    }
`;

export const FormWrapperFull = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 50rem;
`;

export const FormWrapperHalf = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    text-align: center;
    padding: 0 1.5rem;
    width: 100%;
    max-width: 50rem;

    // @media screen and (max-width: 768px) {
    //     grid-template-columns: 1fr;
    //     grid-gap: 0px;
    // }
`;

export const FormWrapperThird = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.25rem 1rem;
    padding: 0 1.5rem;
    text-align: center;
    width: 100%;
    max-width: 50rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const FormContentHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1.5rem 1.5rem 0 1.5rem;

    line-height: 2.25rem;
    font-weight: 600;

    width: 100%;
    max-width: 50rem;
`;

export const InfoWrapper = styled.div`
    padding: 0.5rem 0 0 0.5rem;
    cursor: pointer;
`;

export const IconLink = styled.a`
     color: #000;
     font-size: 1.25rem;
`;

export const FormContentHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: left;
`;

export const FormContentExplanation = styled.div`
    font-size: 1rem;
    color: #9e9e9e;
    text-align: left;
    margin-top: 5px;
    margin-left: 3px;
`;

export const FormContentText = styled.div`
    font-size: 1rem;
    color: #9e9e9e;
    text-align: center;
    padding: 0.5rem 1.5rem;
    max-width: 800px;
`;

export const FormRatingSubHeader = styled.div`
    font-size: 1;
    justify-content: center;
    text-align: center;
    color: #212121;
    margin: 0.7rem 0rem 2rem 0rem;
    padding: 0 1.5rem;
    max-width: 50rem;

    @media screen and (max-width: 480px) {
        font-size: 0.9375rem;
    }
`;

export const FormRatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50rem;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const FormRatingText = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0.7rem;
    text-align: center;
`;

export const FormErrorText = styled.div`
    font-size: 1rem;
    color: red;
    text-align: center;
    margin-top: 1rem;
    width: 70%;
`;

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: left;
    align-items: left;
    padding: 0.75rem 1.5rem 0 1.5rem;
    max-width: 50rem;
`;

export const QuestionText = styled.div`
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
`;

// Login Button
export const SubmitButton = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    width: 20rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    cursor: pointer;

    font-size: 1rem;

    && {
        margin-top: 1.5rem;
        text-transform: capitalize;
        color: #fff;
        background: #70A7B0;

        &:hover {
            // color: #79B1BB;
            background: #486d73;
            // transition: 0.3s ease-out;
        }
    }
`;