import React, {useState} from "react"
import { Link } from 'react-router-dom';
import { Box } from "@mui/system"
import { AppBar, Toolbar, Typography, Button , Drawer, IconButton, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function BarraSuperior(){
    const [menuAberto, setMenuAberto] = useState(false)

    const itensMenu = [
        {
            texto: 'Inicio',
            icone: (<HomeIcon/>),
            to: '/inicio'
        },
        {
            texto: 'Cadastro de pessoas',
            icone: (<PersonAddIcon/>),
            to: '/cadastro'
        }
    ]

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <MenuIcon sx={{cursor: 'pointer'}} onClick={(e)=> {setMenuAberto(true)}} />
                    <Typography variant="h6" component="div" sx={{flexGrow:1}}> 
                    </Typography>
                    <Button color="inherit">Sair</Button>
                </Toolbar>


                <Drawer anchor="left" open={menuAberto}>
                    <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px:[1]}}>
                        <IconButton edge='start' onClick={(e)=> {setMenuAberto(false)}}>
                          <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>

                    <List sx={{width:250}}>
                        {itensMenu.map((itens, i) => (
                            <Link style={{color:'black', textDecoration:'none'}} key={i} to={itens.to} className="menuLink">
                                <ListItemButton>
                                    <ListItemIcon >{itens.icone}</ListItemIcon>
                                    <ListItemText  primary={itens.texto}/>
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
        </Box>
    )
}


export default BarraSuperior