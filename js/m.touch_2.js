

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
//私人定制页
	//私人定制页获取验证码
	var costom_form_get_code = true;
	$('.costom_form button.get_code').tap(function(){

		var $this = $(this);
		var Rex_phone = /^1[34578][\d]{9}$/;
		var $box = $(this).parents('.form_box');
		var phone = $box.find('input.phone').val();
		if (costom_form_get_code) {
			if (phone == '' || phone.length == 0) { 
					$box.find('p.phone_error_text').html('请输入手机号码').show();
				 }else if (!Rex_phone.test(phone)){
				 	$box.find('p.phone_error_text').html('您输入的手机号码有误').show();
				 }else {
				 	costom_form_get_code = false;
				 	$.ajax({
						cache : true,
						type : "POST",
						url : "",
						data : "",
						async : false,
						dataType:"json",
						success: function(data) {
							car_detail_code = false;
							$box.find('p.phone_error_text').html("发送成功").show();
							var seconds = 60;
							 costom_waiting = setInterval(function(){
								seconds--;
								$this.html('重新发送（' + seconds + '）');
								if (seconds <= 0) { 
									clearInterval(costom_waiting);
									$this.html('获取验证码');
									costom_form_get_code = true;
									 }
							}, 1000)
						}
					})	
				 }
		}
	});
	//私人定制页表单提交
	$('.costom_form button.custom_commit').tap(function(){
		var $this = $(this);
		var Rex_phone = /^1[34578][\d]{9}$/;
		var $box = $(this).parents('.custom_inner');
		var phone = $box.find('input.phone').val();
		if (phone == '' || phone.length == 0) { 
			$box.find('p.phone_error_text').html('请输入手机号码').show();
		 }else if (!Rex_phone.test(phone)){
		 	$box.find('p.phone_error_text').html('您输入的手机号码有误').show();
		 }else{
		 	//判断验证码是否验证成功
		 	var form_arr = {};
		 	$box.find('input, textarea, select').each(function(index, element){
		 		var name = $(element).attr('name');
		 		form_arr[name] = $(element).val();
		 	});
		 	$.ajax({
				cache : true,
				type : "POST",
				url : "",
				data : form_arr,
				async : false,
				dataType:"json",
				success: function(data) {
					$box.find('p.phone_error_text').hide();
					$box.find('.custom_form_con').hide();
					$box.find('.ask_box_success').show();
				}
			})	
		 }
	})
	//私人定制页表单提交成功返回
	$('.custom_inner a.return').tap(function(){
		clearInterval(costom_waiting);
		costom_form_get_code = true;
		$('button.get_code').html('获取验证码');
		$('.custom_inner .custom_form_con').show();
		$('.custom_inner .ask_box_success').hide();

	})
})
