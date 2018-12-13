<?php
	require 'conn.php';
	
	if(isset($_POST['tel']) && !isset($_POST['submit'])){
		$tel=$_POST['tel'];
		$result=mysql_query("select * from user_info where tel='$tel'");
		if(!mysql_fetch_array($result)){
			echo 'true';	
		}else{	
			echo 'false';
		};
		
	};	
	if(isset($_POST['submit']) && $_POST['submit']=='注册'){
		$tel=$_POST['tel'];
		$pass=sha1($_POST['password']);
		mysql_query("insert into user_info values(null,'$tel','$pass',NOW())");
		header('location:http://10.31.155.148/dangdang--/dist/login.html');
	}

	




	
?>