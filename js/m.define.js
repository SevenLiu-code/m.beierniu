	//搜索检测是否为空
	function formCheck(){
		var $form = $('.h_search_form');
		var val = $form.find('input').val();
		if (val == '' || val.length == 0) {
			return false;
		}else { 
			return true;
		}
	}
	// $.fn.seamlessSlide = function (stay, delay){
	// 		/***不需要自动滚动，去掉即可***/
	// 		var that = $(this);
	// 		var mainlist = $(this).find('.mainlist');
	// 		var time = '';
	// 		var linum = mainlist.find('li').length;//图片数量
	// 		var box_w = mainlist.parent().width();
	// 		mainlist.find('li').width( 1 / linum * 100 + "%"  );
	// 		mainlist.css('width', linum * 100 + '%');//ul宽度
	// 		if (linum > 0) {	
	// 				for (var i = 0; i < linum; i++) {
	// 					var indicators = $('<li class="a_dot"></li>');
	// 					that.find(".slide_carousel").append(indicators);
	// 				};
	// 			}else { return false; }
	// 		that.find(".slide_carousel li:eq(0)").addClass("current");//为第一个圆点添加类名
	// 		if (delay) { 
	// 				time = window.setInterval( function(){
	// 				that.find('.mainlist>li').swipeLeft();	
	// 			}, stay);
	// 		}
			
	// 		$(this).find('.mainlist>li').swipeLeft(function(){//左边按钮点击滑动
	// 			if(mainlist.is(':animated')) return false;
	// 				 if(mainlist.find('li').length > 1){
	// 				 	window.clearInterval(time);	//点击生效定时器关闭
	// 					mainlist.animate({left: -w_i}, 300, function(){
	// 						mainlist.find('li').first().appendTo(mainlist);
	// 							$(this).css({'left': 0});
	// 							if (delay) {
	// 								time = window.setInterval(function(){//动画执行完毕开启定时器
	// 								that.find('.mainlist>li').swipeLeft();	
	// 								}, stay);
	// 							}else return;	
	// 					});
	// 				 }
	// 		});
	// 		$(this).find('.mainlist>li').swipeRight(function(){//右边按钮点击滑动
	// 			if(mainlist.is(':animated')) return false;
	// 				if(mainlist.find('li').length > 1){
	// 					window.clearInterval(time);//点击生效定时器关闭
	// 					mainlist.css({'left': -w_i});
	// 					mainlist.find('li').last().prependTo(mainlist);
	// 					mainlist.animate({'left': 0}, 300, function(){
	// 						if (delay) {
	// 								time = window.setInterval(function(){//动画执行完毕开启定时器
	// 								that.find('.mainlist>li').swipeLeft();	
	// 								}, stay);
	// 							}else return;
	// 					});
	// 				}
	// 		}); 
	// 	}
