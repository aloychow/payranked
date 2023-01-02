import React, { useState } from 'react';
import { TextFieldStyled, MultilineTextFieldStyled } from './FormElements2';
import InputAdornment from '@mui/material/InputAdornment';


// MUI Textbox widget: https://mui.com/components/text-fields/

// This is used to set success and failure colour for textfields
const ValidationTextField = ({ ...args }) => {

  return (
    <TextFieldStyled
      {...args}
      InputLabelProps={{
        required: false
      }}
      sx={{
        // "& input:valid + fieldset": {
        //   borderColor: "green",
        //   borderWidth: 2
        // }
      }}
    />
  );
};

const CompanyField = (props) => {

  return (
    <TextFieldStyled
      label = "Company*" 
      variant = "outlined"
      placeholder = "Google"
      fullWidth

      value={props.value}
      onChange={props.handleChange}

      // If clicked and field is blank, or if submit form and value is blank, then show error
      // Prevents error from being shown automatically, and allows for errors to be shown if submit incomplete form
      error={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0)
      }
      helperText={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0) 
        === true 
        ? "⚠ Where do you work?" 
        : ""
      }
    />
  );
}

const JobTitleField = (props) => {

  return (
    <TextFieldStyled
      label = "Job Title*" 
      variant = "outlined"
      placeholder = "Management Consultant"

      value={props.value}
      onChange={props.handleChange}

            // If clicked and field is blank, or if submit form and value is blank, then show error
      // Prevents error from being shown automatically, and allows for errors to be shown if submit incomplete form
      error={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0)
      }
      helperText={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0) 
        === true 
        ? "⚠ What are you working as?" 
        : ""
      }
    />
  );
}

const JobLevelField = (props) => {

  return (
    <TextFieldStyled
      id = "outlined-basic" 
      label = "Level / Seniority" 
      variant = "outlined"
      placeholder="Associate, L3, Principal SDE..."

      value={props.value}
      onChange={props.handleChange}
    />
  );
}

const CompensationBaseField = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  const iconAdornment = (isSelected || props.value.length !== 0)
    ? {
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }
    : {};

  return (
    <TextFieldStyled
      id = "outlined-basic" 
      label = "Base (Monthly)*" 
      variant = "outlined"

      onFocus={e => setIsSelected(true)}
      onBlur={e => setIsSelected(false)}
      InputProps={iconAdornment}

      value={props.value}
      onChange={props.handleChange}

      error={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0)
      }
      helperText={
        (props.isFormInvalid && props.value.length === 0) ||  
        (props.clicked === true && props.value.length === 0) 
        === true 
        ? "⚠ It'll be our little secret..." 
        : ""
      }
    />
  );
}

const CompensationStockField = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  const iconAdornment = (isSelected || props.value.length !== 0)
    ? {
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }
    : {};

  return (
    <TextFieldStyled
      id = "outlined-basic" 
      label = "Stocks (Yearly)" 
      variant = "outlined"
      
      onFocus={e => setIsSelected(true)}
      onBlur={e => setIsSelected(false)}
      InputProps={iconAdornment}

      value={props.value}
      onChange={props.handleChange}
    />
  );
}

const CompensationBonusField= (props) => {

  const [isSelected, setIsSelected] = useState(false);

  const iconAdornment = (isSelected || props.value.length !== 0)
    ? {
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }
    : {};

  return (
    <TextFieldStyled
      id = "outlined-basic" 
      label = "Bonus  (Yearly)" 
      variant = "outlined"

      onFocus={e => setIsSelected(true)}
      onBlur={e => setIsSelected(false)}
      InputProps={iconAdornment}

      value={props.value}
      onChange={props.handleChange}
    />
  );
}

const CompensationVariableField = (props) => {

  const [isSelected, setIsSelected] = useState(false);

  const iconAdornment = (isSelected || props.value.length !== 0)
    ? {
        startAdornment: (
          <InputAdornment position="start">$</InputAdornment>
        )
      }
    : {};

  return (
    <TextFieldStyled
      id = "outlined-basic" 
      label = "Variable (Yearly)" 
      variant = "outlined"
      
      onFocus={e => setIsSelected(true)}
      onBlur={e => setIsSelected(false)}
      InputProps={iconAdornment}

      value={props.value}
      onChange={props.handleChange}
    />
  );
}

const GoodField = (props) => {
  return (
    <MultilineTextFieldStyled
      id = "outlined-basic" 
      label = "The Good" 
      placeholder = "Working culture is good, people are friendly."
      variant = "outlined"
      fullWidth
      multiline
      rows={5}

      value={props.value}
      onChange={props.handleChange}
    />
  );
}

const BadField = (props) => {
  return (
    <MultilineTextFieldStyled
      id = "outlined-basic" 
      label = "The Bad"
      placeholder = "You have to OT often."
      variant = "outlined"
      fullWidth
      multiline
      rows={5}

      value={props.value}
      onChange={props.handleChange}
    />
  );
}


export { CompanyField, JobTitleField, JobLevelField, CompensationBaseField, CompensationStockField, CompensationBonusField, CompensationVariableField, GoodField, BadField };