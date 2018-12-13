define(['config'], function() {
	require(['jquery'], function() {
		$('#footer').load('footer.html .footer_information')

		//加载完执行
		$(function() {
			//点击切换登录页面
			$('.tab a').on('click', function() {
				$(this).addClass('dis').siblings('a').removeClass('dis')
				$('.info_inner span').eq($(this).index()).addClass('dis').siblings('span').removeClass('dis')
				console.log($(this).index())
				$('.tab_form>form').eq($(this).index()).addClass('dis').siblings('form').removeClass('dis')
			})

			;
			(function($) {
				var $user = $('#login_body .password_login .username input');
				var $user_box = $('#login_body .password_login .username')
				var $tip = $('#login_body .password_login .remind')
				var $pass = $('#login_body .password_login .password input');
				var $pass_box = $('#login_body .password_login .password')
				var $sub = $('#login_body .password_login .submit a');

				var $form = $('#login_form');
				var $user_stop = true;
				var $pass_stop = true;
				//设定
				$pass.attr('maxlength', 20)
				$user.attr('maxlength', 40)
				//用户获得失去焦点
				$user.on('focus', function() {
					$tip.eq(0).html('请输入邮箱/昵称/手机号码').css('color', 'grey')
					$user_box.css('border-color', 'grey')
				})

				$user.on('blur', function() {
					$tip.eq(0).html('')
				})
				//密码获得失去焦点
				$pass.on('focus', function() {
					$tip.eq(1).html('请填写长度为6-20个字符的用户密码').css('color', 'grey')
					$pass_box.css('border-color', 'grey')
				})
				$pass.on('blur', function() {
					$tip.eq(1).html('')
				})
				//点击提交
				$sub.on('click', function() {
					//用户名为空
					if($user.val() == '') {
						$tip.eq(0).html('请输入邮箱/昵称/手机号码').css('color', 'red')
						$user_box.css('border-color', 'red')
						$user_stop = false
					} else {

						$user_stop = true
					}
					if($pass.val() == '') {
						$tip.eq(1).html('请输入您的登录密码').css('color', 'red')
						$pass_box.css('border-color', 'red')
						$pass_stop = false
					} else {
						$pass_stop = true
					}

					if($user_stop && $pass_stop) {
						//正常登录传值给后端对比
						$.ajax({
							type: "post",
							url: "http://10.31.155.148/dangdang--/php/login.php",
							data: {
								username: $user.val(),
								password: $pass.val()
							}

						}).done(function(data) {
							//用户名密码正确
							if(data) {
								//								
								//创建用户名cookie
								require(['jqcookie'], function() {
									console.log(1)
									console.log($user.val(), )
									$.cookie('username', $user.val(), {
										expires: 10
									})
									//跳转

									setTimeout(function() {
										console.log(2)
																			window.location.href = 'http://10.31.155.148/dangdang--/src/index.html'
									}, 10)
								})

							} else { //用户名密码不正确

								$tip.eq(0).html('请输入您输入的用户名不存在 <a href="http://10.31.155.148/dangdang--/src/registor.html">免费注册</a>').css('color', 'red')
								$user.val('')
								$pass.val('')
							}
						})

					}

				})

			})(jQuery)

		})

	})

})