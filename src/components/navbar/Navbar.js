import { Drawer } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {NavbarItems} from './NavbarItems';
import { useNavigate } from 'react-router';
import MenuBar from './MenuBar';



function Navbar(){
    const navigate = useNavigate();
    const drawerWidth=220;
    return(
      <div>
        
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#101F33'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Toolbar />
        <Divider />
        <List>
          {NavbarItems.map((item, index) => (
            <ListItem  key={item.id} disablePadding onClick={()=>navigate(item.route)}>
              <ListItemButton>
                <ListItemIcon sx={{'color':'white'}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={{'color':'white'}} primary={item.label} />
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      </div>
    )

}

export default Navbar;