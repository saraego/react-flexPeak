import React, {useState} from "react";
import { Box, Divider, Alert, TextField, Button } from "@mui/material";
import { Container } from "@mui/material";
import {Link} from "react-router-dom"
import Logo from "../../assets/logo.png";

const Login = () => {
    const [error, setError] = useState()
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    function handleSubmit(){
        if(!usuario || senha){
            setError('Usuario e senha Obrigatorios')
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

          <Divider>Informe seu <strong>Login</strong> e <strong>Senha</strong></Divider>

          <Box sx={{width: "90%",display: "flex",flexDirection: "column",margin: "0 auto",mt: 3,}}>
           { error && <Alert severity="error" sx={{mb:3}}>{error}</Alert>}
            <TextField id="outlined-basic" label="Usuario" fullWidth onChange={(e)=> {setUsuario(e.target.value)}} />
            <TextField id="outlined-basic" label="Senha"  fullWidth onChange={(e)=> {setSenha(e.target.value)}} type='password' sx={{my:4}}/>
          </Box>

          <Box sx={{mt:5, mx:'auto'}}>
            <Button variant="contained" onClick={handleSubmit}>Entrar</Button>
          </Box>
          <Box sx={{mt:5, mx:'auto'}}>
            <p >Não possui conta ? <Link style={{textDecoration: 'none', color:'black', fontWeight:500}} to={'/cadastro'}>Sign up</Link> </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
