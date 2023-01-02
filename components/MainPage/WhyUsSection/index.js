import React from "react";
import Image from 'next/image';

import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsDescription,
  ProjectsContent,
  ProjectGridWrapper,
  ProjectsWrapper,
  ProjectsCard1,
  ProjectsCard2,
  ProjectsCard3,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./WhyUsElements";

import TransparencyImg from '../../../public/images/Miscellaneous/transparency.png'
import ChecklistImg from '../../../public/images/Miscellaneous/evaluation.png'
import AnonymousImg from '../../../public/images/Miscellaneous/anonymous.png'


const WhyUsSection = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectGridWrapper>
          <ProjectsHeader>Why Us</ProjectsHeader>
          <ProjectsDescription>
            Fully Integrated Suite For All Your Job Finding Needs
          </ProjectsDescription>

          <ProjectsContent>
            We care. And that&apos;s why we have developed and maintained a complete
            collection of products and features with your needs in mind. From
            completely honest and transparent reporting to cohesive company
            evaluations. Everything you need, in one place.
          </ProjectsContent>

          <ProjectsWrapper>
            <ProjectsCard1>
              <ProjectsIcon>
                <Image
                  src={TransparencyImg}
                  alt="Two overlapping red and green squares"
                  layout="responsive"
                />
              </ProjectsIcon>
              <ProjectsH2>Full Transparency</ProjectsH2>
              <ProjectsP>
                Transparency in the workplace helps to align employees
                expectations, ensuring that every individual is fairly
                compensated. It also leads to happier and healthier employees.
                Stop pay discrimination now!{" "}
              </ProjectsP>
            </ProjectsCard1>

            <ProjectsCard2>
              <ProjectsIcon>
                <Image
                  src={ChecklistImg}
                  alt="Evaluation checklist with pencil"
                  layout="responsive"
                />
              </ProjectsIcon>
              <ProjectsH2>Cohesive Evaluation</ProjectsH2>
              <ProjectsP>
                Jobs are not only about money. We use various metrics to
                evaluate jobs and companies - comprising not only extrinsic
                metrics like compensation, but intrinsic ones like work-life
                balance and culture.
              </ProjectsP>
            </ProjectsCard2>

            <ProjectsCard3>
              <ProjectsIcon>
                <Image
                  src={AnonymousImg}
                  alt="Anonymous person in hoodie with a question mark face"
                  layout="responsive"
                />
              </ProjectsIcon>
              <ProjectsH2>Complete Anonymity</ProjectsH2>
              <ProjectsP>
                All your company-related information is encrypted and
                untraceable - not even by us! Share your experiences at your
                company with other people without worrying at all.{" "}
              </ProjectsP>
            </ProjectsCard3>
          </ProjectsWrapper>
        </ProjectGridWrapper>
      </ProjectsContainer>
    </>
  );
};

export default WhyUsSection;
