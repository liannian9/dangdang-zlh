require.config({baseUrl:"https://cdnjs.cloudflare.com/ajax/libs/",paths:{jquery:"jquery/1.12.4/jquery.min",jqcookie:"jquery-cookie/1.4.1/jquery.cookie.min",jqvalidate:"jquery-validate/1.19.0/jquery.validate.min",jqlzload:"jquery.lazyload/1.9.1/jquery.lazyload.min"}}),define("config",function(){}),define("index",["config"],function(){require(["jquery"],function(){$(".index_search").load("search.html"),$(".index_nav").load("nav.html"),$(".tools").load("tools.html"),$("#footer").load("footer.html"),$(function(){function t(t,i){this.minbox=$(t),this.tabbox=$(i),this.over(t,i)}function i(t){this.ols=$(t.circle),this.ul=$(t.movebox),this.uls=$(t.movechild),this.left=$(t.left),this.right=$(t.right),this.banner=$(t.bannerbox),this.width=this.uls.eq(0).outerWidth(),this.num=0,this.stop=!0,this.circle(t),this.left_click(t),this.right_click(t),this.timer(t)}function o(){this.timer()}function n(){this.li=$("#index_section .section_4 .goods_nav li"),this.sub=$("#index_section .section_4 .sub_nav"),this.over()}function s(){this.cir_lis=$(".section_4 .b_banner .circle li"),this.pic_lis=$(".section_4 .b_banner .pic li"),this.banner=$(".section_4 .b_banner"),this.left=$(".section_4 .b_banner .left"),this.right=$(".section_4 .b_banner .right"),this.num=0,this.over_ol(),this.left_click(),this.right_click(),this.b_timer(this.banner)}function e(){this.banner=$(".section_4 .s_banner"),this.uls=$(".section_4 .s_banner ul"),this.left=$(".section_4 .s_banner .left"),this.right=$(".section_4 .s_banner .right"),this.num=0,this.hover(),this.left_click(),this.right_click()}function l(){this.span=$("#index_section .section_5 .seckill .timer span"),this.min=$("#index_section .section_5 .seckill .timer .min"),this.sec=$("#index_section .section_5 .seckill .timer .sec"),this.counts=$("#index_section .section_5 .seckill .activity a"),this.count_timer()}function a(){this.box=$("#index_section .section_7 .b_r_bottom li"),this.details1=$(".section_7 .b_r_bottom .tab_1 .details .num"),this.details2=$(".section_7 .b_r_bottom .tab_2 .details .num"),this.abstract1=$(".section_7 .b_r_bottom .tab_1 .abstract .num"),this.abstract2=$(".section_7 .b_r_bottom .tab_2 .abstract .num"),this.num=$(".section_7 .b_r_bottom .num"),this.over()}function c(){this.sidebar=$("#index_sidebar_left"),this.sidebar_li=$("#index_sidebar_left li"),this.bTop=$("#index_sidebar_right .bottom .back_top"),this.a=$("#index_sidebar_right .animate"),this.scroll(),this.click(),this.hover()}function r(){this.box=$("#index_section .section_12 ul li"),this.hover()}function h(){this.pica=$("#index_section .section_12 ul li>a"),this.pics=$("#index_section .section_12 ul li img"),this.titles=$("#index_section .section_12 ul li p a"),this.prices=$("#index_section .section_12 ul li .price span"),this.ul=$("#index_section .section_12 ul"),this.conn()}require(["jqcookie"],function(){function t(){this.fn()}t.prototype={fn:function(){$.cookie("username")&&($(".welcome .unlogin").hide().siblings().show().children(".user").html($.cookie("username")),$(".welcome .out").on("click",function(){$.cookie("username",null,{expires:-1}),window.location.reload(!0)}),$.cookie("products")?($(".tools_nav a i").text($.cookie("products")),$(".h_search .search .cart i").text($.cookie("products")),$("#index_sidebar_right .top a em").text($.cookie("products"))):($(".tools_nav a i").text(0),$(".h_search .search .cart i").text(0),$("#index_sidebar_right .top a em").text(0)))}},new t}),t.prototype={over:function(t,i){var o=this,n=null;this.minbox.on("mouseover",function(){var s=$(this);n=setInterval(function(){s.addClass("on").siblings(t).removeClass("on"),o.tabbox.eq(s.index(t)).show().siblings(i).hide()},300)}),this.minbox.on("mouseout",function(){clearInterval(n)})}},i.prototype={circle:function(t){var i=this;this.uls.eq(0).clone(!0).appendTo(this.ul),this.uls.eq(this.uls.size()-1).clone(!0).prependTo(this.ul),this.ols.css("cursor","pointer"),this.ul.width($(t.movechild).size()*this.width),this.ul.css({position:"absolute",left:-this.width}),this.ols.on("mouseover",function(){var o=$(this).index(t.circle)+1;$(this).addClass("on").siblings(t.circle).removeClass("on"),i.ul.animate({left:"-"+o*i.width+"px"}),i.num=$(this).index(t.circle)})},left_click:function(t){var i=this;this.left.on("click",function(){i.stop&&(i.num--,i.stop=!1,i.ols.eq(i.num).addClass("on").siblings(t.circle).removeClass("on"),i.num<0&&i.ols.eq(i.ols.size()-1).addClass("on").siblings(t.circle).removeClass("on"),i.tab())})},right_click:function(t){var i=this;this.right.on("click",function(){i.stop&&(i.num++,i.stop=!1,i.ols.eq(i.num).addClass("on").siblings(t.circle).removeClass("on"),i.num>i.ols.size()-1&&i.ols.eq(0).addClass("on").siblings(t.circle).removeClass("on"),i.tab())})},timer:function(t){var i=this,o=setInterval(function(){i.num++,i.ols.eq(i.num).addClass("on").siblings(t.circle).removeClass("on"),i.num>i.ols.size()-1&&i.ols.eq(0).addClass("on").siblings(t.circle).removeClass("on"),i.tab()},2e3);this.banner.hover(function(){clearInterval(o),i.left.show(),i.right.show()},function(){i.left.hide(),i.right.hide(),o=setInterval(function(){i.num++,i.ols.eq(i.num).addClass("on").siblings(t.circle).removeClass("on"),i.num>i.ols.size()-1&&i.ols.eq(0).addClass("on").siblings(t.circle).removeClass("on"),i.tab()},2e3)})},tab:function(t){var i=this;this.ul.stop().animate({left:-(this.num+1)*this.width},200,function(){i.position(),i.stop=!0})},position:function(t){this.num<0?this.num=this.ols.size()-1:this.num>this.ols.size()-1&&(this.num=0),this.ul.css({left:-(this.num+1)*this.width})}},o.prototype={timer:function(){$(".h_ad").height("300"),setTimeout(function(){$(".h_ad").animate({height:200},"slow")},2e3)}},new o,n.prototype={over:function(){var t=this;this.li.hover(function(){$(this).addClass("active").siblings(".goods_nav li").removeClass("active"),t.sub.eq($(this).index(".goods_nav li")).css({display:"block"}).siblings(".sub_nav").css({display:"none"})},function(){$(this).removeClass("active"),t.sub.eq($(this).index(".goods_nav li")).css({display:"none"})}),this.sub.hover(function(){t.li.eq($(this).index(".sub_nav")).addClass("active").siblings(".goods_nav li").removeClass("active"),$(this).css({display:"block"}).siblings(".sub_nav").css({display:"none"})},function(){$(this).css({display:"none"}),t.li.eq($(this).index(".sub_nav")).removeClass("active")})}},new n,s.prototype={b_timer:function(t){var i=this;clearInterval(t.tabtimer),t.tabtimer=setInterval(function(){i.num++,i.num>7&&(i.num=0),i.tab()},2e3),this.banner.hover(function(){clearInterval(t.tabtimer),i.left.animate({left:0}),i.right.animate({right:0})},function(){t.tabtimer=setInterval(function(){i.num++,i.num>7&&(i.num=0),i.tab()},2e3),i.left.animate({left:-46}),i.right.animate({right:-46}),tab_timer=setInterval(i.timer,2e3)})},tab:function(){this.cir_lis.eq(this.num).addClass("bg").siblings("li").removeClass("bg"),this.pic_lis.eq(this.num).animate({opacity:1}).siblings("li").animate({opacity:0})},over_ol:function(){var t=this;this.cir_lis.on("mouseover",function(){$(this).addClass("bg").siblings("li").removeClass("bg"),t.pic_lis.eq($(this).index(".circle li")).animate({opacity:1}).siblings("li").animate({opacity:0}),t.num=$(this).index(".circle li")})},left_click:function(){var t=this;this.left.on("click",function(){t.num--,t.num<0&&(t.num=7),t.tab()})},right_click:function(){var t=this;this.right.on("click",function(){t.num++,t.num>7&&(t.num=0),t.tab()})}},new s,new t(".goods_activity_tab .title a",".goods_activity_tab .content"),new i({circle:".goods_activity_banner ol li",movebox:".goods_activity_banner ul",movechild:".goods_activity_banner ul li",left:".goods_activity_banner .left",right:".goods_activity_banner .right",bannerbox:".goods_activity_banner"}),e.prototype={hover:function(){var t=this,i=setInterval(this.timer_tab,1500);this.banner.hover(function(o){t.left.animate({left:0}),t.right.animate({right:0}),clearInterval(i)},function(){t.left.animate({left:-46}),t.right.animate({right:-46}),i=setInterval(t.timer_tab,1500)})},timer_tab:function(){this.num++,this.num%2==0?this.num=0:this.num%2!=0&&(this.num=1),$(".section_4 .s_banner ul").eq(this.num).animate({opacity:1}).siblings(".s_banner ul").animate({opacity:0})},tab:function(){this.num%2==0?this.num=0:this.num%2!=0&&(this.num=1),$(".section_4 .s_banner ul").eq(this.num).animate({opacity:1}).siblings(".s_banner ul").animate({opacity:0})},left_click:function(){var t=this;this.left.on("click",function(){t.num--,t.tab()})},right_click:function(){var t=this;this.right.on("click",function(){t.num++,t.tab()})}},new e,l.prototype={count_down:function(){for(var t=new Date,i=t.getFullYear(),o=t.getMonth(),n=t.getDate(),s=new Date(i+"-"+(o+1)+"-"+n+" 20:00:0"),e=new Date(i+"-"+(o+1)+"-"+n+" 16:00:0"),l=new Date(i+"-"+(o+1)+"-"+n+" 12:00:0"),a=new Date(i+"-"+(o+1)+"-"+n+" 10:00:0"),c=new Date(i+"-"+(o+1)+"-"+(n+1)+" 00:00:0"),r=[a-t,l-t,e-t,s-t,c-t],h=r.filter(function(t,i){return t>=0}),b=0,_=0;_<r.length;_++)r[_]==h[0]&&(b=_);this.counts.removeClass("active"),this.counts.eq(b).addClass("active");var u=parseInt(h[0]/1e3);this.span.eq(0).html(this.double(parseInt(u/3600%24))),this.span.eq(1).html(this.double(parseInt(u/60%60))),this.span.eq(2).html(this.double(u%60))},count_timer:function(){var t=this;this.count_down(),setInterval(function(){t.count_down()},1e3)},double:function(t){return t<10?"0"+t:t}},new l,new t(".firm_week_top ul li",".firm_week .firm_week_list"),new t(".section_7 .tab_top ul li",".section_7 .books_l_bottom .right"),new i({circle:".section_7 .books_l_bottom .banner1 ol li",movebox:".section_7 .books_l_bottom .banner1 ul",movechild:".section_7 .books_l_bottom .banner1 ul li",left:".section_7 .books_l_bottom .banner1 .book_left",right:".section_7 .books_l_bottom .banner1 .book_right",bannerbox:".section_7 .books_l_bottom .banner1"}),new i({circle:".section_7 .books_l_bottom .banner2 ol li",movebox:".section_7 .books_l_bottom .banner2 ul",movechild:".section_7 .books_l_bottom .banner2 ul li",left:".section_7 .books_l_bottom .banner2 .book_left",right:".section_7 .books_l_bottom .banner2 .book_right",bannerbox:".section_7 .books_l_bottom .banner2"}),new i({circle:".section_7 .books_l_bottom .banner3 ol li",movebox:".section_7 .books_l_bottom .banner3 ul",movechild:".section_7 .books_l_bottom .banner3 ul li",left:".section_7 .books_l_bottom .banner3 .book_left",right:".section_7 .books_l_bottom .banner3 .book_right",bannerbox:".section_7 .books_l_bottom .banner3"}),new i({circle:".section_7 .books_l_bottom .banner4 ol li",movebox:".section_7 .books_l_bottom .banner4 ul",movechild:".section_7 .books_l_bottom .banner4 ul li",left:".section_7 .books_l_bottom .banner4 .book_left",right:".section_7 .books_l_bottom .banner4 .book_right",bannerbox:".section_7 .books_l_bottom .banner4"}),new i({circle:".section_7 .books_l_bottom .banner5 ol li",movebox:".section_7 .books_l_bottom .banner5 ul",movechild:".section_7 .books_l_bottom .banner5 ul li",left:".section_7 .books_l_bottom .banner5 .book_left",right:".section_7 .books_l_bottom .banner5 .book_right",bannerbox:".section_7 .books_l_bottom .banner5"}),new t(".section_7 .b_r_top a",".section_7 .b_r_bottom>div"),a.prototype={over:function(){this.details1.eq(0).css({color:"#ff3228",fontWeight:"bold"}),this.details1.eq(1).css({color:"#ff3228"}),this.details1.eq(2).css({color:"#ff3228"}),this.details2.eq(0).css({color:"#ff3228",fontWeight:"bold"}),this.details2.eq(1).css({color:"#ff3228"}),this.details2.eq(2).css({color:"#ff3228"}),this.abstract1.eq(0).css({color:"#ff3228",fontWeight:"bold"}),this.abstract1.eq(1).css({color:"#ff3228"}),this.abstract1.eq(2).css({color:"#ff3228"}),this.abstract2.eq(0).css({color:"#ff3228",fontWeight:"bold"}),this.abstract2.eq(1).css({color:"#ff3228"}),this.abstract2.eq(2).css({color:"#ff3228"}),this.details1.each(function(t){$(this).html(t+1)}),this.details2.each(function(t){$(this).html(t+1)}),this.abstract1.each(function(t){$(this).html(t+1)}),this.abstract2.each(function(t){$(this).html(t+1)}),this.box.on("mouseover",function(){$(this).addClass("active").siblings(".section_7 .b_r_bottom li").removeClass("active")})}},new a,new t(".section_8 .tab_top ul li",".section_8 .clothing_mid .right"),c.prototype={scroll:function(){var t=this,i=$(window).scrollTop(),o=!0;i>=$(".section_4").offset().top&&i+$(window).height()<=$("#footer").offset().top?(t.sidebar.css({opacity:1,bottom:30}),this.sidebar_li.css({margin:"0 0"})):(t.sidebar.css({opacity:0,bottom:5}),this.sidebar_li.css({margin:"5 0"})),$(window).on("scroll",function(){i=$(window).scrollTop(),i>=$(".section_4").offset().top&&i+$(window).height()<=$("#footer").offset().top?o&&(o=!1,t.sidebar.animate({opacity:1,bottom:30}),t.sidebar_li.animate({margin:"0  0"})):o||(o=!0,t.sidebar.animate({opacity:0,bottom:5}),t.sidebar_li.animate({margin:"5 0"})),t.sidebar_li.each(function(){i>$(".section_"+($(this).index()+8)).offset().top-$(window).height()/2?$(this).addClass("on").siblings("#index_sidebar_left li").removeClass("on"):$(this).removeClass("on")})})},click:function(){this.sidebar_li.on("click",function(){$(this).addClass("on").siblings("#index_sidebar_left li").removeClass("on"),$("html,body").animate({scrollTop:$(".section_"+($(this).index()+8)).offset().top})}),this.bTop.on("click",function(){$("html,body").animate({scrollTop:0})})},hover:function(){this.a.hover(function(){$(this).children("span").animate({left:-79},400)},function(){$(this).children("span").animate({left:38},1)})}},new c,r.prototype={hover:function(){this.box.hover(function(){$(this).addClass("hover").siblings(".section_12 ul li").removeClass("hover")},function(){$(this).removeClass("hover")})}},new r,h.prototype={conn:function(){var t=this;$.ajax({url:"http://10.31.155.148/dangdang--/php/index.php",dataType:"json"}).done(function(i){var o="";$.each(i,function(t,i){o+='<li><a target="_blank" href="details.html?s_id='+i.s_id+'"><img class="lazy" width="190px" height="190px" data-original="'+i.urls.split(",")[0]+'" alt="" /></a><p class="name"><a target="_blank" href="details.html?s_id='+i.s_id+'">'+i.title+'</a></p><p class="price">￥<span>'+i.price+"</span></p></li>"}),t.ul.html(o),require(["jqlzload"],function(){$(function(){$("img.lazy").lazyload({effect:"fadeIn"})})})})}},new h})})});