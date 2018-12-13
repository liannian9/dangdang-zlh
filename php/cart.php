<?php
	require 'conn.php';
	//判断详情页的传输数据
	if(isset($_POST['s_id'])){
		$id=$_POST['s_id'];
		$count=$_POST['count'];
		$url=mysql_fetch_array(mysql_query("select urls from goods where s_id='$id'"),MYSQL_ASSOC);
		$price=mysql_fetch_array(mysql_query("select price from goods where s_id='$id'"),MYSQL_ASSOC);
		$title=mysql_fetch_array(mysql_query("select title from goods where s_id='$id'"),MYSQL_ASSOC);
		$url1=$url['urls'];
		$price1=$price['price'];
		$title1=$title['title'];
		
		$result1=mysql_query("select * from cart where id='$id'");
		
		if(!mysql_fetch_array($result1)){
			mysql_query("insert into cart values($id,'$url1','$title1','$price1',NOW(),'$count')");
			
		}else{
			$count_before=mysql_fetch_array(mysql_query("select count from cart where id='$id'"),MYSQL_ASSOC);
			
			$count2=$count+$count_before['count'];
			mysql_query("update cart set count='$count2' where id='$id'");
		}
	
	};
		//获取购物车页面删除的id
	if(isset($_GET['id'])){
		$id=$_GET['id'];
		$length=$_GET['length'];
	
		for($i=0;$i<$length;$i++){
			
			mysql_query("delete from cart where id='$id[$i]'");
		};
	
	};


	if(!isset($_GET['id'])&&!isset($_POST['s_id'])&& !isset($_GET['input_id'])){
		
		$result=mysql_query("select * from cart");	
		$arr=array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
		};
		echo json_encode($arr);
	}
	
	
	if(isset($_GET['input_id'])&&isset($_GET['input_num'])){
		
		$input_id=$_GET['input_id'];
		$input_num=$_GET['input_num'];
		echo 5;
		mysql_query("update cart set count='$input_num' where id='$input_id'");
	}




	
?>