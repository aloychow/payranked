import * as React from 'react';
import TextField from '@mui/material/TextField';
import { companies } from './data';
import { styled } from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';

import {
    DropDownStyled
  } from './SearchFieldsElements'

// MUI Autocomplete widget: https://mui.com/components/autocomplete/

const CompaniesDropdown = (props) => {
    
    const [value, setValue] = React.useState('');
    
    const onHandleChange = (event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            label: newValue,
          });
          props.handleChange(newValue.label)
        } else {
          setValue(newValue);
          try {
            props.handleChange(newValue.label)
          } catch {
            props.handleChange('')
          }
        }
      }
    
    return (
        <DropDownStyled
            value={value}
            // onChange={props.handleChange}
            onChange={(event, newValue) => {
                onHandleChange(event, newValue)
              }}
              
            options={companies}
              
            renderInput={(params) => 
                <TextField {...params} 
                    label="Search Companies"
                />
          }
      />
  );
}

export { CompaniesDropdown };