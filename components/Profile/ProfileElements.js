import styled from "styled-components";
import Button from '@mui/material/Button';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7rem 0;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 6rem 0;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 30rem;
    background: #fff;
    padding: 2rem;
    // border: 1px solid grey;
    border-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 1rem;
    }
`;

export const ProfileHeader = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`;

export const ProfileImg = styled.img`
    width: 5rem;
    height: 5rem;
    margin: 0.5rem;
    object-fit: cover;
    object-position: center;
    padding: 0.5rem;
    background: #D8DEE9;
    border-radius: 10rem;
`;

export const InputImageWrapper = styled.label`
    width: 2.6rem;
    padding: 0.5rem;
    padding-left: 0.8rem;
    margin-right: 1rem;
    border: 1px solid #c7c7c7;
    border-radius: 20rem;
    background: white;
    cursor: pointer;
`;

export const InputImage = styled.input`
    display: none;
`;

export const ProfileSubHeader = styled.div`
    font-size: 1.1rem;
    margin-top: 0.5rem;
    padding-left: 0.3rem;
`;

export const ProfileUserName = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const ProfileEmail = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

export const ProfilePassword = styled.input`
    padding: 0.7rem 1.2rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    outline: none;
    border: 1px solid #79B1BB;
    border-radius: 4px;

    font-size: 1rem;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    && {
        margin: 0.2rem 0;
        width: 100%;
        background: #fff;
    }

    &::placeholder{
        color: #9e9e9e;
        text-align: left;
    }

    &:invalid {
        border: 1px solid red;
    }
`;

// Styled MUI Components
export const UpdateButton = styled(Button)`


    && {
        margin-top: 5%;
        text-transform: capitalize;
        width: auto;

        &:hover {
            // color: #79B1BB;
            // background: white;
            transition: 0.3s ease-out;
        }
    }
`;