import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// const EmailIcon = '/images/Miscellaneous/email.png';

import {
    ButtonStyled,
    SubscribeWrapper,
    SubscribeGrid,
    SubscribeGrid1,
    SubscribeGrid2,
    SubscribeHeader,
    SubscribeSubHeading,
    SubscribeSubText,
    Form,
    FormInput,
    FooterContainer,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialMediaLogo,
    // SocialMediaIcon,
    SocialMediaIcons,
    SocialMediaIconLink,
    WebsiteRights,
} from "./FooterElements";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        setEmail(event.target.value);
        console.log(email);
    };

    const validateEmail = (event) => {
        return String(event)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const submitEmail = (event) => {
        // Check if valid email
        const error = validateEmail(email);

        if (error !== null) {
            axios
                .post(
                    "https://sheet.best/api/sheets/38ce84a5-6ce1-4fa8-b644-47338839b3df",
                    { email: email }
                )
                .then((response) => {
                    console.log(response);
                });
            setEmail("");
            setSubmitted(true);
        } else {
            console.log("wrong!");
        }
    };

    return (
        <>
            <FooterContainer>
                <SubscribeWrapper>
                    <SubscribeGrid>
                        <SubscribeGrid1>
                            {submitted === false ? (
                                <>
                                    <SubscribeHeader>Subscribe Today</SubscribeHeader>
                                    <SubscribeSubHeading>
                                        Get the latest news about jobs, companies, tips, and many
                                        more!
                                    </SubscribeSubHeading>
                                    <SubscribeSubText>
                                        We promise we won&apos;t spam you.
                                    </SubscribeSubText>
                                </>
                            ) : (
                                <>
                                    <SubscribeHeader>Thank You for Subscribing</SubscribeHeader>
                                    <SubscribeSubHeading>
                                        We&apos;re incredibly excited to have you here with us!
                                    </SubscribeSubHeading>

                                    <SubscribeSubText>
                                        Get ready to receive the latest news directly to your email.
                                    </SubscribeSubText>
                                </>
                            )}
                        </SubscribeGrid1>
                        <SubscribeGrid2>
                            <Form>
                                <FormInput
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email here"
                                    value={email}
                                    onChange={handleChange}
                                />
                                <ButtonStyled onClick={submitEmail}>Subscribe</ButtonStyled>
                            </Form>
                        </SubscribeGrid2>
                    </SubscribeGrid>
                </SubscribeWrapper>

                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Overview</FooterLinkTitle>
                            <Link href="/">
                                <FooterLink>Home</FooterLink>
                            </Link>
                            <Link href="/companies">
                                <FooterLink>Companies</FooterLink>
                            </Link>
                            <Link href="/jobs">
                                <FooterLink>Jobs</FooterLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Community</FooterLinkTitle>
                            <Link href="/blog">
                                <FooterLink>Blog</FooterLink>
                            </Link>
                            <Link href="/team">
                                <FooterLink>Meet the Team</FooterLink>
                            </Link>
                            <Link href="/newsletter">
                                <FooterLink>Newsletter</FooterLink>
                            </Link>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/payranked"
                            >
                                <FooterLink>Facebook</FooterLink>
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.instagram.com/payranked"
                            >
                                <FooterLink>Instagram</FooterLink>
                            </a>

                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/company/payranked"
                            >
                                <FooterLink>LinkedIn</FooterLink>
                            </a>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Miscellaneous</FooterLinkTitle>
                            <Link href="/faq">
                                <FooterLink >FAQs</FooterLink>
                            </Link>
                            <Link href="/sign-up">
                                <FooterLink>Contact Us</FooterLink>
                            </Link>
                            <Link href="/sign-up">
                                <FooterLink>Terms & Conditions</FooterLink>
                            </Link>
                            <Link href="/sign-up">
                                <FooterLink>Privacy Policy</FooterLink>
                            </Link>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>

                <SocialMedia>
                    <SocialMediaWrapper>
                        <Link href="/">
                            <SocialMediaLogo >PAYRANKED</SocialMediaLogo>
                        </Link>

                        <WebsiteRights>© Payranked 2022</WebsiteRights>

                        <SocialMediaIcons>
                            <SocialMediaIconLink
                                href="https://www.facebook.com/payranked"
                                target="_blank"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </SocialMediaIconLink>

                            <SocialMediaIconLink
                                href="https://www.instagram.com/payranked"
                                target="_blank"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </SocialMediaIconLink>

                            <SocialMediaIconLink
                                href="https://www.linkedin.com/company/payranked"
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </SocialMediaIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterContainer>
        </>
    );
};

export default Footer;
