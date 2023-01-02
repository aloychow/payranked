import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import { styled } from '@mui/material/styles';

import { RatingStyled } from './FormElements2'


// MUI Slider: https://mui.com/components/slider/


const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        width: 250,
    },
    [theme.breakpoints.down('md')]: {
        width: 300,
    },
    [theme.breakpoints.up('md')]: {
        width: 550,
    },
    [theme.breakpoints.up('lg')]: {
        width: 650,
    },
  }));

const marks = [
    {value: 1, label: 'Terrible (1)'}, 
    {value: 5, label: 'Excellent (5)'}, 
    {value: 2},
    {value: 2.5},
    {value: 3},
    {value: 3.5},
    {value: 4},
    {value: 4.5},
]

const JobRating = (props) => {

    return (
        <RatingStyled>
            <Root>
                <Slider
                    defaultValue={3}
                    marks={marks}
                    valueLabelDisplay="auto"
                    step={0.5}
                    min={1}
                    max={5}
                    value={props.value}
                    onChange={props.handleChange}
                />
            </Root>
        </RatingStyled>
    );
};

export default JobRating;