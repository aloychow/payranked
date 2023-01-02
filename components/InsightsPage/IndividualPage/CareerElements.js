import styled from  "styled-components";

// ----- First tab and general stuff

export const CareerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: #F4F9FF;
`;

export const CareerWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 5rem 1.5rem;
    max-width: 75rem;

    @media screen and (max-width: 768px) {
        padding: 5rem 1.5rem;
    }

    @media screen and (max-width: 480px) {
        padding: 5rem 0.5rem;
    }
`;

export const CareerHeader = styled.h1`
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
    padding: 2rem 1rem 1rem 1rem;
    text-align: center;
`;

// Tab stuff

export const CareerTab = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    display: flex:
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    
    @media screen and (max-width: 480px) {
        padding: 1rem 1rem 0 1rem;
    }
`;

export const CareerTabList = styled.ul`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.25rem 0.3125rem;
    margin: 0.5rem 0;
    box-sizing: border-box;
    border-radius: 2rem;
    // box-shadow: 0px 0px 0px 2px #70A7B0;  
    background: #d3eaed;

`;

export const CareerTabItem = styled.li`
    width: 50%;
    height: 100%;
    font-size: 1rem;
    line-height: 2.6rem;
    list-style: none;
    cursor: pointer;
    justify-content: center;
    text-align: center;

    &.first {
        color: #70A7B0;
        background: #d3eaed;
        border-radius: 1.1875rem;
    };

    &.second {
        color: #70A7B0;
        background: #d3eaed;
        border-radius: 1.1875rem;
    };

    &.active {
        color: white;
        background: #70A7B0;
    };

    // &:hover {
    //     -webkit-filter: brightness(95%);
    //     transition: 0.3s ease-out;
    // }
`;