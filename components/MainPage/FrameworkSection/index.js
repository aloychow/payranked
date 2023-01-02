import React from "react";
import Image from 'next/image';

import {
  FrameworkContainer,
  FrameworkWrapper,
  FrameworkGrid,
  FrameworkGrid2,
  FrameworkHeader,
  FrameworkDescription,
  FrameworkContent,
  FrameworkImage,
} from "./FrameworkSectionElements";

import StarImg from '../../../public/images/Miscellaneous/metrics.png';

const FrameworkSection = () => {
  return (
    <FrameworkContainer>
      <FrameworkWrapper>
        <FrameworkGrid>
          <FrameworkHeader>Redefining Pay</FrameworkHeader>
          <FrameworkDescription>
            Comprehensive Metrics For All-Around Analysis
          </FrameworkDescription>

          <FrameworkContent>
            We use various workplace happiness metrics to compare jobs and
            companies across board. This encourages company transparency in
            comprehensive aspects and allows every individual to make informed
            decisions.
          </FrameworkContent>
          <FrameworkContent>
            Mental health and personal fulfilment is as important as salary.
            With our comprehensive evaluation approach, find yourself a job that
            you truly enjoy.
          </FrameworkContent>
        </FrameworkGrid>

        <FrameworkGrid2>
          <FrameworkImage>
              <Image
                src={StarImg}
                alt='Colorful star with 5 metrics - "Total Compensation, Work-life balance, Career Opportunities, Personal Growth, Company Culture"'
                layout="responsive"
              />
            </FrameworkImage>
        </FrameworkGrid2>
      </FrameworkWrapper>
    </FrameworkContainer>
  );
};

export default FrameworkSection;
