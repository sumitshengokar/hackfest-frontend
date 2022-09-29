import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {FormControl, Select, InputLabel, MenuItem} from '@mui/material';

import axios from "axios";
import {useHistory} from 'react-router-dom';
import {Grid, Card, CardContent} from '@mui/material';
function SchoolForm() {
    const [schoolName, setSchoolName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [postalCode, setPostalCode] = React.useState("");

    const submitData = async () => {
        // let obj={
        //      "type":"Credit",
        //      "subType":transactionType,
        //      "toAccount":parseInt(account),
        //      "amount":parseInt(amount)
        // }
        // const response=await axios.post("http://localhost:8083/cash-deposit/"+account,obj);
        // console.log(response.data);
        // if(response.data===true)
        // {
        //     alert("Transaction Successful .Redirecting ....");
        //     setTimeout(()=>history.push('/home'),800);
        // }
        // else{
        //     alert("Transaction Failed");
        // }
        console.log("clicked here",schoolName,email,mobile)
    }

    const handleSchoolName=(e)=>{
       if(e.target.value.match("^[a-zA-Z]*$")!=null){
        setSchoolName(e.target.value);
       }

    }
  return (
    <div>
        <Grid style={{padding: "0px 5px 0 5px"}}>
                <Card style={{maxWidth: 600, margin: "0 auto"}}>
                    <CardContent>
                        <Typography variant="h4" color="primary">
                            School Registration
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Fill Out the below Information
                        </Typography>

                            <Grid container spacing={3}>

                                <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={schoolName} onChange={(e) => {
                                        setSchoolName(e.target.value)
                                    }} label="School Name" variant="outlined" fullWidth required/>
                                </Grid>

                                {/* <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                    <TextField  value={date} variant="outlined" id="date"
                                               label="Date" required fullWidth InputLabelProps={{shrink: true}}/>

                                </Grid> */}
                                <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={email} type='email' onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} variant="outlined" id="email" label="email" required fullWidth/>
                                </Grid>

                                <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={mobile} onChange={(e) => {
                                        setMobile(e.target.value);
                                    }} variant="outlined" id="mobile" label="mobile" required fullWidth/>
                                </Grid>

                                <Grid xs={6} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={postalCode} onChange={(e) => {
                                        setPostalCode(e.target.value);
                                    }} variant="outlined" id="postalCode" label="postalCode" required fullWidth/>
                                </Grid>

                                <Grid xs={12} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={address1} onChange={(e) => {
                                        setAddress1(e.target.value);
                                    }} variant="outlined" id="address1" label="Address 1"  fullWidth/>
                                </Grid>

                                <Grid xs={12} sm={6} item style={{marginTop: 20}}>
                                    <TextField value={address2} onChange={(e) => {
                                        setAddress2(e.target.value);
                                    }} variant="outlined" id="postalCode" label="Address 2"  fullWidth/>
                                </Grid>

                                {/* <Grid xs={6} sm={6} item style={{marginTop: 20}}>

                                    <FormControl className={classes.formControl} required Label="Select Account"
                                                 fullWidth focused variant="filled" InputLabelProps={{shrink: true}}>
                                        <InputLabel id="Account">Select Account</InputLabel>


                                        <Select
                                            labelId="Select Account"
                                            defaultValue={"XXXX-XXXX-XX"}
                                            id="customer account"
                                            open={open}
                                            onClose={handleClose}
                                            onOpen={handleOpen}
                                            value={account}
                                            onChange={handleAccount}
                                        >

                                            <MenuItem value="111">
                                                <em>111</em>
                                            </MenuItem>
                                            <MenuItem value="999">
                                                <em>999</em>
                                            </MenuItem>

                                            <MenuItem value="20">
                                                <em>20</em>
                                            </MenuItem>



                                        </Select>
                                    </FormControl>
                                </Grid> */}

                                <Grid xs={12} style={{marginTop: 20}}>
                                    <Button type="submit" variant="contained" fullWidth required onClick={submitData}>
                                        Submit
                                    </Button>
                                </Grid>

                            </Grid>

                    </CardContent>

                </Card>
            </Grid>
    </div>
  )
}

export default SchoolForm;