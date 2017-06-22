

$(function(){
// 我要卖车页
	//我要卖车表单提交
	$('div.sale_sub>button').tap(function(){
		var phone = $(this).parent().find('input').val();
		var RE_phone = /^1[34578][\d]{9}/;
		if (phone == '') {
			$(this).parents('.sale_car_bg').find('p.error_text').html('请输入手机号').show();
		}else if(!RE_phone.test(phone)){
			$(this).parents('.sale_car_bg').find('p.error_text').html('输入手机号有误').show();
		}else{
			$.ajax({
				cache : true,
				type : "POST",
				url : "",
				data : "",
				async : false,
				dataType:"json",
				success: function(data) {
					$('div.sale_car_seccess').show();
					$('.sale_car_mask').show();
				}
			})	
		}
	});
	//我要卖车表单提交成功关闭
	$('div.sale_car_mask').tap(function(){
		$('div.sale_car_seccess').hide();
		$(this).hide();
	})
	//卖车小知识弹出
	$('div._car_knowledge_tit').tap(function(){
		$(this).parent().find('p._car_knowledge_text').toggle();
		if($(this).find('i').hasClass('icon-angle-down')){
			$(this).find('i').removeClass().addClass('icon-angle-up').css({'color':'#FE8C8B'});
		}else { 
			$(this).find('i').removeClass().addClass('icon-angle-down').css({'color':'#666'});
		}
	})
})
