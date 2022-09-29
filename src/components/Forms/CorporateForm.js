import { TextField } from '@mui/material';
import React ,{ useState, useEffect }from 'react'
import {Grid} from '@mui/material'
import './Login.css'
function CorporateForm() {
    const initialValues = {crn:"", organizationName: "", email: "", mobile: "",postalcode:"",address1:"",address2:"" };
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
      if (!values.organizationName) {
        errors.organizationName = "organizatioName is required!";
      }
      if (!values.crn) {
        errors.crn = "crn is required!";
      }
      if (!values.postalcode) {
        errors.postalcode = "postalCode is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.mobile) {
        errors.mobile = "mobile is required";
      } else if (values.mobile.length < 10) {
        errors.mobile = "Mobile must be of 10 characters";
      } else if (values.mobile.length > 10) {
        errors.mobile = "Mobile must be of 10 characters";
      }
      return errors;
    };
  
    return (
      <div className="container">
       
        <form onSubmit={handleSubmit}>
          <h1>Corporate Registration</h1>
          
          <div className="ui divider"></div>
         
            <Grid container spacing={3}>

            <Grid item xs={6} sm={6}>
              <label>CRN</label>
              <TextField
                type="text"
                name="crn"
                placeholder="organizationName"
                value={formValues.crn}
                onChange={handleChange}
                label="crn" variant="outlined" fullWidth required
              />
            
            <p>{formErrors.crn}</p>
            </Grid>
                <Grid item xs={6} sm={6}>
              <label>school Name</label>
              <TextField
                type="text"
                name="organizationName"
                placeholder="organizationName"
                value={formValues.organizationName}
                onChange={handleChange}
                label="organization Name" variant="outlined" fullWidth required
              />
            
            <p>{formErrors.organizationName}</p>
            </Grid>
            <Grid item xs={6} sm={6}>
           
              <label>Email</label>
              <TextField
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                label="email" variant="outlined" fullWidth required
              />
            
            <p>{formErrors.email}</p>
            </Grid>
            <Grid item xs={6} sm={6}>
              <label>Mobile</label>
              <TextField
                type="text"
                name="mobile"
                placeholder="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                label="mobile" variant="outlined" fullWidth required
              />
              </Grid>

              <Grid item xs={6} sm={6}>
              <label>Postal Code</label>
              <TextField
                type="text"
                name="postalcode"
                placeholder="postal code"
                value={formValues.postalcode}
                onChange={handleChange}
                label="postal code" variant="outlined" fullWidth required
              />
               <p>{formErrors.postalcode}</p>
              </Grid>

              <Grid item xs={6} sm={6}>
              <label>Address 1</label>
              <TextField
                type="text"
                name="address1"
                placeholder="address-1"
                value={formValues.address1}
                onChange={handleChange}
                label="address-1" variant="outlined" fullWidth required
              />
              </Grid>

              <Grid item xs={6} sm={6}>
              <label>Address 2</label>
              <TextField
                type="text"
                name="address-2"
                placeholder="address-2"
                value={formValues.address2}
                onChange={handleChange}
                label="address-2" variant="outlined" fullWidth required
              />
              </Grid>
            </Grid>
            <br></br>
            <button style={{justifyContent:'center'}} className="fluid ui button blue">Submit</button>
         
        </form>
      </div>
    );
}

export default CorporateForm;