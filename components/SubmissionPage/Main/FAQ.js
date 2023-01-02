import React, { useState } from 'react';

import {
    FAQIndividualWrapper,
    FAQTitle,
    FAQContent
} from './FAQElements';

const FAQ = (question) => {

    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded((prevExpanded) => !prevExpanded);
      };

    return (
        
        <React.Fragment key={question.id}>
            <FAQIndividualWrapper>
                <FAQTitle 
                    className='title'
                    onClick={() => handleClick()}
                >
                    {/* <i></i> */}
                    {question.title}
                </FAQTitle>
                <FAQContent className='content' style={{ display: expanded ? "block" : "none" }}>
                    {question.content}
                </FAQContent>
            </FAQIndividualWrapper>
        </React.Fragment>
    )
};

export default FAQ;