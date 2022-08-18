
import * as React from "react";
import SqlCard from "./SqlInjection/SqlInjection"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SqlInfo from './SqlInjection/infoSql';
export default function SqlPage(){
    return (
    
            <div className="centerBox">
                
                <div className='mainBox'>
                    <div className="containerSQLI">
                        <h2>SQL Injection</h2>
                        <p>La inyección de código es un problema el cual todos los desarrolladores combaten diariamente para que este no dañe los sistemas que tanto les costó desarrollar, la implementación de una buena seguridad contra inyección SQL en los sistemas es una forma de mantener todo nuestro sistema seguro, una buena forma de optimizar tiempo y perfecto para evitar problemas de confidencialidad e integridad. </p>
                        <p>SQL Injection es una vulnerabilidad en nuestros sistemas que permite a los atacantes ingresar código SQL de manera malintencionada para poder manipular la base de datos del sistema, por lo que todos los datos de nuestro sistema se encuentran comprometidos por su baja seguridad. La intención de esta practica es modificar el comportamiento de las consultas que hace nuestro sistema por medio de parámetros no deseados, con esta inyección de código se pueden realizar edición, visualización, inserción y eliminación de datos en nuestra base de datos.</p>
                        <p>La inyección ocurre normalmente por el mal uso de practicas al momento de desarrollar sistemas, normalmente al solicitar a los usuarios cualquier tipo de entrada que no esta validada, permite al usuario o atacante el ingreso de nuevas peticiones en la base de datos. </p>
                    </div>

                    <SqlInfo />
                    <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                         <Typography>SQL Injection</Typography>
                     </AccordionSummary>
                        <SqlCard PHPURL="http://localhost/security/DangerSecurityLogin.php" />
                    </Accordion>
                    

                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Safe SQL</Typography>
                        </AccordionSummary>
                            <SqlCard PHPURL="http://localhost/security/login.php" maxCaracteres={14}/>
                    </Accordion>
                </div>
            </div>
    
    );
}