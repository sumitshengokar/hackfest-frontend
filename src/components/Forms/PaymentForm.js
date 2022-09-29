import { TextField } from '@mui/material';
import React ,{ useState, useEffect }from 'react'
import {AppBar} from '@mui/material'
import {Grid} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Login.css'
import MenuBar from '../navbar/MenuBar';
function PaymentForm() {
    const initialValues = { email:"",amount:"",orderType:"monthly",card: "", expiry: "", cvv: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.card) {
        errors.card = "card is required!";
      }
      if(!values.email){
        errors.email="email is required";
      }else if (!regex.test(values.email))
      {
        errors.email = "This is not a valid email format!";
      }
      if (!values.expiry) {
        errors.expiry = "expiry is required!";
      } 
      if (!values.cvv) {
        errors.cvv = "cvv is required";
      } 
      return errors;
    };
  
    return (
        
        <Grid container>
          <Grid item xs={12} sm={12} >            {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar> */}
     <MenuBar />
     </Grid>
     <Grid item xs={12} sm={12} style={{paddingTop:'6%'}}>
      <div className="container">
      
        <form onSubmit={handleSubmit}>
          <h1>StandUp Form</h1>
          
          <div className="ui divider"></div>
          <div className="ui form">
            
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </Grid>
      </Grid>
    );
}

export default PaymentForm