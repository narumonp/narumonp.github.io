<?php


$pvincephp = $_POST["province"];

$filepath = $pvincephp.'.txt';
$filename = iconv("UTF-8","windows-874",$filepath);
$documentmotto = file_get_contents($filename);
echo $documentmotto;
?>
