import {
  TeamContainer,
  TeamWrapper,
  TeamHeader,
  TeamMembersContainer,
  TeamMember,
  TeamMemberImage,
  TeamMemberImageHover,
  TeamMemberImageNoHover,
  TeamMemberName,
  TeamMemberTitle,
} from "./TeamElements";

const AloyBefore = "/images/Team/aloy_before.png";
const AloyAfter = "/images/Team/aloy_after.png";
const HWBefore = "/images/Team/hw_before.png";
const HWAfter = "/images/Team/hw_after.png";
const ZPBefore = "/images/Team/zp_before.png";
const ZPAfter = "/images/Team/zp_after.png";

function TeamSection() {
  return (
    <TeamContainer>
      <TeamWrapper>
        <TeamHeader>Meet the Team</TeamHeader>
        <TeamMembersContainer>
          <TeamMember>
            <TeamMemberImage>
              <TeamMemberImageNoHover img={AloyBefore} />
              <TeamMemberImageHover img={AloyAfter} />
            </TeamMemberImage>
            <TeamMemberName>Aloysius Chow</TeamMemberName>
            <TeamMemberTitle>CEO & Founder</TeamMemberTitle>
          </TeamMember>

          <TeamMember>
            <TeamMemberImage>
              <TeamMemberImageNoHover img={HWBefore} />
              <TeamMemberImageHover img={HWAfter} />
            </TeamMemberImage>
            <TeamMemberName>Tay Hui Wen</TeamMemberName>
            <TeamMemberTitle>Head of Product</TeamMemberTitle>
          </TeamMember>

          <TeamMember>
            <TeamMemberImage>
              <TeamMemberImageNoHover img={ZPBefore} />
              <TeamMemberImageHover img={ZPAfter} />
            </TeamMemberImage>
            <TeamMemberName>Jovan Kee</TeamMemberName>
            <TeamMemberTitle>Head of Strategy</TeamMemberTitle>
          </TeamMember>
        </TeamMembersContainer>
      </TeamWrapper>
    </TeamContainer>
  );
}

export default TeamSection;
