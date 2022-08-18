import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function InfoSQL() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Ataques SQL Injection</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="justify">
          Normalmente, la forma mas efectiva de hacer una inyección de código es mediante la validación de la consulta del sistema como verdadera. A continuación, se explica a detalle el procedimiento.
<br/><br/>Esta query se utiliza en un sistema para validar que exista un usuario (Login) con el “username” y “password“ ingresadas: 
<br/><b>SELECT * FROM users WHERE username = ‘$username’ AND password = ‘$password’;</b>
<br/>Por lo que el texto ingresado en el input de “username” será el texto que sustituye la variable ‘$username’ en el query. 
<br /><br/>En este lenguaje de consultas (SQL) es importante saber que el símbolo “#” comenta cualquier línea de código que pongamos después de colocar el signo y también debemos de saber que el “;” es el signo que delimita un query de otro, por lo que después de colocar un punto y coma, podemos agregar cuantas consultas se nos ocurran.  
<br /><br/>Para poder burlar este sistema solo es necesario ponernos un poco creativos y visualizar un nuevo query, por lo que como atacantes tenemos que validar la query original del sistema, cerrar la querry e ingresar las consultas que querremos que se realicen a la base de datos del sistema.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>Prevención de ataques SQL</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          •	<b>Limitación de ingreso de caracteres en los inputs en los cuales el usuario coloca sus credenciales.</b> Esta buena práctica de programación hace que el usuario no pueda ingresar líneas de código que tienen muchos caracteres, por lo que un query no podrá ser ingresado en el input. Esta buena práctica se puede burlar ya que es algo que se realiza desde el frontend, por lo tanto, un usuario con algo de experiencia podría editar la cantidad de caracteres a ingresar.
<br/><br/>•<b>Filtración de caracteres ingresados.</b> Con esta acción podemos eliminar todos los caracteres que pueden ocasionar una inyección de código (/[$#’”;]/), con la eliminación de estos caracteres, nuestra base de datos no podrá realizar las peticiones maliciosas ya que no llevaran la sintaxis necesaria. Esta función también puede ser burlada si la función estuviera almacenada en el frontend. 
<br/><br/>•<b>Uso de librerías en el servidor.</b> Con estas librerías especializadas en combatir el SQL injection, podemos encontrar funcionalidades que eliminen cualquier tipo de carácter que lleve nuestro string para que a la base de datos llegue un string limpio. También hay librerías que hacen que solo se evalué solo la primera consulta que se le da al servidor.
<br/><br/>•<b>Uso de vistas para las consultas.</b> El utilizar tablas volátiles es una buena práctica al desarrollar sistemas ya que así nuestros datos originales no están expuestos. 
<br/><br/>•<b>SQLMap.</b> Es una herramienta de código abierto que automatiza los procesos de detección de SQL Injection.

          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
