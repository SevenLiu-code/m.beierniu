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
	function car_d_getCode(mark, obj){//车辆详情页获取页验证码验证函数
		if ( mark ) {
				var	$box = $(obj).parents('div.ask_box');
				var Rex_phone = /^1[34578][\d]{9}/; 
				var phone_val = $box.find('input.phone').val();


				var $this = $(obj);
				if (phone_val == '') {
					console.log(phone_val);
					$box.find('p.error_text').html("请输入手机号").show();
				}else if( !Rex_phone.test(phone_val) ) {
					$box.find('p.error_text').html("输入手机号有误").show();
				} else {
					//发送验证码
					$.ajax({
						cache : true,
						type : "POST",
						url : "",
						data : "",
						async : false,
						dataType:"json",
						error: function(){
							alert('。。。')
						},
						success : function(data) {
							mark = false;
							var seconds = 60;
							var waiting = setInterval(function(){
								seconds--;
								$this.html('重新发送（' + seconds + '）');
								if (seconds <= 0) { 
									clearInterval(waiting);
									$this.html('获取验证码');
									mark = true;
									 }
							}, 1000)
						}
					})	
				}
			}		
}
  
	