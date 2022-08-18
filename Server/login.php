<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");

$method = $_SERVER['REQUEST_METHOD'];
    include "conect.php";
    $mysqli = conectarDB();
    //sleep(1);	
	$JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);    
    session_start();    
    $mysqli->set_charset('utf8');

	    
    $username = $dataObject-> username;
    $password =	$dataObject-> password;

    $username = str_replace(' ', '-', $username);
    $password = str_replace(' ', '-', $password);
    
    $username = preg_replace('/[^A-Za-z0-9\-]/', '', $username);
    $password = preg_replace('/[^A-Za-z0-9\-]/', '', $password);



    
  if ($nueva_consulta = $mysqli->prepare("SELECT *  FROM usersview WHERE username = ?")) {
        $nueva_consulta->bind_param('s', $username);
        $nueva_consulta->execute();
        $resultado = $nueva_consulta->get_result();
        if ($resultado->num_rows == 1) {
            $datos = $resultado->fetch_assoc();
             $encriptado_db = $datos['password'];
            if ($password == $encriptado_db)
            {
                $_SESSION['username'] = $datos['username'];
                echo json_encode(array('conectado'=>true) );
              }

               else {

                 echo json_encode(array('conectado'=>false));
                    }
        }
        else {
              echo json_encode(array('conectado'=>false, 'error' => 'El usuario no existe.'));
        }
        $nueva_consulta->close();
      }

$mysqli->close();
?>