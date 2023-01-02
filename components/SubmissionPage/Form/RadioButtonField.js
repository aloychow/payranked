import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { RadioGroupStyled } from './FormElements2';

export default function RecommendField(props) {
    return (
    <FormControl>
        {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
        <RadioGroupStyled
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="yes"
            name="radio-buttons-group"
            row

            value={props.value}
            onChange={props.handleChange}
        >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
        </RadioGroupStyled>
    </FormControl>
    )
}