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
function Login() {
    const initialValues = { username: "", email: "", password: "" };
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
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
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
          <h1>Login Form</h1>
          
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <TextField
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
                label="Username" variant="outlined" fullWidth required
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Email</label>
              <TextField
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                label="email" variant="outlined" fullWidth required
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Password</label>
              <TextField
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                label="password" variant="outlined" fullWidth required
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </Grid>
      </Grid>
    );
}

export default Login