import imagem from "./logo.png"
import "./styles.scss"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {IconButton, Paper}  from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));






export default function Header(){
    return(
        
        <div className="header">
           
          <Grid container spacing={2}>
              <Grid item xs={3}>
                <img src={imagem}></img>
              </Grid>
              <Grid item xs={5}>
                
                 <Paper> 
                    <Grid container spacing={2}>                 
                    <Grid item xs={10}>
                      <InputBase
                        placeholder="Pesquisar produtos..."
                        inputProps={{ 'aria-label': 'Pesquisar produtos...' }} 
                      />
                      </Grid>
                      <Grid item xs={2}>
                      <IconButton type="button"  aria-label="search" >
                        <SearchIcon />
                      </IconButton>
                      </Grid>
                    </Grid>
                  </Paper>
          

                
                
              </Grid>
              <Grid item xs={3} alignContent="flex-end">
               <a href="https://google.com.br"> cadastre-se </a> 
               
             
              <button className="button1">Entrar</button>
               
              </Grid>
              <Grid item xs={1}>
              <IconButton aria-label="cart">
                 <StyledBadge badgeContent={4} color="secondary">
                 <ShoppingCartIcon />
                  </StyledBadge>
              </IconButton>
               
              </Grid>
          </Grid>
          

    </div>
    
    )
}

