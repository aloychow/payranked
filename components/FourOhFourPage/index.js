import Link from "next/link";
import Image from 'next/image';

import {
    FourOhFourContainer,
    FourOhFourWrapper,
    FourOhFourImage,
    Header,
    SubHeader,
    LinkStyled,
    HomeButton,
} from './FourOhFourElements';

import TortoiseImg from '../../public/images/Miscellaneous/404.png';


const FourOhFourSection = () => {
    return (
        <FourOhFourContainer>
            <FourOhFourWrapper>
                <FourOhFourImage>
                    <Image
                        src={TortoiseImg}
                        alt="404 image with a tortoise as the zero"
                        layout="responsive"
                        priority
                    />
                </FourOhFourImage>
                <Header>
                    Page Not Found
                </Header>
                <SubHeader>
                    Sorry, we couldn't find the page you were looking for 🙁
                </SubHeader>
                
                <Link href="/">
                    <LinkStyled>
                      <HomeButton>Go Back Home</HomeButton>
                    </LinkStyled>
                </Link>
            </FourOhFourWrapper>
        </FourOhFourContainer>
    )
}

export default FourOhFourSection;