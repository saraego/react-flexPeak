import React, {useState} from "react";
import { Box, Divider, Alert, TextField, Button } from "@mui/material";
import { Container } from "@mui/material";
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png";

const Cadastro = () => {
    const [error, setError] = useState()
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    function handleSubmit(){
        if(!usuario || senha){
            setError('Preencha todos os campos')
            return
        }
    }

  return (
    <div className="App">
      <Container maxWidth="xs" sx={{ pt: 20 }}>
        <Box sx={{ display: "flex", flexDirection: "column", boxShadow: 4, pb: 4 }}>
          <Box sx={{ maxWidth: "80%", width: "300px", margin: "0 auto", mt: 5 }}>
            <img src={Logo} alt="Logo login" style={{ width: "100%" }} />
          </Box>

          <Divider> <strong>CADASTRE-SE</strong> </Divider>

          <Box sx={{width: "90%",display: "flex",flexDirection: "column",margin: "0 auto",mt: 3,}}>
           { error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
            <TextField id="outlined-basic" label="Nome" fullWidth onChange={(e)=> {setUsuario(e.target.value)}} sx={{my:1}} />
            <TextField id="outlined-basic" label="Email"  fullWidth onChange={(e)=> {setSenha(e.target.value)}} type='email' sx={{my:1}}/>
            <TextField id="outlined-basic" label="Senha"  fullWidth onChange={(e)=> {setSenha(e.target.value)}} type='password' sx={{my:1}}/>
            <TextField id="outlined-basic" label="Repeti senha"  fullWidth onChange={(e)=> {setSenha(e.target.value)}} type='password' sx={{my:1}}/>
          </Box>

          <Box sx={{mt:5, mx:'auto'}}>
            <Button variant="contained" onClick={handleSubmit}>Criar conta</Button>
          </Box>
          <Box sx={{mt:5, mx:'auto'}}>
            <p >Já possui conta ? <Link style={{textDecoration: 'none', color:'black', fontWeight:500}} to={'/login'}>Sing In</Link> </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cadastro;
