define(['config'], function() {
	require(['jquery'], function() {

		$('.tools').load('tools.html .public')
		$('#footer').load('footer.html .footer_information')

		//加载完成后执行
		$(function() {
			//获取用户名cookie
			require(['jqcookie'], function() {
				//cookie登录状态
				if($.cookie('username')) {
					$('.welcome .unlogin').hide().siblings().show().children('.user').html($.cookie('username'))
					$('.welcome .out').on('click', function() {
						$.cookie('username', null, {
							expires: -1
						})
						window.location.reload(true)
					})
					$('#cart_section_unlogin').hide()
					
					
					new getdata()
					
				} else {
					//不登录状态不可见数据
					$('#cart_section_unlogin').show().nextUntil('#fixedbar').hide()
					
					
				}
			})
			//结算栏固定在底部
			function fixed() {
				this.box = $('#cart_section_has .close_count')

				this.scroll()
			}
			fixed.prototype = {
				scroll: function() {
					var that = this
					var offsettop = this.box.offset().top
					$(window).on('scroll resize', function() {
						var $top = $(window).scrollTop()
						var $height = $(window).height()

						if($top + $height < offsettop + 110) {
							that.box.css({
								position: 'fixed',
								bottom: '0px',
								left: '50%',
								'z-index': 20000,
								'margin-left': '-542px'

							})
						} else {

							that.box.css({
								position: 'static',
								margin: '40px auto'

							})
						}

					})

				}

			}
			new fixed()

			//获取数据库表单拼成清单
			function getdata() {
				this.box = $('#cart_section_has .shopping_list .shopping_products .list')
				this.empty = $('#cart_section_empty')
				this.has = $('#cart_section_has')
				this.str()
			}
			getdata.prototype = {
				//从数据库获取清单
				str: function() {
					var that = this
					$.ajax({
						url: 'http://10.31.155.148/dangdang--/php/cart.php',
						dataType: 'json'
					}).done(function(data) {
						if(!data[0]) { //数据为空则显示空的标签
							that.empty.show().siblings('#cart_section_has').hide()

						} else {
							that.empty.hide().siblings('#cart_section_has').show()

							var str = ''
							$.each(data, function(index, obj) {
								var imgurl = obj.url.split(',')[0]
								var title = obj.title
								var price = obj.price
								var count = obj.count
								str += '<div class="list_show" s_id="' + obj.id + '"><div class="checkbox checkone"><a href="javascript:;" class="on"></a></div><div class="img"><img src="' + imgurl + '" alt="" /></div><div class="content"><a href="javascript:;">' + obj.title + '</a></div><div class="one_money"><span>¥' + obj.price + '</span><span class="red">限时抢</span></div><div class="count"><div class="count_box"><a href="javascript:;" class="reduce">-</a><input type="text" class="checkon" value="' + count + '" /><a href="javascript:;" class="add">+</a></div></div><div class="money_total"><span class="red">¥<span class="checked">' + obj.price + '</span></span></div><div class="delete"><a href="javascript:;">移入收藏</a><a href="javascript:;">删除</a></div></div>'

							})
							that.box.prepend(str)
							//需要拼接完执行
							new check_all();
							new remove();
							new input_num()
							new total()

						}

					})
				}
			}

			

			//数量获得焦点
			function input_num() {
				this.products_count_box = $('#cart_section_has .shopping_list .list_show .count_box input')
				this.oninput()
			}

			input_num.prototype = {
				oninput: function() {
					this.products_count_box.on('input', function() {

						var reg = /^\d+$/g
						var $num = $(this).val()
						if($num.search(reg) != -1) {
							if($num >= 99) {
								$(this).val(99)
							} else if($num <= 0) {
								$(this).val(1)
							} else {
								$(this).val($num)
							}
						} else {
							$(this).val(1)
						}
						new total()
						//修改数据库
						var $id=$(this).parents('.list_show').attr('s_id')
						var $num1=$(this).val()
						console.log($num1)
						$.ajax({
							url:'http://10.31.155.148/dangdang--/php/cart.php',
							data:{
								input_id:$id,
								input_num:$num1
							}
						})
					})

				},

			}
			//数量统计及价格统计
			function total() {
				this.checkall = $('#cart_section_has .checkall')
				this.checkall2 = $('#cart_section_has .checkall2')
				this.checkone = $('#cart_section_has .checkone')
				this.onemoney = $('body#cart .list_show .red span')
				this.total = $('body#cart .list_total .red span')
				this.subtotal = $('body#cart .subtotal .red span')
				this.products_count_box = $('#cart_section_has .shopping_list .list_show .count_box input')
				this.products_count = $('#cart_section_has .close_count .left > span .red')
				this.add = $('#cart_section_has .shopping_list .list_show .count_box >.add')
				this.reduce = $('#cart_section_has .shopping_list .list_show .count_box >.reduce')
				this.money_total()
				this.products_count_num()
			}
			total.prototype = {
				products_count_num: function() {
					var $num = 0
					this.products_count_box.each(function() {
						if($(this).parents('.list_show').find('.checkon').val() == undefined) {
							$num += 0
						} else {
							$num += +$(this).parents('.list_show').find('.checkon').val()
						}

					})
					this.products_count.html($num)
					//添加cookie
					require(['jqcookie'], function() {
						$.cookie('products', $num, {
							expires: 10
						})
						$('.tools_nav a i').text($num)
					})
	
				},


				//统计价格
				money_total: function() {
					this.price_box = $('#cart_section_has .shopping_list .list_show .one_money > span:first-child')
					this.count_box = $('#cart_section_has .shopping_list .list_show .count_box input')

					var that = this
					var $num = 0
					//每条记录的价格乘以数量
					this.onemoney.each(function() {
						var _this = $(this)
						$(this).attr('price', $(this).parents('.list_show').children('.one_money').children('span').eq(0).html().substring(1))
						$(this).attr('count', $(this).parents('.list_show').children('.count').children().children('input').val())

						$(this).html(($(this).attr('price') * $(this).attr('count')).toFixed(2))

					})
					//选中项的价格汇总
					this.onemoney.each(function() {
						if($(this).parents('.list_show').find('.checked').html() == undefined) {

							$num += 0
						} else {
							$num += +$(this).parents('.list_show').find('.checked').html()
						}
					})
					//汇总价格
					this.total.html($num.toFixed(2))
					this.subtotal.html($num.toFixed(2))

				},
			}

			//全选

			function check_all() {
				this.checkall = $('#cart_section_has .checkall')
				this.checkall2 = $('#cart_section_has .checkall2')
				this.checkone = $('#cart_section_has .checkone')
				this.onemoney = $('body#cart .list_show .red span')
				this.total = $('body#cart .list_total .red span')
				this.subtotal = $('body#cart .subtotal .red span')
				this.products_count_box = $('#cart_section_has .shopping_list .list_show .count_box input')
				this.products_count = $('#cart_section_has .close_count .left > span .red')
				this.add = $('#cart_section_has .shopping_list .list_show .count_box >.add')
				this.reduce = $('#cart_section_has .shopping_list .list_show .count_box >.reduce')

				this.add_click();
				this.reduce_click();
				this.check();

			}
			check_all.prototype = {
				//统计产品总数

				//++
				add_click: function() {
					var that = this
					var num = 0

					var val = 0
					this.add.on('click', function() {

						val = $(this).prev().val()
						val++
						if(val > 99) {
							val = 99
						}
						$(this).prev().val(val)
						new total()
						//每次点击修改数据库
						var $id=$(this).parents('.list_show').attr('s_id')
						var $num1=$(this).prev().val()
						
						$.ajax({
							url:'http://10.31.155.148/dangdang--/php/cart.php',
							data:{
								input_id:$id,
								input_num:$num1
							}
						})
					})

				},
				//--
				reduce_click: function() {

					var that = this
					this.reduce.on('click', function() {
						var val = +$(this).next().val()
						val--
						if(val < 1) {
							val = 1
						}
						$(this).next().val(val)
						new total()
						//每次点击修改数据库
						var $id=$(this).parents('.list_show').attr('s_id')
						var $num1=$(this).next().val()
						
						$.ajax({
							url:'http://10.31.155.148/dangdang--/php/cart.php',
							data:{
								input_id:$id,
								input_num:$num1
							}
						})

					})

				},

				//全选
				check: function() {
					var that = this

					//点击全选按钮
					this.checkall.on('click', function() {
						if($(this).children().attr('class') == 'on') {
							that.checkall.find('.on').removeClass('on')
							//延迟效果
							setTimeout(function() {
								that.checkall2.find('.on').removeClass('on')
								that.checkone.find('.on').removeClass('on')
								that.onemoney.removeClass('checked')
								that.products_count_box.removeClass('checkon')
							}, 200)

						} else {
							that.checkall.find('a').addClass('on')
							//延迟效果
							setTimeout(function() {
								that.checkall2.find('a').addClass('on')
								that.checkone.find('a').addClass('on')
								that.onemoney.addClass('checked')
								that.products_count_box.addClass('checkon')
							}, 200)
						}
						//为了等待延迟效果结束计算（需要that.onemoney执行完）
						setTimeout(function() {
							new total()

						}, 200)

					})
					//点击二级全选按钮
					this.checkall2.on('click', function() {
						if($(this).children().attr('class') == 'on') {
							that.checkall2.find('.on').removeClass('on')
							that.checkone.find('.on').removeClass('on')
							that.onemoney.removeClass('checked')
							that.products_count_box.removeClass('checkon')
							setTimeout(function() {
								that.checkall.find('.on').removeClass('on')

							}, 200)

						} else {
							that.checkall2.find('a').addClass('on')
							that.checkone.find('a').addClass('on')
							that.onemoney.addClass('checked')
							that.products_count_box.addClass('checkon')
							setTimeout(function() {
								that.checkall.find('a').addClass('on')

							}, 200)
						}
						new total()
					})
					//点击产品选择按钮
					this.checkone.on('click', function() {
						if($(this).children().attr('class') == 'on') {
							$(this).find('.on').removeClass('on')
							$(this).parents('.list_show').find('.checked').removeClass('checked')
							$(this).parents('.list_show').find('.checkon').removeClass('checkon')
							that.checkall2.find('.on').removeClass('on')
							setTimeout(function() {
								that.checkall.find('.on').removeClass('on')

							}, 200)

						} else {
							$(this).find('a').addClass('on')
							$(this).parents('.list_show').find('.red span').addClass('checked')
							$(this).parents('.list_show').find('.count_box input').addClass('checkon')
							if(that.checkone.size() == that.checkone.find('.on').size()) {
								that.checkall2.find('a').addClass('on')
								setTimeout(function() {
									that.checkall.find('a').addClass('on')

								}, 200)
							}
						}
						new total()
					})

				}

			}

			//删除
			function remove() {
				this.one_remove = $('#cart_section_has .shopping_list .list_show .delete a:last-child')
				this.many_remove = $('#cart_section_has .close_count .left > a')
				this.delete_line();

				this.delete_check()

			}
			remove.prototype = {
				//单行删除
				delete_line: function() {
					this.one_remove.on('click', function() {
						var arr = []
						var $delete_num = $(this).parents('.list_show').find('.checkon').val()
						var $num = $('#cart_section_has .close_count .left > span .red').html()
						arr.push($(this).parents('.list_show').attr('s_id'))
						if(confirm('请确认是否删除')) {
							require(['jqcookie'], function() {

								$.cookie('products', ($num - $delete_num), {
									expires: 10
								})
								$('.tools_nav a i').text(($num - $delete_num))
							})
							$.ajax({
								type: 'get',
								url: 'http://10.31.155.148/dangdang--/php/cart.php',
								data: {
									id: arr,
									length: arr.length
								}
							}).done(function() {
								window.location.reload(true)
							})

						}

					})

				},
				//、多选删除
				delete_check: function() {

					this.many_remove.on('click', function() {
						var $check = $('#cart_section_has .shopping_list .list_show .checkbox a.on').parents('.list_show')
						var arr = [];
						var $delete_num = 0
						$check.each(function() {
							arr.push($(this).attr('s_id'))
							$delete_num += $(this).find('.checkon').val()
						})
						var $num = $('#cart_section_has .close_count .left > span .red').html()

						if(confirm('请确认是否批量删除')) {
							require(['jqcookie'], function() {

								$.cookie('products', ($num - $delete_num), {
									expires: 10
								})
								$('.tools_nav a i').text(($num - $delete_num))
							})

							$.ajax({
								type: 'get',
								url: 'http://10.31.155.148/dangdang--/php/cart.php',
								data: {
									id: arr,
									length: arr.length
								}
							}).done(function() {
								window.location.reload(true)
							})

						}

					})

				}

			}

		})

	})

})