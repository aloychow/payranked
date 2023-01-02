import styled from 'styled-components';
import LinkR from "next/link";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 4rem;
    padding-bottom: 1.5rem;
`;

export const SidebarSubContainer = styled.div`
    // background: #fff;
    flex: 3;
    padding: 0rem 1rem 0 1rem;
    margin: 1.5rem 1.5rem 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    border-radius: 0.5rem;
    // box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    
    @media screen and (max-width: 1000px) {
        margin: 1rem 1.5rem;
    }
`;

export const SidebarHeader = styled.h2`
    font-size: 1.5rem;
    padding: 0.4rem;
    width: 100%;
    border-bottom: 1px solid #a7a4a4;
    text-align: left;
    font-weight: 600;
`;

export const SidebarHeader2 = styled.h2`
    font-size: 1.5rem;
    padding: 0.4rem;
    width: 100%;
    border-bottom: 1px solid #a7a4a4;
    text-align: center;
    font-weight: 600;
`;

export const SidebarFeaturedItem = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 3fr 1.2fr;
    margin: 0.5rem 0;
    cursor: pointer;
    border-radius: 0.5rem;
    &:hover {
        background: #edf1ff;
    }
`;

export const SidebarFeaturedImage = styled.img`
    width: 4.5rem;
    height: 4.5rem;
    object-fit: cover;
    background: white;
    margin: 0.5rem 0 0 1rem;
    border-radius: 1rem;
`;

export const Divider = styled.div`
    text-align: center;
    width: 100%;
    border-top: 1px solid #e3e3e3;
`;

export const SidebarFeaturedTitle = styled.h3`
    color: #000;
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding: 0.5rem;
    padding-bottom: 0.125rem;
    width: 100%;
    text-align: left;
    font-weight: 600;
    @media screen and (max-width: 1000px) {
        font-size: 1.125rem;
        line-height: 1.625rem;
    }
`;

export const SidebarFeaturedRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SidebarFeaturedBottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    color: #979797;
    font-weight: 600;
    font-size: 0.875rem;
    // justify-content: space-between;
    padding: 0.25rem 0.5rem 0.5rem 0.5rem;
`;

export const SidebarList = styled.li`
    list-style: none;
    width: 100%;
    margin: 0.5rem 0;
    text-align: left;
`;

export const SidebarListArrow = styled.img`
    margin-left: 0.25rem;
    width: 1rem;
    height: 1rem;
`;

export const SidebarListSubContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    // width: 100%;
    flex-wrap: wrap;
`;

export const SidebarListItems = styled.div`
    flex: 1;
    color: #285ACC;
    font-size: 1.125rem;
    line-height: 1.75rem;
    display: inline-block;
    padding: 0 0.5rem;
    margin: 0.25rem 0.5rem;
    margin-right: auto;
    cursor: pointer;
    border-radius: 0.25rem;
    font-weight: 600;
    &:hover {
        background: #edf1ff;
    }
`;

export const SidebarListItems2 = styled.ul`
    color: #2E3440;
    display: inline-block;
    width: 100%;
    text-align: center;
    margin: 1rem;
    cursor: pointer;
    font-weight: 600;
`;

export const SocialMediaIcons = styled.div`
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     text-align: center;
     width: 100%;
     padding: 1rem;
`;

export const SocialMediaIconLink = styled.a`
     color: #000;
     font-size: 24px;
`;

export const NavLinks = styled(LinkR)`
    color: #2E3440;
    font-size: 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    
    text-transform: capitalize;
    font-weight: 450;
    @media screen and (max-width: 1000px) {
        margin-left: 0.5rem;
        padding: 0.5rem;
    }
    // Highlight on hover
    &:hover {
        transition: all 0.3 ease-in-out;
        color: #8BD3E6;
        // background: #55707d;
    }
`;