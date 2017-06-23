// 搜索框触摸切换
$(function(){
 //首页	
	$('div.h_search_box').tap(function(){
		var $body = $(this).parents('body');
		$body.find('header.head_index, div.main_container, footer').hide();
		$body.find('div.search_input_con').show();
		$body.find('div.search_input_con form.h_search_form input').trigger('click').focus();
	});
	$('div.search_input_con a.search_input_close').doubleTap(function(){
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
	// 价格筛选、排序方式
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
	//更多筛选弹出
	$('.filter_nav a.filter_more').tap(function(){
		$('div.mask').hide();//遮罩隐藏
		$('.hidden_part').hide();
		$('.filter_more').css({'display':'block'});
	})
	//更多筛选关闭
	$('a.filter_more_close').tap(function(){
		$('.filter_more').hide();
		$('.hidden_part').show();
		var bool = $('nav>a.filter_price, nav>a.filter_sort').hasClass('current');
		if (bool) { $('div.mask').show(); }	
		$('.filter_nav a.filter_more').css({'display':'block'});
	});
  //更多筛选选中、取消
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
	// $('li.brand_details_item>a').tap(function(){
	// 	$(this).parents('div.filter_brand').find('aside.brand_series_con').hide();
	// 	$(this).parent().find('aside.brand_series_con').show();
	// });
	//子系列右滑动隐藏
	// $('aside.brand_series_con').on("swipeRight", function(){
	// 	$('aside.brand_series_con').hide();
	// });

//车辆详情页
	//配置参数进入	
	$('div._info_base_more').tap(function(){
		$('.hidden_part').hide();
		$('div.car_parameter').show();
	})
	//配置参数退出
	$('div.car_parameter_head>a').tap(function(){
		$(this).parents('div.car_parameter').hide();
		$('.hidden_part').show();
	})
	$('dd.filter_set_price input').on('input change', function(){
		var val = $(this).val();
		    val = val.replace(/\D/g, '');
		$(this).val(val);    
	});
	//自定义价格
	$('.filter_set_price button').tap(function(){
		var $filter_set_price = $('dd.filter_set_price');
		var min = $filter_set_price.find('div.input_1>input').val();
		var max = $filter_set_price.find('div.input_2>input').val();
		var arr = [];
		if (min == '' && max == '') {
			$filter_set_price.parent().find('p.error_text').html('输入价格有误').show();
		 	return false;
		 }
		if (min == '') { min = 0; }
		if (max == '') { max = 999; }
		if (parseInt(min) > parseInt(max)) {
			var place = min;
				min = max;
				max = place;
		}
		arr[0] = min;
		arr[1] = max;

	});
	//车辆详情页弹出框开启
	$('div._l_price_btn').tap(function(){
		var index = $(this).index();
		$('div.car_detail_mask').show();
		$('div.ask_box').eq(index).show();
		$('html').css({'height': '100%'});
		$('body').addClass('body_overflow');
	})
	//车辆详情页弹出框关闭
	$('div.car_detail_mask, button.ask_box_close').tap(function(){
		$('html').css({'height': 'auto'});
		$('body').removeClass('body_overflow');
		$('div.ask_box').hide();
		$('div.car_detail_mask').hide();
	});
	//获取验证码
	var car_detail_code = true;
	$('button.sell_get_code').tap(function(){
		if ( car_detail_code ) {
				var	$box = $(this).parents('div.ask_box');
				var Rex_phone = /^1[34578][\d]{9}/; 
				var phone_val = $box.find('input.phone').val();
				var $this = $(this);
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
						success: function(data) {
							car_detail_code = false;
							$box.find('p.error_text').html("发送成功").show();
							var seconds = 60;
							var waiting = setInterval(function(){
								seconds--;
								$this.html('重新发送（' + seconds + '）');
								if (seconds <= 0) { 
									clearInterval(waiting);
									$this.html('获取验证码');
									car_detail_code = true;
									 }
							}, 1000)
						}
					})	
				}
			}		
	})
	//弹出框表单验证
	$('button.l_price_commit').tap(function(){
		var RE_phone = /^1[34578][\d]{9}/;
		var Reg_ask_price =/^(([0-9]{1,3})|([0]\.\d{1,3}|[1-9][0-9]*\.\d{1,3}))$/;				
						//不超过999万，最多三位小数
		var $box = $(this).parents('div.ask_box');
		var phone = $box.find('input.phone').val();
		if ( RE_phone.test(phone) ) {//手机号验证通过
			//验证验证码
			var l_price = $box.find('input.l_price').val();
			if ( RE_l_price.test(l_price) ) {//价格验证通过
					$.ajax({
					 		cache: true,
					 		type: 'post',
					 		url: '',
					 		data: '',
					 		async: false,
					 		error: function(request) {
								alert("Connection error");
								},
							success: function(){
								$('p.error_text').hide();
								$('div.ask_box_inner').hide();
								$('div.ask_box_success').show();
							}	
					 	})
			}else{
				$box.find('p.error_text').html('输入价格有误').show();
			}
		}else {
			$box.find('p.error_text').html('手机号输入有误').show();
		}
	})
	
})



























