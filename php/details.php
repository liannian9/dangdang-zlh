<?php
	require 'conn.php';
	$id=$_GET['s_id'];
	$result=mysql_query("select * from goods where s_id='$id'");	
	echo json_encode(mysql_fetch_array($result,MYSQL_ASSOC));
?>