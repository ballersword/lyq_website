$(function(){

/* ==================== banner 切换  ======================= */
	$(".arrow_r").click(function() {
		$(".roll").stop().animate({
			left: "-1024px"
		}, 1000, function() {
			$(".roll .banner_zone:eq(0)").insertAfter($(".roll .banner_zone:last"));
			$(".roll").css("left", "0");
		});
	});
	$(".arrow_l").click(function() {
		var $left = $(".roll .banner_zone:last").clone(true);
		$left.insertBefore($(".roll .banner_zone:eq(0)"));
		$left.css({
			positon: "absolute",
			left: "50%",
			marginLeft: "-1024px"
		});
		$(".roll").stop().animate({
			left: "1024px"
		}, 1000, function() {
			$(".roll .banner_zone:last").insertBefore($(".roll .banner_zone:eq(0)"));
			$(".roll").css("left", "0");
			$left.remove();
		});
	});
	
/* ==================== 手风琴  ======================= */
	$(".mirror_display p").hover(function() {
		$(".mirror_display p").stop().animate({
			width: "116px",
			opacity: "0.5"
		}, 500);
		$(this).stop().animate({
			width: "650px",
			opacity: "1"
		}, 500);
		$(this).find("span").stop().animate({
			opacity: "1"
		}, 1000);
	}, function() {
		$(".mirror_display p").stop().animate({
			width: "223px",
			opacity: "0.8"
		}, 500);
		$(".mirror_display p span").stop().animate({
			opacity: "0"
		}, 500);
	});
	

/* ==================== 链接滚动位置   ======================= */
$(".map_1").click(function(){
	$("html,body").animate({scrollTop:1675},1000);
});
$(".map_2").click(function(){
	$("html,body").animate({scrollTop:3222},1000);
});	
$(".map_3").click(function(){
	$("html,body").animate({scrollTop:4774},1000);
});	
$(".map_4").click(function(){
	$("html,body").animate({scrollTop:6325},1000);
});	
$(".map_5").click(function(){
	$("html,body").animate({scrollTop:7875},1000);
});	
$(".map_6").click(function(){
	$("html,body").animate({scrollTop:9424},1000);
});	

/* ==================== info 遮罩   ======================= */

$(".zone").each(function(i){
	
	$(".zone:eq("+i+") .info_btn").click(function(){
		$(".zone:eq("+i+") .info").animate({right:0},500);
		$(".zone:eq("+i+") .big_title").animate({opacity:0.6},500);
	});
	$(".zone:eq("+i+") .info_close").click(function(){
		$(".zone:eq("+i+") .info").animate({right:"-449px"},500);
		$(".zone:eq("+i+") .big_title").animate({opacity:1},500);
	});
	
});

/* ==================== 首页 遮罩   ======================= */


$(".enter,.mask_btn").click(function(){
	$("#mask_layer").fadeOut(500);
	$("#container").css("filter","");
	window.localStorage.setItem("firstTime","yes");
	$("#music_btn").css({left:"26px",marginLeft:"0px",top:"26px"});
});

$(".mask_enter").click(function(){
	$("#mask_layer").fadeIn(500);
	$("#container").css("filter","blur(5px)");
	$("#music_btn").css({left:"50%",marginLeft:"532px",top:"121px"});
});

$("#container").css("filter","blur(5px)");
var fTime = window.localStorage.getItem("firstTime");
if(fTime=="yes"){
	$("#mask_layer").hide();
	$("#container").css("filter","");
}
// ========== 二级页box特效
$(".box").each(function(i){
	var oWidth = $(".box:eq("+i+") .box_img img").width();
	var oHeight = $(".box:eq("+i+") .box_img img").height();
	$(".box:eq("+i+") .box_img").css({width:oWidth,height:oHeight});
	$(".box:eq("+i+") .box_img img").css({top:"50%",left:"50%",marginLeft:-(oWidth/2),marginTop:-(oHeight/2)});
	$(".box:eq("+i+")").hover(function(){
	$(".box:eq("+i+") .box_tt h2").stop().animate({opacity:"1"},1000);
	$(".box:eq("+i+") .box_img img").stop().animate({width:(oWidth+60),height:(oHeight+60),marginLeft:-((oWidth+60)/2),marginTop:-((oHeight+60)/2)},1000);
	$(".box:eq("+i+") .box_img p").css("boxShadow","-5px -5px 20px #333 inset");
	$(".box:eq("+i+")").css("boxShadow","1px 5px 20px #666");
	
},function(){
	$(".box:eq("+i+") .box_tt h2").stop().animate({opacity:"0.5"},1000);
	$(".box:eq("+i+") .box_img img").stop().animate({width:oWidth,height:oHeight,marginLeft:-(oWidth/2),marginTop:-(oHeight/2)},1000);
	$(".box:eq("+i+") .box_img p").css("boxShadow","0 0 0px #333 inset");
	$(".box").css("boxShadow","1px 5px 20px #ccc");
});

});
// ========== 导航栏二维码
$(".wechat").hover(function(){
	$(".wechat_img").fadeIn();
},function(){
		$(".wechat_img").fadeOut();
	
});
// ========== 背景音乐
var $music = $("#music"); /* jq对象转换 dom 对象，用于调用多媒体方法 */
var pauseMark = true;
$("#music_btn").click(function(){
	if(pauseMark){
    $(this).removeClass("music_on").addClass("music_off");
	$music[0].pause();
	pauseMark = false;
	}
	else{
	$(this).removeClass("music_off").addClass("music_on");
	$music[0].play();
	pauseMark = true;
	}
});
// ========== 圆角变化
//$(".map_top a").each(function(i){
//	$(".map_top a:eq("+i+")").hover(function(){
//		$(".map_top a:eq("+i+")").stop(false,true).animate({width:"150px",height:"150px",borderRadius:"78px"},500,function(){
//			$(".map_top a:eq("+i+")").css({color:"#fff",overflow:"visible"})		
//		});
//		$(".map_top a:not(:eq("+i+"))").stop(false,true).animate({marginLeft:"33px",marginRight:"33px"},500);
//	},function(){
//		$(".map_top a:eq("+i+")").stop(false,true).animate({width:"100px",height:"100px",borderRadius:"0px"},500,function(){
//			$(".map_top a:eq("+i+")").css({color:"#666",overflow:"visible"})
//		});
//		$(".map_top a:not(:eq("+i+"))").stop(false,true).animate({marginLeft:"38px",marginRight:"38px"},500);
//	});
//});


//$(".map_top dt").each(function(i){
//	$(".map_top dt:eq("+i+")").hover(function(){
//		$(".map_top dt:eq("+i+")").stop().animate({width:"150px",height:"150px"},500);
//		$(".map_top dt:not(:eq("+i+"))").stop().animate({marginLeft:"33px",marginRight:"33px"},500);
//	},function(){
//		$(".map_top dt:eq("+i+")").stop().animate({width:"100px",height:"100px"},500);
//		$(".map_top dt:not(:eq("+i+"))").stop().animate({marginLeft:"38px",marginRight:"38px"},500);
//	});
//});

	$(".map_top dl").hover(function(){
		$(".map_top dl").stop().animate({width:"132px",marginLeft:"14px",marginRight:"14px"},500);
		$(".map_top dl dt").stop().animate({width:"100px",height:"100px",marginLeft:"-56px"},500);
		$(".map_top dl dd").stop().animate({width:"132px"},500);
		$(this).stop().animate({width:"182px",marginLeft:"14px",marginRight:"14px"},500);
		$(this).find("dt").stop().animate({width:"150px",height:"150px",marginLeft:"-81px"},500);
		$(this).find("dd").stop().animate({width:"182px"},500,function(){
			$(this).find("dd").css("color","#000");
		});
	},function(){
		$(".map_top dl").stop().animate({width:"132px",marginLeft:"19px",marginRight:"19px"},500);
		$(".map_top dl dt").stop().animate({width:"100px",height:"100px",marginLeft:"-56px"},500);
		$(".map_top dl dd").stop().animate({width:"132px"},500,function(){
			$(this).find("dd").css("color","#666");
		});
	});

// ========== 获取当前时间

var mydate = new Date();
var myMonth = mydate.getMonth()+1;
var myDate = mydate.getDate();
$(".title_layer b").text(myMonth);
$(".title_layer samp").text(myDate);

// ========== 小圆点
$(".switch_zone a").each(function(i){
	$(".switch_zone a:eq("+i+")").click(function(){
		$(this).animate({width:"9px",opacity:"1"},500);
		$(".switch_zone a:eq("+(i+1)+"),.switch_zone a:eq("+(i-1)+")").animate({width:"29px",opacity:"0.8"},500);
		$(".switch_zone a:eq("+(i+2)+"),.switch_zone a:eq("+(i-2)+")").animate({width:"29px",opacity:"0.6"},500);
		$(".switch_zone a:eq("+(i+3)+"),.switch_zone a:eq("+(i-3)+")").animate({width:"29px",opacity:"0.4"},500);
		$(".switch_zone a:eq("+(i+4)+"),.switch_zone a:eq("+(i-4)+")").animate({width:"29px",opacity:"0.2"},500);
		$(".switch_zone a:eq("+(i+5)+"),.switch_zone a:eq("+(i-5)+")").animate({width:"29px",opacity:"0.1"},500);
		$(".banner_zone:eq(0) img:not(:eq("+i+")),.banner_zone:eq(1) img:not(:eq("+i+")),.banner_zone:eq(2) img:not(:eq("+i+"))").animate({opacity:"0"},500);
		$(".banner_zone:eq(0) img:eq("+i+"),.banner_zone:eq(1) img:eq("+i+"),.banner_zone:eq(2) img:eq("+i+")").animate({opacity:"1"},500);
		//$(".mirror_mask:eq(0) img:eq("+i+"),.mirror_mask:eq(1) img:eq("+i+")").animate({width:"1494px",height:"859px"},500);
		//$(".mirror_mask:eq(0) img:not(:eq("+i+"),.mirror_mask:eq(1) img:not(:eq("+i+")").animate({width:"1024px",height:"588px"},500);
	});
});

// ========== 流布局
				var $container = $(".m_zone");
				$container.masonry({
					itemSelector: ".box",
					gutterWidth: 60, 
					isAnimated: true
				});


});
