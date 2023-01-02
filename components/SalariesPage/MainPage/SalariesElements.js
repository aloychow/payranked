import styled from "styled-components";
import { Button } from '@mui/material';
import Link from "next/link";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0 0 0;
    width: 100%;
    height: auto;
    background: #F4F9FF;

    @media screen and (max-width: 480px) {
        padding: 5rem 0;
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #C4D7E0;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    margin-top: 1.5rem;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 480px) {
        padding: 0 0.5rem;
    }
`;

export const TopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem 1rem 1.5rem;
    width: 100%;
    max-width: 75rem;
    
    @media screen and (max-width: 480px) {
        padding: 0 1rem;
    }
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 75rem;
`;

export const HeaderH1 = styled.h1`
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
    padding: 1rem;
    text-align: center;
`;

export const HeaderH2 = styled.h2`
    font-size: 1.5rem;
    justify-content: left;
    text-align: left;
    margin-top: 2rem;
    padding: 0.3rem;
`;

export const HeaderH3 = styled.h3`
    font-size: 1.25rem;
    justify-content: left;
    text-align: left;
`;

export const HeaderH4 = styled.h4`
    font-size: 1rem;
    font-weight: 600;
`;

export const ParagraphText = styled.p`
    color: #404040;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 0;
    text-align: center;
`;

export const Divider = styled.div`
    width: 100%;
    margin: 1rem 0;
    border-top: 1px solid #CFCFCF;
    border-radius: 1rem;
`;


export const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    padding-bottom: 2rem;
    height: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 0;
    }
`;

export const JobsButton = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #16b59d;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;

        &:hover {
            background: #0c9682;
        }
    }
`;

export const CompanyButton = styled(Button)`
    && {
        color: #fff;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        background: #626EE3;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        &:hover {
            background: #535DC5;
        }
    }
`;


export const ContributeButton = styled(Button)`
    && {
        color: #70A7B0;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: capitalize;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 1px solid #70A7B0;
        &:hover {
            transition: 0.3s ease-out;
        }
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    width: 100%;
`;

export const StatisticsIncomeGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-gap: 1.5rem;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

// Stats Container
export const StatisticsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;  
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const StatisticsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
`;

export const StatisticsSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.5rem 0 0;
    border-right: 1px solid #CFCFCF;
    height: 100%;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 768px) {
        border: none;
    }
`;

export const StatisticsSubContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    height: 100%;
    align-items: left;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const StatisticsSubHeader = styled.h2`
    color: #425466;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    font-weight: 400;
  `;

export const StatisticsValue = styled.h2`
    font-size: 1.375rem;
    line-height: 2rem;
    text-align: center;
    font-weight: 700;
    padding-bottom: 1rem;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
  `;
  
  export const StatisticsParagraph = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: left;
    font-weight: 600;
    padding-bottom: 0.5rem
  `;
  
  export const StatisticsParagraph2 = styled.p`
    color: #425466;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: left;
    font-weight: 400;
  `;
  
  
// Contribute Container
export const ContributeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;  
    background: white;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

// Top Industries

export const TopIndustryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 1rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);

`;

export const TopIndustryGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    // padding: 1rem 0;
    margin-top: 1rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const IndustryContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
`;

export const IndustryHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #CFCFCF;
`;

// Barchart
export const ChartStyled = styled.div`
    height: 100%;    
    width: 95%;
    padding-top: 1rem;
    padding-bottom: 1.5rem;

    @media screen and (max-width: 480px) {
        margin-left: -2rem;
        width: 110%;
    }
`;

export const ChartWrapper = styled.div`
    height: 25rem;    
    width: 100%;
    
    @media screen and (max-width: 480px) {
        padding: 1.5rem 0 1rem 0;
        height: 28rem; 
        margin-top: 0rem;
    }

    @media screen and (max-width: 400px) {
        height: 30rem;
    }
`;

// Top Jobs and Companies
export const TopJobsCompanyWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TopJobsCompanyGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
    padding: 1rem 0;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const JobsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    background: white;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const JobsHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #CFCFCF;
`;

export const JobsHeaderWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CompaniesContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;  
    background: white;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;


export const CompaniesHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 0.25rem;
    padding-bottom: 0.75rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #CFCFCF;
`;

export const CompaniesHeaderWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const CompaniesBodyWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CompaniesBodyWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    width: 100%;
`;

export const CompanyLogo = styled.img`
    height: 2rem;
    width: 2rem;

    // @media screen and (max-width: 768px) {
    //     width: 1.5rem;
    //     height: 1.5rem;
    // }
`;

export const CompanyDivider = styled.div`
    width: 100%;
    margin: 0.9375rem 0 0.875rem 0;
    border-top: 1px solid #CFCFCF;
`;

export const SalaryLink = styled.a`
    color: #285ACC;
    font-size: 1rem;
    width: auto;
    text-align: center;
    text-decoration: none;
    
    &:hover {
        color: #244182;
    }
`;