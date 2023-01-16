import React from "react";
import BarraSuperior from "../../components/BarraSuperior";
import { Container, Box,  } from "@mui/system";
import { Table, TableHead, TableCell, TableBody, TableRow, Button  } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Home() {
  return (
    <>
      <h1>Ola Deus, nao conversei com o senhor hoje...</h1>
      <BarraSuperior />
      <Container maxWidth='x1'>
        <Box sx={{p:3}}>
          <TableContainer component={Paper}>
              <Table sx={{minWidth:650}} aria-label='simple table'>
                <TableHead >
                  <TableCell align="right">Opções</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Data de Nascimento</TableCell>
                  <TableCell align="right">Telefone</TableCell>
                </TableHead>

                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="right"><Button><DeleteForeverIcon sx={{color:'red'}}/></Button></TableCell>
                    <TableCell align="right" component='th' scope='row'>Saraego</TableCell>
                    <TableCell align="right" component='th' scope='row'>Saraego@gmail.com</TableCell>
                    <TableCell align="right" component='th' scope='row'>12/11/1996</TableCell>
                    <TableCell align="right" component='th' scope='row'>080-1234-3216</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}

export default Home;
