import LinkR from 'next/link';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #314e73;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const SidebarLogo = styled.div`
    display: inline-flex !important;
    justify-content: center;
    margin-top: 10rem;
    text-transform: uppercase;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 70px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    height: 70px;

    font-weight: 450;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
        color: #8BD3E6;
        background: #55707d;
        transition: 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const SidebarLink2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    height: 70px;

    margin-top: 10rem;
    
    font-weight: 450;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
        color: #8BD3E6;
        background: #55707d;
        transition: 0.2 ease-in-out;
        cursor: pointer;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #58F7F2;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;