import styled from 'styled-components';
import { Button } from '@mui/material';
import Link from "next/link";

// Element styling

export const RatingStyled = styled.div`
    text-align: center;
`;

export const RatingStyled2 = styled.div`
    text-align: center;
    margin-left: -0.125rem
`;

export const ProgressBar = styled.div`
    display: flex;
    background: #efefef;
    height: 0.75rem;
    width: 10rem;
    border-radius: 1rem;
    margin: 0.5rem 0;

    @media screen and (max-width: 768px) {
        width: 7rem;
    }

    @media screen and (max-width: 480px) {
        height: 0.5rem;
        width: 9rem;
        margin: 0.5rem 0;
    }

    @media screen and (max-width: 400px) {
        width: 5rem;
    }
`;

export const ChartStyled = styled.div`
    height: 100%;    
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    margin-left: -1rem;

    @media screen and (max-width: 480px) {
        margin-left: -2rem;
        width: 110%;
    }
`;

export const ProgressBarFilled = styled.div`
    background: linear-gradient(to right, ${props => props.colorStart}, ${props => props.colorEnd});
    height: 100%;
    width: ${props => props.percent}%;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;

export const DataTableStyled = styled.div`
    height: 100%;    
    width: 100%;
    padding-top: 1rem;
`;

// ----- First tab and general stuff

export const CompaniesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: #F4F9FF;
`;

export const CompaniesWrapper = styled.div`
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

export const CompaniesWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: auto;
    margin: 1.5rem 0 0.5rem 0;
    padding: 1rem;
    background: #E6F6E6;
    border-radius: 0.5rem;
    
    border-left: 0.375rem solid #009401;
    
    @media screen and (max-width: 480px) {
        margin: 1.5rem 1rem 0.5rem 1rem;
        border-left: 0.25rem solid #009401;
    }
`;

export const CompaniesHeader = styled.h1`
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 700;
    padding: 2rem 1rem 0rem 1rem;
    text-align: center;
`;

export const CompaniesSubHeader = styled.h2`
    color: #425466;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    padding: 0.5rem 0;
    text-align: center;

    @media screen and (max-width: 480px) {
        padding: 1rem;
    }
`;

export const CompaniesSubHeader2 = styled.p`
    color: #043404;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.75;
    padding: 0.25rem 0 1.5rem 0.25rem;
    text-align: center;
`;

export const CompaniesSubHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
`;

export const CompaniesIconLink = styled.a`
     color: #000;
     font-size: 1.25rem;
`;

export const Divider = styled.div`
    width: 100%;
    margin: 1rem 0;
    border-top: 1px solid #CFCFCF;
    border-radius: 1rem;
`;

export const InfoWrapper = styled.div`
    padding: 0.3125rem 0 0 0.5rem;
    cursor: pointer;
`;

export const InfoWrapper2 = styled.div`
    padding: 0.3125rem 0.5rem 0 0;
    cursor: pointer;
`;

export const CompaniesComponentHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CompaniesComponentHeader = styled.h2`
    color: #000;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: 600;
`;

export const CompaniesComponentHeader2 = styled.h2`
    color: #012e01;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: left;
    font-weight: 600;
    
    @media screen and (max-width: 480px) {
        font-size: 1.125rem;
        line-height: 1.625rem;
    }
`;

export const CompaniesComponentSubText = styled.p`
    color: #425466;
    font-size: 0.875rem;
    padding: 0.125rem;
    text-align: center;
`;

export const CompaniesComponentSubText2 = styled.p`
    color: #043404;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem 0 0.25rem 0;
    text-align: left;
    
    @media screen and (max-width: 480px) {
        font-size: 0.875rem;
        line-height: 1.375rem;
    }
`;

export const RoadmapLink = styled(Link)`
    font-size: 1rem;
    font-weight: 700;
    color: #012e01;
    line-height: 1.5rem;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        transition: 0.3s ease-out;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 0.875rem;
        line-height: 1.375rem;
    }
`;

// Ratings & Salary Wrapper
export const CompaniesRatingSalaryWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 1.5rem;
    height: auto;
    width: 100%;
    padding: 1.5rem 0 1.5rem 0;
    justify-content: center;
    align-items: top;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        padding: 1.5rem 0 0 0;
    }
`;

// Salary component
export const CompaniesSalaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;  
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const CompaniesSalaryHeader = styled.h2`
    color: #425466;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: 400;
  `;

export const CompaniesSalaryHeader2 = styled.h2`
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    padding-bottom: 0rem;
    font-weight: 700;
  `;

export const CompaniesSalaryContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: auto;
    max-width: 75rem;
    justify-content: center;
    align-items: top;
`;

export const CompaniesSalaryContentGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const CompaniesContent = styled.p`
    color: #425466;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;
    margin-top: 0.25rem;
    @media screen and (max-width: 480px) {
        font-size: 0.8125rem;
        line-height: 1rem;
    }
  `;

export const CompaniesContentLeft = styled.p`
  color: #425466;
  font-size: 0.9375rem;
  line-height: 1rem;
  text-align: left;

  margin-top: 0.25rem;

  @media screen and (max-width: 480px) {
      font-size: 0.8125rem;
      line-height: 0.9375rem;
  }
`;

export const CompaniesContent2 = styled.p`
  color: black;
  font-size: 1.125rem;
  line-height: 1.75rem;
  text-align: center;
  font-weight: 600;

  margin-bottom: 0.25rem;

  @media screen and (max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5rem;
  }
`;

// Ratings component
export const CompaniesRatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const CompaniesRatingHeader2 = styled.h2`
    font-size: 1.5rem;
    line-height: 2.25rem;
    text-align: center;
    font-weight: 700;
`;

export const CompaniesRatingWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
`;

export const CompaniesRatingSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CompaniesRatingSubWrapperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
`;

export const CompaniesSubText = styled.div`
    color: #000;
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: right;
    padding-right: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 0.9375rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8125rem;
        line-height: 1.5rem;
    }
`;

export const CompaniesSubText2 = styled.div`
    color: #425466;
    font-size: 1rem;
    line-height: 1.75rem;
    text-align: right;
    padding-left: 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 0.9375rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.8125rem;
        line-height: 1.5rem;
    }
`;

export const CompaniesSubText3 = styled.div`
    color: #000;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 0.9375rem;
        line-height: 1.5rem;
    }
`;

export const CompaniesSubText4 = styled.div`
    color: #404040;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 0.9375rem;
        line-height: 1.25rem;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 0.8125rem;
        line-height: 1.25rem;
    }
`;

// Salary Bar Chart
export const CompaniesSalaryDistributionWrapper = styled.div`
    height: 25rem;    
    width: 100%;
    
    @media screen and (max-width: 900px) {
        margin-top: 1.5rem
    }
    
    @media screen and (max-width: 480px) {
        padding: 1.5rem 0 1rem 0;
        height: 28rem; 
        margin-top: 0rem;
    }

    @media screen and (max-width: 400px) {
        height: 30rem;
    }
`;

export const CompaniesSalaryDistributionWrapper2 = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

// Data Table

export const Divider2 = styled.div`
    width: 100%;
    margin: 0rem 0 2rem 0;
    border-top: 1px solid #CFCFCF;
    border-radius: 1rem;
`;
export const CompaniesDataTableWrapper = styled.div`
    display: flex;
    z-index: 0;
    flex-direction: column;
    height: auto;  
    width: 100%;
    padding: 2.5rem 0 0 0;
    border-radius: 0.5rem;
    
    @media screen and (max-width: 480px) {
        padding: 1rem 0 0.5rem 0;
    }
 `;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    width: 100%;
`;

export const ReviewButton = styled(Button)`
    && {
        color: #70A7B0;
        font-size: 1rem;
        line-height: 1.625rem;
        text-transform: initial;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border: 1px solid #70A7B0;
        &:hover {
            transition: 0.3s ease-out;
        }
    }
`;


// ----- Reviews tab

export const CompaniesReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: auto;
    width: 100%;
    margin: 1.5rem 0 0 0;
    padding: 1.5rem;
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
`;

export const CompaniesReviewHeader = styled.h2`
    color: #000;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: 600;
`;

export const CompaniesReviewHeader2 = styled.h3`
    color: #000;
    font-size: 1.25rem;
    line-height: 1.75rem;
    text-align: center;
    font-weight: 600;
    padding-bottom: 0.25rem;
`;

export const CompaniesReviewHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    height: auto;
    width: 100%;
    padding: 0;
    justify-content: center;
    align-items: top;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    @media screen and (max-width: 480px) {
        padding: 0;
    }
`;

export const CompaniesReviewHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #CFCFCF;
    
    @media screen and (max-width: 900px) {
        padding: 0rem 0rem 1rem 0rem;
        border-bottom: 1px solid #CFCFCF;
        border-right: none;
    }
`;
export const CompaniesReviewHeaderWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding-top: 0.5rem;
    justify-content: center;
    align-items: center;
`;

export const CompaniesReviewRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
`;

export const CompaniesReviewSubWrapper = styled.div`
    height: 100%;
    width: auto;
`;

export const CompaniesReviewSubText = styled.div`
    color: #425466;
    font-size: 0.875rem;
    line-height: 0.875rem;
    text-align: right;
    padding-left: 1.8rem;
`;

export const CompaniesReviewIcon = styled.img`
    height: auto;
    width: 1.25rem;
    margin-right: 0.5rem;
`;

export const CompaniesReviewContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    text-align: left;
    
`;

export const CompaniesReviewSubmissionText = styled.p`
    color: #1D1D1F;
    font-size: 0.9375rem;
    line-height: 1.25rem;
    padding: 0.25rem 0 0.75rem 0;
    text-align: center;
    align-items: center;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
`;

export const CompaniesReviewTopWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.25rem;
`;

export const CompaniesReviewTopLeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`;

export const CompaniesReviewPersonIcon = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    margin-top: 0.25rem;
    margin-right: 0.5rem;
`;

export const CompaniesReviewRoleRatingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    text-align: left;
    align-items: left;
`;


// Tab stuff

export const CompaniesTab = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    @media screen and (max-width: 480px) {
        padding: 1rem 1rem 0 1rem;
    }
`;

export const CompaniesTabList = styled.ul`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.25rem 0.3125rem;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    border-radius: 2rem;
    // box-shadow: 0px 0px 0px 2px #70A7B0;  
    background: #d3eaed;

`;

export const CompaniesTabItem = styled.li`
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

export const PaginateWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
`;