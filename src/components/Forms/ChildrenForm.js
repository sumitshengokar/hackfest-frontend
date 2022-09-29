import { TextField } from '@mui/material';
import React ,{ useState, useEffect }from 'react'
import {Grid} from '@mui/material'
import {FormControl, Select,InputLabel,MenuItem} from '@mui/material';
import './Login.css'
import { Label, LineAxisOutlined } from '@mui/icons-material';
import axios from "axios";


function ChildrenForm() {
    const initialValues = { firstName: "", lastName: "", gender: "",dob:"",schoolName:"",disability:"",education:"",address1:"",address2:"",address3:"",postalcode:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    // const handleClick=async(e)=>{
    //   e.preventDefault();
    //   let obj={
    //     "firstName":initialValues.firstName,
    //     "lastName":initialValues.lastName,
    //     "dateOfBirth":initialValues.dob,
    //     "gender":initialValues.gender,
    //     "schoolName":"default",
    //     "education":initialValues.education,
    //     "disability":initialValues.disability

    //   }

    //   const url = "https://teamhustlers-student-service.azuremicroservices.io/api/v1/students";
    //   const response = await axios.post(url,obj)
    //     .then((res)=>{
    //       console.log("got",res)

    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    //    };
    //    console.log("response",response);

    // }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      let obj={
        "firstName":initialValues.firstName,
        "lastName":initialValues.lastName,
        "dateOfBirth":initialValues.dob,
        "gender":initialValues.gender,
        "schoolName":"default",
        "education":initialValues.education,
        "disability":initialValues.disability

      }

      // const url = "https://teamhustlers-student-service.azuremicroservices.io/api/v1/students";
      // const response = await axios.post(url,obj)
      //   .then((res)=>{
      //     console.log("got",res)

      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
      //  });
      // console.log(response);

      
      
  //     fetch("https://teamhustlers-student-service.azuremicroservices.io/api/v1/students",{
  //     method:"POST",
  //     headers:{"Content-Type":"application/json"},
  //     body:JSON.stringify(obj)

  // }).then(()=>{
  //   console.log("New User added")
  // })
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
      if (!values.schoolName) {
        errors.schoolName = "schoolName is required!";
      }
      if (!values.firstName) {
        errors.firstName = "firstName is required!";
      }
      if (!values.secondName) {
        errors.secondName = "secondName is required!";
      }
      if (!values.postalcode) {
        errors.postalcode = "postalCode is required!";
      }
      if (!values.gender) {
        errors.gender = "Gender is required!";
      }
      if (!values.disability) {
        errors.gender = "Gender is required!";
      }
      if (!values.mobile) {
        errors.mobile = "Mobilr is required";
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
          <h1>Student Registration</h1>
          
          <div className="ui divider"></div>
         
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
              <label>first Name</label>
              <TextField
                type="text"
                name="firstName"
                placeholder="firstName"
                value={formValues.firstName}
                onChange={handleChange}
                label="firstName" variant="outlined" fullWidth required
              />
            
            <p>{formErrors.firstName}</p>
            </Grid>
            <Grid item xs={6} sm={6}>
           
              <label>last Name</label>
              <TextField
                type="text"
                name="lastName"
                placeholder="lastName"
                value={formValues.lastName}
                onChange={handleChange}
                label="lastName" variant="outlined" fullWidth required
              />
            
            <p>{formErrors.lastName}</p>
            </Grid>
            <Grid item xs={6} sm={6}>
            <label> Gender  </label>
                <br></br>
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={handleChange}
                label="gender" variant="outlined" fullWidth required
              />
              {" "}

             <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={handleChange}
                label="gender" variant="outlined" fullWidth required
              />
              <p>{formErrors.gender}</p>
              </Grid>

              <Grid item xs={6} sm={6}>
                <label> Disability  </label>
                <br></br>
              <label>Yes</label>
              <input
                type="radio"
                name="disability"
                value="Y"
                onChange={handleChange}
                label="disability" variant="outlined" fullWidth required
              />
              {" "}

             <label>No</label>
              <input
                type="radio"
                name="disability"
                value="N"
                onChange={handleChange}
                label="disability" variant="outlined" fullWidth required
              />
              <p>{formErrors.disability}</p>
              </Grid>

              {/* <Grid item xs={6} sm={6}>
              <label>School Name</label>
              <FormControl  required Label="Select Account" fullWidth focused variant="filled" InputLabelProps={{ shrink: true }} > 
                    <InputLabel id="school" >Select Account</InputLabel>
                         <Select
                                        labelId="Select School"
                                        defaultValue={"XXXX-XXXX-XX"}
                                        id="school"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={formValues.schoolName}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={formValues.schoolName}>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={formValues.schoolName}>
                                            <em>School 1</em>
                                        </MenuItem>
                                        <MenuItem value={formValues.schoolName}>
                                            <em>School 2</em>
                                        </MenuItem>

                                     

                                    </Select>
                                </FormControl>
                                
              </Grid> */}
              <Grid item xs={6} sm={6}>
              <label>Date of Birth </label>
              <TextField
                type="date"
                name="dob"
                placeholder="date of birth "
                value={formValues.dob}
                onChange={handleChange}
                 variant="outlined" fullWidth required
              />
              </Grid>

              <Grid item xs={6} sm={6}>
              <label> education </label>
              <TextField
                type="text"
                name="education"
                placeholder="education "
                value={formValues.education}
                onChange={handleChange}
                 label="education" variant="outlined" fullWidth required
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

              {/* <Grid item xs={6} sm={6}>
              <label>Address 2</label>
              <TextField
                type="text"
                name="address-2"
                placeholder="address-2"
                value={formValues.address2}
                onChange={handleChange}
                label="address-2" variant="outlined" fullWidth required
              />
              </Grid> */}
            </Grid>
            <br></br>
            <button style={{justifyContent:'center'}}  className="fluid ui button blue">Submit</button>
         
        </form>
      </div>
    );
}

export default ChildrenForm;