



<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webtech";

$cusID = $_POST["incustomerID"];
$citID = $_POST["incitizenID"];
$firname = $_POST["infirstname"];
$lasname = $_POST["inlastname"];



try{
  $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,$password);

  $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  $sql = "INSERT INTO customers (customerID, citizenID,firstname,lastname)
  VALUES($cusID,$citID,'$firname','$lasname')";


  $conn->exec($sql);
  echo("New record created successfully");
  }

catch(PDOException $e){
  echo $sql."<br>".$e->getMessage();
}

$conn = null;

?>
