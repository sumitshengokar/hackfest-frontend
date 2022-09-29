
import * as React from 'react';
import PropTypes from 'prop-types';

// import {Tab, Tabs, Box, Typography} from '@material-ui/core'
import { Tab } from '@mui/material';
import {Tabs} from '@mui/material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SchoolData from '../Data/SchoolData';
import ChildrenData from '../Data/ChildrenData';
import Donations from '../Data/Donations';




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function TabsCollection() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Box sx={{ width: '100%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{justifyContent:'center'}}>
        <Tabs style={{backgroundColor:'white'}} value={value} onChange={handleChange} aria-label="basic tabs example" centered variant='fullWidth'>
          <Tab label="Schools List" {...a11yProps(0)} />
          <Tab label="Childrens List" {...a11yProps(1)} />
          <Tab label="Total Donations" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SchoolData />
      </TabPanel>
      <TabPanel value={value} index={1}>
       <ChildrenData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Donations/>
      </TabPanel>
    </Box>
  )
}

export default TabsCollection;