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
import axios from 'axios'
function SimpleForm() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      let obj={
        "firstName":"fs",
        "lastName":"fdf",
        "dateOfBirth":"",
        "gender":"M",
        "schoolName":"default",
        "education":"sf",
        "disability":"N"
      }

      const url = "https://teamhustlers-student-service.azuremicroservices.io/api/v1/students";
      const response = await axios.post(url,obj)
        .then((res)=>{
          console.log("got",res)

        })
        .catch((error) => {
          console.error(error)
        });

       console.log("bsdhnklsdnkls",response);
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
      
        <form >
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
            
            <button onClick={handleSubmit} className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </Grid>
      </Grid>
    );
}

export default SimpleForm