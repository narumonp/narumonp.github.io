<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
<script type="text/javascript" src="tableExport.js"></script>
<script type="text/javascript" src="jquery.base64.js"></script>
<script type="text/javascript" src="html2canvas.js"></script>
<script type="text/javascript" src="jspdf/libs/sprintf.js"></script>
<script type="text/javascript" src="jspdf/jspdf.js"></script>
<script type="text/javascript" src="jspdf/libs/base64.js"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dreamhome";

$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Connection failed: " . mysqli_connect_error());
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

 $query="SELECT sum(rooms) FROM propertyforrent GROUP BY type";
 $result=mysqli_query($conn, $query);


 $recordsData = array();

 while($row = mysqli_fetch_assoc($result)){
	$recordsData[] = $row;
  }

?>
<div class="container">
	<div class="row">
		<div class="btn-group pull-right" style=" padding: 10px;">
			<div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
     <span class="glyphicon glyphicon-th-list " style="color:#F85B5B;"></span> Format to export

  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">

				<li><a href="#" onclick="$('#sumproperty').tableExport({type:'csv',escape:'false'});"> <img src="images/csv.png" width="24px"> CSV</a></li>
				<li><a href="#" onclick="$('#sumproperty').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"> <img src="images/pdf.png" width="24px"> PDF</a></li>
  </ul>
</div>
		</div>
	</div>
	<div class="row" style="height:300px !important;overflow:scroll;">
						<table id="sumproperty" class="table table-striped">
				<thead>
					<tr class="warning">
						<th>SUM PROPERTY FOE RENT GROUP BY TYPES </th>
					</tr>
				</thead>
				<tbody>
				<?php foreach($recordsData as $rec):?>
					<tr>
						<td><?php echo $rec['sum(rooms)']?></td>
					</tr>
					<?php endforeach; ?>
					</tbody>
					</table>
</div>
</div>

</body>
</html>
<script type="text/javascript">
$(function(){
	$('#example').DataTable();
      });
</script>
