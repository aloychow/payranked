import React from "react";
import Image from 'next/image';

import {
  SliderContainer,
  SliderHeader,
  SliderTitle,
  Slider,
  SliderTrack,
  Slide,
  LogoImage,
  SliderWrapper,
} from "./LogoElements";

import FacebookLogo from '../../../public/images/CompanyLogos/facebook.png';
import MicrosoftLogo from '../../../public/images/CompanyLogos/microsoft.png';
import GoogleLogo from '../../../public/images/CompanyLogos/google.png';
import TikTokLogo from '../../../public/images/CompanyLogos/tiktok.png';
import AdobeLogo from '../../../public/images/CompanyLogos/adobe.png';
import HPLogo from '../../../public/images/CompanyLogos/hp.png';
import McDonaldsLogo from '../../../public/images/CompanyLogos/mcdonalds.png';
import NetflixLogo from '../../../public/images/CompanyLogos/netflix.png';
import NikeLogo from '../../../public/images/CompanyLogos/nike.png';
import PinterestLogo from '../../../public/images/CompanyLogos/pinterest.png';
import TencentLogo from '../../../public/images/CompanyLogos/tencent.png';
import TwitchLogo from '../../../public/images/CompanyLogos/twitch.png';
import TwitterLogo from '../../../public/images/CompanyLogos/twitter.png';
import UberLogo from '../../../public/images/CompanyLogos/uber.png';
import VisaLogo from '../../../public/images/CompanyLogos/visa.png';
import JnJLogo from '../../../public/images/CompanyLogos/jnj.png';
import JPMorganLogo from '../../../public/images/CompanyLogos/jpmorgan.png';
import OGPLogo from '../../../public/images/CompanyLogos/ogp.png';
import ShopeeLogo from '../../../public/images/CompanyLogos/shopee.png';
import CryptoComLogo from '../../../public/images/CompanyLogos/cryptocom.png';
import StripeLogo from '../../../public/images/CompanyLogos/stripe.png';
import GoldmanSachsLogo from '../../../public/images/CompanyLogos/goldmansachs.png';
import PnGLogo from '../../../public/images/CompanyLogos/png.png';
import BOALogo from '../../../public/images/CompanyLogos/bankofamerica.png';
import GovTechLogo from '../../../public/images/CompanyLogos/govtech.png';
import AppleLogo from '../../../public/images/CompanyLogos/apple.png';
import JaneStreetLogo from '../../../public/images/CompanyLogos/janestreet.png';
import { Pinterest } from "@mui/icons-material";

const LogoSection = () => {
  return (
    <SliderContainer>
      <SliderWrapper>
        <SliderHeader>Inclusive Information</SliderHeader>
        <SliderTitle>Information On Both Small and Large Companies</SliderTitle>
        <Slider>
          {/* Top Slider */}
          <SliderTrack>
            <Slide>
              <LogoImage>
                <Image
                  src={FacebookLogo}
                  alt='Facebook Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={MicrosoftLogo}
                  alt='Microsoft Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GoogleLogo}
                  alt='Google Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TikTokLogo}
                  alt='TikTok Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={AdobeLogo}
                  alt='Adobe Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={HPLogo}
                  alt='HP Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={McDonaldsLogo}
                  alt="McDonald's Logo"
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NetflixLogo}
                  alt='Netflix Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NikeLogo}
                  alt='Nike Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PinterestLogo}
                  alt='Pinterest Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TencentLogo}
                  alt='Tencent Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TwitchLogo}
                  alt='Twitch Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TwitterLogo}
                  alt='Twitter Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={UberLogo}
                  alt='Uber Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={VisaLogo}
                  alt='Visa Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={FacebookLogo}
                  alt='Facebook Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={MicrosoftLogo}
                  alt='Microsoft Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GoogleLogo}
                  alt='Google Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TikTokLogo}
                  alt='TikTok Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={AdobeLogo}
                  alt='Adobe Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={HPLogo}
                  alt='HP Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={McDonaldsLogo}
                  alt="McDonald's Logo"
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NetflixLogo}
                  alt='Netflix Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NikeLogo}
                  alt='Nike Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PinterestLogo}
                  alt='Pinterest Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TencentLogo}
                  alt='Tencent Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TwitchLogo}
                  alt='Twitch Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={TwitterLogo}
                  alt='Twitter Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={UberLogo}
                  alt='Uber Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={VisaLogo}
                  alt='Visa Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
          </SliderTrack>

          {/* Bottom Slider */}
          <SliderTrack>
            <Slide>
              <LogoImage>
                <Image
                  src={JnJLogo}
                  alt='Johnson and Johnson Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={JPMorganLogo}
                  alt='JPMorgan Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={OGPLogo}
                  alt='Open Government Product Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={ShopeeLogo}
                  alt='Shopee Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={CryptoComLogo}
                  alt='Crypto.com Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={StripeLogo}
                  alt='Stripe Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GoldmanSachsLogo}
                  alt="Goldman Sachs Logo"
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PnGLogo}
                  alt='Proctor and Gamble Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={BOALogo}
                  alt='Bank of America Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GovTechLogo}
                  alt='GovTech Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={AppleLogo}
                  alt='Apple Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={JaneStreetLogo}
                  alt='Jane Street Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NetflixLogo}
                  alt='Netflix Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NikeLogo}
                  alt='Nike Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PinterestLogo}
                  alt='Pinterest Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={JnJLogo}
                  alt='Johnson and Johnson Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={JPMorganLogo}
                  alt='JPMorgan Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={OGPLogo}
                  alt='Open Government Product Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={ShopeeLogo}
                  alt='Shopee Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={CryptoComLogo}
                  alt='Crypto.com Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={StripeLogo}
                  alt='Stripe Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GoldmanSachsLogo}
                  alt="Goldman Sachs Logo"
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PnGLogo}
                  alt='Proctor and Gamble Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={BOALogo}
                  alt='Bank of America Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={GovTechLogo}
                  alt='GovTech Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={AppleLogo}
                  alt='Apple Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={JaneStreetLogo}
                  alt='Jane Street Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NetflixLogo}
                  alt='Netflix Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={NikeLogo}
                  alt='Nike Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
            <Slide>
              <LogoImage>
                <Image
                  src={PinterestLogo}
                  alt='Pinterest Logo'
                  layout="responsive"
                />
              </LogoImage>
            </Slide>
          </SliderTrack>
        </Slider>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default LogoSection;
