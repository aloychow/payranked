const CelebrationIcon = '/images/Miscellaneous/celebration.png';
import {
    FormSuccessContainer,
    FormSuccessWrapper,
    FormSuccessIconWrapper,
    FormSuccessHeader,
    FormSuccessBody,
    LinkStyled,
    FormSuccessButton,
} from './FormSuccessElements'

const FormSuccessSection = () => {
    return (
        <FormSuccessContainer>
            <FormSuccessWrapper>
                <FormSuccessIconWrapper src={CelebrationIcon} />
                <FormSuccessHeader>
                    Thank you for your submission!
                </FormSuccessHeader>
                <FormSuccessBody>
                    Your submission will greatly help us in our goal for company transparency.
                </FormSuccessBody>
                <LinkStyled href='/'>
                    <FormSuccessButton>Return to Home</FormSuccessButton>
                </LinkStyled>
            </FormSuccessWrapper>
        </FormSuccessContainer>
    )

};

export default FormSuccessSection;