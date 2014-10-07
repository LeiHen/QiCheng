// JavaScript Document


/**
* @name		:scrollImg
* @author	:Nice
* @dependent:焦点图轮播
* 	参数 animateTime 过渡动画时间(ms)
* 		 time        切换时间(ms)
*/
function scrollImg(animateTime,time){
	var id=document.getElementById('scrollImgs');
	var wrap=$('#scrollImgs .wrap')
	var imgS=$('#scrollImgs .wrap .imgs');
	var imgSLi=$('#scrollImgs .wrap .imgss li');

	var nav=$("#scrollImgs .banner_nav li");
	var navA=$("#scrollImgs .banner_nav li a");

	// var imgSL=$('#scrollImgs .wrap .imgs').css('left');

	GLOBAL.namespace("BANNER.MIAN");
	GLOBAL.BANNER.MIAN.l=0;

	var obj={
		e:navA,
		img:imgS,
		time:animateTime
	}
	
	function navBtn(event){
		var i=event.data.e.index(this);
		GLOBAL.BANNER.MIAN.l=i;
		
		event.data.img.animate({
			left: -i*100+'%'
		},event.data.time);

		event.data.e.removeClass('hover');
		$(this).addClass('hover');

		return false;
	}


	function delay(e,n,time){
		var i=GLOBAL.BANNER.MIAN.l=GLOBAL.BANNER.MIAN.l+1;

		if (i>=3) {
			i=GLOBAL.BANNER.MIAN.l=0;
		};

		e.animate({
			left: -i*100+'%'
		},time)

		n.find("a").removeClass('hover');
		$(n[i]).find("a").addClass('hover');
	}

	navA.click(obj,navBtn);
	setInterval(function(){delay(imgS,nav,animateTime)},time)
}

/* @end **/


/**
* @name		:clearTxt
* @author	:Nice
* @dependent:文本清空
*/
function (){
	
}
/* @end **/






/**
* @name		:clearTxt
* @author	:Nice
* @dependent:文本清空
*/

/* @end **/