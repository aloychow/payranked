import FAQ from './FAQ';

import { questions } from './data';
import {
    FAQHeader,
    FAQPageContainer,
    FAQWrapper
} from './FAQSectionElements';

const FAQSection = () => {
    return (
        <FAQPageContainer>
            <FAQHeader>
                Frequently Asked Questions
            </FAQHeader>
            <FAQWrapper>
                {questions.map(({ id, title, content }, i) => (
                    <FAQ key={id} title={title} content={content} id={id} />
                ))}
            </FAQWrapper>
        </FAQPageContainer>
    )
}

export default FAQSection;