import Link from "next/link";
import Image from 'next/image';

import { Component } from "react";
import {
  HomeContainer,
  HomeWrapper,
  HomeGridWrapper,
  HomeItem,
  HeaderTitle,
  HeaderTitleSpan,
  HeaderTitleColor1,
  HeaderTitleColor2,
  StyledTypist,
  LinkStyled,
  JobsButton,
  CompaniesButton,
  HorizontalWrapper,
  LandingImage,
} from "./HomeSectionElements";

import LandingImg from '../../../public/images/Miscellaneous/payranked-landing.png'

class HomeSection extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <>
        <HomeContainer id="home">
          <HomeWrapper>
            <HomeGridWrapper>
              <HomeItem>
                <HeaderTitle>
                  <HeaderTitleSpan>Find Your </HeaderTitleSpan>
                  <HeaderTitleColor1>Dream</HeaderTitleColor1>
                  <HeaderTitleSpan> Job and Company </HeaderTitleSpan>
                  <HeaderTitleColor2>Today</HeaderTitleColor2>
                </HeaderTitle>

                <StyledTypist>
                  We understand the difficulty of job finding. With Payranked,
                  we empower you with the tools to succeed.
                </StyledTypist>

                <HorizontalWrapper>
                  <Link href="/jobs">
                    <LinkStyled >
                      <JobsButton>Discover Jobs</JobsButton>
                    </LinkStyled>
                  </Link>

                  <Link href="/companies">
                    <LinkStyled>
                      <CompaniesButton>Discover Companies</CompaniesButton>
                    </LinkStyled>
                  </Link>
                </HorizontalWrapper>
              </HomeItem>

              <HomeItem>
                <LandingImage>
                  <Image
                    src={LandingImg}
                    alt="Payranked ratings, reviews and skills examples"
                    layout="responsive"
                    priority
                  />
                </LandingImage>
              </HomeItem>
            </HomeGridWrapper>
          </HomeWrapper>
        </HomeContainer>

        {/* <ImageBg src={Image} />    */}
      </>
    );
  }
}

export default HomeSection;
