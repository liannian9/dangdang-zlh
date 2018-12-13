define(['config'], function() {
	require(['jquery'], function() {

		$('.details_search').load('search.html')
		$('.details_nav').load('nav.html')
		$('.tools').load('tools.html .public')
		$('#footer').load('footer.html .footer_information')
		
		//页面渲染结束执行
		$(function() {
			//获取cookie 产品数量及用户名cookie
			(function($) {
				require(['jqcookie'], function() {
					if($.cookie('username')) {
						$('.welcome .unlogin').hide().siblings().show().children('.user').html($.cookie('username'))
						$('.welcome .out').on('click', function() {
							$.cookie('username', null, {
								expires: -1
							})
							window.location.reload(true)
						})
						if($.cookie('products')) {
						$('.tools_nav a i').text($.cookie('products'))
						$('.h_search .search .cart i').text($.cookie('products'))
					} else {
						$('.tools_nav a i').text(0)
						$('.h_search .search .cart i').text(0)
					}
						
					}
					

				})

			})(jQuery)

			//获取id值传给后端获取数据库数据
			function ask() {
				this.id = window.location.search.substring(1).split('=')[1]
				this.s_pic = $('#details_sections .pic_show .small_box li a img')
				this.mid_pic = $('#details_sections .pic_show .mid_pic img')
				this.b_pic = $('#details_sections .pic_show .bf img')
				this.title = $('#details_sections .information_box .main h2')
				this.arrow = $('#details_sections .pic_show .small_pic > a')
				this.price = $('#details_sections .information_box .price_now .dd_price')
				this.php()
			}
			ask.prototype = {
				php: function() {
					var that = this
					$.ajax({
						url: 'http://10.31.155.148/dangdang--/php/details.php',
						data: {
							s_id: this.id
						},
						dataType: 'json',
					}).done(function(data) {
						that.title[0].childNodes[2].nodeValue = ' ' + data["title"]
						that.price[0].childNodes[2].nodeValue = ' ' + data["price"]
						var arr = data["urls"].split(',')
						that.mid_pic.attr('src', arr[0])
						that.b_pic.attr('src', arr[0])
						
						that.s_pic.each(function() {
							var index = $(this).index('#details_sections .pic_show .small_box li a img')

							$(this).attr('src', arr[index-2])

						})

					})

				}

			}

			new ask()

			//点击加入购物车将产品标题，图片及价格传入数据库及更新cookie

			function send() {
				this.sub_cart = $('#details_sections .information_box .buy_info .buy_box a:first-child')
				this.id = window.location.search.substring(1).split('=')[1]
				this.num = $('#details_header .tools_nav a i')
				this.num1 = $('#details_header .h_search .search .cart i')

				this.click()

			}

			send.prototype = {

				click: function() {
					var that = this
					this.sub_cart.on('click', function() {
						var $count = $('#details_sections .information_box .buy_info .num input').val()
						//更新cookie
						require(['jqcookie'], function() {
							var $cookie_num = $('.tools_nav a i').text()
							$('.tools_nav a i').text((+$cookie_num) + (+$count))
							$('.h_search .search .cart i').text((+$cookie_num) + (+$count))
							$.cookie('products', (+$cookie_num) + (+$count), {
								expires: 10
							})

						})
						//传递id及产品数量给后端
						$.ajax({
							type: 'post',
							url: 'http://10.31.155.148/dangdang--/php/cart.php',
							data: {
								s_id: that.id,
								count: $count
							},
							dataType: 'json'
						})

					})

				}

			}

			new send()

			//放大镜
			function glass() {
				this.mid_box = $('#details_sections .pic_show .mid_pic')
				this.mid_pic = $('#details_sections .pic_show .mid_pic img')
				this.sglass = $('#details_sections .pic_show .mid_pic .xf')
				this.bglass = $('#details_sections .pic_show .bf')
				this.b_pic = $('#details_sections .pic_show .bf img')
				this.s_pic = $('#details_sections .pic_show .small_box li a')
				this.left = $('#details_sections .pic_show .small_pic .left')
				this.right = $('#details_sections .pic_show .small_pic .right')
				this.pic_show = $('#details_sections .pic_show')
				this.ul = $('#details_sections .pic_show .small_box ul')
				this.see_box = $('#details_sections .pic_show .small_box .see_box')
				this.s_li = $('body#details .large_box .banner_box li')
				this.large_s_pic = $('body#details .large_box .banner_box li img')
				this.box = $('body#details .large_box')
				this.l_pic = $('body#details .large_box .pic_box img')
				this.stop = true;
				this.num = 0;
				this.width = this.ul.eq(0).outerWidth();
				this.create();
				this.over();
				this.hover();
				this.left_click();
				this.right_click();
				this.click();
			}
			glass.prototype = {
				//点击出现巨型放大镜
				click: function() {
						var that = this
						this.mid_box.on('click', function() {
							that.box.css('display', 'block')
							var $src = $(this).children('img').attr('src')
							that.l_pic.attr('src', $src)
							that.large_s_pic.each(function() {

								if($(this).attr('src') == $src) {

									var $index = $(this).index('body#details .large_box .banner_box li img')
									that.s_li.eq($index).addClass('active').siblings('body#details .large_box .banner_box li').removeClass('active')
								}

							})

						})
				},
				//在原来ul前后各创建一个克隆ul，
				create: function() {
					var that = this
					this.ul.eq(0).clone(true).appendTo(this.see_box)
					this.ul.eq(this.ul.size() - 1).clone(true).prependTo(this.see_box)
					this.see_box.width($('#details_sections .pic_show .small_box ul').size() * this.width)
					this.see_box.css({
						position: 'absolute',
						left: -this.width
					})
				},
				//小放大镜移动
				move: function(ev) {
					var x = ev.pageX - this.pic_show[0].offsetLeft - this.sglass.outerWidth() / 2
					var y = ev.pageY - this.pic_show[0].offsetTop - this.sglass.outerHeight() / 2
					if(x <= 0) {
						x = 0
					} else if(x >= this.mid_box[0].offsetWidth - this.sglass.outerWidth()) {
						x = this.mid_box[0].offsetWidth - this.sglass.outerWidth()
					}
					if(y <= 0) {
						y = 0
					} else if(y >= this.mid_box[0].offsetHeight - this.sglass.outerHeight()) {
						y = this.mid_box[0].offsetheight - this.sglass.outerHeight()
					}
					this.sglass.css({
						left: x,
						top: y,
					})
					this.b_pic.css({
						left: -x * this.bglass.outerHeight() / this.sglass.outerHeight(),
						top: -y * this.bglass.outerHeight() / this.sglass.outerHeight(),
					})
				},
				//鼠标经过移出中图小放大镜及大放大镜出现隐藏
				over: function() {
					var that = this
					this.mid_box.on('mouseover', function(ev) {
						that.sglass.css({
							display: 'block',

						})
						that.bglass.css({
							display: 'block'
						})
						$(this).on('mousemove', function(ev) {
							that.move(ev)
						})

					})
					this.mid_box.on('mouseout', function() {
						that.sglass.css({
							display: 'none',

						})
						that.bglass.css({
							display: 'none'
						})
					})
				},
				//鼠标划过小图中图及大图更换图片
				hover: function() {
					var that = this
					this.s_pic.hover(function() {
						that.b_pic.attr('src', $(this).children('img').attr('src'))
						that.mid_pic.attr('src', $(this).children('img').attr('src'))

					}, function() {

					})
				},
				//点击左鼠标
				left_click: function() {
					var that = this
					this.left.on('click', function() {
						if(that.stop) {
							that.num--;
							that.stop = false
							that.tab();
						}
					})
				},
				//点击右鼠标
				right_click: function() {
					var that = this
					this.right.on('click', function() {
						if(that.stop) {
							that.num++;
							that.stop = false
							that.tab();
						}
					})

				},
				//轮播
				tab: function() {
					var that = this
					this.see_box.animate({
						left: -(this.num + 1) * this.width,
					}, 200, function() {
						that.position();
						that.stop = true
					})

				},
				//定位移动
				position: function(obj) {
					if(this.num < 0) {
						this.num = this.ul.size() - 1;
					} else if(this.num > this.ul.size() - 1) {
						this.num = 0;
					}
					this.see_box.css({
						left: -(this.num + 1) * this.width
					})
				}

			}

			new glass()

			//巨型放大镜（未完成）
			function l_glass() {
				this.close = $('body#details .large_box .close a')
				this.top = $('body#details .large_box .banner_box .top')
				this.bottom = $('body#details .large_box .banner_box .bottom')
				this.left = $('body#details .large_box .pic_box .left')
				this.right = $('body#details .large_box .pic_box .right')
				this.s_pic = $('body#details .large_box .banner_box li')
				this.move_box = $('body#details .large_box .banner_box .large_see_box .box')
				this.ul = $('body#details .large_box .banner_box ul')
				this.box = $('body#details .large_box')
				this.l_pic = $('body#details .large_box .pic_box img')
				this.height = this.ul.eq(0).outerHeight()
				this.boxclose();
				this.scroll();
				this.img_tab();
				this.index = 0;
				this.stop = true;
			}
			l_glass.prototype = {
				boxclose: function() {
					var that = this
					this.close.on('click', function() {
						that.box.css('display', 'none')
					})
				},
				img_tab: function() {
					var that = this
					this.s_pic.on('mouseover', function() {
						$src = $(this).children().children('img').attr('src')
						$(this).addClass('active').siblings('body#details .large_box .banner_box li').removeClass('active')
						that.l_pic.attr('src', $src)
						that.num = $(this).index('.banner_box li')

					})
				},
				box_position: function() {
					this.box.css({
						left: $(window).scrollLeft() + ($(window).width() - this.box.outerWidth()) / 2,
						top: $(window).scrollTop() + ($(window).height() - this.box.outerHeight()) / 2
					})
				},
				scroll: function() {
					var that = this
					this.box_position()
					$(window).on('scroll', function() {
						that.box_position()
					})
					$(window).on('resize', function() {
						that.box_position()
					})
				}

			}
			new l_glass()
		})
	})

})