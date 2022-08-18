
import * as React from "react";
  
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShieldIcon from '@mui/icons-material/Shield';

import {Link} from 'react-router-dom';


export default function Header(){
    return (
        <AppBar position="static">
          <Toolbar className="header"> 
            <ShieldIcon className="headerIcon"/>   
            <Typography variant="h6" 
              component="div" sx={{ flexGrow: 1 }}
              className="headerText">
              Security Things
            </Typography>

            <Link to="/" id="headerButton">
              <Button color="inherit" >Home</Button>
            </Link>

            <Link to="/sqlI" id="headerButton">
              <Button color="inherit" >SQL Injection</Button>
            </Link>
          </Toolbar>
        </AppBar>
    );
}