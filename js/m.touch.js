// 搜索框触摸切换
$(function(){
 //首页	
	$('div.h_search_box').tap(function(){
		var $body = $(this).parents('body');
		$body.find('header.head_index, div.main_container, footer').hide();
		$body.find('div.search_input_con').show();
		$body.find('div.search_input_con form.h_search_form input').trigger('click').focus();
	});
	$('div.search_input_con a.search_input_close').tap(function(){
		var $body = $(this).parents('body');
		$body.find('div.search_input_con').hide();
		$body.find('header.head_index, div.main_container, footer').show();
	});
	//清除搜索框文本
	$('div.search_input_box span.input_clean').tap(function(){
		$(this).parents().find('input').val('');
	});
	// 城市选择
	$('.h_city').tap(function(){
		$('.hidden_part').hide();
		$('.city_select').show();
	});
	//城市选择返回
	$('a.city_select_retrun').tap(function(){
		$(this).parents('.city_select').hide();
		$('.hidden_part').show();
	});
 //条件筛选页
	// 价格筛选
	$('nav>a.filter_price, nav>a.filter_sort').tap(function(){
		 if ($(this).hasClass('current')){//判断当前状态
		 	$('header.head_index').removeClass('head_position');//头部定位
			$('div.filter').removeClass('filter_position');
			$('div.mask').hide();
			$(this).parents('body').find('.filter_details').hide();
			$('nav.filter_nav').find('a.current').removeClass('current');
			$('nav.filter_nav>a>i').removeClass().addClass('icon-angle-down');
		 }else{
		 	$('header.head_index').addClass('head_position');
		 	$('div.filter').addClass('filter_position')
		 	$('div.mask').show();
			$('nav.filter_nav>a').removeClass('current');
			$(this).addClass('current');
			$('nav.filter_nav>a>i.icon-angle-up').removeClass().addClass('icon-angle-down');
			$(this).find('i').removeClass().addClass('icon-angle-up');
			var x =  $(this).attr("class").search('price');
			if ( x == -1 ) { 
				$('div.filter_details').hide().eq(0).show();
			 }else {
			 	$('div.filter_details').hide().eq(1).show();
			 }
			
		 }
	});
	//排序
	// $('nav>a.filter_sort').tap(function(){
	// 	if ( $(this).hasClass('current') ){//判断当前状态
	// 		$('header.head_index').removeClass('head_position');//头部定位
	// 		$('div.filter').removeClass('filter_position');
	// 		$('div.mask').hide();
	// 		$(this).parents('body').find('.filter_details').hide();
	// 		$('nav.filter_nav').find('a.current').removeClass('current');
	// 		$('nav.filter_nav>a>i').removeClass().addClass('icon-angle-down');
	// 	 }else{
	// 		$('header.head_index').addClass('head_position');
	// 	 	$('div.filter').addClass('filter_position')
	// 	 	$('div.mask').show();
	// 		$('nav.filter_nav>a').removeClass('current');
	// 		$(this).addClass('current');
	// 		$('nav.filter_nav>a>i.icon-angle-up').removeClass().addClass('icon-angle-down');
	// 		$(this).find('i').removeClass().addClass('icon-angle-up');
	// 		$('div.filter_details').hide().eq(0).show();
	// 	}	
	// });
	//条件筛选收起
	$('div.mask').tap(function(){
		$('header.head_index').removeClass('head_position');
		$('div.filter').removeClass('filter_position');
		$(this).hide();
		$(this).parents('body').find('.filter_details').hide();
		$('nav.filter_nav').find('a.current').removeClass('current');
		$('nav.filter_nav>a>i').removeClass().addClass('icon-angle-down');
	})
})



























