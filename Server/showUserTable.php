<?php


require('conect.php');
$mysqli = conectarDB(); 
    
$tableSQL = "SELECT * FROM users";
$result = mysqli_query($mysqli, $tableSQL);


while($row = $result->fetch_assoc()) {
    $myArray[] = $row;
}
echo json_encode($myArray);
?>
