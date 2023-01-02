import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

import { DropDownStyled } from './FormElements2';
import { jobCategory  } from './data';

// MUI Autocomplete widget: https://mui.com/components/autocomplete/

const filter = createFilterOptions();

export default function JobCategoryField(props) {

  const [value, setValue] = React.useState('');

  const onHandleChange = (event, newValue) => {
    if (typeof newValue === 'string') {
      setValue({
        label: newValue,
      });
      props.handleChange(newValue.label)
    } else if (newValue && newValue.inputValue) {
      // Create a new value from the user input
      setValue({
        label: newValue.inputValue,
      });
      props.handleChange(newValue.inputValue)
    } 
    else {
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

      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.label);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            label: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      
      options={jobCategory.sort((a, b) =>
        b.category.toString().localeCompare(a.category.toString())
      )}
      groupBy={(option) => option.category}
      
      getOptionLabel={(option) => {

        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }

        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }

        // Regular option
        return option.label;
      }}
      renderOption={(props, option) => <li {...props}>{option.label}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} 
          label="Job Category*" 
          placeholder="Product Manager"
          error={
            (props.isFormInvalid && props.value.length === 0) ||  
            (props.clicked === true && props.value.length === 0)
          }
          helperText={
            (props.isFormInvalid && props.value.length === 0) ||  
            (props.clicked === true && props.value.length === 0) 
            === true 
            ? "⚠ Add in your own if it doesn't exist!" 
            : ""}
        />
      )}
    />
  );
}