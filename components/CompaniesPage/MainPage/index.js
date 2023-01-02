import { useRouter } from 'next/router'
import { useState, useEffect, useMemo } from "react";
import Image from 'next/image';

// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
    MainContainer,
    TopContainer,
    TopWrapper,
    HeaderWrapper,
    HeaderTextWrapper,
    ImageWrapper,
    SubWrapper,
    SliderWrapper,
    SliderWrapper2,
    BottomContainer,
    ContentWrapper,
    ContentImage,
    CompaniesWrapper,
    MainHeader,
    SubHeaderSmall,
    SubHeader,
    SubHeaderText,
    TextSpan,
    TextColor1,
    TextColor2,
    TextColor3,
    TextColor4,
    SubText,
    ContentText,
    HeaderLogo,
    CompanyAllWrapper,
    CompanyIndividualLink,
    CompanyIndividual,
} from "./CompanyElements";

import { companyList } from "../SearchSection/data";
import { CompanyCardFull } from "./Companycard";
import { CompanyNameToURL } from "../data";
import { CompaniesDropdown } from "../SearchSection/SearchFields";
import { SearchWrapper, SearchRowTop } from "../SearchSection/SearchElements";

import PopularImg from '../../../public/images/Miscellaneous/popular-companies.png';
import TopRatedImg from '../../../public/images/Miscellaneous/top-companies.png';
import BestPayImg from '../../../public/images/Miscellaneous/money.png';

import TikTokLogo from '../../../public/images/CompanyLogos/tiktok.png';
import OGPLogo from '../../../public/images/CompanyLogos/ogp.png';
import ShopeeLogo from '../../../public/images/CompanyLogos/shopee.png';
import CryptoComLogo from '../../../public/images/CompanyLogos/cryptocom.png';
import StripeLogo from '../../../public/images/CompanyLogos/stripe.png';
import GoldmanSachsLogo from '../../../public/images/CompanyLogos/goldmansachs.png';
import JnJLogo from '../../../public/images/CompanyLogos/jnj.png';
import VisaLogo from '../../../public/images/CompanyLogos/visa.png';
import JPMorganLogo from '../../../public/images/CompanyLogos/jpmorgan.png';
import PnGLogo from '../../../public/images/CompanyLogos/png.png';
import BoALogo from '../../../public/images/CompanyLogos/bankofamerica.png';
import GovTechLogo from '../../../public/images/CompanyLogos/govtech.png';
import JaneStreetLogo from '../../../public/images/CompanyLogos/janestreet.png';
import GoogleLogo from '../../../public/images/CompanyLogos/google.png';
import FacebookLogo from '../../../public/images/CompanyLogos/facebook.png';
import AppleLogo from '../../../public/images/CompanyLogos/apple.png';

import CityImg from '../../../public/images/Miscellaneous/city-landscape.png';


const CompaniesMainSection = () => {
    const router = useRouter()

    // Dynamic slider display based on media screen size
    const [matches768, setMatches768] = useState(false);
    const [matches1200, setMatches1200] = useState(false);
    const [companyMap, setCompanyMap] = useState({});
    
    // Create Routes (uncomment and copy from console for routes)
    // useEffect(() => {
    //     function createRoutes() {
    //         var routes = [];
    //         {Object.entries(companyMap).map(([key, value]) => { 
    //             routes.push('<url>' +
    //                             '<loc>https://www.payranked.com/companies/' + `${value}` + 
    //                             '</loc>' +
    //                             '<changefreq>daily</changefreq>' +
    //                             '<priority>0.8</priority>' +
    //                             '<xhtml:link rel="alternate" hreflang="en" ' +
    //                             'href="https://www.payranked.com/companies/' + `${value}` + '"/>' +
    //                             '</url>') }
    //         )}
    //         return routes;
    //     }
    //     let routesList = createRoutes();
    //     console.log(routesList.join("\n"));
    // }, [companyMap]);

    useEffect(() => {
        const minWidth768 = window.matchMedia("(min-width: 768px)")
        const minWidth1200 = window.matchMedia("(min-width: 1200px)")

        setMatches768(minWidth768.matches)
        setMatches1200(minWidth1200.matches)

        minWidth768.addEventListener("change", (e) => setMatches768(e.matches));
        minWidth1200.addEventListener("change", (e) => setMatches1200(e.matches));
    }, []);

    let companyDropdown = "";
    const createHandleChange = (name) => {
        return (value) => {
            try {
                switch (name) {
                    case "company":
                        companyDropdown = value;

                        if (companyDropdown !== "") {
                            // For unique names
                            let companyDropdownURL = CompanyNameToURL[companyDropdown];

                            // For normal names
                            if (typeof companyDropdownURL === "undefined") {
                                companyDropdownURL = companyDropdown.toLowerCase();
                                companyDropdownURL = companyDropdownURL.replace(" ", "-");
                            }

                            router.push({
                                pathname: `companies/${companyDropdownURL}`,
                                state: {
                                    response: "",
                                },
                            });
                        }
                        break;
                    default:
                        break;
                }
            } catch {
                // Issue when reading empty label (e.g. null entry)
                switch (name) {
                    case "company":
                        break;
                    default:
                        break;
                }
            }
        };
    };

    const settings = useMemo(() => {
        const slidesCount = matches1200 ? 3 : matches768 ? 2 : 1
        return {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: slidesCount,
            slidesToScroll: slidesCount,
            arrows: false,
            lazyLoad: false,
        }
    }, [matches1200, matches768])

    useEffect(() => {
        let companiesMap = {};
        let companyURL = "";

        for (const company of companyList) {
            companyURL = CompanyNameToURL[company];
            if (typeof companyURL === "undefined") {
                companyURL = company.toLowerCase();
                companyURL = companyURL.replaceAll(" ", "-");
            }
            companiesMap[company] = companyURL;
        }
        setCompanyMap(companiesMap);
    }, []);

    return (
        <MainContainer>
            <TopContainer>
                <TopWrapper>
                    <MainHeader>Explore Companies</MainHeader>

                    <SearchWrapper style={{ padding: "0" }}>
                        <SearchRowTop>
                            <CompaniesDropdown
                                // value={company}
                                handleChange={createHandleChange("company")}
                            />
                        </SearchRowTop>
                    </SearchWrapper>
                </TopWrapper>

                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Discover</SubHeaderSmall>
                        <SubHeader>
                            <TextColor1>Popular </TextColor1>
                            <TextSpan>Companies People Are Raving About</TextSpan>
                        </SubHeader>
                        <SubHeaderText>Companies that are internationally renowned and talked about daily. Whether it be the unforgettable Disney branding, the impeccable seamlessness of Apple products, or the unbeatable customer service from The Ritz-Carlton, all these companies have dominated their respective fields.</SubHeaderText>
                    </HeaderTextWrapper>
                        
                    <ImageWrapper>
                        <Image
                            src={PopularImg}
                            alt="Loudspeaker with popular social media icons"
                            layout="responsive"
                            priority
                        />
                    </ImageWrapper>
                </HeaderWrapper>

                <SliderWrapper>
                    <SliderWrapper2>

                        <Slider {...settings}>
                            <CompanyCardFull
                                logo={TikTokLogo}
                                company="TikTok"
                                rating={3.9}
                                about="TikTok is the leading destination for short-form mobile video and our mission is to inspire creativity and bring joy. The platform is a home for creative expression through videos that create a genuine, inspiring, and joyful experience. TikTok has global offices including Los Angeles, New York, London, Paris, Berlin, Dubai, Singapore, Jakarta, Seoul, and Tokyo."
                                salaries={15}
                                reviews={1}
                                url="tiktok"
                            />
                            <CompanyCardFull
                                logo={OGPLogo}
                                company="Open Government Products"
                                rating={4.3}
                                about="Open Government Products is an in-house team of engineers, designers, and product managers who build technology for the public good. We proactively identify areas where technology can help, test our prototypes with actual users, and bring our best ones to launch."
                                salaries={13}
                                reviews={2}
                                url="open-government-products-ogp"
                            />
                            <CompanyCardFull
                                logo={ShopeeLogo}
                                company="Shopee"
                                rating={3.8}
                                about="Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. It is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and logistical support."
                                salaries={81}
                                reviews={4}
                                url="shopee"
                            />
                            <CompanyCardFull
                                logo={CryptoComLogo}
                                company="Crypto.com"
                                rating={3.6}
                                about="Founded in 2016, Crypto.com today serves over 10 million customers with the world’s fastest growing crypto app, along with the Crypto.com Visa Card — the world’s largest crypto card program — the Crypto.com Exchange and Crypto.com DeFi Wallet."
                                salaries={1}
                                reviews={1}
                                url="crypto-com"
                            />
                            <CompanyCardFull
                                logo={StripeLogo}
                                company="Stripe"
                                rating={3.6}
                                about="Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world’s largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities."
                                salaries={3}
                                reviews={1}
                                url="stripe"
                            />
                            <CompanyCardFull
                                logo={GoldmanSachsLogo}
                                company="Goldman Sachs"
                                rating={0}
                                about="At Goldman Sachs, we believe progress is everyone’s business. That’s why we commit our people, capital and ideas to help our clients, shareholders and the communities we serve to grow."
                                salaries={8}
                                reviews={0}
                                url="goldman-sachs"
                            />
                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>

                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Fall In Love With</SubHeaderSmall>
                        <SubHeader>
                            <TextColor3>Top Rated </TextColor3>
                            <TextSpan>Companies Highly Regarded By Job Seekers</TextSpan>
                        </SubHeader>
                        
                        <SubHeaderText>Those that have stood out from the crowd with competitive pay packages, great benefits, enviable work-life balance and many more. These companies have been evaluated and rated the top by their employees using our comprehensive metrics.</SubHeaderText>
                    </HeaderTextWrapper>

                    <ImageWrapper>
                        <Image
                            src={TopRatedImg}
                            alt="List of companies with high ratings"
                            layout="responsive"
                        />
                    </ImageWrapper>
                </HeaderWrapper>

                <SliderWrapper>
                    <SliderWrapper2>
                        <Slider {...settings}>
                            <CompanyCardFull
                                logo={JnJLogo}
                                company="Johnson & Johnson"
                                rating={4.4}
                                about="Johnson & Johnson is the largest and most broadly based healthcare company in the world. We’re producing life-changing breakthroughs every day, and have been for the last 130 years."
                                salaries={1}
                                reviews={1}
                                url="johnson-&-johnson"
                            />

                            <CompanyCardFull
                                logo={VisaLogo}
                                company="Visa Inc."
                                rating={3.9}
                                about="Visa is a world leader in digital payments, facilitating transactions between consumers, merchants, financial institutions and government entities across more than 200 countries and territories."
                                salaries={12}
                                reviews={1}
                                url="visa"
                            />

                            <CompanyCardFull
                                logo={JPMorganLogo}
                                company="JPMorgan Chase"
                                rating={4.3}
                                about="J.P. Morgan is a leader in financial services, offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available. We have been helping our clients to do business and manage their wealth for more than 200 years."
                                salaries={29}
                                reviews={2}
                                url="jpmorgan-chase"
                            />

                            <CompanyCardFull
                                logo={PnGLogo}
                                company="Proctor & Gamble"
                                rating={4.4}
                                about="P&G was founded over 180 years ago as a soap and candle company. Today, we’re the world’s largest consumer goods company and home to iconic, trusted brands, including Always®, Charmin®, Braun®, Fairy®, Febreze®, Gillette®, Head & Shoulders®, Oral B®, Pantene®, Pampers®, Tide®, and Vicks®."
                                salaries={1}
                                reviews={1}
                                url="proctor-&-gamble"
                            />

                            <CompanyCardFull
                                logo={BoALogo}
                                company="Bank of America"
                                rating={4.3}
                                about="Bank of America is one of the world's largest financial institutions, serving individuals, small- and middle-market businesses and large corporations with a full range of banking, investing, asset management and other financial and risk management products and services. The company serves approximately 56 million U.S. consumer and small business relationships."
                                salaries={5}
                                reviews={1}
                                url="bank-of-america-boa"
                            />

                            <CompanyCardFull
                                logo={GovTechLogo}
                                company="GovTech"
                                rating={4.3}
                                about="The Government Technology Agency of Singapore (GovTech) spearheads Singapore’s digital government transformation and development of the public sector’s engineering capabilities to build a Smart Nation for our citizens and businesses."
                                salaries={18}
                                reviews={1}
                                url="govtech"
                            />
                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>
                
                <HeaderWrapper>
                    <HeaderTextWrapper>
                        <SubHeaderSmall>Look Out For</SubHeaderSmall>
                        <SubHeader>
                            <TextColor2>Highest Paying </TextColor2>
                            <TextSpan>Companies with Top Compensation Packages</TextSpan>
                        </SubHeader>
                        
                        <SubHeaderText>Companies that pay their employees above average market rates across industries and job roles. Learn more about companies such as Jane Street and Google that provide the best compensation packages all around. </SubHeaderText>
                    </HeaderTextWrapper>
                    
                    <ImageWrapper>
                        <Image
                            src={BestPayImg}
                            alt="Person putting money into a large wallet"
                            layout="responsive"
                        />
                    </ImageWrapper>
                </HeaderWrapper>
                
                <SliderWrapper>
                    <SliderWrapper2>
                        <Slider {...settings}>
                            <CompanyCardFull
                                logo={JaneStreetLogo}
                                company="Jane Street"
                                rating={0}
                                about="Jane Street works differently. As a liquidity provider and market maker, we trade on more than 200 trading venues across 45 countries and help form the backbone of global markets. Our approach is rooted in technology and rigorous quantitative analysis, but our success is driven by our people."
                                salaries={3}
                                reviews={0}
                                url="jane-street"
                            />

                            <CompanyCardFull
                                logo={GoogleLogo}
                                company="Google"
                                rating={0}
                                about="Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique."
                                salaries={14}
                                reviews={0}
                                url="google"
                            />

                            <CompanyCardFull
                                logo={FacebookLogo}
                                company="Facebook"
                                rating={0}
                                about="Meta builds technologies that help people connect, find communities, and grow businesses. When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram and WhatsApp further empowered billions around the world."
                                salaries={19}
                                reviews={0}
                                url="facebook"
                            />

                            <CompanyCardFull
                                logo={TikTokLogo}
                                company="Tiktok"
                                rating={3.9}
                                about="TikTok is the leading destination for short-form mobile video and our mission is to inspire creativity and bring joy. The platform is a home for creative expression through videos that create a genuine, inspiring, and joyful experience. TikTok has global offices including Los Angeles, New York, London, Paris, Berlin, Dubai, Singapore, Jakarta, Seoul, and Tokyo."
                                salaries={15}
                                reviews={1}
                                url="tiktok"
                            />

                            <CompanyCardFull
                                logo={AppleLogo}
                                company="Apple"
                                rating={0}
                                about="We’re a diverse collective of thinkers and doers, continually reimagining what’s possible to help us all do what we love in new ways. And the same innovation that goes into our products also applies to our practices — strengthening our commitment to leave the world better than we found it."
                                salaries={8}
                                reviews={0}
                                url="apple"
                            />

                            <CompanyCardFull
                                logo={JPMorganLogo}
                                company="JPMorgan Chase"
                                rating={4.3}
                                about="J.P. Morgan is a leader in financial services, offering solutions to clients in more than 100 countries with one of the most comprehensive global product platforms available. We have been helping our clients to do business and manage their wealth for more than 200 years."
                                salaries={29}
                                reviews={2}
                                url="jpmorgan-chase"
                            />
                        </Slider>
                    </SliderWrapper2>
                </SliderWrapper>
            </TopContainer>

            <BottomContainer>
                <ContentWrapper>
                    <SubHeader style={{ textAlign: "center" }}>
                        About Our Companies
                    </SubHeader>
                    <ContentText>
                        Payranked is the leading company transparency-offering website with
                        hundreds of different tech companies, engineering companies, design
                        studios, pharmaceutical companies - you name it, we have it! With
                        valuable insights into top companies such as Apple, Google, Meta,
                        and many more, get exclusive company insights at your fingertips.
                        Equip yourself with the appropriate tools to secure your dream job today.
                    </ContentText>
                </ContentWrapper>
                <ContentImage>
                    <Image
                        src={CityImg}
                        alt="City landscape and silhouette illustration"
                        layout="responsive"
                    />
                </ContentImage>
            </BottomContainer>

            <CompaniesWrapper>
                <SubHeader style={{ paddingBottom: "1.5rem", textAlign: "center"}}>All Companies</SubHeader>
                <CompanyAllWrapper>
                    {Object.entries(companyMap).map(([key, value]) => (
                        <CompanyIndividualLink key={key} href={`./companies/${value}`}>
                            <CompanyIndividual>{key}</CompanyIndividual>
                        </CompanyIndividualLink>
                    ))}
                </CompanyAllWrapper>
            </CompaniesWrapper>
        </MainContainer>
    );
};

export default CompaniesMainSection;
