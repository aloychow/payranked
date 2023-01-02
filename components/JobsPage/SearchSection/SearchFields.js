import * as React from 'react';
import TextField from '@mui/material/TextField';
import { jobsCategory } from './data';
import { styled } from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';

import {
    DropDownStyled
  } from './SearchFieldsElements'

// MUI Autocomplete widget: https://mui.com/components/autocomplete/

const StyledAutocomplete = styled(DropDownStyled)({

});

const JobsDropdown = (props) => {
  
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
      onChange={(event, newValue) => {
        onHandleChange(event, newValue)
      }}
      
      options={jobsCategory.sort((a, b) =>
        b.category.toString().localeCompare(a.category.toString())
      )}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => {

        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }

        // Regular option
        return option.label;
      }}
      renderInput={(params) =>
         <TextField {...params} 
         label="Search Jobs" 
         />
      }
    />
  );
}

export { JobsDropdown };