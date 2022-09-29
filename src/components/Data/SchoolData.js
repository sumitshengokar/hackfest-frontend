import * as React from 'react';
import {Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table} from '@mui/material'
import axios from 'axios';

function createData(id, name, city, priniciple) {
    return { id, name, city,priniciple};
  }

  const rows = [
    createData(1,"abcd","abcd","abcd"),
    createData(2,"abcd","abcd","abcd"),
    createData(3,"abcd","abcd","abcd"),
    createData(4,"abcd","abcd","abcd"),
    createData(5,"abcd","abcd","abcd")
  ]

  

function SchoolData(){
    const [schoolData,setSchoolData] = React.useState([]); 
    React.useEffect(()=>{
        const fetchData = async ()=>{
            const responseData = await axios.get('https://dummyapi.io/data/v1/user', {
                headers: {
                  'app-id': '63333dc1551782cefff94943' //the token is a variable which holds the token
                }
               })
               console.log("using",responseData.data.data);
               setSchoolData(responseData.data.data);
        }
       
        fetchData().then(()=>console.log("data fetched"));
    },[schoolData])
    return(
        <TableContainer component={Paper} className='table-data'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">City&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schoolData.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    )
}

export default SchoolData;