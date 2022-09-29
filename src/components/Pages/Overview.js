// import { Box, Grid, Tab } from '@material-ui/core';
import { Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
// import {Paper,styled} from '@material-ui/core'
import {Paper} from '@mui/material'
import {styled} from '@mui/material';
import TabsCollection from './TabsCollection';
import './Overview.css';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 100,
    width:'100%',
    lineHeight: '100px',
  }));

function Overview() {
    const [data,setData]= useState(5);
  return (

    <div className='container'>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <Item elevation={3}>
                {
                    `Total Schools Registered: ${data}`
                }

            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item elevation={3}>
                {
                    `Total Childrens : ${data}`
                }

            </Item>
        </Grid>
        <Grid item xs={4}>
            <Item elevation={3}>
                {
                    `Total fundraising done:  ${data}`
                }

            </Item>
        </Grid>
    </Grid>
    <TabsCollection/>
    </div>
    

  )
}

export default Overview;