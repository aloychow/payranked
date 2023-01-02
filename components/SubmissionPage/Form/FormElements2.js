import styled from 'styled-components';
import { Autocomplete, RadioGroup, TextField } from '@mui/material';

export const DropDownStyled = styled(Autocomplete)`
    margin: 5px 0;
`;

export const RatingStyled = styled.div`
    margin: 20px 0;

    @media screen and (max-width: 480px) {
        margin: 5px 0;
    }
`;

// Styled MUI Components
export const TextFieldStyled = styled(TextField)`
    && {
        margin: 0.3125rem 0;
        width: 100%;
    }
`;

export const MultilineTextFieldStyled = styled(TextField)`
    && {
        margin: 0.75rem 0;
        width: 100%;
    }
`;

export const RadioGroupStyled = styled(RadioGroup)`
    && {
        text-align: left;
        margin-bottom: 1rem;
    }
`;