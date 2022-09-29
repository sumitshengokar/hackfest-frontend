import './App.css';
import { Grid } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';
import MenuBar from './components/navbar/MenuBar';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet/>
    </Grid>
  );
}

export default App;
