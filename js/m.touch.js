// 搜索框触摸切换
$(function(){
	$('div.h_search_box').tap(function(){
		var $body = $(this).parents('body');
		$body.find('header.head_index, div.main_container, footer').hide(0);
		$body.find('div.search_input_con').show(0);
		$body.find('div.search_input_con form.h_search_form input').trigger('click').focus();
	});
	$('div.search_input_con a.search_input_close').tap(function(){
		var $body = $(this).parents('body');
		$body.find('div.search_input_con').hide(0);
		$body.find('header.head_index, div.main_container, footer').show(0);
	});
	//清除搜索框文本
	$('div.search_input_box span.input_clean').tap(function(){
		$(this).parents().find('input').val('');
	})

	// 条件筛选页
	// 价格筛选
	$('nav>a.filter_price, nav>a.filter_sort').tap(function(){
		var x = $(this).attr('class').replace('filter_', '');
		$('header.head_index').addClass('head_position');
		$('div.filter').addClass('filter_position');
		$('div.filter_details').removeClass('filter_details_z').show(0);
		$('div.mask').show(0);
		$('nav.filter_nav>a').removeClass('current');
		$(this).addClass('current');
		$(this).find('i').removeClass().addClass('icon-angle-up');
		$('div.filter_' + x + '_con').addClass('filter_details_z');
	})
	$('div.mask').tap(function(){
		$('header.head_index').removeClass('head_position');
		$('div.filter').removeClass('filter_position');
		$(this).hide(0);
		$(this).parents('body').find('.filter_details').hide(0);
		$('nav.filter_nav').find('a.current').removeClass('current');
		$('nav.filter_nav>a>i').removeClass().addClass('icon-angle-down');
	})
})



























