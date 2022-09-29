import * as React from 'react';
import {Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table} from '@mui/material'

function createData(id, name, age, city) {
    return { id, name, age,city};
  }

  const rows = [
    createData(1,"abcd",5,"abcd"),
    createData(2,"abcd",10,"abcd"),
    createData(3,"abcd",15,"abcd"),
    createData(4,"abcd",20,"abcd"),
    createData(5,"abcd",12,"abcd")
  ]


function ChildrenData(){
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">age&nbsp;(g)</TableCell>
            <TableCell align="right">city&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    )
}

export default ChildrenData;