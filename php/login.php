<?php
	require 'conn.php';
//	if(isset($_POST['username']) && !isset($_POST['submit'])){
//		$tel=$_POST['username'];
//		$result=mysql_query("select * from user_info where tel='$tel'");
//		if(!mysql_fetch_array($result)){
//			echo 'false';	
//		}else{	
//			echo 'true';
//		};
//		
//	};
	

		if(isset($_POST['username']) && isset($_POST['password'])){
			
			$tel=$_POST['username'];
			$pass=sha1($_POST['password']);

			$result=mysql_query("select * from user_info where tel='$tel' and password='$pass'");

			if(!mysql_fetch_array($result)){
				echo false;	
			}else{	
				echo true;
			};
		}
	
	
	




	
?>