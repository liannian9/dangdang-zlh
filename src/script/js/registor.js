define(['config'], function() {
	require(['jquery'], function() {
		//加载公用底部
		$('#footer').load('footer.html .footer_information')

		//加载完执行
		$(function() {

			require(['jqvalidate'], function() { //请求表单插件
				$(function() {
					$('#registor_form').validate({
						rules: { //规则
							tel: {
								required: true,
								mobile: true,
								remote: {
									type: 'post',
									url: 'http://10.31.155.148/dangdang--/php/registor.php'
								}
							},
							password: {
								required: true,
								minlength: 6,
								maxlength: 20,
							},
							confirm: {
								required: true,
								equalTo: '#password'
							},
							agree: {
								required: true,
							}
						},
						messages: { //失败信息
							tel: {
								required: '<span style="color:red">电话号码不能为空</span>',
								mobile: '<span style="color:red">手机号码格式错误</span>',
								remote: '<span style="color:red">电话号码已注册</span>'
							},
							password: {
								required: '<span style="color:red">密码不能为空</span>',
								minlength: '<span style="color:red">密码长度不能小于6位</span>',
								maxlength: '<span style="color:red">密码长度不能大于20位</span>',
							},
							confirm: {
								required: '<span style="color:red">密码验证不能为空</span>',
								equalTo: '<span style="color:red">密码验证输入不匹配</span>',
							},
							agree: {
								required: '<span style="color:red">请阅读条款</span>',
							}
						},
						success: function(label) { //每个表单成功执行
							label.html('<span class="ok"></span>');
						}
					})
					//自定义手机验证格式
					$.validator.addMethod('mobile', function(value, element) {
						var length = value.length;
						return this.optional(element) || (length == 11 && /^1[357]\d{9}$/.test(value));
					}, '手机号码格式错误!');

				});

			})

		})

	})

})