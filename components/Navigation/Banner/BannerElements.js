import styled from 'styled-components';
import LinkR from "next/link";

export const NavbarTempContainer = styled.div`
    display: flex;
    // flex-direction: row;
    height: auto;
    width: 100%;
    color: #000;
    background: #dfeef5;
    justify-content: center;
    align-items: center;
    margin-top: 4.5rem;
    position: fixed;
    top: 0;
    z-index: 9;

    // @media screen and (max-width: 768px) {
    //     height: 4rem;
    //  }

    //  @media screen and (max-width: 480px) {
    //     height: 5rem;
    //  }
`;

export const NavbarTempWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NavbarTempLinks = styled(LinkR)`
    color: blue;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    padding: 0.5rem;

    // Highlight on hover
    &:hover {
        color: #000e8a;
        transition: all 0.3 ease-in-out;
        -webkit-filter: brightness(95%);
    }
`;

export const NavbarTempText = styled.div`
    font-size: 1rem;
    text-align: center;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    @media screen and (max-width: 768px) {
        // font-size: 0.9rem;
     }

    @media screen and (max-width: 480px) {
        margin-right: 2rem;
    }
`;

export const NavbarTempIcon = styled.img`
    height: 1rem;
    width: auto;
    cursor: pointer;

    position: fixed;
    right: 0;
    margin-right: 1rem;
`;