import * as React from 'react';
import {Paper,TableRow,TableHead,TableContainer,TableCell,TableBody,Table} from '@mui/material'

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


function Donations(){
    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">City&nbsp;(g)</TableCell>
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
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.principle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    )
}

export default Donations;