// 搜索框触摸切换
$(function(){
	$('div.h_search_box').tap(function(){
		var $body = $(this).parents('body');
		$body.find('header.head_index, div.main_container, footer').hide();
		$body.find('div.search_input_con').show();
		$body.find('div.search_input_con form.h_search_form input').focus();
	});
	$('div.search_input_con a.search_input_close').tap(function(){
		var $body = $(this).parents('body');
		$body.find('div.search_input_con').hide();
		$body.find('header.head_index, div.main_container, footer').show();
	});
})



























