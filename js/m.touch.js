// 搜索框触摸切换
$(function(){
	$('div.h_search_box').tap(function(){
		var $body = $(this).parents('body');
		$body.find('header.head_index, div.main_container, footer').hide(0);
		$body.find('div.search_input_con').show(0);
		$body.find('div.search_input_con form.h_search_form input').trigger('click').focus();
	});
	$('div.search_input_con a.search_input_close').on('touchend', function(){
		var $body = $(this).parents('body');
		$body.find('div.search_input_con').hide(0);
		$body.find('header.head_index, div.main_container, footer').show(0);
	});
	//清除搜索框文本
	$('div.search_input_box span.input_clean').tap(function(){
		$(this).parents().find('input').val('');
	})
})



























