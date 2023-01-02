import styled from 'styled-components';
import Button from '@mui/material/Button';

// Styled MUI Components
export const ButtonStyled = styled(Button)`
    && {
        color: #fff;
        background: #79B1BB;
        text-transform: uppercase;
        margin: 0.2rem 0;  
        padding: 0.5rem;
        width: 100%;

        &:hover {
            // color: #79B1BB;
            background: #467780;
            transition: 0.3s ease-out;
        }
    }
`;