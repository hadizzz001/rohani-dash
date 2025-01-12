import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export function createData(
  FullName: string,
  Phone: string,
  Email: string,
  Address: string,
  history : {
    title : string,
    id:string,
    qty: number,
    price : number,
  }[],
  id: string,
  // histroy : any
) {
  return {
    FullName,
    Phone,
    Address,
    Email,
    history,
    id
    // history: [
    //   {
    //     history.title,
    //     id,
    //     qty,
    //     price,
    //   },

    // ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.FullName}
        </TableCell>
        <TableCell align="right">{row.Phone}</TableCell>
        <TableCell align="right">{row.Email}</TableCell>
        <TableCell align="right">{row.Address}</TableCell>
        {/* <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    {/* <TableCell>id</TableCell> */}
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.title}
                      </TableCell>
                      {/* <TableCell>{historyRow.id}</TableCell> */}
                      <TableCell align="right">{historyRow.qty}</TableCell>
                      <TableCell align="right">
                        ${historyRow.price}
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// const rows = [
//   createData('Full Name', '97125122', 'email@gmail.com', 'address',[{title:'Product name',id:'fooer',qty:1,price:200},{title:'Product name',id:'fooer',qty:1,price:200}]),
//   // createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   // createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   // createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   // createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable({rows} : any) {
  console.log('rows: ', rows);
  // const rows = [
  //   rows.
  // ]
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customers</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            {/* <TableCell align="right">Name</TableCell> */}
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:any) => (
            <Row key={row.id } row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
