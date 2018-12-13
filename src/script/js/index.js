define(['config'], function() {
	require(['jquery'], function() {
		//首页共用部分引用
		//搜索栏搜索框
		$('.index_search').load('search.html')
		//首页导航
		$('.index_nav').load('nav.html')
		//首页搜索栏上工具栏
		$('.tools').load('tools.html')
		//底部
		$('#footer').load('footer.html')

		//加载完执行
		$(function() {

			//获取购物车及用户名cookie

			require(['jqcookie'], function() {
				function getcookie() {
					this.fn()
				}
				getcookie.prototype = {
					fn: function() {
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
							$('#index_sidebar_right .top a em').text($.cookie('products'))

						} else {
							$('.tools_nav a i').text(0)
							$('.h_search .search .cart i').text(0)
							$('#index_sidebar_right .top a em').text(0)
						}
						}

						
					}
				}
				new getcookie()

			})

			//公用定义函数 tab切换
			function tab(minbox, tabbox) {
				this.minbox = $(minbox)
				this.tabbox = $(tabbox)
				this.over(minbox, tabbox);
			}
			tab.prototype = {
				over: function(minbox, tabbox) {
					var that = this
					var timer = null
					this.minbox.on('mouseover', function() {
						var _this = $(this)
						timer = setInterval(function() {
							_this.addClass('on').siblings(minbox).removeClass('on')
							that.tabbox.eq(_this.index(minbox)).show().siblings(tabbox).hide()
						}, 300)
					})
					this.minbox.on('mouseout', function() {
						clearInterval(timer)
					})

				}
			}
			//公用定义函数幻灯片切换加定时
			function slider_tab(obj) {
				this.ols = $(obj.circle);
				this.ul = $(obj.movebox);
				this.uls = $(obj.movechild);
				this.left = $(obj.left);
				this.right = $(obj.right);
				this.banner = $(obj.bannerbox);
				this.width = this.uls.eq(0).outerWidth()
				this.num = 0;
				this.stop = true;
				this.circle(obj);
				this.left_click(obj);
				this.right_click(obj);
				this.timer(obj);

			}
			slider_tab.prototype = {
				circle: function(obj) { //经过小圆
					var that = this
					this.uls.eq(0).clone(true).appendTo(this.ul)
					this.uls.eq(this.uls.size() - 1).clone(true).prependTo(this.ul)
					this.ols.css('cursor', 'pointer')
					this.ul.width($(obj.movechild).size() * this.width)
					this.ul.css({
						position: 'absolute',
						left: -this.width
					})
					this.ols.on('mouseover', function() {

						var $num = $(this).index(obj.circle) + 1
						$(this).addClass('on').siblings(obj.circle).removeClass('on')
						that.ul.animate({
							left: '-' + $num * that.width + 'px'
						})
						that.num = $(this).index(obj.circle)
					})
				},
				left_click: function(obj) {
					var that = this

					this.left.on('click', function() {
						if(that.stop) {
							that.num--;
							that.stop = false
							that.ols.eq(that.num).addClass('on').siblings(obj.circle).removeClass('on')
							if(that.num < 0) {
								that.ols.eq(that.ols.size() - 1).addClass('on').siblings(obj.circle).removeClass('on')
							}
							that.tab();
						}
					})
				},
				right_click: function(obj) {
					var that = this
					this.right.on('click', function() {
						if(that.stop) {
							that.num++;
							that.stop = false
							that.ols.eq(that.num).addClass('on').siblings(obj.circle).removeClass('on')
							if(that.num > that.ols.size() - 1) {
								that.ols.eq(0).addClass('on').siblings(obj.circle).removeClass('on')
							}
							that.tab();
						}
					})

				},
				timer: function(obj) {
					var that = this
					var banner_timer = setInterval(function() {
						that.num++;
						that.ols.eq(that.num).addClass('on').siblings(obj.circle).removeClass('on')
						if(that.num > that.ols.size() - 1) {
							that.ols.eq(0).addClass('on').siblings(obj.circle).removeClass('on')
						}
						that.tab();
					}, 2000)
					this.banner.hover(function() {
						clearInterval(banner_timer)
						that.left.show()
						that.right.show()

					}, function() {
						that.left.hide()
						that.right.hide()
						banner_timer = setInterval(function() {
							that.num++;
							that.ols.eq(that.num).addClass('on').siblings(obj.circle).removeClass('on')
							if(that.num > that.ols.size() - 1) {
								that.ols.eq(0).addClass('on').siblings(obj.circle).removeClass('on')
							}
							that.tab();
						}, 2000)
					})

				},
				tab: function(obj) {
					var that = this
					this.ul.stop().animate({
						left: -(this.num + 1) * this.width,
					}, 200, function() {
						that.position();
						that.stop = true
					})

				},
				position: function(obj) {
					if(this.num < 0) {
						this.num = this.ols.size() - 1;
					} else if(this.num > this.ols.size() - 1) {
						this.num = 0;
					}
					this.ul.css({
						left: -(this.num + 1) * this.width
					})
				}

			}

			//首页顶部广告js
			function h_ad() {
				this.timer();
			}
			h_ad.prototype = {
				timer: function() {
					$('.h_ad').height('300');
					setTimeout(function() {
						$('.h_ad').animate({
							height: 200,
						}, 'slow')
					}, 2000)
				}
			}
			new h_ad();
			//首页section4 左侧二级导航
			function sub_nav() {
				this.li = $('#index_section .section_4 .goods_nav li');
				this.sub = $('#index_section .section_4 .sub_nav')
				this.over();
			}
			sub_nav.prototype = {
				over: function() {
					var that = this
					this.li.hover(function() {
						$(this).addClass('active').siblings('.goods_nav li').removeClass('active')
						that.sub.eq($(this).index('.goods_nav li')).css({
							display: 'block'
						}).siblings('.sub_nav').css({
							display: 'none'
						})
					}, function() {
						$(this).removeClass('active')
						that.sub.eq($(this).index('.goods_nav li')).css({
							display: 'none'
						})
					})
					this.sub.hover(function() {
						that.li.eq($(this).index('.sub_nav')).addClass('active').siblings('.goods_nav li').removeClass('active')
						$(this).css({
							display: 'block'
						}).siblings('.sub_nav').css({
							display: 'none'
						})
					}, function() {
						$(this).css({
							display: 'none'
						})
						that.li.eq($(this).index('.sub_nav')).removeClass('active')
					})
				}
			}
			new sub_nav();

			//首页section4 大轮播 透明度切换
			
			function b_banner() {
				this.cir_lis = $('.section_4 .b_banner .circle li');
				this.pic_lis = $('.section_4 .b_banner .pic li');
				this.banner = $('.section_4 .b_banner');
				this.left = $('.section_4 .b_banner .left');
				this.right = $('.section_4 .b_banner .right');
				this.num = 0;
				this.over_ol();
				this.left_click();
				this.right_click();
				this.b_timer(this.banner);
				
			}
			b_banner.prototype = {
			
				b_timer: function(obj) {
					var that=this
					clearInterval(obj.tabtimer)
					obj.tabtimer = setInterval(function() {
						that.num++
							if(that.num > 7) {
								that.num = 0
							}
						that.tab()
					}, 2000)
					this.banner.hover(function() {
						clearInterval(obj.tabtimer)
						that.left.animate({
							left: 0
						})
						that.right.animate({
							right: 0
						})
					}, function() {
						obj.tabtimer = setInterval(function() {
							that.num++
								if(that.num > 7) {
									that.num = 0
								}
							that.tab()
						}, 2000)
						that.left.animate({
							left: -46
						})
						that.right.animate({
							right: -46
						})
						tab_timer = setInterval(that.timer, 2000)
					})

				},
				tab: function() {
					this.cir_lis.eq(this.num).addClass('bg').siblings('li').removeClass('bg');
					this.pic_lis.eq(this.num).animate({
						opacity: 1
					}).siblings('li').animate({
						opacity: 0
					})

				},

				over_ol: function() { //经过小圆
					var that = this
					this.cir_lis.on('mouseover', function() {
						$(this).addClass('bg').siblings('li').removeClass('bg');
						that.pic_lis.eq($(this).index('.circle li')).animate({
							opacity: 1
						}).siblings('li').animate({
							opacity: 0
						})
						that.num = $(this).index('.circle li')
					})
				},
				left_click: function() {
					var that = this
					this.left.on('click', function() {
						that.num--
							if(that.num < 0) {
								that.num = 7
							};
						that.tab();

					})
				},
				right_click: function() {
					var that = this
					this.right.on('click', function() {
						that.num++
							if(that.num > 7) {
								that.num = 0
							}
						that.tab();

					})
				},

			}

			new b_banner();
			//首页section4 右侧活动切换

			new tab('.goods_activity_tab .title a', '.goods_activity_tab .content');
			//首页section4 右侧活动底部小轮播 幻灯片切换加定时

			new slider_tab({
				circle: '.goods_activity_banner ol li',
				movebox: '.goods_activity_banner ul',
				movechild: '.goods_activity_banner ul li',
				left: '.goods_activity_banner .left',
				right: '.goods_activity_banner .right',
				bannerbox: '.goods_activity_banner',
			});

			//section4 商品轮播 -小轮播箭头
			function s_banner() {
				this.banner = $('.section_4 .s_banner')
				this.uls = $('.section_4 .s_banner ul')
				this.left = $('.section_4 .s_banner .left')
				this.right = $('.section_4 .s_banner .right')
				this.num = 0;
				this.hover();
				this.left_click();
				this.right_click();

			}
			s_banner.prototype = {
				hover: function() {
					var that = this
					var banner_timer = setInterval(this.timer_tab, 1500)
					this.banner.hover(function(ev) {
						that.left.animate({
							left: 0
						})
						that.right.animate({
							right: 0
						})
						clearInterval(banner_timer)
					}, function() {
						that.left.animate({
							left: -46
						})
						that.right.animate({
							right: -46
						})
						banner_timer = setInterval(that.timer_tab, 1500)
					})

				},
				timer_tab: function() {
					this.num++
						if(this.num % 2 == 0) {
							this.num = 0
						} else
					if(this.num % 2 != 0) {
						this.num = 1
					}
					$('.section_4 .s_banner ul').eq(this.num).animate({
						opacity: 1
					}).siblings('.s_banner ul').animate({
						opacity: 0
					})

				},
				tab: function() {
					if(this.num % 2 == 0) {
						this.num = 0
					} else
					if(this.num % 2 != 0) {
						this.num = 1
					}
					$('.section_4 .s_banner ul').eq(this.num).animate({
						opacity: 1
					}).siblings('.s_banner ul').animate({
						opacity: 0
					})
				},
				left_click: function() {
					var that = this
					this.left.on('click', function() {
						that.num--
							that.tab()
					})

				},
				right_click: function() {
					var that = this
					this.right.on('click', function() {
						that.num++
							that.tab()
					})

				}
			}
			new s_banner()
			//首页section5 秒杀 倒计时
			function timer() {
				this.span = $('#index_section .section_5 .seckill .timer span')
				this.min = $('#index_section .section_5 .seckill .timer .min')
				this.sec = $('#index_section .section_5 .seckill .timer .sec')
				this.counts = $('#index_section .section_5 .seckill .activity a')
				this.count_timer()
			}
			timer.prototype = {
				count_down: function() {
					var current = new Date()
					var current_year = current.getFullYear()
					var current_month = current.getMonth()
					var current_date = current.getDate()
					var eighty = new Date(current_year + '-' + (current_month + 1) + '-' + current_date + ' 20:00:0')
					var sixteen = new Date(current_year + '-' + (current_month + 1) + '-' + current_date + ' 16:00:0')
					var twelve = new Date(current_year + '-' + (current_month + 1) + '-' + current_date + ' 12:00:0')
					var ten = new Date(current_year + '-' + (current_month + 1) + '-' + current_date + ' 10:00:0')
					var zero = new Date(current_year + '-' + (current_month + 1) + '-' + (current_date + 1) + ' 00:00:0')
					var arr = [ten - current, twelve - current, sixteen - current, eighty - current, zero - current]
					var newarr = arr.filter(function(num, index) {
						return num >= 0
					})
					var index = 0
					for(var i = 0; i < arr.length; i++) {
						if(arr[i] == newarr[0]) {
							index = i
						}
					}
					this.counts.removeClass('active')
					this.counts.eq(index).addClass('active')
					var time = parseInt(newarr[0] / 1000)
					this.span.eq(0).html(this.double(parseInt((time / 3600) % 24)))
					this.span.eq(1).html(this.double(parseInt((time / 60) % 60)))
					this.span.eq(2).html(this.double(time % 60))

				},
				count_timer: function() {
					var that = this
					this.count_down()
					setInterval(function() {
						that.count_down()
					}, 1000)
				},
				double: function(num) {
					return num < 10 ? '0' + num : num
				}
			}
			new timer()

			//首页section5 秒杀厂商周切换

			new tab('.firm_week_top ul li', '.firm_week .firm_week_list')

			//首页section7 图书电子书网络文学 左侧tab切换大

			new tab('.section_7 .tab_top ul li', '.section_7 .books_l_bottom .right')
			//首页section7 图书电子书网络文学 左侧幻灯片切换5个

			new slider_tab({
				circle: '.section_7 .books_l_bottom .banner1 ol li',
				movebox: '.section_7 .books_l_bottom .banner1 ul',
				movechild: '.section_7 .books_l_bottom .banner1 ul li',
				left: '.section_7 .books_l_bottom .banner1 .book_left',
				right: '.section_7 .books_l_bottom .banner1 .book_right',
				bannerbox: '.section_7 .books_l_bottom .banner1',
			});

			new slider_tab({
				circle: '.section_7 .books_l_bottom .banner2 ol li',
				movebox: '.section_7 .books_l_bottom .banner2 ul',
				movechild: '.section_7 .books_l_bottom .banner2 ul li',
				left: '.section_7 .books_l_bottom .banner2 .book_left',
				right: '.section_7 .books_l_bottom .banner2 .book_right',
				bannerbox: '.section_7 .books_l_bottom .banner2',
			});
			new slider_tab({
				circle: '.section_7 .books_l_bottom .banner3 ol li',
				movebox: '.section_7 .books_l_bottom .banner3 ul',
				movechild: '.section_7 .books_l_bottom .banner3 ul li',
				left: '.section_7 .books_l_bottom .banner3 .book_left',
				right: '.section_7 .books_l_bottom .banner3 .book_right',
				bannerbox: '.section_7 .books_l_bottom .banner3',
			});
			new slider_tab({
				circle: '.section_7 .books_l_bottom .banner4 ol li',
				movebox: '.section_7 .books_l_bottom .banner4 ul',
				movechild: '.section_7 .books_l_bottom .banner4 ul li',
				left: '.section_7 .books_l_bottom .banner4 .book_left',
				right: '.section_7 .books_l_bottom .banner4 .book_right',
				bannerbox: '.section_7 .books_l_bottom .banner4',
			});
			new slider_tab({
				circle: '.section_7 .books_l_bottom .banner5 ol li',
				movebox: '.section_7 .books_l_bottom .banner5 ul',
				movechild: '.section_7 .books_l_bottom .banner5 ul li',
				left: '.section_7 .books_l_bottom .banner5 .book_left',
				right: '.section_7 .books_l_bottom .banner5 .book_right',
				bannerbox: '.section_7 .books_l_bottom .banner5',
			});

			//首页section7 图书电子书网络文学右侧 tab切换小

			new tab('.section_7 .b_r_top a', '.section_7 .b_r_bottom>div')

			//首页section7 图书电子书网络文学右侧内容切换

			function show_hide() {
				this.box = $('#index_section .section_7 .b_r_bottom li')
				this.details1 = $('.section_7 .b_r_bottom .tab_1 .details .num')
				this.details2 = $('.section_7 .b_r_bottom .tab_2 .details .num')
				this.abstract1 = $('.section_7 .b_r_bottom .tab_1 .abstract .num')
				this.abstract2 = $('.section_7 .b_r_bottom .tab_2 .abstract .num')
				this.num = $('.section_7 .b_r_bottom .num')
				this.over()
			}
			show_hide.prototype = {
				over: function() {
					var that = this
					this.details1.eq(0).css({
						color: '#ff3228',
						fontWeight: 'bold'
					})
					this.details1.eq(1).css({
						color: '#ff3228'
					})
					this.details1.eq(2).css({
						color: '#ff3228'
					})
					this.details2.eq(0).css({
						color: '#ff3228',
						fontWeight: 'bold'
					})
					this.details2.eq(1).css({
						color: '#ff3228'
					})
					this.details2.eq(2).css({
						color: '#ff3228'
					})
					this.abstract1.eq(0).css({
						color: '#ff3228',
						fontWeight: 'bold'
					})
					this.abstract1.eq(1).css({
						color: '#ff3228'
					})
					this.abstract1.eq(2).css({
						color: '#ff3228'
					})
					this.abstract2.eq(0).css({
						color: '#ff3228',
						fontWeight: 'bold'
					})
					this.abstract2.eq(1).css({
						color: '#ff3228'
					})
					this.abstract2.eq(2).css({
						color: '#ff3228'
					})
					this.details1.each(function(i) {
						$(this).html(i + 1)
					})
					this.details2.each(function(i) {
						$(this).html(i + 1)
					})
					this.abstract1.each(function(i) {
						$(this).html(i + 1)
					})
					this.abstract2.each(function(i) {
						$(this).html(i + 1)
					})
					this.box.on('mouseover', function() {
						$(this).addClass('active').siblings('.section_7 .b_r_bottom li').removeClass('active')
					})
				}
			}
			new show_hide();

			//首页section8 服装tab切换大

			new tab('.section_8 .tab_top ul li', '.section_8 .clothing_mid .right')

			//楼梯
			function sidebar() {
				this.sidebar = $('#index_sidebar_left')
				this.sidebar_li = $('#index_sidebar_left li')
				this.bTop = $('#index_sidebar_right .bottom .back_top')
				this.a = $('#index_sidebar_right .animate')
				this.scroll();
				this.click();
				this.hover();
			}
			sidebar.prototype = {
				scroll: function() {
					var that = this
					var $top = $(window).scrollTop()
					var stop = true
					if($top >= $('.section_4').offset().top && $top + $(window).height() <= $('#footer').offset().top) {
						that.sidebar.css({
							opacity: 1,
							bottom: 30
						})
						this.sidebar_li.css({
							margin: '0 0',
						})
					} else {

						that.sidebar.css({
							opacity: 0,
							bottom: 5
						})
						this.sidebar_li.css({
							margin: '5 0',
						})
					}
					$(window).on('scroll', function() {
						$top = $(window).scrollTop()

						if($top >= $('.section_4').offset().top && $top + $(window).height() <= $('#footer').offset().top) {
							if(stop) {
								stop = false
								that.sidebar.animate({
									opacity: 1,
									bottom: 30
								})
								that.sidebar_li.animate({
									margin: '0  0',
								})
							}

						} else {
							if(!stop) {
								stop = true
								that.sidebar.animate({
									opacity: 0,
									bottom: 5
								})
								that.sidebar_li.animate({
									margin: '5 0',
								})
							}

						}
						that.sidebar_li.each(function() {
							if($top > $('.section_' + ($(this).index() + 8)).offset().top - ($(window).height()) / 2) {

								$(this).addClass('on').siblings('#index_sidebar_left li').removeClass('on')

							} else {
								$(this).removeClass('on')
							}

						})

					})

				},
				click: function() {
					this.sidebar_li.on('click', function() {

						$(this).addClass('on').siblings('#index_sidebar_left li').removeClass('on')
						$('html,body').animate({
							scrollTop: $('.section_' + ($(this).index() + 8)).offset().top,
						})

					})

					this.bTop.on('click', function() {
						$('html,body').animate({
							scrollTop: 0,
						})
					})

				},
				hover: function() {
					this.a.hover(function() {
						$(this).children('span').animate({
							left: -79
						}, 400)
					}, function() {
						$(this).children('span').animate({
							left: 38
						}, 1)
					})
				}

			}

			new sidebar();

			//section_12 阴影特效
			function shadow() {
				this.box = $('#index_section .section_12 ul li')
				this.hover()
			}
			shadow.prototype = {
				hover: function() {
					this.box.hover(function() {
						$(this).addClass('hover').siblings('.section_12 ul li').removeClass('hover')
					}, function() {
						$(this).removeClass('hover')
					})
				}
			}
			new shadow()

			//section_12 获取数据库数据
			function ajax() {
				this.pica = $('#index_section .section_12 ul li>a');
				this.pics = $('#index_section .section_12 ul li img');
				this.titles = $('#index_section .section_12 ul li p a')
				this.prices = $('#index_section .section_12 ul li .price span')
				this.ul = $('#index_section .section_12 ul');
				this.conn();

			}
			ajax.prototype = {
				conn: function() {
					var that = this
					$.ajax({
						url: 'http://10.31.155.148/dangdang--/php/index.php',
						dataType: 'json',
					}).done(function(data) {
						var str = ''
						$.each(data, function(index, obj) {
							str += '<li><a target="_blank" href="details.html?s_id=' + obj.s_id + '"><img class="lazy" width="190px" height="190px" data-original="' + obj.urls.split(',')[0] + '" alt="" /></a><p class="name"><a target="_blank" href="details.html?s_id=' + obj.s_id + '">' + obj.title + '</a></p><p class="price">￥<span>' + obj.price + '</span></p></li>'

						})
						that.ul.html(str)

						require(['jqlzload'], function() {
							$(function() {
								$("img.lazy").lazyload({
									effect: "fadeIn"
								});
							});

						})

					})
				}

			}

			new ajax();
		})

	})

})