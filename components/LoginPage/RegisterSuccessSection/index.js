import {
  RegisterSuccessContainer,
  RegisterSuccessWrapper,
  RegisterSuccessIconWrapper,
  RegisterSuccessHeader,
  RegisterSuccessBody,
  RegisterSuccessButton,
  LinkStyled,
} from './RegisterSuccessElements';

const CelebrationIcon = '/images/Miscellaneous/celebration.png';

function RegisterSuccessSection() {
  return (
    <RegisterSuccessContainer>
      <RegisterSuccessWrapper>
        <RegisterSuccessIconWrapper src={CelebrationIcon} />
        <RegisterSuccessHeader>
          Thank you for signing up!
        </RegisterSuccessHeader>
        <RegisterSuccessBody>
          We warmly welcome you to the community.
        </RegisterSuccessBody>
        <LinkStyled href='/login'>
          <RegisterSuccessButton>Return to Login</RegisterSuccessButton>
        </LinkStyled>
      </RegisterSuccessWrapper>
    </RegisterSuccessContainer>
  )
}

export default RegisterSuccessSection;