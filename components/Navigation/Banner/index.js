import React, { useState } from 'react';
import {
    NavbarTempContainer,
    NavbarTempWrapper,
    NavbarTempLinks,
    NavbarTempText,
    NavbarTempIcon
} from './BannerElements';

const CloseIcon = '/images/Miscellaneous/close.png';

const NavbarTemp = () => {

    const [isActive, setIsActive] = useState(true);

    const closeBar = () => {
        setIsActive(false);
    }

    return (

        <NavbarTempContainer>
            {
                isActive
                    ? (
                        <>
                            <NavbarTempWrapper>
                                <NavbarTempLinks className='link' href='/blog/javascript-comments-are-fun'
                                    smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                    <NavbarTempText>
                                        🇸🇬  Interesting Findings from 2021&apos;s Graduate Employment Survey!
                                    </NavbarTempText>
                                </NavbarTempLinks>
                            </NavbarTempWrapper>

                            <NavbarTempIcon
                                src={CloseIcon}
                                onClick={closeBar}
                            />
                        </>
                    )
                    : null
            }

        </NavbarTempContainer>
    )
}

export default NavbarTemp;