import React from 'react';
import { Grid } from '@mui/material';
import CommonButton from '../common/CommonButton';
import { School } from '@mui/icons-material';
import SchoolForm from '../Forms/SchoolForm';
function AddSchool(){
    const buttonStyles ={
        fontSize :20,
        fontWeight: 700,
        backgroundColor :'red'
    }
    return(
        <Grid xs={8}>
            {/* <CommonButton size="large" variant="contained" sx={buttonStyles}>
                Text
            </CommonButton> */}
            <SchoolForm />
        </Grid>
    )

}

export default AddSchool;