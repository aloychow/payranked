import FAQ from "./FAQ";
import React, { Fragment } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { FaInfoCircle } from "react-icons/fa";
import { questions } from "./data";
import {
    FormContainer,
    FormMainWrapper,
    FormWrapper,
    FormWrapper2,
    FormWrapper3,
    FormHeader,
    FormH2,
    FormSubHeader,
    FormSubContainer,
    OptionButton,
    OptionButton2,
    OptionButton3,
    LinkStyled,
    InfoIcon,
    ParagraphHeader,
    Divider,
    ParagraphText,
} from "./MainElements";

function MainFormSection() {
    return (
        <FormContainer>
            <FormHeader>Contribute Job Information</FormHeader>
            <FormSubHeader>
                By contributing salary or job information, you help us make job
                transparency possible!
            </FormSubHeader>

            <FormMainWrapper>
                <FormWrapper>
                    <FormH2 style={{ marginBottom: "1.5rem" }}>
                        What do you want to do?
                    </FormH2>

                    <FormSubContainer>
                        <LinkStyled href="./submission/full">
                            <OptionButton>Contribute Salary & Experience</OptionButton>
                        </LinkStyled>

                        <Popup
                            position="bottom right"
                            trigger={
                                <InfoIcon target="_blank" aria-label="Rating Explanation">
                                    <FaInfoCircle />
                                </InfoIcon>
                            }
                        >
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0.5rem",
                                }}
                            >
                                Choose this option if you wish to contribute both your salary as
                                well as your work experience. You should have worked there for
                                at least a month.
                            </div>

                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0 0.5rem 0.5rem 0.5rem",
                                }}
                            >
                                Salary information concerns job-related metrics such as
                                compensation figures.
                            </div>

                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0 0.5rem 0.5rem 0.5rem",
                                }}
                            >
                                Experience information are qualitative aspects of your job such
                                as work-life balance.
                            </div>
                        </Popup>
                    </FormSubContainer>

                    <FormSubContainer>
                        <LinkStyled href="./submission/salary">
                            <OptionButton2>Contribute Salary Only</OptionButton2>
                        </LinkStyled>
                        <Popup
                            position="bottom right"
                            trigger={
                                <InfoIcon target="_blank" aria-label="Rating Explanation">
                                    <FaInfoCircle />
                                </InfoIcon>
                            }
                        >
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0 0.5rem 0.5rem 0.5rem",
                                }}
                            >
                                Salary information concerns job-related metrics such as
                                compensation figures.
                            </div>
                        </Popup>
                    </FormSubContainer>

                    <FormSubContainer>
                        <LinkStyled href="./submission/experience">
                            <OptionButton2>Contribute Experience Only</OptionButton2>
                        </LinkStyled>

                        <Popup
                            position="bottom right"
                            trigger={
                                <InfoIcon target="_blank" aria-label="Rating Explanation">
                                    <FaInfoCircle />
                                </InfoIcon>
                            }
                        >
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0 0.5rem 0.5rem 0.5rem",
                                }}
                            >
                                Experience information are qualitative aspects of your job such
                                as work-life balance.
                            </div>
                        </Popup>
                    </FormSubContainer>

                    <FormSubContainer>
                        <LinkStyled href="./submission">
                            <OptionButton3>Contribute Benefits</OptionButton3>
                        </LinkStyled>

                        <Popup
                            position="bottom right"
                            trigger={
                                <InfoIcon target="_blank" aria-label="Rating Explanation">
                                    <FaInfoCircle />
                                </InfoIcon>
                            }
                        >
                            <div
                                style={{
                                    fontSize: "0.9rem",
                                    color: "#425466",
                                    padding: "0 0.5rem 0.5rem 0.5rem",
                                }}
                            >
                                Company benefits inclide insurance and health, transportation
                                and housing, working arrangements, and other benefits such as
                                welfare and discounts.
                            </div>
                        </Popup>
                    </FormSubContainer>
                </FormWrapper>

                <FormWrapper2>
                    <FormH2 style={{ background: "#FFDFDF" }}>Why Us?</FormH2>

                    <ParagraphHeader>Anonymous 👽</ParagraphHeader>
                    <ParagraphText>
                        We will never ask for any personal or identifiable information.
                    </ParagraphText>

                    <ParagraphHeader>Secure 🔒</ParagraphHeader>
                    <ParagraphText>
                        All your company-related information is encrypted and untraceable -
                        not even by us!
                    </ParagraphText>

                    <ParagraphHeader>Flexible 🤸🏻‍♂️</ParagraphHeader>
                    <ParagraphText>
                        If you are uncomfortable sharing certain information, you can choose
                        to share certain aspects only.
                    </ParagraphText>
                </FormWrapper2>
            </FormMainWrapper>

            <FormWrapper3>
                <FormH2 style={{ background: "#CEF0DE" }}>Common Questions</FormH2>
                <Fragment>
                    {questions.map(({ id, title, content }, i) => (
                        <FAQ key={id} title={title} content={content} id={id} />
                    ))}
                </Fragment>
            </FormWrapper3>
        </FormContainer>
    );
}

export default MainFormSection;
