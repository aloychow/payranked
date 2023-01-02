import Link from "next/link";
import Image from 'next/image';

import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Context } from "../../../context/Context";
import { useState, useEffect, useContext, Fragment } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoText,
  NavLogoLinks,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavMenu2,
  NavItem2,
  NavWrapper2,
  NavImg,
  NavLinks2,
} from "./NavbarElements";
import { useRouter } from "next/router";
import { getUpload } from "../../../utils";

import PayrankedLogo from '../../../public/images/Miscellaneous/logo.png'

const Navbar = ({ toggle, navLinks }) => {

  // Context
  const { user, dispatch } = useContext(Context);

  // Public folder for images
  const router = useRouter()

  const handleLogout = () => {
    router.push("/login");
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  // Navbar disappears on scroll (Not working)
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <Fragment>
      <IconContext.Provider value={{ color: "#131933" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars className="link" style={{height:"1.25rem"}} />
            </MobileIcon>

            <Link href='/'>
              <NavLogoLinks
                className="link"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                <NavLogo>
                  <Image
                    src={PayrankedLogo}
                    alt="Payranked Company Logo"
                    layout="responsive"
                    priority
                  />
                </NavLogo>
                <NavLogoText>payranked</NavLogoText>
              </NavLogoLinks>
            </Link>

            <NavMenu>
              {navLinks.map((navLink, index) => (
                <NavItem key={index}>
                  <Link href={navLink.href}>
                    <NavLinks
                      spy={true}
                      offset={-80}
                      exact={true}
                      smooth={true}
                      duration={1000}
                      className="link"
                    >
                      {navLink.text}
                    </NavLinks>
                  </Link>
                </NavItem>
              ))}
            </NavMenu>

            <NavMenu2>
              <NavItem2>
                {user ? (
                  <NavWrapper2>
                    <Link href="/profile">
                      <NavLogoLinks
                        className="link"
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact="true"
                        offset={-80}
                      >
                        <NavImg src={getUpload(user.profilePic)} />
                      </NavLogoLinks>
                    </Link>

                    <NavLinks2
                      className="link"
                      onClick={handleLogout}
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Sign Out
                    </NavLinks2>
                  </NavWrapper2>
                ) : (
                  <Link href="/login">
                    <NavLinks2
                      className="link"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      Sign In
                    </NavLinks2>
                  </Link>
                )}
              </NavItem2>
            </NavMenu2>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </Fragment>
  );
};

export default Navbar;
