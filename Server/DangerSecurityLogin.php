<?php
    require('conect.php');
    $mysqli = conectarDB();

    $JSONData = file_get_contents("php://input");
    $dataObject = json_decode($JSONData);    
    session_start();    

    $username = $dataObject-> username;
    $password =	$dataObject-> password;
    
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password';";

    if (mysqli_multi_query($mysqli, $sql)) {
      do {
        // Store first result set
        if ($result = mysqli_store_result($mysqli)) {
          while ($row = mysqli_fetch_row($result)) {
            $resultU[] = $row;
            if($row[0] == $username && $row[1] == $password){
              echo json_encode(array('conectado'=>true,'username'=>$row[0]));
            }else{
              echo json_encode($resultU);
            }
            
          }
          mysqli_free_result($result);
        }
        // if there are more result-sets, the print a divider
        if ($result = mysqli_more_results($mysqli)) {
          echo $result;
        }
         //Prepare next result set
      } while (mysqli_next_result($mysqli));
      }
?>