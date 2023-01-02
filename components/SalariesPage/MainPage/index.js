import { useState, useEffect } from "react";
import {
    MainContainer,
    BottomContainer,
    TopWrapper,
    BottomWrapper,
    HeaderH1,
    HeaderH2,
    HeaderH3,
    HeaderH4,
    ParagraphText,
    Divider,
    ButtonWrapper,
    JobsButton,
    CompanyButton,
    LinkStyled,
    StatisticsIncomeGrid,
    StatisticsContainer,
    StatisticsGrid,
    StatisticsSubContainer,
    StatisticsSubContainer2,
    StatisticsSubHeader,
    StatisticsValue,
    StatisticsParagraph,
    StatisticsParagraph2,
    ContributeContainer,
    ContributeButton,
    TopIndustryWrapper,
    TopIndustryGrid,
    IndustryContainer,
    IndustryHeaderWrapper,
    ChartStyled,
    ChartWrapper,
    TopJobsCompanyWrapper,
    TopJobsCompanyGrid,
    SalaryLink,
    JobsContainer,
    JobsHeaderWrapper,
    JobsHeaderWrapper2,
    CompaniesContainer,
    CompaniesHeaderWrapper,
    CompaniesHeaderWrapper2,
    CompaniesBodyWrapper,
    CompaniesBodyWrapper2,
    CompanyLogo,
    CompanyDivider,
} from "./SalariesElements";

const GoogleLogo = "/images/CompanyLogos/google.png";
const MicrosoftLogo = "/images/CompanyLogos/microsoft.png";
const GoldmanSachsLogo = "/images/CompanyLogos/goldmansachs.png";
const AdobeLogo = "/images/CompanyLogos/adobe.png";
const VisaLogo = "/images/CompanyLogos/visa.png";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function SalariesMainSection() {
    const [matches768, setMatches768] = useState(false);
    useEffect(() => {
        const mw768 = window.matchMedia("(min-width: 768px)");
        setMatches768(mw768.matches);
        mw768.addEventListener("change", (e) => setMatches768(e.matches));
    }, []);

    // Barchat
    const IndustrySalaryBarChart = (props) => {
        return (
            <ChartStyled>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={props.data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip fill="#000" />
                        {/* <Legend /> */}
                        <Bar dataKey="Median Salary" fill="#8b87e0" />
                        {/* <Bar dataKey="count" fill="#82ca9d" /> */}
                    </BarChart>
                </ResponsiveContainer>
            </ChartStyled>
        );
    };

    const dataBarChart = [
        {
            name: "Financial & Insurance Services",
            "Median Salary": 7069,
        },
        {
            name: "Public Administration & Education",
            "Median Salary": 6338,
        },
        {
            name: "Information and Communications",
            "Median Salary": 6092,
        },
        {
            name: "Professional Services",
            "Median Salary": 5850,
        },
        {
            name: "Manufacturing",
            "Median Salary": 4896,
        },
        {
            name: "Others",
            "Median Salary": 4437,
        },
        {
            name: "Health & Social Services",
            "Median Salary": 4309,
        },
        {
            name: "Wholesale & Retail Trade",
            "Median Salary": 4285,
        },
        {
            name: "Construction",
            "Median Salary": 4200,
        },
        {
            name: "Real Estate Services",
            "Median Salary": 4095,
        },
        {
            name: "Arts, Entertainment & Recreatione",
            "Median Salary": 3803,
        },
        {
            name: "Other Community, Social & Personal Services",
            "Median Salary": 3296,
        },
        {
            name: "Transportation & Storage",
            "Median Salary": 3168,
        },
        {
            name: "Administrative and Support Services",
            "Median Salary": 2725,
        },
        {
            name: "Accommodation & Food Services",
            "Median Salary": 2457,
        },
    ];

    return (
        <MainContainer>
            <TopWrapper>
                <HeaderH1>Explore Salaries</HeaderH1>

                <ButtonWrapper>
                    <LinkStyled href="./jobs">
                        <JobsButton>Search Salaries by Jobs</JobsButton>
                    </LinkStyled>
                    <LinkStyled href="./companies">
                        <CompanyButton>Search Salaries by Companies</CompanyButton>
                    </LinkStyled>
                </ButtonWrapper>

                <StatisticsIncomeGrid>
                    <StatisticsContainer>
                        <HeaderH3>Salary Statistics</HeaderH3>
                        <Divider />
                        <StatisticsGrid>
                            <StatisticsSubContainer>
                                <StatisticsSubHeader>Median Salary</StatisticsSubHeader>
                                <StatisticsValue>$4,680</StatisticsValue>
                                {/* <StatisticsSubHeader>Median Salary</StatisticsSubHeader> */}
                            </StatisticsSubContainer>
                            <StatisticsSubContainer2>
                                <StatisticsParagraph>
                                    The median gross monthly income is $4,680 a month in
                                    Singapore.
                                </StatisticsParagraph>
                                <StatisticsParagraph2>
                                    The figures are inclusive of employer CPF contributions.
                                    Salary values are based on the annual labour force report by
                                    the Ministry of Manpower, Manpower Research & Statistics
                                    Department.
                                </StatisticsParagraph2>
                            </StatisticsSubContainer2>
                        </StatisticsGrid>
                    </StatisticsContainer>

                    <ContributeContainer>
                        <HeaderH3>Support Pay Transparency</HeaderH3>
                        <Divider />
                        <StatisticsSubContainer2
                            style={{ paddingLeft: "0", paddingBottom: "0.5rem" }}
                        >
                            <StatisticsParagraph>
                                Help us make pay transparency a reality!
                            </StatisticsParagraph>
                            <StatisticsParagraph2>
                                By contributing your salary, you help job seekers like yourself
                                by promoting a transparent environment.
                            </StatisticsParagraph2>
                        </StatisticsSubContainer2>
                        <LinkStyled href="./submission">
                            <ContributeButton>Contribute Salary</ContributeButton>
                        </LinkStyled>
                    </ContributeContainer>
                </StatisticsIncomeGrid>

                <HeaderH2>Top Paying Industries</HeaderH2>
                <TopIndustryWrapper>
                    <TopIndustryGrid>
                        <IndustryContainer>
                            <JobsHeaderWrapper>
                                <HeaderH4>Industry</HeaderH4>
                                <HeaderH4>Median Salary</HeaderH4>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Financial & Insurance Services</HeaderH4>
                                <HeaderH4>$7,069</HeaderH4>
                            </JobsHeaderWrapper2>
                            <IndustryHeaderWrapper>
                                <StatisticsParagraph2>per month</StatisticsParagraph2>
                            </IndustryHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Public Administration & Education</HeaderH4>
                                <HeaderH4>$6,338</HeaderH4>
                            </JobsHeaderWrapper2>
                            <IndustryHeaderWrapper>
                                <StatisticsParagraph2>per month</StatisticsParagraph2>
                            </IndustryHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Information and Communications</HeaderH4>
                                <HeaderH4>$6,092</HeaderH4>
                            </JobsHeaderWrapper2>
                            <IndustryHeaderWrapper>
                                <StatisticsParagraph2>per month</StatisticsParagraph2>
                            </IndustryHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Professional Services</HeaderH4>
                                <HeaderH4>$5,850</HeaderH4>
                            </JobsHeaderWrapper2>
                            <IndustryHeaderWrapper style={{ border: "none" }}>
                                <StatisticsParagraph2>per month</StatisticsParagraph2>
                            </IndustryHeaderWrapper>
                        </IndustryContainer>

                        {matches768 ? (
                            <IndustryContainer>
                                <JobsHeaderWrapper>
                                    <HeaderH4>Industry</HeaderH4>
                                    <HeaderH4>Median Salary</HeaderH4>
                                </JobsHeaderWrapper>

                                <JobsHeaderWrapper2>
                                    <HeaderH4>Manufacturing</HeaderH4>
                                    <HeaderH4>$4,896</HeaderH4>
                                </JobsHeaderWrapper2>
                                <IndustryHeaderWrapper>
                                    <StatisticsParagraph2>per month</StatisticsParagraph2>
                                </IndustryHeaderWrapper>

                                <JobsHeaderWrapper2>
                                    <HeaderH4>Health & Social Services</HeaderH4>
                                    <HeaderH4>$4,309</HeaderH4>
                                </JobsHeaderWrapper2>
                                <IndustryHeaderWrapper>
                                    <StatisticsParagraph2>per month</StatisticsParagraph2>
                                </IndustryHeaderWrapper>

                                <JobsHeaderWrapper2>
                                    <HeaderH4>Wholesale & Retail Trade</HeaderH4>
                                    <HeaderH4>$4,285</HeaderH4>
                                </JobsHeaderWrapper2>
                                <IndustryHeaderWrapper>
                                    <StatisticsParagraph2>per month</StatisticsParagraph2>
                                </IndustryHeaderWrapper>

                                <JobsHeaderWrapper2>
                                    <HeaderH4>Construction</HeaderH4>
                                    <HeaderH4>$4,200</HeaderH4>
                                </JobsHeaderWrapper2>
                                <IndustryHeaderWrapper style={{ border: "none" }}>
                                    <StatisticsParagraph2>per month</StatisticsParagraph2>
                                </IndustryHeaderWrapper>
                            </IndustryContainer>
                        ) : (
                            <></>
                        )}
                    </TopIndustryGrid>

                    <ChartWrapper>
                        <IndustrySalaryBarChart data={dataBarChart} />
                    </ChartWrapper>
                </TopIndustryWrapper>

                <TopJobsCompanyWrapper>
                    <HeaderH2>Top Jobs and Companies</HeaderH2>

                    <TopJobsCompanyGrid>
                        <JobsContainer>
                            <JobsHeaderWrapper>
                                <HeaderH4>Jobs</HeaderH4>
                                <HeaderH4>Median Salary</HeaderH4>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Cloud Architect</HeaderH4>
                                <HeaderH4>$152,000</HeaderH4>
                            </JobsHeaderWrapper2>
                            <JobsHeaderWrapper>
                                <StatisticsParagraph2>Financial Services</StatisticsParagraph2>
                                <StatisticsParagraph2>per year</StatisticsParagraph2>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Project Manager</HeaderH4>
                                <HeaderH4>$152,000</HeaderH4>
                            </JobsHeaderWrapper2>
                            <JobsHeaderWrapper>
                                <StatisticsParagraph2>Financial Services</StatisticsParagraph2>
                                <StatisticsParagraph2>per year</StatisticsParagraph2>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Software Engineer</HeaderH4>
                                <HeaderH4>$121,500</HeaderH4>
                            </JobsHeaderWrapper2>
                            <JobsHeaderWrapper>
                                <StatisticsParagraph2>General</StatisticsParagraph2>
                                <StatisticsParagraph2>per year</StatisticsParagraph2>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Data Scientist</HeaderH4>
                                <HeaderH4>$121,000</HeaderH4>
                            </JobsHeaderWrapper2>
                            <JobsHeaderWrapper>
                                <StatisticsParagraph2>Commerce & Industry</StatisticsParagraph2>
                                <StatisticsParagraph2>per year</StatisticsParagraph2>
                            </JobsHeaderWrapper>

                            <JobsHeaderWrapper2>
                                <HeaderH4>Business Analyst</HeaderH4>
                                <HeaderH4>$111,000</HeaderH4>
                            </JobsHeaderWrapper2>
                            <JobsHeaderWrapper>
                                <StatisticsParagraph2>Financial Services</StatisticsParagraph2>
                                <StatisticsParagraph2>per year</StatisticsParagraph2>
                            </JobsHeaderWrapper>

                            <SalaryLink
                                href="https://www.roberthalf.com.sg/salary-guide"
                                target="_blank"
                                aria-label="Robert Half Salary Survey"
                            >
                                {" "}
                                View More Salaries
                            </SalaryLink>
                        </JobsContainer>

                        <CompaniesContainer>
                            <CompaniesHeaderWrapper>
                                <HeaderH4>Companies</HeaderH4>
                                <HeaderH4>Median Salary</HeaderH4>
                            </CompaniesHeaderWrapper>

                            <CompaniesBodyWrapper>
                                <CompanyLogo src={GoogleLogo} alt="Google Logo" />
                                <CompaniesBodyWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <HeaderH4>Google</HeaderH4>
                                        <HeaderH4>$295,884</HeaderH4>
                                    </CompaniesHeaderWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <StatisticsParagraph2>Technology</StatisticsParagraph2>
                                        <StatisticsParagraph2>per year</StatisticsParagraph2>
                                    </CompaniesHeaderWrapper2>
                                </CompaniesBodyWrapper2>
                            </CompaniesBodyWrapper>

                            <CompanyDivider />

                            <CompaniesBodyWrapper>
                                <CompanyLogo src={MicrosoftLogo} alt="Microsoft Logo" />
                                <CompaniesBodyWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <HeaderH4>Microsoft</HeaderH4>
                                        <HeaderH4>$176,858</HeaderH4>
                                    </CompaniesHeaderWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <StatisticsParagraph2>Technology</StatisticsParagraph2>
                                        <StatisticsParagraph2>per year</StatisticsParagraph2>
                                    </CompaniesHeaderWrapper2>
                                </CompaniesBodyWrapper2>
                            </CompaniesBodyWrapper>

                            <CompanyDivider />

                            <CompaniesBodyWrapper>
                                <CompanyLogo src={GoldmanSachsLogo} alt="Goldman Sachs Logo" />
                                <CompaniesBodyWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <HeaderH4>Goldman Sachs</HeaderH4>
                                        <HeaderH4>$165,828</HeaderH4>
                                    </CompaniesHeaderWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <StatisticsParagraph2>
                                            Financial Services
                                        </StatisticsParagraph2>
                                        <StatisticsParagraph2>per year</StatisticsParagraph2>
                                    </CompaniesHeaderWrapper2>
                                </CompaniesBodyWrapper2>
                            </CompaniesBodyWrapper>

                            <CompanyDivider />

                            <CompaniesBodyWrapper>
                                <CompanyLogo src={AdobeLogo} alt="Adobe Logo" />
                                <CompaniesBodyWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <HeaderH4>Adobe</HeaderH4>
                                        <HeaderH4>$165,733</HeaderH4>
                                    </CompaniesHeaderWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <StatisticsParagraph2>Software</StatisticsParagraph2>
                                        <StatisticsParagraph2>per year</StatisticsParagraph2>
                                    </CompaniesHeaderWrapper2>
                                </CompaniesBodyWrapper2>
                            </CompaniesBodyWrapper>

                            <CompanyDivider />

                            <CompaniesBodyWrapper>
                                <CompanyLogo src={VisaLogo} alt="Visa Inc. Logo" />
                                <CompaniesBodyWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <HeaderH4>Visa Inc.</HeaderH4>
                                        <HeaderH4>$146,420</HeaderH4>
                                    </CompaniesHeaderWrapper2>
                                    <CompaniesHeaderWrapper2>
                                        <StatisticsParagraph2>
                                            Digital Payments
                                        </StatisticsParagraph2>
                                        <StatisticsParagraph2>per year</StatisticsParagraph2>
                                    </CompaniesHeaderWrapper2>
                                </CompaniesBodyWrapper2>
                            </CompaniesBodyWrapper>

                            <CompanyDivider />

                            <SalaryLink
                                href="https://aflcio.org/paywatch/company-pay-ratios"
                                target="_blank"
                                aria-label="S&P500 Company Pay Ratios"
                            >
                                {" "}
                                View More Companies
                            </SalaryLink>
                        </CompaniesContainer>
                    </TopJobsCompanyGrid>

                    {/* <StatisticsParagraph2>The median job salaries are obtained through job surveys by external firms, and may not be indicative of the entire population. Median salaries shown for companies are for US S&P500 companies, following the SEC's adoption of pay ratio disclosure. Singapore does not have any individual company transparency laws.</StatisticsParagraph2> */}
                </TopJobsCompanyWrapper>
            </TopWrapper>

            <BottomContainer>
                <BottomWrapper>
                    <HeaderH2 style={{ textAlign: "center" }}>
                        About Our Salaries
                    </HeaderH2>
                    <ParagraphText>
                        Salaries still remain one of the most important factors job seekers
                        look out for, and can lead to growing disatisfaction, lowered
                        productivity and general unhappiness amongst employees. Payranked is
                        the leading salary transparency-offering website with salaries
                        across hundreds of different job roles and companies. Find out how
                        much you are worth today and never get underpaid again!
                    </ParagraphText>
                </BottomWrapper>
            </BottomContainer>
        </MainContainer>
    );
}

export default SalariesMainSection;
