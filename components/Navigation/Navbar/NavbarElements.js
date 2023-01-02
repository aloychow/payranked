import styled from 'styled-components';
import LinkR from 'next/link';

export const Nav = styled.nav`
    background-color: ${({ scrollNav }) => (scrollNav
        ? 'rgb(244, 249, 255, 1)'
        : 'rgb(244, 249, 255, 1)')};
    backdrop-filter: blur(5px);
    height: 4.5rem;
    margin-top: -3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    position: sticky;
    top: 0;
    z-index: 10;
    padding-bottom: 25px;
    transition: 0.5s all ease;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    z-index: 1;
    width: 100%;
    max-width: 75rem;
    padding: 1.5rem 0 0 0;

    @media screen and (max-width:768px) {
        justify-content: left;
    }
`;

export const NavLogo = styled.div`
    height: 2rem;
    width: 2rem;
    margin-left: 1.5rem;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @media screen and (max-width:768px) {
        margin-left: 1rem;
    }

    @media screen and (max-width:480px) {
        margin-left: 1rem;
    }
`;

export const NavImg = styled.img`
    height: 2rem;
    width: 2rem;
    padding: 0.2rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
    background: #D8DEE9;
    border-radius: 10rem;
    object-fit: cover;
    object-position: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    @media screen and (max-width:768px) {
        margin-left: 1rem;
    }
    @media screen and (max-width:480px) {
        margin-left: 0.5rem;
    }
`;

export const NavLogoText = styled.div`
    color: #131933;
    font-size: 1.5rem;
    font-weight: 800;
    align-items: left;
    text-decoration: none;
    margin: 0rem 0 0 0.5rem;
    padding-top: 0rem;
    height: 100%;
    text-transform: uppercase;
    cursor: pointer; 

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const NavLogoLinks = styled.div`
    color: #fff;
    display: flex;
    height: auto;
    margin-top: 0.3rem;
    text-decoration: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

// Menu for tablet and mobiles
export const MobileIcon = styled.div`
    display: none;
    
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0.5rem;
        right: -1.5rem;
        transform: translate(-100%, 20%);
        font-size: 1.8rem;
        color: #131933;
        padding: 0.25rem 0.4375rem;
        background: #cbdff5;
        border-radius: 0.5rem;
        height: auto;
    }
`;

// Menu for computer screen
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 5rem;

    @media screen and (max-width: 1200px) {
        margin-left: 2rem;
    }

    @media screen and (max-width: 1000px) {
        margin-left: 0.5rem;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 3.5rem;
`;

export const NavLinks = styled.div`
    color: #131933;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    text-transform: capitalize;
    @media screen and (max-width: 1000px) {
        padding: 0.4rem;
        margin-left: 0.5rem;
    }
    @media screen and (max-width: 800px) {
        padding: 0.3rem;
        margin-left: 0.5rem;
    }
    &:hover {
        color: #8BD3E6;
        transition: all 0.3 ease-in-out;
    }
`;

export const NavMenu2 = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem2 = styled.li`
    height: 3.5rem;
`;

export const NavWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    height: 3.5rem;
`;

export const NavLinks2 = styled.div`
    color: #1589FF;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1.25rem 1rem;
    margin-top: 0.6rem;
    margin-right: 1rem;
    height: 60%;
    cursor: pointer;

    background: #cbdff5;
    border-radius: 0.5rem;
    
    text-transform: capitalize;
    font-weight: 500;

    // Highlight on hover
    &:hover {
        transition: all 0.3 ease-in-out;
        background: #bdd6f2;
    }
`;

