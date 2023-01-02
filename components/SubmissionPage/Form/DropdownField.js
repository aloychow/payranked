import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { jobType, jobLocation, years, month, year } from './data';
import { styled } from "@mui/material/styles";

import {
    DropDownStyled, TextFieldStyled
  } from './FormElements2'
import { Autocomplete } from '@mui/material';
  

// MUI Autocomplete widget: https://mui.com/components/autocomplete/

const StyledAutocomplete = styled(DropDownStyled)({

});

const JobTypeField = (props) => {

    return (
        <DropDownStyled
            options={jobType}
            onChange={props.handleChange}
            renderInput={(params) => 
                <TextField {...params} 
                    label="Job Type*"
                    placeholder="Full-Time"
                    error={
                        (props.isFormInvalid && props.value.length === 0) ||  
                        (props.clicked === true && props.value.length === 0)
                    }
                    helperText={
                        (props.isFormInvalid && props.value.length === 0) ||  
                        (props.clicked === true && props.value.length === 0) 
                        === true 
                        ? "⚠ No blanks!" 
                        : ""
                    }
                />
            }
        />
    );
}

const JobLocationField = (props) => {

    return (
        <DropDownStyled
            options={jobLocation}
            onChange={props.handleChange}
            renderInput={(params) => 
                <TextField {...params} 
                    label="Location*"
                    placeholder="Singapore"
                    error={
                        (props.isFormInvalid && props.value.length === 0) ||  
                        (props.clicked === true && props.value.length === 0)
                    }
                    helperText={
                        (props.isFormInvalid && props.value.length === 0) ||  
                        (props.clicked === true && props.value.length === 0) 
                        === true 
                        ? "⚠ We promise not to stalk you..." 
                        : ""
                    }
                />
            }
        />
    );
}

const YoECurrentField = (props) => {

    return (
        <DropDownStyled
            disablePortal
            id="combo-box-demo"
            options={years}

            onChange={props.handleChange}
            renderInput={(params) => 
                <TextField {...params} 
                    label="Current Experience" 
            />
            }
        />
    );
  }

const YoETotalField = (props) => {

    return (
        <DropDownStyled
            disablePortal
            id="combo-box-demo"
            options={years}
            onChange={props.handleChange}
            renderInput={(params) =>
                <TextField {...params} 
                    label="Total Experience" 
                />}
        />
    );
}

const MonthField = (props) => {

    return (
        <DropDownStyled
            disablePortal
            id="combo-box-demo"
            options={month}
            onChange={props.handleChange}
            renderInput={(params) =>
                <TextField {...params} 
                    label="Month" 
                />}
        />
    );
}

const YearField = (props) => {

    return (
        <DropDownStyled
            disablePortal
            id="combo-box-demo"
            options={year}
            onChange={props.handleChange}
            renderInput={(params) =>
                <TextField {...params} 
                    label="Year" 
                />}
        />
    );
}

export { JobTypeField, JobLocationField, YoECurrentField, YoETotalField, MonthField, YearField };