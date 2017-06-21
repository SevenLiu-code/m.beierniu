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
			$('div.mask').hide();//遮罩隐藏
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
	//条件筛选收起
	$('div.mask').tap(function(){
		$('header.head_index').removeClass('head_position');
		$('div.filter').removeClass('filter_position');
		$(this).hide();
		$(this).parents('body').find('.filter_details').hide();
		$('nav.filter_nav').find('a.current').removeClass('current');
		$('nav.filter_nav>a>i').removeClass().addClass('icon-angle-down');
	})
//更多筛选页
	$('div.filter_more .filter_details_list a').tap(function(){
		 if ( $(this).hasClass('active') ){
		 	$(this).removeClass('active');
		 }else {
		 	$(this).parents('.filter_details_list').find('a.active').removeClass('active');
		 	$(this).addClass('active');
		 }
	});
	//重置更多筛选
	$('li.filter_reset').tap(function(){
		$('div.filter_more a.active').removeClass('active');
	});	
	//提交更多筛选
	$('li.filter_found').tap(function(){
		var arry = [];
		$('div.filter_more a.active').each(function(index, element){
			arry.push($(element).attr('data'));
		})
		$.ajax({
			type: 'POST',
			url: '',
			data: arry,
			success: function(data){
    			
  			}
		})
	})
//更多品牌页子系列
	//品牌子系列弹出
	$('li.brand_details_item>a').tap(function(){
		$(this).parents('div.filter_brand').find('aside.brand_series_con').hide();
		$(this).parent().find('aside.brand_series_con').show();
	})
	$('body.filter_brand_body').on("swipeLeft, swipeRight, swipeUp, swipeDown", function(){
		console.log(1);
		$('aside.brand_series_con').hide();
	})
})



























